const dataBase = require('./local.js');

const submitForm = () => {
  const taskGen = document.getElementById('taskGen');
  if (taskGen.value.trim() === '') return;
  dataBase.push({ check: false, task: `${taskGen.value}`, id: dataBase.length + 1 });
  localStorage.setItem('dataBase', JSON.stringify(dataBase));
  taskGen.value = '';
  // as my test cases need something to return that's why i added this line 
  // not part of application
  return dataBase[dataBase.length - 1]; // eslint-disable-line   
};

module.exports = submitForm;