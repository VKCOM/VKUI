import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent, userEvent } from '../../testing/utils';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { Textarea } from './Textarea';

const getInput = () => screen.getByRole('textbox');

describe('Textarea', () => {
  baselineComponent((props) => (
    <>
      <VisuallyHidden Component="label" id="textarea">
        Textarea
      </VisuallyHidden>
      <Textarea aria-labelledby="textarea" {...props} />
    </>
  ));

  describe('works uncontrolled', () => {
    it('uses defaultValue', () => {
      render(<Textarea defaultValue="def" />);
      expect(getInput()).toHaveValue('def');
    });
    it('manages value', async () => {
      render(<Textarea />);
      await userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('user');
    });
    it('fires onChange', async () => {
      let value = '';
      render(<Textarea onChange={(e) => (value = e.target.value)} />);
      await userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('user');
      expect(value).toBe('user');
    });

    it('form reset form', async () => {
      render(
        <form data-testid="form">
          <Textarea />
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
          <Textarea defaultValue="def" />
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
      const { rerender } = render(<Textarea value="init" />);
      expect(getInput()).toHaveValue('init');
      rerender(<Textarea value="update" />);
      expect(getInput()).toHaveValue('update');
    });
    it('value overrides defaultValue', () => {
      render(<Textarea defaultValue="def" value="val" />);
      expect(getInput()).toHaveValue('val');
    });
    it('fires onChange', async () => {
      let value = 'init';
      render(<Textarea value={value} onChange={(e) => (value = e.target.value)} />);
      await userEvent.type(getInput(), 'X');
      expect(value).toBe('initX');
    });
    it('does not change without onChange', async () => {
      render(<Textarea value="init" />);
      await userEvent.type(getInput(), 'user');
      expect(getInput()).toHaveValue('init');
    });
  });

  describe('calls onResize', () => {
    it('when editing', async () => {
      const onResize = jest.fn();
      render(<Textarea value="" onResize={onResize} />);
      await userEvent.type(getInput(), '{enter}{enter}{enter}{enter}');
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
