import Players from './modules/players.js';
import './style.css';

const form = document.querySelector('.form-input');
const [name, score] = form.elements;
const objPlayers = new Players();
const btnRefresh = document.querySelector('.refresh');

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
  responsePost.textContent = '';
});
btnRefresh.addEventListener('click', getAPIs);
objPlayers.displayPlayers();