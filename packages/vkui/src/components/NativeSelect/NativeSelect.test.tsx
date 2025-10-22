import { createRef } from 'react';
import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import {
  baselineComponent,
  fakeTimersForScope,
  userEvent,
  withFakeTimers,
} from '../../testing/utils';
import { NativeSelect, type NativeSelectProps } from './NativeSelect';

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

  it('should work with slotProps', () => {
    const rootRef1 = createRef<HTMLDivElement>();
    const rootRef2 = createRef<HTMLDivElement>();
    const selectRef1 = createRef<HTMLSelectElement>();
    const selectRef2 = createRef<HTMLSelectElement>();
    const onClick1 = vi.fn();
    const onClick2 = vi.fn();
    const onRootClick = vi.fn();

    render(
      <NativeSelect
        data-testid="select"
        className="rootClassName"
        getRootRef={rootRef1}
        getRef={selectRef1}
        required
        onChange={noop}
        onClick={onClick1}
        style={{
          backgroundColor: 'rgb(255, 0, 0)',
        }}
        slotProps={{
          root: {
            'data-testid': 'root',
            'className': 'rootClassName-2',
            'style': {
              color: 'rgb(255, 0, 0)',
            },
            'getRootRef': rootRef2,
            'onClick': onRootClick,
          },
          select: {
            'className': 'inputClassName',
            'getRootRef': selectRef2,
            'data-testid': 'select-2',
            'required': false,
            'onClick': onClick2,
          },
        }}
      />,
    );

    expect(screen.queryByTestId('select')).not.toBeInTheDocument();
    const input = screen.getByTestId('select-2');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('inputClassName');
    expect(input).not.toBeChecked();

    const root = screen.getByTestId('root');
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass('rootClassName');
    expect(root).toHaveClass('rootClassName-2');
    expect(root).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(root).toHaveStyle('color: rgb(255, 0, 0)');

    expect(rootRef1.current).toBe(rootRef2.current);
    expect(rootRef1.current).toBe(root);

    expect(selectRef1.current).toBe(selectRef2.current);
    expect(selectRef1.current).toBe(input);

    fireEvent.click(input);
    expect(onClick1).toHaveBeenCalledTimes(1);
    expect(onClick2).toHaveBeenCalledTimes(1);

    fireEvent.click(root);
    expect(onRootClick).toHaveBeenCalledTimes(2);
  });

  it(
    'works correctly with value and onChange',
    withFakeTimers(async () => {
      const SelectController = () => {
        const [value, setValue] = React.useState<NativeSelectProps['value']>('0');
        return (
          <NativeSelect
            value={value}
            onChange={(_, newValue) => setValue(newValue)}
            slotProps={{
              select: {
                'data-testid': 'target',
              },
            }}
          >
            <option value="0">Mike</option>
            <option value="1">Josh</option>
          </NativeSelect>
        );
      };

      render(<SelectController />);

      expect(getTarget()).toHaveValue('0');
      await userEvent.selectOptions(getTarget(), ['1']);
      expect(getTarget()).toHaveValue('1');
    }),
  );

  it(
    'works correctly with pinned value',
    withFakeTimers(async () => {
      render(
        <NativeSelect
          slotProps={{
            select: {
              'data-testid': 'target',
            },
          }}
          value="0"
        >
          <option value="0">Mike</option>
          <option value="1">Josh</option>
        </NativeSelect>,
      );

      expect(getTarget()).toHaveValue('0');
      await userEvent.selectOptions(getTarget(), ['1']);
      expect(getTarget()).toHaveValue('0');
    }),
  );

  it('accept defaultValue', () => {
    render(
      <NativeSelect
        slotProps={{
          select: {
            'data-testid': 'target',
          },
        }}
        defaultValue={1}
      >
        <option value="0">Mike</option>
        <option value="1">Josh</option>
      </NativeSelect>,
    );

    expect(getTarget()).toHaveValue('1');
  });

  describe('works uncontrolled', () => {
    fakeTimersForScope();
    it('form reset form', async () => {
      render(
        <form data-testid="form">
          <NativeSelect
            slotProps={{
              select: {
                'data-testid': 'target',
              },
            }}
          >
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
          <NativeSelect
            slotProps={{
              select: {
                'data-testid': 'target',
              },
            }}
            defaultValue={1}
          >
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
