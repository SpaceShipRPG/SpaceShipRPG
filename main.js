/* const Ship = require('./alteDateien/Ship')

const testSchiff = new Ship ('Test-Schiff', 200, {shields: 50}, {water: 25, oxygen: 20, energy: 30, food: 25})

console.log(neue) */

const chalk = require('chalk');
console.clear();
  console.log(chalk.yellow.bgRed.bold(`\
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
              Your journey will be exciting and dangerous. You will find new planets, asteroid belt,   \r\n\
              nebula, wormholes, space stations, graveyards and you will encounter dangerous           \r\n\
              pirates during the game. Additionally you have the opportunity to trade and hire         \r\n\
              crew members.                                                                            \r\n\
                                                                                                       \r\n\
              The game will end by visiting the whole universe.                                        \r\n\
                                                                                                       \r\n\
              Enjoy your journey.                                                                      \r\n\
                                                                                                       \r\n\
  *****************************************************************************************************\r `))