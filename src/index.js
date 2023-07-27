import './style.css';
import addTaskToList from './modules/addTaskToList.js';
import { saveTasksToStorage, loadTasksFromStorage } from './modules/localstorage.js';
import clearCompletedTasks from './modules/remove.js';

let tasks = loadTasksFromStorage();

const taskList = document.getElementById('todo-list');
const taskInput = document.querySelector('.add-task input');

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

const btnRefresh = document.getElementById('btn-refresh');
btnRefresh.addEventListener('click', () => {
  window.location.reload();
});

const btnClear = document.querySelector('.clear-items button');
btnClear.addEventListener('click', () => {
  clearCompletedTasks(tasks);
});

document.addEventListener('DOMContentLoaded', () => {
  tasks = loadTasksFromStorage();
  tasks.forEach((task) => {
    addTaskToList(task, taskList, tasks);
  });
});
