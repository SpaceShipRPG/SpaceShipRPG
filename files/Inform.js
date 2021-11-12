const PlayerShip = require('./PlayerShip.js');
const chalk = require('chalk');

function informAll() {
    const abr = PlayerShip.playerShip;
    console.log(chalk.bgCyan.bold('Your ship is:', abr.name));
    const infAll = {
        Crew: {
            Available: abr.crew[0],
            'Storage capacity': abr.crew[1]
        },
        Food: {
            Available: abr.resources.food[0],
            'Storage capacity': abr.resources.food[1]
        },
        Water: {
            Available: abr.resources.water[0],
            'Storage capacity': abr.resources.water[1]
        },
        Oxygen: {
            Available: abr.resources.oxygen[0],
            'Storage capacity': abr.resources.oxygen[1]
        },
        Minerals: {
            Available: abr.resources.minerals[0],
            'Storage capacity': abr.resources.minerals[1]
        },
        Medicine: {
            Available: abr.resources.drugs[0],
            'Storage capacity': abr.resources.drugs[1]
        },
        Metal: {
            Available: abr.resources.metal[0],
            'Storage capacity': abr.resources.metal[1]
        },
        Gas: {
            Available: abr.resources.gas[0],
            'Storage capacity': abr.resources.gas[1]
        },
        Energy: {
            Available: abr.resources.energy[0],
            'Storage capacity': abr.resources.energy[1]
        },
        'Special-Tech': {
            Available: abr.resources.specialTech[0],
            'Storage capacity': abr.resources.specialTech[1]
        },
        'Ship-Parts': {
            Available: abr.resources.shipParts[0],
            'Storage capacity': abr.resources.shipParts[1]
        },
        // Besser eine Extra-Tabelle für die Subsysteme? Die zwei Spalten sollten dann auch anders heißen. Vielleicht "current state" und "Max. Structur Points"?
        Hull: {
            Available: abr.subsystems.hull[0],
            'Storage capacity': abr.subsystems.hull[1]
        },
        'Life support system': {
            Available: abr.subsystems.lifeSupport[0],
            'Storage capacity': abr.subsystems.lifeSupport[1]
        },
        Engine: {
            Available: abr.subsystems.engine[0],
            'Storage capacity': abr.subsystems.engine[1]
        },
        'Shield Generator': {
            Available: abr.subsystems.shieldGenerator[0],
            'Storage capacity': abr.subsystems.shieldGenerator[1]
        }
    }
    console.table(infAll)
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


function infoShip() {
    const infoShip = [{
        Oxygen: PlayerShip.playerShip.resources.oxygen[0],
        Water: PlayerShip.playerShip.resources.water[0],
        Food: PlayerShip.playerShip.resources.food[0],
        Energy: PlayerShip.playerShip.resources.energy[0],
        Crew: PlayerShip.playerShip.crew[0],
        Money: PlayerShip.playerShip.resources.credits[0],
    }]
    console.table(infoShip);
}
exports.informAll = informAll; 
exports.informCredit = informCredit;
exports.informCrew = informCrew;
exports.informSubsystems = informSubsystems;
exports.infoShip = infoShip;