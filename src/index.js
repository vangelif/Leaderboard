import './style.css';
import addScore from './modules/addScore.js';

const submitBtn = document.getElementById('submit');
const insertedName = document.getElementById('inserted-name');
const insertedScore = document.getElementById('inserted-score');
const fetchedList = document.getElementById('fetched-list');

let scoreBoard = [];

const displayScore = () => {
  fetchedList.innerHTML = '';
  scoreBoard.forEach((item) => {
    const list = document.createElement('li');
    list.innerHTML = `
    <li>${item.name} ${item.score} ${' '} </li><br>`;
    fetchedList.appendChild(list);
  });
};

displayScore();

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  scoreBoard = addScore(insertedName.value, insertedScore.value, scoreBoard);
  displayScore();
});
