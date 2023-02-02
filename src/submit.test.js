const submitForm = require('./submit.js');

it('adds a task "stop Procrastination"', () => {
  document.body.innerHTML = '<input type="text" id="taskGen" value="stop Procrastination">';
  expect(submitForm()).toEqual({ check: false, task: 'stop Procrastination', id: 1 });
});