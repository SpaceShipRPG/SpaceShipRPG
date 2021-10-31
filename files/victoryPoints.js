const PlayerShip = require('./PlayerShip.js');

function victoryPoints(what, quantity) {


    switch (what) {
        case 'money' :
            if (quantity > PlayerShip.playerShip.resources.credits[0]) {
                quantity === credits
            }
            PlayerShip.playerShip.resources.victoryPoints[0] = quantity
            break;
        case 'mineral':
            if (quantity > PlayerShip.playerShip.resources.mineral[0]) {
                quantity === PlayerShip.playerShip.resources.mineral[0]
            }
            PlayerShip.playerShip.resources.victoryPoints[0] = quantity * 2
            break;
        case 'metal':
            if (quantity > PlayerShip.playerShip.resources.metal[0]) {
                quantity === PlayerShip.playerShip.resources.metal[0]
            }
            PlayerShip.playerShip.resources.victoryPoints[0] = quantity * 4
            break;
        case 'gas':
            if (quantity > PlayerShip.playerShip.resources.gas[0]) {
                quantity === PlayerShip.playerShip.resources.gas[0]
            }
            PlayerShip.playerShip.resources.victoryPoints[0] = quantity * 8
            break;
        case 'specialTech':
            if (quantity > PlayerShip.playerShip.resources.specialTech[0]) {
                quantity === PlayerShip.playerShip.resources.specialTech[0]
            }
            PlayerShip.playerShip.resources.victoryPoints[0] = quantity * 16
            break;
    }
};

exports.victoryPoints = victoryPoints;