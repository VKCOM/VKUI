if (window) {
  const ElementProto: typeof Element.prototype = (window as any).Element.prototype;

  // Element.prototype.matches
  if (!ElementProto.matches) {
    ElementProto.matches =
      (ElementProto as any).matchesSelector ||
      (ElementProto as any).webkitMatchesSelector ||
      (ElementProto as any).mozMatchesSelector ||
      (ElementProto as any).msMatchesSelector;
  }

  // Element.prototype.closest
  if (!ElementProto.closest) {
    ElementProto.closest = function (css) {
      let node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
}

// Array.prototype.find
if (!Array.prototype.find) {
  Array.prototype.find = function (callback) {
    if (this === null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    } else if (typeof callback !== 'function') {
      throw new TypeError('callback must be a function');
    }

    let list = Object(this);
    let length = list.length >>> 0;
    let thisArg = arguments[1];

    for (let i = 0; i < length; i++) {
      let element = list[i];
      if (callback.call(thisArg, element, i, list)) {
        return element;
      }
    }
  };
}
