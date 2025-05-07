import { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Icon24Done } from '@vkontakte/icons';
import { baselineComponent, fakeTimers, userEvent } from '../../testing/utils';
import { Search } from './Search';
import styles from './Search.module.css';

const getInput = () => screen.getByRole('searchbox');
const getClearIcon = () => screen.getByTestId('clear-button');
const getFindButton = () => screen.getByTestId('find-button');

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
    it('clears value', async () => {
      render(<Search defaultValue="def" clearButtonTestId="clear-button" />);
      expect(getInput()).toHaveValue('def');
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
          <Search clearButtonTestId="clear-button" />
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
          <Search defaultValue="val" clearButtonTestId="clear-button" />
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
      const { rerender } = render(<Search value="init" clearButtonTestId="clear-button" />);
      expect(getClearIcon()).not.toHaveAttribute('tabindex');
      rerender(<Search value="" clearButtonTestId="clear-button" />);
      expect(getClearIcon()).toHaveAttribute('tabindex', '-1');
    });
    it('clears value', async () => {
      let value = 'init';
      render(
        <Search
          value={value}
          onChange={(e) => (value = e.target.value)}
          clearButtonTestId="clear-button"
        />,
      );
      await userEvent.click(getClearIcon());
      expect(value).toBe('');
    });
    it('does not change without onChange', async () => {
      render(<Search value="init" />);
      await userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('init');
    });
    it('does not clear value without onChange', async () => {
      let value = 'init';
      render(<Search value={value} clearButtonTestId="clear-button" />);
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
    render(<Search value="test" onFindButtonClick={cb} findButtonTestId="find-button" />);
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
      const clearButton = container.getElementsByClassName(styles.icon)[0];
      clickFn(clearButton);
      expect(value).toEqual('');
    },
  );

  it('should render custom icon by function', () => {
    render(
      <Search
        value="test"
        icon={(renderButton) => (
          <div data-testid="wrapper">
            {renderButton(<Icon24Done />, { 'data-testid': 'button' })}
          </div>
        )}
      />,
    );
    expect(screen.getByTestId('wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });
});
