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

/*    get recruit (){
        this.crew += this.crew * randomNr 
    } */

    recruit (number){
        this.crew[0] += number
        // this.crew[0] += randomNr(15, 25)
    }

    set maintainance(people) {
        this.resources.oxygen[0] -= Math.floor(crew / 10)
        this.resources.water[0] -= Math.floor(crew / 10)
        this.resources.food[0] -= Math.floor(crew / 10)
    }
/*    set repairShip(work) {
        this.Subsystems.hull += work
    }
    set repairShield(work) {
        this.Subsystems.shield += work
    }   */
    repairShip(subsystem, work) {
        this.Subsystems[subsystem][0] += work
    }
/*    repairShield(work) {
        this.Subsystems.shield[0] += work
    } */
/*
    set getMoney(money) {
        this.resources.credits += money
    }
    set sellMineral(quantity) {
        this.resources.mineral -= quantity
    }
    set sellMetal (quantity) {
        this.resources.metal -= quantity
    }
    set sellGas (quantity) {
        this.resources.gas -= quantity
    }
    set sellTech(quantity) {
        this.resources.tech -= quantity
    }

    // buy methods

    set investMoney(money) {
        this.resources.credits -= money
    }
    set buyWater(quantity) {
        this.resources.water += quantity 
    }
    set buyFood(quantity) {
        this.resources.food += quantity
    }
    set buyDrugs(quantity) {
        this.resources.drugs += quantity
    }
    set buyEnergy(quantity) {
        this.resources.energy += quantity
    }
    set buyShipParts(quantity) {
        this.resources.shipParts += quantity
    }
*/
    // mine methods
/*    
    set mineWater(quantity) {
        this.resources.water += crew
    }
    set mineMineral(quantity) {
        this.resources.mineral += crew
    }
    set mineMetal(quantity) {
        this.resources.metal += crew
    }
    set mineGas(quantity) {
        this.resources.gas += crew
    }
    set mineEnergy(quantity) {
        this.resources.energy += crew
    }
*/
    mining(resource) {
    this.resources[resource][0] += Math.floor(this.crew * randomNr(0.8, 1.2) / 10)
}
    // victory points methods

    victoryPoints (vp) {
        this.victoryPoints += vp
    }

    buy (resource, quantity) {
        this.resources[resource][0] += quantity
    }
    sell (resource, quantity) {
        this.resources[resource][0] -= quantity
    }
    changeResources (resource, quantity) {
        this.resources[resource][0] += quantity
    }

};
//  >>>> Crew als neue Klasse, nicht nur Zahl? Mit Eigenschaften wie Größe, Moral (sinkt wenn Leute sterben >> Wahrscheinlichkeit für Meuterei steigt...). Später vielleicht: Rasse (unterschiedliche Boni und Mali), ChefIngenier : true gibt Bonus bei Reperatur, weitere wichtige CrewMitglieder etc....

class Resources {
    constructor (food = [0, 250], water = [0, 250], oxygen = [0, 250], minerals = [0, 250], drugs = [0, 250], metal = [0, 250], gas = [0, 250], energy = [0, 250], specialTech = [0, 250], credits = [0, 250]) {
        this.food = food
        this.water = water
        this.oxygen = oxygen
        this.minerals = minerals
        this.drugs = drugs
        this.metal = metal
        this.gas = gas
        this.energy = energy
        this.specialTech = specialTech
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

// Variablen, die die Start- und Maximal-Werte des Spieler Schiffes speichern. Diese werden genutzt, um zu checken ob Selbst- und Fremd-Reparatur möglich ist und wann diese gestoppt wird. (Damit Reperatur nicht unendlich läuft und man nach Reperatur auf einmal mehr Engine Punkte etc hat als am Start.)
/*
const playerMaxEngine = 100;
const playerMaxHull = 125;
const playerMaxLifeSupport = 90;
const playerMaxShield = 150;
const playerMaxLaserHP = 50;
const playerMaxTorpedoHP = 50;


// Variablen die den max. Wert angibt, wie viel von Resource X eingelagert werden kann:
const playerMaxFood = 250;
const playerMaxWater = 250;
const playerMaxOxygen = 250;
const playerMaxMinerals = 250;
const playerMaxDrugs = 250;
const playerMaxGas = 250;
const playerMaxMetal = 250;
const playerMaxEnergy = 250;
const playerMaxSpecialTech = 250;
const playerMaxCredtis = Infinity;
*/

const laser = new Weapons ("Laser", 5, 8, 4, 2, [50, 50]);
const torpedos = new Weapons ("Torpedos", 20, 3, 1, 9, [50, 50]);

const playerStartResources = new Resources ([100, 250], [80, 250], [100, 250], [0, 250], [5, 250], [0, 250], [0, 250], [60, 250], [0, 250], [15, Infinity]);

const playerSubsystems = new Subsystems ([100, 100], [125, 125], [90, 90], [150, 150], [100, 100], laser, torpedos);
const playerShip = new Ship ("playerShip", [200, 500], [0, 50], playerStartResources, playerSubsystems);


/* const PlayerShip = {
    
    // maintainance method

    set maintainance(people) {
        this.resources.oxygen -= crew
        this.resources.water -= crew
        this.resources.food -= crew
    }

    set getMoney(money) {
        this.resources.money += money
    },
    set sellMineral(good) {
        this.resources.mineral -= quantity
    },
    set sellMetal (good) {
        this.resources.metal -= quantity
    },
    set sellGas (good) {
        this.resources.gas -= quantity
    },
    set sellTech(good) {
        this.resources.tech -= quantity
    },

    // buy methods

    set investMoney(money) {
        this.resources.money -= money
    },
    set buyWater(good) {
        this.resources.water += quantity 
    },
    set buyFood(good) {
        this.resources.food += quantity
    },
    set buyDrugs(good) {
        this.resources.drugs += quantity
    },
    set buyEnergy(good) {
        this.resources.energy += quantity
    },
    set buyShipParts(good) {
        this.resources.shipParts += quantity
    },

    // mine methods
    
    set mineWater(quantity) {
        this.resources.water += crew
    },
    set mineMineral(quantity) {
        this.resources.mineral += crew
    },
    set mineMetal(quantity) {
        this.resources.metal += crew
    },
    set mineGas(quantity) {
        this.resources.gas += crew
    },
    set mineEnergy(quantity) {
        this.resources.energy += crew
    }
};
*/


// Test des neuen Systems mit Array und ohne getter und setter:
console.log(playerShip.resources.energy)
playerShip.buy("energy", -5)
console.log(playerShip.resources.energy)

// Exports:
exports.playerShip = playerShip;
exports.Ship = Ship;
exports.Resources = Resources;
exports.Subsystems = Subsystems;
exports.Weapons = Weapons;
exports.laser = laser;
exports.torpedos = torpedos;
exports.playerStartResources = playerStartResources;
/*
exports.playerMaxEngine = playerMaxEngine;
exports.playerMaxHull = playerMaxHull;
exports.playerMaxLifeSupport = playerMaxLifeSupport;
exports.playerMaxShield = playerMaxShield;
exports.playerMaxLaserHP = playerMaxLaserHP;
exports.playerMaxTorpedoHP = playerMaxTorpedoHP;
exports.playerMaxFood = playerMaxFood;
exports.playerMaxWater = playerMaxWater;
exports.playerMaxOxygen = playerMaxOxygen;
exports.playerMaxMinerals = playerMaxMinerals;
exports.playerGas = playerMaxGas;
exports.playerMaxDrugs = playerMaxDrugs;
exports.playerMaxMetal = playerMaxMetal;
exports.playerMaxEnergy = playerMaxEnergy;
exports.playerMaxSpecialTech = playerMaxSpecialTech;
exports.playerMaxCredtis = playerMaxCredtis;
*/