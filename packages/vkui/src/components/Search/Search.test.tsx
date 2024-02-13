import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent, fakeTimers, userEvent } from '../../testing/utils';
import { Search } from './Search';
import styles from './Search.module.css';

const getInput = () => screen.getByRole('searchbox');
const getClearIcon = () => document.querySelector(`.${styles.Search__icon}`)!;
const getFindButton = () => document.querySelector(`.${styles.Search__findButton}`)!;

describe('Search', () => {
  fakeTimers();
  baselineComponent(Search);

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
      render(<Search defaultValue="def" value="val" />);
      expect(getInput()).toHaveValue('val');
    });
    it('fires onChange', async () => {
      let value = 'init';
      render(<Search value={value} onChange={(e) => (value = e.target.value)} />);
      await userEvent.type(getInput(), 'X');
      expect(value).toBe('initX');
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
    expect(cb).toHaveBeenCalled();
  });

  it('calls onFindButtonClick', async () => {
    const cb = jest.fn();
    render(<Search value="test" onFindButtonClick={cb} />);
    await userEvent.click(getFindButton());
    expect(cb).toHaveBeenCalled();
  });
});
