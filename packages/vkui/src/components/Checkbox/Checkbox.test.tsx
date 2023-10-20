import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent, userEvent } from '../../testing/utils';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  baselineComponent((props) => <Checkbox {...props}>Checkbox</Checkbox>);

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
});
