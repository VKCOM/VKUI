import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { Radio } from './Radio';

describe('Radio', () => {
  baselineComponent((props) => (
    <>
      <VisuallyHidden Component="label" id="radio">
        Radio
      </VisuallyHidden>
      <Radio slotsProps={{ input: { 'aria-labelledby': 'radio' } }} {...props} />
    </>
  ));

  test('label and input can receive data-testid', () => {
    render(
      <React.Fragment>
        <Radio
          name="pay"
          value="cash"
          slotsProps={{
            root: { 'data-testid': 'label-cash-id' },
            input: { 'data-testid': 'input-cash-id' },
          }}
          defaultChecked
        >
          Оплата наличными
        </Radio>
        <Radio
          name="pay"
          value="card"
          slotsProps={{
            root: { 'data-testid': 'label-card-id' },
            input: { 'data-testid': 'input-card-id' },
          }}
        >
          Оплата картой
        </Radio>
      </React.Fragment>,
    );

    const inputCash = screen.getByTestId<HTMLInputElement>('input-cash-id');
    const labelCash = screen.getByTestId<HTMLLabelElement>('label-cash-id');

    expect(inputCash.checked).toBeTruthy();
    expect(inputCash.matches('input')).toBeTruthy();
    expect(labelCash.matches('label')).toBeTruthy();

    const inputCard = screen.getByTestId<HTMLInputElement>('input-card-id');
    expect(inputCard.checked).toBeFalsy();
    const labelCard = screen.getByTestId<HTMLLabelElement>('label-card-id');

    fireEvent.click(labelCard);
    expect(inputCard.checked).toBeTruthy();
    expect(inputCash.checked).toBeFalsy();
  });
});
