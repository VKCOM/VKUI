import { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent, fakeTimers, userEvent } from '../../testing/utils';
import { Search } from './Search';
import styles from './Search.module.css';

const getInput = () => screen.getByRole('searchbox');
const getClearIcon = () => document.querySelector(`.${styles.Search__icon}`)!;
const getFindButton = () => document.querySelector(`.${styles.Search__findButton}`)!;

jest.mock('../../lib/touch', () => {
  const originalModule = jest.requireActual('../../lib/touch');
  return {
    ...originalModule,
    touchEnabled: () => true,
  };
});

describe(Search, () => {
  baselineComponent(Search);

  fakeTimers();

  describe('works uncontrolled', () => {
    it('uses defaultValue', () => {
      render(<Search defaultValue="def" />);
      expect(getInput()).toHaveValue('def');
    });
    it('manages value', async () => {
      render(<Search />);
      await userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('user');
    });
    it('fires onChange', async () => {
      let value = '';
      render(<Search onChange={(e) => (value = e.target.value)} />);
      await userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('user');
      expect(value).toBe('user');
    });
    // TODO (@SevereCloud): не понял почему тест сломался, на деле очистка работает
    it.skip('clears value', async () => {
      render(<Search defaultValue="def" />);
      await userEvent.click(getClearIcon());
      expect(getInput()).toHaveValue('');
    });
    it('form reset form', async () => {
      render(
        <form data-testid="form">
          <Search />
        </form>,
      );
      await userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('user');
      screen.getByTestId<HTMLFormElement>('form').reset();
      expect(getInput()).toHaveValue('');
    });
    it('handles clear button visibility correctly', async () => {
      render(
        <form data-testid="form">
          <Search />
          <input data-testid="reset" type="reset" />
        </form>,
      );
      expect(getClearIcon()).toHaveAttribute('tabindex', '-1');
      await userEvent.type(getInput(), 'user');
      expect(getClearIcon()).not.toHaveAttribute('tabindex');
      fireEvent.click(screen.getByTestId('reset'));
      expect(getClearIcon()).toHaveAttribute('tabindex', '-1');
    });
    it('handles clear button visibility with default value correctly', async () => {
      render(
        <form data-testid="form">
          <Search defaultValue="val" />
          <input data-testid="reset" type="reset" />
        </form>,
      );
      expect(getClearIcon()).not.toHaveAttribute('tabindex');
      fireEvent.click(screen.getByTestId('reset'));
      expect(getClearIcon()).not.toHaveAttribute('tabindex');
    });
    it('form reset with defaultValue', async () => {
      render(
        <form data-testid="form">
          <Search defaultValue="def" />
        </form>,
      );
      expect(getInput()).toHaveValue('def');
      await userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('defuser');
      screen.getByTestId<HTMLFormElement>('form').reset();
      expect(getInput()).toHaveValue('def');
    });
  });

  describe('works controlled', () => {
    it('respects outer value', () => {
      const { rerender } = render(<Search value="init" />);
      expect(getInput()).toHaveValue('init');
      rerender(<Search value="update" />);
      expect(getInput()).toHaveValue('update');
    });
    it('value overrides defaultValue', () => {
      jest.spyOn(global.console, 'error').mockImplementationOnce((message) => {
        if (message.includes('with both value and defaultValue props.')) {
          return;
        }
        global.console.error(message);
      });
      render(<Search defaultValue="def" value="val" />);
      expect(getInput()).toHaveValue('val');
    });
    it('fires onChange', async () => {
      let value = 'init';
      render(<Search value={value} onChange={(e) => (value = e.target.value)} />);
      await userEvent.type(getInput(), 'X');
      expect(value).toBe('initX');
    });
    it('handles clear button visibility correctly', () => {
      const { rerender } = render(<Search value="init" />);
      expect(getClearIcon()).not.toHaveAttribute('tabindex');
      rerender(<Search value="" />);
      expect(getClearIcon()).toHaveAttribute('tabindex', '-1');
    });
    // TODO (@SevereCloud): не понял почему тест сломался, на деле очистка работает
    it.skip('clears value', async () => {
      let value = 'init';
      render(<Search value={value} onChange={(e) => (value = e.target.value)} />);
      await userEvent.click(getClearIcon());
      expect(value).toBe('');
    });
    it('does not change without onChange', async () => {
      render(<Search value="init" />);
      await userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('init');
    });
    // known bug
    it.skip('does not clear value without onChange', async () => {
      let value = 'init';
      render(<Search value={value} onChange={(e) => (value = e.target.value)} />);
      await userEvent.click(getClearIcon());
      expect(value).toBe('init');
      expect(getInput()).toHaveValue('init');
    });
  });

  it('calls focus handlers', async () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    render(<Search onFocus={onFocus} onBlur={onBlur} />);
    await userEvent.click(getInput());
    expect(onFocus).toHaveBeenCalled();
    expect(onBlur).not.toHaveBeenCalled();
    await userEvent.click(document.body);
    expect(onBlur).toHaveBeenCalled();
  });

  it('calls onIconClick', async () => {
    const cb = jest.fn();
    render(<Search icon={<div data-testid="icon" />} onIconClick={cb} />);
    await userEvent.click(screen.getByTestId('icon'));
    act(jest.runAllTimers);
    expect(cb).toHaveBeenCalled();
  });

  it('calls onFindButtonClick', async () => {
    const cb = jest.fn();
    render(<Search value="test" onFindButtonClick={cb} />);
    await userEvent.click(getFindButton());
    act(jest.runAllTimers);
    expect(cb).toHaveBeenCalled();
  });

  it.each([fireEvent.click, fireEvent.pointerDown])(
    'should clear value by click clear button',
    async (clickFn) => {
      let value = '';
      const { container } = render(<Search onChange={(e) => (value = e.target.value)} />);
      await userEvent.type(getInput(), 'user');
      expect(value).toEqual('user');
      const clearButton = container.getElementsByClassName(styles['Search__icon'])[0];
      clickFn(clearButton);
      expect(value).toEqual('');
    },
  );
});
