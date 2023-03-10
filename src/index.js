import Players from './modules/players.js';
import './style.css';

const form = document.querySelector('.form-input');
const [name, score] = form.elements;
const objPlayers = new Players();
const btnRefresh = document.querySelector('.refresh');

if (localStorage.savedPlayers) {
  objPlayers.players = JSON.parse(localStorage.getItem('savedPlayers'));
}

/* Creating a new game
const keyNewGameAPIs = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({ name: "Nestor's cool name" }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
*/

const getAPIs = async () => {
  const response = await fetch(`
    https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/axlELeQfujsKhZWX2fBD/scores`);
  const data = await response.json();
  objPlayers.players = data.result;
  objPlayers.displayPlayers();
  return data.result;
};

const postPlayer = async (newPlayer) => {
  const response = await fetch(
    `
  https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/axlELeQfujsKhZWX2fBD/scores`,
    {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(newPlayer),
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = await response.json();
  return data.result;
};

form.addEventListener('submit', async (e) => {
  const responsePost = document.querySelector('.response-post');
  e.preventDefault();
  const newPlayer = {
    user: name.value,
    score: score.value,
  };
  responsePost.textContent = await postPlayer(newPlayer);
  name.value = '';
  score.value = '';
  setTimeout(() => {
    responsePost.textContent = '';
  }, 5000);
});
btnRefresh.addEventListener('click', getAPIs);
objPlayers.displayPlayers();
objPlayers.populateFields();