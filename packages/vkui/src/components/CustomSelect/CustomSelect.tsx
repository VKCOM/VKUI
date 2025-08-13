'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { getRequiredValueByKey } from '../../helpers/getValueByKey';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { callMultiple } from '../../lib/callMultiple';
import { useDOM } from '../../lib/dom';
import type { Placement } from '../../lib/floating';
import { defaultFilterFn, type FilterFn } from '../../lib/select';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { preventDefault } from '../../lib/utils';
import {
  CustomSelectDropdown,
  type CustomSelectDropdownProps,
} from '../CustomSelectDropdown/CustomSelectDropdown';
import { CustomSelectOption } from '../CustomSelectOption/CustomSelectOption';
import type { FormFieldProps } from '../FormField/FormField';
import type { NativeSelectProps, SelectValue } from '../NativeSelect/NativeSelect';
import { NOT_SELECTED, remapFromNativeValueToSelectValue } from '../NativeSelect/NativeSelect';
import type { SelectType } from '../Select/Select';
import { Footnote } from '../Typography/Footnote/Footnote';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { type CustomSelectClearButtonProps } from './CustomSelectClearButton';
import {
  CustomSelectInput,
  type CustomSelectInputProps,
} from './CustomSelectInput/CustomSelectInput';
import {
  checkMixControlledAndUncontrolledState,
  checkOptionsValueType,
  filter,
  findSelectedIndex,
  getOptionByValue,
} from './helpers';
import { useAfterItems } from './hooks/useAfterItems';
import { useDropdownOpenedController } from './hooks/useDropdownOpenedController';
import { useFocusedOptionController } from './hooks/useFocusedOptionController';
import { useInputKeyboardController } from './hooks/useInputKeyboardController';
import { useInputValueController } from './hooks/useInputValueController';
import { useScrollListController } from './hooks/useScrollListController';
import { useSelectedOptionController } from './hooks/useSelectedOptionController';
import type {
  CustomSelectOptionInterface,
  CustomSelectRenderOption,
  MousePosition,
  PopupDirection,
} from './types';
import styles from './CustomSelect.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

function defaultRenderOptionFn<T extends CustomSelectOptionInterface>({
  option,
  ...props
}: CustomSelectRenderOption<T>): React.ReactNode {
  return <CustomSelectOption {...props} />;
}

function isMousePositionChanged(event: React.MouseEvent, prevPosition: MousePosition) {
  return (
    Math.abs(prevPosition.x - event.clientX) >= 1 || Math.abs(prevPosition.y - event.clientY) >= 1
  );
}

const FETCH_STATUS_RESET_DELAY = 2000;

const FetchingStatus = ({
  fetching = false,
  options,
  fetchingInProgressLabel = 'Список опций загружается...',
  fetchingCompletedLabel = `Загружено опций: ${options.length}`,
}: Pick<
  SelectProps,
  'fetching' | 'fetchingInProgressLabel' | 'fetchingCompletedLabel' | 'options'
>) => {
  const [status, setStatus] = React.useState<'fetching' | 'loaded' | 'none'>('none');

  const content = getRequiredValueByKey(status, {
    fetching: fetchingInProgressLabel,
    loaded:
      typeof fetchingCompletedLabel === 'function'
        ? fetchingCompletedLabel(options.length)
        : fetchingCompletedLabel,
    none: '',
  });

  useIsomorphicLayoutEffect(
    function updateStatus() {
      if (fetching) {
        setStatus('fetching');
      } else {
        setStatus('loaded');
        setTimeout(() => setStatus('none'), FETCH_STATUS_RESET_DELAY);
      }
    },
    [fetching],
  );

  return <VisuallyHidden aria-live="polite">{content}</VisuallyHidden>;
};

export type { CustomSelectClearButtonProps };

export interface SelectProps<
  OptionInterfaceT extends CustomSelectOptionInterface = CustomSelectOptionInterface,
> extends NativeSelectProps,
    Omit<FormFieldProps, 'maxHeight'>,
    Pick<CustomSelectDropdownProps, 'overscrollBehavior'>,
    Pick<CustomSelectInputProps, 'minLength' | 'maxLength' | 'pattern' | 'readOnly'> {
  /**
   * Ref на внутрений компонент input.
   */
  getSelectInputRef?: React.Ref<HTMLInputElement>;
  /**
   * Если `true`, то при нажатии на `CustomSelect` в нём появится текстовое поле для поиска по `options`. По умолчанию поиск
   * производится по `option.label`.
   */
  searchable?: boolean;
  /**
   * Текст, который будет отображен, если приходит пустой `options`.
   */
  emptyText?: string;
  /**
   * Событие изменения текстового поля.
   */
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Список опций в списке.
   */
  options: OptionInterfaceT[];
  /**
   * Функция для кастомной фильтрации. По умолчанию поиск производится по `option.label`.
   */
  filterFn?: false | FilterFn<OptionInterfaceT>;
  /**
   * Направление раскрытия выпадающего списка.
   */
  popupDirection?: PopupDirection;
  /**
   * Рендер-проп для кастомного рендера опции.
   * В объекте аргумента приходят [свойства опции](https://vkui.io/components/custom-select#custom-select-option-api).
   *
   * > ⚠️  Важно: свойство опции `disabled` должно выставляться только через проп `options`.
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
  /**
   * Обработчик закрытия выпадающего списка.
   */
  onClose?: VoidFunction;
  /**
   * Обработчик открытия выпадающего списка.
   */
  onOpen?: VoidFunction;
  /**
   * Иконка раскрывающегося списка.
   */
  icon?: React.ReactNode;
  /**
   * Кастомная кнопка для очистки значения.
   * Должна принимать обязательное свойство `onClick`.
   */
  ClearButton?: React.ComponentType<CustomSelectClearButtonProps>;
  /**
   * Если `true`, то справа будет отображаться кнопка для очистки значения.
   */
  allowClearButton?: boolean;
  /**
   * Передает атрибут `data-testid` для кнопки очистки.
   */
  clearButtonTestId?: string;
  /**
   * Отступ от выпадающего списка.
   */
  dropdownOffsetDistance?: number;
  /**
   * Ширина раскрывающегося списка зависит от контента.
   */
  dropdownAutoWidth?: boolean;
  /**
   * Использовать Portal для рендеринга выпадающего списка.
   */
  forceDropdownPortal?: boolean;
  /**
   * Тип отображения компонента.
   */
  selectType?: SelectType;
  /**
   * Отключает максимальную высоту по умолчанию.
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
  /**
   * Обработчик события `keyDown` в поле ввода.
   */
  onInputKeyDown?: (e: React.KeyboardEvent, isOpen: boolean) => void;
  /**
   * Включает режим в котором выбранное значение `CustomSelect` читается скринридерами корректно.
   * В данном режиме введенное в поле ввода значение не сбрасывается при потере фокуса.
   */
  accessible?: boolean /* TODO [>=v8] включить по умолчанию */;
  /**
   * Текстовая метка для индикации процесса загрузки данных для пользователей скринридерами. По умолчанию: `"Список опций загружается..."`.
   */
  fetchingInProgressLabel?: string;
  /**
   * Текстовая метка для индикации завершения процесса загрузки данных для пользователей скринридерами. По умолчанию: `"Загружено опций: ${options.length}"`.
   */
  fetchingCompletedLabel?: string | ((optionsCount: number) => string);
}

/**
 * @see https://vkui.io/components/custom-select
 */
export function CustomSelect<OptionInterfaceT extends CustomSelectOptionInterface>(
  props: SelectProps<OptionInterfaceT>,
): React.ReactNode {
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
    'options': options,
    emptyText = 'Ничего не найдено',
    filterFn = defaultFilterFn,
    'icon': iconProp,
    ClearButton,
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
    'onInputKeyDown': onInputKeyDownProp,
    readOnly,
    accessible = false,
    fetchingInProgressLabel,
    fetchingCompletedLabel,
    ...restProps
  } = props;

  if (process.env.NODE_ENV === 'development') {
    checkOptionsValueType(options);
  }

  const { sizeY = 'none' } = useAdaptivity();

  const containerRef = React.useRef<HTMLDivElement>(null);
  const handleRootRef = useExternRef(containerRef, getRootRef);
  const selectElRef = useExternRef(getRef);
  const selectInputRef = useExternRef(getSelectInputRef);

  const propsValue = React.useMemo<SelectValue | undefined>(() => {
    if (props.value === undefined) {
      return undefined;
    }
    return getOptionByValue(options, props.value)?.value ?? null;
  }, [options, props.value]);

  const [isControlledOutside, setIsControlledOutside] = React.useState(props.value !== undefined);
  const [popperPlacement, setPopperPlacement] = React.useState<Placement>(popupDirection);

  const {
    nativeSelectValue,
    setNativeSelectValue,
    selectedOptionValue,
    setSelectedOptionValue,
    onNativeSelectChange,
  } = useSelectedOptionController({
    value: propsValue,
    defaultValue,
    isControlledOutside,
    allowClearButton,
    onChange,
  });

  const selected = React.useMemo(
    () => options.find((option) => option.value === selectedOptionValue),
    [options, selectedOptionValue],
  );

  const { inputValue, onInputChange, resetInputValue, resetInputValueBySelectedOption } =
    useInputValueController({
      options,
      accessible,
      selectedValue: selectedOptionValue,
      onInputChange: onInputChangeProp,
    });

  const filteredOptions = React.useMemo(
    () => filter(options, searchable ? inputValue : '', filterFn),
    [filterFn, inputValue, options, searchable],
  );

  const { scrollToElement, optionsWrapperRef, scrollBoxRef } = useScrollListController();

  const {
    focusedOptionValue,
    setFocusedOptionValue,
    resetFocusedOption,
    focusOptionByIndex,
    focusOption,
    selectFocusedValue,
  } = useFocusedOptionController({
    selectedOptionValue,
    filteredOptions,
    scrollToElement,
  });

  const scrollToSelectedOption = () => {
    scrollToElement(findSelectedIndex(filteredOptions, selectedOptionValue), true);
  };

  const { opened, open, close, toggleOpened } = useDropdownOpenedController({
    onOpen: callMultiple(selectFocusedValue, onOpen),
    onOpened: scrollToSelectedOption,
    onClose,
    onClosed: accessible ? resetInputValueBySelectedOption : resetInputValue,
  });

  React.useEffect(
    function updateOptionsValue() {
      const value =
        propsValue !== undefined
          ? propsValue
          : remapFromNativeValueToSelectValue(nativeSelectValue);
      setSelectedOptionValue(value);
      setFocusedOptionValue(value);
    },
    [propsValue, nativeSelectValue, setFocusedOptionValue, setSelectedOptionValue],
  );

  React.useEffect(
    function syncIsControlledState() {
      setIsControlledOutside((oldIsControlled) => {
        const newIsControlled = propsValue !== undefined;
        checkMixControlledAndUncontrolledState(oldIsControlled, newIsControlled);
        return newIsControlled;
      });
    },
    [propsValue],
  );

  useIsomorphicLayoutEffect(() => {
    if (
      filteredOptions.some(({ value }) => nativeSelectValue === value) ||
      (allowClearButton && nativeSelectValue === NOT_SELECTED.NATIVE)
    ) {
      const event = new Event('change', { bubbles: true });

      selectElRef.current?.dispatchEvent(event);
    }
  }, [nativeSelectValue]);

  const openedClassNames = React.useMemo(
    () =>
      (opened &&
        dropdownOffsetDistance === 0 &&
        (popperPlacement.includes('top') ? styles.popUp : styles.popDown)) ||
      undefined,
    [dropdownOffsetDistance, opened, popperPlacement],
  );

  const selectOption = React.useCallback(
    (value: Exclude<SelectValue, null>) => {
      setNativeSelectValue(value ?? NOT_SELECTED.NATIVE);
      close();

      const shouldTriggerOnChangeWhenControlledAndInnerValueIsOutOfSync =
        isControlledOutside && propsValue !== nativeSelectValue && nativeSelectValue === value;

      if (shouldTriggerOnChangeWhenControlledAndInnerValueIsOutOfSync) {
        const event = new Event('change', { bubbles: true });
        selectElRef.current?.dispatchEvent(event);
      }
    },
    [close, setNativeSelectValue, isControlledOutside, propsValue, nativeSelectValue, selectElRef],
  );

  const selectFocused = React.useCallback(() => {
    if (focusedOptionValue === null) {
      return;
    }

    selectOption(focusedOptionValue);
  }, [focusedOptionValue, selectOption]);

  const onInputKeyDown = useInputKeyboardController({
    opened,
    open,
    close,
    resetFocusedOption,
    selectFocused,
    focusOption,
    scrollBoxRef,
    onInputKeyDown: onInputKeyDownProp,
  });

  const onBlur = React.useCallback(() => {
    close();
    const event = new Event('focusout', { bubbles: true });
    selectElRef.current?.dispatchEvent(event);
  }, [close, selectElRef]);

  const onFocus = React.useCallback(() => {
    const event = new Event('focusin', { bubbles: true });
    selectElRef.current?.dispatchEvent(event);
  }, [selectElRef]);

  const handleOptionClick = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const index = Array.prototype.indexOf.call(
        e.currentTarget.parentNode?.children,
        e.currentTarget,
      );
      const option = filteredOptions[index];

      if (option && !option.disabled) {
        selectOption(option.value);
      }
    },
    [filteredOptions, selectOption],
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
      const hovered = option.value === focusedOptionValue;
      const selected = option.value === selectedOptionValue;

      return (
        <React.Fragment key={`${typeof option.value}-${option.value}`}>
          {renderOptionProp({
            option,
            hovered,
            children: option.label,
            selected,
            disabled: option.disabled,
            onClick: handleOptionClick,
            onMouseDown: preventDefault,
            // Используем `onMouseMove` вместо `onMouseEnter/onMouseOver`.
            // Потому что если при навигации с клавиатуры курсор наведён на
            // список, то при первом автоматическом скролле списка вызывается событие MouseOver/MouseEnter
            // обработчик которого фокусирует опцию под курсором, хотя при навигация с клавиатуры пользователь мог уйти дальше по списку, это путает.
            // Причём координаты события меняются на пару пикселей по сравнению с прошлым вызовом,
            // а значит нельзя на них опираться, чтобы запретить обработку такого события.
            // C mousemove такой проблемы нет, что позволяет реализовать поведение при наведении с клавиатуры и при наведении мышью идентично `<select>`.
            onMouseMove: (e) => focusOptionOnMouseMove(e, index),
            id: `${popupAriaId}-${option.value}`,
            ...option,
          })}
        </React.Fragment>
      );
    },
    [
      focusedOptionValue,
      selectedOptionValue,
      renderOptionProp,
      handleOptionClick,
      popupAriaId,
      focusOptionOnMouseMove,
    ],
  );

  const resolvedContent = React.useMemo(() => {
    const defaultDropdownContent =
      filteredOptions.length > 0 ? (
        <div ref={optionsWrapperRef}>{filteredOptions.map(renderOption)}</div>
      ) : (
        <Footnote className={styles.empty}>{emptyText}</Footnote>
      );

    if (typeof renderDropdown === 'function') {
      return renderDropdown({ defaultDropdownContent });
    } else {
      return defaultDropdownContent;
    }
  }, [emptyText, filteredOptions, optionsWrapperRef, renderDropdown, renderOption]);

  const afterItems = useAfterItems({
    value: propsValue,
    nativeSelectValue,
    isControlledOutside,
    opened,
    allowClearButton,
    ClearButton,
    onClearButtonClick: () => {
      setNativeSelectValue(NOT_SELECTED.NATIVE);
      resetInputValue();
      selectInputRef.current && selectInputRef.current.focus();
    },
    clearButtonTestId,
    disabled: restProps.disabled,
    readOnly,
    icon: iconProp,
  });

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

  const ariaActiveDescendantId = focusedOptionValue !== null ? focusedOptionValue : undefined;

  const selectInputAriaProps: React.HTMLAttributes<HTMLElement> = {
    'role': 'combobox',
    'aria-controls': popupAriaId,
    'aria-expanded': opened,
    'aria-activedescendant':
      ariaActiveDescendantId && opened ? `${popupAriaId}-${ariaActiveDescendantId}` : undefined,
    'aria-labelledby': ariaLabelledBy,
    'aria-haspopup': 'listbox',
    'aria-autocomplete': 'none',
  };

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
        readOnly={readOnly || !searchable}
        fetching={fetching}
        searchable={searchable}
        accessible={accessible}
        value={inputValue}
        onKeyDown={!readOnly ? onInputKeyDown : undefined}
        onChange={onInputChange}
        onClick={!readOnly ? toggleOpened : undefined}
        before={before}
        after={afterItems}
        selectType={selectType}
      >
        {selected?.label}
      </CustomSelectInput>

      <FetchingStatus
        fetching={fetching}
        options={filteredOptions}
        fetchingInProgressLabel={fetchingInProgressLabel}
        fetchingCompletedLabel={fetchingCompletedLabel}
      />
      <select
        tabIndex={-1}
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
        {options.map((item) => (
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
