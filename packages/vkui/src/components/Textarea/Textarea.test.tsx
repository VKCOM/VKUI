import { fireEvent, render, screen } from '@testing-library/react';
import { Platform } from '../../lib/platform';
import { baselineComponent, fakeTimers, userEvent } from '../../testing/utils';
import type { AlignType } from '../../types';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { Textarea } from './Textarea';
import styles from './Textarea.module.css';

const getInput = () => screen.getByRole('textbox');

describe(Textarea, () => {
  baselineComponent((props) => (
    <>
      <VisuallyHidden Component="label" id="textarea">
        Textarea
      </VisuallyHidden>
      <Textarea aria-labelledby="textarea" {...props} />
    </>
  ));

  it.each<[AlignType, string]>([
    ['right', styles['Textarea--align-right']],
    ['center', styles['Textarea--align-center']],
  ])(`should have className when align %s`, (align, className) => {
    const ref = {
      current: null,
    };
    render(<Textarea getRootRef={ref} align={align} />);
    expect(ref.current).toHaveClass(className);
  });

  describe('works uncontrolled', () => {
    fakeTimers();

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
    fakeTimers();

    it('respects outer value', () => {
      const { rerender } = render(<Textarea value="init" />);
      expect(getInput()).toHaveValue('init');
      rerender(<Textarea value="update" />);
      expect(getInput()).toHaveValue('update');
    });
    it('value overrides defaultValue', () => {
      jest.spyOn(global.console, 'error').mockImplementationOnce((message) => {
        if (message.includes('with both value and defaultValue props.')) {
          return;
        }
        global.console.error(message);
      });
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
    fakeTimers();

    const mockTextareaScrollHeight = () => {
      const textArea = screen.getByTestId('textarea');
      let height = 100;
      jest.spyOn(textArea, 'scrollHeight', 'get').mockImplementation(() => {
        const currHeight = height;
        height += 10;
        return currHeight;
      });
    };

    it('when editing', async () => {
      const onResize = jest.fn();
      render(<Textarea data-testid="textarea" value="" onResize={onResize} />);
      mockTextareaScrollHeight();
      await userEvent.type(getInput(), '{enter}{enter}{enter}{enter}');
      expect(onResize).toHaveBeenCalledTimes(5);
    });
    it('when changing controlled value', () => {
      const onResize = jest.fn();
      const { rerender } = render(<Textarea data-testid="textarea" value="" onResize={onResize} />);
      mockTextareaScrollHeight();
      rerender(<Textarea data-testid="textarea" value="\n\n\n\n" onResize={onResize} />);
      expect(onResize).toHaveBeenCalledTimes(2);
    });
    it('when changing platform', async () => {
      const onResize = jest.fn();

      const { rerender } = render(
        <ConfigProvider platform={Platform.VKCOM}>
          <Textarea data-testid="textarea" value="" onResize={onResize} />
        </ConfigProvider>,
      );
      mockTextareaScrollHeight();

      rerender(
        <ConfigProvider platform={Platform.ANDROID}>
          <Textarea data-testid="textarea" value="" onResize={onResize} />
        </ConfigProvider>,
      );

      expect(onResize).toHaveBeenCalledTimes(2);
    });
    it('when resize window', () => {
      const onResize = jest.fn();
      render(<Textarea data-testid="textarea" value="" onResize={onResize} />);
      mockTextareaScrollHeight();
      fireEvent(window, new Event('resize'));
      expect(onResize).toHaveBeenCalledTimes(2);
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
