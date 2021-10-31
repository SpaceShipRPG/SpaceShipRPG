const PlayerShip = require('./PlayerShip.js');
const randomNr = require('./randomNr.js');

function mine (what) {
    let amount = Math.floor(this.crew * randomNr(0.8, 1.2) / 10);
    amount = (amount > PlayerShip.playerShip.resources[what][1] - PlayerShip.playerShip.resources[what][0]) ? PlayerShip.playerShip.resources[what][1] - PlayerShip.playerShip.resources[what][0] : amount;
    PlayerShip.playerShip.buy(what, quantity);
}



/*    switch (what) {
        case 'water':
            PlayerShip.mineWater = quantity
            break;
        case 'mineral':
            PlayerShip.mineMetal = quantity
            break;
        case 'metal':
            PlayerShip.mineMetal = quantity
            break;
        case 'gas':
            PlayerShip.mineGas = quantity
            break;
        case 'energy':
            PlayerShip.mineEnergy = quantity
            break;
    }       */