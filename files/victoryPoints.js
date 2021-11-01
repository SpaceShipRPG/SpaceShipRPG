const PlayerShip = require('./PlayerShip.js');

// Wann soll diese Funktion benutzt werden? Wenn man Resourcen bei Home gegen Siegpunkte eintauscht, oder wenn die anderen Siegbedigungen erfüllt sind, das Spiel beendet wird und dann werden die restlichen Resourcen eventuell gegen Siegpunkte verrechnet? Oder sogar beides?
// Falls es Abliefern der Resourcen ist, dann müssen diese noch vom Schiff abgezogen werden, nachdem man die Siegpunkte bekommen hat.
// Ein Control.log nach dem Übertragen der Siegpunkte wäre nicht schlecht, welches Anzeigt wie viel man bekommen hat.
// Falls hier alle übrigen Resourcen gegen Siegpunkte verrechnet werden sollen, sollte es vielleicht noch einen Loop geben, der nacheinander alle Resourcen durch geht?

function victoryPoints(what, quantity) {

    switch (what) {
        case 'credits' :
            if (quantity > PlayerShip.playerShip.resources.credits[0]) {
                quantity === credits;
            }
            PlayerShip.playerShip.resources.victoryPoints[0] += quantity;
            break;
        case 'minerals':
            if (quantity > PlayerShip.playerShip.resources.mineral[0]) {
                quantity === PlayerShip.playerShip.resources.mineral[0];
            }
            PlayerShip.playerShip.resources.victoryPoints[0] += quantity * 2;
            break;
        case 'metal':
            if (quantity > PlayerShip.playerShip.resources.metal[0]) {
                quantity === PlayerShip.playerShip.resources.metal[0];
            }
            PlayerShip.playerShip.resources.victoryPoints[0] += quantity * 4;
            break;
        case 'gas':
            if (quantity > PlayerShip.playerShip.resources.gas[0]) {
                quantity === PlayerShip.playerShip.resources.gas[0];
            }
            PlayerShip.playerShip.resources.victoryPoints[0] += quantity * 8;
            break;
        case 'specialTech':
            if (quantity > PlayerShip.playerShip.resources.specialTech[0]) {
                quantity === PlayerShip.playerShip.resources.specialTech[0];
            }
            PlayerShip.playerShip.resources.victoryPoints[0] += quantity * 16;
            break;
    };
};

exports.victoryPoints = victoryPoints;