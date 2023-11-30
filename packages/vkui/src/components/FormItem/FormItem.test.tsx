import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { FormItem } from './FormItem';

describe('FormItem', () => {
  baselineComponent(FormItem);

  it('controls top prop text wrapper', () => {
    const { rerender } = render(<FormItem top="Имя" />);

    // по умолчанию span
    expect(screen.getByText('Имя').tagName.toLowerCase()).toMatch('span');

    rerender(<FormItem top="Имя" topComponent="p" />);
    expect(screen.getByText('Имя').tagName.toLowerCase()).toMatch('p');

    rerender(
      <FormItem top="Имя" htmlFor="name">
        <input id="name" />
      </FormItem>,
    );
    // c htmlFor и без topComponent используется "label"
    expect(screen.getByText('Имя').tagName.toLowerCase()).toMatch('label');
  });
});
