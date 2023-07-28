import clearCompletedTasks from '../remove.js';

const { JSDOM } = require('jsdom');

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
