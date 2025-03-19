'use client';

import * as React from 'react';
import { classNames, debounce } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusWithin } from '../../hooks/useFocusWithin';
import { useStateWithPrev } from '../../hooks/useStateWithPrev';
import { callMultiple } from '../../lib/callMultiple';
import { useDOM } from '../../lib/dom';
import type { Placement } from '../../lib/floating';
import { defaultFilterFn, type FilterFn } from '../../lib/select';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../lib/warnOnce';
import {
  CustomSelectDropdown,
  type CustomSelectDropdownProps,
} from '../CustomSelectDropdown/CustomSelectDropdown';
import {
  CustomSelectOption,
  type CustomSelectOptionProps,
} from '../CustomSelectOption/CustomSelectOption';
import { DropdownIcon } from '../DropdownIcon/DropdownIcon';
import type { FormFieldProps } from '../FormField/FormField';
import {
  NOT_SELECTED,
  remapFromNativeValueToSelectValue,
  remapFromSelectValueToNativeValue,
} from '../NativeSelect/NativeSelect';
import type {
  NativeSelectProps,
  NativeSelectValue,
  SelectValue,
} from '../NativeSelect/NativeSelect';
import type { SelectType } from '../Select/Select';
import { Footnote } from '../Typography/Footnote/Footnote';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import {
  CustomSelectClearButton,
  type CustomSelectClearButtonProps,
} from './CustomSelectClearButton';
import {
  CustomSelectInput,
  type CustomSelectInputProps,
} from './CustomSelectInput/CustomSelectInput';
import styles from './CustomSelect.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

const findIndexAfter = (options: CustomSelectOptionInterface[] = [], startIndex = -1) => {
  if (startIndex >= options.length - 1) {
    return -1;
  }
  return options.findIndex((option, i) => i > startIndex && !option.disabled);
};

const findIndexBefore = (
  options: CustomSelectOptionInterface[] = [],
  endIndex: number = options.length,
) => {
  let result = -1;
  if (endIndex <= 0) {
    return result;
  }
  for (let i = endIndex - 1; i >= 0; i--) {
    let option = options[i];

    if (!option.disabled) {
      result = i;
      break;
    }
  }
  return result;
};

const warn = warnOnce('CustomSelect');

const checkOptionsValueType = <T extends CustomSelectOptionInterface>(options: T[]) => {
  if (new Set(options.map((item) => typeof item.value)).size > 1) {
    warn(
      'Некоторые значения ваших опций имеют разные типы. onChange всегда возвращает строковый тип.',
      'error',
    );
  }
};

const checkMixControlledAndUncontrolledState = (
  oldIsControlled: boolean,
  newIsControlled: boolean,
) => {
  if (!oldIsControlled && newIsControlled) {
    warn(
      `Похоже, что компонент был переведен из состояния Uncontrolled в Controlled. Пожалуйста, не делайте так. Если вам нужно отобразить невыбранное состояние компонента, используйте value=null вместо undefined`,
      'error',
    );
  }
  if (oldIsControlled && !newIsControlled) {
    warn(
      `Похоже, что компонент был переведен из состояния Controlled в Uncontrolled. Пожалуйста, не делайте так. Если вам нужно отобразить невыбранное состояние компонента, используйте value=null вместо undefined`,
      'error',
    );
  }
};

function defaultRenderOptionFn<T extends CustomSelectOptionInterface>({
  option,
  ...props
}: CustomSelectRenderOption<T>): React.ReactNode {
  return <CustomSelectOption {...props} />;
}

const handleOptionDown: MouseEventHandler = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
};

function findSelectedIndex<T extends CustomSelectOptionInterface>(
  options: T[] = [],
  value: SelectValue,
) {
  if (value === NOT_SELECTED.CUSTOM) {
    return -1;
  }
  return (
    options.findIndex((item) => {
      value = typeof item.value === 'number' ? Number(value) : value;
      return item.value === value;
    }) ?? -1
  );
}

const filter = <T extends CustomSelectOptionInterface>(
  options: SelectProps<T>['options'],
  inputValue: string,
  filterFn: SelectProps<T>['filterFn'],
) => {
  return typeof filterFn === 'function'
    ? options.filter((option) => filterFn(inputValue, option))
    : options;
};

type MousePosition = {
  x: React.MouseEvent['clientX'];
  y: React.MouseEvent['clientY'];
};
function isMousePositionChanged(event: React.MouseEvent, prevPosition: MousePosition) {
  return (
    Math.abs(prevPosition.x - event.clientX) >= 1 || Math.abs(prevPosition.y - event.clientY) >= 1
  );
}

export interface CustomSelectOptionInterface {
  value: Exclude<SelectValue, null>;
  label: React.ReactElement | string;
  disabled?: boolean;
  [index: string]: any;
}

export interface CustomSelectRenderOption<T extends CustomSelectOptionInterface>
  extends CustomSelectOptionProps {
  option: T;
}

export type { CustomSelectClearButtonProps };

export interface SelectProps<
  OptionInterfaceT extends CustomSelectOptionInterface = CustomSelectOptionInterface,
> extends NativeSelectProps,
    Omit<FormFieldProps, 'maxHeight'>,
    Pick<CustomSelectDropdownProps, 'overscrollBehavior'>,
    Pick<CustomSelectInputProps, 'minLength' | 'maxLength' | 'pattern' | 'readOnly'> {
  /**
   * ref на внутрений компонент input
   */
  getSelectInputRef?: React.Ref<HTMLInputElement>;
  /**
   * Если `true`, то при клике на `CustomSelect` в нём появится текстовое поле для поиска по `options`. По умолчанию поиск
   * производится по `option.label`.
   */
  searchable?: boolean;
  /**
   * Текст, который будет отображен, если приходит пустой `options`.
   */
  emptyText?: string;
  /**
   * Событие изменения текстового поля
   */
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: OptionInterfaceT[];
  /**
   * Функция для кастомной фильтрации. По умолчанию поиск производится по `option.label`.
   */
  filterFn?: false | FilterFn<OptionInterfaceT>;
  popupDirection?: 'top' | 'bottom';
  /**
   * Рендер-проп для кастомного рендера опции.
   * В объекте аргумента приходят [свойства опции](https://vkcom.github.io/VKUI/#/CustomSelectOption?id=props)
   *
   * > ⚠️  Важно: cвойство опции `disabled` должно выставляться только через проп `options`.
   * > Запрещается выставлять `disabled` проп опциям в обход `options`, иначе `CustomSelect` не будет знать об актуальном состоянии
   * опции.
   */
  renderOption?: (props: CustomSelectRenderOption<OptionInterfaceT>) => React.ReactNode;
  /**
   * Рендер-проп для кастомного рендера содержимого дропдауна.
   * В `defaultDropdownContent` содержится список опций в виде скроллящегося блока.
   */
  renderDropdown?: ({
    defaultDropdownContent,
  }: {
    defaultDropdownContent: React.ReactNode;
  }) => React.ReactNode;
  /**
   * Если `true`, то в дропдауне вместо списка опций рисуется спиннер. При переданных `renderDropdown` и `fetching: true`
   * "победит" `renderDropdown`.
   */
  fetching?: boolean;
  onClose?: VoidFunction;
  onOpen?: VoidFunction;
  /**
   * Иконка раскрывающегося списка
   */
  icon?: React.ReactNode;
  /**
   * Кастомная кнопка для очистки значения.
   * Должна принимать обязательное свойство `onClick`
   */
  ClearButton?: React.ComponentType<CustomSelectClearButtonProps>;
  /**
   * Если `true`, то справа будет отображаться кнопка для очистки значения
   */
  allowClearButton?: boolean;
  /**
   * Передает атрибут `data-testid` для кнопки очистки
   */
  clearButtonTestId?: string;
  /**
   * Отступ от выпадающего списка
   */
  dropdownOffsetDistance?: number;
  /**
   * Ширина раскрывающегося списка зависит от контента
   */
  dropdownAutoWidth?: boolean;
  forceDropdownPortal?: boolean;
  selectType?: SelectType;
  /**
   * Отключает максимальную высоту по умолчанию
   */
  noMaxHeight?: boolean;
  /**
   * Передает атрибут `data-testid` для элемента, внутри которого отображается текст выбранной опции `CustomSelect` или плейсхолдер.
   */
  labelTextTestId?: string;
  /**
   * Передает атрибут `data-testid` для нативного элемента `select`.
   */
  nativeSelectTestId?: string;
  onInputKeyDown?: (e: React.KeyboardEvent) => void;
}

type MouseEventHandler = (event: React.MouseEvent<HTMLElement>) => void;

/**
 * @see https://vkcom.github.io/VKUI/#/CustomSelect
 */
export function CustomSelect<OptionInterfaceT extends CustomSelectOptionInterface>(
  props: SelectProps<OptionInterfaceT>,
): React.ReactNode {
  const [opened, setOpened] = React.useState(false);
  const {
    before,
    name,
    className,
    getRef,
    getRootRef,
    popupDirection = 'bottom',
    style,
    onChange,
    children,
    'onInputChange': onInputChangeProp,
    renderDropdown,
    onOpen,
    onClose,
    fetching,
    forceDropdownPortal,
    selectType = 'default',
    searchable = false,
    'renderOption': renderOptionProp = defaultRenderOptionFn,
    'options': optionsProp,
    emptyText = 'Ничего не найдено',
    filterFn = defaultFilterFn,
    'icon': iconProp,
    ClearButton = CustomSelectClearButton,
    allowClearButton = false,
    dropdownOffsetDistance = 0,
    dropdownAutoWidth = false,
    noMaxHeight = false,
    'aria-labelledby': ariaLabelledBy,
    clearButtonTestId,
    nativeSelectTestId,
    defaultValue,
    required,
    getSelectInputRef,
    overscrollBehavior,
    onInputKeyDown,
    ...restProps
  } = props;

  if (process.env.NODE_ENV === 'development') {
    checkOptionsValueType(optionsProp);
  }

  const { sizeY = 'none' } = useAdaptivity();

  const containerRef = React.useRef<HTMLDivElement>(null);
  const handleRootRef = useExternRef(containerRef, getRootRef);
  const scrollBoxRef = React.useRef<HTMLDivElement | null>(null);
  const selectElRef = useExternRef(getRef);
  const optionsWrapperRef = React.useRef<HTMLDivElement>(null);
  const scrollPerformedRef = React.useRef(false);

  const [focusedOptionIndex, setFocusedOptionIndex] = React.useState<number | undefined>(-1);
  const [isControlledOutside, setIsControlledOutside] = React.useState(props.value !== undefined);
  const [inputValue, setInputValue] = React.useState('');
  const [[nativeSelectValue, prevNativeSelectValue], setNativeSelectValue] =
    useStateWithPrev<NativeSelectValue>(() => {
      if (props.value !== undefined) {
        return remapFromSelectValueToNativeValue(props.value);
      }
      if (defaultValue !== undefined) {
        return remapFromSelectValueToNativeValue(defaultValue);
      }
      return NOT_SELECTED.NATIVE;
    });

  const [popperPlacement, setPopperPlacement] = React.useState<Placement>(popupDirection);

  const options = React.useMemo(() => {
    return filter(optionsProp, inputValue, filterFn);
  }, [filterFn, inputValue, optionsProp]);

  const [selectedOptionIndex, setSelectedOptionIndex] = React.useState<number | undefined>(
    findSelectedIndex(options, props.value ?? defaultValue ?? null),
  );

  React.useEffect(
    function updateOptionsIndexes() {
      const value =
        props.value !== undefined
          ? props.value
          : remapFromNativeValueToSelectValue(nativeSelectValue);

      const selectedIndex = findSelectedIndex(options, value);
      setSelectedOptionIndex(selectedIndex);
      setFocusedOptionIndex(selectedIndex);
    },
    [props.value, nativeSelectValue, options, filterFn],
  );

  React.useEffect(
    function syncIsControlledState() {
      setIsControlledOutside((oldIsControlled) => {
        const newIsControlled = props.value !== undefined;
        checkMixControlledAndUncontrolledState(oldIsControlled, newIsControlled);
        return newIsControlled;
      });
    },
    [props.value],
  );

  React.useEffect(
    function syncNativeSelectValueWithPropValue() {
      if (props.value !== undefined) {
        setNativeSelectValue(remapFromSelectValueToNativeValue(props.value));
      }
    },
    [props.value, setNativeSelectValue],
  );

  useIsomorphicLayoutEffect(() => {
    if (
      options.some(({ value }) => nativeSelectValue === value) ||
      (allowClearButton && nativeSelectValue === NOT_SELECTED.NATIVE)
    ) {
      const event = new Event('change', { bubbles: true });

      selectElRef.current?.dispatchEvent(event);
    }
  }, [nativeSelectValue]);

  const selected = React.useMemo(() => {
    if (!options.length) {
      return null;
    }

    return selectedOptionIndex !== undefined ? options[selectedOptionIndex] : undefined;
  }, [options, selectedOptionIndex]);

  const openedClassNames = React.useMemo(
    () =>
      (opened &&
        dropdownOffsetDistance === 0 &&
        (popperPlacement.includes('top') ? styles.popUp : styles.popDown)) ||
      undefined,
    [dropdownOffsetDistance, opened, popperPlacement],
  );

  const scrollToElement = React.useCallback((index: number, center = false) => {
    const dropdown = scrollBoxRef.current;
    const optionsWrapper = optionsWrapperRef.current;
    const item =
      dropdown && optionsWrapper ? (optionsWrapper.children[index] as HTMLElement) : null;

    if (!item || !dropdown) {
      return;
    }

    const dropdownHeight = dropdown.offsetHeight;
    const scrollTop = dropdown.scrollTop;
    const itemTop = item.offsetTop;
    const itemHeight = item.offsetHeight;

    if (center) {
      dropdown.scrollTop = itemTop - dropdownHeight / 2 + itemHeight / 2;
    } else if (itemTop + itemHeight > dropdownHeight + scrollTop) {
      dropdown.scrollTop = itemTop - dropdownHeight + itemHeight;
    } else if (itemTop < scrollTop) {
      dropdown.scrollTop = itemTop;
    }
  }, []);

  const focusOptionByIndex = React.useCallback(
    (index: number | undefined, scrollTo = true) => {
      if (index === undefined || index < 0 || index > (options.length ?? 0) - 1) {
        return;
      }

      const option = options[index];

      if (option?.disabled) {
        return;
      }

      if (scrollTo) {
        scrollToElement(index);
      }

      setFocusedOptionIndex(index);
    },
    [options, scrollToElement],
  );

  const isValidIndex = React.useCallback(
    (index: number) => {
      return index >= 0 && index < (options.length ?? 0);
    },
    [options.length],
  );

  useIsomorphicLayoutEffect(() => {
    if (!opened) {
      scrollPerformedRef.current = false;
      return;
    }

    if (scrollPerformedRef.current) {
      return;
    }

    const isIndexValid = selectedOptionIndex !== undefined && isValidIndex(selectedOptionIndex);

    if (scrollBoxRef.current && isIndexValid) {
      scrollPerformedRef.current = true;
      scrollToElement(selectedOptionIndex, true);
    }
  }, [opened, selectedOptionIndex, scrollToElement, isValidIndex]);

  const [keyboardInput, setKeyboardInput] = React.useState('');
  const resetKeyboardInput = React.useCallback(() => {
    setKeyboardInput('');
  }, []);

  const resetFocusedOption = React.useCallback(() => {
    setFocusedOptionIndex(-1);
  }, []);

  const onKeyboardInput = React.useCallback(
    (key: string) => {
      if (!opened) {
        setOpened(true);
      }
      resetFocusedOption();
      const fullInput = keyboardInput + key;

      setKeyboardInput(fullInput);
    },
    [keyboardInput, opened, resetFocusedOption],
  );

  const close = React.useCallback(() => {
    resetKeyboardInput();

    setInputValue('');
    setOpened(false);
    resetFocusedOption();
    onClose?.();
  }, [onClose, resetKeyboardInput, resetFocusedOption]);

  const selectOption = React.useCallback(
    (index: number) => {
      const item = options[index];
      setNativeSelectValue(item?.value ?? NOT_SELECTED.NATIVE);
      close();

      const shouldTriggerOnChangeWhenControlledAndInnerValueIsOutOfSync =
        isControlledOutside &&
        props.value !== nativeSelectValue &&
        nativeSelectValue === item?.value;

      if (shouldTriggerOnChangeWhenControlledAndInnerValueIsOutOfSync) {
        const event = new Event('change', { bubbles: true });
        selectElRef.current?.dispatchEvent(event);
      }
    },
    [
      close,
      options,
      selectElRef,
      isControlledOutside,
      props.value,
      nativeSelectValue,
      setNativeSelectValue,
    ],
  );

  const selectFocused = React.useCallback(() => {
    if (focusedOptionIndex === undefined || !isValidIndex(focusedOptionIndex)) {
      return;
    }

    selectOption(focusedOptionIndex);
  }, [focusedOptionIndex, isValidIndex, selectOption]);

  const open = React.useCallback(() => {
    setOpened(true);
    setFocusedOptionIndex(selectedOptionIndex);

    if (typeof onOpen === 'function') {
      onOpen();
    }
  }, [onOpen, selectedOptionIndex]);

  const onBlur = React.useCallback(() => {
    close();
    const event = new Event('focusout', { bubbles: true });
    selectElRef.current?.dispatchEvent(event);
  }, [close, selectElRef]);

  const onFocus = React.useCallback(() => {
    const event = new Event('focusin', { bubbles: true });
    selectElRef.current?.dispatchEvent(event);
  }, [selectElRef]);

  const onClick = React.useCallback(() => {
    if (opened) {
      close();
    } else {
      open();
    }
  }, [close, open, opened]);

  const handleKeyUp = React.useMemo(() => debounce(resetKeyboardInput, 1000), [resetKeyboardInput]);

  const focusOption = React.useCallback(
    (type: 'next' | 'prev') => {
      let index = focusedOptionIndex;

      if (type === 'next') {
        const nextIndex = findIndexAfter(options, index);
        index = nextIndex === -1 ? findIndexAfter(options) : nextIndex; // Следующий за index или первый валидный до index
      } else if (type === 'prev') {
        const beforeIndex = findIndexBefore(options, index);
        index = beforeIndex === -1 ? findIndexBefore(options) : beforeIndex; // Предшествующий index или последний валидный после index
      }

      focusOptionByIndex(index);
    },
    [focusOptionByIndex, focusedOptionIndex, options],
  );

  const onNativeSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    // для ситуаций, когда в опциях value это string а value/defaultValue это number
    // и наоборот, приводим значение nativeSelectValue из стейта к строке.
    // ведь nativeSelect всегда возвращает string в onChange, а пользователь
    // может использовать number для опций
    //
    // native select всегда возвращает string в качестве value в onChange
    // Когда селект контролируемый, то пользователь, в onChange может сохранить в свой стейт строку (например '3'), хотя
    // в качестве value опции может использовать число (3),
    // тогда строчное значение value ('3') из стейта пользователя
    // будет передано в CustomSelect, и после синхронизации nativeSelectValue (3) и props.value ('3') и после клика на уже выбранную опцию (3),
    // когда nativeSelectValue обновится на значение опции (число 3),
    // сравнение nativeSelectValue (3) и prevNativeSelectValue ('3') может не сработать лишь из-за того, что они в разных типах.
    const convertedNativeSelectValue =
      typeof nativeSelectValue === 'number' &&
      (typeof props.value === 'string' || typeof prevNativeSelectValue === 'string')
        ? String(nativeSelectValue)
        : nativeSelectValue;

    const isCalledWithSameControlledOptionValue =
      isControlledOutside &&
      props.value === remapFromNativeValueToSelectValue(convertedNativeSelectValue);

    const isNativeValueChanged =
      convertedNativeSelectValue !== prevNativeSelectValue && prevNativeSelectValue !== undefined;

    const isTriggeredByClearButton = allowClearButton && nativeSelectValue === NOT_SELECTED.NATIVE;

    const shouldCallOnChange =
      !isCalledWithSameControlledOptionValue && (isNativeValueChanged || isTriggeredByClearButton);

    if (!shouldCallOnChange) {
      return;
    }

    const remappedNativeValue = remapFromNativeValueToSelectValue(e.currentTarget.value);

    if (e.target.value === NOT_SELECTED.NATIVE) {
      e.target.value = '';
    }
    if (e.currentTarget.value === NOT_SELECTED.NATIVE) {
      e.currentTarget.value = '';
    }

    onChange?.(e, remappedNativeValue);
  };

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    (e) => {
      onInputChangeProp && onInputChangeProp(e);
      setInputValue(e.target.value);
    },
    [onInputChangeProp],
  );

  const areOptionsShown = React.useCallback(() => {
    return scrollBoxRef.current !== null;
  }, []);

  const handleKeyDownSelect = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key.length === 1 && event.key !== ' ') {
        onKeyboardInput(event.key);
        return;
      }

      ['ArrowUp', 'ArrowDown', 'Escape', 'Enter'].includes(event.key) &&
        areOptionsShown() &&
        event.preventDefault();

      switch (event.key) {
        case 'ArrowUp':
          if (opened) {
            areOptionsShown() && focusOption('prev');
          } else {
            open();
          }
          break;
        case 'ArrowDown':
          if (opened) {
            areOptionsShown() && focusOption('next');
          } else {
            open();
          }
          break;
        case 'Escape':
          close();
          break;
        case 'Backspace':
        case 'Delete': {
          if (!opened) {
            setOpened(true);
          }
          resetFocusedOption();

          break;
        }
        case 'Enter':
        case 'Spacebar':
        case ' ':
          if (opened) {
            areOptionsShown() && selectFocused();
          } else {
            open();
          }
          break;
      }
    },
    [
      areOptionsShown,
      close,
      focusOption,
      onKeyboardInput,
      open,
      opened,
      selectFocused,
      resetFocusedOption,
    ],
  );

  const handleOptionClick = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const index = Array.prototype.indexOf.call(
        e.currentTarget.parentNode?.children,
        e.currentTarget,
      );
      const option = options[index];

      if (option && !option.disabled) {
        selectOption(index);
      }
    },
    [options, selectOption],
  );

  const lastMousePositionRef = React.useRef<MousePosition>({ x: 0, y: 0 });
  const focusOptionOnMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLElement>, index: number) => {
      if (isMousePositionChanged(e, lastMousePositionRef.current)) {
        focusOptionByIndex(index, false);
      }
    },
    [focusOptionByIndex],
  );

  const popupAriaId = React.useId();
  const renderOption = React.useCallback(
    (option: OptionInterfaceT, index: number) => {
      const hovered = index === focusedOptionIndex;
      const selected = index === selectedOptionIndex;

      return (
        <React.Fragment key={`${typeof option.value}-${option.value}`}>
          {renderOptionProp({
            option,
            hovered,
            children: option.label,
            selected,
            disabled: option.disabled,
            onClick: handleOptionClick,
            onMouseDown: handleOptionDown,
            // Используем `onMouseMove` вместо `onMouseEnter/onMouseOver`.
            // Потому что если при навигации с клавиатуры курсор наведён на
            // список, то при первом автоматическом скролле списка вызывается событие MouseOver/MouseEnter
            // обработчик которого фокусирует опцию под курсором, хотя при навигация с клавиатуры пользователь мог уйти дальше по списку, это путает.
            // Причём координаты события меняются на пару пикселей по сравнению с прошлым вызовом,
            // а значит нельзя на них опираться, чтобы запретить обработку такого события.
            // C mousemove такой проблемы нет, что позволяет реализовать поведение при наведении с клавиатуры и при наведении мышью идентично `<select>`.
            onMouseMove: (e) => focusOptionOnMouseMove(e, index),
            id: `${popupAriaId}-${option.value}`,
          })}
        </React.Fragment>
      );
    },
    [
      focusedOptionIndex,
      handleOptionClick,
      focusOptionOnMouseMove,
      renderOptionProp,
      selectedOptionIndex,
      popupAriaId,
    ],
  );

  const resolvedContent = React.useMemo(() => {
    const defaultDropdownContent =
      options.length > 0 ? (
        <div ref={optionsWrapperRef}>{options.map(renderOption)}</div>
      ) : (
        <Footnote className={styles.empty}>{emptyText}</Footnote>
      );

    if (typeof renderDropdown === 'function') {
      return renderDropdown({ defaultDropdownContent });
    } else {
      return defaultDropdownContent;
    }
  }, [emptyText, options, renderDropdown, renderOption]);

  const selectInputRef = useExternRef(getSelectInputRef);

  const controlledValueSet = isControlledOutside && props.value !== NOT_SELECTED.CUSTOM;
  const uncontrolledValueSet = !isControlledOutside && nativeSelectValue !== NOT_SELECTED.NATIVE;
  const clearButtonShown =
    allowClearButton && !opened && (controlledValueSet || uncontrolledValueSet);

  const clearButton = React.useMemo(() => {
    if (!clearButtonShown) {
      return null;
    }

    return (
      <ClearButton
        className={iconProp === undefined ? styles.clearIcon : undefined}
        onClick={function clearSelectState() {
          setNativeSelectValue(NOT_SELECTED.NATIVE);
          setInputValue('');
          selectInputRef.current && selectInputRef.current.focus();
        }}
        disabled={restProps.disabled}
        data-testid={clearButtonTestId}
      />
    );
  }, [
    clearButtonShown,
    ClearButton,
    iconProp,
    restProps.disabled,
    clearButtonTestId,
    setNativeSelectValue,
    selectInputRef,
  ]);

  const icon = React.useMemo(() => {
    if (iconProp !== undefined) {
      return iconProp;
    }

    return (
      <DropdownIcon
        className={clearButtonShown ? styles.dropdownIcon : undefined}
        opened={opened}
      />
    );
  }, [clearButtonShown, iconProp, opened]);

  const afterIcons = (icon || clearButtonShown) && (
    <React.Fragment>
      {clearButton}
      {icon}
    </React.Fragment>
  );

  const { document } = useDOM();
  const passClickAndFocusToInputOnClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Раньше внешней оберткой CustomSelect был <label>, что позволяло по клику в любую область CustomSelect,
      // даже где нету интерактивного элемента, фокусировать <input> и передавать на него событие клика.
      // Так как мы больше не оборачиваем CustomSelect в <label>, то для обертки CustomSelect мы симулируем работу <label>.
      // передаем фокус и клик по <input>, если пользователь кликнул в зоне обертки.
      // В <label> мы не больше не оборачиваем, потому что это заставляет скринридер
      // дважды произносить текст выбранной опции при фокусе, если CustomSelect связан с внешним <label>.
      // Воспроизводится в некоторых версиях Chrome, при навигации по странице с помощью стрелок.
      // Договорились со специалистом по доступности убрать <label>-обёртки из Select и CustomSelect

      if (!selectInputRef.current || !document) {
        return;
      }

      const clickTargetIsNotAnInput = e.target !== selectInputRef.current;
      if (clickTargetIsNotAnInput) {
        selectInputRef.current.click();

        const inputIsNotFocused = document.activeElement !== selectInputRef.current;
        if (inputIsNotFocused) {
          selectInputRef.current.focus();
        }
      }
    },
    [document, selectInputRef],
  );

  const preventInputBlurWhenClickInsideFocusedSelectArea = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    // Так как инпут больше не оборачивается пустым лэйблом, то клик внутри обертки,
    // но вне инпута (например по иконке дропдауна), будет убирать фокус с инпута.
    // Чтобы в такой ситуации отключить blur инпута мы превентим mousedown событие обёртки
    const isInputFocused = document && document.activeElement === selectInputRef.current;
    if (isInputFocused) {
      e.preventDefault();
    }
  };

  const ariaActiveDescendantOptionIndex: undefined | number =
    focusedOptionIndex !== -1 ? focusedOptionIndex : undefined;
  const ariaActiveDescendantId =
    ariaActiveDescendantOptionIndex !== undefined
      ? options[ariaActiveDescendantOptionIndex] && options[ariaActiveDescendantOptionIndex].value
      : null;

  const selectInputAriaProps: React.HTMLAttributes<HTMLElement> = {
    'role': 'combobox',
    'aria-controls': popupAriaId,
    'aria-owns': popupAriaId,
    'aria-expanded': opened,
    'aria-activedescendant':
      ariaActiveDescendantId && opened ? `${popupAriaId}-${ariaActiveDescendantId}` : undefined,
    'aria-labelledby': ariaLabelledBy,
    'aria-haspopup': 'listbox',
    'aria-autocomplete': 'none',
  };

  const focusWithin = useFocusWithin(handleRootRef);

  const resetOptionFocusOnMouseLeave = React.useCallback(
    (event: React.MouseEvent) => {
      // В Хроме eсли мышка пользователя находится над инпутом селекта,
      // и он с клавиатуры открывает опции, причём одна из опций
      // уже выбрана, то видно, как выбранная опция получает фокус,
      // но потом сразу же его теряет.
      // Связано это с тем, что в этот момент вызывается onMouseLeave, на который у нас
      // завязан сброс состония фокуса у опции. По хорошему фокус должен оставаться.
      // Нам не интересен вызов onMouseLeave если мышка при этом не двигалась.
      if (isMousePositionChanged(event, lastMousePositionRef.current)) {
        resetFocusedOption();
      }
    },
    [resetFocusedOption],
  );

  return (
    <div
      className={classNames(styles.host, sizeY !== 'regular' && sizeYClassNames[sizeY], className)}
      style={style}
      ref={handleRootRef}
      onClick={passClickAndFocusToInputOnClick}
      onMouseDown={preventInputBlurWhenClickInsideFocusedSelectArea}
      onMouseMove={function updateLastMousePosition(e) {
        lastMousePositionRef.current = { x: e.clientX, y: e.clientY };
      }}
    >
      {focusWithin && selected && !opened && (
        <VisuallyHidden aria-live="polite">{selected.label}</VisuallyHidden>
      )}
      <CustomSelectInput
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck="false"
        {...restProps}
        {...selectInputAriaProps}
        getRef={selectInputRef}
        onFocus={onFocus}
        onBlur={onBlur}
        className={openedClassNames}
        readOnly={!searchable}
        fetching={fetching}
        value={inputValue}
        onKeyUp={handleKeyUp}
        onKeyDown={callMultiple(handleKeyDownSelect, onInputKeyDown)}
        onChange={onInputChange}
        onClick={onClick}
        before={before}
        after={afterIcons}
        selectType={selectType}
      >
        {selected?.label}
      </CustomSelectInput>
      <select
        ref={selectElRef}
        name={name}
        onChange={onNativeSelectChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onClick={props.onClick}
        value={nativeSelectValue}
        aria-hidden
        className={styles.control}
        data-testid={nativeSelectTestId}
        required={required}
      >
        {(allowClearButton || nativeSelectValue === NOT_SELECTED.NATIVE) && (
          <option key={NOT_SELECTED.NATIVE} value={NOT_SELECTED.NATIVE} />
        )}
        {optionsProp.map((item) => (
          <option key={`${item.value}`} value={item.value} />
        ))}
      </select>
      {opened && (
        <CustomSelectDropdown
          targetRef={containerRef}
          placement={popperPlacement}
          scrollBoxRef={scrollBoxRef}
          onPlacementChange={setPopperPlacement}
          onMouseLeave={resetOptionFocusOnMouseLeave}
          fetching={fetching}
          overscrollBehavior={overscrollBehavior}
          offsetDistance={dropdownOffsetDistance}
          autoWidth={dropdownAutoWidth}
          forcePortal={forceDropdownPortal}
          noMaxHeight={noMaxHeight}
          role="listbox"
          id={popupAriaId}
          aria-labelledby={ariaLabelledBy}
          tabIndex={-1}
        >
          {resolvedContent}
        </CustomSelectDropdown>
      )}
    </div>
  );
}
