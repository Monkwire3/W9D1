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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction Asteroid() {\n    argsObj = Array.from(arguments)[0];\n    MovingObject.call(this, {\"pos\": argsObj[\"pos\"], \"vel\": argsObj[\"vel\"], \"radius\": 5, \"color\":  \"blue\"});\n}\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack://w9d1/./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n    const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n    const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n    const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\n    \n    console.log(\"index\");\n\n    const canvas = document.getElementById(\"game-canvas\");\n    canvas.height = 500;\n    canvas.width = 500;\n\n    const ctx = canvas.getContext('2d');\n\n\n//    const mo = new MovingObject({\n        //pos: [30, 30],\n        //vel: [10, 10],\n        //radius: 5,\n        //color: \"#00FF00\"\n    //});\n\n    // mo.draw(ctx);\n    // mo.move();\n    // mo.draw(ctx);\n\n    window.MovingObject = MovingObject; // For testing only\n    window.Asteroid = Asteroid; // For testing only\n\n})\n\n\n//# sourceURL=webpack://w9d1/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject() {\n    let argsObj = Array.from(arguments)[0];\n    console.log(\"in moving object const \");\n    console.log(argsObj);\n    this.pos = argsObj[\"pos\"];\n    this.vel = argsObj[\"vel\"];\n    this.radius = argsObj[\"radius\"];\n    this.color = argsObj[\"color\"];\n};\n\n\n\nMovingObject.prototype.draw = function(ctx) {\n     ctx.beginPath();\n     ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);\n     ctx.strokeStyle = this.color;\n     ctx.lineWidth = 5;\n     ctx.stroke() \n };\n\nMovingObject.prototype.move = function() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n};\n\nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack://w9d1/./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits: function inherits(childClass, parentClass) {\n        function Surrogate() {};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = Surrogate.prototype;\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec: function randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n      },\n\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n\n  };\n  \n  module.exports = Util;\n\n\n//# sourceURL=webpack://w9d1/./src/util.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;