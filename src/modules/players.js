const Players = class {
  constructor(user, score) {
    this.user = user;
    this.score = score;
    this.players = [];
  }

  addPlayer = (newPlayer) => {
    this.players.push(newPlayer);
    this.displayPlayers();
  };

  displayPlayers = () => {
    const listPlayers = document.querySelector('.players-list');
    const tHead = document.createElement('thead');
    const tHeader1 = document.createElement('th');
    const tHeader2 = document.createElement('th');
    const tBody = document.createElement('tbody');
    tHeader1.textContent = 'User';
    tHeader2.textContent = 'Score';
    tHead.appendChild(tHeader1);
    tHead.appendChild(tHeader2);
    listPlayers.innerHTML = '';
    listPlayers.appendChild(tHead);
    listPlayers.appendChild(tBody);
    this.players.map((player) => {
      const playerDiv = document.createElement('tr');
      const elementPlayer1 = document.createElement('td');
      const elementPlayer2 = document.createElement('td');
      elementPlayer1.textContent = `${player.user}`;
      elementPlayer2.textContent = `${player.score}`;
      playerDiv.classList.add('player-container');
      playerDiv.appendChild(elementPlayer1);
      playerDiv.appendChild(elementPlayer2);
      tBody.appendChild(playerDiv);
      return listPlayers;
    });
  };
};

export default Players;