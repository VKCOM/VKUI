import { baselineComponent } from '../../testing/utils';
import CustomSelect from './CustomSelect';
import { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

describe('CustomSelect', () => {
  baselineComponent(CustomSelect);

  it('works correctly as uncontrolled component', () => {
    render(
      <CustomSelect
        data-testid="target"
        options={[{ value: 0, label: 'Mike' }, { value: 1, label: 'Josh' }]}
      />,
    );

    expect(screen.getByTestId('target').textContent).toEqual('');

    fireEvent.click(screen.getByTestId('target'));
    fireEvent.mouseEnter(screen.getByTitle('Josh'));
    fireEvent.click(screen.getByTitle('Josh'));

    expect(screen.getByTestId('target').textContent).toEqual('Josh');
  });

  it('works correctly as controlled component', () => {
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

  it('correctly reacts on options change', () => {
    const { rerender } = render(<CustomSelect
      data-testid="target"
      options={[{ value: 0, label: 'Mike' }, { value: 1, label: 'Josh' }]}
      value={1}
    />);

    expect(screen.getByTestId('target').textContent).toEqual('Josh');

    rerender(<CustomSelect
      data-testid="target"
      options={[{ value: 1, label: 'Josh' }, { value: 2, label: 'Anna' }]}
      value={1}
    />);

    expect(screen.getByTestId('target').textContent).toEqual('Josh');

    rerender(<CustomSelect
      data-testid="target"
      options={[{ value: 2, label: 'Anna' }, { value: 3, label: 'Felix' }]}
      value={3}
    />);

    expect(screen.getByTestId('target').textContent).toEqual('Felix');
  });

  it('correctly converts from controlled to uncontrolled state', () => {
    const { rerender } = render(<CustomSelect
      data-testid="target"
      options={[{ value: 0, label: 'Mike' }, { value: 1, label: 'Josh' }]}
      value={1}
    />);

    expect(screen.getByTestId('target').textContent).toEqual('Josh');

    rerender(<CustomSelect
      data-testid="target"
      options={[{ value: 0, label: 'Mike' }, { value: 1, label: 'Josh' }]}
    />);

    expect(screen.getByTestId('target').textContent).toEqual('Josh');

    fireEvent.click(screen.getByTestId('target'));
    fireEvent.mouseEnter(screen.getByTitle('Mike'));
    fireEvent.click(screen.getByTitle('Mike'));

    expect(screen.getByTestId('target').textContent).toEqual('Mike');
  });

  it('accept defaultValue', () => {
    render(<CustomSelect
      data-testid="target"
      options={[{ value: 0, label: 'Mike' }, { value: 1, label: 'Josh' }]}
      defaultValue={1}
    />);

    expect(screen.getByTestId('target').textContent).toEqual('Josh');
  });
});
