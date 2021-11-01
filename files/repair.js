const PlayerShip = require('./PlayerShip.js');


function fullRepair () {
    for (const [key, value] of Object.entries(PlayerShip.playerShip.subsystems)) {
        value[0] = value[1];
    };
    console.log("Your ship is now fully repaired!");
};


function selfRepair () {
    let notification = [];
    for (const [key, value] of Object.entries(PlayerShip.playerShip.subsystems)) {
        if (value[1] - value[0] > 0) {
            let damage = value[1] - value[0];
            let factor = 0;
                if (PlayerShip.playerShip.crew[0] <= 50) {factor = 0.01};
                if (PlayerShip.playerShip.crew[0] > 50) {factor = 0.02};
                if (PlayerShip.playerShip.crew[0] > 100) {factor = 0.025};
                if (PlayerShip.playerShip.crew[0] >= 200) {factor = 0.03};
                if (PlayerShip.playerShip.crew[0] >= 300) {factor = 0.04};
                if (PlayerShip.playerShip.crew[0] >= 400) {factor = 0.05};
            value[0] += Math.round(damage * factor);
            notification.push(`${key} ${Math.round(damage * factor)}`);
        };
    };
    if (notification.length > 0) {
        console.log(`Your damage crew did emergency repairs:     ${notification.join(",  ")}.`);
    };
};


function shieldRecharge () {
    if (PlayerShip.playerShip.shieldValue[0] !== PlayerShip.playerShip.shieldValue[1]) {
        PlayerShip.playerShip.shieldValue[0] = PlayerShip.playerShip.shieldValue[1];
        console.log("Your shields are fully recharged.");
    };
};


exports.fullRepair = fullRepair;
exports.selfRepair = selfRepair;
exports.shieldRecharge = shieldRecharge;