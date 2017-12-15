// Element.prototype.closest
(function () {
  if (window && !window.Element.prototype.closest) {
    window.Element.prototype.closest = function (css) {
      let node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
