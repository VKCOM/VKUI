import { act, createRef, useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { getDocumentBody } from '../../lib/dom';
import { Platform } from '../../lib/platform';
import { baselineComponent, setNodeEnv, userEvent, withFakeTimers } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  baselineComponent((props) => <Checkbox {...props}>Checkbox</Checkbox>);

  it('should work with slotsProps with SimpleCheckbox', () => {
    const rootRef1 = createRef<HTMLLabelElement>();
    const rootRef2 = createRef<HTMLLabelElement>();
    const inputRef1 = createRef<HTMLInputElement>();
    const inputRef2 = createRef<HTMLInputElement>();
    const onClick1 = vi.fn();
    const onClick2 = vi.fn();
    const onRootClick = vi.fn();

    render(
      <Checkbox
        data-testid="checkbox"
        className="rootClassName"
        getRootRef={rootRef1}
        getRef={inputRef1}
        checked
        onChange={noop}
        onClick={onClick1}
        style={{
          backgroundColor: 'rgb(255, 0, 0)',
        }}
        slotsProps={{
          root: {
            'data-testid': 'root',
            'className': 'rootClassName-2',
            'style': {
              color: 'rgb(255, 0, 0)',
            },
            'getRootRef': rootRef2,
            'onClick': onRootClick,
            'Component': 'div',
          },
          input: {
            'className': 'inputClassName',
            'getRootRef': inputRef2,
            'data-testid': 'checkbox-2',
            'checked': false,
            'onClick': onClick2,
            'Component': 'select',
          },
        }}
      />,
    );

    expect(screen.queryByTestId('checkbox')).not.toBeInTheDocument();
    const input = screen.getByTestId('checkbox-2');
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe('SELECT');
    expect(input).toHaveClass('inputClassName');
    expect(input).not.toBeChecked();

    const root = screen.getByTestId('root');
    expect(root).toBeInTheDocument();
    expect(root.tagName).toBe('DIV');
    expect(root).toHaveClass('rootClassName');
    expect(root).toHaveClass('rootClassName-2');
    expect(root).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(root).toHaveStyle('color: rgb(255, 0, 0)');

    expect(rootRef1.current).toBe(rootRef2.current);
    expect(rootRef1.current).toBe(root);

    expect(inputRef1.current).toBe(inputRef2.current);
    expect(inputRef1.current).toBe(input);

    fireEvent.click(input);
    expect(onClick1).toHaveBeenCalledTimes(1);
    expect(onClick2).toHaveBeenCalledTimes(1);

    fireEvent.click(root);
    expect(onRootClick).toHaveBeenCalledTimes(2);
  });

  it('should work with slotsProps with CheckboxComponent', () => {
    const rootRef1 = createRef<HTMLLabelElement>();
    const rootRef2 = createRef<HTMLLabelElement>();
    const inputRef1 = createRef<HTMLInputElement>();
    const inputRef2 = createRef<HTMLInputElement>();
    const onClick1 = vi.fn();
    const onClick2 = vi.fn();
    const onRootClick = vi.fn();

    render(
      <Checkbox
        data-testid="checkbox"
        className="rootClassName"
        getRootRef={rootRef1}
        getRef={inputRef1}
        checked
        onChange={noop}
        onClick={onClick1}
        style={{
          backgroundColor: 'rgb(255, 0, 0)',
        }}
        slotsProps={{
          root: {
            'data-testid': 'root',
            'className': 'rootClassName-2',
            'style': {
              color: 'rgb(255, 0, 0)',
            },
            'getRootRef': rootRef2,
            'onClick': onRootClick,
            'Component': 'div',
          },
          input: {
            'className': 'inputClassName',
            'getRootRef': inputRef2,
            'data-testid': 'checkbox-2',
            'checked': false,
            'onClick': onClick2,
            'Component': 'select',
          },
        }}
      >
        Checkbox
      </Checkbox>,
    );

    expect(screen.queryByTestId('checkbox')).not.toBeInTheDocument();
    const input = screen.getByTestId('checkbox-2');
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe('SELECT');
    expect(input).toHaveClass('inputClassName');
    expect(input).not.toBeChecked();

    const root = screen.getByTestId('root');
    expect(root).toBeInTheDocument();
    expect(root.tagName).toBe('DIV');
    expect(root).toHaveClass('rootClassName');
    expect(root).toHaveClass('rootClassName-2');
    expect(root).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(root).toHaveStyle('color: rgb(255, 0, 0)');

    expect(rootRef1.current).toBe(rootRef2.current);
    expect(rootRef1.current).toBe(root);

    expect(inputRef1.current).toBe(inputRef2.current);
    expect(inputRef1.current).toBe(input);

    fireEvent.click(input);
    expect(onClick1).toHaveBeenCalledTimes(1);
    expect(onClick2).toHaveBeenCalledTimes(1);

    fireEvent.click(root);
    expect(onRootClick).toHaveBeenCalledTimes(2);
  });

  it(
    'handles change',
    withFakeTimers(async () => {
      const CheckboxController = () => {
        const [checked, setChecked] = useState(false);
        return (
          <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>
            check
          </Checkbox>
        );
      };
      render(<CheckboxController />);
      expect(screen.getByRole('checkbox')).not.toBeChecked();
      await userEvent.click(screen.getByText('check'));
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(screen.getByRole('checkbox')).toBeChecked();
      await userEvent.click(screen.getByText('check'));
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(screen.getByRole('checkbox')).not.toBeChecked();
    }),
  );

  it(
    'navigation by tab',
    withFakeTimers(async () => {
      render(
        <>
          <Checkbox data-testid="checkbox-1" />
          <Checkbox data-testid="checkbox-2" />
        </>,
      );
      expect(getDocumentBody()).toHaveFocus();

      await userEvent.tab();
      expect(screen.getByTestId('checkbox-1')).toHaveFocus();

      await userEvent.tab();
      expect(screen.getByTestId('checkbox-2')).toHaveFocus();

      await userEvent.tab();
      expect(getDocumentBody()).toHaveFocus();
    }),
  );

  it('check reset indeterminate when click to checkbox', () => {
    render(
      <ConfigProvider platform={Platform.VKCOM}>
        <Checkbox defaultIndeterminate={true}>Check</Checkbox>
      </ConfigProvider>,
    );
    fireEvent.click(screen.getByText('Check'));
    expect(screen.getByRole<HTMLInputElement>('checkbox').indeterminate).toBeFalsy();
  });

  it('check not reset indeterminate when click to checkbox', () => {
    render(<Checkbox indeterminate={true}>Check</Checkbox>);

    fireEvent.click(screen.getByText('Check'));
    expect(screen.getByRole<HTMLInputElement>('checkbox').indeterminate).toBeTruthy();
  });

  describe('DEV errors', () => {
    beforeEach(() => setNodeEnv('development'));
    afterEach(() => setNodeEnv('test'));

    it('check calls Checkbox', () => {
      const errorStub = vi.spyOn(console, 'error').mockImplementation(noop);
      render(
        <>
          <Checkbox defaultIndeterminate={true} defaultChecked={true} />
          <Checkbox indeterminate={true} checked={true} />
          <Checkbox defaultChecked={true} checked={true} />
        </>,
      );
      expect(errorStub.mock.calls[0]).toEqual([
        '%c[VKUI/Checkbox] defaultIndeterminate и defaultChecked не могут быть true одновременно',
        undefined,
      ]);
      expect(errorStub.mock.calls[1]).toEqual([
        '%c[VKUI/Checkbox] indeterminate и checked не могут быть true одновременно',
        undefined,
      ]);
      expect(errorStub.mock.calls[2]).toEqual([
        '%c[VKUI/Checkbox] defaultChecked и checked не могут быть true одновременно',
        undefined,
      ]);
      errorStub.mockRestore();
    });
  });
});
