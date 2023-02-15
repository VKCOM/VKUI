/**
 * jest-runners-groups
 * @group unit
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baselineComponent } from '../../testing/utils';
import { Search } from './Search';

const getInput = () => screen.getByRole('searchbox');
const getClearIcon = () => document.querySelector('.vkuiSearch__icon') as Element;

describe('Search', () => {
  baselineComponent(Search);

  describe('works uncontrolled', () => {
    it('uses defaultValue', () => {
      render(<Search defaultValue="def" />);
      expect(getInput()).toHaveValue('def');
    });
    it('manages value', () => {
      render(<Search />);
      userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('user');
    });
    it('fires onChange', () => {
      let value = '';
      render(<Search onChange={(e) => (value = e.target.value)} />);
      userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('user');
      expect(value).toBe('user');
    });
    it('clears value', () => {
      render(<Search defaultValue="def" />);
      userEvent.click(getClearIcon());
      expect(getInput()).toHaveValue('');
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
    it('fires onChange', () => {
      let value = 'init';
      render(<Search value={value} onChange={(e) => (value = e.target.value)} />);
      userEvent.type(getInput(), 'X');
      expect(value).toBe('initX');
    });
    it('clears value', () => {
      let value = 'init';
      render(<Search value={value} onChange={(e) => (value = e.target.value)} />);
      userEvent.click(getClearIcon());
      expect(value).toBe('');
    });
    it('does not change without onChange', () => {
      render(<Search value="init" />);
      userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('init');
    });
    // known bug
    it.skip('does not clear value without onChange', () => {
      let value = 'init';
      render(<Search value={value} onChange={(e) => (value = e.target.value)} />);
      userEvent.click(getClearIcon());
      expect(value).toBe('init');
      expect(getInput()).toHaveValue('init');
    });
  });

  it('calls focus handlers', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    render(<Search onFocus={onFocus} onBlur={onBlur} />);
    userEvent.click(getInput());
    expect(onFocus).toHaveBeenCalled();
    expect(onBlur).not.toHaveBeenCalled();
    userEvent.click(document.body);
    expect(onBlur).toHaveBeenCalled();
  });

  it('calls onIconClick', () => {
    const cb = jest.fn();
    render(<Search icon={<div data-testid="icon" />} onIconClick={cb} />);
    userEvent.click(screen.getByTestId('icon'));
    expect(cb).toHaveBeenCalled();
  });
});
