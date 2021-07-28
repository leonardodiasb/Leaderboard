import './style.css';

const ul = document.querySelector('#scores-list');
const form = document.querySelector('#form');
const refreshBtn = document.querySelector('#refresh-btn');

const addScores = async (e) => {
    e.preventDefault();
    const input = document.querySelectorAll('input');
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tAMy9yCVSPfnlRMuxTEZ/scores/', {
      method: 'POST',
      body: JSON.stringify({
        user: input[0].value,
        score: Number(input[1].value),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  input[0].value = '';
  input[1].value = '';
};

const refreshScoreList = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tAMy9yCVSPfnlRMuxTEZ/scores/')
      .then((response) => response.json())
      .then((json) => {
        ul.innerHTML = '';
        json.result.forEach((element) => {
          const li = document.createElement('li');
          const p = document.createElement('p');
          p.innerHTML = `${element.user}: ${element.score}`;
          li.appendChild(p);
          ul.appendChild(li);
        });
      });
};

form.addEventListener('submit', addScores);
refreshBtn.addEventListener('click', refreshScoreList);
document.addEventListener('DOMContentLoaded', refreshScoreList);