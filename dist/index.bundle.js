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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoFunctions */ \"./src/todoFunctions.js\");\n// index.js\r\n\r\n\r\nconst todoInput = document.getElementById('todo-input');\r\nconst todoList = document.getElementById('todo-list');\r\nconst clearCompletedBtn = document.getElementById('clear-completed-btn');\r\n\r\nfunction renderTask(task) {\r\n  const li = document.createElement('li');\r\n  li.innerHTML = `\r\n    <div class=\"task\">\r\n      <input class=\"task-completed\" type=\"checkbox\" ${task.completed ? 'checked' : ''} />\r\n      <span class=\"task-description\">${task.description}</span>\r\n      <button class=\"delete-btn\">Delete</button>\r\n    </div>\r\n  `;\r\n  todoList.appendChild(li);\r\n}\r\n\r\nfunction renderTasks() {\r\n  todoList.innerHTML = '';\r\n  _todoFunctions__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach((task) => renderTask(task));\r\n}\r\n\r\nfunction clearCompletedTasks() {\r\n  _todoFunctions__WEBPACK_IMPORTED_MODULE_0__.tasks.filter((task) => task.completed).forEach((task) => (0,_todoFunctions__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(task.index));\r\n  (0,_todoFunctions__WEBPACK_IMPORTED_MODULE_0__.updateIndexes)();\r\n  (0,_todoFunctions__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();\r\n  renderTasks();\r\n}\r\n\r\nfunction bindEventListeners() {\r\n  todoInput.addEventListener('keypress', (event) => {\r\n    if (event.key === 'Enter') {\r\n      (0,_todoFunctions__WEBPACK_IMPORTED_MODULE_0__.addTask)(todoInput.value);\r\n      todoInput.value = '';\r\n      (0,_todoFunctions__WEBPACK_IMPORTED_MODULE_0__.updateIndexes)();\r\n      (0,_todoFunctions__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();\r\n      renderTasks();\r\n    }\r\n  });\r\n\r\n  todoList.addEventListener('click', (event) => {\r\n    const target = event.target;\r\n    if (target.classList.contains('delete-btn')) {\r\n      const li = target.closest('li');\r\n      const index = [...todoList.children].indexOf(li) + 1;\r\n      (0,_todoFunctions__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(index);\r\n      (0,_todoFunctions__WEBPACK_IMPORTED_MODULE_0__.updateIndexes)();\r\n      (0,_todoFunctions__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();\r\n      renderTasks();\r\n    }\r\n  });\r\n\r\n  clearCompletedBtn.addEventListener('click', () => {\r\n    clearCompletedTasks();\r\n  });\r\n}\r\n\r\n// Load tasks from localStorage when the page is loaded\r\n(0,_todoFunctions__WEBPACK_IMPORTED_MODULE_0__.loadFromLocalStorage)();\r\n(0,_todoFunctions__WEBPACK_IMPORTED_MODULE_0__.updateIndexes)();\r\nrenderTasks();\r\nbindEventListeners();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todoFunctions.js":
/*!******************************!*\
  !*** ./src/todoFunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   editTaskDescription: () => (/* binding */ editTaskDescription),\n/* harmony export */   loadFromLocalStorage: () => (/* binding */ loadFromLocalStorage),\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage),\n/* harmony export */   tasks: () => (/* binding */ tasks),\n/* harmony export */   updateIndexes: () => (/* binding */ updateIndexes)\n/* harmony export */ });\n// todoFunctions.js\r\n\r\nconst tasks = [];\r\n\r\nfunction addTask(description) {\r\n  const index = tasks.length + 1;\r\n  const newTask = { index, description, completed: false };\r\n  tasks.push(newTask);\r\n}\r\n\r\nfunction deleteTask(index) {\r\n  tasks.splice(index - 1, 1);\r\n  updateIndexes();\r\n}\r\n\r\nfunction editTaskDescription(index, newDescription) {\r\n  tasks[index - 1].description = newDescription;\r\n}\r\n\r\nfunction updateIndexes() {\r\n  tasks.forEach((task, index) => {\r\n    task.index = index + 1;\r\n  });\r\n}\r\n\r\nfunction saveToLocalStorage() {\r\n  localStorage.setItem('tasks', JSON.stringify(tasks));\r\n}\r\n\r\nfunction loadFromLocalStorage() {\r\n  const storedTasks = JSON.parse(localStorage.getItem('tasks'));\r\n  if (storedTasks) {\r\n    tasks.length = 0;\r\n    tasks.push(...storedTasks);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/todoFunctions.js?");

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