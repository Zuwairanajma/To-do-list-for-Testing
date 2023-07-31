function addDeleteButton(index) {
    const taskItem = document.querySelector(`[data-index="${index}"]`).closest('.todo-item');
    if (!taskItem.querySelector('.delete-btn')) {
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.dataset.index = index;
      deleteBtn.textContent = 'Delete';
      taskItem.querySelector('.task-actions').appendChild(deleteBtn);
    }
  }
  