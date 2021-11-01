const PlayerShip = require('./PlayerShip.js');

function inform() {
/*     console.log(`crew: ${PlayerShip.playerShip.crew}`)
    console.log(PlayerShip.playerShip.resources)
    console.log(PlayerShip.playerShip.resources) */
    console.log(`Your current money is: ${PlayerShip.playerShip.resources.credits[0]}`);
}

exports.inform = inform; 