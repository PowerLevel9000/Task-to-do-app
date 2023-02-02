const dataBase = require('./local');
const submitForm = () => {
    const taskGen = document.getElementById('taskGen');
    if (taskGen.value.trim() === '') return;
    dataBase.push({ check: false, task: `${taskGen.value}`, id: dataBase.length + 1 });
    localStorage.setItem('dataBase', JSON.stringify(dataBase));
    taskGen.value = '';
    return dataBase[dataBase.length - 1];
};

module.exports = submitForm;