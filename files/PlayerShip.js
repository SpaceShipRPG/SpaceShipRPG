// Imports:
const randomNr = require('./randomNr.js');




// CLASS as constractor for all Ship OBJECTS (Player and AI)
// factory methode

class Ship {
    constructor (name, crew, resources, subsystems, battlestation, shieldValue = [0, 100]) {
        this.name = name
        this.crew = crew
        this.resources = resources
        this.subsystems = subsystems
        this.battlestation = battlestation
        this.shieldValue = shieldValue
    }

    recruit (number){
        this.crew[0] += number
        // this.crew[0] += randomNr(15, 25)
    }

    maintainance(people) {
        this.resources.oxygen[0] -= Math.floor(crew / 10)
        this.resources.water[0] -= Math.floor(crew / 10)
        this.resources.food[0] -= Math.floor(crew / 10)
    }

    buy (resource, quantity) {
        this.resources[resource][0] += quantity
    }
    sell (resource, quantity) {
        this.resources[resource][0] -= quantity
    }
};
//  >>>> Crew als neue Klasse, nicht nur Zahl? Mit Eigenschaften wie Größe, Moral (sinkt wenn Leute sterben >> Wahrscheinlichkeit für Meuterei steigt...). Später vielleicht: Rasse (unterschiedliche Boni und Mali), ChefIngenier : true gibt Bonus bei Reperatur, weitere wichtige CrewMitglieder etc....



class Resources {
    constructor (food = [0, 250], water = [0, 250], oxygen = [0, 250], minerals = [0, 250], drugs = [0, 250], metal = [0, 250], gas = [0, 250], energy = [0, 250], specialTech = [0, 250], shipParts = [0, 250], victoryPoints = [0, 50], credits = [0, 250]) {
        this.food = food
        this.water = water
        this.oxygen = oxygen
        this.minerals = minerals
        this.drugs = drugs
        this.metal = metal
        this.gas = gas
        this.energy = energy
        this.specialTech = specialTech
        this.shipParts = shipParts
        this.victoryPoints = victoryPoints
        this.credits = credits
    }
};

class Subsystems {
    constructor (engine = [0, 100], hull = [0, 100], lifeSupport = [0, 100], shieldGenerator = [0, 100]) {
        this.engine = engine
        this.hull = hull
        this.lifeSupport = lifeSupport
        this.shieldGenerator = shieldGenerator
    }
};

class Weapons {
    constructor (name, dmg, accuracy, rateOfFire, critChance, weaponHP) {
        this.name = name
        this.dmg = dmg
        this.accuracy = accuracy
        this.rateOfFire = rateOfFire
        this.critChance = critChance
        this.weaponHP = weaponHP
    }
};

class Battlestation {
    constructor (laser = undefined, torpedos = undefined) {
        this.laser = laser
        this.torpedos = torpedos
    }
};


const laser = new Weapons ("Laser", 5, 8, 4, 2, [50, 50]);
const torpedos = new Weapons ("Torpedos", 20, 3, 1, 9, [50, 50]);

const playerStartResources = new Resources ([100, 250], [80, 250], [100, 250], [0, 250], [5, 250], [0, 250], [0, 250], [60, 250], [0, 250], [0, 250], [0, 50], [15, Infinity]);

const playerSubsystems = new Subsystems ([100, 100], [125, 125], [90, 90], [100, 100]);
const playerBattlestation = new Battlestation (laser, torpedos)
const playerShip = new Ship ("playerShip", [200, 500], playerStartResources, playerSubsystems, playerBattlestation, [150, 150]);



// Test des neuen Systems mit Array und ohne getter und setter:
// console.log(playerShip.resources.energy)
// playerShip.buy("energy", -5)
// console.log(playerShip.resources.energy)
console.log(playerShip);

// Exports:
exports.playerShip = playerShip;
exports.Ship = Ship;
exports.Resources = Resources;
exports.Subsystems = Subsystems;
exports.Weapons = Weapons;
exports.Battlestation = Battlestation;
exports.laser = laser;
exports.torpedos = torpedos;
exports.playerStartResources = playerStartResources;