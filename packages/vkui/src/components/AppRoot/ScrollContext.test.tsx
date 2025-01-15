import { createRef, type RefObject, useContext, useEffect } from 'react';
import { render, renderHook } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { setRef } from '../../lib/utils';
import {
  ElementScrollController,
  GlobalScrollController,
  ScrollContext,
  type ScrollContextInterface,
  useScrollLock,
} from './ScrollContext';

type ChildWithContextProps = {
  contextRef?: RefObject<ScrollContextInterface | null>;
  beforeScrollLockFn?: VoidFunction;
};
const ChildWithContext = ({ contextRef, beforeScrollLockFn }: ChildWithContextProps) => {
  const context = useContext(ScrollContext);
  useEffect(() => {
    if (context.beforeScrollLockFnSetRef?.current && beforeScrollLockFn) {
      context.beforeScrollLockFnSetRef?.current.add(beforeScrollLockFn);
    }
    setRef(context, contextRef);
  }, [beforeScrollLockFn, context, contextRef]);
  return <div />;
};

describe(useScrollLock, () => {
  describe('ScrollContext', () => {
    test('default', () => {
      const h = renderHook(() => useContext(ScrollContext));
      expect(h.result.current.getScroll()).toEqual({ x: 0, y: 0 });
    });
  });

  describe(GlobalScrollController, () => {
    test.each([true, false])('default behavior (width scroll: %s)', (withScroll) => {
      const clearWindowMeasuresMock = withScroll ? noop : mockWindowMeasures(-1, -1);

      const beforeScrollLockFn = jest.fn();
      const h = renderHook(useScrollLock, {
        wrapper: ({ children }) => (
          <GlobalScrollController elRef={createRef<HTMLElement>()}>
            {children}
            <ChildWithContext beforeScrollLockFn={beforeScrollLockFn} />
          </GlobalScrollController>
        ),
      });
      expect(beforeScrollLockFn).toHaveBeenCalled();

      expect(getStyleAttributeObject(document.body)).toEqual({
        position: 'fixed',
        top: `-${0}px`,
        left: `-${0}px`,
        right: '0px',
        ...(withScroll
          ? {
              'overflow-x': 'scroll',
              'overflow-y': 'scroll',
            }
          : {}),
      });
      expect(jestWorkaroundGetOverscrollBehaviorPropertyValue(document.body)).toBe('none');
      expect(jestWorkaroundGetOverscrollBehaviorPropertyValue(document.documentElement)).toBe('none'); // prettier-ignore

      h.rerender(false);
      expect(getStyleAttributeObject(document.body)).toEqual({});
      expect(jestWorkaroundGetOverscrollBehaviorPropertyValue(document.body)).toBe('');
      expect(jestWorkaroundGetOverscrollBehaviorPropertyValue(document.documentElement)).toBe('');

      clearWindowMeasuresMock();
    });
    test.each([true, false])('context api with locked=%s', (locked) => {
      const contextRef = createRef<ScrollContextInterface>();
      const Fixture = () => (
        <GlobalScrollController elRef={createRef<HTMLElement>()}>
          <ChildWithContext contextRef={contextRef} />
        </GlobalScrollController>
      );

      const { rerender } = render(<Fixture />);

      const clearWindowMeasuresMock = mockWindowMeasures(50, 50);
      const clearElementScrollMock = mockElementScroll(document.body, 100, 100);
      const clearMockWindowScrollToMock = mockWindowScrollTo();

      if (locked) {
        contextRef.current?.incrementScrollLockCounter();
        rerender(<Fixture />);
      }

      expect(contextRef.current?.getScroll()).toEqual({ x: 0, y: 50 });
      expect(contextRef.current?.getScroll({ compensateKeyboardHeight: false })).toEqual({
        x: 0,
        y: 0,
      });
      contextRef.current?.scrollTo(10, 10);
      expect(contextRef.current?.getScroll()).toEqual({ x: 10, y: 60 });

      if (locked) {
        expect(getPositionOfBody()).toEqual([`-${10}px`, `-${10}px`]);
        expect(window.pageYOffset).toBe(0);
      } else {
        expect(window.pageYOffset).toBe(10);
      }

      contextRef.current?.scrollTo();
      expect(contextRef.current?.getScroll()).toEqual({ x: 0, y: 50 });

      clearWindowMeasuresMock();
      clearElementScrollMock();
      clearMockWindowScrollToMock();
    });

    test('scroll when not locked and then when locked', () => {
      const contextRef = createRef<ScrollContextInterface>();
      const Fixture = () => (
        <GlobalScrollController elRef={createRef<HTMLElement>()}>
          <ChildWithContext contextRef={contextRef} />
        </GlobalScrollController>
      );

      const { rerender } = render(<Fixture />);

      const clearWindowMeasuresMock = mockWindowMeasures(50, 50);
      const clearElementScrollMock = mockElementScroll(document.body, 100, 100);
      const clearMockWindowScrollToMock = mockWindowScrollTo();

      // Скролим не залоченный скролл
      contextRef.current?.scrollTo(10, 10);
      expect(window.pageYOffset).toBe(10);
      expect(window.pageXOffset).toBe(10);

      // Блокируем скролл
      contextRef.current?.incrementScrollLockCounter();
      rerender(<Fixture />);

      // Блокируем скролл - отступы остаются те же
      expect(window.pageYOffset).toBe(10);
      expect(window.pageXOffset).toBe(10);
      expect(getPositionOfBody()).toEqual([`-${10}px`, `-${10}px`]);

      // Скролим залоченный скролл
      contextRef.current?.scrollTo(25, 25);

      expect(getPositionOfBody()).toEqual([`-${25}px`, `-${25}px`]);

      // Выключаем блокировку скролла
      contextRef.current?.decrementScrollLockCounter();
      rerender(<Fixture />);

      // Отступы window должны пересчитаться
      expect(window.pageYOffset).toBe(25);
      expect(window.pageXOffset).toBe(25);

      clearWindowMeasuresMock();
      clearElementScrollMock();
      clearMockWindowScrollToMock();
    });
  });

  describe(ElementScrollController, () => {
    test.each([true, false])('default behavior (width scroll: %s)', (withScroll) => {
      const elRef = createRef<HTMLElement>();
      setRef(document.createElement('div'), elRef);

      const clearElementMeasuresMock = withScroll
        ? mockElementMeasures(elRef.current!, -1, -1)
        : mockElementMeasures(elRef.current!, 1, 1);

      const beforeScrollLockFn = jest.fn();
      const h = renderHook(useScrollLock, {
        wrapper: ({ children }) => (
          <ElementScrollController elRef={elRef}>
            {children}
            <ChildWithContext beforeScrollLockFn={beforeScrollLockFn} />
          </ElementScrollController>
        ),
      });
      expect(beforeScrollLockFn).toHaveBeenCalled();

      expect(getStyleAttributeObject(elRef.current)).toEqual({
        position: 'absolute',
        top: `-${0}px`,
        left: `-${0}px`,
        right: '0px',
        ...(withScroll
          ? {
              'overflow-x': 'scroll',
              'overflow-y': 'scroll',
            }
          : {}),
      });

      h.rerender(false);
      expect(getStyleAttributeObject(elRef.current)).toEqual({});

      clearElementMeasuresMock();
    });

    test('el is null', () => {
      const elRef = createRef<HTMLElement>();
      const h = renderHook(useScrollLock, {
        wrapper: ({ children }) => (
          <ElementScrollController elRef={elRef}>{children}</ElementScrollController>
        ),
      });
      expect(getStyleAttributeObject(elRef.current)).toBeNull();

      h.rerender(false);
      expect(getStyleAttributeObject(elRef.current)).toBeNull();
    });

    test('context api', () => {
      const contextRef = createRef<ScrollContextInterface>();
      const elRef = createRef<HTMLElement>();
      setRef(document.createElement('div'), elRef);
      render(
        <ElementScrollController elRef={elRef}>
          <ChildWithContext contextRef={contextRef} />
        </ElementScrollController>,
      );

      const clearElementMeasuresMock = mockElementMeasures(elRef.current!, 50, 50);
      const clearElementScrollMock = mockElementScroll(elRef.current!, 100, 100);
      const clearElementScrollToMock = mockElementScrollTo(elRef.current!);

      expect(contextRef.current?.getScroll()).toEqual({ x: 0, y: 0 });
      contextRef.current?.scrollTo(10, 10);
      expect(contextRef.current?.getScroll()).toEqual({ x: 10, y: 10 });
      contextRef.current?.scrollTo();
      expect(contextRef.current?.getScroll()).toEqual({ x: 0, y: 0 });

      clearElementMeasuresMock();
      clearElementScrollMock();
      clearElementScrollToMock();
    });

    test('context api when el is null', () => {
      const contextRef = createRef<ScrollContextInterface>();
      const elRef = createRef<HTMLElement>();
      render(
        <ElementScrollController elRef={elRef}>
          <ChildWithContext contextRef={contextRef} />
        </ElementScrollController>,
      );

      expect(contextRef.current?.getScroll()).toEqual({ x: 0, y: 0 });
      contextRef.current?.scrollTo(10, 10);
      expect(contextRef.current?.getScroll()).toEqual({ x: 0, y: 0 });
      contextRef.current?.scrollTo();
      expect(contextRef.current?.getScroll()).toEqual({ x: 0, y: 0 });
    });
  });
});

/**
 * В Jest через `el.getAttribute('style')` не получается получить свойство.
 */
function jestWorkaroundGetOverscrollBehaviorPropertyValue(el: HTMLElement) {
  return el.style.overscrollBehavior;
}

function getStyleAttributeObject(el: HTMLElement | null) {
  const style = el ? el.getAttribute('style') : null;

  if (style === null) {
    return null;
  }

  return Object.fromEntries(
    style
      .split(';')
      .map((style) =>
        style
          .trim()
          .split(':')
          .map((part) => part && part.trim()),
      )
      .filter(([key, value]) => key && value)
      .map(([key, value]) => [key, value]),
  );
}

function getPositionOfBody() {
  const styles = getStyleAttributeObject(document.body);
  return styles && [styles.left, styles.top];
}

function mockWindowMeasures(width: number, height: number) {
  const originalW = window.innerWidth;
  const originalH = window.innerHeight;
  Object.defineProperty(window, 'innerWidth', { configurable: true, value: width });
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: height });
  return function clearMock() {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: originalW });
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: originalH });
  };
}

function mockWindowScrollTo() {
  const original = window.scrollTo;
  Object.defineProperty(window, 'scrollTo', {
    configurable: true,
    value: ({ left, top }: { left: number; top: number }) => {
      Object.defineProperty(window, 'pageXOffset', { configurable: true, value: left });
      Object.defineProperty(window, 'pageYOffset', { configurable: true, value: top });
    },
  });
  return function clearMock() {
    Object.defineProperty(window, 'scrollTo', { configurable: true, value: original });
  };
}

function mockElementMeasures(el: HTMLElement, width: number, height: number) {
  const originalW = el.clientWidth;
  const originalH = el.clientHeight;
  Object.defineProperty(el, 'clientWidth', { configurable: true, value: width });
  Object.defineProperty(el, 'clientHeight', { configurable: true, value: height });
  return function clearMock() {
    Object.defineProperty(el, 'clientWidth', { configurable: true, value: originalW });
    Object.defineProperty(el, 'clientHeight', { configurable: true, value: originalH });
  };
}

function mockElementScroll(el: HTMLElement, width: number, height: number) {
  const originalW = el.scrollWidth;
  const originalH = el.scrollHeight;
  Object.defineProperty(el, 'scrollWidth', { configurable: true, value: width });
  Object.defineProperty(el, 'scrollHeight', { configurable: true, value: height });
  return function clearMock() {
    Object.defineProperty(el, 'scrollWidth', { configurable: true, value: originalW });
    Object.defineProperty(el, 'scrollHeight', { configurable: true, value: originalH });
  };
}

function mockElementScrollTo(el: HTMLElement) {
  const original = el.scrollTo.bind(el);
  Object.defineProperty(el, 'scrollTo', {
    configurable: true,
    value: (x: number, y: number) => {
      Object.defineProperty(el, 'scrollLeft', { configurable: true, value: x });
      Object.defineProperty(el, 'scrollTop', { configurable: true, value: y });
    },
  });
  return function clearMock() {
    Object.defineProperty(el, 'scrollTo', { configurable: true, value: original });
  };
}
