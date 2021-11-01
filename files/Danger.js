const randomNr = require('./randomNr.js');
const chalk = require('chalk');
const PlayerShip = require("./PlayerShip.js");
const crew = PlayerShip.playerShip.crew;
const resources = PlayerShip.playerShip.resources;
const subsystems = PlayerShip.playerShip.subsystems;


// jede Gefahr muss jede Runde aktiviert werden, in der der Spieler da bleibt

function accident(type) {
    let risk = 0;
    if (type === "Astroid") {risk = 5};
    if (type === "Nebula") {risk = 6};
    if (type === "Star") {risk = 8};
    if (type === "Graveyard") {risk = 5};


    let randomAccident = randomNr(0, 10);
    let badLuck = risk - randomAccident;
    let damage = 0;
    if (badLuck <= 0) {badLuck = 1};

    if (risk > randomAccident) {
        
        switch (type){

            case 'Astroid' : {
                subsystems.hull[0] -= badLuck // selbe System als in fight, das wandelt dmg erstmal um Hülle und dann um Strucktur
                console.log(chalk.black.bgRed.bold`    Your ship was hit by an astroid! Your hull took ${badLuck} damage.    `);
                break;}

            case 'Nebula' : {
                damage = Math.floor((crew[0] / 80) * badLuck);
                resources.oxygen[0] = (resources.oxygen[0] - damage < 0) ? 0 : resources.oxygen[0] - damage;
                resources.water[0] = (resources.water[0] - damage < 0) ? 0 : resources.water[0] - damage;
                resources.food[0] = (resources.food[0] - damage < 0) ? 0 : resources.food[0] - damage;
                console.log(chalk.black.bgRed.bold`    An accident happenend in the nebula! Your ship lost ${damage} oxygen, water and food.    `);
                break;}

            case 'Star' : {
                damage = Math.floor(badLuck * 1.5);
                subsystems.hull[0] -= damage; // selbe System als in fight, das wandelt dmg erstmal um Hülle und dann um Strucktur
                console.log(chalk.black.bgRed.bold`    Your ship was hit by a solar storm! Your hull took ${damage} damage.    `);
                break;}

            case 'Graveyard' :{
                subsystems.hull[0] -= badLuck; // selbe System als in fight, das wandelt dmg erstmal um Hülle und dann um Strucktur
                console.log(chalk.black.bgRed.bold`    Your ship hit debris in the ship graveyard! Your hull took ${badLuck} damage.    `);
                break;}

            default:
                break;
                
        };
    };
};

exports.accident = accident;