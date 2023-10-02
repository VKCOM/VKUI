import { canUseDOM } from './dom';

/**
 * Функция для js анимации
 * @param {number} duration
 * @param {function} timing тайминг функция анимации
 * @param {function} draw коллбэк, в который прокидывается прогресс [0, 1]
 * @returns {void}
 */
export type TimingInterface = (timeFraction: number) => number;

export type DrawInterface = (progress: number) => void;

export interface AnimateArgumentsInterface {
  duration: number;
  timing: TimingInterface;
  draw: DrawInterface;
  animationQueue: VoidFunction[];
}

export function animate({
  duration,
  timing,
  draw,
  animationQueue = [],
}: AnimateArgumentsInterface): void {
  if (!canUseDOM) {
    return;
  }

  let start: number;

  requestAnimationFrame(function animate(time: number): void {
    if (!start) {
      start = time;
    }
    let timeFraction = Math.min((time - start) / duration, 1);

    const progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
      return;
    }
    animationQueue.shift();
    if (animationQueue.length > 0) {
      animationQueue[0]();
    }
  });
}
