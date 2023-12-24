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

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/***/ (() => {

eval("// src/background.js\nvar blockedUrls = [];\nchrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\n  if (request.action === 'block') {\n    blockedUrls = request.urls;\n    setTimeout(function () {\n      blockedUrls = [];\n    }, request.duration * 60 * 1000); // Convert minutes to milliseconds\n  }\n});\nchrome.webRequest.onBeforeRequest.addListener(function (details) {\n  if (blockedUrls.some(function (url) {\n    return details.url.includes(url);\n  })) {\n    return {\n      cancel: true\n    };\n  }\n  return {\n    cancel: false\n  };\n}, {\n  urls: [\"<all_urls>\"]\n}, [\"blocking\"]);\n\n//# sourceURL=webpack://focus_mode_extension/./src/background.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/background.js"]();
/******/ 	
/******/ })()
;