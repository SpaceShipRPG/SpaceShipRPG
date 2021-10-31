// Imports:
const randomNr = require('./randomNr.js')




// CLASS as constractor for all Ship OBJECTS (Player and AI)
// factory methode

class Ship {
    constructor (name, crew, victoryPoints = [0, 50], resources, subsystems, ) {
        this.name = name
        this.crew = crew
        this.victoryPoints = victoryPoints
        this.resources = resources
        this.subsystems = subsystems
    }

    recruit (number){
        this.crew[0] += number
        // this.crew[0] += randomNr(15, 25)
    }

    set maintainance(people) {
        this.resources.oxygen[0] -= Math.floor(crew / 10)
        this.resources.water[0] -= Math.floor(crew / 10)
        this.resources.food[0] -= Math.floor(crew / 10)
    }
    repairShip(subsystem, work) {
        this.Subsystems[subsystem][0] += work
    }

    mining(resource) {
    this.resources[resource][0] += Math.floor(this.crew * randomNr(0.8, 1.2) / 10)
    }

    victoryPoints (vp) {
        this.victoryPoints += vp
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
    constructor (food = [0, 250], water = [0, 250], oxygen = [0, 250], minerals = [0, 250], drugs = [0, 250], metal = [0, 250], gas = [0, 250], energy = [0, 250], specialTech = [0, 250], shipParts = [0, 250], credits = [0, 250]) {
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
        this.credits = credits
    }
};

class Subsystems {
    constructor (engine = [0, 100], hull = [0, 100], lifeSupport = [0, 100], shieldValue = [0, 100], shieldGenerator = [0, 100], laser = undefined, torpedos = undefined) {
        this.engine = engine
        this.hull = hull
        this.lifeSupport = lifeSupport
        this.shieldValue = shieldValue
        this.shieldGenerator = shieldGenerator
        this.laser = laser
        this.torpedos = torpedos
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


const laser = new Weapons ("Laser", 5, 8, 4, 2, [50, 50]);
const torpedos = new Weapons ("Torpedos", 20, 3, 1, 9, [50, 50]);

const playerStartResources = new Resources ([100, 250], [80, 250], [100, 250], [0, 250], [5, 250], [0, 250], [0, 250], [60, 250], [0, 250], [0, 250], [15, Infinity]);

const playerSubsystems = new Subsystems ([100, 100], [125, 125], [90, 90], [150, 150], [100, 100], laser, torpedos);
const playerShip = new Ship ("playerShip", [200, 500], [0, 50], playerStartResources, playerSubsystems);



// Test des neuen Systems mit Array und ohne getter und setter:
console.log(playerShip.resources.energy)
playerShip.buy("energy", -5)
console.log(playerShip.resources.energy)
console.log(playerShip);

// Exports:
exports.playerShip = playerShip;
exports.Ship = Ship;
exports.Resources = Resources;
exports.Subsystems = Subsystems;
exports.Weapons = Weapons;
exports.laser = laser;
exports.torpedos = torpedos;
exports.playerStartResources = playerStartResources;