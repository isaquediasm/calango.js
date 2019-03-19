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
      throw new TypeError("Calango expected an object as second argument and ".concat(_typeof(prop), " was received instead"));
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

function calango(arr, config) {
  _helpers_validate__WEBPACK_IMPORTED_MODULE_1__["default"].expectArray(arr);
  !!config && _helpers_validate__WEBPACK_IMPORTED_MODULE_1__["default"].expectObject(config);
  var methods = {};
  Object.defineProperties(methods, Object(_lib_methods__WEBPACK_IMPORTED_MODULE_0__["getMethods"])(arr, config));
  return methods;
}

/* harmony default export */ __webpack_exports__["default"] = (calango);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxhbmdvL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jYWxhbmdvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhbGFuZ28vLi9zcmMvaGVscGVycy92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9jYWxhbmdvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2NhbGFuZ28vLi9zcmMvbGliL2dyb3VwLmpzIiwid2VicGFjazovL2NhbGFuZ28vLi9zcmMvbGliL21ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vY2FsYW5nby8uL3NyYy9saWIvdG9NYXAuanMiLCJ3ZWJwYWNrOi8vY2FsYW5nby8uL3NyYy91dGlscy9hcnJheS9hcnJheVRvT2JqZWN0LmpzIiwid2VicGFjazovL2NhbGFuZ28vLi9zcmMvdXRpbHMvZ3JvdXAvZ3JvdXBCeUNoaWxkLmpzIiwid2VicGFjazovL2NhbGFuZ28vLi9zcmMvdXRpbHMvZ3JvdXAvZ3JvdXBCeVByb3AuanMiLCJ3ZWJwYWNrOi8vY2FsYW5nby8uL3NyYy91dGlscy9vYmplY3QvYWRkUGFyZW50QW5kT21pdFByb3AuanMiLCJ3ZWJwYWNrOi8vY2FsYW5nby8uL3NyYy91dGlscy9vYmplY3QvY3JlYXRlT2JqZWN0LmpzIiwid2VicGFjazovL2NhbGFuZ28vLi9zcmMvdXRpbHMvb2JqZWN0L29taXQuanMiXSwibmFtZXMiOlsiZXhwZWN0QXJyYXkiLCJwcm9wIiwiQXJyYXkiLCJpc0FycmF5IiwiVHlwZUVycm9yIiwiZXhwZWN0T2JqZWN0IiwiY2FsYW5nbyIsImFyciIsImNvbmZpZyIsInZhbGlkYXRlIiwibWV0aG9kcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnRpZXMiLCJnZXRNZXRob2RzIiwiZ3JvdXAiLCJjaGlsZFByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsImdyb3VwQnlQcm9wIiwiZ3JvdXBCeUNoaWxkIiwidmFsdWUiLCJ3cml0YWJsZSIsImVudW1lcmFibGUiLCJ0b01hcCIsImZpbHRlckJhc2VkT25MaXN0Iiwid2hpdGVsaXN0IiwiYmxhY2tsaXN0IiwibGVuZ3RoIiwibWV0aG9kIiwiaW5jbHVkZXMiLCJCb29sZWFuIiwibWV0aG9kc0xpc3QiLCJhcnJheVRvT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImtleSIsIml0ZW0iLCJjcmVhdGVPYmplY3QiLCJmbiIsImFzc2lnbiIsIm1hcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjaGlsZHJlbk5hbWVzIiwiYWRkUGFyZW50QW5kT21pdFByb3AiLCJyZWR1Y2UiLCJwcmV2IiwiY3VycmVudCIsInZhbCIsInBhcmVudE9iaiIsInBhcmVudCIsIm9taXQiLCJwcm9wcyIsIm9iaiIsIm9taXRLZXkiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7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SUFBSSxDQUFDbEMsSUFBRCxDQUF0QjtBQUFBLEtBQWQsQ0FBYixDQURnQjtBQUFBLEdBQVYsQ0FBcEI7QUFHRDs7QUFFY2dCLDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTs7QUFFQSxTQUFTMEIsb0JBQVQsQ0FBOEJLLFNBQTlCLEVBQXlDL0MsSUFBekMsRUFBK0M7QUFDN0MsU0FBTyxVQUFBOEMsR0FBRztBQUFBLFdBQUlwQyxNQUFNLENBQUMyQixNQUFQLENBQWNTLEdBQWQsRUFBbUI7QUFBRUUsWUFBTSxFQUFFQyw0REFBSSxDQUFDRixTQUFELEVBQVkvQyxJQUFaO0FBQWQsS0FBbkIsQ0FBSjtBQUFBLEdBQVY7QUFDRDs7QUFFYzBDLG1GQUFmLEU7Ozs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7OztBQVFBLFNBQVNQLFlBQVQsQ0FBc0JGLEdBQXRCLEVBQTJCaUIsS0FBM0IsRUFBa0M7QUFDaEMsNkJBQVVqQixHQUFWLEVBQWdCaUIsS0FBaEI7QUFDRDs7QUFFRFgsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCxZQUFqQixDOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBLFNBQVNjLElBQVQsQ0FBY0UsR0FBZCxFQUFtQkMsT0FBbkIsRUFBNEI7QUFDMUIsU0FBTzFDLE1BQU0sQ0FBQ3FCLElBQVAsQ0FBWW9CLEdBQVosRUFBaUJSLE1BQWpCLENBQXdCLFVBQUNVLE1BQUQsRUFBU3BCLEdBQVQsRUFBaUI7QUFDOUMsUUFBSUEsR0FBRyxLQUFLbUIsT0FBWixFQUFxQjtBQUNuQkMsWUFBTSxDQUFDcEIsR0FBRCxDQUFOLEdBQWNrQixHQUFHLENBQUNsQixHQUFELENBQWpCO0FBQ0Q7O0FBQ0QsV0FBT29CLE1BQVA7QUFDRCxHQUxNLEVBS0osRUFMSSxDQUFQO0FBTUQ7O0FBRWNKLG1FQUFmLEUiLCJmaWxlIjoiY2FsYW5nby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiY2FsYW5nb1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjYWxhbmdvXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNhbGFuZ29cIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGV4cGVjdEFycmF5KHByb3ApIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIGBFeHBlY3RlZCBhbiBhcnJheSBhcyBmaXJzdCBhcmd1bWVudCBhbmQgJHt0eXBlb2YgcHJvcH0gd2FzIHJlY2VpdmVkIGluc3RlYWRgXG4gICAgICApO1xuICAgIH1cbiAgfSxcbiAgZXhwZWN0T2JqZWN0KHByb3ApIHtcbiAgICBpZiAodHlwZW9mIHByb3AgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBgQ2FsYW5nbyBleHBlY3RlZCBhbiBvYmplY3QgYXMgc2Vjb25kIGFyZ3VtZW50IGFuZCAke3R5cGVvZiBwcm9wfSB3YXMgcmVjZWl2ZWQgaW5zdGVhZGBcbiAgICAgICk7XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IHsgZ2V0TWV0aG9kcyB9IGZyb20gJy4vbGliL21ldGhvZHMnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vaGVscGVycy92YWxpZGF0ZSc7XG4vKipcbiAqXG4gKlxuICogQHBhcmFtIHsqfSBbYXJyPVtdXVxuICogQHBhcmFtIHsqfSBbY29uZmlnPXt9XVxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gY2FsYW5nbyhhcnIsIGNvbmZpZykge1xuICB2YWxpZGF0ZS5leHBlY3RBcnJheShhcnIpO1xuICAhIWNvbmZpZyAmJiB2YWxpZGF0ZS5leHBlY3RPYmplY3QoY29uZmlnKTtcblxuICBjb25zdCBtZXRob2RzID0ge307XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobWV0aG9kcywgZ2V0TWV0aG9kcyhhcnIsIGNvbmZpZykpO1xuICByZXR1cm4gbWV0aG9kcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FsYW5nbztcbiIsImltcG9ydCBncm91cEJ5UHJvcCBmcm9tICcuLi91dGlscy9ncm91cC9ncm91cEJ5UHJvcCc7XG5pbXBvcnQgZ3JvdXBCeUNoaWxkIGZyb20gJy4uL3V0aWxzL2dyb3VwL2dyb3VwQnlDaGlsZCc7XG5cbmZ1bmN0aW9uIGdyb3VwKGFycikge1xuICByZXR1cm4gKHByb3AsIGNoaWxkUHJvcCkgPT4ge1xuICAgIGlmICghYXJyWzBdLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJbMF1bcHJvcF0pKSB7XG4gICAgICByZXR1cm4gZ3JvdXBCeVByb3AoYXJyLCBwcm9wKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnJbMF1bcHJvcF0pICYmIGNoaWxkUHJvcCkge1xuICAgICAgcmV0dXJuIGdyb3VwQnlDaGlsZChhcnIsIHByb3AsIGNoaWxkUHJvcCk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBncm91cDtcbiIsImltcG9ydCBncm91cCBmcm9tICcuL2dyb3VwJztcbmltcG9ydCB0b01hcCBmcm9tICcuL3RvTWFwJztcbmltcG9ydCBhcnJheVRvT2JqZWN0IGZyb20gJy4uL3V0aWxzL2FycmF5L2FycmF5VG9PYmplY3QnO1xuXG5jb25zdCBtZXRob2RzID0gYXJyID0+ICh7XG4gIHZhbHVlOiB7XG4gICAgdmFsdWU6IGFycixcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9LFxuICBncm91cDoge1xuICAgIHZhbHVlOiBncm91cChhcnIpLFxuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG4gIH0sXG4gIHRvTWFwOiB7XG4gICAgdmFsdWU6IHRvTWFwKGFyciksXG4gICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGZpbHRlckJhc2VkT25MaXN0KGNvbmZpZykge1xuICBjb25zdCB7IHdoaXRlbGlzdCA9IFtdLCBibGFja2xpc3QgPSBbXSB9ID0gY29uZmlnO1xuXG4gIGlmICh3aGl0ZWxpc3QubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG1ldGhvZCA9PiB3aGl0ZWxpc3QuaW5jbHVkZXMobWV0aG9kKTtcbiAgfVxuXG4gIGlmIChibGFja2xpc3QubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG1ldGhvZCA9PiAhYmxhY2tsaXN0LmluY2x1ZGVzKG1ldGhvZCk7XG4gIH1cblxuICByZXR1cm4gQm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gZ2V0TWV0aG9kcyhhcnIgPSBbXSwgY29uZmlnID0ge30sIG1ldGhvZHNMaXN0ID0gbWV0aG9kcyhhcnIpKSB7XG4gIGlmICghY29uZmlnLndoaXRlbGlzdCAmJiAhY29uZmlnLmJsYWNrbGlzdCkgcmV0dXJuIG1ldGhvZHNMaXN0O1xuXG4gIHJldHVybiBhcnJheVRvT2JqZWN0KFxuICAgIE9iamVjdC5rZXlzKG1ldGhvZHNMaXN0KS5maWx0ZXIoZmlsdGVyQmFzZWRPbkxpc3QoY29uZmlnKSksXG4gICAga2V5ID0+ICh7IFtrZXldOiBtZXRob2RzTGlzdFtrZXldIH0pXG4gICk7XG59XG5cbmV4cG9ydCB7IGdldE1ldGhvZHMsIG1ldGhvZHMgfTtcbiIsImltcG9ydCBhcnJheVRvT2JqZWN0IGZyb20gJy4uL3V0aWxzL2FycmF5L2FycmF5VG9PYmplY3QnO1xuaW1wb3J0IGNyZWF0ZU9iamVjdCBmcm9tICcuLi91dGlscy9vYmplY3QvY3JlYXRlT2JqZWN0JztcblxuLyoqXG4gKiAgVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSBrZXk6dmFsdWUgb2JqZWN0XG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyIEFycmF5IHRvIGJlIHBhc3NlZFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcHJvcGVydHkgdG8gYmUgdXNlZCBhcyBrZXlcbiAqL1xuZnVuY3Rpb24gdG9NYXAoYXJyKSB7XG4gIHJldHVybiBrZXkgPT4gYXJyYXlUb09iamVjdChhcnIsIGl0ZW0gPT4gY3JlYXRlT2JqZWN0KGl0ZW1ba2V5XSwgaXRlbSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b01hcDtcbiIsIi8qKlxuICogQ3JlYXRlIGFuIG9iamVjdCwgc3ByZWFkcyBhbmQgbWFwcyBhbiBhcnJheVxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFyclxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqL1xuXG5mdW5jdGlvbiBhcnJheVRvT2JqZWN0KGFyciwgZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oLi4uYXJyLm1hcChmbikpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5VG9PYmplY3Q7XG4iLCJpbXBvcnQgZ3JvdXBCeVByb3AgZnJvbSAnLi9ncm91cEJ5UHJvcCc7XG5pbXBvcnQgYWRkUGFyZW50QW5kT21pdFByb3AgZnJvbSAnLi4vb2JqZWN0L2FkZFBhcmVudEFuZE9taXRQcm9wJztcblxuZnVuY3Rpb24gZ3JvdXBCeUNoaWxkKGFyciwgcHJvcCwgY2hpbGRQcm9wKSB7XG4gIGNvbnN0IGNoaWxkcmVuTmFtZXMgPSBhcnJcbiAgICAubWFwKGl0ZW0gPT4gaXRlbVtwcm9wXS5tYXAoYWRkUGFyZW50QW5kT21pdFByb3AoaXRlbSwgcHJvcCkpKVxuICAgIC5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcbiAgICAgIHJldHVybiBbLi4ucHJldiwgLi4uY3VycmVudC5tYXAodmFsID0+IHZhbCldO1xuICAgIH0sIFtdKTtcblxuICByZXR1cm4gZ3JvdXBCeVByb3AoY2hpbGRyZW5OYW1lcywgY2hpbGRQcm9wKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ3JvdXBCeUNoaWxkO1xuIiwiaW1wb3J0IGFycmF5VG9PYmplY3QgZnJvbSAnLi4vYXJyYXkvYXJyYXlUb09iamVjdCc7XG5pbXBvcnQgY3JlYXRlT2JqZWN0IGZyb20gJy4uL29iamVjdC9jcmVhdGVPYmplY3QnO1xuXG5mdW5jdGlvbiBncm91cEJ5UHJvcChhcnIsIHByb3ApIHtcbiAgcmV0dXJuIGFycmF5VG9PYmplY3QoYXJyLCBpdGVtID0+XG4gICAgY3JlYXRlT2JqZWN0KGl0ZW1bcHJvcF0sIGFyci5maWx0ZXIodmFsID0+IHZhbFtwcm9wXSA9PT0gaXRlbVtwcm9wXSkpXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdyb3VwQnlQcm9wO1xuIiwiaW1wb3J0IG9taXQgZnJvbSAnLi4vb2JqZWN0L29taXQnO1xuXG5mdW5jdGlvbiBhZGRQYXJlbnRBbmRPbWl0UHJvcChwYXJlbnRPYmosIHByb3ApIHtcbiAgcmV0dXJuIHZhbCA9PiBPYmplY3QuYXNzaWduKHZhbCwgeyBwYXJlbnQ6IG9taXQocGFyZW50T2JqLCBwcm9wKSB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkUGFyZW50QW5kT21pdFByb3A7XG4iLCIvKipcbiAqIENyZWF0ZSBhIGtleSBiYXNlZCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBjIC0gdGhlIGtleSB0byBjcmVhdGUgdGhlIG9iamVjdFxuICogQHBhcmFtIHthbnl9IHByb3BzXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlT2JqZWN0KGtleSwgcHJvcHMpIHtcbiAgcmV0dXJuIHsgW2tleV06IHByb3BzIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlT2JqZWN0O1xuIiwiZnVuY3Rpb24gb21pdChvYmosIG9taXRLZXkpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIGlmIChrZXkgIT09IG9taXRLZXkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIHt9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb21pdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=