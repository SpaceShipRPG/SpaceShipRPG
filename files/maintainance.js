const PlayerShip = require("./PlayerShip.js");
const randomNr = require('./randomNr.js');
const ship = PlayerShip.playerShip;


function maintainance() {
    ship.resources.oxygen[0] -= Math.floor(ship.crew[0] / 50);
        if (ship.resources.oxygen[0] <= 0 && ship.crew[0] <= 50) {
            ship.crew[0] -= 3;
            ship.resources.oxygen[0] = 0;
        } else if (ship.resources.oxygen[0] <= 0 && ship.crew[0] > 50) {
            ship.crew[0] -= Math.floor(-(ship.resources.oxygen[0]) * 3);
            ship.resources.oxygen[0] = 0;
        };

    ship.resources.water[0] -= Math.floor(ship.crew[0] / 50);
        if (ship.resources.water[0] <= 0 && ship.crew[0] <= 50) {
            ship.crew[0] -= 3;
            ship.resources.water[0] = 0;
        } else if (ship.resources.water[0] <= 0 && ship.crew[0] > 50) {
            ship.crew[0] -= Math.floor(-(ship.resources.water[0]) * 3);
            ship.resources.water[0] = 0;
        };

    ship.resources.food[0] -= Math.floor(ship.crew[0] / 50);
        if (ship.resources.food[0] <= 0 && ship.crew[0] <= 50) {
            ship.crew[0] -= 3;
            ship.resources.food[0] = 0;
        } else if (ship.resources.food[0] <= 0 && ship.crew[0] > 50) {
            ship.crew[0] -= Math.floor(-(ship.resources.food[0]) * 3);
            ship.resources.food[0] = 0;
        };

    if (ship.crew[0] <= 0) {
        console.log("Your crew is dead and you lost the game!");

        //  Hier muss noch was richtiges rein, nicht nur ein Console.log! Spiel ist zu ende, wenn das hier erfüllt ist.
    };
};

exports.maintainance = maintainance;