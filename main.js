const chalk = require('chalk');
const PlayerShip = require("./files/PlayerShip.js");
const prompt = require('prompt-sync')();


console.clear();
  console.log(chalk.black.bgGreen.bold(`\
  *****************************************************************************************************\r\n\
                                                                                                       \r\n\
            Welcome to Space Ship                                                                      \r\n\
                                                                                                       \r\n\
              Introduction:                                                                            \r\n\
              Space ship is a space game that is played on a square of 21 rows and 21 columns.         \r\n\
              Your home is located at [x: 11, y: 11] where you start your journey.                     \r\n\
              You can only move one step to the left, right, upward and downward:                      \r\n\
                Press 6 to move to the right,                                                          \r\n\
                Press 4 to move to the left,                                                           \r\n\
                press 8 to move upward,                                                                \r\n\
                press 2 to move downward.                                                              \r\n\
                                                                                                       \r\n\
              Your journey will be exciting and dangerous. You will find new planets, asteroid belts,  \r\n\
              nebulae, wormholes, space stations, ship graveyards and you will encounter dangerous     \r\n\
              pirates during the game. Additionally you have the opportunity to trade and hire         \r\n\
              new crew members.                                                                        \r\n\
                                                                                                       \r\n\
              The game will end by visiting the whole universe.                                        \r\n\
                                                                                                       \r\n\
              Enjoy your journey.                                                                      \r\n\
                                                                                                       \r\n\
  *****************************************************************************************************\r `));

 
const shipName = prompt('Please enter your ship name:    ');
PlayerShip.playerShip.name = shipName
const Direction = require('./files/Direction.js');