import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent, userEvent } from '../../testing/utils';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { Switch } from './Switch';

describe('Switch', () => {
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
});
