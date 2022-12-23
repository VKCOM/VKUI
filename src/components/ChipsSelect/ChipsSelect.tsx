import * as React from 'react';
import { DropdownIcon } from '../DropdownIcon/DropdownIcon';
import { classNames, noop } from '@vkontakte/vkjs';
import { ChipOption, ChipValue, RenderChip } from '../Chip/Chip';
import { ChipsInputProps } from '../ChipsInput/ChipsInput';
import { ChipsInputBase, chipsInputDefaultProps } from '../ChipsInputBase/ChipsInputBase';
import {
  CustomSelectOption,
  CustomSelectOptionProps,
} from '../CustomSelectOption/CustomSelectOption';
import { useChipsSelect } from '../../hooks/useChipsSelect';
import { useDOM } from '../../lib/dom';
import { Footnote } from '../Typography/Footnote/Footnote';
import { useExternRef } from '../../hooks/useExternRef';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { defaultFilterFn } from '../../lib/select';
import { Placement } from '../Popper/Popper';
import { CustomSelectDropdown } from '../CustomSelectDropdown/CustomSelectDropdown';
import { FormField } from '../FormField/FormField';
import { IconButton } from '../IconButton/IconButton';
import styles from './ChipsSelect.module.css';

export interface ChipsSelectProps<Option extends ChipOption>
  extends Omit<ChipsInputProps<Option>, 'after'> {
  popupDirection?: 'top' | 'bottom';
  options?: Option[];
  filterFn?:
    | false
    | ((
        value?: string,
        option?: Option,
        getOptionLabel?: Pick<ChipsInputProps<Option>, 'getOptionLabel'>['getOptionLabel'],
      ) => boolean);
  /**
   * Возможность создавать чипы которых нет в списке (по enter или с помощью пункта в меню, см creatableText)
   */
  creatable?: boolean;
  /**
   * Отрисовка лоадера вместо списка опций в выпадающем списке
   */
  fetching?: boolean;
  renderOption?: (props: CustomSelectOptionProps) => React.ReactNode;
  /**
   * Показывать или скрывать уже выбранные опции
   */
  showSelected?: boolean;
  /**
   * Текст для пункта создающего чипы при клике, так же отвечает за то будет ли показан этот пункт (показывается после того как в списке не отсанется опций)
   */
  creatableText?: string;
  /**
   * Текст который показывается если список опций пуст
   */
  emptyText?: string;
  /**
   * Событие срабатывающее перед onChange
   */
  onChangeStart?: (e: React.MouseEvent | React.KeyboardEvent, option: Option) => void;
  /**
   * Закрытие выпадающего списка после выбора элемента
   */
  closeAfterSelect?: boolean;
  fixDropdownWidth?: boolean;
  forceDropdownPortal?: boolean;
}

type FocusActionType = 'next' | 'prev';

const FOCUS_ACTION_NEXT: FocusActionType = 'next';
const FOCUS_ACTION_PREV: FocusActionType = 'prev';

const chipsSelectDefaultProps: ChipsSelectProps<any> = {
  ...chipsInputDefaultProps,
  emptyText: 'Ничего не найдено',
  creatableText: 'Создать значение',
  onChangeStart: noop,
  creatable: false,
  fetching: false,
  showSelected: true,
  closeAfterSelect: true,
  options: [],
  filterFn: defaultFilterFn,
  renderOption(props) {
    return <CustomSelectOption {...props} />;
  },
};

/**
 * @see https://vkcom.github.io/VKUI/#/ChipsSelect
 */
export const ChipsSelect = <Option extends ChipOption>(props: ChipsSelectProps<Option>) => {
  const propsWithDefault = { ...chipsSelectDefaultProps, ...props };
  const {
    style,
    onFocus,
    onKeyDown,
    className,
    fetching,
    renderOption,
    emptyText,
    getRef,
    getRootRef,
    disabled,
    placeholder,
    tabIndex,
    getOptionValue,
    getOptionLabel,
    showSelected,
    getNewOptionData,
    renderChip,
    popupDirection,
    creatable,
    filterFn,
    inputValue,
    creatableText,
    closeAfterSelect,
    onChangeStart,
    before,
    options,
    fixDropdownWidth,
    forceDropdownPortal,
    ...restProps
  } = propsWithDefault;

  const { document } = useDOM();

  const [popperPlacement, setPopperPlacement] = React.useState<Placement | undefined>(undefined);

  const scrollBoxRef = React.useRef<HTMLDivElement>(null);
  const rootRef = useExternRef(getRef);
  const {
    fieldValue,
    selectedOptions = [],
    opened,
    setOpened,
    addOptionFromInput,
    filteredOptions,
    addOption,
    handleInputChange,
    clearInput,
    focusedOption,
    setFocusedOption,
    focusedOptionIndex,
    setFocusedOptionIndex,
  } = useChipsSelect(propsWithDefault);

  const showCreatable = Boolean(
    creatable && creatableText && !filteredOptions.length && fieldValue,
  );

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setOpened(true);
    setFocusedOptionIndex(0);
    onFocus!(e);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (e.target !== rootRef.current && !rootRef.current?.contains(e.target as Node)) {
      setOpened(false);
    }
  };

  const chipsSelectOptions = React.useRef<HTMLElement[]>([]).current;

  const scrollToElement = (index: number, center = false) => {
    const dropdown = scrollBoxRef.current;
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

  const focusOptionByIndex = (index: number, oldIndex: number) => {
    const { length } = filteredOptions;

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
    let index = typeof nextIndex !== 'number' ? -1 : nextIndex;

    if (type === FOCUS_ACTION_NEXT) {
      index = index + 1;
    } else if (type === FOCUS_ACTION_PREV) {
      index = index - 1;
    }

    if (focusedOptionIndex != null) {
      focusOptionByIndex(index, focusedOptionIndex);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown!(e);

    if (e.key === 'ArrowUp' && !e.defaultPrevented) {
      e.preventDefault();

      if (!opened) {
        setOpened(true);
        setFocusedOptionIndex(0);
      } else {
        focusOption(focusedOptionIndex, FOCUS_ACTION_PREV);
      }
    }

    if (e.key === 'ArrowDown' && !e.defaultPrevented) {
      e.preventDefault();

      if (!opened) {
        setOpened(true);
        setFocusedOptionIndex(0);
      } else {
        focusOption(focusedOptionIndex, FOCUS_ACTION_NEXT);
      }
    }

    if (e.key === 'Enter' && !e.defaultPrevented && opened && focusedOptionIndex != null) {
      const option = filteredOptions[focusedOptionIndex];

      if (option) {
        onChangeStart!(e, option);

        if (!e.defaultPrevented) {
          addOption(option);
          setFocusedOptionIndex(null);
          clearInput();
          closeAfterSelect && setOpened(false);
          e.preventDefault();
        }
      } else if (!creatable) {
        e.preventDefault();
      }
    }

    if (['Escape', 'Tab'].includes(e.key) && !e.defaultPrevented && opened) {
      setOpened(false);
    }
  };

  React.useEffect(() => {
    if (focusedOptionIndex != null && filteredOptions[focusedOptionIndex]) {
      setFocusedOption(filteredOptions[focusedOptionIndex]);
    } else if (focusedOptionIndex === null || focusedOptionIndex === 0) {
      setFocusedOption(null);
    }
  }, [focusedOptionIndex, filteredOptions, setFocusedOption]);

  React.useEffect(() => {
    const index = focusedOption
      ? filteredOptions.findIndex(({ value }) => value === focusedOption.value)
      : -1;

    if (index === -1 && !!filteredOptions.length && !showCreatable && closeAfterSelect) {
      setFocusedOption(filteredOptions[0]);
    }
  }, [filteredOptions, focusedOption, showCreatable, closeAfterSelect, setFocusedOption]);

  useGlobalEventListener(document, 'click', handleClickOutside);

  const renderChipWrapper = (renderChipProps: RenderChip<Option> | undefined) => {
    if (renderChipProps === undefined) {
      return null;
    }
    const onRemoveWrapper = (e: React.MouseEvent | undefined, value: ChipValue | undefined) => {
      e?.preventDefault();
      e?.stopPropagation();

      renderChipProps.onRemove?.(e, value);
    };

    return renderChip!({
      ...renderChipProps,
      onRemove: onRemoveWrapper,
    });
  };

  const isPopperDirectionTop = popperPlacement?.includes('top');

  const onPlacementChange = React.useCallback(
    (placement?: Placement) => {
      setPopperPlacement(placement);
    },
    [setPopperPlacement],
  );

  const onDropdownMouseLeave = React.useCallback(() => {
    setFocusedOptionIndex(null);
  }, [setFocusedOptionIndex]);

  const observableRefs = React.useMemo(() => [scrollBoxRef, rootRef], [rootRef, scrollBoxRef]);

  const toggleOpened = () => {
    setOpened((prevOpened) => !prevOpened);
  };

  return (
    <>
      <FormField
        getRootRef={rootRef}
        style={style}
        className={classNames(
          styles['ChipsSelect'],
          opened &&
            (isPopperDirectionTop
              ? styles['ChipsSelect--pop-up']
              : styles['ChipsSelect--pop-down']),
          className,
        )}
        disabled={disabled}
        role="application"
        aria-disabled={disabled}
        aria-readonly={restProps.readOnly}
        after={
          <IconButton
            className={styles['ChipsSelect__dropdown']}
            activeMode=""
            hoverMode=""
            // TODO: add label customization
            aria-label={opened ? 'Скрыть' : 'Развернуть'}
            onClick={toggleOpened}
          >
            <DropdownIcon className={styles['ChipsSelect__icon']} opened={opened} />
          </IconButton>
        }
        before={before}
      >
        <ChipsInputBase
          {...restProps}
          tabIndex={tabIndex}
          value={selectedOptions}
          inputValue={fieldValue}
          getNewOptionData={getNewOptionData}
          getOptionLabel={getOptionLabel}
          getOptionValue={getOptionValue}
          renderChip={renderChipWrapper}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          getRef={getRef}
          disabled={disabled}
          onInputChange={handleInputChange}
        />
      </FormField>
      {opened && (
        <CustomSelectDropdown
          targetRef={rootRef}
          placement={popupDirection}
          scrollBoxRef={scrollBoxRef}
          observableRefs={observableRefs}
          onPlacementChange={onPlacementChange}
          onMouseLeave={onDropdownMouseLeave}
          fetching={fetching}
          className={styles['ChipsSelect__options']}
          sameWidth={fixDropdownWidth}
          forcePortal={forceDropdownPortal}
        >
          {showCreatable && (
            <CustomSelectOption
              hovered={focusedOptionIndex === 0}
              onMouseDown={addOptionFromInput}
              onMouseEnter={() => setFocusedOptionIndex(0)}
            >
              {creatableText}
            </CustomSelectOption>
          )}
          {!filteredOptions?.length && !showCreatable && emptyText ? (
            <Footnote className={styles['ChipsSelect__empty']}>{emptyText}</Footnote>
          ) : (
            filteredOptions.map((option: Option, index: number) => {
              const label = getOptionLabel!(option);
              const hovered =
                focusedOption && getOptionValue!(option) === getOptionValue!(focusedOption);
              const selected = selectedOptions.find((selectedOption: Option) => {
                return getOptionValue!(selectedOption) === getOptionValue!(option);
              });
              const value = getOptionValue!(option);

              return (
                <React.Fragment key={`${typeof value}-${value}`}>
                  {renderOption!({
                    className: styles['ChipsSelect__option'],
                    option,
                    hovered: Boolean(hovered),
                    children: label,
                    selected: !!selected,
                    getRootRef: (e) => {
                      if (e) {
                        return (chipsSelectOptions[index] = e);
                      }
                      return undefined;
                    },
                    onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => {
                      onChangeStart?.(e, option);

                      if (!e.defaultPrevented) {
                        closeAfterSelect && setOpened(false);
                        addOption(option);
                        clearInput();
                      }
                    },
                    onMouseEnter: () => setFocusedOptionIndex(index),
                  })}
                </React.Fragment>
              );
            })
          )}
        </CustomSelectDropdown>
      )}
    </>
  );
};
