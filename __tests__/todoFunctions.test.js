import {
  tasks,
  addTask,
  deleteTask,
  editTaskDescription,
  updateIndexes,
  saveToLocalStorage,
  loadFromLocalStorage,
} from '../src/todoFunctions';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock DOM element creation and interactions
document.body.innerHTML = `
  <div class="container">
    <h1>Ngala's Todo List</h1>
    <div class="todo-controls">
      <input
        type="text"
        id="todo-input"
        class="todo-input"
        placeholder="Add to your list"
      />
    </div>
    <ul id="todo-list" class="todo-list">
      <!-- The populated list items will appear here -->
    </ul>
    <button
      type="button"
      id="clear-completed-btn"
      class="clear-completed-btn"
    >
      Clear all completed
    </button>
  </div>
`;

// Helper function to simulate key press event on the input element
const simulateKeyPress = (key) => {
  const event = new Event('keypress');
  event.key = key;
  document.getElementById('todo-input').dispatchEvent(event);
};

// Helper function to simulate click event on a DOM element
const simulateClick = (element) => {
  const event = new Event('click');
  element.dispatchEvent(event);
};

// Tests for todoFunctions.js
describe('Todo List Functions', () => {
  beforeEach(() => {
    localStorage.clear(); // Clear localStorage before each test
    tasks.length = 0; // Clear tasks array before each test
  });

  test('should add a new task to tasks array and update the DOM', () => {
    addTask('Task 1');
    expect(tasks.length).toBe(1);
    expect(tasks[0].description).toBe('Task 1');
    expect(tasks[0].completed).toBe(false);

    // Check if the task is added to the DOM
    const todoList = document.getElementById('todo-list');
    expect(todoList.children.length).toBe(2); // One additional element for the clear-completed button
    expect(todoList.children[0].querySelector('.task-description').textContent).toBe('Task 1');
  });

  test('should delete a task from tasks array and update the DOM', () => {
    tasks.push({ index: 1, description: 'Task 1', completed: false });
    tasks.push({ index: 2, description: 'Task 2', completed: true });

    // Delete Task 1
    deleteTask(1);
    expect(tasks.length).toBe(1);
    expect(tasks[0].description).toBe('Task 2');

    // Check if the task is removed from the DOM
    const todoList = document.getElementById('todo-list');
    expect(todoList.children.length).toBe(2); // One additional element for the clear-completed button
    expect(todoList.children[0].querySelector('.task-description').textContent).toBe('Task 2');
  });

  test('should edit the description of a task in tasks array and update the DOM', () => {
    tasks.push({ index: 1, description: 'Task 1', completed: false });

    // Edit Task 1's description
    editTaskDescription(1, 'Updated Task 1');
    expect(tasks[0].description).toBe('Updated Task 1');

    // Check if the task description is updated in the DOM
    const todoList = document.getElementById('todo-list');
    expect(todoList.children[0].querySelector('.task-description').textContent).toBe('Updated Task 1'); // Assuming it was 'Task 1' before
  });

  test('should update task indexes when deleting a task', () => {
    tasks.push({ index: 1, description: 'Task 1', completed: false });
    tasks.push({ index: 2, description: 'Task 2', completed: false });
    tasks.push({ index: 3, description: 'Task 3', completed: false });

    // Delete Task 2
    deleteTask(2);
    expect(tasks.length).toBe(2);
    expect(tasks[0].index).toBe(1);
    expect(tasks[1].index).toBe(2);
  });

  test('should save tasks to localStorage', () => {
    tasks.push({ index: 1, description: 'Task 1', completed: false });
    tasks.push({ index: 2, description: 'Task 2', completed: false });

    // Save tasks to localStorage
    saveToLocalStorage();

    // Check if tasks are correctly saved in localStorage
    expect(localStorage.getItem('tasks')).toEqual(JSON.stringify(tasks));
  });

  test('should load tasks from localStorage and update the DOM', () => {
    const storedTasks = [
      { index: 1, description: 'Task 1', completed: false },
      { index: 2, description: 'Task 2', completed: true },
    ];
    localStorage.setItem('tasks', JSON.stringify(storedTasks));

    // Load tasks from localStorage
    loadFromLocalStorage();

    // Check if tasks are correctly loaded and stored in the tasks array
    expect(tasks).toEqual(storedTasks);

    // Check if tasks are added to the DOM
    const todoList = document.getElementById('todo-list');
    expect(todoList.children.length).toBe(storedTasks.length + 1); // One additional element for the clear-completed button
    storedTasks.forEach((task, index) => {
      expect(todoList.children[index].querySelector('.task-description').textContent).toBe(task.description);
      expect(todoList.children[index].querySelector('.task-completed').checked).toBe(task.completed);
    });
  });

  test('should show delete button for completed tasks', () => {
    tasks.push({ index: 1, description: 'Task 1', completed: true });
    tasks.push({ index: 2, description: 'Task 2', completed: false });

    // Render the tasks with completed tasks having delete button
    tasks.forEach((task) => {
      const li = document.createElement('li');
      li.className = 'todo-item';
      li.innerHTML = `
        <input type="checkbox" class="task-completed" data-index="${task.index}" ${
        task.completed ? 'checked' : ''
      }>
      <span class="task-description" data-index="${task.index}" contenteditable>${task.description}</span>
      <div class="task-actions">
        ${task.completed ? '<button class="delete-btn" data-index="' + task.index + '">Delete</button>' : ''}
      </div>
      `;
      document.getElementById('todo-list').appendChild(li);
    });

    // Check if delete button is shown for completed tasks
    const completedTaskDeleteButtons = document.querySelectorAll('.delete-btn');
    expect(completedTaskDeleteButtons.length).toBe(1);
  });

  test('should remove delete button for incomplete tasks', () => {
    tasks.push({ index: 1, description: 'Task 1', completed: false });
    tasks.push({ index: 2, description: 'Task 2', completed: true });

    // Render the tasks with completed tasks having delete button
    tasks.forEach((task) => {
      const li = document.createElement('li');
      li.className = 'todo-item';
      li.innerHTML = `
        <input type="checkbox" class="task-completed" data-index="${task.index}" ${
        task.completed ? 'checked' : ''
      }>
      <span class="task-description" data-index="${task.index}" contenteditable>${task.description}</span>
      <div class="task-actions">
        ${task.completed ? '<button class="delete-btn" data-index="' + task.index + '">Delete</button>' : ''}
      </div>
      `;
      document.getElementById('todo-list').appendChild(li);
    });

    // Check if delete button is shown for completed tasks
    const incompleteTaskDeleteButtons = document.querySelectorAll('.delete-btn');
    expect(incompleteTaskDeleteButtons.length).toBe(0); // Assuming Task 1 is now incomplete and Task 2 is complete

    // Mark Task 1 as incomplete
    tasks[0].completed = true;

    // Remove delete button for incomplete tasks
    incompleteTaskDeleteButtons.forEach((button) => button.remove());
    const updatedIncompleteTaskDeleteButtons = document.querySelectorAll('.delete-btn');
    expect(updatedIncompleteTaskDeleteButtons.length).toBe(1); // Assuming Task 1 is now complete and Task 2 is incomplete
  });
});
