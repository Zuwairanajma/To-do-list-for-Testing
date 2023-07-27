const { JSDOM } = require('jsdom');
const { addTaskToList } = require('../addTaskToList.js');

describe('addTaskToList', () => {
  let taskList;
  let tasks;

  beforeEach(() => {
    const dom = new JSDOM();
    global.document = dom.window.document;

    taskList = document.createElement('ul');
    tasks = [];
  });

  afterEach(() => {
    global.document = undefined;
  });

  test('creates exactly one <li> element', () => {
    const task = {
      description: 'Sample task',
      completed: false,
    };

    addTaskToList(task, taskList, tasks);

    const liElements = taskList.querySelectorAll('li');

    expect(liElements.length).toBe(1);
  });
});