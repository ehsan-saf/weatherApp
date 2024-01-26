/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _userInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInput */ \"./src/userInput.js\");\n\r\n\r\n(0,_userInput__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ }),

/***/ "./src/showWeather.js":
/*!****************************!*\
  !*** ./src/showWeather.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayWeather)\n/* harmony export */ });\nconst location = document.querySelector(\".location\");\r\nconst date = document.querySelector(\".date\");\r\nconst today_icon = document.querySelector(\".today-icon\");\r\nconst today_temp = document.querySelector(\".today-temp\");\r\nconst today_condition = document.querySelector(\".today-condition\");\r\nconst today_humidity = document.querySelector(\".today-humidity\");\r\nconst today_wind = document.querySelector(\".today-wind\");\r\nconst today_uv = document.querySelector(\".today-uv\");\r\n\r\nfunction displayWeather(data) {\r\n  setMainData(data);\r\n}\r\n\r\nfunction setMainData(data) {\r\n  location.textContent = `${data.city} , ${data.country}`;\r\n  today_icon.src = getIconSrc(data);\r\n  today_temp.textContent = `${data.temp_c}`;\r\n  today_condition.textContent = data.condition;\r\n  today_humidity.textContent = `Humidity: ${data.humidity}%`;\r\n  today_wind.textContent = `Wind: ${data.wind} kph`;\r\n  today_uv.textContent = `UV: ${data.uv}`;\r\n}\r\n\r\nfunction getIconSrc(data) {\r\n  let time = \"\";\r\n  const name = data.icon.slice(-7);\r\n  if (data.is_day) {\r\n    time = \"day\";\r\n  } else {\r\n    time = \"night\";\r\n  }\r\n  const iconSrc = `./icons/${time}/${name}`;\r\n  return iconSrc;\r\n}\r\n\r\nfunction getTemp(data) {}\r\n\r\n// function createBox(data) {\r\n//   const box = document.createElement(\"div\");\r\n//   box.classList.add(\"weather-box\");\r\n\r\n//   const icon = document.createElement(\"img\");\r\n//   icon.src = getIconSrc(data);\r\n\r\n//   const condition = document.createElement(\"p\");\r\n//   condition.classList.add(\".condition\");\r\n//   condition.textContent = data.condition;\r\n\r\n//   const temp = document.createElement(\"p\");\r\n//   temp.textContent = data.temp_c;\r\n\r\n//   box.appendChild(icon);\r\n//   box.appendChild(condition);\r\n//   box.appendChild(temp);\r\n\r\n//   return box;\r\n// }\r\n\n\n//# sourceURL=webpack://template/./src/showWeather.js?");

/***/ }),

/***/ "./src/userInput.js":
/*!**************************!*\
  !*** ./src/userInput.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initControls)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _showWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showWeather */ \"./src/showWeather.js\");\n\r\n\r\n\r\nconst input = document.querySelector(\".location-input\");\r\nconst searchButton = document.querySelector(\".search-button\");\r\n\r\nfunction initControls() {\r\n  searchButton.addEventListener(\"click\", getInput);\r\n}\r\n\r\nfunction getInput() {\r\n  if (input.value.trim() !== \"\") {\r\n    const weatherPromise = (0,_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input.value);\r\n    weatherPromise.then((rs) => (0,_showWeather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rs));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://template/./src/userInput.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeather)\n/* harmony export */ });\nasync function getWeather(locationName) {\r\n  const data = await getData(locationName);\r\n  console.log(data);\r\n  const { current, location } = data;\r\n  return {\r\n    condition: current.condition.text,\r\n    icon: current.condition.icon,\r\n    is_day: current.is_day,\r\n    temp_c: current.temp_c,\r\n    temp_f: current.temp_f,\r\n    humidity: current.humidity,\r\n    wind: current.wind_kph,\r\n    uv: current.uv,\r\n    country: location.country,\r\n    city: location.name,\r\n  };\r\n}\r\n\r\nasync function getData(location) {\r\n  const address = `https://api.weatherapi.com/v1/forecast.json?key=92af089f4bee44ea93b193454241501&q=${location};\r\n    `;\r\n  const request = await fetch(address);\r\n  return request.json();\r\n}\r\n\n\n//# sourceURL=webpack://template/./src/weather.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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