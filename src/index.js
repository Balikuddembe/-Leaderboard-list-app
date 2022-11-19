import './style.css';
import newScore from './modules/storage.js';
import getData from './modules/fetch.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gQxRXsSqZhbfITVQg4H7/scores';
document.querySelector('.refresh-btn').addEventListener('click', () => {
  window.location.reload();
});

const form = document.querySelector('#user-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userName = document.querySelector('#name').value;
  const userScore = document.querySelector('#score').value;

  const data = {
    user: userName,
    score: userScore,
  };

  newScore(url, data);

  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
});
getData(url);