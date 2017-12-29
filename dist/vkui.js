(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(145);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(138)();
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getClassname;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_platform_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_classnames__ = __webpack_require__(3);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_platform_js__["a" /* platform */])();

function getClassname(base) {
  var _classnames;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_classnames__["a" /* default */])(base, (_classnames = {}, _defineProperty(_classnames, base + '--ios', osname === __WEBPACK_IMPORTED_MODULE_0__lib_platform_js__["c" /* IOS */]), _defineProperty(_classnames, base + '--android', osname === __WEBPACK_IMPORTED_MODULE_0__lib_platform_js__["b" /* ANDROID */]), _classnames));
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = classNames;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function classNames() {
  var result = [];

  [].concat(Array.prototype.slice.call(arguments)).forEach(function (item) {
    if (!item) {
      return;
    }
    switch (typeof item === 'undefined' ? 'undefined' : _typeof(item)) {
      case 'string':
        result.push(item);
        break;
      case 'object':
        Object.keys(item).forEach(function (key) {
          if (item[key]) {
            result.push(key);
          }
        });
        break;
      default:
        result.push('' + item);
    }
  });

  return result.join(' ');
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeObjectKeys;
function removeObjectKeys() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var newObj = Object.assign({}, obj);

  keys.forEach(function (key) {
    return delete newObj[key];
  });

  return newObj;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ANDROID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IOS; });
/* harmony export (immutable) */ __webpack_exports__["a"] = platform;
var ANDROID = 'android';
var IOS = 'ios';

var ua = void 0;
var platformName = void 0;

function platform(useragent) {
  if (!ua) {
    ua = useragent || navigator && navigator.userAgent || '';
  }
  if (!platformName) {
    platformName = /android/i.test(ua) ? ANDROID : IOS;
  }

  return platformName;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tappable_css__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tappable_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Tappable_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Touch_Touch__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_offset__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_touch__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_requestAnimationFrame__ = __webpack_require__(8);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var ts = function ts() {
  return +Date.now();
};
var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__["a" /* default */])('Tappable');
var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_platform__["a" /* platform */])();

var ACTIVE_DELAY = 70;
var ACTIVE_EFFECT_DELAY = 600;

var storage = {};

/**
 * Очищает таймауты и хранилище для всех экземпляров компонента, кроме переданного
 *
 * @param {String} exclude ID экземпляра-исключения
 * @returns {void}
 */
function deactivateOtherInstances(exclude) {
  Object.keys(storage).filter(function (id) {
    return id !== exclude;
  }).forEach(function (id) {
    clearTimeout(storage[id].activeTimeout);
    clearTimeout(storage[id].timeout);
    storage[id].stop();

    delete storage[id];
  });
}

var Tappable = function (_Component) {
  _inherits(Tappable, _Component);

  function Tappable(props) {
    _classCallCheck(this, Tappable);

    var _this = _possibleConstructorReturn(this, (Tappable.__proto__ || Object.getPrototypeOf(Tappable)).call(this, props));

    _this.isSlide = false;

    _this.onStart = function (_ref) {
      var originalEvent = _ref.originalEvent;

      if (originalEvent.touches && originalEvent.touches.length > 1) {
        return deactivateOtherInstances();
      }

      if (osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["b" /* ANDROID */]) {
        _this.onDown(originalEvent);
      }

      storage[_this.id] = {};
      _this.getStorage().stop = _this.stop;
      _this.getStorage().activeTimeout = setTimeout(_this.start, ACTIVE_DELAY);
    };

    _this.onMove = function (e) {
      if (e.shiftXAbs > 20 || e.shiftYAbs > 20) {
        _this.isSlide = true;
        _this.stop();
      }
    };

    _this.onEnd = function (_ref2) {
      var originalEvent = _ref2.originalEvent;

      var now = ts();

      if (originalEvent.touches && originalEvent.touches.length > 0) {
        _this.isSlide = false;
        return;
      }

      if (_this.state.active) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__lib_requestAnimationFrame__["a" /* default */])(_this.callback);

        if (now - _this.state.ts >= 100) {
          // Долгий тап, выключаем подсветку
          _this.stop();
        } else {
          // Короткий тап, оставляем подсветку
          var timeout = setTimeout(_this.stop, ACTIVE_EFFECT_DELAY - now + _this.state.ts);
          var store = _this.getStorage();

          if (store) {
            store.timeout = timeout;
          }
        }
      } else if (!_this.isSlide) {
        // Очень короткий тап, включаем подсветку
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__lib_requestAnimationFrame__["a" /* default */])(_this.callback);

        _this.start();

        var _timeout = setTimeout(_this.stop, ACTIVE_EFFECT_DELAY);

        if (_this.getStorage()) {
          clearTimeout(_this.getStorage().activeTimeout);
          _this.getStorage().timeout = _timeout;
        } else {
          _this.timeout = _timeout;
        }
      }

      _this.isSlide = false;
    };

    _this.onDown = function (e) {
      var _getOffsetRect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__lib_offset__["a" /* getOffsetRect */])(_this.container),
          top = _getOffsetRect.top,
          left = _getOffsetRect.left;

      var x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__lib_touch__["b" /* coordX */])(e);
      var y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__lib_touch__["c" /* coordY */])(e);
      var key = 'wave' + Date.now().toString();

      _this.setState(function (state) {
        return {
          clicks: Object.assign({}, state.clicks, _defineProperty({}, key, {
            x: Math.round(x - left),
            y: Math.round(y - top)
          }))
        };
      });

      _this.wavesTimeout = setTimeout(function () {
        _this.setState(function (state) {
          var clicks = Object.assign({}, state.clicks);
          delete clicks[key];
          return { clicks: clicks };
        });
      }, 225);
    };

    _this.onClick = function (e) {
      if (_this.props.propagation === false) {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    _this.callback = function () {
      if (_this.props.onClick) {
        _this.props.onClick();
      }
    };

    _this.start = function () {
      if (!_this.state.active) {
        _this.setState({
          active: true,
          ts: ts()
        });
      }
      deactivateOtherInstances(_this.id);
    };

    _this.stop = function () {
      if (_this.state.active) {
        _this.setState({
          active: false,
          ts: null
        });
      }
      if (_this.getStorage()) {
        clearTimeout(_this.getStorage().activeTimeout);
        delete storage[_this.id];
      }
    };

    _this.getStorage = function () {
      return storage[_this.id];
    };

    _this.getContainer = function (container) {
      if (container) {
        _this.container = container.container || container;
      }
      return;
    };

    _this.id = Math.round(Math.random() * 1e8).toString(16);
    _this.state = {
      clicks: {},
      active: false,
      ts: null
    };
    return _this;
  }

  /**
   * Обрабатывает событие touchstart
   *
   * @returns {void}
   */


  /**
   * Обрабатывает событие touchmove
   *
   * @returns {void}
   */


  /**
   * Обрабатывает событие touchdown
   *
   * @returns {void}
   */


  /**
   * Реализует эффект при тапе для Андроида
   *
   * @returns {void}
   */


  /**
   * Вызывает колбек, переданный родителем
   *
   * @returns {void}
   */


  /**
   * Устанавливает активное выделение
   *
   * @returns {void}
   */


  /**
   * Снимает активное выделение
   *
   * @returns {void}
   */


  /**
   * Возвращает хранилище для экземпляра компонента
   *
   * @returns {Object} Хранилище для текущего экземпляра компонента
   */


  /**
   * Берет ref на DOM-ноду из экземпляра Touch
   *
   * @param {React.Component} container Touch component instance
   * @returns {void}
   */


  _createClass(Tappable, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (storage[this.id]) {
        clearTimeout(storage[this.id].timeout);
        clearTimeout(storage[this.id].activeTimeout);

        delete storage[this.id];
      }

      clearTimeout(this.wavesTimeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          clicks = _state.clicks,
          active = _state.active;

      var Component = this.props.onClick ? __WEBPACK_IMPORTED_MODULE_3__Touch_Touch__["a" /* default */] : this.props.component;
      var classes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_classnames__["a" /* default */])(baseClassNames, this.props.className, {
        'Tappable--active': active,
        'Tappable--inactive': !active
      });

      var props = {};

      if (this.props.onClick) {
        props.component = this.props.component;
        props.onStart = this.onStart;
        props.onMove = this.onMove;
        props.onEnd = this.onEnd;
        props.ref = this.getContainer;
      }

      var nativeProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_removeObjectKeys__["a" /* default */])(Object.assign({}, this.props), ['onClick', 'children', 'className', 'propagation', 'component']);

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        Component,
        _extends({ className: classes }, props, nativeProps, { onClick: this.onClick }),
        osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["b" /* ANDROID */] && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          { className: 'Tappable__waves', ref: this.getContainer },
          Object.keys(clicks).map(function (k) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', { className: 'Tappable__wave', style: { top: clicks[k].y, left: clicks[k].x }, key: k });
          })
        ),
        this.props.children
      );
    }
  }]);

  return Tappable;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Tappable.defaultProps = {
  component: 'div',
  role: 'button',
  propagation: true
};
/* harmony default export */ __webpack_exports__["a"] = (Tappable);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var requestAnimationFrame = typeof window !== 'undefined' && window.requestAnimationFrame ? window.requestAnimationFrame : function (cb) {
  return setTimeout(cb, 1000 / 60);
};

/* harmony default export */ __webpack_exports__["a"] = (requestAnimationFrame);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(11);

var ReactCurrentOwner = __webpack_require__(37);

var warning = __webpack_require__(13);
var canDefineProperty = __webpack_require__(40);
var hasOwnProperty = Object.prototype.hasOwnProperty;

var REACT_ELEMENT_TYPE = __webpack_require__(38);

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown, specialPropRefWarningShown;

function hasValidRef(config) {
  if (false) {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  if (false) {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
       false ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
       false ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  if (false) {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    if (canDefineProperty) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */
ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (false) {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if (false) {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
};

/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */
ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
};

module.exports = ReactElement;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_touch__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var events = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_touch__["a" /* getSupportedEvents */])();

// amazing hack for preventing vertical scroll during horizontal swipe
// (in View, Slider, Gallery). todo: requires investigation
window.addEventListener('touchmove', function () {});

var Touch = function (_Component) {
  _inherits(Touch, _Component);

  function Touch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Touch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Touch.__proto__ || Object.getPrototypeOf(Touch)).call.apply(_ref, [this].concat(args))), _this), _this.cancelClick = false, _this.gesture = {}, _this.onStart = function (e) {
      _this.gesture = {
        startX: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_touch__["b" /* coordX */])(e),
        startY: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_touch__["c" /* coordY */])(e),
        startT: new Date(),
        isPressed: true
      };

      // Вызываем нужные колбеки из props
      var outputEvent = Object.assign({}, _this.gesture, {
        originalEvent: e
      });

      if (_this.props.onStart) {
        _this.props.onStart(outputEvent);
      }

      if (_this.props.onStartX) {
        _this.props.onStartX(outputEvent);
      }

      if (_this.props.onStartY) {
        _this.props.onStartY(outputEvent);
      }

      document.body.addEventListener(events[1], _this.onMove, { capture: _this.props.useCapture, passive: false });
      document.body.addEventListener(events[2], _this.onEnd, { capture: _this.props.useCapture, passive: false });
      document.body.addEventListener(events[3], _this.onEnd, { capture: _this.props.useCapture, passive: false });
    }, _this.onMove = function (e) {
      var _this$gesture = _this.gesture,
          isPressed = _this$gesture.isPressed,
          isX = _this$gesture.isX,
          isY = _this$gesture.isY,
          startX = _this$gesture.startX,
          startY = _this$gesture.startY;


      if (isPressed) {
        // смещения
        var shiftX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_touch__["b" /* coordX */])(e) - startX;
        var shiftY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_touch__["c" /* coordY */])(e) - startY;

        // абсолютные значения смещений
        var shiftXAbs = Math.abs(shiftX);
        var shiftYAbs = Math.abs(shiftY);

        // Если определяем мультитач, то прерываем жест
        if (!!e.touches && e.touches.length > 1) {
          return _this.onEnd(e);
        }

        // если мы ещё не определились
        if (!isX && !isY) {
          var willBeX = shiftXAbs >= 5 && shiftXAbs > shiftYAbs;
          var willBeY = shiftYAbs >= 5 && shiftYAbs > shiftXAbs;
          var willBeSlidedX = willBeX && !!_this.props.onMoveX || !!_this.props.onMove;
          var willBeSlidedY = willBeY && !!_this.props.onMoveY || !!_this.props.onMove;

          _this.gesture.isY = willBeY;
          _this.gesture.isX = willBeX;
          _this.gesture.isSlideX = willBeSlidedX;
          _this.gesture.isSlideY = willBeSlidedY;
          _this.gesture.isSlide = willBeSlidedX || willBeSlidedY;
        }

        if (_this.gesture.isSlide) {
          _this.gesture.shiftX = shiftX;
          _this.gesture.shiftY = shiftY;
          _this.gesture.shiftXAbs = shiftXAbs;
          _this.gesture.shiftYAbs = shiftYAbs;

          // Вызываем нужные колбеки из props
          var outputEvent = Object.assign({}, _this.gesture, {
            originalEvent: e
          });

          if (_this.props.onMove) {
            _this.props.onMove(outputEvent);
          }

          if (_this.gesture.isSlideX && _this.props.onMoveX) {
            _this.props.onMoveX(outputEvent);
          }

          if (_this.gesture.isSlideY && _this.props.onMoveY) {
            _this.props.onMoveY(outputEvent);
          }
        }
      }
    }, _this.onEnd = function (e) {
      var _this$gesture2 = _this.gesture,
          isPressed = _this$gesture2.isPressed,
          isSlide = _this$gesture2.isSlide,
          isSlideX = _this$gesture2.isSlideX,
          isSlideY = _this$gesture2.isSlideY;


      if (isPressed) {
        // Вызываем нужные колбеки из props
        var outputEvent = Object.assign({}, _this.gesture, {
          originalEvent: e
        });

        if (_this.props.onEnd) {
          _this.props.onEnd(outputEvent);
        }

        if (isSlideY && _this.props.onEndY) {
          _this.props.onEndY(outputEvent);
        }

        if (isSlideX && _this.props.onEndX) {
          _this.props.onEndX(outputEvent);
        }
      }

      // Если закончили жест на ссылке, выставляем флаг для отмены перехода
      _this.cancelClick = e.target.tagName === 'A' && isSlide;
      _this.gesture = {};

      document.body.removeEventListener(events[1], _this.onMove, { capture: _this.props.useCapture, passive: false });
      document.body.removeEventListener(events[2], _this.onEnd, { capture: _this.props.useCapture, passive: false });
      document.body.removeEventListener(events[3], _this.onEnd, { capture: _this.props.useCapture, passive: false });
    }, _this.onDragStart = function (e) {
      if (e.target.tagName === 'A' || e.target.tagName === 'IMG') {
        return e.preventDefault();
      } else return;
    }, _this.onClick = function (e) {
      if (_this.cancelClick) {
        _this.cancelClick = false;

        return e.preventDefault();
      }
    }, _this.getRef = function (container) {
      _this.container = container;
      return;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Touch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.container.addEventListener(events[0], this.onStart, { capture: this.props.useCapture, passive: false });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.container.removeEventListener(events[0], this.onStart, { capture: this.props.useCapture, passive: false });
    }

    /**
     * Обработчик событий touchstart
     *
     * @param {Object} e Браузерное событие
     * @param {Object} props Component props
     * @returns {void}
     */


    /**
     * Обработчик событий touchmove
     *
     * @param {Object} e Браузерное событие
     * @param {Object} props Component props
     * @returns {void}
     */


    /**
     * Обработчик событий touchend, touchcancel
     *
     * @param {Object} e Браузерное событие
     * @param {Object} props Component props
     * @returns {void}
     */


    /**
     * Обработчик событий dragstart
     * Отменяет нативное браузерное поведение для вложенных ссылок и изображений
     *
     * @param {Object} e Браузерное событие
     * @returns {void}
     */


    /**
     * Обработчик клика по компоненту
     * Отменяет переход по вложенной ссылке, если был зафиксирован свайп
     *
     * @param {Object} e Браузерное событие
     * @returns {void}
     */

  }, {
    key: 'render',
    value: function render() {
      var handlers = {
        onDragStart: this.onDragStart,
        onClick: this.onClick
      };
      var ComponentName = this.props.component;
      var nativeProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__["a" /* default */])(Object.assign({}, this.props), ['onStart', 'onStartX', 'onStartY', 'onMove', 'onMoveX', 'onMoveY', 'onEnd', 'onEndX', 'onEndY', 'useCapture', 'component']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        ComponentName,
        _extends({}, handlers, nativeProps, { ref: this.getRef }),
        this.props.children
      );
    }
  }]);

  return Touch;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Touch.defaultProps = {
  component: 'div',
  children: '',
  useCapture: true
};
/* harmony default export */ __webpack_exports__["a"] = (Touch);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(12);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (false) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(113);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

module.exports = reactProdInvariant;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tappable_Tappable__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__["a" /* default */])('ActionSheet-Item');

var ActionSheetItem = function (_React$Component) {
  _inherits(ActionSheetItem, _React$Component);

  function ActionSheetItem() {
    _classCallCheck(this, ActionSheetItem);

    return _possibleConstructorReturn(this, (ActionSheetItem.__proto__ || Object.getPrototypeOf(ActionSheetItem)).apply(this, arguments));
  }

  _createClass(ActionSheetItem, [{
    key: 'render',
    value: function render() {
      var classNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_classnames__["a" /* default */])(baseClassNames, _defineProperty({}, 'ActionSheet-Item--' + this.props.theme, this.props.theme));
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__Tappable_Tappable__["a" /* default */],
        {
          onClick: this.props.onClick,
          className: classNames,
          style: this.props.style
        },
        this.props.children
      );
    }
  }]);

  return ActionSheetItem;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ActionSheetItem.defaultProps = {
  theme: 'default'
};
/* harmony default export */ __webpack_exports__["a"] = (ActionSheetItem);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PopoutWrapper_css__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PopoutWrapper_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__PopoutWrapper_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_platform__ = __webpack_require__(5);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_platform__["a" /* platform */])();

var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_getClassName__["a" /* default */])('PopoutWrapper');

var PopoutWrapper = function (_React$Component) {
  _inherits(PopoutWrapper, _React$Component);

  function PopoutWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PopoutWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PopoutWrapper.__proto__ || Object.getPrototypeOf(PopoutWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      opened: false
    }, _this.preventTouch = function (e) {
      return e.preventDefault();
    }, _this.onClick = function (e) {
      if (_this.state.opened) {
        _this.props.onClick && _this.props.onClick(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PopoutWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // TODO add "animationend" event instead of setTimeout
      window.addEventListener('touchmove', this.preventTouch);
      setTimeout(function () {
        return _this2.setState({ opened: true });
      }, osname === __WEBPACK_IMPORTED_MODULE_6__lib_platform__["b" /* ANDROID */] ? 200 : 300);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('touchmove', this.preventTouch);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var containerClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_classnames__["a" /* default */])('PopoutWrapper__container', (_classnames = {}, _defineProperty(_classnames, 'PopoutWrapper__container--v-' + this.props.v, true), _defineProperty(_classnames, 'PopoutWrapper__container--h-' + this.props.h, true), _classnames));

      var classNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_classnames__["a" /* default */])(baseClassNames, {
        'PopoutWrapper--closing': this.props.closing
      });

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        _extends({ className: classNames, onClick: this.onClick }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__["a" /* default */])(this.props, ['hasMask', 'v', 'h', 'closing', 'style', 'onClick'])),
        this.props.hasMask && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'PopoutWrapper__mask' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: containerClassNames, style: this.props.style },
          this.props.children
        )
      );
    }
  }]);

  return PopoutWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

PopoutWrapper.defaultProps = {
  hasMask: true,
  v: 'center',
  h: 'center',
  closing: false
};
/* harmony default export */ __webpack_exports__["a"] = (PopoutWrapper);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var supported = void 0,
    prefix = void 0;

if (typeof document !== 'undefined' && document.createElement) {
  var d = document.createElement('div');

  for (var i in d.style) {
    var m = i.match(/^(moz|webkit|ms|)(transition|animation)$/i);
    if (m) supported = true;
    if (m && m[1]) prefix = m[1];
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({ supported: supported, prefix: prefix });

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(124);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PopoutWrapper_PopoutWrapper__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ActionSheet_css__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ActionSheet_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ActionSheet_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_transitionEvents__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ActionSheetItem_ActionSheetItem__ = __webpack_require__(16);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_platform__["a" /* platform */])();

var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__["a" /* default */])('ActionSheet');

var ActionSheet = function (_React$Component) {
  _inherits(ActionSheet, _React$Component);

  function ActionSheet() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ActionSheet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      closing: false
    }, _this.onClose = function () {
      _this.setState({ closing: true });
      _this.waitTransitionFinish(_this.props.onClose);
    }, _this.onItemClick = function (handler, autoclose) {
      return function () {
        if (autoclose) {
          _this.setState({ closing: true });
          _this.waitTransitionFinish(function () {
            autoclose && _this.props.onClose();
            handler();
          });
        } else {
          handler();
        }
      };
    }, _this.stopPropagation = function (e) {
      return e.stopPropagation();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ActionSheet, [{
    key: 'waitTransitionFinish',
    value: function waitTransitionFinish(eventHandler) {
      if (__WEBPACK_IMPORTED_MODULE_7__lib_transitionEvents__["a" /* default */].supported) {
        var eventName = __WEBPACK_IMPORTED_MODULE_7__lib_transitionEvents__["a" /* default */].prefix ? __WEBPACK_IMPORTED_MODULE_7__lib_transitionEvents__["a" /* default */].prefix + 'TransitionEnd' : 'transitionend';

        this.el.removeEventListener(eventName, eventHandler);
        this.el.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), osname === __WEBPACK_IMPORTED_MODULE_6__lib_platform__["b" /* ANDROID */] ? 200 : 300);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = this.props.style;

      var children = [];
      var hasHeader = osname === __WEBPACK_IMPORTED_MODULE_6__lib_platform__["c" /* IOS */] && (this.props.title || this.props.text);
      var classNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_classnames__["a" /* default */])(baseClassNames, {
        'ActionSheet--closing': this.state.closing
      });

      var Actions = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.toArray(this.props.children).filter(function (Child) {
        return Child.props.theme !== 'cancel';
      });

      Actions.forEach(function (Child, index) {
        children.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(Child, {
          onClick: _this2.onItemClick(Child.props.onClick, Child.props.autoclose)
        }));
        if (osname === __WEBPACK_IMPORTED_MODULE_6__lib_platform__["c" /* IOS */] && index < Actions.length - 1) children.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: 'separator-' + index, className: 'ActionSheet__separator' }));
      });

      var CancelItem = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.toArray(this.props.children).find(function (Child) {
        return Child.props.theme === 'cancel';
      }) || __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8__ActionSheetItem_ActionSheetItem__["a" /* default */],
        { onClick: this.props.onClose, theme: 'cancel' },
        '\u041E\u0442\u043C\u0435\u043D\u0430'
      );

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__PopoutWrapper_PopoutWrapper__["a" /* default */],
        {
          closing: this.state.closing,
          v: osname === __WEBPACK_IMPORTED_MODULE_6__lib_platform__["c" /* IOS */] ? 'bottom' : 'center',
          h: 'center',
          onClick: this.onClose
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: classNames, style: style, ref: function ref(el) {
              _this2.el = el;
            }, onClick: this.stopPropagation },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'ActionSheet__section' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'ActionSheet__list' },
              hasHeader && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'ActionSheet__header' },
                this.props.title && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'ActionSheet__title' },
                  this.props.title
                ),
                this.props.text && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'ActionSheet__text' },
                  this.props.text
                )
              ),
              hasHeader && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'ActionSheet__separator' }),
              children
            )
          ),
          osname === __WEBPACK_IMPORTED_MODULE_6__lib_platform__["c" /* IOS */] && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'ActionSheet__section' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(CancelItem, {
              onClick: this.onItemClick(CancelItem.props.onClick, true)
            })
          )
        )
      );
    }
  }]);

  return ActionSheet;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ActionSheet);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Alert_css__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Alert_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Alert_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tappable_Tappable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PopoutWrapper_PopoutWrapper__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_classnames__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__["a" /* default */])('Alert');

var Alert = function (_Component) {
  _inherits(Alert, _Component);

  function Alert() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Alert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Alert.__proto__ || Object.getPrototypeOf(Alert)).call.apply(_ref, [this].concat(args))), _this), _this.onItemClick = function (item) {
      return function () {
        item.autoclose && _this.props.onClose();
        item.action();
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alert, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          actions = _props.actions,
          actionsLayout = _props.actionsLayout;

      var modifiers = {
        'Alert--v': actionsLayout === 'vertical',
        'Alert--h': actionsLayout === 'horizontal'
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__PopoutWrapper_PopoutWrapper__["a" /* default */],
        null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_classnames__["a" /* default */])(baseClassNames, modifiers), style: style },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'Alert__content' },
            this.props.children
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'footer',
            { className: 'Alert__footer' },
            actions.map(function (button, i) {
              return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3__Tappable_Tappable__["a" /* default */],
                {
                  component: 'button',
                  className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_classnames__["a" /* default */])('Alert__btn', _defineProperty({}, 'Alert__btn--' + button.style, true)),
                  onClick: _this2.onItemClick(button),
                  key: 'alert-action-' + i
                },
                button.title
              );
            })
          )
        )
      );
    }
  }]);

  return Alert;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Alert.defaultProps = {
  style: {},
  children: '',
  actionsLayout: 'horizontal'
};
/* harmony default export */ __webpack_exports__["a"] = (Alert);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_css__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Button_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Tappable_Tappable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_getClassName__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpers_getClassName__["a" /* default */])('Button');

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          children = _props.children,
          alignment = _props.alignment,
          appearance = _props.appearance,
          wide = _props.wide,
          className = _props.className,
          component = _props.component;

      var modifiers = {
        'Button--left': alignment === 'left',
        'Button--center': alignment === 'center',
        'Button--right': alignment === 'right',
        'Button--primary': appearance === 'primary',
        'Button--default': appearance === 'default',
        'Button--danger': appearance === 'danger',
        'Button--vk-wide': appearance === 'vk-wide',
        'Button--vk-wide-primary': appearance === 'vk-wide-primary',
        'Button--vk-rich': appearance === 'vk-rich',
        'Button--vk-primary': appearance === 'vk-primary',
        'Button--vk-secondary': appearance === 'vk-secondary',
        'Button--vk-tertiary': appearance === 'vk-tertiary',
        'Button--wide': wide
      };
      var nativeProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__["a" /* default */])(this.props, ['alignment', 'appearance', 'wide', 'className', 'component']);

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__Tappable_Tappable__["a" /* default */],
        _extends({
          component: component,
          className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])(baseClassNames, className, modifiers),
          style: style
        }, nativeProps),
        children
      );
    }
  }]);

  return Button;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Button.defaultProps = {
  style: {},
  alignment: 'left',
  appearance: 'default',
  type: 'default',
  wide: true,
  children: '',
  component: 'button'
};
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormLayout_css__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormLayout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FormLayout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_classnames__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__["a" /* default */])('FormLayout');

var FormLayout = function (_React$Component) {
  _inherits(FormLayout, _React$Component);

  function FormLayout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormLayout.__proto__ || Object.getPrototypeOf(FormLayout)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (e) {
      if (!_this.props.allowSubmit) {
        e.preventDefault();
      } else {
        _this.props.onSubmit && _this.props.onSubmit(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormLayout, [{
    key: 'render',
    value: function render() {
      var children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
      var TagName = this.props.tagName || 'form';
      var modifiers = {
        'FormLayout--web': this.props.mod === 'web'
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        TagName,
        _extends({ className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_classnames__["a" /* default */])(baseClassNames, modifiers) }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__["a" /* default */])(this.props, ['tagName', 'mod', 'allowSubmit', 'onSubmit']), { onSubmit: this.onSubmit }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'FormLayout__container' },
          children.map(function (field, i) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'label',
              { className: 'FormLayout__row', key: field.key || 'row-' + i },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'FormLayout__separator' }),
              !!field.props.label && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: 'FormLayout__label' },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  { className: 'FormLayout__label-in' },
                  field.props.label
                )
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: 'FormLayout__field' },
                field,
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'FormLayout__underline' })
              )
            );
          })
        ),
        TagName === 'form' && this.props.allowSubmit && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'submit', style: { position: 'absolute', visibility: 'hidden' } })
      );
    }
  }]);

  return FormLayout;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

FormLayout.defaultProps = {
  allowSubmit: true
};
/* harmony default export */ __webpack_exports__["a"] = (FormLayout);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Input_css__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Input_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Input_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_requestAnimationFrame__ = __webpack_require__(8);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__["a" /* default */])('Input');

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.onChange = function (e) {
      if (!_this.isControlledOutside) {
        _this.setState({ value: e.target.value });
      }
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.getRef = function (element) {
      _this.element = element;
    };

    var state = {
      customPlaceholder: ['date', 'datetime-local', 'time', 'month'].indexOf(_this.props.type) >= 0 && typeof _this.props.placeholder !== 'undefined' && _this.props.placeholder
    };

    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
    } else {
      state.value = props.initialValue || '';
    }

    _this.state = state;
    return _this;
  }

  _createClass(Input, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.value && this.props.value === '') {
        // Fix iOS extra indent on removing content
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_requestAnimationFrame__["a" /* default */])(function () {
          _this2.element.value = '';
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          alignment = _props.alignment,
          value = _props.value;

      var modifiers = {
        'Input--left': alignment === 'left',
        'Input--center': alignment === 'center',
        'Input--right': alignment === 'right'
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_classnames__["a" /* default */])(baseClassNames, modifiers) },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', _extends({
          className: 'Input__control'
        }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__["a" /* default */])(this.props, ['onChange', 'initialValue', 'alignment']), {
          ref: this.getRef,
          value: this.isControlledOutside ? value : this.state.value,
          onChange: this.onChange
        })),
        this.state.customPlaceholder && !this.state.value && !this.props.value && this.context.isWebView && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'label',
          { className: 'Input__placeholder', htmlFor: '' },
          this.state.customPlaceholder
        )
      );
    }
  }]);

  return Input;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Input.contextTypes = {
  isWebView: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
};
Input.defaultProps = {
  type: 'text',
  initialValue: '',
  alignment: 'left'
};
/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Spinner_css__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Spinner_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Spinner_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_classnames_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AndroidSpinner__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__IosSpinner__ = __webpack_require__(71);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_platform__["a" /* platform */])();
var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__["a" /* default */])('Spinner');

var Spinner = function (_Component) {
  _inherits(Spinner, _Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          on = _props.on,
          progress = _props.progress,
          size = _props.size,
          style = _props.style;

      var isAnimated = on && progress === null;
      var modifiers = {
        'Spinner--on': isAnimated
      };

      var Component = osname === __WEBPACK_IMPORTED_MODULE_4__lib_platform__["c" /* IOS */] ? __WEBPACK_IMPORTED_MODULE_7__IosSpinner__["a" /* default */] : __WEBPACK_IMPORTED_MODULE_6__AndroidSpinner__["a" /* default */];

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_classnames_js__["a" /* default */])(baseClassNames, modifiers), style: style },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'svg',
          {
            className: 'Spinner__self',
            style: { width: size, height: size },
            viewBox: '0 0 ' + size + ' ' + size,
            xmlns: 'http://www.w3.org/2000/svg'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, this.props)
        )
      );
    }
  }]);

  return Spinner;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Spinner.defaultProps = {
  color: osname === __WEBPACK_IMPORTED_MODULE_4__lib_platform__["b" /* ANDROID */] ? '#5181b8' : '#262626',
  androidStrokeWidth: 4,
  size: osname === __WEBPACK_IMPORTED_MODULE_4__lib_platform__["b" /* ANDROID */] ? 38 : 20,
  animated: true,
  on: true,
  progress: null
};
/* harmony default export */ __webpack_exports__["a"] = (Spinner);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = keyframes;
function keyframes(name, obj) {
  if (!name || !obj) {
    return '';
  }

  var selectors = Object.keys(obj).map(function (key) {
    return key + ' {' + Object.keys(obj[key]).map(function (k) {
      return k + ':' + obj[key][k];
    }).join(';') + '}';
  }).join('');

  return '@-webkit-keyframes ' + name + ' {' + selectors + '} @keyframes ' + name + ' {' + selectors + '}';
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getOffsetRect;
function getOffsetRect(elem) {
  var box = elem.getBoundingClientRect();
  var body = document.body;
  var doc = document.documentElement;
  var scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || doc.scrollLeft || body.scrollLeft;
  var clientTop = doc.clientTop || body.clientTop || 0;
  var clientLeft = doc.clientLeft || body.clientLeft || 0;

  return {
    top: Math.round(box.top + scrollTop - clientTop),
    left: Math.round(box.left + scrollLeft - clientLeft),
    width: elem.offsetWidth,
    height: elem.offsetHeight
  };
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isWebView; });
var isWebView = !!(window && (window.AndroidBridge || window.webkit && window.webkit.messageHandlers));

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSupportedEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return coordX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return coordY; });

/**
 * Получает кординату по оси абсцисс из touch- или mouse-события
 *
 * @param {Object} e Бразуерное событие
 * @returns {Number} Координата взаимодействия по оси абсцисс
 */
var coordX = function coordX(e) {
  return e.clientX || e.touches && e.touches[0].clientX;
};

/**
 * Получает кординату по оси ординат из touch- или mouse-события
 *
 * @param {Object} e Бразуерное событие
 * @returns {Number} Координата взаимодействия по оси ординат
 */
var coordY = function coordY(e) {
  return e.clientY || e.touches && e.touches[0].clientY;
};

/**
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 *
 * @returns {Array} Массив с названиями событий
 */
function getSupportedEvents() {
  var isClient = typeof window !== 'undefined';
  var touchEnabled = isClient && 'ontouchstart' in window;

  if (touchEnabled) {
    return ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
  }

  return ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
}



/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(19),
    getRawTag = __webpack_require__(120),
    objectToString = __webpack_require__(122);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _isPlainObject = __webpack_require__(132);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _prefix = __webpack_require__(141);

var _prefix2 = _interopRequireDefault(_prefix);

var _supports = __webpack_require__(142);

var _supports2 = _interopRequireDefault(_supports);

var _constants = __webpack_require__(140);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var toKebabCase = function toKebabCase(string) {
  return string.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase();
  });
};

/**
 * create a new style object with prefixes applied
 *
 * @param {Object} object
 * @returns {Object}
 */
var applyPrefixes = function applyPrefixes(object) {
  if (!(0, _isPlainObject2.default)(object)) {
    return object;
  }

  var value = void 0;

  return Object.keys(object).reduce(function (styleObject, originalKey) {
    var key = originalKey;

    value = object[key];

    if ((0, _isPlainObject2.default)(value)) {
      return _extends({}, styleObject, _defineProperty({}, key, applyPrefixes(value)));
    }

    if (_constants.CSS_PROPERTIES.indexOf(key) !== -1 && !(0, _supports2.default)(toKebabCase(key))) {
      key = '' + _prefix2.default.js + key.charAt(0).toUpperCase() + key.slice(1);
    }

    if (originalKey === 'display' && object[originalKey] === 'flex' && !(0, _supports2.default)('display', 'flex')) {
      return _extends({}, styleObject, _defineProperty({}, key, _prefix2.default.js === 'ms' ? '-ms-flexbox' : _prefix2.default.css + 'flex'));
    }

    if (originalKey === 'transition') {
      var animatableValuesObject = _constants.ANIMATABLE_VALUES.reduce(function (animatableValues, animatableValue) {
        var kebabValue = toKebabCase(animatableValue);
        var re = new RegExp(kebabValue, 'g');

        if (re.test(object[originalKey]) && !(0, _supports2.default)(kebabValue)) {
          var cleanValue = object[originalKey].replace(re, '' + _prefix2.default.css + kebabValue);

          return _extends({}, animatableValues, _defineProperty({}, key, cleanValue));
        }

        return animatableValues;
      }, {});

      return _extends({}, styleObject, animatableValuesObject);
    }

    return _extends({}, styleObject, _defineProperty({}, key, value));
  }, {});
};

exports.default = applyPrefixes;
module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _prodInvariant = __webpack_require__(15),
    _assign = __webpack_require__(11);

var ReactNoopUpdateQueue = __webpack_require__(39);

var canDefineProperty = __webpack_require__(40);
var emptyObject = __webpack_require__(30);
var invariant = __webpack_require__(6);
var lowPriorityWarning = __webpack_require__(152);

/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ?  false ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');
  }
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');
  }
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
if (false) {
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    if (canDefineProperty) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function () {
          lowPriorityWarning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
          return undefined;
        }
      });
    }
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

/**
 * Base class helpers for the updating state of a component.
 */
function ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent.prototype;
ReactPureComponent.prototype = new ComponentDummy();
ReactPureComponent.prototype.constructor = ReactPureComponent;
// Avoid an extra prototype jump for these methods.
_assign(ReactPureComponent.prototype, ReactComponent.prototype);
ReactPureComponent.prototype.isPureReactComponent = true;

module.exports = {
  Component: ReactComponent,
  PureComponent: ReactPureComponent
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

module.exports = ReactCurrentOwner;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

module.exports = REACT_ELEMENT_TYPE;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var warning = __webpack_require__(13);

function warnNoop(publicInstance, callerName) {
  if (false) {
    var constructor = publicInstance.constructor;
    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback) {},

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    warnNoop(publicInstance, 'setState');
  }
};

module.exports = ReactNoopUpdateQueue;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var canDefineProperty = false;
if (false) {
  try {
    // $FlowFixMe https://github.com/facebook/flow/issues/285
    Object.defineProperty({}, 'x', { get: function () {} });
    canDefineProperty = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

module.exports = canDefineProperty;

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AlertInput_css__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AlertInput_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__AlertInput_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FormLayout_FormLayout__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Input_Input__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__IosAlertInput__ = __webpack_require__(69);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_platform__["a" /* platform */])();
var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__["a" /* default */])('AlertInput');

var AlertInput = function (_Component) {
  _inherits(AlertInput, _Component);

  function AlertInput() {
    _classCallCheck(this, AlertInput);

    return _possibleConstructorReturn(this, (AlertInput.__proto__ || Object.getPrototypeOf(AlertInput)).apply(this, arguments));
  }

  _createClass(AlertInput, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;


      if (osname === __WEBPACK_IMPORTED_MODULE_3__lib_platform__["b" /* ANDROID */]) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_classnames__["a" /* default */])(baseClassNames, className) },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7__FormLayout_FormLayout__["a" /* default */],
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Input_Input__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_removeObjectKeys__["a" /* default */])(this.props, ['className']))
          )
        );
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__IosAlertInput__["a" /* default */], _extends({
        className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_classnames__["a" /* default */])(baseClassNames, className)
      }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_removeObjectKeys__["a" /* default */])(this.props, ['className'])));
    }
  }]);

  return AlertInput;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (AlertInput);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BackButton_css__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BackButton_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__BackButton_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_platform__ = __webpack_require__(5);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_platform__["a" /* platform */])();
var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__["a" /* default */])('BackButton');

var BackButton = function (_Component) {
  _inherits(BackButton, _Component);

  function BackButton() {
    _classCallCheck(this, BackButton);

    return _possibleConstructorReturn(this, (BackButton.__proto__ || Object.getPrototypeOf(BackButton)).apply(this, arguments));
  }

  _createClass(BackButton, [{
    key: 'render',
    value: function render() {
      var isAndroid = osname === __WEBPACK_IMPORTED_MODULE_4__lib_platform__["b" /* ANDROID */];
      var width = isAndroid ? 16 : 13;
      var height = isAndroid ? 16 : 21;
      var svgProps = {
        width: width,
        height: height,
        viewBox: '0 0 ' + width + ' ' + height,
        xmlns: 'http://www.w3.org/2000/svg'
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        _extends({}, this.props, { className: baseClassNames }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'svg',
          svgProps,
          isAndroid ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { fill: 'currentColor', d: 'M16 9h-12.2l5.6 5.6-1.4 1.4-8-8 8-8 1.4 1.4-5.6 5.6h12.2z' }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { fill: 'currentColor', d: 'M0 10.5l10.5-10.5 2 2-8.5 8.5 8.5 8.5-2 2z' })
        )
      );
    }
  }]);

  return BackButton;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (BackButton);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Checkbox_css__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Checkbox_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Checkbox_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('Checkbox');

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.changeHandler = function (e) {
      _this.setState({ checked: e.target.checked });
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.state = {
      checked: !!props.checked
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      var style = this.props.style;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'label',
        { className: baseClassNames, style: style },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__["a" /* default */])(this.props, ['onChange']), {
          type: 'checkbox',
          className: 'Checkbox__self',
          checked: this.state.checked,
          onChange: this.changeHandler
        })),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', { className: 'Checkbox__pseudo' })
      );
    }
  }]);

  return Checkbox;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Checkbox.defaultProps = {
  style: {},
  checked: false,
  onChange: function onChange() {}
};
/* harmony default export */ __webpack_exports__["a"] = (Checkbox);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CloseButton_css__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CloseButton_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__CloseButton_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_classnames__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_platform__["a" /* platform */])();

var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('CloseButton');

var CloseButton = function (_Component) {
  _inherits(CloseButton, _Component);

  function CloseButton() {
    _classCallCheck(this, CloseButton);

    return _possibleConstructorReturn(this, (CloseButton.__proto__ || Object.getPrototypeOf(CloseButton)).apply(this, arguments));
  }

  _createClass(CloseButton, [{
    key: 'render',
    value: function render() {
      var width = 14;
      var height = 14;
      var svgProps = {
        width: width,
        height: height,
        viewBox: '0 0 ' + width + ' ' + height,
        xmlns: 'http://www.w3.org/2000/svg'
      };
      var className = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_classnames__["a" /* default */])(baseClassNames, this.props.className);

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_removeObjectKeys__["a" /* default */])(this.props, ['className']), { className: className }),
        osname === __WEBPACK_IMPORTED_MODULE_3__lib_platform__["b" /* ANDROID */] && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'svg',
          svgProps,
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { fill: '#fff', d: 'M14 1.4l-1.4-1.4-5.6 5.6-5.6-5.6-1.4 1.4 5.6 5.6-5.6 5.6 1.4 1.4 5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z' })
        ),
        osname === __WEBPACK_IMPORTED_MODULE_3__lib_platform__["c" /* IOS */] && this.props.children
      );
    }
  }]);

  return CloseButton;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CloseButton);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_webview__ = __webpack_require__(28);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ConfigProvider = function (_React$Component) {
  _inherits(ConfigProvider, _React$Component);

  function ConfigProvider() {
    _classCallCheck(this, ConfigProvider);

    return _possibleConstructorReturn(this, (ConfigProvider.__proto__ || Object.getPrototypeOf(ConfigProvider)).apply(this, arguments));
  }

  _createClass(ConfigProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var insets = Object.assign({}, this.props.insets, { bottom: this.props.insets.bottom > 100 ? 0 : this.props.insets.bottom });
      return {
        insets: insets,
        isWebView: this.props.isWebView
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return ConfigProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ConfigProvider.childContextTypes = {
  insets: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    top: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    right: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    bottom: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    left: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
  }),
  isWebView: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
ConfigProvider.defaultProps = {
  insets: {},
  isWebView: __WEBPACK_IMPORTED_MODULE_2__lib_webview__["a" /* isWebView */]
};
/* harmony default export */ __webpack_exports__["a"] = (ConfigProvider);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Div;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Div_css__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Div_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Div_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_removeObjectKeys__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };









var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_platform__["a" /* platform */])();
var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__["a" /* default */])('Div');

function Div(props) {
  var modifiers = {
    'Div--shadow': osname === __WEBPACK_IMPORTED_MODULE_3__lib_platform__["b" /* ANDROID */] && props.androidShadow,
    'Div--border': osname === __WEBPACK_IMPORTED_MODULE_3__lib_platform__["c" /* IOS */] && props.iosBorder
  };

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    _extends({
      className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_classnames__["a" /* default */])(baseClassNames, modifiers, props.className),
      style: props.style
    }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_removeObjectKeys__["a" /* default */])(props, ['className', 'style', 'iosBorder', 'androidShadow'])),
    props.children
  );
}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Entity_css__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Entity_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Entity_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('Entity');

// @TODO Try to load photo

var Entity = function (_Component) {
  _inherits(Entity, _Component);

  function Entity() {
    _classCallCheck(this, Entity);

    return _possibleConstructorReturn(this, (Entity.__proto__ || Object.getPrototypeOf(Entity)).apply(this, arguments));
  }

  _createClass(Entity, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          size = _props.size,
          photo = _props.photo,
          title = _props.title,
          description = _props.description;

      var modifiers = {
        'Entity--small': size === 's',
        'Entity--no-photo': !photo
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])(baseClassNames, modifiers, className),
          style: style
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'Entity__aside' },
          photo && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: photo, alt: title, className: 'Entity__photo' })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'Entity__main' },
          title && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'Entity__title' },
            title
          ),
          description && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'Entity__description' },
            description
          )
        )
      );
    }
  }]);

  return Entity;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Entity.defaultProps = {
  style: {},
  alignment: 'left',
  size: 's',
  photo: '',
  title: '',
  description: ''
};
/* harmony default export */ __webpack_exports__["a"] = (Entity);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__File_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__File_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__File_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Button_Button__ = __webpack_require__(22);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('File');

var File = function (_Component) {
  _inherits(File, _Component);

  function File(props) {
    _classCallCheck(this, File);

    var _this = _possibleConstructorReturn(this, (File.__proto__ || Object.getPrototypeOf(File)).call(this, props));

    _this.changeHandler = function (e) {
      _this.setState({ value: e.target.value });
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.state = {
      value: null
    };
    return _this;
  }

  _createClass(File, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          label = _props.label,
          alignment = _props.alignment,
          appearance = _props.appearance;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__Button_Button__["a" /* default */],
        {
          alignment: alignment,
          appearance: appearance,
          onClick: function onClick() {},
          className: baseClassNames,
          style: style,
          component: 'div'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'label',
          { className: 'File__in' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', _extends({
            className: 'File__self',
            type: 'file',
            onChange: this.changeHandler
          }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__["a" /* default */])(this.props, ['onChange', 'style', 'label', 'alignment', 'appearance'])))
        ),
        label
      );
    }
  }]);

  return File;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

File.defaultProps = {
  style: {},
  label: 'Choose file',
  alignment: 'left',
  appearance: 'default',
  onChange: function onChange() {}
};
/* harmony default export */ __webpack_exports__["a"] = (File);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FixedLayout_css__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FixedLayout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__FixedLayout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_removeObjectKeys__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_getClassName__["a" /* default */])('FixedLayout');

var FixedLayout = function (_React$Component) {
  _inherits(FixedLayout, _React$Component);

  function FixedLayout() {
    _classCallCheck(this, FixedLayout);

    return _possibleConstructorReturn(this, (FixedLayout.__proto__ || Object.getPrototypeOf(FixedLayout)).apply(this, arguments));
  }

  _createClass(FixedLayout, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_removeObjectKeys__["a" /* default */])(this.props, ['className', 'isActive', 'isPrev', 'isNext', 'children']), {
          className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_classnames__["a" /* default */])(baseClassNames, this.props.className, {
            'FixedLayout--active': this.props.isActive,
            'FixedLayout--prev': this.props.isPrev,
            'FixedLayout--next': this.props.isNext
          })
        }),
        this.props.children,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'FixedLayout__transition-shadow' })
      );
    }
  }]);

  return FixedLayout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (FixedLayout);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Flex;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Flex_css__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Flex_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Flex_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_removeObjectKeys__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('Flex');

function Flex(props) {
  var items = [].concat(props.children).filter(function (a) {
    return !!a;
  });

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    _extends({
      className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])(baseClassNames, props.className),
      style: props.style
    }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_removeObjectKeys__["a" /* default */])(props, ['className', 'style', 'alignment'])),
    items.map(function (item, i) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'Flex__item', key: item.key || item.props.id || 'flex-item-' + i },
        item
      );
    })
  );
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Gallery_css__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Gallery_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Gallery_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Touch_Touch__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_requestAnimationFrame__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_prefixer__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_prefixer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_prefixer__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__["a" /* default */])('Gallery');

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery(props) {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

    _this.slidesStore = {};

    _this.go = function (targetIndex) {
      _this.setState({
        shiftX: _this.calculateIndent(targetIndex),
        current: targetIndex
      });

      if (_this.timeout) {
        _this.clearTimeout();
        _this.setTimeout(_this.props.autoplay);
      }
    };

    _this.next = function () {
      var _this$state = _this.state,
          slides = _this$state.slides,
          current = _this$state.current;

      var targetIndex = current < slides.length - 1 ? current + 1 : current;

      _this.go(targetIndex);
    };

    _this.prev = function () {
      var current = _this.state.current;

      var targetIndex = current > 0 ? current - 1 : current;

      _this.go(targetIndex);
    };

    _this.onStart = function (e) {
      _this.setState({
        animation: false,
        startT: e.startT
      });
    };

    _this.onMove = function (e) {
      if (!_this.isDraggable()) {
        return;
      }

      e.originalEvent.preventDefault();

      if (e.isSlideX) {
        _this.props.onDragStart && _this.props.onDragStart();
        if (_this.state.deltaX !== e.shiftX || _this.state.dragging !== e.isSlideX) {
          _this.setState({
            deltaX: e.shiftX,
            dragging: e.isSlideX
          });
        }

        return true;
      }
    };

    _this.onEnd = function (e) {
      var targetIndex = e.isSlide ? _this.getTarget() : _this.state.current;
      _this.props.onDragEnd && _this.props.onDragEnd();

      _this.setState({
        shiftX: _this.calculateIndent(targetIndex),
        deltaX: 0,
        animation: true,
        current: targetIndex,
        duration: '.24'
      });

      if (_this.props.onEnd) {
        _this.props.onEnd({
          targetIndex: targetIndex
        });
      }

      if (_this.timeout) {
        _this.clearTimeout();
        _this.setTimeout(_this.props.autoplay);
      }

      return true;
    };

    _this.onResize = function () {
      _this.initializeSlides();

      var layerWidth = _this.state.layerWidth;

      var containerWidth = _this.container.offsetWidth;
      var viewportWidth = _this.viewport.offsetWidth;

      _this.setState({
        shiftX: _this.calculateIndent(_this.state.current),
        containerWidth: containerWidth,
        min: _this.calcMin({ layerWidth: layerWidth, containerWidth: containerWidth, viewportWidth: viewportWidth }),
        animation: false
      }, function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_requestAnimationFrame__["a" /* default */])(function () {
          return _this.setState({ animation: true });
        });
      });
    };

    _this.setTimeout = function (duration) {
      _this.timeout = setTimeout(function () {
        var _this$state2 = _this.state,
            slides = _this$state2.slides,
            current = _this$state2.current;

        var targetIndex = current < slides.length - 1 ? current + 1 : 0;

        _this.go(targetIndex);
      }, duration);
    };

    _this.clearTimeout = function () {
      clearTimeout(_this.timeout);
    };

    _this.reduceChildren = function (acc, item, i) {
      if (item) {
        var key = item.props.key || item.props.id || 'slide-' + i;
        var ref = _this.getSlideRef(i);

        acc.push(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'Gallery__slide', key: key, ref: ref },
          item
        ));
      }

      return acc;
    };

    _this.getContainerRef = function (container) {
      _this.container = container;
    };

    _this.getViewportRef = function (viewport) {
      _this.viewport = viewport ? viewport.container : {};
    };

    _this.getSlideRef = function (id) {
      return function (slide) {
        _this.slidesStore['slide-' + id] = slide;
      };
    };

    _this.state = {
      containerWidth: 0,
      current: props.initialSlideIndex,
      deltaX: 0,
      shiftX: 0,
      slides: [],
      animation: false,
      duration: 0.24
    };

    _this.slides = _this.getChildren(props.children);
    return _this;
  }

  _createClass(Gallery, [{
    key: 'initializeSlides',
    value: function initializeSlides() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      var slides = this.getSlidesCoords();
      var containerWidth = this.container.offsetWidth;
      var viewportWidth = this.viewport.offsetWidth;
      var layerWidth = slides.reduce(function (val, slide) {
        return slide.width + val;
      }, 0);
      var min = this.calcMin({ containerWidth: containerWidth, layerWidth: layerWidth, viewportWidth: viewportWidth });
      var max = 0;

      this.setState({ min: min, max: max, layerWidth: layerWidth, containerWidth: containerWidth, slides: slides }, callback);
    }
  }, {
    key: 'calcMin',
    value: function calcMin(_ref) {
      var containerWidth = _ref.containerWidth,
          layerWidth = _ref.layerWidth,
          viewportWidth = _ref.viewportWidth;

      switch (this.props.align) {
        case 'left':
          return containerWidth - layerWidth;
        case 'right':
          return viewportWidth - layerWidth;
        case 'center':
          return viewportWidth - (containerWidth - viewportWidth) / 2 - layerWidth;
      }
    }

    /**
     * Получает координаты и размеры каждого слайда
      * @returns {Array} Массив с объектами, описывающими габариты слайда
     */

  }, {
    key: 'getSlidesCoords',
    value: function getSlidesCoords() {
      var _this2 = this;

      return [].concat(this.props.children).reduce(function (acc, item, i) {
        if (item) {
          var elem = _this2.slidesStore['slide-' + i];
          var res = {
            coordX: elem.offsetLeft,
            width: elem.offsetWidth,
            id: item.props.id
          };

          acc.push(res);
        }

        return acc;
      }, []);
    }

    /**
     * Считает отступ слоя галереи во время драга
     *
     * @returns {Number} Значения отступа
     */

  }, {
    key: 'calculateDragIndent',
    value: function calculateDragIndent() {
      var _state = this.state,
          shiftX = _state.shiftX,
          deltaX = _state.deltaX,
          min = _state.min,
          max = _state.max;

      var indent = shiftX + deltaX;
      if (indent > max) {
        return max + Number((indent - max) / 3);
      } else if (indent < min) {
        return min + Number((indent - min) / 3);
      }

      return indent;
    }

    /**
     * Считает отступ слоя галереи
     *
     * @param {Number} targetIndex ID целевого слайда
     * @returns {Number} Значения отступа
     */

  }, {
    key: 'calculateIndent',
    value: function calculateIndent(targetIndex) {
      var slides = this.state.slides;


      if (!this.isDraggable()) {
        return 0;
      }

      var coordX = slides.length ? slides[targetIndex].coordX : 0;
      return this.validateIndent(-1 * coordX);
    }
  }, {
    key: 'validateIndent',
    value: function validateIndent(value) {
      var _state2 = this.state,
          min = _state2.min,
          max = _state2.max;


      if (value < min) {
        return min;
      } else if (value > max) {
        return max;
      }

      return value;
    }
  }, {
    key: 'isDraggable',
    value: function isDraggable() {
      return this.state.layerWidth > this.state.containerWidth;
    }

    /**
     * Получает индекс слайда, к которому будет осуществлен переход
     *
     * @returns {Number} Индекс слайда
     */

  }, {
    key: 'getTarget',
    value: function getTarget() {
      var _state3 = this.state,
          slides = _state3.slides,
          current = _state3.current,
          deltaX = _state3.deltaX,
          shiftX = _state3.shiftX,
          startT = _state3.startT;

      var expectDeltaX = deltaX / (new Date() - startT) * 240 * 0.6;
      var shift = shiftX + deltaX + expectDeltaX;
      var direction = deltaX < 0 ? 1 : -1;

      // Находим ближайшую границу слайда к текущему отступу
      var targetIndex = slides.reduce(function (val, item, index) {
        var previousValue = Math.abs(slides[val].coordX + shift);
        var currentValue = Math.abs(item.coordX + shift);

        return previousValue < currentValue ? val : index;
      }, current);

      if (targetIndex === current) {
        var targetSlide = current + direction;

        if (targetSlide >= 0 && targetSlide < slides.length) {
          if (Math.abs(deltaX) > slides[targetSlide].width * 0.05) {
            targetIndex = targetSlide;
          }
        }
      }

      return targetIndex;
    }
  }, {
    key: 'getChildren',
    value: function getChildren(children) {
      return [].concat(children || this.props.children).reduce(this.reduceChildren, []);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      this.initializeSlides(function () {
        _this3.setState({
          shiftX: _this3.calculateIndent(_this3.props.initialSlideIndex)
        });
      });
      window.addEventListener('resize', this.onResize);

      if (this.props.autoplay) {
        this.setTimeout(this.props.autoplay);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.isChildrenDirty) {
        this.isChildrenDirty = false;
        this.initializeSlides();
      }
      if (prevState.current !== this.state.current && this.props.onChange) {
        this.props.onChange(this.state.current);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.slides = this.getChildren(nextProps.children);
      this.isChildrenDirty = true;

      if (nextProps.autoplay && !this.props.autoplay) {
        if (nextProps.autoplay) {
          this.setTimeout(nextProps.autoplay);
        }
      }
      if (!nextProps.autoplay && this.props.autoplay) {
        this.clearTimeout();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);

      this.clearTimeout();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state4 = this.state,
          animation = _state4.animation,
          duration = _state4.duration,
          current = _state4.current,
          dragging = _state4.dragging;
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          slideWidth = _props.slideWidth;

      var indent = dragging ? this.calculateDragIndent() : this.calculateIndent(current);
      var classname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_classnames__["a" /* default */])(baseClassNames, className, _defineProperty({
        'Gallery--dragging': dragging
      }, 'Gallery--' + this.props.align, true));

      var layerStyle = __WEBPACK_IMPORTED_MODULE_7_react_prefixer___default()({
        transform: 'translateX(' + indent + 'px)',
        transition: animation ? 'transform ' + duration + 's cubic-bezier(.1, 0, .25, 1)' : 'none'
      });

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: classname, style: style, ref: this.getContainerRef },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__Touch_Touch__["a" /* default */],
          {
            useCapture: true,
            className: 'Gallery__viewport',
            onStartX: this.onStart,
            onMoveX: this.onMove,
            onEnd: this.onEnd,
            style: { width: slideWidth },
            ref: this.getViewportRef
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'Gallery__layer', style: layerStyle },
            this.slides
          )
        )
      );
    }
  }]);

  return Gallery;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Gallery.defaultProps = {
  slideWidth: '100%',
  children: '',
  autoplay: 0,
  initialSlideIndex: 0,
  align: 'left'
};
/* harmony default export */ __webpack_exports__["a"] = (Gallery);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Group_css__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Group_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Group_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__["a" /* default */])('Group');

var Group = function (_Component) {
  _inherits(Group, _Component);

  function Group() {
    _classCallCheck(this, Group);

    return _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).apply(this, arguments));
  }

  _createClass(Group, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          title = _props.title,
          description = _props.description;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: baseClassNames, style: style },
        title && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          { className: 'Group__title' },
          title
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'Group__content' },
          this.props.children
        ),
        description && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'Group__description' },
          description
        )
      );
    }
  }]);

  return Group;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Group.defaultProps = {
  style: {},
  title: '',
  description: '',
  children: ''
};
/* harmony default export */ __webpack_exports__["a"] = (Group);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon_css__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Icon_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('Icon');

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          children = _props.children;

      var classes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])(baseClassNames, {
        'Icon--verbose': !children
      });

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: classes, style: style },
        children
      );
    }
  }]);

  return Icon;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Icon.defaultProps = {
  style: {},
  children: ''
};
/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List_css__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__List_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('List');

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          indented = _props.indented;

      var modifiers = {
        'List--indented': indented
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'ul',
        { className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])(baseClassNames, modifiers), style: { style: style } },
        this.props.children
      );
    }
  }]);

  return List;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

List.defaultProps = {
  style: {},
  indented: false,
  children: ''
};
/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListItem_css__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListItem_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ListItem_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Tappable_Tappable__ = __webpack_require__(7);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__["a" /* default */])('ListItem');

var ListItem = function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          indicator = _props.indicator,
          asideContent = _props.asideContent,
          expandable = _props.expandable,
          indented = _props.indented,
          onClick = _props.onClick,
          children = _props.children;

      var modifiers = {
        'ListItem--expandable': expandable,
        'ListItem--indented': indented
      };
      var nativeProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__["a" /* default */])(this.props, ['icon', 'indicator', 'asideContent', 'expandable', 'indented', 'onClick']);

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'li',
        _extends({ className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])(baseClassNames, modifiers) }, nativeProps),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6__Tappable_Tappable__["a" /* default */],
          { component: 'div', className: 'ListItem__in', onClick: onClick },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'ListItem__icon' },
            icon && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              { className: 'ListItem__icon-in' },
              icon
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'ListItem__main' },
            children
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'ListItem__indicator' },
            indicator
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'ListItem__aside' },
            asideContent
          )
        )
      );
    }
  }]);

  return ListItem;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ListItem.defaultProps = {
  icon: null,
  indicator: '',
  asideContent: '',
  expandable: false,
  indented: false,
  children: ''
};
/* harmony default export */ __webpack_exports__["a"] = (ListItem);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Alert_Alert__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ActionSheet_ActionSheet__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ActionSheetItem_ActionSheetItem__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_string__ = __webpack_require__(74);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var actionId = 1;

var NativePopouts = function (_React$Component) {
  _inherits(NativePopouts, _React$Component);

  function NativePopouts() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NativePopouts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NativePopouts.__proto__ || Object.getPrototypeOf(NativePopouts)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      popout: null
    }, _this.actions = [], _this.actionsStore = {}, _this.vkuiListener = function (e) {
      if (e.type === 'VKWebAppEvent' && e.detail && e.detail.action) {
        if (_this.actionsStore.hasOwnProperty(e.detail.action)) {
          _this.actionsStore[e.detail.action](e.detail);
          _this.props.popout && _this.props.popout.onClose && _this.props.popout.onClose();
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NativePopouts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.vkuiConnect.subscribe(this.vkuiListener);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.actions = [];
      this.actionsStore = {};
      this.props.vkuiConnect.unsubscribe(this.vkuiListener);
    }
  }, {
    key: 'renderNativeAlert',
    value: function renderNativeAlert(popout) {
      var style = popout.style,
          title = popout.title,
          message = popout.text;

      this.props.vkuiConnect.send('VKWebAppAlert', {
        style: style,
        title: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_string__["a" /* brToNl */])(title),
        message: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_string__["a" /* brToNl */])(message),
        actions: this.actions.map(function (item) {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_removeObjectKeys__["a" /* default */])(item, ['action']);
        })
      });
    }
  }, {
    key: 'renderUIAlert',
    value: function renderUIAlert(popout) {
      var title = popout.title,
          text = popout.text,
          onClose = popout.onClose;

      this.setState({
        popout: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__Alert_Alert__["a" /* default */],
          {
            actions: this.actions.map(function (item) {
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_removeObjectKeys__["a" /* default */])(item, ['params']);
            }),
            onClose: onClose,
            actionsLayout: this.actions.length > 2 ? 'vertical' : 'horizontal'
          },
          title && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            title
          ),
          text && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            text
          )
        )
      });
    }
  }, {
    key: 'renderNativeSheet',
    value: function renderNativeSheet(popout) {
      var style = popout.style;

      this.props.vkuiConnect.send('VKWebAppAlert', {
        style: style,
        actions: this.actions.map(function (item) {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_removeObjectKeys__["a" /* default */])(item, ['action']);
        })
      });
    }
  }, {
    key: 'renderUISheet',
    value: function renderUISheet(popout) {
      var title = popout.title,
          text = popout.text,
          onClose = popout.onClose;

      this.setState({
        popout: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__ActionSheet_ActionSheet__["a" /* default */],
          {
            title: title,
            text: text,
            onClose: onClose
          },
          this.actions.map(function (item, index) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5__ActionSheetItem_ActionSheetItem__["a" /* default */],
              { autoclose: item.autoclose, theme: item.style, onClick: item.action, key: '' + index },
              item.title
            );
          })
        )
      });
    }
  }, {
    key: 'closeUIPopout',
    value: function closeUIPopout() {
      this.setState({ popout: null });
      this.actions = [];
      this.actionsStore = {};
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.popout && this.props.popout) {
        this.closeUIPopout();
      }
      if (nextProps.popout && nextProps.popout !== this.props.popout) {
        this.context.isWebView && this.closeUIPopout();
        if (nextProps.popout.style) {
          this.actions = nextProps.popout.actions.map(function (item) {
            return Object.assign({}, item, {
              autoclose: item.hasOwnProperty('autoclose') ? item.autoclose : true,
              action: item.action || nextProps.popout.onClose,
              handler: Object.assign({}, item.params, { action: 'action-' + actionId++ })
            });
          });

          this.actionsStore = this.actions.reduce(function (res, item) {
            res[item.handler.action] = item.action;return res;
          }, {});

          switch (nextProps.popout.style) {
            case 'alert':
              this.context.isWebView ? this.renderNativeAlert(nextProps.popout) : this.renderUIAlert(nextProps.popout);
              break;
            case 'actionSheet':
              this.context.isWebView ? this.renderNativeSheet(nextProps.popout) : this.renderUISheet(nextProps.popout);
              break;
          }
        } else {
          this.setState({ popout: nextProps.popout });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var Component = this.props.component;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_removeObjectKeys__["a" /* default */])(this.props, ['popout']), { popout: this.state.popout }));
    }
  }]);

  return NativePopouts;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

NativePopouts.contextTypes = {
  isWebView: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
};
/* harmony default export */ __webpack_exports__["a"] = (NativePopouts);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Radio_css__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Radio_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Radio_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tappable_Tappable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__["a" /* default */])('Radio');

var Radio = function Radio(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__Tappable_Tappable__["a" /* default */],
    { component: 'label', onClick: function onClick() {}, className: baseClassNames },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__["a" /* default */])(props, ['children', 'description']), {
      type: 'radio',
      className: 'Radio__self'
    })),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { className: 'Radio__wrapper' },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'Radio__container' },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          { className: 'Radio__label' },
          props.children
        ),
        props.description && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'Radio__description' },
          props.description
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', { className: 'Radio__icon' })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Radio);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Root_css__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Root_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Root_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_transitionEvents__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_platform__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_platform__["a" /* platform */])();
var baseClassName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__["a" /* default */])('Root');

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    _classCallCheck(this, Root);

    var _this = _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this));

    _this.onAnimationEnd = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { manual: true };

      if (['root-android-animation-hide-back', 'root-android-animation-show-forward', 'root-ios-animation-hide-back', 'root-ios-animation-show-forward'].indexOf(e.animationName) > -1 || e.manual) {
        var isBack = _this.state.isBack;
        _this.setState({
          activeView: _this.state.nextView,
          prevView: null,
          nextView: null,
          visibleViews: [_this.state.nextView],
          transition: false,
          isBack: undefined
        }, function () {
          isBack ? window.scrollTo(0, _this.state.scrolls[_this.state.activeView]) : window.scrollTo(0, 0);
          _this.props.onTransition && _this.props.onTransition(_this.state.isBack);
        });
      }
    };

    _this.state = {
      activeView: props.activeView,
      prevView: null,
      nextView: null,
      visibleViews: [props.activeView],
      isBack: undefined,
      scrolls: {}
    };
    return _this;
  }

  _createClass(Root, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.popout && !this.props.popout) {
        Root.blurActiveElement();
      }

      if (nextProps.activeView !== this.props.activeView) {
        var pageYOffset = window.pageYOffset;
        var firstLayerId = this.props.children.find(function (view) {
          return view.props.id === _this2.props.activeView || view.props.id === nextProps.activeView;
        }).props.id;
        var isBack = firstLayerId === nextProps.activeView;

        Root.blurActiveElement();

        var nextView = nextProps.activeView;
        var prevView = this.props.activeView;

        this.setState({
          scrolls: Object.assign({}, this.state.scrolls, _defineProperty({}, this.props.activeView, pageYOffset)),
          transition: true,
          activeView: null,
          nextView: nextView,
          prevView: prevView,
          visibleViews: [nextView, prevView],
          isBack: isBack
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevState.transition && this.state.transition) {
        this.prevViewEl.querySelector('.View__panel').scrollTop = this.state.scrolls[this.state.prevView];

        if (this.state.isBack) {
          this.nextViewEl.querySelector('.View__panel').scrollTop = this.state.scrolls[this.state.nextView];
        }
        this.waitAnimationFinish(this.state.isBack ? this.prevViewEl : this.nextViewEl, this.onAnimationEnd);
      }
    }
  }, {
    key: 'waitAnimationFinish',
    value: function waitAnimationFinish(elem, eventHandler) {
      if (__WEBPACK_IMPORTED_MODULE_5__lib_transitionEvents__["a" /* default */].supported) {
        var eventName = __WEBPACK_IMPORTED_MODULE_5__lib_transitionEvents__["a" /* default */].prefix ? __WEBPACK_IMPORTED_MODULE_5__lib_transitionEvents__["a" /* default */].prefix + 'AnimationEnd' : 'animationend';

        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), osname === __WEBPACK_IMPORTED_MODULE_6__lib_platform__["b" /* ANDROID */] ? 300 : 600);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var Views = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.toArray(this.props.children).filter(function (View) {
        return _this3.state.visibleViews.indexOf(View.props.id) >= 0;
      });

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_classnames__["a" /* default */])(baseClassName, {
            'Root--transition': this.state.transition
          }) },
        Views.map(function (View) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: View.props.id, className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_classnames__["a" /* default */])('Root__view', {
                'Root__view--hide-back': View.props.id === _this3.state.prevView && _this3.state.isBack,
                'Root__view--hide-forward': View.props.id === _this3.state.prevView && !_this3.state.isBack,
                'Root__view--show-back': View.props.id === _this3.state.nextView && _this3.state.isBack,
                'Root__view--show-forward': View.props.id === _this3.state.nextView && !_this3.state.isBack,
                'Root__view--active': View.props.id === _this3.state.activeView
              }), ref: function ref(el) {
                if (View.props.id === _this3.state.prevView) _this3.prevViewEl = el;
                if (View.props.id === _this3.state.nextView) _this3.nextViewEl = el;
              } },
            View
          );
        }),
        this.props.popout && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'Root__popout' },
          this.props.popout
        )
      );
    }
  }], [{
    key: 'blurActiveElement',
    value: function blurActiveElement() {
      if (typeof window !== 'undefined' && document.activeElement) {
        document.activeElement.blur();
      }
    }
  }]);

  return Root;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Root.defaultProps = {
  popout: null
};
/* harmony default export */ __webpack_exports__["a"] = (Root);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ScreenSpinner;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScreenSpinner_css__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScreenSpinner_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ScreenSpinner_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Spinner_Spinner__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PopoutWrapper_PopoutWrapper__ = __webpack_require__(17);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };











var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('ScreenSpinner');

function ScreenSpinner(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_7__PopoutWrapper_PopoutWrapper__["a" /* default */],
    { onClick: props.onClick },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      _extends({
        className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_classnames__["a" /* default */])(baseClassNames, props.className)
      }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_removeObjectKeys__["a" /* default */])(props, ['className', 'onClick'])),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Spinner_Spinner__["a" /* default */], { color: '#fff' })
    )
  );
}

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScrollView_css__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScrollView_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ScrollView_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_classnames__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getClassName__["a" /* default */])('ScrollView');

var ScrollView = function (_Component) {
  _inherits(ScrollView, _Component);

  function ScrollView(props) {
    _classCallCheck(this, ScrollView);

    var _this = _possibleConstructorReturn(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(ScrollView, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref) {
      var id = _ref.id,
          activePanel = _ref.activePanel,
          nextPanel = _ref.nextPanel;

      return id === activePanel || id === nextPanel;
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        _extends({
          className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_classnames__["a" /* default */])(baseClassNames, className)
        }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_removeObjectKeys__["a" /* default */])(this.props, ['header', 'onPull', 'className', 'activePanel', 'prevPanel', 'nextPanel', 'fixedLayout', 'theme']), {
          ref: this.getRef
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'ScrollView__in', style: { paddingBottom: this.context.insets && this.context.insets.bottom } },
          this.props.children
        )
      );
    }
  }]);

  return ScrollView;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ScrollView.contextTypes = {
  insets: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    top: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    right: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    bottom: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    left: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number
  })
};
ScrollView.defaultProps = {
  children: '',
  theme: 'gray'
};
/* harmony default export */ __webpack_exports__["a"] = (ScrollView);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Select_css__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Select_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Select_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('Select');

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.changeHandler = function (e) {
      _this.setState({ checked: e.target.value });
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.state = {
      value: null
    };
    return _this;
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          label = _props.label,
          options = _props.options;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'label',
        { className: baseClassNames, style: style },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'select',
          _extends({
            className: 'Select__self',
            onChange: this.changeHandler
          }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__["a" /* default */])(this.props, ['onChange', 'label', 'options'])),
          Array.isArray(options) && options.length && options.map(function (option, i) {
            var isString = typeof option === 'string';
            var value = isString ? option : option.value || option.text;
            var key = !isString && option.id;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'option',
              { value: value, key: key || 'option-' + i },
              isString ? option : option.text
            );
          }),
          this.props.children
        )
      );
    }
  }]);

  return Select;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Select.defaultProps = {
  style: {},
  label: '',
  options: null,
  name: ''
};
/* harmony default export */ __webpack_exports__["a"] = (Select);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Slider_css__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Slider_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Slider_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Touch_Touch__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_getClassName__["a" /* default */])('Slider');

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.onStart = function (e) {
      if (!_this.state.containerWidth) {
        _this.onResize();
      }

      if (!e.originalEvent.target.closest('.Slider__thumb')) {
        var coords = _this.calculate(e.startX - _this.state.containerLeft);

        _this.setState(Object.assign({}, coords, {
          startX: coords.absolutePosition,
          deltaX: 0
        }));
      } else {
        _this.setState({ active: true });
      }
    };

    _this.onMove = function (e) {
      _this.setState(_this.calculate(_this.state.startX + (e.shiftX || 0)));
      e.originalEvent.preventDefault();
    };

    _this.onEnd = function () {
      _this.setState({
        startX: _this.state.absolutePosition,
        deltaX: 0,
        active: false
      });
    };

    _this.onResize = function () {
      _this.setState({
        containerLeft: _this.container.offsetLeft,
        containerWidth: _this.container.offsetWidth
      });
    };

    _this.getRef = function (container) {
      _this.container = container;
      return;
    };

    _this.state = {
      startX: 0,
      deltaX: 0,
      value: null
    };
    return _this;
  }

  _createClass(Slider, [{
    key: 'calculate',
    value: function calculate(pos) {
      var _props = this.props,
          min = _props.min,
          max = _props.max,
          step = _props.step;
      var containerWidth = this.state.containerWidth;


      pos = Math.max(0, Math.min(pos, containerWidth));

      var relation = pos / containerWidth;
      var absolutePosition = pos;
      var position = Math.round(relation * 10000) / 100;

      if (step > 0) {
        var stepCount = Math.round((max - min) / step);

        return {
          position: Math.round(relation * stepCount) * step / (max - min) * 100,
          absolutePosition: absolutePosition,
          value: min + Math.round(relation * stepCount) * step
        };
      }

      return {
        position: position,
        absolutePosition: absolutePosition,
        value: min + (max - min) * relation
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: 'render',
    value: function render() {
      var modifiers = {
        'Slider--active': this.state.active
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_classnames__["a" /* default */])(baseClassNames, modifiers), ref: this.getRef },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__Touch_Touch__["a" /* default */],
          { onStart: this.onStart, onMove: this.onMove, onEnd: this.onEnd, className: 'Slider__in' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'Slider__dragger', style: { width: this.state.position + '%' } },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', { className: 'Slider__thumb' })
          )
        )
      );
    }
  }]);

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Slider.defaultProps = {
  min: 0,
  max: 100,
  value: 0,
  step: 0
};
/* harmony default export */ __webpack_exports__["a"] = (Slider);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Text_css__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Text_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Text_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('Text');

var Text = function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  _createClass(Text, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          alignment = _props.alignment,
          className = _props.className,
          style = _props.style;

      var modifiers = {
        'Text--left': alignment === 'left',
        'Text--center': alignment === 'center',
        'Text--right': alignment === 'right'
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])(baseClassNames, modifiers, className),
          style: style
        },
        this.props.children
      );
    }
  }]);

  return Text;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Text.defaultProps = {
  style: {},
  alignment: 'left'
};
/* harmony default export */ __webpack_exports__["a"] = (Text);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Textarea_css__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Textarea_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Textarea_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_requestAnimationFrame__ = __webpack_require__(8);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_getClassName__["a" /* default */])('Textarea');

var Textarea = function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea(props) {
    _classCallCheck(this, Textarea);

    var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));

    _this.getRef = function (element) {
      _this.element = element;
    };

    _this.resize = function () {
      var el = _this.element;

      if (el) {
        var offsetHeight = el.offsetHeight,
            scrollHeight = el.scrollHeight;

        var style = window.getComputedStyle(el);
        var paddingTop = parseInt(style.paddingTop);
        var paddingBottom = parseInt(style.paddingBottom);

        var diff = paddingTop + paddingBottom;

        if (scrollHeight + diff <= offsetHeight) {
          diff = 0;
        }

        if (el.value) {
          _this.setState({ height: scrollHeight - diff });
        }

        // const top = document.body.scrollTop;

        _this.setState({ height: 0 }, function () {
          var height = el.scrollHeight - diff;

          _this.setState({ height: height });
          // TODO fix problem with scroll to top
          // document.body.scrollTop = top;

          _this.props.onResize(el);
        });
      }
    };

    _this.onChange = function (e) {
      if (_this.props.grow) {
        _this.resize();
      }

      if (!_this.isControlledOutside) {
        _this.setState({ value: e.target.value });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.state = {
      value: typeof props.value === 'undefined' ? props.initialValue || '' : undefined
    };

    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
    }
    return _this;
  }

  _createClass(Textarea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.grow) {
        this.resize();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.value && this.props.value === '') {
        // Fix iOS extra indent on removing content
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_requestAnimationFrame__["a" /* default */])(function () {
          _this2.element.value = '';
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var value = this.isControlledOutside ? props.value : this.state.value;
      var height = this.state.height || this.props.style.height || 66;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('textarea', _extends({
        className: baseClassNames
      }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_removeObjectKeys__["a" /* default */])(props, ['initialValue', 'grow', 'style', 'onResize']), {
        value: value,
        onChange: this.onChange,
        ref: this.getRef,
        style: Object.assign({}, props.style, { height: height })
      }));
    }
  }]);

  return Textarea;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Textarea.defaultProps = {
  style: {},
  initialValue: '',
  grow: true,
  onResize: function onResize() {}
};
/* harmony default export */ __webpack_exports__["a"] = (Textarea);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_css__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__View_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_animate__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_transitionEvents__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_getClassName__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Touch_Touch__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_prefixer__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_prefixer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_prefixer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_removeObjectKeys__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var osname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib_platform__["a" /* platform */])();
var baseClassNames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpers_getClassName__["a" /* default */])('View');

var View = function (_Component) {
  _inherits(View, _Component);

  function View(props) {
    _classCallCheck(this, View);

    var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, props));

    _this.refsStore = {};

    _this.transitionEndHandler = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { manual: true };

      if (['animation-ios-next-forward', 'animation-ios-next-back', 'animation-android-next-forward', 'animation-android-prev-back'].indexOf(e.animationName) > -1 || e.manual) {
        var activePanel = _this.props.activePanel;
        var isBack = _this.state.isBack;
        _this.setState({
          prevPanel: null,
          nextPanel: null,
          visiblePanels: [activePanel],
          activePanel: activePanel,
          animated: false,
          isBack: undefined
        }, function () {
          isBack && window.scrollTo(0, this.state.scrolls[activePanel]);
          this.props.onTransition && this.props.onTransition();
        });
      }
    };

    _this.swipingBackTransitionEndHandler = function (e) {
      // indexOf because of vendor prefixes in old browsers
      if (e.propertyName.indexOf('transform') >= 0 && e.target.classList.contains('View__panel--swipe-back-next')) {
        _this.state.swipingBackFinish ? _this.onSwipeBackSuccess() : _this.onSwipeBackCancel();
      }
    };

    _this.onScrollTop = function () {
      var activePanel = _this.state.activePanel;


      if (activePanel) {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        if (scrollTop) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lib_animate__["a" /* default */])({
            duration: 200,
            timing: function timing(n) {
              return Math.sqrt(n);
            },
            draw: function draw(val) {
              window.scrollTo(0, scrollTop - val * scrollTop);
            }
          });
        }
      }
    };

    _this.onMove = function (e) {
      if (osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["c" /* IOS */] && !_this.context.isWebView && (e.startX <= 70 || e.startX >= window.innerWidth - 70) && !_this.state.browserSwipe) {
        _this.setState({ browserSwipe: true });
      }

      if (osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["c" /* IOS */] && _this.context.isWebView && _this.props.onSwipeBack && !View.swipeBackPrevented(e.originalEvent.target)) {
        if (_this.state.animated && e.startX <= 70) {
          e.originalEvent.preventDefault();
          return false;
        }

        if (e.startX <= 70 && !_this.state.swipingBack && _this.props.history.length > 1) {
          _this.setState({
            swipingBack: true,
            swipebackStartX: e.startX,
            startT: e.startT,
            swipeBackPrevPanel: _this.state.activePanel,
            swipeBackNextPanel: _this.props.history.slice(-2)[0],
            scrolls: Object.assign({}, _this.state.scrolls, _defineProperty({}, _this.state.activePanel, window.pageYOffset))
          }, function () {
            _this.props.onSwipeBackStart && _this.props.onSwipeBackStart();
          });
        }
        if (_this.state.swipingBack) {
          var swipeBackShift = void 0;
          if (e.shiftX < 0) {
            swipeBackShift = 0;
          } else if (e.shiftX > window.innerWidth - _this.state.swipebackStartX) {
            swipeBackShift = window.innerWidth;
          } else {
            swipeBackShift = e.shiftX;
          }
          _this.setState({ swipeBackShift: swipeBackShift });
        }
      }
      e.originalEvent.preventDefault();
    };

    _this.onEnd = function () {
      if (_this.state.swipingBack) {
        var speed = _this.state.swipeBackShift / (new Date() - _this.state.startT) * 1000;
        if (_this.state.swipeBackShift === 0) {
          _this.onSwipeBackCancel();
        } else if (_this.state.swipeBackShift >= window.innerWidth) {
          _this.onSwipeBackSuccess();
        } else {
          _this.setState({ swipingBackFinish: speed > 250 || _this.state.swipebackStartX + _this.state.swipeBackShift > window.innerWidth / 2 });
        }
      }
    };

    _this.getRef = function (c) {
      if (c && c.container && c.id) {
        var el = c;

        while (el.container) {
          el = el.container;
        }

        _this.refsStore[c.id] = el;
      }
    };

    _this.getPanels = function (panels) {
      return [].concat(panels).map(function (item) {
        return Object.assign({}, item, {
          id: item.props.id || item.key
        });
      });
    };

    _this.state = {
      scrolls: {},

      visiblePanels: [props.activePanel],
      activePanel: props.activePanel,
      isBack: undefined,
      prevPanel: null,
      nextPanel: null,

      swipingBack: false,
      swipebackStartX: 0,
      swipeBackShift: 0,
      swipeBackNextPanel: null,
      swipeBackPrevPanel: null,
      swipingBackFinish: null,

      browserSwipe: false
    };
    _this.panels = _this.getPanels(props.children);
    osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["c" /* IOS */] && _this.setPanelBg(props.activePanel);
    return _this;
  }

  _createClass(View, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.props.children !== nextProps.children) {
        this.panels = this.getPanels(nextProps.children);
      }

      if (this.props.activePanel !== nextProps.activePanel && osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["c" /* IOS */]) {
        this.setPanelBg(nextProps.activePanel);
      }

      if (nextProps.popout && !this.props.popout) {
        View.blurActiveElement();
      }

      // Нужен переход
      if (this.props.activePanel !== nextProps.activePanel && !this.state.swipingBack && !this.state.browserSwipe) {
        var firstLayer = this.panels.find(function (panel) {
          return panel.id === _this2.props.activePanel || panel.id === nextProps.activePanel;
        });
        var isBack = firstLayer && firstLayer.id === nextProps.activePanel;

        View.blurActiveElement();

        this.setState({
          visiblePanels: [this.props.activePanel, nextProps.activePanel],
          prevPanel: this.props.activePanel,
          nextPanel: nextProps.activePanel,
          activePanel: null,
          animated: true,
          scrolls: Object.assign({}, this.state.scrolls, _defineProperty({}, this.props.activePanel, window.pageYOffset)),
          isBack: isBack
        });
      }

      // Закончилась анимация свайпа назад
      if (this.props.activePanel !== nextProps.activePanel && this.state.swipingBack) {
        this.setState({
          swipeBackPrevPanel: null,
          swipeBackNextPanel: null,
          swipingBack: false,
          swipingBackFinish: null,
          swipebackStartX: 0,
          swipeBackShift: 0,
          activePanel: nextProps.activePanel,
          visiblePanels: [nextProps.activePanel]
        }, function () {
          return _this2.props.onTransition && _this2.props.onTransition();
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var scrolls = this.state.scrolls;

      // Начался переход
      if (!prevState.animated && this.state.animated) {
        var nextPanelElement = View.pickPanel(this.state.nextPanel);
        var prevPanelElement = View.pickPanel(this.state.prevPanel);

        prevPanelElement.scrollTop = scrolls[this.state.prevPanel];
        if (this.state.isBack) {
          nextPanelElement.scrollTop = scrolls[this.state.nextPanel];
        }

        this.waitAnimationFinish(View.pickPanel(this.state.nextPanel), this.transitionEndHandler);
      }

      // Начался свайп назад
      if (!prevState.swipingBack && this.state.swipingBack) {
        var _nextPanelElement = View.pickPanel(this.state.swipeBackNextPanel);
        var _prevPanelElement = View.pickPanel(this.state.swipeBackPrevPanel);

        _nextPanelElement.scrollTop = scrolls[this.state.swipeBackNextPanel];
        _prevPanelElement.scrollTop = scrolls[this.state.swipeBackPrevPanel];
      }

      // Началась анимация завершения свайпа назад.
      if (prevState.swipingBackFinish === null && this.state.swipingBackFinish !== null) {
        this.waitTransitionFinish(View.pickPanel(this.state.swipeBackNextPanel), this.swipingBackTransitionEndHandler);
      }

      // Если свайп назад отменился (когда пользователь недостаточно сильно свайпнул)
      if (prevState.swipingBackFinish === false && this.state.swipingBackFinish === null) {
        window.scrollTo(0, scrolls[this.state.activePanel]);
      }

      // Закончился Safari свайп
      if (prevProps.activePanel !== this.props.activePanel && this.state.browserSwipe) {
        this.setState({
          browserSwipe: false,
          nextPanel: null,
          prevPanel: null,
          animated: false,
          visiblePanels: [this.props.activePanel],
          activePanel: this.props.activePanel
        });
      }
    }
  }, {
    key: 'waitTransitionFinish',
    value: function waitTransitionFinish(elem, eventHandler) {
      if (__WEBPACK_IMPORTED_MODULE_5__lib_transitionEvents__["a" /* default */].supported) {
        var eventName = __WEBPACK_IMPORTED_MODULE_5__lib_transitionEvents__["a" /* default */].prefix ? __WEBPACK_IMPORTED_MODULE_5__lib_transitionEvents__["a" /* default */].prefix + 'TransitionEnd' : 'transitionend';

        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["b" /* ANDROID */] ? 300 : 600);
      }
    }
  }, {
    key: 'waitAnimationFinish',
    value: function waitAnimationFinish(elem, eventHandler) {
      if (__WEBPACK_IMPORTED_MODULE_5__lib_transitionEvents__["a" /* default */].supported) {
        var eventName = __WEBPACK_IMPORTED_MODULE_5__lib_transitionEvents__["a" /* default */].prefix ? __WEBPACK_IMPORTED_MODULE_5__lib_transitionEvents__["a" /* default */].prefix + 'AnimationEnd' : 'animationend';

        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["b" /* ANDROID */] ? 300 : 600);
      }
    }
  }, {
    key: 'setPanelBg',
    value: function setPanelBg(panelId) {
      var panel = this.panels.find(function (panel) {
        return panel.id === panelId;
      });
      if (panel) {
        document.documentElement.setAttribute('theme', panel.props.theme);
      } else {
        document.documentElement.removeAttribute('theme');
      }
    }
  }, {
    key: 'onSwipeBackSuccess',
    value: function onSwipeBackSuccess() {
      this.props.onSwipeBack && this.props.onSwipeBack();
    }
  }, {
    key: 'onSwipeBackCancel',
    value: function onSwipeBackCancel() {
      this.setState({
        swipeBackPrevPanel: null,
        swipeBackNextPanel: null,
        swipingBack: false,
        swipingBackFinish: null,
        swipebackStartX: 0,
        swipeBackShift: 0
      });
    }
  }, {
    key: 'calcPanelSwipeStyles',
    value: function calcPanelSwipeStyles(panelId) {
      var isPrev = panelId === this.state.swipeBackPrevPanel;
      var isNext = panelId === this.state.swipeBackNextPanel;

      var prevPanelTranslate = this.state.swipeBackShift + 'px';
      var nextPanelTranslate = -50 + this.state.swipeBackShift * 100 / window.innerWidth / 2 + '%';
      var prevPanelShadow = 0.3 * (window.innerWidth - this.state.swipeBackShift) / window.innerWidth;

      if (this.state.swipingBackFinish !== null) {
        return isPrev ? __WEBPACK_IMPORTED_MODULE_9_react_prefixer___default()({ boxShadow: '-2px 0 12px rgba(0, 0, 0, ' + prevPanelShadow + ')' }) : {};
      }

      if (isNext) {
        return __WEBPACK_IMPORTED_MODULE_9_react_prefixer___default()({
          transform: 'translate3d(' + nextPanelTranslate + ', 0, 0)'
        });
      }
      if (isPrev) {
        return __WEBPACK_IMPORTED_MODULE_9_react_prefixer___default()({
          transform: 'translate3d(' + prevPanelTranslate + ', 0, 0)',
          boxShadow: '-2px 0 12px rgba(0, 0, 0, ' + prevPanelShadow + ')'
        });
      }

      return {};
    }
  }, {
    key: 'calcHeaderSwipeStyles',
    value: function calcHeaderSwipeStyles(panelId) {
      var isPrev = panelId === this.state.swipeBackPrevPanel;
      var isNext = panelId === this.state.swipeBackNextPanel;

      if (!isPrev && !isNext || this.state.swipingBackFinish !== null) {
        return {
          title: {},
          item: {},
          leftIn: {},
          leftIcon: {},
          right: {}
        };
      }

      var opacity = this.state.swipeBackShift / window.innerWidth;
      var titleTransform = this.state.swipeBackShift / window.innerWidth * 60;
      var leftTransform = this.state.swipeBackShift / window.innerWidth * 60;

      if (isNext) {
        return __WEBPACK_IMPORTED_MODULE_9_react_prefixer___default()({
          title: { transform: 'translate3d(' + (-60 + titleTransform) + '%, 0, 0)', opacity: opacity },
          item: { opacity: opacity },
          leftIn: { transform: 'translate3d(' + (-60 + leftTransform) + '%, 0, 0)', opacity: opacity },
          leftIcon: { opacity: 1 },
          right: { opacity: 1 }
        });
      }
      if (isPrev) {
        return __WEBPACK_IMPORTED_MODULE_9_react_prefixer___default()({
          title: { transform: 'translate3d(' + titleTransform + '%, 0, 0)' },
          item: { opacity: 1 - opacity },
          leftIn: { transform: 'translate3d(' + leftTransform + '%, 0, 0)' }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          style = _props.style,
          popout = _props.popout,
          header = _props.header;
      var _state = this.state,
          prevPanel = _state.prevPanel,
          nextPanel = _state.nextPanel,
          activePanel = _state.activePanel;

      var hasPopout = !!popout;
      var hasHeader = header !== null;
      var panels = this.panels.filter(function (panel) {
        return _this3.state.visiblePanels.indexOf(panel.id) > -1 || panel.id === _this3.state.swipeBackPrevPanel || panel.id === _this3.state.swipeBackNextPanel;
      });

      var modifiers = {
        'View--header': hasHeader,
        'View--animated': this.state.animated,
        'View--swiping-back': this.state.swipingBack
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8__Touch_Touch__["a" /* default */],
        {
          component: 'section',
          className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])(baseClassNames, modifiers),
          style: style,
          onMoveX: this.onMove,
          onEnd: this.onEnd
        },
        hasHeader && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'View__header', style: { zIndex: this.props.children.length + 1 } },
          osname === __WEBPACK_IMPORTED_MODULE_7__lib_platform__["c" /* IOS */] && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'View__header-scrolltop', onClick: this.onScrollTop }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'View__header-in' },
            panels.map(function (panel, i) {
              return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])('View__header-item', {
                    'View__header-item--active': panel.id === activePanel,
                    'View__header-item--prev': panel.id === prevPanel,
                    'View__header-item--next': panel.id === nextPanel,
                    'View__header-item--swipe-back-prev': panel.id === _this3.state.swipeBackPrevPanel,
                    'View__header-item--swipe-back-next': panel.id === _this3.state.swipeBackNextPanel,
                    'View__header-item--swipe-back-success': _this3.state.swipingBackFinish === true,
                    'View__header-item--swipe-back-failed': _this3.state.swipingBackFinish === false
                  }, panel.props.header.className),
                  style: _this3.calcHeaderSwipeStyles(panel.id).item,
                  key: panel.key || panel.id || 'panel-header-' + i
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  { className: 'View__header-left' },
                  panel.props.header.icon && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      className: 'View__header-icon',
                      style: _this3.calcHeaderSwipeStyles(panel.id).leftIcon
                    },
                    panel.props.header.icon
                  ),
                  panel.props.header.left && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      className: 'View__header-left-in',
                      style: _this3.calcHeaderSwipeStyles(panel.id).leftIn
                    },
                    panel.props.header.left
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  {
                    className: 'View__header-title',
                    style: _this3.calcHeaderSwipeStyles(panel.id).title
                  },
                  panel.props.header.title
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  {
                    className: 'View__header-right',
                    style: _this3.calcHeaderSwipeStyles(panel.id).right
                  },
                  panel.props.header.right
                )
              );
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'View__panels' },
          panels.map(function (panel, i) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_classnames__["a" /* default */])('View__panel', _defineProperty({
                  'View__panel--active': panel.id === activePanel,
                  'View__panel--prev': panel.id === prevPanel,
                  'View__panel--next': panel.id === nextPanel,
                  'View__panel--swipe-back-prev': panel.id === _this3.state.swipeBackPrevPanel,
                  'View__panel--swipe-back-next': panel.id === _this3.state.swipeBackNextPanel,
                  'View__panel--swipe-back-success': _this3.state.swipingBackFinish === true,
                  'View__panel--swipe-back-failed': _this3.state.swipingBackFinish === false
                }, 'View__panel--theme-' + panel.props.theme, true)),
                style: Object.assign(_this3.calcPanelSwipeStyles(panel.id), { zIndex: i + 1 }),
                key: panel.key || panel.id || 'panel-' + i
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: 'View__panel-in' },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(panel, { ref: _this3.getRef, activePanel: activePanel, nextPanel: nextPanel })
              )
            );
          }),
          panels.filter(function (panel) {
            return panel.props.fixedLayout;
          }).map(function (panel, i) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(panel.props.fixedLayout, {
              key: panel.key || panel.id || 'panel-' + i,
              style: Object.assign({}, panel.props.fixedLayout.props.style, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__lib_removeObjectKeys__["a" /* default */])(_this3.calcPanelSwipeStyles(panel.id), ['boxShadow']), { zIndex: i + 1 }),
              isActive: panel.id === activePanel,
              isPrev: panel.id === prevPanel,
              isNext: panel.id === nextPanel
            });
          })
        ),
        hasPopout && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'View__popout' },
          popout
        )
      );
    }
  }], [{
    key: 'blurActiveElement',
    value: function blurActiveElement() {
      if (typeof window !== 'undefined' && document.activeElement) {
        document.activeElement.blur();
      }
    }
  }, {
    key: 'pickPanel',
    value: function pickPanel(id) {
      var elem = document.querySelector('#' + id);

      if (!elem) {
        console.warn('Element #' + id + ' not found');
      }

      return elem && elem.parentNode.parentNode;
    }
  }, {
    key: 'swipeBackPrevented',
    value: function swipeBackPrevented(target) {
      return target && target.closest('.Gallery, .Slider') !== null;
    }
  }]);

  return View;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

View.defaultProps = {
  style: {},
  children: null,
  popout: undefined,
  header: null,
  history: []
};
View.contextTypes = {
  isWebView: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
};
/* harmony default export */ __webpack_exports__["a"] = (View);

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = {
  accentBlue: '#528BCC',
  red: '#E64646',
  green: '#4BB34B',
  blue: '#5C9CE6',
  captionGray: '#909499'
};

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapTextNode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function wrapTextNode(node, props) {
  var TagName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'div';

  if (!node) {
    return null;
  }

  if (typeof node === 'string') {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      TagName,
      props,
      node
    );
  }

  return node;
}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

// Element.prototype.closest
(function () {
  if (window && !window.Element.prototype.closest) {
    window.Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }
      return null;
    };
  }
})();

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_removeObjectKeys__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var IosAlertInput = function (_Component) {
  _inherits(IosAlertInput, _Component);

  function IosAlertInput(props) {
    _classCallCheck(this, IosAlertInput);

    var _this = _possibleConstructorReturn(this, (IosAlertInput.__proto__ || Object.getPrototypeOf(IosAlertInput)).call(this, props));

    _this.onChange = function (e) {
      _this.setState({ value: e.target.value });
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.state = {
      value: props.initialValue || ''
    };
    return _this;
  }

  _createClass(IosAlertInput, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: this.props.className },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', _extends({
          className: 'AlertInput__self'
        }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_removeObjectKeys__["a" /* default */])(this.props, ['className', 'initialValue', 'onChange']), {
          value: this.state.value,
          onChange: this.onChange
        }))
      );
    }
  }]);

  return IosAlertInput;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

IosAlertInput.defaultProps = {
  type: 'text',
  initialValue: ''
};
/* harmony default export */ __webpack_exports__["a"] = (IosAlertInput);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_keyframes__ = __webpack_require__(26);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var AndroidSpinner = function (_Component) {
  _inherits(AndroidSpinner, _Component);

  function AndroidSpinner(props) {
    _classCallCheck(this, AndroidSpinner);

    var _this = _possibleConstructorReturn(this, (AndroidSpinner.__proto__ || Object.getPrototypeOf(AndroidSpinner)).call(this, props));

    var id = Math.round(Math.random() * 1e6).toString(16);
    var offset = Math.round(Math.PI * props.size);
    var c = 0.5 * props.size;

    _this.state = {
      c: c,
      id: id,
      offset: offset,
      animation: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_keyframes__["a" /* default */])('dash' + id, {
        '0%': {
          'stroke-dashoffset': offset
        },
        '50%': {
          'stroke-dashoffset': Math.round(0.25 * offset),
          'transform': 'rotate(135deg)'
        },
        '100%': {
          'stroke-dashoffset': offset,
          'transform': 'rotate(360deg)'
        }
      })
    };
    return _this;
  }

  _createClass(AndroidSpinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          size = _props.size,
          on = _props.on,
          progress = _props.progress,
          duration = _props.duration,
          strokeWidth = _props.strokeWidth;
      var _state = this.state,
          id = _state.id,
          offset = _state.offset,
          animation = _state.animation;


      var dashoffset = offset;
      var transform = '';

      if (!on) {
        dashoffset = Math.abs(0.02 * (progress - 50) * 0.75 * offset) + 0.25 * offset;

        if (progress <= 50) {
          transform = 'rotate(' + Math.round(progress * 135 / 50) + 'deg)';
        } else {
          transform = 'rotate(' + (135 + Math.round((progress - 50) * 360 / 50)) + 'deg)';
        }
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'g',
        {
          style: {
            width: size,
            height: size,
            transformOrigin: 0.5 * size + 'px ' + 0.5 * size + 'px',
            transform: transform
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: animation } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('circle', {
          className: 'Spinner__path',
          fill: 'none',
          stroke: color,
          strokeDasharray: offset,
          strokeDashoffset: dashoffset,
          strokeWidth: strokeWidth,
          style: {
            animationName: on ? 'dash' + id : 'none',
            animationTimingFunction: 'ease-in-out',
            animationDuration: duration + 's',
            animationIterationCount: 'infinite'
          },
          cx: 0.5 * size,
          cy: 0.5 * size,
          r: 0.5 * size - 0.5 * strokeWidth
        })
      );
    }
  }]);

  return AndroidSpinner;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AndroidSpinner.defaultProps = {
  color: '#5181b8',
  size: 38,
  strokeWidth: 4,
  duration: 1.4,
  on: true,
  progress: null
};
/* harmony default export */ __webpack_exports__["a"] = (AndroidSpinner);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var IOS_PART_HEIGHT = 0.275;

var IosSpinner = function (_Component) {
  _inherits(IosSpinner, _Component);

  function IosSpinner(props) {
    _classCallCheck(this, IosSpinner);

    var _this = _possibleConstructorReturn(this, (IosSpinner.__proto__ || Object.getPrototypeOf(IosSpinner)).call(this, props));

    var c = 0.5 * props.size;
    var r = Math.max(Math.floor(props.size * 0.075), 2);
    var ty = Math.ceil(-0.5 * (1 - IOS_PART_HEIGHT) * props.size);

    var iosStyles = [];

    for (var i = 0; i < 12; i++) {
      iosStyles.push({
        transform: 'rotate(' + i * 30 + ', ' + c + ', ' + c + ') translate(0 ' + ty + ')',
        rx: r,
        ry: r,
        style: {
          fill: props.color,
          animationDelay: Math.round(props.duration / 12 * 100 * (-11 + i)) / 100 + 's'
        }
      });
    }

    _this.state = { iosStyles: iosStyles };
    return _this;
  }

  _createClass(IosSpinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          on = _props.on,
          progress = _props.progress;
      var iosStyles = this.state.iosStyles;


      var parts = iosStyles;

      if (!on) {
        parts = iosStyles.slice(0, Math.round(progress / (100 / 12)));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'g',
        null,
        parts.map(function (item, i) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', _extends({ className: 'Spinner__part' }, item, { key: 'spinner-part-' + i }));
        })
      );
    }
  }]);

  return IosSpinner;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

IosSpinner.defaultProps = {
  color: '#262626',
  size: 20,
  duration: 1.4,
  on: true,
  progress: null
};
/* harmony default export */ __webpack_exports__["a"] = (IosSpinner);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return v; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_polyfills__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Root_Root__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return __WEBPACK_IMPORTED_MODULE_1__components_Root_Root__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_View_View__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return __WEBPACK_IMPORTED_MODULE_2__components_View_View__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_NativePopouts_NativePopouts__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NativePopouts", function() { return __WEBPACK_IMPORTED_MODULE_3__components_NativePopouts_NativePopouts__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ScrollView_ScrollView__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return __WEBPACK_IMPORTED_MODULE_4__components_ScrollView_ScrollView__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Group_Group__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return __WEBPACK_IMPORTED_MODULE_5__components_Group_Group__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Entity_Entity__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return __WEBPACK_IMPORTED_MODULE_6__components_Entity_Entity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_List_List__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return __WEBPACK_IMPORTED_MODULE_7__components_List_List__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ListItem_ListItem__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return __WEBPACK_IMPORTED_MODULE_8__components_ListItem_ListItem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_FormLayout_FormLayout__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormLayout", function() { return __WEBPACK_IMPORTED_MODULE_9__components_FormLayout_FormLayout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Icon_Icon__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return __WEBPACK_IMPORTED_MODULE_10__components_Icon_Icon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Text_Text__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return __WEBPACK_IMPORTED_MODULE_11__components_Text_Text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Div_Div__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Div", function() { return __WEBPACK_IMPORTED_MODULE_12__components_Div_Div__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Flex_Flex__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return __WEBPACK_IMPORTED_MODULE_13__components_Flex_Flex__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_BackButton_BackButton__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BackButton", function() { return __WEBPACK_IMPORTED_MODULE_14__components_BackButton_BackButton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_FixedLayout_FixedLayout__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FixedLayout", function() { return __WEBPACK_IMPORTED_MODULE_15__components_FixedLayout_FixedLayout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_Button_Button__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_16__components_Button_Button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_Checkbox_Checkbox__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return __WEBPACK_IMPORTED_MODULE_17__components_Checkbox_Checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_File_File__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return __WEBPACK_IMPORTED_MODULE_18__components_File_File__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_Input_Input__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_19__components_Input_Input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_Textarea_Textarea__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return __WEBPACK_IMPORTED_MODULE_20__components_Textarea_Textarea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_Radio_Radio__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return __WEBPACK_IMPORTED_MODULE_21__components_Radio_Radio__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_Select_Select__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return __WEBPACK_IMPORTED_MODULE_22__components_Select_Select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_Slider_Slider__ = __webpack_require__(62);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return __WEBPACK_IMPORTED_MODULE_23__components_Slider_Slider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_Tappable_Tappable__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tappable", function() { return __WEBPACK_IMPORTED_MODULE_24__components_Tappable_Tappable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_Touch_Touch__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return __WEBPACK_IMPORTED_MODULE_25__components_Touch_Touch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_ConfigProvider_ConfigProvider__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigProvider", function() { return __WEBPACK_IMPORTED_MODULE_26__components_ConfigProvider_ConfigProvider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_Alert_Alert__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return __WEBPACK_IMPORTED_MODULE_27__components_Alert_Alert__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_CloseButton_CloseButton__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CloseButton", function() { return __WEBPACK_IMPORTED_MODULE_28__components_CloseButton_CloseButton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_ActionSheet_ActionSheet__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheet", function() { return __WEBPACK_IMPORTED_MODULE_29__components_ActionSheet_ActionSheet__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_ActionSheetItem_ActionSheetItem__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetItem", function() { return __WEBPACK_IMPORTED_MODULE_30__components_ActionSheetItem_ActionSheetItem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_AlertInput_AlertInput__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AlertInput", function() { return __WEBPACK_IMPORTED_MODULE_31__components_AlertInput_AlertInput__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_Gallery_Gallery__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return __WEBPACK_IMPORTED_MODULE_32__components_Gallery_Gallery__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_Spinner_Spinner__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return __WEBPACK_IMPORTED_MODULE_33__components_Spinner_Spinner__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_ScreenSpinner_ScreenSpinner__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenSpinner", function() { return __WEBPACK_IMPORTED_MODULE_34__components_ScreenSpinner_ScreenSpinner__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__lib_classnames__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "classnames", function() { return __WEBPACK_IMPORTED_MODULE_35__lib_classnames__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__lib_keyframes__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return __WEBPACK_IMPORTED_MODULE_36__lib_keyframes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__lib_offset__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetRect", function() { return __WEBPACK_IMPORTED_MODULE_37__lib_offset__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__lib_platform__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "platform", function() { return __WEBPACK_IMPORTED_MODULE_38__lib_platform__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ANDROID", function() { return __WEBPACK_IMPORTED_MODULE_38__lib_platform__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IOS", function() { return __WEBPACK_IMPORTED_MODULE_38__lib_platform__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__lib_removeObjectKeys__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "removeObjectKeys", function() { return __WEBPACK_IMPORTED_MODULE_39__lib_removeObjectKeys__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__helpers_getClassName__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getClassName", function() { return __WEBPACK_IMPORTED_MODULE_40__helpers_getClassName__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__helpers_wrapTextNode__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "wrapTextNode", function() { return __WEBPACK_IMPORTED_MODULE_41__helpers_wrapTextNode__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__lib_requestAnimationFrame__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return __WEBPACK_IMPORTED_MODULE_42__lib_requestAnimationFrame__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__lib_webview__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isWebView", function() { return __WEBPACK_IMPORTED_MODULE_43__lib_webview__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__helpers_colors__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__helpers_colors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_44__helpers_colors__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return __WEBPACK_IMPORTED_MODULE_44__helpers_colors___default.a; });


/**
 * Layout
 */
















/**
 * Forms
 */









/**
 * Behavior
 */




/**
 * Misc
 */









/**
 * Utils
 */











var v = "0.7.0";

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = animate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__requestAnimationFrame__ = __webpack_require__(8);


function animate(options) {
  if (typeof window === 'undefined') {
    return;
  }

  var start = window.performance.now();

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__requestAnimationFrame__["a" /* default */])(function animate(time) {
    var timeFraction = (time - start) / options.duration;

    if (timeFraction > 1) {
      timeFraction = 1;
    }

    var progress = options.timing(timeFraction);

    options.draw(progress);

    if (timeFraction < 1) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__requestAnimationFrame__["a" /* default */])(animate);
    }
  });
}

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = brToNl;
function brToNl() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var regex = /<br\s*\/?>/gi;

  return str.replace(regex, '\n');
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(11);

var emptyObject = __webpack_require__(30);
var _invariant = __webpack_require__(6);

if (false) {
  var warning = require('fbjs/lib/warning');
}

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (false) {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (false) {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (false) {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (false) {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (false) {
          warning(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames[location],
            propName
          );
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (false) {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (process.env.NODE_ENV !== 'production') {
          warning(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (false) {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isInherited = name in Constructor;
      _invariant(
        !isInherited,
        'ReactClass: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be ' +
          'due to a mixin.',
        name
      );
      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (false) {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if (process.env.NODE_ENV !== 'production') {
            warning(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          if (process.env.NODE_ENV !== 'production') {
            warning(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (false) {
        warning(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (false) {
        warning(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (false) {
        // We allow auto-mocks to proceed as if they're returning null.
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (false) {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (false) {
      warning(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 90 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 93 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 94 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 95 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 97 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 108 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(19),
    arrayMap = __webpack_require__(107),
    isArray = __webpack_require__(131),
    isSymbol = __webpack_require__(133);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(112);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(114),
    hasUnicode = __webpack_require__(32),
    stringToArray = __webpack_require__(125),
    toString = __webpack_require__(14);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(108),
    deburr = __webpack_require__(130),
    words = __webpack_require__(135);

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(111);

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(155)))

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(123);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(19);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),
/* 122 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(118);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(109),
    hasUnicode = __webpack_require__(32),
    unicodeToArray = __webpack_require__(126);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
    rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var capitalize = __webpack_require__(129),
    createCompounder = __webpack_require__(116);

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

module.exports = camelCase;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(14),
    upperFirst = __webpack_require__(134);

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

module.exports = capitalize;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(117),
    toString = __webpack_require__(14);

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(31),
    getPrototype = __webpack_require__(119),
    isObjectLike = __webpack_require__(33);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(31),
    isObjectLike = __webpack_require__(33);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(115);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(110),
    hasUnicodeWord = __webpack_require__(121),
    toString = __webpack_require__(14),
    unicodeWords = __webpack_require__(127);

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (false) {
  var invariant = require('fbjs/lib/invariant');
  var warning = require('fbjs/lib/warning');
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (false) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



// React 15.5 references this module, and assumes PropTypes are still callable in production.
// Therefore we re-export development-only version with all the PropTypes checks here.
// However if one is migrating to the `prop-types` npm library, they will go through the
// `index.js` entry point, and it will branch depending on the environment.
var factory = __webpack_require__(139);
module.exports = function(isValidElement) {
  // It is still allowed in 15.5.
  var throwOnDirectAccess = false;
  return factory(isValidElement, throwOnDirectAccess);
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(12);
var invariant = __webpack_require__(6);
var ReactPropTypesSecret = __webpack_require__(34);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(12);
var invariant = __webpack_require__(6);
var warning = __webpack_require__(13);
var assign = __webpack_require__(11);

var ReactPropTypesSecret = __webpack_require__(34);
var checkPropTypes = __webpack_require__(136);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (false) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (false) {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       false ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       false ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ANIMATABLE_VALUES = ['columnCount', 'columnGap', 'columnRule', 'columnRuleColor', 'columnRuleWidth', 'columns', 'flex', 'flexBasis', 'flexGrow', 'flexShrink', 'order', 'perspective', 'perspectiveOrigin', 'perspectiveOriginX', 'perspectiveOriginY', 'scrollSnapCoordinate', 'scrollSnapDirection', 'textDecoration', 'textDecorationColor', 'transform', 'transformOrigin', 'transformOriginX', 'transformOriginY', 'transformOriginZ', 'transformStyle'];

var CSS_PROPERTIES = ['alignContent', 'alignItems', 'alignSelf', 'animation', 'animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction', 'appearance', 'aspectRatio', 'backfaceVisibility', 'backgroundClip', 'borderImage', 'borderImageSlice', 'boxShadow', 'columnCount', 'columnFill', 'columnGap', 'columnRule', 'columnRuleColor', 'columnRuleStyle', 'columnRuleWidth', 'columnSpan', 'columnWidth', 'columns', 'flex', 'flexBasis', 'flexDirection', 'flexFlow', 'flexGrow', 'flexShrink', 'flexWrap', 'fontFeatureSettings', 'fontKearning', 'fontVariantLigatures', 'justifyContent', 'grid', 'gridArea', 'gridAutoColumns', 'gridAutoFlow', 'gridAutoRows', 'gridColumn', 'gridColumnEnd', 'gridColumnStart', 'gridRow', 'gridRowEnd', 'gridRowStart', 'gridTemplate', 'gridTemplateAreas', 'gridTemplateColumns', 'gridTemplateRows', 'hyphens', 'lineBreak', 'perspective', 'perspectiveOrigin', 'perspectiveOriginX', 'perspectiveOriginY', 'rubyPosition', 'scrollSnapCoordinate', 'scrollSnapDestination', 'scrollSnapPoints', 'scrollSnapPointsX', 'scrollSnapPointsY', 'scrollSnapType', 'tabSize', 'textDecoration', 'textDecorationColor', 'textDecorationLine', 'textDecorationStyle', 'textOrientation', 'textSizeAdjust', 'transform', 'transition', 'transformOrigin', 'transformOriginX', 'transformOriginY', 'transformOriginZ', 'transformStyle', 'transitionProperty', 'transitionDuration', 'transitionTimingFunction', 'transitionDelay', 'userModify', 'userSelect'];

exports.ANIMATABLE_VALUES = ANIMATABLE_VALUES;
exports.CSS_PROPERTIES = CSS_PROPERTIES;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var prefixObject = {
  css: '',
  js: ''
};

if (typeof window !== 'undefined') {
  var styles = window.getComputedStyle(document.documentElement);

  var prefixString = Array.prototype.slice.call(styles).join('');
  var standardPrefixString = prefixString.match(/-(moz|webkit|ms)-/);
  var operaPrefixString = prefixString.match(styles.OLink === '' && ['', 'o']);
  var prefixMatch = standardPrefixString || operaPrefixString;

  var prefix = prefixMatch ? prefixMatch[1] : '';

  prefixObject = {
    css: '-' + prefix + '-',
    js: prefix
  };

  if (prefixObject.js !== 'ms') {
    prefixObject = _extends({}, prefixObject, {
      js: '' + prefixObject.js.charAt(0).toUpperCase() + prefixObject.js.slice(1)
    });
  }
}

exports.default = prefixObject;
module.exports = exports['default'];

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _camelCase = __webpack_require__(128);

var _camelCase2 = _interopRequireDefault(_camelCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * is the property supported, or is the value supported for the given property
 * 
 * @param {string} property
 * @param {number|string} value
 * @returns {boolean}
 */
var isSupported = function isSupported(property, value) {
  // Try the native standard method first
  if ('CSS' in window && 'supports' in window.CSS) {
    return window.CSS.supports(property, value);
  }

  // Check Opera's native method
  if ('supportsCSS' in window) {
    return window.supportsCSS(property, value);
  }

  // Convert to camel-case for DOM interactions
  var camelCaseProperty = (0, _camelCase2.default)(property);

  // Check if the property is supported
  var element = document.createElement('div');
  var support = camelCaseProperty in element.style;

  // Assign the property and value to invoke the CSS interpreter
  element.style.cssText = property + ':' + value;

  // Ensure both the property and value are
  // supported and return
  return support && element.style[camelCaseProperty] !== '';
};

exports.default = isSupported;
module.exports = exports['default'];

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */
function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}

var KeyEscapeUtils = {
  escape: escape,
  unescape: unescape
};

module.exports = KeyEscapeUtils;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var _prodInvariant = __webpack_require__(15);

var invariant = __webpack_require__(6);

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ?  false ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler
};

module.exports = PooledClass;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(11);

var ReactBaseClasses = __webpack_require__(36);
var ReactChildren = __webpack_require__(146);
var ReactDOMFactories = __webpack_require__(147);
var ReactElement = __webpack_require__(9);
var ReactPropTypes = __webpack_require__(148);
var ReactVersion = __webpack_require__(149);

var createReactClass = __webpack_require__(150);
var onlyChild = __webpack_require__(153);

var createElement = ReactElement.createElement;
var createFactory = ReactElement.createFactory;
var cloneElement = ReactElement.cloneElement;

if (false) {
  var lowPriorityWarning = require('./lowPriorityWarning');
  var canDefineProperty = require('./canDefineProperty');
  var ReactElementValidator = require('./ReactElementValidator');
  var didWarnPropTypesDeprecated = false;
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var __spread = _assign;
var createMixin = function (mixin) {
  return mixin;
};

if (false) {
  var warnedForSpread = false;
  var warnedForCreateMixin = false;
  __spread = function () {
    lowPriorityWarning(warnedForSpread, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.');
    warnedForSpread = true;
    return _assign.apply(null, arguments);
  };

  createMixin = function (mixin) {
    lowPriorityWarning(warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. ' + 'In React v16.0, it will be removed. ' + 'You can use this mixin directly instead. ' + 'See https://fb.me/createmixin-was-never-implemented for more info.');
    warnedForCreateMixin = true;
    return mixin;
  };
}

var React = {
  // Modern

  Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    toArray: ReactChildren.toArray,
    only: onlyChild
  },

  Component: ReactBaseClasses.Component,
  PureComponent: ReactBaseClasses.PureComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement.isValidElement,

  // Classic

  PropTypes: ReactPropTypes,
  createClass: createReactClass,
  createFactory: createFactory,
  createMixin: createMixin,

  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: ReactDOMFactories,

  version: ReactVersion,

  // Deprecated hook for JSX spread, don't use this for anything.
  __spread: __spread
};

if (false) {
  var warnedForCreateClass = false;
  if (canDefineProperty) {
    Object.defineProperty(React, 'PropTypes', {
      get: function () {
        lowPriorityWarning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated,' + ' and will be removed in  React v16.0.' + ' Use the latest available v15.* prop-types package from npm instead.' + ' For info on usage, compatibility, migration and more, see ' + 'https://fb.me/prop-types-docs');
        didWarnPropTypesDeprecated = true;
        return ReactPropTypes;
      }
    });

    Object.defineProperty(React, 'createClass', {
      get: function () {
        lowPriorityWarning(warnedForCreateClass, 'Accessing createClass via the main React package is deprecated,' + ' and will be removed in React v16.0.' + " Use a plain JavaScript class instead. If you're not yet " + 'ready to migrate, create-react-class v15.* is available ' + 'on npm as a temporary, drop-in replacement. ' + 'For more info see https://fb.me/react-create-class');
        warnedForCreateClass = true;
        return createReactClass;
      }
    });
  }

  // React.DOM factories are deprecated. Wrap these methods so that
  // invocations of the React.DOM namespace and alert users to switch
  // to the `react-dom-factories` package.
  React.DOM = {};
  var warnedForFactories = false;
  Object.keys(ReactDOMFactories).forEach(function (factory) {
    React.DOM[factory] = function () {
      if (!warnedForFactories) {
        lowPriorityWarning(false, 'Accessing factories like React.DOM.%s has been deprecated ' + 'and will be removed in v16.0+. Use the ' + 'react-dom-factories package instead. ' + ' Version 1.0 provides a drop-in replacement.' + ' For more info, see https://fb.me/react-dom-factories', factory);
        warnedForFactories = true;
      }
      return ReactDOMFactories[factory].apply(ReactDOMFactories, arguments);
    };
  });
}

module.exports = React;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var PooledClass = __webpack_require__(144);
var ReactElement = __webpack_require__(9);

var emptyFunction = __webpack_require__(12);
var traverseAllChildren = __webpack_require__(154);

var twoArgumentPooler = PooledClass.twoArgumentPooler;
var fourArgumentPooler = PooledClass.fourArgumentPooler;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement.isValidElement(mappedChild)) {
      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, forEachSingleChildDummy, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray
};

module.exports = ReactChildren;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var ReactElement = __webpack_require__(9);

/**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */
var createDOMFactory = ReactElement.createFactory;
if (false) {
  var ReactElementValidator = require('./ReactElementValidator');
  createDOMFactory = ReactElementValidator.createFactory;
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 *
 * @public
 */
var ReactDOMFactories = {
  a: createDOMFactory('a'),
  abbr: createDOMFactory('abbr'),
  address: createDOMFactory('address'),
  area: createDOMFactory('area'),
  article: createDOMFactory('article'),
  aside: createDOMFactory('aside'),
  audio: createDOMFactory('audio'),
  b: createDOMFactory('b'),
  base: createDOMFactory('base'),
  bdi: createDOMFactory('bdi'),
  bdo: createDOMFactory('bdo'),
  big: createDOMFactory('big'),
  blockquote: createDOMFactory('blockquote'),
  body: createDOMFactory('body'),
  br: createDOMFactory('br'),
  button: createDOMFactory('button'),
  canvas: createDOMFactory('canvas'),
  caption: createDOMFactory('caption'),
  cite: createDOMFactory('cite'),
  code: createDOMFactory('code'),
  col: createDOMFactory('col'),
  colgroup: createDOMFactory('colgroup'),
  data: createDOMFactory('data'),
  datalist: createDOMFactory('datalist'),
  dd: createDOMFactory('dd'),
  del: createDOMFactory('del'),
  details: createDOMFactory('details'),
  dfn: createDOMFactory('dfn'),
  dialog: createDOMFactory('dialog'),
  div: createDOMFactory('div'),
  dl: createDOMFactory('dl'),
  dt: createDOMFactory('dt'),
  em: createDOMFactory('em'),
  embed: createDOMFactory('embed'),
  fieldset: createDOMFactory('fieldset'),
  figcaption: createDOMFactory('figcaption'),
  figure: createDOMFactory('figure'),
  footer: createDOMFactory('footer'),
  form: createDOMFactory('form'),
  h1: createDOMFactory('h1'),
  h2: createDOMFactory('h2'),
  h3: createDOMFactory('h3'),
  h4: createDOMFactory('h4'),
  h5: createDOMFactory('h5'),
  h6: createDOMFactory('h6'),
  head: createDOMFactory('head'),
  header: createDOMFactory('header'),
  hgroup: createDOMFactory('hgroup'),
  hr: createDOMFactory('hr'),
  html: createDOMFactory('html'),
  i: createDOMFactory('i'),
  iframe: createDOMFactory('iframe'),
  img: createDOMFactory('img'),
  input: createDOMFactory('input'),
  ins: createDOMFactory('ins'),
  kbd: createDOMFactory('kbd'),
  keygen: createDOMFactory('keygen'),
  label: createDOMFactory('label'),
  legend: createDOMFactory('legend'),
  li: createDOMFactory('li'),
  link: createDOMFactory('link'),
  main: createDOMFactory('main'),
  map: createDOMFactory('map'),
  mark: createDOMFactory('mark'),
  menu: createDOMFactory('menu'),
  menuitem: createDOMFactory('menuitem'),
  meta: createDOMFactory('meta'),
  meter: createDOMFactory('meter'),
  nav: createDOMFactory('nav'),
  noscript: createDOMFactory('noscript'),
  object: createDOMFactory('object'),
  ol: createDOMFactory('ol'),
  optgroup: createDOMFactory('optgroup'),
  option: createDOMFactory('option'),
  output: createDOMFactory('output'),
  p: createDOMFactory('p'),
  param: createDOMFactory('param'),
  picture: createDOMFactory('picture'),
  pre: createDOMFactory('pre'),
  progress: createDOMFactory('progress'),
  q: createDOMFactory('q'),
  rp: createDOMFactory('rp'),
  rt: createDOMFactory('rt'),
  ruby: createDOMFactory('ruby'),
  s: createDOMFactory('s'),
  samp: createDOMFactory('samp'),
  script: createDOMFactory('script'),
  section: createDOMFactory('section'),
  select: createDOMFactory('select'),
  small: createDOMFactory('small'),
  source: createDOMFactory('source'),
  span: createDOMFactory('span'),
  strong: createDOMFactory('strong'),
  style: createDOMFactory('style'),
  sub: createDOMFactory('sub'),
  summary: createDOMFactory('summary'),
  sup: createDOMFactory('sup'),
  table: createDOMFactory('table'),
  tbody: createDOMFactory('tbody'),
  td: createDOMFactory('td'),
  textarea: createDOMFactory('textarea'),
  tfoot: createDOMFactory('tfoot'),
  th: createDOMFactory('th'),
  thead: createDOMFactory('thead'),
  time: createDOMFactory('time'),
  title: createDOMFactory('title'),
  tr: createDOMFactory('tr'),
  track: createDOMFactory('track'),
  u: createDOMFactory('u'),
  ul: createDOMFactory('ul'),
  'var': createDOMFactory('var'),
  video: createDOMFactory('video'),
  wbr: createDOMFactory('wbr'),

  // SVG
  circle: createDOMFactory('circle'),
  clipPath: createDOMFactory('clipPath'),
  defs: createDOMFactory('defs'),
  ellipse: createDOMFactory('ellipse'),
  g: createDOMFactory('g'),
  image: createDOMFactory('image'),
  line: createDOMFactory('line'),
  linearGradient: createDOMFactory('linearGradient'),
  mask: createDOMFactory('mask'),
  path: createDOMFactory('path'),
  pattern: createDOMFactory('pattern'),
  polygon: createDOMFactory('polygon'),
  polyline: createDOMFactory('polyline'),
  radialGradient: createDOMFactory('radialGradient'),
  rect: createDOMFactory('rect'),
  stop: createDOMFactory('stop'),
  svg: createDOMFactory('svg'),
  text: createDOMFactory('text'),
  tspan: createDOMFactory('tspan')
};

module.exports = ReactDOMFactories;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _require = __webpack_require__(9),
    isValidElement = _require.isValidElement;

var factory = __webpack_require__(137);

module.exports = factory(isValidElement);

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



module.exports = '15.6.2';

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _require = __webpack_require__(36),
    Component = _require.Component;

var _require2 = __webpack_require__(9),
    isValidElement = _require2.isValidElement;

var ReactNoopUpdateQueue = __webpack_require__(39);
var factory = __webpack_require__(75);

module.exports = factory(Component, isValidElement, ReactNoopUpdateQueue);

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/* global Symbol */

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

module.exports = getIteratorFn;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

if (false) {
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = lowPriorityWarning;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var _prodInvariant = __webpack_require__(15);

var ReactElement = __webpack_require__(9);

var invariant = __webpack_require__(6);

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !ReactElement.isValidElement(children) ?  false ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
  return children;
}

module.exports = onlyChild;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _prodInvariant = __webpack_require__(15);

var ReactCurrentOwner = __webpack_require__(37);
var REACT_ELEMENT_TYPE = __webpack_require__(38);

var getIteratorFn = __webpack_require__(151);
var invariant = __webpack_require__(6);
var KeyEscapeUtils = __webpack_require__(143);
var warning = __webpack_require__(13);

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return KeyEscapeUtils.escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if (false) {
          var mapsAsChildrenAddendum = '';
          if (ReactCurrentOwner.current) {
            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
          didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      if (false) {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner.current) {
          var name = ReactCurrentOwner.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
       true ?  false ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

module.exports = traverseAllChildren;

/***/ }),
/* 155 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});
//# sourceMappingURL=vkui.js.map