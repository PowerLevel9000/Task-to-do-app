const { removeTask } = require('./complex.js');

describe('remove task', () => {
  let dummyDataBase;
  beforeEach(() => {
    // as my html generator is working i just need ton care about database so if my database
    //  manipulated
    // my dom i s also manipulated with refresh
    dummyDataBase = [
      { check: false, task: 'stop Procrastination', id: 1 },
      { check: false, task: 'stop Procrastination', id: 2 },
      { check: false, task: 'stop Procrastination', id: 3 },
    ];
  });

  it('remove one task:"lets say second one"', () => {
    removeTask(dummyDataBase, 1);
    expect(dummyDataBase).toEqual([{ check: false, task: 'stop Procrastination', id: 1 }, { check: false, task: 'stop Procrastination', id: 3 }]);
  });

  it('remove one task:"lets say first one"', () => {
    removeTask(dummyDataBase, 0);
    expect(dummyDataBase).toEqual([{ check: false, task: 'stop Procrastination', id: 2 }, { check: false, task: 'stop Procrastination', id: 3 }]);
  });
});