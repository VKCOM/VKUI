/**
 * Функция для js анимации
 * @param duration
 * @param timing тайминг функция анимации
 * @param draw коллбэк, в который прокидывается прогресс [0, 1]
 */
export default function animate ({
  duration,
  timing,
  draw
}: {
duration: number;
timing: (time: number) => number;
draw: (progress: number) => void;
}) {
  if (typeof window === 'undefined') {
    return;
  }

  const start = window.performance.now();

  window.requestAnimationFrame(function animate (time) {
    let timeFraction = (time - start) / duration;

    if (timeFraction > 1) {
      timeFraction = 1;
    }

    const progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      window.requestAnimationFrame(animate);
    }
  });
}
