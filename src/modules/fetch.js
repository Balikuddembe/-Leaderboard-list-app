import displayScores from './userInterface.js';

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const { result } = data;
  displayScores(result);
};

export default getData;