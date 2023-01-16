import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { noop } from '@vkontakte/vkjs';
import { Touch } from './Touch';
import { createElement } from 'react';
import { View } from '../View/View';
import { Panel } from '../Panel/Panel';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { Group } from '../Group/Group';
import { CardScroll } from '../CardScroll/CardScroll';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';

// Настоящего Touch нет в jsdom: https://github.com/jsdom/jsdom/issues/1508
const asClientPos = ([clientX = 0, clientY = 0] = []): Touch & MouseEvent =>
  ({ clientX, clientY } as any);

function fireMouseSwipe(
  e: HTMLElement,
  [start, ...move]: any[],
  ops: { startEl?: HTMLElement } = {},
) {
  fireEvent.mouseDown(ops.startEl || e, asClientPos(start));
  move.forEach((p) => fireEvent.mouseMove(e, asClientPos(p)));
  fireEvent.mouseUp(e, asClientPos(move[move.length - 1]));
  return fireEvent.click(e, asClientPos(move[move.length - 1]));
}

function fireTouchSwipe(e: HTMLElement, [start, ...move]: any[], { end = true } = {}) {
  let prevTouches: number[][] = [];
  const eventProps = (p: any) => {
    const touches: number[][] = Array.isArray(p[0]) ? p : [p];
    const changedTouches = touches
      .filter((t, i) => !prevTouches[i] || prevTouches[i].some((pos, j) => t[j] !== pos))
      .concat(prevTouches.slice(touches.length));
    if (!changedTouches.length) {
      throw new Error('no changed touches');
    }
    prevTouches = touches;
    return {
      changedTouches: changedTouches.map(asClientPos as any),
      touches: touches.map(asClientPos as any),
    };
  };
  fireEvent.touchStart(e, eventProps(start));
  move.forEach((p) => fireEvent.touchMove(e, eventProps(p)));
  const fireEnd = () => fireEvent.touchEnd(e, eventProps([]));
  end && fireEnd();
  return fireEnd;
}

const threshold = 10;
const slideRight = (target: HTMLElement) =>
  fireMouseSwipe(target, [
    [0, 0],
    [threshold, 0],
  ]);

// reset touch detection
afterEach(() => delete window['ontouchstart']);

describe('Touch', () => {
  baselineComponent(Touch);

  it('does not leak listeners when unmounting during gesture', () => {
    let moved = false;
    const { unmount } = render(<Touch onMove={() => (moved = true)} data-testid="touch" />);
    fireEvent.mouseDown(screen.getByTestId('touch'), { clientX: 0 });
    unmount();
    fireEvent.mouseMove(document.body, { clientX: threshold });
    expect(moved).toBe(false);
  });

  describe('prevents browser drag behavior', () => {
    it.each(['img', 'a'])('for %s', (tag) => {
      render(<Touch>{createElement(tag, { 'data-testid': '__el__' })}</Touch>);
      const hasDefault = fireEvent.dragStart(screen.getByTestId('__el__'));
      expect(hasDefault).toBe(false);
    });
    it('not for an explicitly draggable element', () => {
      render(
        <Touch>
          <div draggable data-testid="__el__" />
        </Touch>,
      );
      const hasDefault = fireEvent.dragStart(screen.getByTestId('__el__'));
      expect(hasDefault).toBe(true);
    });
  });

  describe('hover', () => {
    it('calls onEnter / onLeave with mouse', () => {
      const onEnter = jest.fn();
      const onLeave = jest.fn();
      render(<Touch data-testid="__t__" onEnter={onEnter} onLeave={onLeave} />);
      fireEvent.mouseEnter(screen.getByTestId('__t__'));
      expect(onEnter).toBeCalledTimes(1);
      fireEvent.mouseLeave(screen.getByTestId('__t__'));
      expect(onLeave).toBeCalledTimes(1);
    });
    it('simulates onLeave with touch', () => {
      window['ontouchstart'] = null;
      const onLeave = jest.fn();
      render(<Touch data-testid="__t__" onLeave={onLeave} />);
      fireTouchSwipe(screen.getByTestId('__t__'), [[0, 0]]);
      expect(onLeave).toBeCalledTimes(1);
    });
  });

  describe('handles slide gestures', () => {
    const keys = [
      'onStart',
      'onStartX',
      'onStartY',
      'onMove',
      'onMoveX',
      'onMoveY',
      'onEnd',
      'onEndX',
      'onEndY',
    ] as const;
    const makeHandlers = (): { [k in (typeof keys)[number]]: jest.Mock } => {
      return keys.reduce<any>((acc, k) => ({ ...acc, [k]: jest.fn() }), {});
    };
    describe.each(['touch', 'mouse'])('using %s', (input) => {
      const fireGesture = input === 'touch' ? fireTouchSwipe : fireMouseSwipe;
      if (input === 'touch') {
        beforeEach(() => (window['ontouchstart'] = null));
      }

      describe('callback gesture params', () => {
        const emptyGesture = (x: number, y: number) =>
          expect.objectContaining({
            startX: x,
            startY: y,
            startT: expect.any(Date),
            duration: expect.any(Number),
            isPressed: true,
            isY: false,
            isX: false,
            isSlideX: false,
            isSlideY: false,
            isSlide: false,
            shiftX: 0,
            shiftY: 0,
            shiftXAbs: 0,
            shiftYAbs: 0,
          });
        it('has all gesture params in start handler', () => {
          const handlers = makeHandlers();
          render(<Touch {...handlers} data-testid="__t__" />);
          fireGesture(screen.getByTestId('__t__'), [[20, 20]]);
          expect(handlers.onStart).toBeCalledTimes(1);
          expect(handlers.onStart).toBeCalledWith(emptyGesture(20, 20));
        });
        it('has all params end gesture on clean tap', () => {
          const handlers = makeHandlers();
          render(<Touch {...handlers} data-testid="__t__" />);
          fireGesture(screen.getByTestId('__t__'), [[20, 20]]);
          expect(handlers.onEnd).toBeCalledTimes(1);
          expect(handlers.onEnd).toBeCalledWith(emptyGesture(20, 20));
        });
      });

      it.each([
        ['left', [-3, 0]],
        ['right', [3, 0]],
        ['up', [0, -3]],
        ['down', [0, 3]],
      ])('detects slide %s', (_name, [vx, vy]) => {
        const handlers = makeHandlers();
        render(<Touch {...handlers} data-testid="__t__" />);
        fireGesture(
          screen.getByTestId('__t__'),
          [0, 1, 2, 3].map((t) => [20 + vx * t, 20 + vy * t]),
        );
        expect(handlers.onStartX).toBeCalledTimes(1);
        expect(handlers.onStartY).toBeCalledTimes(1);
        expect(handlers.onMoveX).toBeCalledTimes(vx ? 2 : 0);
        expect(handlers.onMoveY).toBeCalledTimes(vy ? 2 : 0);
        expect(handlers.onEndX).toBeCalledTimes(vx ? 1 : 0);
        expect(handlers.onEndY).toBeCalledTimes(vy ? 1 : 0);
      });

      it('does not detect slide on small movement', () => {
        const handlers = makeHandlers();
        render(<Touch {...handlers} data-testid="__t__" />);
        fireGesture(screen.getByTestId('__t__'), [
          [20, 20],
          [17, 23],
          [23, 20],
          [20, 17],
        ]);
        expect(handlers.onStartY).toBeCalledTimes(1);
        expect(handlers.onMoveY).not.toBeCalled();
        expect(handlers.onEndY).not.toBeCalled();
      });

      it('does not detect slide if onMove[X|Y] not passed', () => {
        const { onMoveX, onMoveY, onMove, ...handlers } = makeHandlers();
        render(<Touch {...handlers} data-testid="__t__" />);
        fireGesture(screen.getByTestId('__t__'), [
          [20, 20],
          [20, 30],
        ]);
        expect(handlers.onEnd).toBeCalledTimes(1);
        expect(handlers.onEnd).toBeCalledWith(
          expect.objectContaining({
            isSlideX: false,
            isSlideY: false,
          }),
        );
      });

      it('snaps slide direction', () => {
        const handlers = makeHandlers();
        render(<Touch {...handlers} data-testid="__t__" />);
        fireGesture(screen.getByTestId('__t__'), [
          [20, 20],
          [20, 30],
          [20, 20],
          [30, 20],
        ]);
        expect(handlers.onMoveX).not.toBeCalled();
        expect(handlers.onEndX).not.toBeCalled();
        expect(handlers.onEnd).toBeCalledWith(
          expect.objectContaining({
            isSlide: true,
            isSlideY: true,
            isSlideX: false,
          }),
        );
      });

      if (input === 'touch') {
        it('stops gesture if multi-touch', () => {
          const handlers = makeHandlers();
          render(<Touch {...handlers} data-testid="__t__" />);
          fireGesture(screen.getByTestId('__t__'), [
            [20, 20],
            [20, 26],
            [
              [20, 26],
              [25, 25],
            ],
            [
              [20, 26],
              [25, 30],
            ],
          ]);
          expect(handlers.onMove).toBeCalledTimes(1);
          expect(handlers.onEnd).toBeCalledWith(expect.objectContaining({ shiftX: 0, shiftY: 6 }));
        });
      }

      if (input === 'mouse') {
        it('detects slide under target change', () => {
          const handlers = makeHandlers();
          render(<Touch {...handlers} data-testid="__t__" />);
          fireMouseSwipe(
            document.body,
            [
              [20, 20],
              [20, 26],
              [20, 30],
            ],
            { startEl: screen.getByTestId('__t__') },
          );
          expect(handlers.onStart).toBeCalledTimes(1);
          expect(handlers.onMoveY).toBeCalledTimes(2);
          expect(handlers.onEnd).toBeCalledTimes(1);
          expect(handlers.onEnd).toBeCalledWith(
            expect.objectContaining({ isSlideY: true, shiftY: 10 }),
          );
        });
      }
      if (input === 'touch') {
        // https://stackoverflow.com/questions/33298828
        it('fires end if touchStart element removed', () => {
          const handlers = makeHandlers();
          const h = render(
            <Touch {...handlers} data-testid="__t__">
              <div data-testid="__c__" />
            </Touch>,
          );
          const fireEnd = fireTouchSwipe(
            screen.getByTestId('__c__'),
            [
              [0, 0],
              [10, 20],
            ],
            { end: false },
          );
          h.rerender(<Touch {...handlers} data-testid="__t__" />);
          fireEnd();
          expect(handlers.onEnd).toBeCalledTimes(1);
        });
      }
    });
  });

  describe('prevents click after slide', () => {
    it('does not prevent link click', () => {
      render(
        <Touch>
          <a href="/hello" />
        </Touch>,
      );
      const hasDefault = fireMouseSwipe(screen.getByRole('link'), [
        [10, 10],
        [10, 10],
      ]);
      expect(hasDefault).toBe(true);
    });
    it('handles onClickCapture', () => {
      const cb = jest.fn(() => null);
      render(<Touch onClickCapture={cb} onMove={noop} data-testid="touch" />);
      userEvent.click(screen.getByTestId('touch'));
      expect(cb).toBeCalledTimes(1);
      cb.mockReset();
      slideRight(screen.getByTestId('touch'));
      expect(cb).toBeCalledTimes(1);
    });
    it('does not fire click after slide if noSlideClick=true', () => {
      const clicked = new Set();
      render(
        <div onClick={() => clicked.add('container')}>
          <Touch
            onMove={noop}
            onClickCapture={() => clicked.add('touchCapture')}
            onClick={() => clicked.add('touch')}
            noSlideClick
          >
            <div onClick={() => clicked.add('content')} data-testid="inner" />
          </Touch>
        </div>,
      );
      slideRight(screen.getByTestId('inner'));
      expect(clicked).toEqual(new Set());
    });
    it('handles click after slide', () => {
      const cb = jest.fn(() => null);
      render(<Touch onClickCapture={cb} data-testid="touch" />);
      slideRight(screen.getByTestId('touch'));
      userEvent.click(screen.getByTestId('touch'));
      expect(cb).toBeCalled();
    });
    it('does not prevent click of a button after slide of a parent on mobile', () => {
      render(
        <View activePanel="card">
          <Panel id="card">
            <PanelHeader>CardScroll</PanelHeader>
            <Group description="Внутри Group">
              <CardScroll size="s">
                <Card>
                  <div style={{ paddingBottom: '66%' }} />
                </Card>
                <Card data-testid="card">
                  <div style={{ paddingBottom: '66%' }}>
                    <Button data-testid="button" href="vk.com" />
                  </div>
                </Card>
                <Card>
                  <div style={{ paddingBottom: '66%' }} />
                </Card>
                <Card>
                  <div style={{ paddingBottom: '66%' }} />
                </Card>
                <Card>
                  <div style={{ paddingBottom: '66%' }} />
                </Card>
                <Card>
                  <div style={{ paddingBottom: '66%' }} />
                </Card>
              </CardScroll>
            </Group>
          </Panel>
        </View>,
      );
      slideRight(screen.getByTestId('card'));
      const hasDefault = fireEvent.click(screen.getByTestId('button'));
      expect(hasDefault).toBe(true);
    });
  });
});
