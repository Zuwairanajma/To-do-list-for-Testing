import { saveTasksToStorage, updateTaskIndexesInStorage } from './localstorage.js';

function clearCompletedTasks(tasks) {
  const taskList = tasks.filter((task) => !task.completed);

  // Update the indexes of the remaining tasks
  const updatedTaskList = taskList.map((task, index) => ({ ...task, index }));

  updateTaskIndexesInStorage(updatedTaskList);
  saveTasksToStorage(updatedTaskList);

  // Return only the non-completed tasks (taskList) without modifying the original tasks array
  return updatedTaskList;
}

export default clearCompletedTasks;
