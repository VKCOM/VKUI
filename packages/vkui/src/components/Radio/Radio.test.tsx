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
      <Radio aria-labelledby="radio" {...props} />
    </>
  ));

  test('label and input can receive data-testid', () => {
    render(
      <React.Fragment>
        <Radio
          name="pay"
          value="cash"
          data-testid="input-cash-id"
          labelProps={{ 'data-testid': 'label-cash-id' }}
          defaultChecked
        >
          Оплата наличными
        </Radio>
        <Radio
          name="pay"
          value="card"
          data-testid="input-card-id"
          labelProps={{ 'data-testid': 'label-card-id' }}
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

  it('should working without slotsProps', () => {
    const rootRef = React.createRef<HTMLLabelElement | null>();
    const inputRef = React.createRef<HTMLInputElement | null>();
    render(
      <Radio
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

  it('should working with slotsPropsProps', () => {
    const rootRef = React.createRef<HTMLLabelElement | null>();
    const inputRef = React.createRef<HTMLInputElement | null>();
    render(
      <Radio
        getRootRef={rootRef}
        data-testid="root"
        checked
        onChange={jest.fn}
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
  });
});
