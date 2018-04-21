/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/CatchFruit.js":
/*!***************************!*\
  !*** ./app/CatchFruit.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CatchFruit; });\n/* harmony import */ var _libs_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/Game */ \"./app/libs/Game.js\");\n\n\nclass CatchFruit extends _libs_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(options) {\n        super(options);\n    }\n}\n\n//# sourceURL=webpack:///./app/CatchFruit.js?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CatchFruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CatchFruit */ \"./app/CatchFruit.js\");\n/* harmony import */ var _libs_Audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/Audio */ \"./app/libs/Audio.js\");\n/* harmony import */ var _audios_horse_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audios/horse.mp3 */ \"./audios/horse.mp3\");\n/* harmony import */ var _audios_horse_mp3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_audios_horse_mp3__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nwindow.game = new _CatchFruit__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    name: 'Catch Fruit'\n});\n\nlet audio = new _libs_Audio__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_audios_horse_mp3__WEBPACK_IMPORTED_MODULE_2___default.a, 'bg');\naudio.embed({\n    autoPlay: true\n});\n// audio.element.play();\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/libs/Audio.js":
/*!***************************!*\
  !*** ./app/libs/Audio.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Audio; });\nclass Audio {\n\n    constructor(src, id) {\n        this.id = id;\n        this.src = src;\n\n        this.element = document.createElement(\"AUDIO\");\n\n        this.element.setAttribute(\"id\", this.id);\n        this.element.setAttribute(\"src\", this.src);\n\n        this.element.setAttribute(\"controls\", \"controls\");\n    }\n\n    /**\n     * \n     * @param {object} attrs Attributes of Audio Object\n     */\n    embed(attrs) {\n        for (let attr in attrs) {\n            this.element.setAttribute(attr, attrs[attr]);\n        }\n        document.body.appendChild(this.element);\n    }\n}\n\n//# sourceURL=webpack:///./app/libs/Audio.js?");

/***/ }),

/***/ "./app/libs/Game.js":
/*!**************************!*\
  !*** ./app/libs/Game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\nclass Game {\n\n    constructor(options) {\n        this.playing = false;\n        this.options = options;\n    }\n\n    start() {\n        if (!this.playing) {\n            this.playing = true;\n            requestAnimationFrame(this.loop.bind(this));\n        }\n    }\n\n    stop() {\n        this.playing = false;\n    }\n\n    loop() {\n        if (!this.playing) {\n            return;\n        }\n        console.log('game loop');\n        requestAnimationFrame(this.loop.bind(this));\n    }\n}\n\n//# sourceURL=webpack:///./app/libs/Game.js?");

/***/ }),

/***/ "./audios/horse.mp3":
/*!**************************!*\
  !*** ./audios/horse.mp3 ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c9d92da76c36a910df64557a5e488b80.mp3\";\n\n//# sourceURL=webpack:///./audios/horse.mp3?");

/***/ }),

/***/ 0:
/*!***************************************************************************************!*\
  !*** multi ./app/libs/Audio.js ./app/libs/Game.js ./app/CatchFruit.js ./app/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./app/libs/Audio.js */\"./app/libs/Audio.js\");\n__webpack_require__(/*! ./app/libs/Game.js */\"./app/libs/Game.js\");\n__webpack_require__(/*! ./app/CatchFruit.js */\"./app/CatchFruit.js\");\nmodule.exports = __webpack_require__(/*! ./app/index.js */\"./app/index.js\");\n\n\n//# sourceURL=webpack:///multi_./app/libs/Audio.js_./app/libs/Game.js_./app/CatchFruit.js_./app/index.js?");

/***/ })

/******/ });