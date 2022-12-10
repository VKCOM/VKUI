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
}

export function animate({ duration, timing, draw }: AnimateArgumentsInterface): void {
  if (!canUseDOM) {
    return;
  }

  const start = performance.now();

  requestAnimationFrame(function animate(time: number): void {
    let timeFraction = (time - start) / duration;

    if (timeFraction > 1) {
      timeFraction = 1;
    }

    const progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}
