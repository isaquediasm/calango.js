(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("calango", [], factory);
	else if(typeof exports === 'object')
		exports["calango"] = factory();
	else
		root["calango"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/validate.js":
/*!*********************************!*\
  !*** ./src/helpers/validate.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* harmony default export */ __webpack_exports__["default"] = ({
  expectArray: function expectArray(prop) {
    if (!Array.isArray(prop)) {
      throw new TypeError("Expected an array as first argument and ".concat(_typeof(prop), " was received instead"));
    }
  },
  expectObject: function expectObject(prop) {
    if (_typeof(prop) !== 'object') {
      throw new TypeError("Sloth expected an object as second argument and ".concat(_typeof(prop), " was received instead"));
    }
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/methods */ "./src/lib/methods.js");
/* harmony import */ var _helpers_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/validate */ "./src/helpers/validate.js");


/**
 *
 *
 * @param {*} [arr=[]]
 * @param {*} [config={}]
 * @returns
 */

function sloth(arr, config) {
  _helpers_validate__WEBPACK_IMPORTED_MODULE_1__["default"].expectArray(arr);
  !!config && _helpers_validate__WEBPACK_IMPORTED_MODULE_1__["default"].expectObject(config);
  var methods = {};
  Object.defineProperties(methods, Object(_lib_methods__WEBPACK_IMPORTED_MODULE_0__["getMethods"])(arr, config));
  return methods;
}

/* harmony default export */ __webpack_exports__["default"] = (sloth);

/***/ }),

/***/ "./src/lib/group.js":
/*!**************************!*\
  !*** ./src/lib/group.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_group_groupByProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/group/groupByProp */ "./src/utils/group/groupByProp.js");
/* harmony import */ var _utils_group_groupByChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/group/groupByChild */ "./src/utils/group/groupByChild.js");



function group(arr) {
  return function (prop, childProp) {
    if (!arr[0].hasOwnProperty(prop)) {
      return arr;
    }

    if (!Array.isArray(arr[0][prop])) {
      return Object(_utils_group_groupByProp__WEBPACK_IMPORTED_MODULE_0__["default"])(arr, prop);
    }

    if (Array.isArray(arr[0][prop]) && childProp) {
      return Object(_utils_group_groupByChild__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, prop, childProp);
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (group);

/***/ }),

/***/ "./src/lib/methods.js":
/*!****************************!*\
  !*** ./src/lib/methods.js ***!
  \****************************/
/*! exports provided: getMethods, methods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMethods", function() { return getMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "methods", function() { return methods; });
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group */ "./src/lib/group.js");
/* harmony import */ var _toMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toMap */ "./src/lib/toMap.js");
/* harmony import */ var _utils_array_arrayToObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/array/arrayToObject */ "./src/utils/array/arrayToObject.js");
/* harmony import */ var _utils_array_arrayToObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_array_arrayToObject__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var methods = function methods(arr) {
  return {
    value: {
      value: arr,
      writable: false,
      enumerable: true
    },
    group: {
      value: Object(_group__WEBPACK_IMPORTED_MODULE_0__["default"])(arr),
      writable: false,
      enumerable: true
    },
    toMap: {
      value: Object(_toMap__WEBPACK_IMPORTED_MODULE_1__["default"])(arr),
      writable: false,
      enumerable: true
    }
  };
};

function filterBasedOnList(config) {
  var _config$whitelist = config.whitelist,
      whitelist = _config$whitelist === void 0 ? [] : _config$whitelist,
      _config$blacklist = config.blacklist,
      blacklist = _config$blacklist === void 0 ? [] : _config$blacklist;

  if (whitelist.length) {
    return function (method) {
      return whitelist.includes(method);
    };
  }

  if (blacklist.length) {
    return function (method) {
      return !blacklist.includes(method);
    };
  }

  return Boolean;
}

function getMethods() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var methodsList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : methods(arr);
  if (!config.whitelist && !config.blacklist) return methodsList;
  return _utils_array_arrayToObject__WEBPACK_IMPORTED_MODULE_2___default()(Object.keys(methodsList).filter(filterBasedOnList(config)), function (key) {
    return _defineProperty({}, key, methodsList[key]);
  });
}



/***/ }),

/***/ "./src/lib/toMap.js":
/*!**************************!*\
  !*** ./src/lib/toMap.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_array_arrayToObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/array/arrayToObject */ "./src/utils/array/arrayToObject.js");
/* harmony import */ var _utils_array_arrayToObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_array_arrayToObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_object_createObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object/createObject */ "./src/utils/object/createObject.js");
/* harmony import */ var _utils_object_createObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_object_createObject__WEBPACK_IMPORTED_MODULE_1__);


/**
 *  Transform an array into a key:value object
 *
 * @param {array} arr Array to be passed
 * @param {string} key The property to be used as key
 */

function toMap(arr) {
  return function (key) {
    return _utils_array_arrayToObject__WEBPACK_IMPORTED_MODULE_0___default()(arr, function (item) {
      return _utils_object_createObject__WEBPACK_IMPORTED_MODULE_1___default()(item[key], item);
    });
  };
}

/* harmony default export */ __webpack_exports__["default"] = (toMap);

/***/ }),

/***/ "./src/utils/array/arrayToObject.js":
/*!******************************************!*\
  !*** ./src/utils/array/arrayToObject.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Create an object, spreads and maps an array
 *
 * @param {array} arr
 * @param {function} fn
 */
function arrayToObject(arr, fn) {
  return Object.assign.apply(Object, _toConsumableArray(arr.map(fn)));
}

module.exports = arrayToObject;

/***/ }),

/***/ "./src/utils/group/groupByChild.js":
/*!*****************************************!*\
  !*** ./src/utils/group/groupByChild.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _groupByProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groupByProp */ "./src/utils/group/groupByProp.js");
/* harmony import */ var _object_addParentAndOmitProp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/addParentAndOmitProp */ "./src/utils/object/addParentAndOmitProp.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




function groupByChild(arr, prop, childProp) {
  var childrenNames = arr.map(function (item) {
    return item[prop].map(Object(_object_addParentAndOmitProp__WEBPACK_IMPORTED_MODULE_1__["default"])(item, prop));
  }).reduce(function (prev, current) {
    return [].concat(_toConsumableArray(prev), _toConsumableArray(current.map(function (val) {
      return val;
    })));
  }, []);
  return Object(_groupByProp__WEBPACK_IMPORTED_MODULE_0__["default"])(childrenNames, childProp);
}

/* harmony default export */ __webpack_exports__["default"] = (groupByChild);

/***/ }),

/***/ "./src/utils/group/groupByProp.js":
/*!****************************************!*\
  !*** ./src/utils/group/groupByProp.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_arrayToObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/arrayToObject */ "./src/utils/array/arrayToObject.js");
/* harmony import */ var _array_arrayToObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_array_arrayToObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _object_createObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/createObject */ "./src/utils/object/createObject.js");
/* harmony import */ var _object_createObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_object_createObject__WEBPACK_IMPORTED_MODULE_1__);



function groupByProp(arr, prop) {
  return _array_arrayToObject__WEBPACK_IMPORTED_MODULE_0___default()(arr, function (item) {
    return _object_createObject__WEBPACK_IMPORTED_MODULE_1___default()(item[prop], arr.filter(function (val) {
      return val[prop] === item[prop];
    }));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (groupByProp);

/***/ }),

/***/ "./src/utils/object/addParentAndOmitProp.js":
/*!**************************************************!*\
  !*** ./src/utils/object/addParentAndOmitProp.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _object_omit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/omit */ "./src/utils/object/omit.js");


function addParentAndOmitProp(parentObj, prop) {
  return function (val) {
    return Object.assign(val, {
      parent: Object(_object_omit__WEBPACK_IMPORTED_MODULE_0__["default"])(parentObj, prop)
    });
  };
}

/* harmony default export */ __webpack_exports__["default"] = (addParentAndOmitProp);

/***/ }),

/***/ "./src/utils/object/createObject.js":
/*!******************************************!*\
  !*** ./src/utils/object/createObject.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Create a key based object
 *
 * @param {string} key
 * c - the key to create the object
 * @param {any} props
 */
function createObject(key, props) {
  return _defineProperty({}, key, props);
}

module.exports = createObject;

/***/ }),

/***/ "./src/utils/object/omit.js":
/*!**********************************!*\
  !*** ./src/utils/object/omit.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function omit(obj, omitKey) {
  return Object.keys(obj).reduce(function (result, key) {
    if (key !== omitKey) {
      result[key] = obj[key];
    }

    return result;
  }, {});
}

/* harmony default export */ __webpack_exports__["default"] = (omit);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxhbmdvL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jYWxhbmdvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhbGFuZ28vLi9zcmMvaGVscGVycy92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9jYWxhbmdvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2NhbGFuZ28vLi9zcmMvbGliL2dyb3VwLmpzIiwid2VicGFjazovL2NhbGFuZ28vLi9zcmMvbGliL21ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vY2FsYW5nby8uL3NyYy9saWIvdG9NYXAuanMiLCJ3ZWJwYWNrOi8vY2FsYW5nby8uL3NyYy91dGlscy9hcnJheS9hcnJheVRvT2JqZWN0LmpzIiwid2VicGFjazovL2NhbGFuZ28vLi9zcmMvdXRpbHMvZ3JvdXAvZ3JvdXBCeUNoaWxkLmpzIiwid2VicGFjazovL2NhbGFuZ28vLi9zcmMvdXRpbHMvZ3JvdXAvZ3JvdXBCeVByb3AuanMiLCJ3ZWJwYWNrOi8vY2FsYW5nby8uL3NyYy91dGlscy9vYmplY3QvYWRkUGFyZW50QW5kT21pdFByb3AuanMiLCJ3ZWJwYWNrOi8vY2FsYW5nby8uL3NyYy91dGlscy9vYmplY3QvY3JlYXRlT2JqZWN0LmpzIiwid2VicGFjazovL2NhbGFuZ28vLi9zcmMvdXRpbHMvb2JqZWN0L29taXQuanMiXSwibmFtZXMiOlsiZXhwZWN0QXJyYXkiLCJwcm9wIiwiQXJyYXkiLCJpc0FycmF5IiwiVHlwZUVycm9yIiwiZXhwZWN0T2JqZWN0Iiwic2xvdGgiLCJhcnIiLCJjb25maWciLCJ2YWxpZGF0ZSIsIm1ldGhvZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZ2V0TWV0aG9kcyIsImdyb3VwIiwiY2hpbGRQcm9wIiwiaGFzT3duUHJvcGVydHkiLCJncm91cEJ5UHJvcCIsImdyb3VwQnlDaGlsZCIsInZhbHVlIiwid3JpdGFibGUiLCJlbnVtZXJhYmxlIiwidG9NYXAiLCJmaWx0ZXJCYXNlZE9uTGlzdCIsIndoaXRlbGlzdCIsImJsYWNrbGlzdCIsImxlbmd0aCIsIm1ldGhvZCIsImluY2x1ZGVzIiwiQm9vbGVhbiIsIm1ldGhvZHNMaXN0IiwiYXJyYXlUb09iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJpdGVtIiwiY3JlYXRlT2JqZWN0IiwiZm4iLCJhc3NpZ24iLCJtYXAiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2hpbGRyZW5OYW1lcyIsImFkZFBhcmVudEFuZE9taXRQcm9wIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJ2YWwiLCJwYXJlbnRPYmoiLCJwYXJlbnQiLCJvbWl0IiwicHJvcHMiLCJvYmoiLCJvbWl0S2V5IiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7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LENBQUNsQyxJQUFELENBQXRCO0FBQUEsS0FBZCxDQUFiLENBRGdCO0FBQUEsR0FBVixDQUFwQjtBQUdEOztBQUVjZ0IsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBOztBQUVBLFNBQVMwQixvQkFBVCxDQUE4QkssU0FBOUIsRUFBeUMvQyxJQUF6QyxFQUErQztBQUM3QyxTQUFPLFVBQUE4QyxHQUFHO0FBQUEsV0FBSXBDLE1BQU0sQ0FBQzJCLE1BQVAsQ0FBY1MsR0FBZCxFQUFtQjtBQUFFRSxZQUFNLEVBQUVDLDREQUFJLENBQUNGLFNBQUQsRUFBWS9DLElBQVo7QUFBZCxLQUFuQixDQUFKO0FBQUEsR0FBVjtBQUNEOztBQUVjMEMsbUZBQWYsRTs7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7O0FBUUEsU0FBU1AsWUFBVCxDQUFzQkYsR0FBdEIsRUFBMkJpQixLQUEzQixFQUFrQztBQUNoQyw2QkFBVWpCLEdBQVYsRUFBZ0JpQixLQUFoQjtBQUNEOztBQUVEWCxNQUFNLENBQUNDLE9BQVAsR0FBaUJMLFlBQWpCLEM7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUEsU0FBU2MsSUFBVCxDQUFjRSxHQUFkLEVBQW1CQyxPQUFuQixFQUE0QjtBQUMxQixTQUFPMUMsTUFBTSxDQUFDcUIsSUFBUCxDQUFZb0IsR0FBWixFQUFpQlIsTUFBakIsQ0FBd0IsVUFBQ1UsTUFBRCxFQUFTcEIsR0FBVCxFQUFpQjtBQUM5QyxRQUFJQSxHQUFHLEtBQUttQixPQUFaLEVBQXFCO0FBQ25CQyxZQUFNLENBQUNwQixHQUFELENBQU4sR0FBY2tCLEdBQUcsQ0FBQ2xCLEdBQUQsQ0FBakI7QUFDRDs7QUFDRCxXQUFPb0IsTUFBUDtBQUNELEdBTE0sRUFLSixFQUxJLENBQVA7QUFNRDs7QUFFY0osbUVBQWYsRSIsImZpbGUiOiJjYWxhbmdvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjYWxhbmdvXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNhbGFuZ29cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY2FsYW5nb1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZXhwZWN0QXJyYXkocHJvcCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgYEV4cGVjdGVkIGFuIGFycmF5IGFzIGZpcnN0IGFyZ3VtZW50IGFuZCAke3R5cGVvZiBwcm9wfSB3YXMgcmVjZWl2ZWQgaW5zdGVhZGBcbiAgICAgICk7XG4gICAgfVxuICB9LFxuICBleHBlY3RPYmplY3QocHJvcCkge1xuICAgIGlmICh0eXBlb2YgcHJvcCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIGBTbG90aCBleHBlY3RlZCBhbiBvYmplY3QgYXMgc2Vjb25kIGFyZ3VtZW50IGFuZCAke3R5cGVvZiBwcm9wfSB3YXMgcmVjZWl2ZWQgaW5zdGVhZGBcbiAgICAgICk7XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IHsgZ2V0TWV0aG9kcyB9IGZyb20gJy4vbGliL21ldGhvZHMnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vaGVscGVycy92YWxpZGF0ZSc7XG4vKipcbiAqXG4gKlxuICogQHBhcmFtIHsqfSBbYXJyPVtdXVxuICogQHBhcmFtIHsqfSBbY29uZmlnPXt9XVxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gc2xvdGgoYXJyLCBjb25maWcpIHtcbiAgdmFsaWRhdGUuZXhwZWN0QXJyYXkoYXJyKTtcbiAgISFjb25maWcgJiYgdmFsaWRhdGUuZXhwZWN0T2JqZWN0KGNvbmZpZyk7XG5cbiAgY29uc3QgbWV0aG9kcyA9IHt9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1ldGhvZHMsIGdldE1ldGhvZHMoYXJyLCBjb25maWcpKTtcbiAgcmV0dXJuIG1ldGhvZHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNsb3RoO1xuIiwiaW1wb3J0IGdyb3VwQnlQcm9wIGZyb20gJy4uL3V0aWxzL2dyb3VwL2dyb3VwQnlQcm9wJztcbmltcG9ydCBncm91cEJ5Q2hpbGQgZnJvbSAnLi4vdXRpbHMvZ3JvdXAvZ3JvdXBCeUNoaWxkJztcblxuZnVuY3Rpb24gZ3JvdXAoYXJyKSB7XG4gIHJldHVybiAocHJvcCwgY2hpbGRQcm9wKSA9PiB7XG4gICAgaWYgKCFhcnJbMF0uaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFyclswXVtwcm9wXSkpIHtcbiAgICAgIHJldHVybiBncm91cEJ5UHJvcChhcnIsIHByb3ApO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGFyclswXVtwcm9wXSkgJiYgY2hpbGRQcm9wKSB7XG4gICAgICByZXR1cm4gZ3JvdXBCeUNoaWxkKGFyciwgcHJvcCwgY2hpbGRQcm9wKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdyb3VwO1xuIiwiaW1wb3J0IGdyb3VwIGZyb20gJy4vZ3JvdXAnO1xuaW1wb3J0IHRvTWFwIGZyb20gJy4vdG9NYXAnO1xuaW1wb3J0IGFycmF5VG9PYmplY3QgZnJvbSAnLi4vdXRpbHMvYXJyYXkvYXJyYXlUb09iamVjdCc7XG5cbmNvbnN0IG1ldGhvZHMgPSBhcnIgPT4gKHtcbiAgdmFsdWU6IHtcbiAgICB2YWx1ZTogYXJyLFxuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG4gIH0sXG4gIGdyb3VwOiB7XG4gICAgdmFsdWU6IGdyb3VwKGFyciksXG4gICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfSxcbiAgdG9NYXA6IHtcbiAgICB2YWx1ZTogdG9NYXAoYXJyKSxcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9XG59KTtcblxuZnVuY3Rpb24gZmlsdGVyQmFzZWRPbkxpc3QoY29uZmlnKSB7XG4gIGNvbnN0IHsgd2hpdGVsaXN0ID0gW10sIGJsYWNrbGlzdCA9IFtdIH0gPSBjb25maWc7XG5cbiAgaWYgKHdoaXRlbGlzdC5sZW5ndGgpIHtcbiAgICByZXR1cm4gbWV0aG9kID0+IHdoaXRlbGlzdC5pbmNsdWRlcyhtZXRob2QpO1xuICB9XG5cbiAgaWYgKGJsYWNrbGlzdC5sZW5ndGgpIHtcbiAgICByZXR1cm4gbWV0aG9kID0+ICFibGFja2xpc3QuaW5jbHVkZXMobWV0aG9kKTtcbiAgfVxuXG4gIHJldHVybiBCb29sZWFuO1xufVxuXG5mdW5jdGlvbiBnZXRNZXRob2RzKGFyciA9IFtdLCBjb25maWcgPSB7fSwgbWV0aG9kc0xpc3QgPSBtZXRob2RzKGFycikpIHtcbiAgaWYgKCFjb25maWcud2hpdGVsaXN0ICYmICFjb25maWcuYmxhY2tsaXN0KSByZXR1cm4gbWV0aG9kc0xpc3Q7XG5cbiAgcmV0dXJuIGFycmF5VG9PYmplY3QoXG4gICAgT2JqZWN0LmtleXMobWV0aG9kc0xpc3QpLmZpbHRlcihmaWx0ZXJCYXNlZE9uTGlzdChjb25maWcpKSxcbiAgICBrZXkgPT4gKHsgW2tleV06IG1ldGhvZHNMaXN0W2tleV0gfSlcbiAgKTtcbn1cblxuZXhwb3J0IHsgZ2V0TWV0aG9kcywgbWV0aG9kcyB9O1xuIiwiaW1wb3J0IGFycmF5VG9PYmplY3QgZnJvbSAnLi4vdXRpbHMvYXJyYXkvYXJyYXlUb09iamVjdCc7XG5pbXBvcnQgY3JlYXRlT2JqZWN0IGZyb20gJy4uL3V0aWxzL29iamVjdC9jcmVhdGVPYmplY3QnO1xuXG4vKipcbiAqICBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIGtleTp2YWx1ZSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnIgQXJyYXkgdG8gYmUgcGFzc2VkXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBwcm9wZXJ0eSB0byBiZSB1c2VkIGFzIGtleVxuICovXG5mdW5jdGlvbiB0b01hcChhcnIpIHtcbiAgcmV0dXJuIGtleSA9PiBhcnJheVRvT2JqZWN0KGFyciwgaXRlbSA9PiBjcmVhdGVPYmplY3QoaXRlbVtrZXldLCBpdGVtKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvTWFwO1xuIiwiLyoqXG4gKiBDcmVhdGUgYW4gb2JqZWN0LCBzcHJlYWRzIGFuZCBtYXBzIGFuIGFycmF5XG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICovXG5cbmZ1bmN0aW9uIGFycmF5VG9PYmplY3QoYXJyLCBmbikge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbiguLi5hcnIubWFwKGZuKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlUb09iamVjdDtcbiIsImltcG9ydCBncm91cEJ5UHJvcCBmcm9tICcuL2dyb3VwQnlQcm9wJztcbmltcG9ydCBhZGRQYXJlbnRBbmRPbWl0UHJvcCBmcm9tICcuLi9vYmplY3QvYWRkUGFyZW50QW5kT21pdFByb3AnO1xuXG5mdW5jdGlvbiBncm91cEJ5Q2hpbGQoYXJyLCBwcm9wLCBjaGlsZFByb3ApIHtcbiAgY29uc3QgY2hpbGRyZW5OYW1lcyA9IGFyclxuICAgIC5tYXAoaXRlbSA9PiBpdGVtW3Byb3BdLm1hcChhZGRQYXJlbnRBbmRPbWl0UHJvcChpdGVtLCBwcm9wKSkpXG4gICAgLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgcmV0dXJuIFsuLi5wcmV2LCAuLi5jdXJyZW50Lm1hcCh2YWwgPT4gdmFsKV07XG4gICAgfSwgW10pO1xuXG4gIHJldHVybiBncm91cEJ5UHJvcChjaGlsZHJlbk5hbWVzLCBjaGlsZFByb3ApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBncm91cEJ5Q2hpbGQ7XG4iLCJpbXBvcnQgYXJyYXlUb09iamVjdCBmcm9tICcuLi9hcnJheS9hcnJheVRvT2JqZWN0JztcbmltcG9ydCBjcmVhdGVPYmplY3QgZnJvbSAnLi4vb2JqZWN0L2NyZWF0ZU9iamVjdCc7XG5cbmZ1bmN0aW9uIGdyb3VwQnlQcm9wKGFyciwgcHJvcCkge1xuICByZXR1cm4gYXJyYXlUb09iamVjdChhcnIsIGl0ZW0gPT5cbiAgICBjcmVhdGVPYmplY3QoaXRlbVtwcm9wXSwgYXJyLmZpbHRlcih2YWwgPT4gdmFsW3Byb3BdID09PSBpdGVtW3Byb3BdKSlcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ3JvdXBCeVByb3A7XG4iLCJpbXBvcnQgb21pdCBmcm9tICcuLi9vYmplY3Qvb21pdCc7XG5cbmZ1bmN0aW9uIGFkZFBhcmVudEFuZE9taXRQcm9wKHBhcmVudE9iaiwgcHJvcCkge1xuICByZXR1cm4gdmFsID0+IE9iamVjdC5hc3NpZ24odmFsLCB7IHBhcmVudDogb21pdChwYXJlbnRPYmosIHByb3ApIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRQYXJlbnRBbmRPbWl0UHJvcDtcbiIsIi8qKlxuICogQ3JlYXRlIGEga2V5IGJhc2VkIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIGMgLSB0aGUga2V5IHRvIGNyZWF0ZSB0aGUgb2JqZWN0XG4gKiBAcGFyYW0ge2FueX0gcHJvcHNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVPYmplY3Qoa2V5LCBwcm9wcykge1xuICByZXR1cm4geyBba2V5XTogcHJvcHMgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVPYmplY3Q7XG4iLCJmdW5jdGlvbiBvbWl0KG9iaiwgb21pdEtleSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgaWYgKGtleSAhPT0gb21pdEtleSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvbWl0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==