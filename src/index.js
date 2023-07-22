import './style.css';

const tasks = [
    { description: 'Task 1', completed: false, index: 1 },
    { description: 'Task 2', completed: true, index: 2 },
    { description: 'Task 3', completed: false, index: 3 },
    // Add more tasks as needed
  ];
  
  function populateTodoList(tasks) {
    const todoList = document.getElementById('todo-list');
  
    tasks.forEach((task) => {
      const li = document.createElement('li');
      li.className = 'todo-item';
      li.innerHTML = `
        <input type="checkbox" class="task-completed" ${task.completed ? 'checked' : ''}>
        <span class="task-description">${task.description}</span>
        <div class="task-actions">
          <span class="vertical-dots">&#8942;</span>
        </div>
      `;
      todoList.appendChild(li);
    });
  }
  
  populateTodoList(tasks);
  