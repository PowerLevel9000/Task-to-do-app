const dataBase = require('./local')// eslint-disable-line

const clear = () => {
  const filteredBase = dataBase.filter((c) => c.check === false);
  localStorage.setItem('dataBase', JSON.stringify(filteredBase));
  window.location.reload();
};
export default clear;