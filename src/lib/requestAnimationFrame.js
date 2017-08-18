const requestAnimationFrame =
  window.requestAnimationFrame ||
  function(callback) {
    setTimeout(callback, 1000 / 60);
  };

export default requestAnimationFrame;
