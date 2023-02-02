const localStorageMemory = require('localstorage-memory');

global.localStorage = localStorageMemory;
const dataBase = JSON.parse(localStorage.getItem('dataBase')) || [];

module.exports = dataBase;
