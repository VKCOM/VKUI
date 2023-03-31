import * as React from 'react';
import { createEvent, fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baselineComponent } from '../../testing/utils';
import { Button } from '../Button/Button';
import { Form } from './Form';

describe('Form', () => {
  baselineComponent(Form);

  describe('checks e.preventDefault()', () => {
    const handlePreventDefault = (preventDefault = true) => {
      const { getByTestId } = render(
        <Form data-testid="form" preventDefault={preventDefault}>
          <Button type="submit">__submit__</Button>
        </Form>,
      );
      const form = getByTestId('form');
      const submitForm = createEvent.submit(form);

      fireEvent(form, submitForm);
      expect(submitForm.defaultPrevented).toBe(preventDefault);
    };

    it('if preventDefault={true} call e.preventDefault()', () => {
      return handlePreventDefault(true);
    });

    it("if preventDefault={false} DON'T call e.preventDefault()", () => {
      return handlePreventDefault(false);
    });
  });

  it('calls passed onSubmit()', () => {
    const onSubmit = jest.fn();

    const { getByText } = render(
      <Form onSubmit={onSubmit}>
        <Button type="submit">__submit__</Button>
      </Form>,
    );

    userEvent.click(getByText('__submit__'));
    expect(onSubmit).toBeCalledTimes(1);
  });
});
