const clear = require('./status.js');

describe('clear all completed', () => {
  let dummyDataBase;
  beforeEach(() => {
    dummyDataBase = [
      { check: true, task: 'stop Procrastination', id: 1 },
      { check: false, task: 'stop Procrastination', id: 2 },
      { check: true, task: 'stop Procrastination', id: 3 },
    ];
  });

  test('check true?', () => {
    clear(dummyDataBase);
    dummyDataBase = dummyDataBase.filter((data) => data.check === false);
    expect(dummyDataBase.length).toBe(1);
  });
});