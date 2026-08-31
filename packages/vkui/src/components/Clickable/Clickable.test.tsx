import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { baselineComponent } from '../../testing/utils';
import { Clickable } from './Clickable';

describe('Clickable', () => {
  baselineComponent(Clickable);

  baselineComponent((props) => (
    <Clickable onClick={noop} {...props}>
      content
    </Clickable>
  ));

  baselineComponent((props) => (
    <Clickable href="" {...props}>
      content
    </Clickable>
  ));
  baselineComponent((props) => (
    <Clickable onClick={noop} disabled {...props}>
      content
    </Clickable>
  ));

  baselineComponent((props) => (
    <Clickable href="" disabled {...props}>
      content
    </Clickable>
  ));

  baselineComponent((props) => (
    <Clickable Component="span" {...props}>
      content
    </Clickable>
  ));

  it('href: should be link', () => {
    const result = render(<Clickable href="https://vk.ru" />);
    expect(result.getByRole('link')).toBeInTheDocument();
  });

  it('href && disabled: should be link', () => {
    const result = render(<Clickable href="https://vk.ru" disabled />);
    expect(result.getByRole('link')).toBeInTheDocument();
  });

  // https://github.com/VKCOM/VKUI/issues/8738
  it('disabled check re-render', () => {
    const Cmp = () => {
      const [disabled, setDisabled] = React.useState(false);

      return (
        <Clickable onClick={() => setDisabled(true)} disabled={disabled}>
          <div data-testid="inner-element" />
        </Clickable>
      );
    };
    const result = render(<Cmp />);

    const innerElementFirstRender = result.getByTestId('inner-element');
    const enabledElement = result.getByRole('button');
    fireEvent.click(enabledElement);

    const disabledElement = result.getByRole('button');

    expect(disabledElement.ariaDisabled).toBeTruthy();
    expect(disabledElement).toBe(enabledElement);
    expect(result.getByTestId('inner-element')).toBe(innerElementFirstRender);
  });

  it('resets hover state when hasHover becomes false (e.g. loading), so hover is not shown after hasHover is true again', () => {
    const hoverClass = 'test-hover-class';

    const TestWrapper = () => {
      const [loading, setLoading] = React.useState(false);
      return (
        <>
          <Clickable
            onClick={() => setLoading(true)}
            hasHover={!loading}
            hoverClassName={hoverClass}
            data-testid="clickable"
          >
            Load
          </Clickable>
          <button data-testid="done-button" onClick={() => setLoading(false)}>
            Done
          </button>
        </>
      );
    };
    render(<TestWrapper />);
    const clickable = screen.getByTestId('clickable');
    const doneButton = screen.getByTestId('done-button');

    fireEvent.pointerEnter(clickable, { pointerType: 'mouse', pointerId: 1 });
    expect(clickable).toHaveClass(hoverClass);

    fireEvent.click(clickable);
    expect(clickable).not.toHaveClass(hoverClass);

    fireEvent.click(doneButton);
    expect(clickable).not.toHaveClass(hoverClass);
  });

  // https://github.com/VKCOM/VKUI/issues — hover «залипает» после disabled
  describe('hover state across disabled toggle', () => {
    const hoverClass = 'test-hover-class';

    function setRect(
      el: Element,
      rect: { left: number; top: number; right: number; bottom: number },
    ) {
      vi.spyOn(el, 'getBoundingClientRect').mockReturnValue({
        ...rect,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top,
        x: rect.left,
        y: rect.top,
        toJSON: () => ({}),
      });
    }

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('does not show hover after re-enable when cursor has left while disabled', () => {
      const TestWrapper = () => {
        const [disabled, setDisabled] = React.useState(false);
        return (
          <>
            <Clickable
              onClick={() => setDisabled(true)}
              disabled={disabled}
              hoverClassName={hoverClass}
              data-testid="clickable"
            >
              Click
            </Clickable>
            <button data-testid="done-button" onClick={() => setDisabled(false)}>
              Done
            </button>
          </>
        );
      };
      render(<TestWrapper />);
      const clickable = screen.getByTestId('clickable');
      setRect(clickable, { left: 0, top: 0, right: 100, bottom: 40 });

      fireEvent.pointerEnter(clickable, { pointerType: 'mouse', pointerId: 1 });
      expect(clickable).toHaveClass(hoverClass);

      // Клик переводит кнопку в disabled. Реальный браузер не стреляет
      // pointerleave на нативной `<button disabled>`, поэтому намеренно
      // не отправляем его. Вместо этого эмулируем перемещение курсора
      // за пределы элемента (стреляет по документу, как сделал бы браузер).
      fireEvent.click(clickable);
      expect(clickable).not.toHaveClass(hoverClass);

      fireEvent.pointerMove(document, { pointerType: 'mouse', clientX: 500, clientY: 500 });

      // Возвращаем в активное состояние — курсора на кнопке уже нет, hover быть не должно.
      fireEvent.click(screen.getByTestId('done-button'));
      expect(clickable).not.toHaveClass(hoverClass);
    });
  });
});
