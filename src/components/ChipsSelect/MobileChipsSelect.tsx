import React, { FC, useCallback, KeyboardEvent } from 'react';
import ChipsSelect from './ChipsSelect';
import Search from '../Search/Search';
import List from '../List/List';
import FixedLayout from '../FixedLayout/FixedLayout';
import Div from '../Div/Div';
import Button from '../Button/Button';
import Cell from '../Cell/Cell';
import { ChipsInputOption } from '../ChipsInput/ChipsInput';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import CellButton from '../CellButton/CellButton';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import { MobileChipsSelectProps } from './types';
import { useChipsSelect } from './useChipsSelect';

const MobileChipsSelect: FC<MobileChipsSelectProps<ChipsInputOption>> = <Option extends ChipsInputOption>(props: MobileChipsSelectProps<Option>) => {
  const { onClick, getOptionValue, getOptionLabel, creatable, onKeyDown, getNewOptionData } = props;
  const { fieldValue, selectedOptions, filteredOptions, toggleOption, addOptionFromInput, handleInputChange } = useChipsSelect(props);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown(e);

    if (e.key === 'Enter' && !e.defaultPrevented && fieldValue) {
      addOptionFromInput();
      e.preventDefault();
    }
  }, [fieldValue, addOptionFromInput, getNewOptionData]);

  return (
    <>
      <Search value={fieldValue} onChange={handleInputChange} onKeyDown={handleKeyDown} />
      <List>
        {creatable && fieldValue ? <CellButton before={<Icon24Add />} onClick={addOptionFromInput}>Создать значение &quot;{fieldValue}&quot;</CellButton> : null}
        {filteredOptions.map((option: Option) => {
          const isOptionSelected = selectedOptions.some((selectedOption) => getOptionValue(selectedOption) === getOptionValue(option));

          return (
            <Cell key={getOptionValue(option)}
              onClick={() => toggleOption(option)}
              after={isOptionSelected ? <Icon24Done fill="var(--accent)" /> : null}>
              {getOptionLabel(option)}
            </Cell>
          );
        })}
      </List>
      <FixedLayout vertical="bottom">
        <Div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={onClick}>Готово</Button>
        </Div>
      </FixedLayout>
    </>
  );
};

MobileChipsSelect.defaultProps = {
  ...ChipsSelect.defaultProps,
};

export default MobileChipsSelect;

