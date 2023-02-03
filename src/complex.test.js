const { removeTask, valueUpdate, completibilty } = require('./complex.js');

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
  it('remove one task:"lets say third one"', () => {
    removeTask(dummyDataBase, 2);
    expect(dummyDataBase).toEqual([{ check: false, task: 'stop Procrastination', id: 1 }, { check: false, task: 'stop Procrastination', id: 2 }]);
  });
});

describe('editing the value', () => {
  let dummyDataBase;
  let strike;

  beforeEach(() => {
    dummyDataBase = [
      { check: false, task: 'stop Procrastination', id: 1 },
      { check: false, task: 'stop Procrastination', id: 2 },
      { check: false, task: 'stop Procrastination', id: 3 },
    ];

    // mocking strike as dom editing
    strike = [
      { innerText: 'i don\'t know' },
      { innerText: 'i don\'t know' },
      { innerText: 'i don\'t know' },
    ];

    document.querySelectorAll = jest.fn(() => strike);
  });

  it('edits the first task', () => {
    valueUpdate(dummyDataBase, 0);
    expect(dummyDataBase).toEqual([
      { check: false, task: 'i don\'t know', id: 1 },
      { check: false, task: 'stop Procrastination', id: 2 },
      { check: false, task: 'stop Procrastination', id: 3 },
    ]);
  });
  it('edits the second task', () => {
    valueUpdate(dummyDataBase, 1);
    expect(dummyDataBase).toEqual([
      { check: false, task: 'stop Procrastination', id: 1 },
      { check: false, task: 'i don\'t know', id: 2 },
      { check: false, task: 'stop Procrastination', id: 3 },
    ]);
  });
  it('edits the first task', () => {
    valueUpdate(dummyDataBase, 2);
    expect(dummyDataBase).toEqual([
      { check: false, task: 'stop Procrastination', id: 1 },
      { check: false, task: 'stop Procrastination', id: 2 },
      { check: false, task: 'i don\'t know', id: 3 },
    ]);
  });
});

describe('checkbox checked', () => {
  let dummyDataBase;
  beforeEach(() => {
    dummyDataBase = [
      { check: false, task: 'stop Procrastination', id: 1 },
      { check: true, task: 'stop Procrastination', id: 2 },
      { check: false, task: 'stop Procrastination', id: 3 },
    ];
  });

  test('completed or not: first', () => {
    completibilty(dummyDataBase, 0);
    expect(dummyDataBase[0].check).toBe(true);
  });
  test('completed or not: first', () => {
    completibilty(dummyDataBase, 1);
    expect(dummyDataBase[1].check).toBe(false);
  });
  test('completed or not: first', () => {
    completibilty(dummyDataBase, 2);
    expect(dummyDataBase[2].check).toBe(true);
  });
});
