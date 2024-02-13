import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent, userEvent } from '../../testing/utils';
import { NativeSelect } from './NativeSelect';

const getTarget = () => screen.getByTestId<HTMLSelectElement>('target');

describe('NativeSelect', () => {
  baselineComponent((props) => (
    <>
      <label htmlFor="name">Name:</label>
      <NativeSelect id="name" data-testid="target" value="0" {...props}>
        <option value="0">Mike</option>
        <option value="1">Josh</option>
      </NativeSelect>
    </>
  ));

  it('works correctly with value and onChange', async () => {
    const SelectController = () => {
      const [value, setValue] = React.useState('0');
      return (
        <NativeSelect data-testid="target" value={value} onChange={(e) => setValue(e.target.value)}>
          <option value="0">Mike</option>
          <option value="1">Josh</option>
        </NativeSelect>
      );
    };

    render(<SelectController />);

    expect(getTarget()).toHaveValue('0');
    await userEvent.selectOptions(getTarget(), ['1']);
    expect(getTarget()).toHaveValue('1');
  });

  it('works correctly with pinned value', async () => {
    render(
      <NativeSelect data-testid="target" value="0">
        <option value="0">Mike</option>
        <option value="1">Josh</option>
      </NativeSelect>,
    );

    expect(getTarget()).toHaveValue('0');
    await userEvent.selectOptions(getTarget(), ['1']);
    expect(getTarget()).toHaveValue('0');
  });

  it('accept defaultValue', () => {
    render(
      <NativeSelect data-testid="target" defaultValue={1}>
        <option value="0">Mike</option>
        <option value="1">Josh</option>
      </NativeSelect>,
    );

    expect(getTarget()).toHaveValue('1');
  });

  describe('works uncontrolled', () => {
    it('form reset form', async () => {
      render(
        <form data-testid="form">
          <NativeSelect data-testid="target">
            <option value="0">Mike</option>
            <option value="1">Josh</option>
          </NativeSelect>
        </form>,
      );
      expect(getTarget()).toHaveValue('0');
      await userEvent.selectOptions(getTarget(), ['1']);
      expect(getTarget()).toHaveValue('1');

      screen.getByTestId<HTMLFormElement>('form').reset();
      expect(getTarget()).toHaveValue('0');
    });
    it('form reset with defaultValue', async () => {
      render(
        <form data-testid="form">
          <NativeSelect data-testid="target" defaultValue={1}>
            <option value="0">Mike</option>
            <option value="1">Josh</option>
          </NativeSelect>
        </form>,
      );
      expect(getTarget()).toHaveValue('1');
      await userEvent.selectOptions(getTarget(), ['0']);
      expect(getTarget()).toHaveValue('0');

      screen.getByTestId<HTMLFormElement>('form').reset();
      expect(getTarget()).toHaveValue('1');
    });
  });
});
