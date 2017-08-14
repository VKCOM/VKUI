const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) {
    setTimeout(callback, 1000 / 60);
  };

export default requestAnimationFrame;
