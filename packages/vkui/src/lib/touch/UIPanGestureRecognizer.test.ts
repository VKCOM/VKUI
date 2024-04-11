import { getFakeTouchEvent } from '../../testing/utils';
import { UIPanGestureRecognizer } from './UIPanGestureRecognizer';

describe(UIPanGestureRecognizer, () => {
  it('should set start coords', () => {
    const panGestureRecognizer = new UIPanGestureRecognizer();
    panGestureRecognizer.setStartCoords(getFakeTouchEvent('touchstart', 10, 10));
    expect(panGestureRecognizer.x1).toBe(10);
    expect(panGestureRecognizer.y1).toBe(10);
    expect(panGestureRecognizer.x2).toBe(0);
    expect(panGestureRecognizer.y2).toBe(0);
  });

  it('should set end coords', () => {
    const panGestureRecognizer = new UIPanGestureRecognizer();
    panGestureRecognizer.setEndCoords(getFakeTouchEvent('touchmove', 10, 10));

    expect(panGestureRecognizer.x1).toBe(0);
    expect(panGestureRecognizer.y1).toBe(0);
    expect(panGestureRecognizer.x2).toBe(10);
    expect(panGestureRecognizer.y2).toBe(10);
  });

  it('should calculate delta', () => {
    const panGestureRecognizer = new UIPanGestureRecognizer();
    panGestureRecognizer.setStartCoords(getFakeTouchEvent('touchstart', 5, 5));
    panGestureRecognizer.setEndCoords(getFakeTouchEvent('touchmove', 8, 8));

    expect(panGestureRecognizer.delta()).toEqual({ x: 3, y: 3 });
  });

  it('should calculate distance', () => {
    const panGestureRecognizer = new UIPanGestureRecognizer();
    panGestureRecognizer.setStartCoords(getFakeTouchEvent('touchstart', 5, 5));
    panGestureRecognizer.setEndCoords(getFakeTouchEvent('touchmove', 8, 8));

    expect(panGestureRecognizer.distance()).toBe(Math.sqrt(Math.pow(3, 2) + Math.pow(3, 2)));
  });

  it.each([
    { event: getFakeTouchEvent('touchmove', 0, 0), angle: 0 },
    { event: getFakeTouchEvent('touchmove', 5, 0), angle: 0 },
    { event: getFakeTouchEvent('touchmove', 5, 5), angle: 45 },
    { event: getFakeTouchEvent('touchmove', 0, 5), angle: 90 },
    { event: getFakeTouchEvent('touchmove', -5, 0), angle: 180 },
    { event: getFakeTouchEvent('touchmove', -5, -5), angle: 225 },
    { event: getFakeTouchEvent('touchmove', 0, -5), angle: 270 },
  ])('should calculate angle', ({ event, angle }) => {
    const panGestureRecognizer = new UIPanGestureRecognizer();
    panGestureRecognizer.setStartCoords(getFakeTouchEvent('touchstart', 0, 0));

    panGestureRecognizer.setEndCoords(event);
    expect(panGestureRecognizer.angle()).toBe(angle);
  });

  it('should calculate velocity', () => {
    jest.useFakeTimers();

    const panGestureRecognizer = new UIPanGestureRecognizer();
    panGestureRecognizer.setStartCoords(getFakeTouchEvent('touchstart', 0, 0));
    panGestureRecognizer.setEndCoords(getFakeTouchEvent('touchmove', 10, 10));

    jest.setSystemTime(new Date('1970-01-01T00:00:00'));
    panGestureRecognizer.setInitialTimeOnce();

    jest.setSystemTime(new Date('1970-01-01T00:00:00'));
    expect(panGestureRecognizer.velocity()).toEqual({ x: 0, y: 0 });

    jest.setSystemTime(new Date('1970-01-01T00:00:02'));
    expect(panGestureRecognizer.velocity()).toEqual({ x: 5, y: 5 });
  });

  it('should reset coords', () => {
    const panGestureRecognizer = new UIPanGestureRecognizer();
    panGestureRecognizer.setStartCoords(getFakeTouchEvent('touchstart', 10, 10));
    panGestureRecognizer.setEndCoords(getFakeTouchEvent('touchmove', 10, 10));

    panGestureRecognizer.reset();
    expect(panGestureRecognizer.x1).toBe(0);
    expect(panGestureRecognizer.y1).toBe(0);
    expect(panGestureRecognizer.x2).toBe(0);
    expect(panGestureRecognizer.y2).toBe(0);
  });
});
