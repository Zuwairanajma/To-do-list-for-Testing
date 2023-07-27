import completeTaskFunc from './completingTask.js';
import { saveTasksToStorage, updateTaskIndexesInStorage } from './localstorage.js';
import editTaskFunc from './edittask.js';
import fetchTask from './returnTask.js';

let taskIdCounter = 0;

function addTaskToList(taskData, taskListElement, tasksArray) {
  const listItemElement = document.createElement('li');
  listItemElement.style.textDecoration = taskData.completed ? 'line-through' : 'none';
  listItemElement.className = 'list';
  listItemElement.id = `task-${taskIdCounter}`;
  taskIdCounter += 1;
  taskListElement.appendChild(listItemElement);

  const checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  checkboxElement.className = 'checkboxtick';
  checkboxElement.checked = taskData.completed;
  checkboxElement.addEventListener('change', (event) => {
    taskData = fetchTask(tasksArray, event);
    completeTaskFunc(event, tasksArray, taskData);
  });
  listItemElement.appendChild(checkboxElement);

  const descriptionParagraph = document.createElement('p');
  descriptionParagraph.innerHTML = taskData.description;
  descriptionParagraph.className = 'content';
  listItemElement.appendChild(descriptionParagraph);

  const ellipsisIcon = document.createElement('i');
  ellipsisIcon.className = 'fa-solid fa-ellipsis-vertical';
  listItemElement.appendChild(ellipsisIcon);

  ellipsisIcon.addEventListener('click', (e) => {
    editTaskFunc(ellipsisIcon, e, tasksArray, listItemElement);
  });
}

export {
  addTaskToList,
  fetchTask,
  saveTasksToStorage,
  updateTaskIndexesInStorage,
};
