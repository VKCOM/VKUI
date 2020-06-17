/* eslint-disable */
import { canUseDOM } from './dom';

export type MatchesMethod = (css: string) => boolean;

export interface OldElement extends Element {
  matchesSelector?: MatchesMethod;
  mozMatchesSelector?: MatchesMethod;
  msMatchesSelector?: MatchesMethod;
}

if (canUseDOM) {
  const ElementProto = Element.prototype;

  // Element.prototype.matches
  if (!ElementProto.matches) {
    ElementProto.matches = (ElementProto as OldElement).matchesSelector ||
      ElementProto.webkitMatchesSelector ||
      (ElementProto as OldElement).mozMatchesSelector ||
        (ElementProto as OldElement).msMatchesSelector;
  }

  // Element.prototype.closest
  if (!ElementProto.closest) {
    ElementProto.closest = function(css: string): Element | null {
      let node: Element = this;
      while (node) {
        if (node.matches(css)) {
          return node;
        } else {
          node = node.parentElement;
        }
      }
      return null;
    };
  }
}

// Array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement: any, fromIndex: number) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }
      const o = Object(this);
      const len = o.length >>> 0;
      if (len === 0) {
        return false;
      }
      const n = fromIndex | 0;
      let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
      function sameValueZero(x: any, y: any) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }
      while (k < len) {
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        k++;
      }
      return false;
    }
  });
}

// Array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(callback: Array<any>['find']) {
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
    }
  })
}
