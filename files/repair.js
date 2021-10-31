const PlayerShip = require('./PlayerShip.js');

function fullRepair () {
    for (const [key, value] of Object.entries(PlayerShip.playerShip.subsystems))
        value[0] = value[1];
};

function selfRepair () {
    for (const [key, value] of Object.entries(PlayerShip.playerShip.subsystems)) {
        let demage = value[1] - value[0];
        let factor = 0;
            if (PlayerShip.playerShip.crew[0] <= 50) {factor = 0.01};
            if (PlayerShip.playerShip.crew[0] > 50) {factor = 0.02};
            if (PlayerShip.playerShip.crew[0] > 100) {factor = 0.025};
            if (PlayerShip.playerShip.crew[0] > 200) {factor = 0.03};
        value[0] += Math.round(demage * factor);
    }
};

function shieldRecharge () {
    PlayerShip.playerShip.shieldValue[0] = PlayerShip.playerShip.shieldValue[1];
}

exports.fullRepair = fullRepair;
exports.selfRepair = selfRepair;
exports.shieldRecharge = shieldRecharge;