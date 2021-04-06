import { baselineComponent } from '../../testing/utils';
import CustomSelect from './CustomSelect';
import { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

describe('CustomSelect', () => {
  baselineComponent(CustomSelect);

  it('works correctly with value and onChange', () => {
    const SelectController = () => {
      const [value, setValue] = useState(0);
      const options = [{ value: 0, label: 'Mike' }, { value: 1, label: 'Josh' }];
      return (
        <CustomSelect
          data-testid="target"
          options={options}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      );
    };
    render(<SelectController />);
    expect(screen.getByTestId('target').textContent).toEqual('Mike');
    fireEvent.click(screen.getByTestId('target'));
    fireEvent.mouseEnter(screen.getByTitle('Josh'));
    fireEvent.click(screen.getByTitle('Josh'));
    expect(screen.getByTestId('target').textContent).toEqual('Josh');
  });

  it('works correctly with pinned value', () => {
    const options = [{ value: 0, label: 'Mike' }, { value: 1, label: 'Josh' }];

    render(<CustomSelect
      data-testid="target"
      options={options}
      value={0}
    />);

    expect(screen.getByTestId('target').textContent).toEqual('Mike');
    fireEvent.click(screen.getByTestId('target'));
    fireEvent.mouseEnter(screen.getByTitle('Josh'));
    fireEvent.click(screen.getByTitle('Josh'));
    expect(screen.getByTestId('target').textContent).toEqual('Mike');
  });
});
