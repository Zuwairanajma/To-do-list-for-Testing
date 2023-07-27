import { updateLocalStorage } from './localstorage.js';

function completionFunction(checkbox, tasks, task) {
  task.completed = !task.completed;
  if (task.completed) {
    checkbox.target.parentElement.style.textDecoration = 'line-through';
  } else {
    checkbox.target.parentElement.style.textDecoration = 'none';
  }
  updateLocalStorage(tasks);
}

export default completionFunction;
