

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
