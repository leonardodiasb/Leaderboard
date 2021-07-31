const tbody = document.querySelector('#scores-list');
const form = document.querySelector('#form');
const refreshBtn = document.querySelector('#refresh-btn');

const addScores = async (e) => {
  e.preventDefault();
  const input = document.querySelectorAll('input');
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BiksNeQJh8tuANM43GM8/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: input[0].value,
      score: Number(input[1].value),
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  input[0].value = '';
  input[1].value = '';
};

const refreshScoreList = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BiksNeQJh8tuANM43GM8/scores/')
    .then((response) => response.json())
    .then((json) => {
      tbody.innerHTML = '';
      json.result.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        } if (b.score < a.score) {
          return -1;
        }
        return 0;
      });
      json.result.forEach((element) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.innerHTML = `${element.user}`;
        tr.appendChild(td1);
        td2.innerHTML = `${element.score}`;
        tr.appendChild(td2);
        tbody.appendChild(tr);
      });
    });
};

form.addEventListener('submit', addScores);
refreshBtn.addEventListener('click', refreshScoreList);
document.addEventListener('DOMContentLoaded', refreshScoreList);