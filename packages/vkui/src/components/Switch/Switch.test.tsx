import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent, userEvent } from '../../testing/utils';
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

  it('(Uncontrolled) shows checked state', async () => {
    const { rerender } = render(<Switch data-testid="switch" />);

    const component = screen.getByRole<HTMLInputElement>('switch');
    if (!component) {
      throw new Error('Can not find component');
    }

    expect(component.checked).toBeFalsy();
    expect(component.getAttribute('aria-checked')).toBe('false');

    fireEvent.click(component);

    expect(component.checked).toBeTruthy();
    expect(component.getAttribute('aria-checked')).toBe('true');

    rerender(<Switch data-testid="switch" defaultChecked />);

    const defaultCheckedComponent = screen.getByTestId<HTMLInputElement>('switch');
    if (!defaultCheckedComponent) {
      throw new Error('Can not find component');
    }

    expect(defaultCheckedComponent.checked).toBeTruthy();
    expect(defaultCheckedComponent.getAttribute('aria-checked')).toBe('true');

    fireEvent.click(defaultCheckedComponent);

    expect(defaultCheckedComponent.checked).toBeFalsy();
    expect(defaultCheckedComponent.getAttribute('aria-checked')).toBe('false');

    rerender(<Switch data-testid="switch" disabled />);

    const disabledSwitch = screen.getByTestId<HTMLInputElement>('switch');
    if (!disabledSwitch) {
      throw new Error('Can not find component');
    }
    expect(disabledSwitch.checked).toBeFalsy();
    expect(disabledSwitch.getAttribute('aria-checked')).toBe('false');

    jest.useFakeTimers();
    await userEvent.click(disabledSwitch);

    expect(disabledSwitch.checked).toBeFalsy();
    expect(disabledSwitch.getAttribute('aria-checked')).toBe('false');
  });

  it('(Controlled) shows checked state', () => {
    function ControlledSwitch() {
      const [checked, setChecked] = React.useState(false);
      return (
        <React.Fragment>
          <Switch data-testid="switch" checked={checked} onChange={jest.fn} />
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

  it('should working without slotsProps', () => {
    const rootRef = React.createRef<HTMLLabelElement | null>();
    const inputRef = React.createRef<HTMLInputElement | null>();
    render(
      <Switch
        getRootRef={rootRef}
        getRef={inputRef}
        data-testid="input"
        checked
        onChange={jest.fn}
      />,
    );

    expect(rootRef.current!.tagName).toBe('LABEL');
    expect(inputRef.current!.tagName).toBe('INPUT');
    expect(inputRef.current).toBe(screen.getByTestId('input'));
    expect(inputRef.current!.checked).toBeTruthy();
  });

  it('should working with slotsProps', () => {
    const rootRef = React.createRef<HTMLLabelElement | null>();
    const inputRef = React.createRef<HTMLInputElement | null>();
    render(
      <Switch
        getRootRef={rootRef}
        data-testid="root"
        checked
        onChange={jest.fn}
        disabled
        slotsProps={{
          input: {
            'getRootRef': inputRef,
            'data-testid': 'input',
          },
        }}
      />,
    );

    expect(screen.getByTestId('root')).toBe(rootRef.current);
    expect(screen.getByTestId('input')).toBe(inputRef.current);
    expect(rootRef.current!.tagName).toBe('LABEL');
    expect(inputRef.current!.tagName).toBe('INPUT');

    expect(inputRef.current!.checked).toBeTruthy();
    expect(inputRef.current!.disabled).toBeTruthy();
  });
});
