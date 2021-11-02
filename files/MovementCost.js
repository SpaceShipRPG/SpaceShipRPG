const PlayerShip = require('./PlayerShip.js');
const prompt = require('prompt-sync')();
const chalk = require('chalk');

function movCost() {
  
  const energyAvail = PlayerShip.playerShip.resources.energy[0];

  if (energyAvail >= 1 ) {
    PlayerShip.playerShip.resources.energy[0] -= 1;
  } else {
    console.log(chalk.black.bgRed.bold('You have not enough energy to move your ship!'));
    GameState.stopPlaying();
    return;
  }
}

exports.movCost = movCost;

