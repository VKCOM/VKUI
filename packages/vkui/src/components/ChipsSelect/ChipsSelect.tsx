'use client';

import * as React from 'react';
import { type MouseEventHandler } from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { useGlobalOnEventOutside } from '../../hooks/useGlobalOnClickOutside';
import { Keys } from '../../lib/accessibility';
import type { Placement } from '../../lib/floating';
import { defaultFilterFn } from '../../lib/select';
import { ChipsInputBase } from '../ChipsInputBase/ChipsInputBase';
import {
  getNewOptionDataDefault,
  getOptionLabelDefault,
  getOptionValueDefault,
  renderChipDefault,
} from '../ChipsInputBase/constants';
import type { ChipOption, ChipsInputBaseProps } from '../ChipsInputBase/types';
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
import { Footnote } from '../Typography/Footnote/Footnote';
import {
  DEFAULT_EMPTY_TEXT,
  DEFAULT_SELECTED_BEHAVIOR,
  FOCUS_ACTION_NEXT,
  FOCUS_ACTION_PREV,
  isCreateNewOptionPreset,
  isEmptyOptionPreset,
  isNotServicePreset,
  renderOptionDefault,
} from './constants';
import type { FocusActionType, OptionPreset } from './types';
import { useChipsSelect, type UseChipsSelectProps } from './useChipsSelect';
import styles from './ChipsSelect.module.css';

const findIndexAfter = <O extends ChipOption>(
  options: Array<OptionPreset<O>> = [],
  startIndex = -1,
) => {
  if (startIndex >= options.length - 1) {
    return -1;
  }
  return options.findIndex(
    (option, i) => i > startIndex && (!isNotServicePreset(option) || !option.disabled),
  );
};

const findIndexBefore = <O extends ChipOption>(
  options: Array<OptionPreset<O>> = [],
  endIndex: number = options.length,
) => {
  let result = -1;
  if (endIndex <= 0) {
    return result;
  }
  for (let i = endIndex - 1; i >= 0; i--) {
    let option = options[i];

    if (!isNotServicePreset(option) || !option.disabled) {
      result = i;
      break;
    }
  }
  return result;
};

export interface ChipsSelectProps<O extends ChipOption>
  extends ChipsInputBaseProps<O>,
    UseChipsSelectProps<O>,
    Pick<FormFieldProps, 'status' | 'mode' | 'before'>,
    Pick<CustomSelectDropdownProps, 'overscrollBehavior'> {
  /**
   * Расположение выпадающего списка.
   */
  placement?: 'top' | 'bottom';
  /**
   * Отрисовка Spinner вместо списка опций в выпадающем списке.
   */
  fetching?: boolean;
  /**
   * Закрытие выпадающего списка после выбора элемента.
   */
  closeAfterSelect?: boolean;
  /**
   * Ширина раскрывающегося списка зависит от контента.
   */
  dropdownAutoWidth?: boolean;
  /**
   * Принудительно использовать портал.
   */
  forceDropdownPortal?: boolean;
  /**
   * Передает атрибут `data-testid` для дропдауна.
   */
  dropdownTestId?: string;
  /**
   * Иконка раскрывающегося списка.
   */
  icon?: React.ReactNode;
  /**
   * Добавляет значение в список на событие `onBlur` (использовать вместе с `creatable`).
   */
  addOnBlur?: boolean;
  /**
   * Отключает максимальную высоту по умолчанию.
   */
  noMaxHeight?: boolean;
  /**
   * Функция для отрисовки кастомной опции в выпадающем списке.
   */
  renderOption?: (props: CustomSelectOptionProps, option: O) => React.ReactNode;
  /**
   * Рендер-проп для кастомного рендера содержимого дропдауна.
   * В `defaultDropdownContent` содержится список опций.
   */
  renderDropdown?: ({
    defaultDropdownContent,
  }: {
    defaultDropdownContent: React.ReactNode;
  }) => React.ReactNode;
  /**
   * Событие срабатывающее перед `onChange`.
   */
  onChangeStart?: (event: React.MouseEvent | React.KeyboardEvent, option: O) => void;

  /**
   * Отступ от выпадающего списка.
   */
  dropdownOffsetDistance?: number;

  /**
   * Если `true`, то справа будет отображаться кнопка для очистки значения.
   */
  allowClearButton?: boolean;
}

/**
 * @see https://vkui.io/components/chips-select
 */
export const ChipsSelect = <Option extends ChipOption>({
  // FormFieldProps
  id: labelledbyId,
  getRootRef,
  className,
  status = 'default',
  icon: dropdownIconProp,
  onChangeStart,

  // CustomSelectDropdownProps
  options: optionsProp,
  placement: placementProp = 'bottom',
  closeAfterSelect = true,
  selectedBehavior = DEFAULT_SELECTED_BEHAVIOR,
  emptyText = DEFAULT_EMPTY_TEXT,
  creatable = false,
  fetching = false,
  dropdownAutoWidth,
  forceDropdownPortal,
  noMaxHeight = false,
  filterFn = defaultFilterFn,
  sortFn = false,
  dropdownTestId,
  onClose,
  onOpen,
  overscrollBehavior,
  renderDropdown,

  // ChipsInputProps
  getRef,
  value: valueProp,
  defaultValue,
  inputValue: inputValueProp,
  defaultInputValue,
  disabled,
  readOnly,
  getOptionValue = getOptionValueDefault,
  getOptionLabel = getOptionLabelDefault,
  getNewOptionData = getNewOptionDataDefault,
  renderChip = renderChipDefault,
  renderOption = renderOptionDefault,
  onChange,
  onFocus: onFocusProp,
  onInputChange: onInputChangeProp,
  onBlur: onBlurProp,
  onKeyDown: onKeyDownProp,
  dropdownOffsetDistance = 0,
  allowClearButton,
  clearButtonTestId,
  delimiter,

  // a11y
  chipsListLabel,
  ...restProps
}: ChipsSelectProps<Option>): React.ReactNode => {
  const {
    // Связано с ChipsInputProps
    // option
    value,
    addOptionFromInput,
    addOption,
    removeOption,
    clearOptions,
    // input
    inputRef: inputRefHook,
    inputValue,
    clearInput,
    onInputChange,

    // Связано с CustomSelectDropdownProps
    options,
    opened,
    setOpened,
    focusedOption,
    focusedOptionIndex,
    setFocusedOption,
    setFocusedOptionIndex,
  } = useChipsSelect({
    // option
    value: valueProp,
    defaultValue,
    onChange,
    getOptionValue,
    getOptionLabel,
    getNewOptionData,

    // input
    inputValue: inputValueProp,
    defaultInputValue,
    onInputChange: onInputChangeProp,

    // dropdown
    options: optionsProp,
    emptyText,
    creatable,
    filterFn,
    sortFn,
    selectedBehavior,
    onClose,
    onOpen,

    // other
    disabled,
    delimiter,
  });

  // Связано с ChipsInputProps
  const rootRef = useExternRef(getRootRef);
  const inputRef = useExternRef(getRef, inputRefHook);

  // Связано с CustomSelectDropdownProps
  const [dropdownVerticalPlacement, setDropdownVerticalPlacement] = React.useState<
    'top' | 'bottom'
  >(placementProp);

  const onDropdownPlacementChange = React.useCallback((placement: Placement) => {
    if (placement.startsWith('top')) {
      setDropdownVerticalPlacement('top');
    } else if (placement.startsWith('bottom')) {
      setDropdownVerticalPlacement('bottom');
    }
  }, []);

  const dropdownId = React.useId();
  const dropdownCurrentItemId =
    focusedOptionIndex !== null ? `${dropdownId}-${focusedOptionIndex}` : undefined;
  const dropdownScrollBoxRef = React.useRef<HTMLDivElement>(null);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onFocusProp) {
      onFocusProp(event);
    }

    if (!readOnly) {
      setOpened(true);
      setFocusedOptionIndex(null);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlurProp) {
      onBlurProp(event);
    }

    // Не добавляем значение, если его нужно выбрать строго из списка
    if (!readOnly && !event.defaultPrevented && !creatable) {
      event.preventDefault();
    }
  };

  const chipsSelectOptions = React.useRef<HTMLElement[]>([]).current;

  const scrollToElement = (index: number, center = false) => {
    const dropdown = dropdownScrollBoxRef.current;
    const item = chipsSelectOptions[index];

    /* istanbul ignore if: невозможный кейс (в SSR вызова этой функции не будет) */
    if (!item || !dropdown) {
      return;
    }

    const dropdownHeight = dropdown.offsetHeight;
    const scrollTop = dropdown.scrollTop;
    const itemTop = item.offsetTop;
    const itemHeight = item.offsetHeight;

    /* istanbul ignore next: нет представления как воспроизвести */
    if (center) {
      dropdown.scrollTop = itemTop - dropdownHeight / 2 + itemHeight / 2;
    } else if (itemTop + itemHeight > dropdownHeight + scrollTop) {
      dropdown.scrollTop = itemTop - dropdownHeight + itemHeight;
    } else if (itemTop < scrollTop) {
      dropdown.scrollTop = itemTop;
    }
  };

  const focusOptionByIndex = (index: number, oldIndex: number | null) => {
    if (index === oldIndex) {
      /* istanbul ignore next: нет представления как воспроизвести */
      return;
    }

    const option = options[index];

    if (isNotServicePreset(option) && option.disabled) {
      return;
    }

    scrollToElement(index);
    setFocusedOptionIndex(index);
  };

  const focusOption = (nextIndex: number | null, type: FocusActionType) => {
    let index = nextIndex === null ? -1 : nextIndex;

    if (type === FOCUS_ACTION_NEXT) {
      const nextIndex = findIndexAfter(options, index);
      index = nextIndex === -1 ? findIndexAfter(options) : nextIndex; // Следующий за index или первый валидный до index
    } else if (type === FOCUS_ACTION_PREV) {
      const beforeIndex = findIndexBefore(options, index);
      index = beforeIndex === -1 ? findIndexBefore(options) : beforeIndex; // Предшествующий index или последний валидный после index
    }

    focusOptionByIndex(index, focusedOptionIndex);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDownProp) {
      onKeyDownProp(event);
    }

    if (event.defaultPrevented || readOnly) {
      return;
    }

    switch (event.key) {
      case Keys.ARROW_UP:
      case Keys.ARROW_DOWN:
        event.preventDefault();

        if (!opened) {
          setOpened(true);
          focusOption(null, FOCUS_ACTION_NEXT);
        } else {
          focusOption(
            focusedOptionIndex,
            event.key === Keys.ARROW_UP ? FOCUS_ACTION_PREV : FOCUS_ACTION_NEXT,
          );
        }
        break;
      case Keys.ENTER: {
        if (!opened) {
          break;
        }
        if (focusedOptionIndex != null) {
          const foundOption = options[focusedOptionIndex];
          if (foundOption && isNotServicePreset(foundOption)) {
            event.preventDefault();

            if (onChangeStart) {
              onChangeStart(event, foundOption);
            }

            addOption(foundOption);
            setFocusedOptionIndex(null);
            clearInput();
            if (closeAfterSelect) {
              setOpened(false);
            }

            break;
          }
        }

        if (!creatable) {
          event.preventDefault();
        }
        break;
      }
      case Keys.ESCAPE:
      case Keys.TAB:
        if (opened) {
          setOpened(false);
        }
    }
  };

  React.useEffect(() => {
    if (focusedOptionIndex === null) {
      setFocusedOption(null);
    } else {
      const foundFocusedOptionIndex = options[focusedOptionIndex];

      if (foundFocusedOptionIndex && isNotServicePreset(foundFocusedOptionIndex)) {
        setFocusedOption(foundFocusedOptionIndex);
      }
    }
  }, [options, focusedOptionIndex, setFocusedOption]);

  const onDropdownMouseLeave = React.useCallback(() => {
    setFocusedOptionIndex(null);
  }, [setFocusedOptionIndex]);

  const handleClickOutside = React.useCallback(() => {
    setOpened(false);
  }, [setOpened]);

  useGlobalOnEventOutside(
    'mousedown', // см. https://github.com/VKCOM/VKUI/pull/8582
    handleClickOutside,
    opened ? rootRef : null,
    opened ? dropdownScrollBoxRef : null,
  );

  const onDropdownIconClick: MouseEventHandler<SVGSVGElement> = React.useCallback(
    (e) => {
      if (opened) {
        e.preventDefault();
        setOpened(false);
      }
    },
    [opened, setOpened],
  );

  const dropdownContent = React.useMemo(() => {
    const defaultDropdownContent = options.map((option, index) => {
      const dropdownItemId = `${dropdownId}-${index}`;

      if (isEmptyOptionPreset(option)) {
        return (
          <Footnote key="empty-text" className={styles.empty}>
            {option.placeholder}
          </Footnote>
        );
      }
      if (isCreateNewOptionPreset(option)) {
        return (
          <CustomSelectOption
            key="create-new-option"
            id={dropdownItemId}
            hovered={focusedOptionIndex === index}
            onMouseDown={() => addOptionFromInput(inputValue)}
            onMouseEnter={() => setFocusedOptionIndex(index)}
          >
            {option.actionText}
          </CustomSelectOption>
        );
      }
      return (
        <React.Fragment key={`${typeof option.value}-${option.value}`}>
          {renderOption(
            {
              id: dropdownItemId,
              disabled: option.disabled,
              hovered: focusedOption
                ? getOptionValue(option) === getOptionValue(focusedOption)
                : false,
              children: option.label,
              selected: !!value.find(
                (selectedOption: Option) =>
                  getOptionValue(selectedOption) === getOptionValue(option),
              ),
              getRootRef(node) {
                if (node) {
                  chipsSelectOptions[index] = node;
                }
              },
              onMouseDown(event: React.MouseEvent<HTMLDivElement>) {
                if (option.disabled) {
                  return;
                }
                if (onChangeStart) {
                  onChangeStart(event, option);
                }

                if (!event.defaultPrevented) {
                  closeAfterSelect && setOpened(false);
                  addOption(option);
                  clearInput();
                }
              },
              onMouseEnter() {
                setFocusedOptionIndex(index);
              },
            },
            option,
          )}
        </React.Fragment>
      );
    });

    if (renderDropdown) {
      return renderDropdown({
        defaultDropdownContent,
      });
    }
    return defaultDropdownContent;
  }, [
    addOption,
    addOptionFromInput,
    chipsSelectOptions,
    clearInput,
    closeAfterSelect,
    dropdownId,
    focusedOption,
    focusedOptionIndex,
    getOptionValue,
    inputValue,
    onChangeStart,
    options,
    renderDropdown,
    renderOption,
    setFocusedOptionIndex,
    setOpened,
    value,
  ]);

  const openedClassNames = React.useMemo(
    () =>
      (opened &&
        dropdownOffsetDistance === 0 &&
        (dropdownVerticalPlacement.includes('top') ? styles.popUp : styles.popDown)) ||
      undefined,
    [dropdownOffsetDistance, opened, dropdownVerticalPlacement],
  );

  const clearButtonShown = allowClearButton && (!!value.length || !!inputValue.length);

  return (
    <>
      <ChipsInputBase
        {...restProps}
        disabled={disabled}
        readOnly={readOnly}
        clearButtonShown={clearButtonShown}
        clearButtonTestId={clearButtonTestId}
        // FormFieldProps
        id={labelledbyId}
        getRootRef={rootRef}
        className={classNames(styles.host, openedClassNames, className)}
        status={status}
        after={
          dropdownIconProp || (
            <DropdownIcon
              opened={opened}
              onClick={onDropdownIconClick}
              className={classNames(
                styles.dropdownIcon,
                clearButtonShown && styles.dropdownIconWithOffset,
              )}
            />
          )
        }
        // option
        value={value}
        onAddChipOption={addOptionFromInput}
        onRemoveChipOption={removeOption}
        renderChip={renderChip}
        onClear={clearOptions}
        // input
        getRef={inputRef}
        inputValue={inputValue}
        onInputChange={onInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        // a11y
        role="combobox"
        aria-expanded={opened}
        aria-autocomplete="list"
        aria-activedescendant={opened ? dropdownCurrentItemId : undefined}
        aria-haspopup="listbox"
        chipsListLabel={chipsListLabel}
      />
      {opened && (
        <CustomSelectDropdown
          data-testid={dropdownTestId}
          targetRef={rootRef}
          placement={dropdownVerticalPlacement}
          scrollBoxRef={dropdownScrollBoxRef}
          onPlacementChange={onDropdownPlacementChange}
          onMouseLeave={onDropdownMouseLeave}
          fetching={fetching}
          autoWidth={dropdownAutoWidth}
          forcePortal={forceDropdownPortal}
          noMaxHeight={noMaxHeight}
          offsetDistance={dropdownOffsetDistance}
          overscrollBehavior={overscrollBehavior}
          // a11y
          id={dropdownId}
          role="listbox"
          aria-labelledby={labelledbyId}
        >
          {dropdownContent}
        </CustomSelectDropdown>
      )}
    </>
  );
};
