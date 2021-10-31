const PlayerShip = require('./PlayerShip.js');
const randomNr = require('./randomNr.js');

function mine (what) {
    let amount = Math.floor(this.crew * randomNr(0.8, 1.2) / 10);
    amount = (amount > PlayerShip.playerShip.resources[what][1] - PlayerShip.playerShip.resources[what][0]) ? PlayerShip.playerShip.resources[what][1] - PlayerShip.playerShip.resources[what][0] : amount;
    PlayerShip.playerShip.buy(what, quantity);
};

exports.mine = mine;