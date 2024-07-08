import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { getDocumentBody } from '../../lib/dom';
import { baselineComponent, fakeTimers, userEvent } from '../../testing/utils';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  baselineComponent((props) => <Checkbox {...props}>Checkbox</Checkbox>);
  fakeTimers();

  it('handles change', async () => {
    const CheckboxController = () => {
      const [checked, setChecked] = React.useState(false);
      return (
        <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>
          check
        </Checkbox>
      );
    };
    render(<CheckboxController />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    await userEvent.click(screen.getByText('check'));
    expect(screen.getByRole('checkbox')).toBeChecked();
    await userEvent.click(screen.getByText('check'));
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
});
