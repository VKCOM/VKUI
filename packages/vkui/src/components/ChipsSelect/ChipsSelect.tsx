import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { useGlobalOnClickOutside } from '../../hooks/useGlobalOnClickOutside';
import { Keys } from '../../lib/accessibility';
import type { Placement } from '../../lib/floating';
import { defaultFilterFn } from '../../lib/select';
import { ChipsInputBase } from '../ChipsInputBase/ChipsInputBase';
import {
  DEFAULT_INPUT_LABEL,
  getNewOptionDataDefault,
  getOptionLabelDefault,
  getOptionValueDefault,
  renderChipDefault,
} from '../ChipsInputBase/constants';
import type { ChipOption, ChipsInputBaseProps } from '../ChipsInputBase/types';
import { CustomSelectDropdown } from '../CustomSelectDropdown/CustomSelectDropdown';
import {
  CustomSelectOption,
  type CustomSelectOptionProps,
} from '../CustomSelectOption/CustomSelectOption';
import { DropdownIcon } from '../DropdownIcon/DropdownIcon';
import type { FormFieldProps } from '../FormField/FormField';
import { IconButton } from '../IconButton/IconButton';
import { Footnote } from '../Typography/Footnote/Footnote';
import {
  DEFAULT_EMPTY_TEXT,
  DEFAULT_SELECTED_BEHAVIOR,
  FOCUS_ACTION_NEXT,
  FOCUS_ACTION_PREV,
  getIconLabelDefault,
  isCreateNewOptionPreset,
  isEmptyOptionPreset,
  isNotServicePreset,
  renderOptionDefault,
} from './constants';
import type { FocusActionType } from './types';
import { useChipsSelect, type UseChipsSelectProps } from './useChipsSelect';
import styles from './ChipsSelect.module.css';

const stylesDropdownVerticalPlacement = {
  top: styles.hostPopUp,
  bottom: styles.hostPopDown,
} as const;

export interface ChipsSelectProps<O extends ChipOption>
  extends ChipsInputBaseProps<O>,
    UseChipsSelectProps<O>,
    Pick<FormFieldProps, 'status' | 'mode' | 'before'> {
  placement?: 'top' | 'bottom';
  /**
   * Отрисовка Spinner вместо списка опций в выпадающем списке
   */
  fetching?: boolean;
  /**
   * Закрытие выпадающего списка после выбора элемента
   */
  closeAfterSelect?: boolean;
  /**
   * Изменение ширины по умолчанию.
   */
  fixDropdownWidth?: boolean;
  /**
   * Принудительно использовать портал.
   */
  forceDropdownPortal?: boolean;
  /**
   * Передача `data-testid`.
   */
  dropdownTestId?: string;
  /**
   * Иконка раскрывающегося списка
   */
  icon?: React.ReactNode;
  /**
   * Функция должна возвращать человекочитаемый текст для открытого/закрытого состояния dropdown'а.
   */
  getIconLabel?(opened: boolean): string;
  /**
   * Добавляет значение в список на событие `onBlur` (использовать вместе с `creatable`)
   */
  addOnBlur?: boolean;
  /**
   * Отключает максимальную высоту по умолчанию
   */
  noMaxHeight?: boolean;

  renderOption?(props: CustomSelectOptionProps, option: O): React.ReactNode;
  /**
   * Событие срабатывающее перед onChange
   */
  onChangeStart?(event: React.MouseEvent | React.KeyboardEvent, option: O): void;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ChipsSelect
 */
export const ChipsSelect = <Option extends ChipOption>({
  // FormFieldProps
  getRootRef,
  className,
  status = 'default',
  before,
  icon,
  getIconLabel = getIconLabelDefault,
  onChangeStart,

  // CustomSelectDropdownProps
  options: optionsProp,
  placement: placementProp = 'bottom',
  closeAfterSelect = true,
  selectedBehavior = DEFAULT_SELECTED_BEHAVIOR,
  emptyText = DEFAULT_EMPTY_TEXT,
  creatable = false,
  fetching = false,
  fixDropdownWidth,
  forceDropdownPortal,
  noMaxHeight = false,
  filterFn = defaultFilterFn,
  dropdownTestId,

  // ChipsInputProps
  getRef,
  value: valueProp,
  defaultValue,
  inputValue: inputValueProp,
  defaultInputValue,
  inputLabel = DEFAULT_INPUT_LABEL,
  disabled,
  getOptionValue = getOptionValueDefault,
  getOptionLabel = getOptionLabelDefault,
  getNewOptionData = getNewOptionDataDefault,
  renderChip = renderChipDefault,
  renderOption = renderOptionDefault,
  onChange,
  onFocus,
  onInputChange: onInputChangeProp,
  onBlur,
  onKeyDown,
  ...restProps
}: ChipsSelectProps<Option>) => {
  const {
    // Связано с ChipsInputProps
    // option
    value,
    addOptionFromInput,
    addOption,
    removeOption,
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
    selectedBehavior,

    // other
    disabled,
  });

  // Связано с ChipsInputProps
  const rootRef = useExternRef(getRootRef);
  const inputRef = useExternRef(getRef, inputRefHook);

  // Связано с CustomSelectDropdownProps
  const [dropdownVerticalPlacement, setDropdownVerticalPlacement] = React.useState<
    Extract<Placement, 'top' | 'bottom'> | undefined
  >(placementProp);
  const dropdownAriaId = React.useId();
  const dropdownScrollBoxRef = React.useRef<HTMLDivElement>(null);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) {
      onFocus(event);
    }

    setOpened(true);
    setFocusedOptionIndex(null);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event);
    }

    // Не добавляем значение, если его нужно выбрать строго из списка
    if (!event.defaultPrevented && !creatable) {
      event.preventDefault();
    }
  };

  const chipsSelectOptions = React.useRef<HTMLElement[]>([]).current;

  const scrollToElement = (index: number, center = false) => {
    const dropdown = dropdownScrollBoxRef.current;
    const item = chipsSelectOptions[index];

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
  };

  const focusOptionByIndex = (index: number, oldIndex: number | null) => {
    const length = options.length;

    if (index < 0) {
      index = length - 1;
    } else if (index >= length) {
      index = 0;
    }

    if (index === oldIndex) {
      return;
    }

    scrollToElement(index);
    setFocusedOptionIndex(index);
  };

  const focusOption = (nextIndex: number | null, type: FocusActionType) => {
    let index = nextIndex === null ? -1 : nextIndex;

    if (type === FOCUS_ACTION_NEXT) {
      index = index + 1;
    } else if (type === FOCUS_ACTION_PREV) {
      index = index - 1;
    }

    focusOptionByIndex(index, focusedOptionIndex);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) {
      onKeyDown(event);
    }

    if (event.defaultPrevented) {
      return;
    }

    switch (event.key) {
      case Keys.ARROW_UP:
      case Keys.ARROW_DOWN:
        event.preventDefault();

        if (!opened) {
          setOpened(true);
          setFocusedOptionIndex(0);
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

  const onDropdownPlacementChange = React.useCallback((placement: Placement) => {
    // console.log(placement);
    if (placement.startsWith('top')) {
      setDropdownVerticalPlacement('top');
    } else if (placement.startsWith('bottom')) {
      setDropdownVerticalPlacement('bottom');
    }
  }, []);

  const onDropdownMouseLeave = React.useCallback(() => {
    setFocusedOptionIndex(null);
  }, [setFocusedOptionIndex]);

  const toggleOpened = () => {
    setOpened((prevOpened) => !prevOpened);
  };

  const handleClickOutside = React.useCallback(() => {
    setOpened(false);
  }, [setOpened]);

  useGlobalOnClickOutside(
    handleClickOutside,
    opened ? rootRef : null,
    opened ? dropdownScrollBoxRef : null,
  );

  return (
    <>
      <ChipsInputBase
        {...restProps}
        disabled={disabled}
        // FormFieldProps
        getRootRef={rootRef}
        className={classNames(
          styles.host,
          opened &&
            dropdownVerticalPlacement &&
            stylesDropdownVerticalPlacement[dropdownVerticalPlacement],
          className,
        )}
        status={status}
        before={before}
        after={
          <IconButton
            className={styles.dropdown}
            activeMode=""
            hoverMode=""
            label={getIconLabel(opened)}
            onClick={toggleOpened}
          >
            {icon ?? <DropdownIcon className={styles.icon} opened={opened} />}
          </IconButton>
        }
        // option
        value={value}
        onAddChipOption={addOptionFromInput}
        onRemoveChipOption={removeOption}
        renderChip={renderChip}
        // input
        getRef={inputRef}
        inputLabel={inputLabel}
        inputValue={inputValue}
        onInputChange={onInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        // a11y
        role="combobox"
        aria-expanded={opened}
        aria-controls={dropdownAriaId}
        aria-haspopup="listbox"
      />
      {opened && (
        <CustomSelectDropdown
          data-testid={dropdownTestId}
          targetRef={rootRef}
          placement={placementProp}
          scrollBoxRef={dropdownScrollBoxRef}
          onPlacementChange={onDropdownPlacementChange}
          onMouseLeave={onDropdownMouseLeave}
          fetching={fetching}
          sameWidth={fixDropdownWidth}
          forcePortal={forceDropdownPortal}
          noMaxHeight={noMaxHeight}
          // a11y
          id={dropdownAriaId}
          role="listbox"
        >
          {options.map((option, index) => {
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
                  hovered={focusedOptionIndex === index}
                  onMouseDown={() => addOptionFromInput(inputValue)}
                  onMouseEnter={() => setFocusedOptionIndex(index)}
                >
                  {option.actionText}
                </CustomSelectOption>
              );
            }
            return (
              <React.Fragment key={`${typeof option.value}-${option.label}`}>
                {renderOption(
                  {
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
          })}
        </CustomSelectDropdown>
      )}
    </>
  );
};
