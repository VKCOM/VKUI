import { createRef } from 'react';
import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent, userEvent, withFakeTimers } from '../../testing/utils';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { Switch } from './Switch';

describe(Switch, () => {
  baselineComponent((props) => (
    <>
      <VisuallyHidden Component="label" id="switch">
        Switch
      </VisuallyHidden>
      <Switch aria-labelledby="switch" {...props} />
    </>
  ));

  it('should work with slotsProps', () => {
    const rootRef1 = createRef<HTMLLabelElement>();
    const rootRef2 = createRef<HTMLLabelElement>();
    const inputRef1 = createRef<HTMLInputElement>();
    const inputRef2 = createRef<HTMLInputElement>();
    const onClick1 = vi.fn();
    const onClick2 = vi.fn();
    const onRootClick = vi.fn();

    render(
      <Switch
        data-testid="switch"
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
          },
          input: {
            'className': 'inputClassName',
            'getRootRef': inputRef2,
            'data-testid': 'switch-2',
            'checked': false,
            'onClick': onClick2,
          },
        }}
      />,
    );

    expect(screen.queryByTestId('switch')).not.toBeInTheDocument();
    const input = screen.getByTestId('switch-2');
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

    expect(inputRef1.current).toBe(inputRef2.current);
    expect(inputRef1.current).toBe(input);

    fireEvent.click(input);
    expect(onClick1).toHaveBeenCalledTimes(1);
    expect(onClick2).toHaveBeenCalledTimes(1);

    fireEvent.click(root);
    expect(onRootClick).toHaveBeenCalledTimes(3);
  });

  it(
    '(Uncontrolled) shows checked state',
    withFakeTimers(async () => {
      const { rerender } = render(<Switch slotsProps={{ input: { 'data-testid': 'switch' } }} />);

      const component = screen.getByRole<HTMLInputElement>('switch');
      if (!component) {
        throw new Error('Can not find component');
      }

      expect(component.checked).toBeFalsy();
      expect(component.getAttribute('aria-checked')).toBe('false');

      fireEvent.click(component);

      expect(component.checked).toBeTruthy();
      expect(component.getAttribute('aria-checked')).toBe('true');

      rerender(<Switch slotsProps={{ input: { 'data-testid': 'switch' } }} defaultChecked />);

      const defaultCheckedComponent = screen.getByTestId<HTMLInputElement>('switch');
      if (!defaultCheckedComponent) {
        throw new Error('Can not find component');
      }

      expect(defaultCheckedComponent.checked).toBeTruthy();
      expect(defaultCheckedComponent.getAttribute('aria-checked')).toBe('true');

      fireEvent.click(defaultCheckedComponent);

      expect(defaultCheckedComponent.checked).toBeFalsy();
      expect(defaultCheckedComponent.getAttribute('aria-checked')).toBe('false');

      rerender(<Switch slotsProps={{ input: { 'data-testid': 'switch' } }} disabled />);

      const disabledSwitch = screen.getByTestId<HTMLInputElement>('switch');
      if (!disabledSwitch) {
        throw new Error('Can not find component');
      }
      expect(disabledSwitch.checked).toBeFalsy();
      expect(disabledSwitch.getAttribute('aria-checked')).toBe('false');

      await userEvent.click(disabledSwitch);

      expect(disabledSwitch.checked).toBeFalsy();
      expect(disabledSwitch.getAttribute('aria-checked')).toBe('false');
    }),
  );

  it('(Controlled) shows checked state', () => {
    function ControlledSwitch() {
      const [checked, setChecked] = React.useState(false);
      return (
        <React.Fragment>
          <Switch
            slotsProps={{ input: { 'data-testid': 'switch' } }}
            checked={checked}
            onChange={vi.fn()}
          />
          <button onClick={() => setChecked((prevChecked) => !prevChecked)}>
            change switch state
          </button>
        </React.Fragment>
      );
    }
    render(<ControlledSwitch />);

    const switchComponent = screen.getByRole<HTMLInputElement>('switch');
    if (!switchComponent) {
      throw new Error('Can not find component');
    }

    expect(switchComponent.checked).toBeFalsy();
    expect(switchComponent.getAttribute('aria-checked')).toBe('false');

    fireEvent.click(switchComponent);

    expect(switchComponent.checked).toBeFalsy();
    expect(switchComponent.getAttribute('aria-checked')).toBe('false');

    fireEvent.click(screen.getByRole('button'));

    expect(switchComponent.checked).toBeTruthy();
    expect(switchComponent.getAttribute('aria-checked')).toBe('true');
  });
});
