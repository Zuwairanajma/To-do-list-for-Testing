import { updateLocalStorage, updateTaskIndexesInStorage } from './localstorage.js';
import deleteTask from './deletetask.js';
import returnTask from './returnTask.js';

function editFunction(icon, e, tasks, listItem) {
  const isEditMode = listItem.classList.contains('edit-mode');

  if (!isEditMode) {
    icon.className = 'fa-solid fa-trash-can';
    listItem.classList.add('edit-mode');

    const content = listItem.querySelector('.content');

    if (!content) return;

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = content.innerHTML;
    inputField.className = 'edit-field';
    inputField.style.backgroundColor = 'lightyellow';
    listItem.style.backgroundColor = 'lightyellow';

    listItem.replaceChild(inputField, content);
    updateTaskIndexesInStorage(tasks);

    inputField.addEventListener('blur', (event) => {
      const task = returnTask(tasks, event);
      task.description = inputField.value;
      content.innerHTML = inputField.value;
      listItem.replaceChild(content, inputField);
      listItem.style.backgroundColor = 'white';
      icon.className = 'fa-solid fa-ellipsis-vertical';
      updateLocalStorage(tasks);
      listItem.classList.remove('edit-mode');
    });
  } else {
    deleteTask(listItem, tasks);
  }
}

export default editFunction;
