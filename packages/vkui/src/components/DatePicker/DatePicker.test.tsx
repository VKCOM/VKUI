import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent, fakeTimers, userEvent } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { DatePicker, type DatePickerProps } from './DatePicker';

const getDate = (year = 2021, month = 1, day = 1) => ({ year, month, day });
const getByName = (name: string) => document.getElementsByName(name)[0] as HTMLInputElement;

const DatePickerCustom = (props: DatePickerProps) => {
  return (
    <AdaptivityProvider hasPointer>
      <DatePicker name="date" {...props} />
    </AdaptivityProvider>
  );
};
const DatePickerNative = (props: DatePickerProps) => {
  return (
    <AdaptivityProvider hasPointer={false}>
      <DatePicker name="date" {...props} />
    </AdaptivityProvider>
  );
};

describe('DatePicker', () => {
  fakeTimers();
  baselineComponent(DatePicker, {
    // TODO [a11y]: "Exceeded timeout of 5000 ms for a test.
    //              Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."
    a11y: false,
  });

  describe('custom', () => {
    const select = async (name: string, value: number) =>
      await userEvent.selectOptions(getByName(name), String(value));

    it.each([
      ['uncontrolled', 'defaultValue'],
      ['controlled', 'value'],
    ])('renders value when %s', (_type, propName) => {
      const props = { [propName]: getDate() };
      render(<DatePickerCustom {...props} />);
      expect(getByName('year')).toHaveValue('2021');
      expect(getByName('month')).toHaveValue('1');
      expect(getByName('day')).toHaveValue('1');
      expect(getByName('date')).toHaveValue('2021-01-01');
    });

    it('fires change', async () => {
      let date = getDate();
      render(<DatePickerCustom defaultValue={date} onDateChange={(v) => (date = v)} />);

      await select('year', 2019);
      expect(date).toEqual(getDate(2019, 1, 1));
      expect(getByName('date')).toHaveValue('2019-01-01');

      await select('month', 5);
      expect(date).toEqual(getDate(2019, 5, 1));
      expect(getByName('date')).toHaveValue('2019-05-01');

      await select('day', 5);
      expect(date).toEqual(getDate(2019, 5, 5));
      expect(getByName('date')).toHaveValue('2019-05-05');
    });

    describe('renders options', () => {
      const getOptions = (name: string) =>
        Array.from(getByName(name).querySelectorAll('option')).map((e) => e.value);

      it('year, with min/max', () => {
        render(<DatePickerCustom min={getDate(2018)} max={getDate(2020)} />);
        expect(getOptions('year')).toEqual(['2020', '2019', '2018']);
      });

      describe('month', () => {
        const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

        it('without min / max', () => {
          render(<DatePickerCustom />);
          expect(getOptions('month')).toEqual(months);
        });

        it.skip('respects min', async () => {
          render(<DatePickerCustom defaultValue={getDate()} min={getDate(2022, 11)} />);
          expect(getOptions('month')).toEqual(months);
          await select('year', 2022);
          expect(getOptions('month')).toEqual(['11', '12']);
        });

        it.skip('respects max', async () => {
          render(<DatePickerCustom defaultValue={getDate()} max={getDate(2018, 2)} />);
          expect(getOptions('month')).toEqual(months);
          await select('year', 2018);
          expect(getOptions('month')).toEqual(['1', '2']);
        });
      });

      describe('day', () => {
        const days = (count: number) => new Array(count).fill(0).map((_, i) => String(i + 1));

        it('depends on month', async () => {
          render(<DatePickerCustom />);
          // allows 31 by default
          expect(getOptions('day')).toEqual(days(31));

          await select('month', 5);
          expect(getOptions('day')).toEqual(days(31));

          await select('month', 4);
          expect(getOptions('day')).toEqual(days(30));
        });

        describe('respects gap year', () => {
          it('allows 29 by default', async () => {
            render(<DatePickerCustom />);
            await select('month', 2);
            expect(getOptions('day')).toEqual(days(29));
          });

          it('allows 29 in gap year', () => {
            render(<DatePickerCustom defaultValue={getDate(2020, 2)} />);
            expect(getOptions('day')).toEqual(days(29));
          });

          it('allows 28 in non-gap year', () => {
            render(<DatePickerCustom defaultValue={getDate(2019, 2)} />);
            expect(getOptions('day')).toEqual(days(28));
          });
        });

        it.skip('respects min', () => {
          const min = getDate(2022, 11, 29);
          render(<DatePickerCustom defaultValue={min} min={min} />);
          expect(getOptions('day')).toEqual(['29', '30']);
        });

        it.skip('respects max', () => {
          const max = getDate(2018, 2, 2);
          render(<DatePickerCustom defaultValue={max} min={max} />);
          expect(getOptions('day')).toEqual(['1', '2']);
        });
      });
    });

    it('respects outer value when controlled', async () => {
      const { rerender } = render(<DatePickerCustom value={getDate()} />);
      expect(getByName('date')).toHaveValue('2021-01-01');
      rerender(<DatePickerCustom value={getDate(undefined, undefined, 2)} />);
      expect(getByName('date')).toHaveValue('2021-01-02');
    });
  });

  describe('native', () => {
    const getInput = () => document.querySelector('input') as Element;

    it.each([
      ['uncontrolled', 'defaultValue'],
      ['controlled', 'value'],
    ])('renders value when %s', (_type, propName) => {
      const props = { [propName]: getDate() };
      render(<DatePickerNative {...props} />);
      expect(getInput()).toHaveValue('2021-01-01');
    });

    it('sets min/max', () => {
      render(<DatePickerNative min={getDate()} max={getDate()} />);
      expect(getInput()).toHaveAttribute('min', '2021-01-01');
      expect(getInput()).toHaveAttribute('max', '2021-01-01');
    });

    it('fires change', async () => {
      let date = getDate();
      render(<DatePickerNative onDateChange={(v) => (date = v)} />);

      await userEvent.type(getInput(), '2019-05-05');
      expect(date).toEqual(getDate(2019, 5, 5));
    });

    it('resets form when uncontrolled', () => {
      render(
        <form data-testid="form">
          <DatePickerNative />
        </form>,
      );
      fireEvent.change(getByName('date'), { target: { value: '2024-02-03' } });
      expect(getByName('date')).toHaveValue('2024-02-03');
      screen.getByTestId<HTMLFormElement>('form').reset();
      expect(getByName('date')).toHaveValue('');
    });
    it('resets form with defaultValue when uncontrolled', () => {
      render(
        <form data-testid="form">
          <DatePickerNative defaultValue={getDate()} />
        </form>,
      );
      fireEvent.change(getByName('date'), { target: { value: '2024-02-03' } });
      expect(getByName('date')).toHaveValue('2024-02-03');
      screen.getByTestId<HTMLFormElement>('form').reset();
      expect(getByName('date')).toHaveValue('2021-01-01');
    });

    it('respects outer value when controlled', async () => {
      const { rerender } = render(
        <form data-testid="form">
          <DatePickerNative value={getDate()} />
        </form>,
      );
      expect(getByName('date')).toHaveValue('2021-01-01');
      rerender(
        <form data-testid="form">
          <DatePickerNative value={getDate(undefined, undefined, 2)} />
        </form>,
      );
      expect(getByName('date')).toHaveValue('2021-01-02');
    });
  });
});
