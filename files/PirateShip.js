// Import:
const randomNr = require('./randomNr.js');
const PlayerShip = require("./PlayerShip.js");
const Ship = require('./PlayerShip.js');
const Resources = require('./PlayerShip.js');
const Subsystems = require('./PlayerShip.js');
const Weapons = require('./PlayerShip.js');
const laser = require('./PlayerShip.js');
const torpedos = require('./PlayerShip.js');



// const test = new PlayerShip.Ship();


const pirateResources = new PlayerShip.Resources ();

const pirateSubsystems01 = new PlayerShip.Subsystems (randomNr(80, 95), randomNr(80, 100), randomNr(70, 90), randomNr(75, 90), PlayerShip.laser, PlayerShip.torpedos);
const pirateShip01 = new PlayerShip.Ship ("Pirates of the Solar System", randomNr(135, 160), pirateResources, pirateSubsystems01);

const pirateSubsystems02 = new PlayerShip.Subsystems (randomNr(65, 82), randomNr(70, 90), randomNr(60, 75), randomNr(65, 80), PlayerShip.laser, PlayerShip.torpedos);
const pirateShip02 = new PlayerShip.Ship ("Stelar Thieves", randomNr(115, 145), pirateResources, pirateSubsystems02);

const pirateSubsystems03 = new PlayerShip.Subsystems (randomNr(50, 65), randomNr(50, 70), randomNr(55, 65), randomNr(55, 65), PlayerShip.laser);
const pirateShip03 = new PlayerShip.Ship ("Desperate Desperados", randomNr(75, 100), pirateResources, pirateSubsystems03);

const pirateSubsystems04 = new PlayerShip.Subsystems (randomNr(40, 55), randomNr(40, 55), randomNr(40, 52), randomNr(40, 52), PlayerShip.laser);
const pirateShip04 = new PlayerShip.Ship ("Weak but Mean", randomNr(50, 65), pirateResources, pirateSubsystems04);

const pirateSubsystems05 = new PlayerShip.Subsystems (randomNr(30, 45), randomNr(25, 40), randomNr(25, 40), randomNr(30, 42), PlayerShip.laser);
const pirateShip05 = new PlayerShip.Ship ("Suicide Mission", randomNr(40, 55), pirateResources, pirateSubsystems05);