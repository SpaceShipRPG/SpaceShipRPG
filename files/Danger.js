const randomNr = require('./randomNr.js');
const PlayerShip = require("./PlayerShip.js");


// jede Gefahr muss jede Runde aktiviert werden, in der der Spieler da bleibt

function accident(type) {
    let risk = 0;
    if (type = "Astroid") {risk = 5};
    if (type = "Nebula") {risk = 6};
    if (type = "Star") {risk = 8};
    if (type = "Graveyard") {risk = 5};


    let randomAccident = randomNr(0, 10);
    let badLuck = risk - randomAccident
    if (risk > randomAccident) {
        
        switch (type){

            case 'Astroid' : 
                PlayerShip.playerShip.subsystems.hull[0] -= badLuck // selbe System als in fight, das wandelt dmg erstmal um Hülle und dann um Strucktur
                break;

            case 'Nebula' : 
                PlayerShip.playerShip.resources.oxygen[0] -= crew * badLuck
                PlayerShip.playerShip.resources.water[0] -= crew * badLuck
                PlayerShip.playerShip.resources.food[0] -= crew * badLuck
                break;

            case 'Star' : 
                PlayerShip.playerShip.subsystems.hull[0] -= badLuck * 1.5 // selbe System als in fight, das wandelt dmg erstmal um Hülle und dann um Strucktur
                break;

            case 'Graveyard' :   
                PlayerShip.playerShip.subsystems.hull[0] -= badLuck // selbe System als in fight, das wandelt dmg erstmal um Hülle und dann um Strucktur
                break;
        }
    }
};

exports.accident = accident;