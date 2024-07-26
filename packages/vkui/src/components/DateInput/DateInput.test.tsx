import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Button } from '../Button/Button';
import { DateInput } from './DateInput';

describe('DateInput', () => {
  baselineComponent(DateInput, {
    // TODO [a11y]: "Elements must only use allowed ARIA attributes (aria-allowed-attr)"
    //              https://dequeuniversity.com/rules/axe/4.5/aria-allowed-attr?application=axeAPI
    a11y: false,
  });

  it('check placeholder visibility', () => {
    const Fixture = () => {
      const [value, setValue] = useState<Date | undefined>(undefined);
      return (
        <>
          <DateInput value={value} placeholder="Плейсхолдер" />
          <Button data-testid="add-date" onClick={() => setValue(new Date())}>
            Добавить дату
          </Button>
        </>
      );
    };

    render(<Fixture />);
    expect(screen.getByText('Плейсхолдер')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('add-date'));

    expect(() => screen.getByText('Плейсхолдер')).toThrow();
  });
});
