import { updateTaskIndexesInStorage, updateLocalStorage } from './localstorage.js';

function deleteTask(listItem, tasks) {
  const taskList = listItem.parentNode;
  const taskIndex = Array.from(taskList.children).indexOf(listItem);
  taskList.removeChild(listItem);

  tasks.splice(taskIndex, 1);

  updateTaskIndexesInStorage(tasks);
  updateLocalStorage(tasks);
}
export default deleteTask;