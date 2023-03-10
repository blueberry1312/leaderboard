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
    listPlayers.innerHTML = '';
    this.players.map((player) => {
      const playerDiv = document.createElement('tr');
      const elementPlayer = document.createElement('td');
      elementPlayer.textContent = `${player.user}: ${player.score}`;
      playerDiv.classList.add('player-container');
      playerDiv.appendChild(elementPlayer);
      listPlayers.appendChild(playerDiv);
      return listPlayers;
    });
  };
};

export default Players;