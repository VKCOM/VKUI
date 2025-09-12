import { act, useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { getDocumentBody } from '../../lib/dom';
import { Platform } from '../../lib/platform';
import { baselineComponent, fakeTimers, setNodeEnv, userEvent } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  baselineComponent((props) => <Checkbox {...props}>Checkbox</Checkbox>);
  fakeTimers();

  it('handles change', async () => {
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
      jest.runOnlyPendingTimers();
    });
    expect(screen.getByRole('checkbox')).toBeChecked();
    await userEvent.click(screen.getByText('check'));
    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('navigation by tab', async () => {
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
  });

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
