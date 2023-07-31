// todoFunctions.js

export const tasks = [];

export function addTask(description) {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
}

export function deleteTask(index) {
  tasks.splice(index - 1, 1);
  updateIndexes();
}

export function editTaskDescription(index, newDescription) {
  tasks[index - 1].description = newDescription;
}

export function updateIndexes() {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
}

export function saveToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadFromLocalStorage() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (storedTasks) {
    tasks.push(...storedTasks);
  }
}
