const submitForm = require('./submit.js');
const dataBase = require('./local.js');

describe('submitForm functionality', () => {
  beforeEach(() => {
    // i know value is same for every tasks lol
    document.body.innerHTML = '<input type="text" id="taskGen" value="stop Procrastination">';
  });

  it('adds a task "stop Procrastination"', () => {
    submitForm();
    expect(dataBase.length).toBe(1);
    expect(dataBase[0]).toEqual({ check: false, task: 'stop Procrastination', id: 1 });
  });

  it('add another task "congrats you made it"', () => {
    submitForm();
    expect(dataBase.length).toBe(2);
    expect(dataBase[1]).toEqual({ check: false, task: 'stop Procrastination', id: 2 });
  });
  it('add another task "believe in yourself"', () => {
    submitForm();
    expect(dataBase.length).toBe(3);
    expect(dataBase[2]).toEqual({ check: false, task: 'stop Procrastination', id: 3 });
  });
  it('add another task "you are suck why this much testing three is enough"', () => {
    submitForm();
    expect(dataBase.length).toBe(4);
    expect(dataBase[3]).toEqual({ check: false, task: 'stop Procrastination', id: 4 });
  });
  it('add another task "you are suck why this much testing three is enough"', () => {
    submitForm();
    expect(dataBase.length).toBe(5);
    expect(dataBase[4]).toEqual({ check: false, task: 'stop Procrastination', id: 5 });
  });
  it('add another task "you are suck why this much testing three is enough"', () => {
    submitForm();
    expect(dataBase.length).toBe(6);
    expect(dataBase[5]).toEqual({ check: false, task: 'stop Procrastination', id: 6 });
  });
});
