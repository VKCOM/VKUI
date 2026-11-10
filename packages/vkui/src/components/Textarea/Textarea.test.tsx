import { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { describe, expect, it, vi } from 'vitest';
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
      <Textarea slotProps={{ textArea: { 'aria-labelledby': 'textarea' } }} {...props} />
    </>
  ));

  it('should work with slotProps', () => {
    const rootRef1 = createRef<HTMLElement>();
    const rootRef2 = createRef<HTMLElement>();
    const textAreaRef1 = createRef<HTMLTextAreaElement>();
    const textAreaRef2 = createRef<HTMLTextAreaElement>();
    const onRootClick1 = vi.fn();
    const onRootClick2 = vi.fn();
    const onTextareaClick = vi.fn();

    render(
      <Textarea
        data-testid="textArea"
        className="rootClassName"
        getRootRef={rootRef1}
        getRef={textAreaRef1}
        value="value"
        id="textarea"
        name="textarea"
        rows={2}
        onChange={noop}
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
          textArea: {
            'className': 'textAreaClassName',
            'getRootRef': textAreaRef2,
            'data-testid': 'textArea-2',
            'value': 'value-2',
            'onClick': onTextareaClick,
          },
        }}
      />,
    );

    expect(screen.queryByTestId('textArea')).not.toBeInTheDocument();
    const textArea = screen.getByTestId('textArea-2');
    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveClass('textAreaClassName');
    expect(textArea).toHaveValue('value-2');
    expect(textArea).toHaveAttribute('id', 'textarea');
    expect(textArea).toHaveAttribute('name', 'textarea');
    expect(textArea).toHaveAttribute('rows', '2');

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
    expect(onTextareaClick).toHaveBeenCalledTimes(1);
    expect(onRootClick1).toHaveBeenCalledTimes(1);
    expect(onRootClick2).toHaveBeenCalledTimes(1);

    fireEvent.click(root);
    expect(onRootClick1).toHaveBeenCalledTimes(2);
    expect(onRootClick2).toHaveBeenCalledTimes(2);
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

    const mockScrollLayout = (textArea: HTMLTextAreaElement, initialScrollTop = 0) => {
      const scrollContainer = textArea.parentElement?.parentElement as HTMLElement;
      const clientHeight = 200;
      let scrollHeight = 400;
      let nextScrollHeight = scrollHeight;
      let scrollTop = initialScrollTop;
      const heightChanges: string[] = [];
      vi.spyOn(scrollContainer, 'scrollHeight', 'get').mockImplementation(() => scrollHeight);
      vi.spyOn(scrollContainer, 'clientHeight', 'get').mockImplementation(() => clientHeight);
      Object.defineProperty(scrollContainer, 'scrollTop', {
        configurable: true,
        get: () => scrollTop,
        set: (value: number) => {
          scrollTop = Math.max(0, Math.min(value, scrollHeight - clientHeight));
        },
      });
      const setProperty = textArea.style.setProperty.bind(textArea.style);
      vi.spyOn(textArea.style, 'setProperty').mockImplementation((name, value, priority) => {
        if (name === 'height') {
          heightChanges.push(value ?? '');
          if (value === '') {
            // Android/Chrome сбрасывает прокрутку во время пересчёта layout.
            scrollTop = 0;
          } else {
            scrollHeight = nextScrollHeight;
          }
        }
        setProperty(name, value, priority);
      });
      return {
        heightChanges,
        getScrollTop: () => scrollTop,
        setNextScrollHeight: (value: number) => {
          nextScrollHeight = value;
        },
      };
    };

    it.each([
      ['Space', ' ', 420],
      ['Backspace', '{backspace}', 380],
    ])('keeps the caret visible after %s at the end (#8273)', async (_name, input, height) => {
      render(<Textarea defaultValue={'line\n'.repeat(20)} />);
      const textArea = getInput() as HTMLTextAreaElement;
      await userEvent.click(textArea);
      textArea.setSelectionRange(textArea.value.length, textArea.value.length);
      const layout = mockScrollLayout(textArea, 200);
      layout.setNextScrollHeight(height);

      await userEvent.type(textArea, input, { skipClick: true });

      expect(layout.heightChanges).toHaveLength(2);
      expect(layout.getScrollTop()).toBe(height - 200);
    });

    it('preserves scroll position when editing in the middle (#8273)', async () => {
      render(<Textarea defaultValue={'line\n'.repeat(20)} />);
      const textArea = getInput() as HTMLTextAreaElement;
      await userEvent.click(textArea);
      textArea.setSelectionRange(5, 5);
      const layout = mockScrollLayout(textArea, 80);
      layout.setNextScrollHeight(420);

      await userEvent.type(textArea, 'X', { skipClick: true });

      expect(textArea.selectionEnd).toBeLessThan(textArea.value.length);
      expect(layout.heightChanges).toHaveLength(2);
      expect(layout.getScrollTop()).toBe(80);
    });

    it.each([
      ['manually scrolled up, caret at end', 40, true],
      ['at top, caret at start', 0, false],
    ])('preserves scroll on window resize: %s (#8273)', (_name, scrollTop, caretAtEnd) => {
      render(<Textarea defaultValue={'line\n'.repeat(20)} />);
      const textArea = getInput() as HTMLTextAreaElement;
      const caret = caretAtEnd ? textArea.value.length : 0;
      textArea.setSelectionRange(caret, caret);
      const layout = mockScrollLayout(textArea, scrollTop);
      layout.setNextScrollHeight(420);

      fireEvent(window, new Event('resize'));

      expect(layout.heightChanges).toHaveLength(2);
      expect(layout.getScrollTop()).toBe(scrollTop);
    });

    it.each([
      ['long defaultValue (cursor at start)', 'line\n'.repeat(20)],
      ['empty value (cursor at end)', ''],
    ])('keeps scroll at top on first appearance: %s (#8273)', (_name, defaultValue) => {
      // Смокаем геометрию контейнера прокрутки ДО монтирования, чтобы первичный
      // ресайз (запускается из `useEffect` при появлении Textarea) видел переполнение.
      const SCROLL_HEIGHT = 400;
      const containerScrollTop = { value: 0 };
      const scrollHeightSpy = vi
        .spyOn(HTMLElement.prototype, 'scrollHeight', 'get')
        .mockImplementation(function (this: HTMLElement) {
          return SCROLL_HEIGHT;
        });
      const clientHeightSpy = vi
        .spyOn(HTMLElement.prototype, 'clientHeight', 'get')
        .mockImplementation(function (this: HTMLElement) {
          return 200;
        });
      const scrollTopDesc = Object.getOwnPropertyDescriptor(Element.prototype, 'scrollTop')!;
      Object.defineProperty(Element.prototype, 'scrollTop', {
        configurable: true,
        get(this: HTMLElement) {
          return containerScrollTop.value;
        },
        set(this: HTMLElement, v: number) {
          containerScrollTop.value = v;
        },
      });

      render(<Textarea defaultValue={defaultValue} />);

      scrollHeightSpy.mockRestore();
      clientHeightSpy.mockRestore();
      Object.defineProperty(Element.prototype, 'scrollTop', scrollTopDesc);

      // При первичном появлении Textarea с переполняющим контентом прокрутка
      // должна оставаться вверху, а не уходить в самый низ — независимо от того,
      // где находится курсор (в начале или в конце).
      expect(containerScrollTop.value).toBe(0);
    });
  });
});
