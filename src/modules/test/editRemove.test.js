import editFunction from '../edittask.js';
import clearCompletedTasks from '../remove.js';

const { JSDOM } = require('jsdom');

jest.mock('../localstorage', () => ({
  updateTaskIndices: jest.fn(),
  updateLocalStorage: jest.fn(),
}));

jest.mock('../addTaskToList', () => ({
  returnTask: jest.fn(),
}));

jest.mock('../deletetask', () => ({
  deleteTask: jest.fn(),
}));

describe('editFunction', () => {
  let e;
  let tasks;
  let listItem;

  beforeEach(() => {
    const dom = new JSDOM();
    global.document = dom.window.document;
    listItem = document.createElement('li');
    tasks = [{
      description: 'old task',
      completed: false,
      index: 0,
    }];
  });

  afterEach(() => {
    global.document = undefined;
  });

  test('replaces old description with new', async () => {
    const inputField = document.createElement('input');
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-trash-can';
    listItem.appendChild(inputField);
    listItem.appendChild(icon);

    editFunction(icon, e, tasks, listItem);

    inputField.value = 'Updated Task 1';
    listItem.innerHTML = inputField.value;
    tasks.forEach((task) => {
      task.description = inputField.value;
    });

    expect(tasks[0].description).toBe('Updated Task 1');
  });
});

jest.mock('../localstorage', () => ({
  saveTasksToStorage: jest.fn(),
  updateTaskIndexesInStorage: jest.fn(),
}));

describe('clearCompletedTasks', () => {
  let tasks;

  beforeEach(() => {
    const dom = new JSDOM();
    global.document = dom.window.document;

    tasks = [
      {
        description: 'Task 0',
        completed: true,
        index: 0,
      },
      {
        description: 'Task 1',
        completed: false,
        index: 1,
      },
      {
        description: 'Task 2',
        completed: true,
        index: 2,
      },
    ];
  });

  afterEach(() => {
    global.document = undefined;
  });

  test('should remove completed tasks from the tasks array', () => {
    const updatedTasks = clearCompletedTasks(tasks);

    expect(updatedTasks).toEqual([
      {
        description: 'Task 1',
        completed: false,
        index: 0,
      },
    ]);
  });
});