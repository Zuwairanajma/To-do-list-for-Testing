function returnTask(tasks, event) {
  const listItem = event.target.parentNode;
  const taskList = listItem.parentNode;
  const taskIndex = Array.from(taskList.children).indexOf(listItem);
  return tasks[taskIndex];
}

export default returnTask;