import './style.css';
import addScore from './modules/addScore.js';

const refreshBtn = document.getElementById('refresh');
const submitBtn = document.getElementById('submit');
const insertedName = document.getElementById('inserted-name');
const insertedScore = document.getElementById('inserted-score');
const fetchedList = document.getElementById('fetched-list');

// let scoreBoard = [];

const api =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';

const displayScore = async () => {
  // fetchedList.innerHTML = '';

  await fetch(api)
    .then((response) => response.json())
    .then((json) => {
      const scoreBoard = json.result;
      scoreBoard.forEach((item) => {
        const list = document.createElement('li');
        list.innerHTML = `${item.user} ${'scored'} ${
          item.score
        } ${'points'}<br>`;
        fetchedList.appendChild(list);
      });
    });
};

refreshBtn.addEventListener('click', () => {
  displayScore();
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addScore(api, insertedName.value, insertedScore.value);
  displayScore();
});

displayScore();
