export default function animate (options) {
  const start = performance.now();

  requestAnimationFrame(function animate (time) {
    let timeFraction = (time - start) / options.duration;

    if (timeFraction > 1) {
      timeFraction = 1;
    }

    var progress = options.timing(timeFraction)

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}
