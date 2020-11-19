import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('handles change', () => {
    const onChange = jest.fn();
    render(<Checkbox checked onChange={(e) => onChange(e.target.checked)}>check</Checkbox>);
    userEvent.click(screen.getByText('check'));
    expect(onChange).toHaveBeenLastCalledWith(false);
  });
});
