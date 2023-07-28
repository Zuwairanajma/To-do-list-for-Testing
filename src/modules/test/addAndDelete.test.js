

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

jest.mock('../localstorage', () => ({
  updateTaskIndexesInStorage: jest.fn(),
  updateLocalStorage: jest.fn(),
}));

describe('deleteTask', () => {
  let listItem;
  let tasks;
  let taskList;

  beforeEach(() => {
    const dom = new JSDOM();
    global.document = dom.window.document;

    taskList = document.createElement('ul');
    listItem = document.createElement('li');
    taskList.appendChild(listItem);
    tasks = [];
  });

  afterEach(() => {
    global.document = undefined;
  });

  test('delete exactly one <li> element', () => {
    deleteTask(listItem, tasks);

    const liElements = taskList.querySelectorAll('li');

    expect(liElements.length).toBe(0);
    expect(updateTaskIndexesInStorage).toHaveBeenCalledWith(tasks);
    expect(updateLocalStorage).toHaveBeenCalledWith(tasks);
  });
});
