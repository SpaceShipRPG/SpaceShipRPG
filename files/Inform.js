const PlayerShip = require('./PlayerShip.js');

function inform() {
    console.log(`crew: ${PlayerShip.playerShip.crew}`)
    console.log(PlayerShip.playerShip.resources)
    console.log(PlayerShip.playerShip.resources)
    
}

function informCredit() {
    console.log(`Your current money is: ${PlayerShip.playerShip.resources.credits[0]} units.`);
}
function informCrew() {
    console.log(`The number of your current crew is: ${PlayerShip.playerShip.crew[0]}`);
    console.log(`The maximum number of your current crew can be: ${PlayerShip.playerShip.crew[1]}`);
}
function informSubsystems() {
    console.log(PlayerShip.playerShip.subsystems)
}
exports.inform = inform; 
exports.informCredit = informCredit;
exports.informCrew = informCrew;
exports.informSubsystems = informSubsystems;