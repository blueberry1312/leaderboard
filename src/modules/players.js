const Players = class {
  constructor(name, score) {
    this.name = name;
    this.score = score;
    this.players = [];
  }

  populateFields = () => {
    localStorage.setItem('savedPlayers', JSON.stringify(this.players));
  };

  removePlayer(player) {
    const result = this.players.filter((b) => b !== player);
    this.players = result;
    this.populateFields();
  }

  addPlayer = (newPlayer) => {
    this.players.push(newPlayer);
    this.populateFields();
    this.displayPlayers();
  };

  displayPlayers = () => {
    const listPlayers = document.querySelector('.players-list');
    listPlayers.innerHTML = '';
    if (this.players.length > 0) {
      this.players.map((player) => {
        const playerDiv = document.createElement('tr');
        const elementPlayer = document.createElement('td');

        elementPlayer.textContent = `${player.name}: ${player.score}`;

        playerDiv.classList.add('player-container');
        playerDiv.appendChild(elementPlayer);

        listPlayers.appendChild(playerDiv);
        return listPlayers;
      });
    } else {
      const playerDiv = document.createElement('tr');
      const elementPlayer = document.createElement('td');
      elementPlayer.textContent = 'Add new player';
      playerDiv.classList.add('player-container');
      playerDiv.appendChild(elementPlayer);
      listPlayers.appendChild(playerDiv);
    }
  };
};

export default Players;