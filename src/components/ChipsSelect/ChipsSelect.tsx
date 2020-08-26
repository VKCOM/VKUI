import React, {
  FC,
  useCallback,
  useRef,
  MouseEvent,
  FocusEvent,
  KeyboardEvent, ReactNode, useEffect,
} from 'react';
import Icon20Dropdown from '@vkontakte/icons/dist/20/dropdown';
import classNames from '../../lib/classNames';
import Spinner from '../Spinner/Spinner';
import CustomScrollView from '../CustomScrollView/CustomScrollView';
import ChipsInput, { ChipsInputOption, ChipsInputValue, RenderChip } from '../ChipsInput/ChipsInput';
import CustomSelectOption from '../CustomSelectOption/CustomSelectOption';
import { noop } from '../../lib/utils';
import { hasMouse } from '../../helpers/inputUtils';
import { ChipsSelectProps } from './types';
import { useChipsSelect } from './useChipsSelect';
import { CustomSelectOptionProps } from '../CustomSelectOption/types';

const ChipsSelect: FC<ChipsSelectProps<ChipsInputOption>> = <Option extends ChipsInputOption>(props: ChipsSelectProps<Option>) => {
  const {
    style, status, onBlur, onFocus, onClick, onKeyDown, className, fetching, renderOption,
    getRef, getRootRef, disabled, placeholder, tabIndex, getOptionValue, getOptionLabel,
    getNewOptionData, renderChip, popupDirection, sizeY, creatable, filterFn, inputValue, ...restProps
  } = props;

  const scrollViewRef = useRef<CustomScrollView>(null);
  const {
    fieldValue, selectedOptions, opened, setOpened, addOptionFromInput,
    setSelectedOptions, filteredOptions, addOption, handleInputChange, clearInput,
    focusedOption, setFocusedOption, focusedOptionIndex, setFocusedOptionIndex,
  } = useChipsSelect(props);

  const handleFocus = useCallback((e: FocusEvent<HTMLInputElement>) => {
    if (!hasMouse) {
      e.preventDefault();
      return onClick(null);
    }

    setOpened(true);
    setFocusedOptionIndex(0);
    onFocus(e);
  }, [onClick, onFocus]);

  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    setOpened(false);
    onBlur(e);
  }, [onBlur]);

  const handleClick = useCallback((e: MouseEvent<HTMLInputElement>) => {
    if (!hasMouse) {
      onClick(e);
    }
  }, [onClick, hasMouse]);

  const scrollToElement = useCallback((index: number, center = false) => {
    const scrollView = scrollViewRef.current;
    const dropdown = scrollView.box.current;
    const item = dropdown ? (dropdown.children[index] as HTMLElement) : null;

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
  }, []);

  const focusOptionByIndex = useCallback((index: number, oldIndex: number) => {
    const length = filteredOptions.length + Number(creatable);

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
  }, [filteredOptions]);

  const focusOption = useCallback((nextIndex: number|null, type: 'next' | 'prev') => {
    let index = typeof nextIndex !== 'number' ? -1 : nextIndex;

    if (type === 'next') {
      index = index + 1;
    } else if (type === 'prev') {
      index = index - 1;
    }

    focusOptionByIndex(index, focusedOptionIndex);
  }, [focusOptionByIndex, focusedOptionIndex]);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown(e);

    if (e.key === 'ArrowUp' && !e.defaultPrevented) {
      e.preventDefault();

      if (!opened) {
        setOpened(true);
        setFocusedOptionIndex(0);
      } else {
        focusOption(focusedOptionIndex, 'prev');
      }
    }

    if (e.key === 'ArrowDown' && !e.defaultPrevented) {
      e.preventDefault();

      if (!opened) {
        setOpened(true);
        setFocusedOptionIndex(0);
      } else {
        focusOption(focusedOptionIndex, 'next');
      }
    }

    if (e.key === 'Enter' && !e.defaultPrevented && opened) {
      const option = filteredOptions[focusedOptionIndex - Number(creatable)];

      if (option) {
        addOption(option);
        setFocusedOptionIndex(null);
        clearInput();
        setOpened(false);
        e.preventDefault();
      } else if (!creatable) {
        e.preventDefault();
      }
    }
  }, [opened, focusedOptionIndex, onKeyDown, filteredOptions, addOption]);

  useEffect(() => {
    let index = focusedOptionIndex - Number(creatable);

    if (filteredOptions[index]) {
      setFocusedOption(filteredOptions[index]);
    } else if (focusedOptionIndex === null || focusedOptionIndex === 0) {
      setFocusedOption(null);
    }
  }, [focusedOptionIndex, creatable]);

  useEffect(() => {
    const index = focusedOption ? filteredOptions.findIndex(({ value }) => value === focusedOption.value) : -1;

    if (index === -1 && !!filteredOptions.length) {
      setFocusedOption(filteredOptions[0]);
    }
  }, [filteredOptions, focusedOption]);

  const renderChipWrapper = (renderChipProps: RenderChip<Option>) => {
    const { onRemove } = renderChipProps;
    const onRemoveWrapper = (e: MouseEvent, value: ChipsInputValue) => {
      e.preventDefault();
      onRemove(e, value);
    };

    return renderChip({ ...renderChipProps, onRemove: onRemoveWrapper });
  };

  return (
    <div
      className="ChipsSelect CustomSelect__container"
      ref={getRootRef}
    >
      <ChipsInput
        tabIndex={tabIndex}
        value={selectedOptions}
        inputValue={fieldValue}
        getNewOptionData={getNewOptionData}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        renderChip={renderChipWrapper}
        onChange={setSelectedOptions}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        style={style}
        status={status}
        className={classNames(className, {
          ['CustomSelect__open']: opened,
          ['CustomSelect__open--popupDirectionTop']: popupDirection === 'top',
        })}
        getRef={getRef}
        disabled={disabled}
        {...restProps}
        onInputChange={handleInputChange}
      />
      <div className="ChipsSelect__toggle">
        <Icon20Dropdown />
      </div>
      {opened &&
        <div
          className={classNames({
            ['CustomSelect__options']: opened,
            ['CustomSelect__options--popupDirectionTop']: popupDirection === 'top',
            [`CustomSelect__options--sizeY-${sizeY}`]: !!sizeY,
          })}
          onMouseLeave={() => setFocusedOptionIndex(null)}
        >
          <CustomScrollView ref={scrollViewRef}>
            {fetching ? (
              <div className="ChipsSelect__fetching">
                <Spinner size="small" />
              </div>
            ) : (
              <>
                {creatable && (
                  <CustomSelectOption
                    index={0}
                    hovered={focusedOptionIndex === 0}
                    label="Создать значение"
                    onMouseDown={addOptionFromInput}
                    onMouseEnter={() => setFocusedOptionIndex(0)}
                  />
                )}
                {!filteredOptions?.length && !creatable ? (
                  <div className="ChipsSelect__empty">Ничего не найдено</div>
                ) :
                  filteredOptions.map((option: Option, i: number) => {
                    const index = creatable ? i + 1 : i;
                    const label = getOptionLabel(option);
                    const hovered = focusedOption && getOptionValue(option) === getOptionValue(focusedOption);
                    const selected = selectedOptions.find((selectedOption: Option) => {
                      return getOptionValue(selectedOption) === getOptionValue(option);
                    });

                    return renderOption({
                      option,
                      index,
                      hovered,
                      label,
                      selected: !!selected,
                      onMouseDown: () => addOption(option),
                      onMouseEnter: () => setFocusedOptionIndex(index),
                    });
                  })
                }
              </>
            )}
          </CustomScrollView>
        </div>
      }
    </div>
  );
};

ChipsSelect.defaultProps = {
  ...ChipsInput.defaultProps,
  onClick: noop,
  creatable: false,
  fetching: false,
  filterFn: (value, option, getOptionLabel) => {
    return (
      !value || value && getOptionLabel(option)?.toLowerCase()?.startsWith(value?.toLowerCase())
    );
  },
  renderOption({ index, label, ...otherProps }: CustomSelectOptionProps): ReactNode {
    return (
      <CustomSelectOption
        key={index}
        label={label}
        index={index}
        {...otherProps}
      />
    );
  },
};

export default ChipsSelect;
