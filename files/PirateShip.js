// Import:
const randomNr = require('./randomNr.js');
const PlayerShip = require("./PlayerShip.js");



const pirateResources = new PlayerShip.Resources ();
const pirateStrongBattlestation = new PlayerShip.Battlestation (PlayerShip.laser, PlayerShip.torpedos);
const pirateWeakBattlestation = new PlayerShip.Battlestation (PlayerShip.laser);

const pirateSubsystems01 = new PlayerShip.Subsystems ([randomNr(80, 95), 95], [randomNr(80, 100), 100], [randomNr(70, 95), 95], [randomNr(75, 90), 90]);
const pirateShip01 = new PlayerShip.Ship ("Pirates of the Solar System", [randomNr(135, 160), 160], pirateResources, pirateSubsystems01, pirateStrongBattlestation, [randomNr(75, 90), 90]);

const pirateSubsystems02 = new PlayerShip.Subsystems ([randomNr(65, 82), 82], [randomNr(70, 90), 90], [randomNr(60, 75), 75], [randomNr(65, 80), 80]);
const pirateShip02 = new PlayerShip.Ship ("Stelar Thieves", [randomNr(115, 145), 145], pirateResources, pirateSubsystems02, pirateStrongBattlestation, [randomNr(65, 85), 85]);

const pirateSubsystems03 = new PlayerShip.Subsystems ([randomNr(50, 65), 65], [randomNr(50, 70), 70], [randomNr(55, 65), 65], randomNr(55, 65));
const pirateShip03 = new PlayerShip.Ship ("Desperate Desperados", [randomNr(75, 100), 100], pirateResources, pirateSubsystems03, pirateWeakBattlestation, [randomNr(55, 70), 70]);

const pirateSubsystems04 = new PlayerShip.Subsystems ([randomNr(40, 55), 55], [randomNr(40, 55), 55], [randomNr(40, 52), 52], [randomNr(40, 52), 52]);
const pirateShip04 = new PlayerShip.Ship ("Weak but Mean", [randomNr(50, 65), 65], pirateResources, pirateSubsystems04, pirateWeakBattlestation, [randomNr(40, 55), 55]);

const pirateSubsystems05 = new PlayerShip.Subsystems ([randomNr(30, 45), 45], [randomNr(25, 40), 40], [randomNr(25, 40), 40], [randomNr(30, 42), 42]);
const pirateShip05 = new PlayerShip.Ship ("Suicide Mission", [randomNr(40, 55), 55], pirateResources, pirateSubsystems05, pirateWeakBattlestation, [randomNr(30, 45), 45]);


function randomPirate() {
    let random = randomNr(1, 100);
    let pirate;

    if (random <= 100) {pirate = pirateShip05};
    if (random < 80) {pirate = pirateShip04};
    if (random < 45) {pirate = pirateShip03};
    if (random < 25) {pirate = pirateShip02};
    if (random <= 10) {pirate = pirateShip01};

    // Falls Piratenschiff schon kaputt ist, wird es vor dem Spawnen repariert:
    pirate.shieldValue[0] = pirate.shieldValue[0] <= 0 ? pirate.shieldValue[1] : pirate.shieldValue[0];  
    pirate.subsystems.hull[0] = pirate.subsystems.hull[0] <= 0 ? pirate.subsystems.hull[1] : pirate.subsystems.hull[0];  

    return pirate;
};


exports.pirateShip01 = pirateShip01;
exports.pirateShip02 = pirateShip02;
exports.pirateShip03 = pirateShip03;
exports.pirateShip04 = pirateShip04;
exports.pirateShip05 = pirateShip05;
exports.randomPirate = randomPirate;