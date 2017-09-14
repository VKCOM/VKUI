const requestAnimationFrame = typeof window !== 'undefined' && window.requestAnimationFrame
  ? window.requestAnimationFrame
  : cb => setTimeout(cb, 1000 / 60);

export default requestAnimationFrame;
