const PlayerShip = require('./PlayerShip.js');
const randomNr = require('./randomNr.js');

function mine (what) {
    const storageCapacity = PlayerShip.playerShip.resources[what][1] - PlayerShip.playerShip.resources[what][0]; 
    let amount = Math.floor(PlayerShip.playerShip.crew[0] * randomNr(0.8, 1.2,1) / 10);
    console.log(randomNr(0.8,1.2,1));
    //let amount = Math.floor(this.crew * randomNr(0.8, 1.2) / 10);

     // wenn amount größer ist als Lagerkapazität, dann Lagerkapazität, sonst amount.
    amount = (amount > storageCapacity) ? storageCapacity : amount;
    PlayerShip.playerShip.buy(what, amount);
};
exports.mine = mine;