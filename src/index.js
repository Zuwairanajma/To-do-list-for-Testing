import './index.css';

// import {
//   addTaskToList,
//   saveTasksToStorage,
// } from './modules/addTaskToList.js'; // Updated import statement
import { addTaskToList } from './modules/addTaskToList.js';
import { saveTasksToStorage, loadTasksFromStorage } from './modules/localstorage.js';
// import { loadTasksFromStorage } from './modules/localstorage.js';
import clearCompletedTasks from './modules/remove.js';

let tasks = loadTasksFromStorage();

const taskList = document.getElementById('todo-task-list');
const taskInput = document.querySelector('.add-task input');
// const taskInput = document.getElementById('new-task-add');

taskInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const description = taskInput.value.trim();

    if (description !== '') {
      const newTask = {
        description,
        completed: false,
        index: tasks.length,
      };

      tasks.push(newTask);
      taskInput.value = '';
      addTaskToList(newTask, taskList, tasks);

      saveTasksToStorage(tasks);
    }
  }
});

const btnRefresh = document.getElementById('refresh');
btnRefresh.addEventListener('click', () => {
  window.location.reload();
});

const btnClear = document.querySelector('.wipe-all-out');
btnClear.addEventListener('click', () => {
  clearCompletedTasks(tasks);
});

document.addEventListener('DOMContentLoaded', () => {
  tasks = loadTasksFromStorage();
  tasks.forEach((task) => {
    addTaskToList(task, taskList, tasks);
  });
});
