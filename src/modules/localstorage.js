const saveTasksToStorage = (tasks) => {
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
};

const loadTasksFromStorage = () => {
  const storedTasks = window.localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
};

function updateLocalStorage(tasks) {
  localStorage.clear();
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskIndexesInStorage(tasks) {
  tasks = loadTasksFromStorage();
  tasks.forEach((task, index) => {
    task.index = index;
  });
}

export {
  saveTasksToStorage,
  loadTasksFromStorage,
  updateLocalStorage,
  updateTaskIndexesInStorage,
};
