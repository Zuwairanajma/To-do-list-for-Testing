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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\nconst tasks = [\r\n    { description: 'Task 1', completed: false, index: 1 },\r\n    { description: 'Task 2', completed: true, index: 2 },\r\n    { description: 'Task 3', completed: false, index: 3 },\r\n    // Add more tasks as needed\r\n  ];\r\n  \r\n  function populateTodoList(tasks) {\r\n    const todoList = document.getElementById('todo-list');\r\n  \r\n    tasks.forEach((task) => {\r\n      const li = document.createElement('li');\r\n      li.className = 'todo-item';\r\n      li.innerHTML = `\r\n        <input type=\"checkbox\" class=\"task-completed\" ${task.completed ? 'checked' : ''}>\r\n        <span class=\"task-description\">${task.description}</span>\r\n        <div class=\"task-actions\">\r\n          <span class=\"vertical-dots\">&#8942;</span>\r\n        </div>\r\n      `;\r\n      todoList.appendChild(li);\r\n    });\r\n  }\r\n  \r\n  populateTodoList(tasks);\r\n  \n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;