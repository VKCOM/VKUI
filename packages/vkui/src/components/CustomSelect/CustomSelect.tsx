import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusWithin } from '../../hooks/useFocusWithin';
import { useId } from '../../hooks/useId';
import { useTimeout } from '../../hooks/useTimeout';
import { SizeType } from '../../lib/adaptivity';
import type { PlacementWithAuto } from '../../lib/floating';
import { defaultFilterFn, getFormFieldModeFromSelectType } from '../../lib/select';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { debounce } from '../../lib/utils';
import { warnOnce } from '../../lib/warnOnce';
import { TrackerOptionsProps } from '../CustomScrollView/useTrackerVisibility';
import { CustomSelectDropdown } from '../CustomSelectDropdown/CustomSelectDropdown';
import {
  CustomSelectOption,
  CustomSelectOptionProps,
} from '../CustomSelectOption/CustomSelectOption';
import { DropdownIcon } from '../DropdownIcon/DropdownIcon';
import { FormFieldProps } from '../FormField/FormField';
import { Input } from '../Input/Input';
import { NativeSelectProps } from '../NativeSelect/NativeSelect';
import { SelectType } from '../Select/Select';
import { Footnote } from '../Typography/Footnote/Footnote';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { CustomSelectClearButton, CustomSelectClearButtonProps } from './CustomSelectClearButton';
import { CustomSelectInputForeground } from './CustomSelectInputForeground';
import styles from './CustomSelect.module.css';

const sizeYClassNames = {
  none: styles['CustomSelect--sizeY-none'],
  [SizeType.COMPACT]: styles['CustomSelect--sizeY-compact'],
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
  withClear: boolean,
) {
  if (withClear && value === '') {
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

const defaultOptions: CustomSelectOptionInterface[] = [];

type FilterFn<T> = (
  value: string,
  option: T,
  getOptionLabel?: (option: Partial<T>) => string,
) => boolean;

type SelectValue = React.SelectHTMLAttributes<HTMLSelectElement>['value'];

export interface CustomSelectOptionInterface {
  value: SelectValue;
  label: React.ReactElement | string;
  disabled?: boolean;
  [index: string]: any;
}

export interface CustomSelectRenderOption<T extends CustomSelectOptionInterface>
  extends CustomSelectOptionProps {
  option: T;
}

export interface SelectProps<
  OptionInterfaceT extends CustomSelectOptionInterface = CustomSelectOptionInterface,
> extends NativeSelectProps,
    FormFieldProps,
    TrackerOptionsProps {
  /**
   * Если `true`, то при клике на селект в нём появится текстовое поле для поиска по `options`. По умолчанию поиск
   * производится по `option.label`.
   */
  searchable?: boolean;
  /**
   * Текст, который будет отображен, если приходит пустой `options`.
   */
  emptyText?: string;
  /**
   * > ⚠️ В **v6** из возвращаемых типов будет удалён `CustomSelectOptionInterface[]`. Для кастомной фильтрации используйте
   * > `filterFn`.
   */
  onInputChange?: (e: React.ChangeEvent, options: OptionInterfaceT[]) => void | OptionInterfaceT[];
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
   * > Запрещается выставлять `disabled` проп опциям в обход `options`, иначе селект не будет знать об актуальном состоянии
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
  dropdownOffsetDistance?: number;
  fixDropdownWidth?: boolean;
  forceDropdownPortal?: boolean;
  selectType?: SelectType;
  /**
   * Отключает максимальную высоту по умолчанию
   */
  noMaxHeight?: boolean;
}

type MouseEventHandler = (event: React.MouseEvent<HTMLElement>) => void;

/**
 * @see https://vkcom.github.io/VKUI/#/CustomSelect
 */
export function CustomSelect<OptionInterfaceT extends CustomSelectOptionInterface>(
  props: SelectProps<OptionInterfaceT>,
) {
  const [opened, setOpened] = React.useState(false);
  const {
    before,
    name,
    className,
    getRef,
    getRootRef,
    popupDirection,
    style,
    onChange,
    children,
    onInputChange: onInputChangeProp,
    renderDropdown,
    onOpen,
    onClose,
    fetching,
    forceDropdownPortal,
    selectType = 'default',
    autoHideScrollbar,
    autoHideScrollbarDelay,
    searchable = false,
    renderOption: renderOptionProp = defaultRenderOptionFn,
    options: optionsProp = defaultOptions as OptionInterfaceT[],
    emptyText = 'Ничего не найдено',
    filterFn = defaultFilterFn,
    icon: iconProp,
    ClearButton = CustomSelectClearButton,
    allowClearButton = false,
    dropdownOffsetDistance = 0,
    fixDropdownWidth = true,
    noMaxHeight = false,
    ['aria-labelledby']: ariaLabelledBy,
    ...restProps
  } = props;

  if (process.env.NODE_ENV === 'development') {
    checkOptionsValueType(optionsProp);
  }

  const { sizeY = 'none' } = useAdaptivity();

  const containerRef = React.useRef<HTMLLabelElement>(null);
  const handleRootRef = useExternRef(containerRef, getRootRef);
  const scrollBoxRef = React.useRef<HTMLDivElement | null>(null);
  const selectElRef = useExternRef(getRef);

  const [focusedOptionIndex, setFocusedOptionIndex] = React.useState<number | undefined>(-1);
  const [isControlledOutside, setIsControlledOutside] = React.useState(props.value !== undefined);
  const [inputValue, setInputValue] = React.useState('');
  const [nativeSelectValue, setNativeSelectValue] = React.useState(
    () => props.value ?? props.defaultValue ?? (allowClearButton ? '' : undefined),
  );
  const [keyboardInput, setKeyboardInput] = React.useState('');
  const [popperPlacement, setPopperPlacement] = React.useState<PlacementWithAuto | undefined>(
    undefined,
  );
  const [options, setOptions] = React.useState(optionsProp);
  const [selectedOptionIndex, setSelectedOptionIndex] = React.useState<number | undefined>(
    findSelectedIndex(optionsProp, props.value ?? props.defaultValue, allowClearButton),
  );

  React.useEffect(() => {
    setIsControlledOutside(props.value !== undefined);
    setNativeSelectValue((nativeSelectValue) => props.value ?? nativeSelectValue);
  }, [props.value]);

  useIsomorphicLayoutEffect(() => {
    if (
      options.some(({ value }) => nativeSelectValue === value) ||
      (allowClearButton && nativeSelectValue === '')
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
        (popperPlacement?.includes('top')
          ? styles['CustomSelect--pop-up']
          : styles['CustomSelect--pop-down'])) ||
      undefined,
    [dropdownOffsetDistance, opened, popperPlacement],
  );

  const resetKeyboardInput = React.useCallback(() => {
    setKeyboardInput('');
  }, []);

  const scrollToElement = React.useCallback((index: number, center = false) => {
    const dropdown = scrollBoxRef.current;
    const item = dropdown ? (dropdown.children[index] as HTMLElement) : null;

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

  const isValidIndex = React.useCallback(
    (index: number) => {
      return index >= 0 && index < (options.length ?? 0);
    },
    [options.length],
  );

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

      // Это оптимизация, прежде всего, под `onMouseMove`
      setFocusedOptionIndex((focusedOptionIndex) =>
        focusedOptionIndex !== index ? index : focusedOptionIndex,
      );
    },
    [options, scrollToElement],
  );

  const areOptionsShown = React.useCallback(() => {
    return scrollBoxRef.current !== null;
  }, []);

  const setScrollBoxRef = React.useCallback(
    (ref: HTMLDivElement | null) => {
      scrollBoxRef.current = ref;

      if (ref && selectedOptionIndex !== undefined && isValidIndex(selectedOptionIndex)) {
        {
          scrollToElement(selectedOptionIndex, true);
        }
      }
    },
    [isValidIndex, scrollToElement, selectedOptionIndex],
  );

  const onKeyboardInput = React.useCallback(
    (key: string) => {
      if (!opened) {
        setOpened(true);
      }
      const fullInput = keyboardInput + key;

      setKeyboardInput(fullInput);
    },
    [keyboardInput, opened],
  );

  /**
   * Note: сбрасывать `options` через `setOptions(optionsProp)` не нужно.
   *  Сброс происходит в одном из эффекте `updateOptionsAndSelectedOptionIndex()`.
   */
  const close = React.useCallback(() => {
    resetKeyboardInput();

    setOpened(false);
    setFocusedOptionIndex(-1);
    onClose?.();
  }, [onClose, resetKeyboardInput]);

  const selectOption = React.useCallback(
    (index: number) => {
      const item = options[index];

      setNativeSelectValue(item?.value);
      setInputValue('');
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
    [close, options, selectElRef, isControlledOutside, props.value, nativeSelectValue],
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
    setInputValue('');
    const event = new Event('focusout', { bubbles: true });
    selectElRef.current?.dispatchEvent(event);
  }, [close, selectElRef]);

  const resetFocusedOption = React.useCallback(() => {
    setFocusedOptionIndex(-1);
  }, []);

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

  React.useEffect(
    function updateOptionsAndSelectedOptionIndex() {
      const value = props.value ?? nativeSelectValue ?? props.defaultValue;

      const options =
        searchable && inputValue !== undefined
          ? filter(optionsProp, inputValue, filterFn)
          : optionsProp;

      setOptions(options);
      setSelectedOptionIndex(findSelectedIndex(options, value, allowClearButton));
    },
    [
      filterFn,
      inputValue,
      nativeSelectValue,
      optionsProp,
      props.defaultValue,
      props.value,
      searchable,
      allowClearButton,
    ],
  );

  /**
   * Нужен для правильного поведения обработчика onClick на select. Фильтрует клики, которые были сделаны по
   * выпадающему списку.
   */
  const onLabelClick = React.useCallback((e: React.MouseEvent<HTMLLabelElement>) => {
    if (scrollBoxRef.current?.contains(e.target as Node)) {
      e.preventDefault();
    }
  }, []);

  const onNativeSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newSelectedOptionIndex = findSelectedIndex(
      options,
      e.currentTarget.value,
      allowClearButton,
    );

    if (selectedOptionIndex !== newSelectedOptionIndex) {
      if (!isControlledOutside) {
        setSelectedOptionIndex(newSelectedOptionIndex);
      }
      onChange?.(e);
    }
  };

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    (e) => {
      // TODO [>=6]: удалить `onInputChangeProp`.
      if (onInputChangeProp) {
        const options = onInputChangeProp(e, optionsProp);
        if (options) {
          if (process.env.NODE_ENV === 'development') {
            warn(
              'Этот метод фильтрации устарел. Возвращаемое значение onInputChange будет ' +
                'проигнорировано в v6.0.0. Для фильтрации обновляйте props.options самостоятельно или используйте свойство filterFn.',
            );
          }
          setOptions(options);
          setSelectedOptionIndex(findSelectedIndex(options, nativeSelectValue, allowClearButton));
        }
      } else {
        const options = filter(optionsProp, e.target.value, filterFn);
        setOptions(options);
        setSelectedOptionIndex(findSelectedIndex(options, nativeSelectValue, allowClearButton));
      }
      setInputValue(e.target.value);
    },
    [filterFn, nativeSelectValue, onInputChangeProp, optionsProp, allowClearButton],
  );

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
    [areOptionsShown, close, focusOption, onKeyboardInput, open, opened, selectFocused],
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

  const prevMousePositionRef = React.useRef<{
    x: React.MouseEvent['clientX'];
    y: React.MouseEvent['clientY'];
  }>({ x: 0, y: 0 });
  const handleOptionHover = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const isMouseChangedPosition =
        Math.abs(prevMousePositionRef.current.x - e.clientX) >= 1 ||
        Math.abs(prevMousePositionRef.current.y - e.clientY) >= 1;

      if (isMouseChangedPosition) {
        focusOptionByIndex(
          Array.prototype.indexOf.call(e.currentTarget.parentNode?.children, e.currentTarget),
          false,
        );
      }

      prevMousePositionRef.current = { x: e.clientX, y: e.clientY };
    },
    [focusOptionByIndex],
  );

  const popupAriaId = useId();
  const renderOption = React.useCallback(
    (option: OptionInterfaceT, index: number) => {
      const hovered = index === focusedOptionIndex;
      const selected = index === selectedOptionIndex;

      return (
        <React.Fragment key={`${option.value}`}>
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
            // C mousemove такой проблемы нет, что позволяет реализовать поведение при наведении с клавиатуры и при наведении мышью идентично нативному селекту.
            onMouseMove: handleOptionHover,
            id: `${popupAriaId}-${option.value}`,
          })}
        </React.Fragment>
      );
    },
    [
      focusedOptionIndex,
      handleOptionClick,
      handleOptionHover,
      renderOptionProp,
      selectedOptionIndex,
      popupAriaId,
    ],
  );

  const resolvedContent = React.useMemo(() => {
    const defaultDropdownContent =
      options?.length > 0 ? (
        options.map(renderOption)
      ) : (
        <Footnote className={styles['CustomSelect__empty']}>{emptyText}</Footnote>
      );

    if (typeof renderDropdown === 'function') {
      return renderDropdown({ defaultDropdownContent });
    } else {
      return defaultDropdownContent;
    }
  }, [emptyText, options, renderDropdown, renderOption]);

  const controlledValueSet = isControlledOutside && props.value !== '';
  const uncontrolledValueSet = !isControlledOutside && nativeSelectValue !== '';
  const clearButtonShown =
    allowClearButton && !opened && (controlledValueSet || uncontrolledValueSet);

  const selectInputRef = React.useRef<HTMLInputElement | null>(null);
  const focusOnInput = useTimeout(() => selectInputRef.current?.focus(), 0);
  const clearButton = React.useMemo(() => {
    if (!clearButtonShown) {
      return null;
    }

    return (
      <ClearButton
        className={iconProp === undefined ? styles['CustomSelect--clear-icon'] : undefined}
        onClick={() => {
          focusOnInput.set();
          setNativeSelectValue('');
          setInputValue('');
        }}
        disabled={restProps.disabled}
      />
    );
  }, [clearButtonShown, ClearButton, iconProp, restProps.disabled, focusOnInput]);

  const icon = React.useMemo(() => {
    if (iconProp !== undefined) {
      return iconProp;
    }

    return (
      <div className={styles['CustomSelect__dropdown-icon-wrapper']}>
        <DropdownIcon
          className={clearButtonShown ? styles['CustomSelect__dropdown-icon'] : undefined}
          opened={opened}
        />
      </div>
    );
  }, [clearButtonShown, iconProp, opened]);

  const afterIcons = (icon || clearButtonShown) && (
    <React.Fragment>
      {clearButton}
      {icon}
    </React.Fragment>
  );

  const ariaActiveDescendantOptionIndex: undefined | number =
    focusedOptionIndex !== -1
      ? focusedOptionIndex
      : selectedOptionIndex !== -1
      ? selectedOptionIndex
      : undefined;
  const ariaActiveDescendantId =
    ariaActiveDescendantOptionIndex !== undefined
      ? options[ariaActiveDescendantOptionIndex] && options[ariaActiveDescendantOptionIndex].value
      : null;

  const focusWithin = useFocusWithin(handleRootRef);

  const withVisuallyHiddenPopup = focusWithin && !opened && ariaActiveDescendantId;
  const showOptionsList = withVisuallyHiddenPopup || opened;

  const selectInputAriaProps: React.HTMLAttributes<HTMLElement> = {
    'role': 'combobox',
    'aria-controls': popupAriaId,
    'aria-owns': popupAriaId,
    'aria-expanded': opened,
    ['aria-activedescendant']:
      ariaActiveDescendantId && showOptionsList
        ? `${popupAriaId}-${ariaActiveDescendantId}`
        : undefined,
    'aria-labelledby': ariaLabelledBy,
    'aria-haspopup': 'listbox',
    'aria-autocomplete': 'none',
  };

  const isSimpleSelect = !searchable;
  const isSearhableSelectWithoutFocus = searchable && !focusWithin;
  const isFocusedSearchableSelectHasNoInputValue = searchable && focusWithin && inputValue === '';
  const withInputForeground =
    selected &&
    (isSimpleSelect || isSearhableSelectWithoutFocus || isFocusedSearchableSelectHasNoInputValue);

  return (
    <label
      className={classNames(
        styles['CustomSelect'],
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        className,
      )}
      style={style}
      ref={handleRootRef}
      onClick={onLabelClick}
    >
      <Input
        autoComplete="off"
        {...restProps}
        {...selectInputAriaProps}
        getRef={selectInputRef}
        onFocus={onFocus}
        onBlur={onBlur}
        className={classNames(
          openedClassNames,
          ((withInputForeground && !focusWithin) || isSimpleSelect) &&
            styles['CustomSelect__input--cursor-pointer'],
        )}
        readOnly={!searchable}
        value={inputValue}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDownSelect}
        onChange={onInputChange}
        onClick={onClick}
        before={before}
        after={afterIcons}
        mode={getFormFieldModeFromSelectType(selectType)}
        placeholder={withInputForeground ? '' : restProps.placeholder}
        inputForeground={
          withInputForeground && (
            <CustomSelectInputForeground
              tabIndex={-1}
              className={classNames(
                openedClassNames,
                styles['CustomSelect__mimicry'],
                !selected && styles['CustomSelect__mimicry--empty'],
              )}
              selectType={selectType}
            >
              {selected?.label}
            </CustomSelectInputForeground>
          )
        }
      />
      <select
        ref={selectElRef}
        name={name}
        onChange={onNativeSelectChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onClick={props.onClick}
        value={nativeSelectValue}
        aria-hidden
        className={styles['CustomSelect__control']}
      >
        {allowClearButton && <option key="" value="" />}
        {optionsProp.map((item) => (
          <option key={`${item.value}`} value={item.value} />
        ))}
      </select>
      {showOptionsList && (
        <CustomSelectDropdown
          targetRef={containerRef}
          placement={popupDirection}
          scrollBoxRef={setScrollBoxRef}
          onPlacementChange={setPopperPlacement}
          onMouseLeave={resetFocusedOption}
          fetching={fetching}
          offsetDistance={dropdownOffsetDistance}
          sameWidth={fixDropdownWidth}
          forcePortal={forceDropdownPortal}
          autoHideScrollbar={autoHideScrollbar}
          autoHideScrollbarDelay={autoHideScrollbarDelay}
          noMaxHeight={noMaxHeight}
          role="listbox"
          id={popupAriaId}
          aria-labelledby={ariaLabelledBy}
          tabIndex={-1}
        >
          {withVisuallyHiddenPopup ? (
            <VisuallyHidden>{resolvedContent}</VisuallyHidden>
          ) : (
            resolvedContent
          )}
        </CustomSelectDropdown>
      )}
    </label>
  );
}
