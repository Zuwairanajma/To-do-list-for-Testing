import completionFunction from '../completingTask.js';

const { JSDOM } = require('jsdom');

jest.mock('../localstorage', () => ({
  updateLocalStorage: jest.fn(),
}));

describe('completionFunction', () => {
  beforeEach(() => {
    const dom = new JSDOM();
    global.document = dom.window.document;
  });

  afterEach(() => {
    global.document = undefined;
  });
  test('should set task.completed to true', () => {
    const task = {
      description: 'Task 1',
      completed: false,
      index: 0,
    };

    const checkbox = {
      target: {
        parentElement: document.createElement('li'),
      },
    };

    completionFunction(checkbox, [task], task);

    expect(task.completed).toBe(true);
  });
});
