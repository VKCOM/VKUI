import { act, createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Icon24Done } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import {
  baselineComponent,
  fakeTimersForScope,
  userEvent,
  withFakeTimers,
} from '../../testing/utils';
import { Search } from './Search';
import styles from './Search.module.css';

const getInput = () => screen.getByRole('searchbox');
const getClearIcon = () => screen.getByTestId('clear-button');
const getFindButton = () => screen.getByTestId('find-button');

vi.mock('../../lib/touch', async () => {
  const originalModule = await vi.importActual('../../lib/touch');
  return {
    ...originalModule,
    touchEnabled: () => true,
  };
});

describe(Search, () => {
  baselineComponent(Search);

  it('should work with slotProps', () => {
    const rootRef1 = createRef<HTMLDivElement>();
    const rootRef2 = createRef<HTMLDivElement>();
    const inputRef1 = createRef<HTMLInputElement>();
    const inputRef2 = createRef<HTMLInputElement>();
    const onRootClick1 = vi.fn();
    const onRootClick2 = vi.fn();
    const onInputClick = vi.fn();

    render(
      <Search
        data-testid="input"
        className="rootClassName"
        getRootRef={rootRef1}
        getRef={inputRef1}
        value="value"
        onChange={noop}
        required
        id="search"
        autoComplete="off"
        onClick={onRootClick1}
        style={{
          backgroundColor: 'rgb(255, 0, 0)',
        }}
        slotProps={{
          root: {
            'data-testid': 'root',
            'className': 'rootClassName-2',
            'style': {
              color: 'rgb(255, 0, 0)',
            },
            'getRootRef': rootRef2,
            'onClick': onRootClick2,
          },
          input: {
            'className': 'inputClassName',
            'getRootRef': inputRef2,
            'data-testid': 'input-2',
            'value': 'value-2',
            'onClick': onInputClick,
          },
        }}
      />,
    );

    expect(screen.queryByTestId('input')).not.toBeInTheDocument();
    const input = screen.getByTestId('input-2');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('inputClassName');
    expect(input).toHaveValue('value-2');
    expect(input).toHaveAttribute('id', 'search');
    expect(input).toHaveAttribute('required');
    expect(input).toHaveAttribute('autoComplete', 'off');

    const root = screen.getByTestId('root');
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass('rootClassName');
    expect(root).toHaveClass('rootClassName-2');
    expect(root).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(root).toHaveStyle('color: rgb(255, 0, 0)');

    expect(rootRef1.current).toBe(rootRef2.current);
    expect(rootRef1.current).toBe(root);

    expect(inputRef1.current).toBe(inputRef2.current);
    expect(inputRef1.current).toBe(input);

    fireEvent.click(input);
    expect(onInputClick).toHaveBeenCalledTimes(1);
    expect(onRootClick1).toHaveBeenCalledTimes(1);
    expect(onRootClick2).toHaveBeenCalledTimes(1);

    fireEvent.click(root);
    expect(onRootClick1).toHaveBeenCalledTimes(2);
    expect(onRootClick2).toHaveBeenCalledTimes(2);
  });

  describe('works uncontrolled', () => {
    fakeTimersForScope();
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
      act(() => {
        vi.runOnlyPendingTimers();
      });
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
      act(() => {
        screen.getByTestId<HTMLFormElement>('form').reset();
      });
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
    fakeTimersForScope();
    it('respects outer value', () => {
      const { rerender } = render(<Search value="init" />);
      expect(getInput()).toHaveValue('init');
      rerender(<Search value="update" />);
      expect(getInput()).toHaveValue('update');
    });
    it('value overrides defaultValue', () => {
      vi.spyOn(global.console, 'error').mockImplementationOnce((message) => {
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
    it('hides clear button with hideClearButton prop', () => {
      const h = render(<Search value="init" clearButtonTestId="clear-button" hideClearButton />);
      expect(h.queryByTestId('clear-button')).toBeFalsy();
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
      act(() => {
        vi.runOnlyPendingTimers();
      });
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
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(value).toBe('init');
      expect(getInput()).toHaveValue('init');
    });
  });

  it(
    'calls focus handlers',
    withFakeTimers(async () => {
      const onFocus = vi.fn();
      const onBlur = vi.fn();
      render(<Search onFocus={onFocus} onBlur={onBlur} />);
      await userEvent.click(getInput());
      expect(onFocus).toHaveBeenCalled();
      expect(onBlur).not.toHaveBeenCalled();
      await userEvent.click(document.body);
      expect(onBlur).toHaveBeenCalled();
    }),
  );

  it(
    'calls onIconClick',
    withFakeTimers(async () => {
      const cb = vi.fn();
      render(<Search icon={<div data-testid="icon" />} onIconClick={cb} />);
      await userEvent.click(screen.getByTestId('icon'));
      await act(vi.runAllTimers);
      expect(cb).toHaveBeenCalled();
    }),
  );

  it(
    'calls onFindButtonClick',
    withFakeTimers(async () => {
      const cb = vi.fn();
      render(<Search value="test" onFindButtonClick={cb} findButtonTestId="find-button" />);
      await userEvent.click(getFindButton());
      await act(vi.runAllTimers);
      expect(cb).toHaveBeenCalled();
    }),
  );

  it.each([fireEvent.click, fireEvent.pointerDown])(
    'should clear value by click clear button',
    withFakeTimers<[typeof fireEvent.click]>(async (clickFn) => {
      let value = '';
      const { container } = render(<Search onChange={(e) => (value = e.target.value)} />);
      await userEvent.type(getInput(), 'user');
      expect(value).toEqual('user');
      const clearButton = container.getElementsByClassName(styles.icon)[0];
      clickFn(clearButton);
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(value).toEqual('');
    }),
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
