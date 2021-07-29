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

  it('is searchable', () => {
    render(<CustomSelect
      searchable
      data-testid="target"
      options={[{ value: 0, label: 'Mike' }, { value: 1, label: 'Josh' }]}
    />);

    fireEvent.click(screen.getByTestId('target')); // here target is SelectMimicry

    expect(screen.getByTestId('target')).toHaveFocus(); // now target is Input

    fireEvent.change(screen.getByTestId('target'), { target: { value: 'Mi' } });
    expect((screen.getByTestId('target') as HTMLInputElement).value).toBe('Mi');
    fireEvent.keyDown(screen.getByTestId('target'), { keyCode: 40 }); // ArrowUp
    fireEvent.keyDown(screen.getByTestId('target'), { keyCode: 13 }); // Enter
    expect(screen.getByTestId('target').textContent).toBe('Mike');
  });

  it('is custom searchable', () => {
    render(<CustomSelect
      searchable
      data-testid="target"
      options={[{ value: 0, label: 'SPb', country: 'Russia' }, { value: 1, label: 'Moscow', country: 'Russia' }, { value: 2, label: 'New York', country: 'USA' }]}
      filterFn={(value, option) => option.label.toLowerCase().includes(value.toLowerCase()) || option.country.toLowerCase().includes(value.toLowerCase())}
    />);

    fireEvent.click(screen.getByTestId('target'));
    fireEvent.change(screen.getByTestId('target'), { target: { value: 'usa' } });
    fireEvent.keyDown(screen.getByTestId('target'), { keyCode: 40 }); // ArrowDown
    fireEvent.keyDown(screen.getByTestId('target'), { keyCode: 13 }); // Enter
    expect(screen.getByTestId('target').textContent).toBe('New York');
  });

  it('is searchable and keeps search results up to date during props.options updates', () => {
    const { rerender } = render(<CustomSelect
      searchable
      data-testid="target"
      options={[{ value: 0, label: 'Mike' }, { value: 1, label: 'Josh' }]}
    />);

    fireEvent.click(screen.getByTestId('target'));
    fireEvent.change(screen.getByTestId('target'), { target: { value: 'Mi' } });

    expect(screen.getAllByRole('option').length).toEqual(1);

    rerender(<CustomSelect
      searchable
      data-testid="target"
      options={[{ value: 0, label: 'Mike' }, { value: 1, label: 'Josh' }, { value: 2, label: 'Mika' }]}
    />);

    expect(screen.getAllByRole('option').length).toEqual(2);
  });

  it('is searchable and keeps selected option up to date during props.options and props.value updates', () => {
    const { rerender } = render(<CustomSelect
      searchable
      data-testid="target"
      value={1}
      options={[{ value: 0, label: 'Mike' }, { value: 1, label: 'Josh' }]}
    />);

    fireEvent.click(screen.getByTestId('target'));

    expect(screen.getByTitle('Josh').getAttribute('aria-selected')).toEqual('true');

    fireEvent.change(screen.getByTestId('target'), { target: { value: 'Jo' } });

    expect(screen.getByTitle('Josh').getAttribute('aria-selected')).toEqual('true');

    rerender(<CustomSelect
      searchable
      data-testid="target"
      value={1}
      options={[{ value: 0, label: 'Mike' }, { value: 2, label: 'Mika' }, { value: 1, label: 'Josh' }]}
    />);

    expect(screen.getByTitle('Josh').getAttribute('aria-selected')).toEqual('true');

    rerender(<CustomSelect
      searchable
      data-testid="target"
      value={3}
      options={[{ value: 3, label: 'Joe' }, { value: 0, label: 'Mike' }, { value: 2, label: 'Mika' }, { value: 1, label: 'Josh' }]}
    />);

    expect(screen.getByTitle('Joe').getAttribute('aria-selected')).toEqual('true');
  });
});
