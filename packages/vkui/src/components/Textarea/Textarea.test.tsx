import { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { Platform } from '../../lib/platform';
import { baselineComponent, fakeTimersForScope, userEvent } from '../../testing/utils';
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

  it('should work with slotsProps', () => {
    const rootRef1 = createRef<HTMLElement>();
    const rootRef2 = createRef<HTMLElement>();
    const textAreaRef1 = createRef<HTMLTextAreaElement>();
    const textAreaRef2 = createRef<HTMLTextAreaElement>();
    const onClick1 = vi.fn();
    const onClick2 = vi.fn();
    const onRootClick = vi.fn();

    render(
      <Textarea
        data-testid="textArea"
        className="rootClassName"
        getRootRef={rootRef1}
        getRef={textAreaRef1}
        value="value"
        onChange={noop}
        onClick={onClick1}
        style={{
          backgroundColor: 'rgb(255, 0, 0)',
        }}
        slotsProps={{
          root: {
            'data-testid': 'root',
            'className': 'rootClassName-2',
            'style': {
              color: 'rgb(255, 0, 0)',
            },
            'getRootRef': rootRef2,
            'onClick': onRootClick,
          },
          textArea: {
            'className': 'textAreaClassName',
            'getRootRef': textAreaRef2,
            'data-testid': 'textArea-2',
            'value': 'value-2',
            'onClick': onClick2,
          },
        }}
      />,
    );

    expect(screen.queryByTestId('textArea')).not.toBeInTheDocument();
    const textArea = screen.getByTestId('textArea-2');
    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveClass('textAreaClassName');
    expect(textArea).toHaveValue('value-2');

    const root = screen.getByTestId('root');
    expect(root).toBeInTheDocument();
    expect(root).toHaveClass('rootClassName');
    expect(root).toHaveClass('rootClassName-2');
    expect(root).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(root).toHaveStyle('color: rgb(255, 0, 0)');

    expect(rootRef1.current).toBe(rootRef2.current);
    expect(rootRef1.current).toBe(root);

    expect(textAreaRef1.current).toBe(textAreaRef2.current);
    expect(textAreaRef1.current).toBe(textArea);

    fireEvent.click(textArea);
    expect(onClick1).toHaveBeenCalledTimes(1);
    expect(onClick2).toHaveBeenCalledTimes(1);

    fireEvent.click(root);
    expect(onRootClick).toHaveBeenCalledTimes(2);
  });

  it.each<[AlignType, string]>([
    ['right', styles.alignRight],
    ['center', styles.alignCenter],
  ])(`should have className when align %s`, (align, className) => {
    const ref = {
      current: null,
    };
    render(<Textarea getRootRef={ref} align={align} />);
    expect(ref.current).toHaveClass(className);
  });

  describe('works uncontrolled', () => {
    fakeTimersForScope();

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
    fakeTimersForScope();

    it('respects outer value', () => {
      const { rerender } = render(<Textarea value="init" />);
      expect(getInput()).toHaveValue('init');
      rerender(<Textarea value="update" />);
      expect(getInput()).toHaveValue('update');
    });
    it('value overrides defaultValue', () => {
      vi.spyOn(global.console, 'error').mockImplementationOnce((message) => {
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
    fakeTimersForScope();

    const mockTextareaScrollHeight = () => {
      const textArea = getInput();
      let height = 100;
      vi.spyOn(textArea, 'scrollHeight', 'get').mockImplementation(() => {
        const currHeight = height;
        height += 10;
        return currHeight;
      });
    };

    it('when editing', async () => {
      const onResize = vi.fn();
      render(<Textarea value="" onResize={onResize} />);
      mockTextareaScrollHeight();
      await userEvent.type(getInput(), '{enter}{enter}{enter}{enter}');
      expect(onResize).toHaveBeenCalledTimes(5);
    });
    it('when changing controlled value', () => {
      const onResize = vi.fn();
      const { rerender } = render(<Textarea value="" onResize={onResize} />);
      mockTextareaScrollHeight();
      rerender(<Textarea value="\n\n\n\n" onResize={onResize} />);
      expect(onResize).toHaveBeenCalledTimes(2);
    });
    it('when changing platform', async () => {
      const onResize = vi.fn();

      const { rerender } = render(
        <ConfigProvider platform={Platform.VKCOM}>
          <Textarea value="" onResize={onResize} />
        </ConfigProvider>,
      );
      mockTextareaScrollHeight();

      rerender(
        <ConfigProvider platform={Platform.ANDROID}>
          <Textarea value="" onResize={onResize} />
        </ConfigProvider>,
      );

      expect(onResize).toHaveBeenCalledTimes(2);
    });
    it('when resize window', () => {
      const onResize = vi.fn();
      render(<Textarea value="" onResize={onResize} />);
      mockTextareaScrollHeight();
      fireEvent(window, new Event('resize'));
      expect(onResize).toHaveBeenCalledTimes(2);
    });
    it("won't resize if parent is invisible", () => {
      const onResize = vi.fn();
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
