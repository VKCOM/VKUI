import React, {
  FC,
  useCallback,
  useRef,
  useState,
  MouseEvent,
  FocusEvent,
  KeyboardEvent,
} from 'react';
import classNames from '../../lib/classNames';
import CustomScrollView from '../CustomScrollView/CustomScrollView';
import ChipsInput, { ChipsInputOption, ChipsInputValue, RenderChip } from '../ChipsInput/ChipsInput';
import { noop } from '../../lib/utils';
import { hasMouse } from '../../helpers/inputUtils';
import { ChipsSelectProps } from './types';
import { useChipsSelect } from './useChipsSelect';

const ChipsSelect: FC<ChipsSelectProps<ChipsInputOption>> = <Option extends ChipsInputOption>(props: ChipsSelectProps<Option>) => {
  const {
    style, status, onBlur, onFocus, onClick, onKeyDown, className,
    getRef, getRootRef, disabled, placeholder, tabIndex, getOptionValue, getOptionLabel,
    getNewOptionData, renderChip, popupDirection, sizeY, creatable, filterFn, inputValue, ...restProps
  } = props;

  const [opened, setOpened] = useState(false);
  const [focusedOption, setFocusedOption] = useState(null);
  const scrollViewRef = useRef(null);
  const { fieldValue, setFieldValue, selectedOptions, setSelectedOptions, filteredOptions, addOption, handleInputChange } = useChipsSelect(props);

  const handleFocus = useCallback((e: FocusEvent<HTMLInputElement>) => {
    if (!hasMouse) {
      e.preventDefault();
      return onClick(null);
    }

    setOpened(true);
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

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown(e);

    if (e.key === 'Enter' && !e.defaultPrevented) {
      if (filteredOptions.length === 1) {
        addOption(filteredOptions[0]);
        setFieldValue('');
        e.preventDefault();
      } else if (!creatable) {
        e.preventDefault();
      }
    }
  }, [setFieldValue, onKeyDown, filteredOptions, addOption]);

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
      className="CustomSelect__container"
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
        onInputChange={handleInputChange}
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
      />
      {opened &&
      <div
        className={classNames({
          ['CustomSelect__options']: opened,
          ['CustomSelect__options--popupDirectionTop']: popupDirection === 'top',
          [`CustomSelect__options--sizeY-${sizeY}`]: !!sizeY,
        })}
        onMouseLeave={() => setFocusedOption(null)}
      >
        <CustomScrollView ref={scrollViewRef}>
          {creatable ? <div className="CustomSelect__option">Создать значение </div> : null}
          {!filteredOptions?.length && !creatable ? <div className="CustomSelect__option">Не найдено</div> :
            filteredOptions.map((option: Option, index: number) => {
              const label = getOptionLabel(option);
              const focused = focusedOption && getOptionValue(option) === getOptionValue(focusedOption);
              const selected = selectedOptions.find((selectedOption: Option) => {
                return getOptionValue(selectedOption) === getOptionValue(option);
              });

              return (
                <div
                  key={index}
                  role="option"
                  title={label}
                  aria-posinset={index}
                  aria-selected={!!selected}
                  onMouseDown={() => addOption(option)}
                  onMouseEnter={() => setFocusedOption(option)}
                  className={classNames('CustomSelect__option', {
                    ['CustomSelect__option--hover']: focused,
                    ['CustomSelect__option--selected']: !!selected,
                  })}
                >
                  {label}
                </div>
              );
            })}
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
  filterFn: (value, option, getOptionLabel) => !value || value && getOptionLabel(option)?.toLowerCase()?.startsWith(value?.toLowerCase()),
};

export default ChipsSelect;
