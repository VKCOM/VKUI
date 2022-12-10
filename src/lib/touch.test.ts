import { coordX, coordY, VKUITouchEvent } from './touch';

// Настоящего Touch нет в jsdom: https://github.com/jsdom/jsdom/issues/1508
const touch = (ops: Partial<TouchInit>) => ops as Touch;

describe('touch', () => {
  describe.each(['coordX', 'coordY'] as const)('%s', (getterName) => {
    const getter = getterName === 'coordX' ? coordX : coordY;
    it('works with mouse', () => {
      expect(
        getter(
          new MouseEvent('mousemove', {
            clientX: 100,
            clientY: 100,
          }) as VKUITouchEvent,
        ),
      ).toBe(100);
    });
    it('works with touch', () => {
      expect(
        getter(
          new TouchEvent('touchmove', {
            changedTouches: [touch({ clientX: 100, clientY: 100 })],
          }) as VKUITouchEvent,
        ),
      ).toBe(100);
    });
    it('works with mouse when client=0', () => {
      expect(
        getter(
          new MouseEvent('mousemove', {
            clientX: 0,
            clientY: 0,
          }) as VKUITouchEvent,
        ),
      ).toBe(0);
    });
  });
});
