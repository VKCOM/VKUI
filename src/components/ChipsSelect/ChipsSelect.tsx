import * as React from 'react';
import { Icon20Dropdown } from '@vkontakte/icons';
import { classNames } from '../../lib/classNames';
import Spinner from '../Spinner/Spinner';
import CustomScrollView from '../CustomScrollView/CustomScrollView';
import ChipsInput, { ChipsInputOption, ChipsInputProps, ChipsInputValue, RenderChip, chipsInputDefaultProps } from '../ChipsInput/ChipsInput';
import CustomSelectOption, { CustomSelectOptionProps } from '../CustomSelectOption/CustomSelectOption';
import { useChipsSelect } from './useChipsSelect';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { noop } from '../../lib/utils';
import { useDOM } from '../../lib/dom';
import Caption from '../Typography/Caption/Caption';
import { prefixClass } from '../../lib/prefixClass';
import { useExternRef } from '../../hooks/useExternRef';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import './ChipsSelect.css';

export interface ChipsSelectProps<Option extends ChipsInputOption> extends ChipsInputProps<Option>, AdaptivityProps {
  popupDirection?: 'top' | 'bottom';
  options?: Option[];
  filterFn?: (value?: string, option?: Option, getOptionLabel?: Pick<ChipsInputProps<ChipsInputOption>, 'getOptionLabel'>['getOptionLabel']) => boolean;
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
   * Закрытие выпадающиего списка после выбора элемента
   */
  closeAfterSelect?: boolean;
}

type focusActionType = 'next' | 'prev';

const FOCUS_ACTION_NEXT: focusActionType = 'next';
const FOCUS_ACTION_PREV: focusActionType = 'prev';

const ChipsSelect = <Option extends ChipsInputOption>(props: ChipsSelectProps<Option>) => {
  const {
    style, onFocus, onKeyDown, className, fetching, renderOption, emptyText,
    getRef, getRootRef, disabled, placeholder, tabIndex, getOptionValue, getOptionLabel, showSelected,
    getNewOptionData, renderChip, popupDirection, creatable, filterFn, inputValue, creatableText, sizeY,
    closeAfterSelect, onChangeStart, after, ...restProps
  } = props;

  const { document } = useDOM();

  const scrollBoxRef = React.useRef<HTMLDivElement>(null);
  const rootRef = useExternRef(getRef);
  const {
    fieldValue, selectedOptions, opened, setOpened, addOptionFromInput,
    filteredOptions, addOption, handleInputChange, clearInput,
    focusedOption, setFocusedOption, focusedOptionIndex, setFocusedOptionIndex,
  } = useChipsSelect(props);

  const showCreatable = Boolean(creatable && creatableText && !filteredOptions.length && fieldValue);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setOpened(true);
    setFocusedOptionIndex(0);
    onFocus(e);
  };

  const handleClickOutside = (e: MouseEvent) => {
    const { current: rootNode } = rootRef;
    if (rootNode && e.target !== rootNode && !rootNode.contains(e.target as Node)) {
      setOpened(false);
    }
  };

  const chipsSelectOptions = React.useRef<HTMLElement[]>([]).current;

  const scrollToElement = (index: number, center = false) => {
    const dropdown = scrollBoxRef.current;
    const item = chipsSelectOptions[index];

    if (!item) {
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

  const focusOption = (nextIndex: number|null, type: focusActionType) => {
    let index = typeof nextIndex !== 'number' ? -1 : nextIndex;

    if (type === FOCUS_ACTION_NEXT) {
      index = index + 1;
    } else if (type === FOCUS_ACTION_PREV) {
      index = index - 1;
    }

    focusOptionByIndex(index, focusedOptionIndex);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown(e);

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

    if (e.key === 'Enter' && !e.defaultPrevented && opened) {
      const option = filteredOptions[focusedOptionIndex];

      if (option) {
        onChangeStart(e, option);

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
    if (filteredOptions[focusedOptionIndex]) {
      setFocusedOption(filteredOptions[focusedOptionIndex]);
    } else if (focusedOptionIndex === null || focusedOptionIndex === 0) {
      setFocusedOption(null);
    }
  }, [focusedOptionIndex, filteredOptions]);

  React.useEffect(() => {
    const index = focusedOption ? filteredOptions.findIndex(({ value }) => value === focusedOption.value) : -1;

    if (index === -1 && !!filteredOptions.length && !showCreatable && closeAfterSelect) {
      setFocusedOption(filteredOptions[0]);
    }
  }, [filteredOptions, focusedOption, showCreatable, closeAfterSelect]);

  useGlobalEventListener(document, 'click', handleClickOutside);

  const renderChipWrapper = (renderChipProps: RenderChip<Option>) => {
    const { onRemove } = renderChipProps;

    const onRemoveWrapper = (e: React.MouseEvent, value: ChipsInputValue) => {
      e.preventDefault();
      e.stopPropagation();

      onRemove(e, value);
    };

    return renderChip({ ...renderChipProps, onRemove: onRemoveWrapper });
  };

  return (
    <div
      vkuiClass={classNames('ChipsSelect', `ChipsSelect--sizeY-${sizeY}`)}
      ref={rootRef}
      style={style}
      className={className}
    >
      <ChipsInput
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
        vkuiClass={classNames({
          ['ChipsSelect__open']: opened,
          ['ChipsSelect__open--popupDirectionTop']: popupDirection === 'top',
        })}
        getRef={getRef}
        disabled={disabled}
        onInputChange={handleInputChange}
        after={<Icon20Dropdown />}
      />
      {opened &&
        <div
          vkuiClass={classNames('ChipsSelect__options', {
            ['ChipsSelect__options--popupDirectionTop']: popupDirection === 'top',
          })}
          onMouseLeave={() => setFocusedOptionIndex(null)}
        >
          <CustomScrollView boxRef={scrollBoxRef}>
            {fetching ? (
              <div vkuiClass="ChipsSelect__fetching">
                <Spinner size="small" />
              </div>
            ) : (
              <React.Fragment>
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
                  <Caption level="1" weight="regular" vkuiClass="ChipsSelect__empty">{emptyText}</Caption>
                ) :
                  filteredOptions.map((option: Option, index: number) => {
                    const label = getOptionLabel(option);
                    const hovered = focusedOption && getOptionValue(option) === getOptionValue(focusedOption);
                    const selected = selectedOptions.find((selectedOption: Option) => {
                      return getOptionValue(selectedOption) === getOptionValue(option);
                    });

                    return (
                      <React.Fragment key={getOptionValue(option)}>
                        {renderOption({
                          className: prefixClass('ChipsSelect__option'),
                          option,
                          hovered,
                          children: label,
                          selected: !!selected,
                          getRootRef: (e) => chipsSelectOptions[index] = e,
                          onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => {
                            onChangeStart(e, option);

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
                }
              </React.Fragment>
            )}
          </CustomScrollView>
        </div>
      }
    </div>
  );
};

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
  filterFn: (value?: string, option?: ChipsInputOption, getOptionLabel?: Pick<ChipsInputProps<ChipsInputOption>, 'getOptionLabel'>['getOptionLabel']) => {
    return (
      !value || value && getOptionLabel(option)?.toLowerCase()?.startsWith(value?.toLowerCase())
    );
  },
  renderOption({ option, ...restProps }: CustomSelectOptionProps): React.ReactNode {
    return (
      <CustomSelectOption {...restProps} />
    );
  },
};

ChipsSelect.defaultProps = chipsSelectDefaultProps;

export default withAdaptivity(ChipsSelect, { sizeY: true });
