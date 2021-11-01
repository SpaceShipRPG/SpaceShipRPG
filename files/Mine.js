const PlayerShip = require('./PlayerShip.js');
const randomNr = require('./randomNr.js');

function mine (what, source) {
    const storageCapacity = PlayerShip.playerShip.resources[what][1] - PlayerShip.playerShip.resources[what][0]; 
    let amount = Math.floor(PlayerShip.playerShip.crew[0] * randomNr(0.8, 1.2,1) / 20);

    // wenn mehr abgebaut werden soll, als vorhanden ist, Wert auf max setzten
    amount = (amount > source.resources[what][0]) ? source.resources[what][0] : amount;

    // wenn amount größer ist als Lagerkapazität, dann Lagerkapazität, sonst amount.
    amount = (amount > storageCapacity) ? storageCapacity : amount;
    PlayerShip.playerShip.buy(what, amount);

    source.resources[what][0] -= amount;
    PlayerShip.playerShip.sell("energy", 1);
};
exports.mine = mine;