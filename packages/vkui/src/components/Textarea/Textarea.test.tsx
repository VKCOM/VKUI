import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from './Textarea';

const getInput = () => screen.getByRole('textbox');

describe('Textarea', () => {
  baselineComponent(Textarea);

  describe('works uncontrolled', () => {
    it('uses defaultValue', () => {
      render(<Textarea defaultValue="def" />);
      expect(getInput()).toHaveValue('def');
    });
    it('manages value', () => {
      render(<Textarea />);
      userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('user');
    });
    it('fires onChange', () => {
      let value = '';
      render(<Textarea onChange={(e) => (value = e.target.value)} />);
      userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('user');
      expect(value).toBe('user');
    });
  });

  describe('works controlled', () => {
    it('respects outer value', () => {
      const { rerender } = render(<Textarea value="init" />);
      expect(getInput()).toHaveValue('init');
      rerender(<Textarea value="update" />);
      expect(getInput()).toHaveValue('update');
    });
    it('value overrides defaultValue', () => {
      render(<Textarea defaultValue="def" value="val" />);
      expect(getInput()).toHaveValue('val');
    });
    it('fires onChange', () => {
      let value = 'init';
      render(<Textarea value={value} onChange={(e) => (value = e.target.value)} />);
      userEvent.type(getInput(), 'X');
      expect(value).toBe('initX');
    });
    it('does not change without onChange', () => {
      render(<Textarea value="init" />);
      userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('init');
    });
  });

  describe('calls onResize', () => {
    it('when editing', () => {
      const onResize = jest.fn();
      render(<Textarea value="" onResize={onResize} />);
      userEvent.type(getInput(), '{enter}{enter}{enter}{enter}');
      expect(onResize).toHaveBeenCalled();
    });
    it('when changing controlled value', () => {
      const onResize = jest.fn();
      render(<Textarea value="" onResize={onResize} />).rerender(
        <Textarea value="\n\n\n\n" onResize={onResize} />,
      );
      expect(onResize).toHaveBeenCalled();
    });
    it("won't resize if parent is invisible", () => {
      const onResize = jest.fn();
      render(
        <div style={{ display: 'none' }}>
          <Textarea onResize={onResize} />
        </div>,
      ).rerender(
        <div style={{ display: 'none' }}>
          <Textarea value="\n\n\n\n" onResize={onResize} />
        </div>,
      );
      expect(onResize).not.toHaveBeenCalled();
    });
  });
});
