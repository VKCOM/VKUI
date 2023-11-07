import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { SizeType } from '../../lib/adaptivity';
import type { PlacementWithAuto } from '../../lib/floating';
import { defaultFilterFn, getFormFieldModeFromSelectType } from '../../lib/select';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { debounce, getTitleFromChildren } from '../../lib/utils';
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
import { SelectMimicry } from '../SelectMimicry/SelectMimicry';
import { Footnote } from '../Typography/Footnote/Footnote';
import { CustomSelectClearButton, CustomSelectClearButtonProps } from './CustomSelectClearButton';
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

      // Это оптимизация, прежде всего, под `onMouseOver`
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
      const fullInput = keyboardInput + key;

      const optionIndex = options.findIndex((option) => {
        return getTitleFromChildren(option.label).toLowerCase().includes(fullInput);
      });

      if (optionIndex !== undefined && optionIndex > -1) {
        focusOptionByIndex(optionIndex);
      }

      setKeyboardInput(fullInput);
    },
    [focusOptionByIndex, keyboardInput, options],
  );

  /**
   * Note: сбрасывать `options` через `setOptions(optionsProp)` не нужно.
   *  Сброс происходит в одном из эффекте `updateOptionsAndSelectedOptionIndex()`.
   */
  const close = React.useCallback(() => {
    resetKeyboardInput();

    setInputValue('');
    setOpened(false);
    setFocusedOptionIndex(-1);
    onClose?.();
  }, [onClose, resetKeyboardInput]);

  const selectOption = React.useCallback(
    (index: number) => {
      const item = options[index];

      setNativeSelectValue(item?.value);
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
    const event = new Event('blur');
    selectElRef.current?.dispatchEvent(event);
  }, [close, selectElRef]);

  const resetFocusedOption = React.useCallback(() => {
    setFocusedOptionIndex(-1);
  }, []);

  const onFocus = React.useCallback(() => {
    const event = new Event('focus');
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

  const onInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = React.useCallback(
    (event) => {
      ['ArrowUp', 'ArrowDown', 'Escape', 'Enter'].includes(event.key) &&
        areOptionsShown() &&
        event.preventDefault();

      switch (event.key) {
        case 'ArrowUp':
          areOptionsShown() && focusOption('prev');
          break;
        case 'ArrowDown':
          areOptionsShown() && focusOption('next');
          break;
        case 'Escape':
          close();
          break;
        case 'Enter':
          areOptionsShown() && selectFocused();
          break;
      }
    },
    [areOptionsShown, close, focusOption, selectFocused],
  );

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

  const handleOptionHover = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      focusOptionByIndex(
        Array.prototype.indexOf.call(e.currentTarget.parentNode?.children, e.currentTarget),
        false,
      );
    },
    [focusOptionByIndex],
  );

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
            // Используем `onMouseOver` вместо `onMouseEnter`.
            // При параметре `searchable`, обновляется "ребёнок", из-за чего `onMouseEnter` не срабатывает в следующих кейсах:
            //  1. До загрузки выпадающего списка, курсор мышки находится над произвольным элементом этого списка.
            //     > Лечение: только увод курсора мыши и возвращении его обратно вызывает событие `onMouseEnter` на этот элемент.
            //  2. Если это тач-устройство.
            //     > Лечение: нужно нажать на какой-нибудь произвольный элемент списка, после чего `onMouseEnter` будет работать на соседние элементы,
            //     но не на тот, на который нажали в первый раз.
            // Более подробно по ссылке https://github.com/facebook/react/issues/13956#issuecomment-1082055744
            onMouseOver: handleOptionHover,
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

  const clearButton = React.useMemo(() => {
    if (!clearButtonShown) {
      return null;
    }

    return (
      <ClearButton
        className={iconProp === undefined ? styles['CustomSelect--clear-icon'] : undefined}
        onClick={() => setNativeSelectValue('')}
      />
    );
  }, [clearButtonShown, ClearButton, iconProp]);

  const icon = React.useMemo(() => {
    if (iconProp !== undefined) {
      return iconProp;
    }

    return (
      <DropdownIcon
        className={clearButtonShown ? styles['CustomSelect__dropdown-icon'] : undefined}
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
      {opened && searchable ? (
        <Input
          {...restProps}
          autoFocus
          onBlur={onBlur}
          className={openedClassNames}
          value={inputValue}
          onKeyDown={onInputKeyDown}
          onChange={onInputChange}
          // TODO Ожидается, что клик поймает нативный select, но его перехватывает Input. К сожалению, это приводит к конфликтам типизации.
          // TODO Нужно перестать пытаться превратить CustomSelect в select. Тогда эта проблема уйдёт.
          // @ts-expect-error: TS2322 MouseEventHandler<HTMLSelectElement> !== MouseEventHandler<HTMLInputElement>
          onClick={props.onClick}
          before={before}
          after={afterIcons}
          mode={getFormFieldModeFromSelectType(selectType)}
        />
      ) : (
        <SelectMimicry
          {...restProps}
          aria-hidden
          onClick={onClick}
          onKeyDown={handleKeyDownSelect}
          onKeyUp={handleKeyUp}
          onFocus={onFocus}
          onBlur={onBlur}
          className={openedClassNames}
          before={before}
          after={afterIcons}
          selectType={selectType}
        >
          {selected?.label}
        </SelectMimicry>
      )}
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
      {opened && (
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
        >
          {resolvedContent}
        </CustomSelectDropdown>
      )}
    </label>
  );
}
