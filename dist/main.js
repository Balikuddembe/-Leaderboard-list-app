"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_leaderboard_list_app"] = self["webpackChunk_leaderboard_list_app"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/userInterface.js */ \"./src/modules/userInterface.js\");\n/* harmony import */ var _modules_user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/user.js */ \"./src/modules/user.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].display);\nconst form = document.querySelector('#user-form');\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const name = document.querySelector('#name').value;\n  const score = document.querySelector('#score').value;\n  const user = new _modules_user_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name, score);\n  _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addUser(user);\n});\n\n//# sourceURL=webpack://-leaderboard-list-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Storage {\n  static getUser() {\n    let users;\n    if (localStorage.getItem('users') == null) {\n      users = [];\n    } else {\n      users = JSON.parse(localStorage.getItem('users'));\n    }\n    return users;\n  }\n\n  static addUser(user) {\n    const users = this.getUser();\n    users.push(user);\n    localStorage.setItem('users', JSON.stringify(users));\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);\n\n//# sourceURL=webpack://-leaderboard-list-app/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/user.js":
/*!*****************************!*\
  !*** ./src/modules/user.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass User {\n  constructor(name, score) {\n    this.name = name;\n    this.score = score;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n//# sourceURL=webpack://-leaderboard-list-app/./src/modules/user.js?");

/***/ }),

/***/ "./src/modules/userInterface.js":
/*!**************************************!*\
  !*** ./src/modules/userInterface.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n\n\nclass UserInterface {\n  static display() {\n    const users = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getUser();\n    users.forEach((user) => UserInterface.addUser(user));\n  }\n\n  static addUser(user) {\n    const userList = document.querySelector('#user-list');\n    const row = document.createElement('tr');\n    row.innerHTML = `\n    <td>${user.name}</td>\n    <td>${user.score}</td>\n    `;\n    userList.appendChild(row);\n  }\n\n  static clearFields() {\n    document.querySelector('#name').value = '';\n    document.querySelector('#score').value = '';\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInterface);\n\n//# sourceURL=webpack://-leaderboard-list-app/./src/modules/userInterface.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);