/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1-2-train/./node_modules/bootstrap/dist/css/bootstrap.min.css?");

/***/ }),

/***/ "./public/index.css":
/*!**************************!*\
  !*** ./public/index.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://1-2-train/./public/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _public_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/index.css */ \"./public/index.css\");\nconst {checkLength8, checkLength6}= __webpack_require__(/*! ./util/checkLength.js */ \"./src/util/checkLength.js\")\n// console.log(checkLength8('12345678'));\n// console.log(checkLength6('123456'));\n\n\ndocument.querySelector(\".btn\").addEventListener('click', ()=>{\n    // console.log('111');\n    const phone = document.querySelector(\".login-form [name=mobile]\").value;\n    const code = document.querySelector(\".login-form [name=code]\").value;\n    if(!checkLength8(phone)){\n        console.log('phone num should be 8 digits');\n        return;\n    }\n    if(!checkLength6(code)){\n        console.log('code num should be 6 digits');\n        return;\n    }\n\n    console.log('ok,login ing');\n})\n\n// const cssLoder = require('../public/index.css')\n// const bootstrap = require('bootstrap/dist/css/bootstrap.mini.css')\n;\n\n\n//# sourceURL=webpack://1-2-train/./src/index.js?");

/***/ }),

/***/ "./src/util/checkLength.js":
/*!*********************************!*\
  !*** ./src/util/checkLength.js ***!
  \*********************************/
/***/ ((module) => {

eval("const checkLength8 = num => num.length === 8;\nconst checkLength6 = num => num.length === 6;\n\nmodule.exports = {\n    checkLength8,\n    checkLength6,\n}\n\n//# sourceURL=webpack://1-2-train/./src/util/checkLength.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;