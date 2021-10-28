const PlayerShip = {
    
    name            : 'playerShip',
    crew            : 20,
    
    playerRessourcen : {
        food        : 20,
        water       : 20,
        oxygen      : 20,
        minerals    : 20,
        drugs       : 20,
        metal       : 20,
        energy      : 20,
        specialTech : 20,
        money       : 20,
        shipParts   : 20
    },
    
    playerSubsystems : {
        engine      : 20,
        hull        : 20,
        weapons     : 20,
        lifeSupport : 20,
        shield      : 20
    },

    set getMoney(money) {
        this.playerRessourcen.money += money
    },
    set sellMineral(good) {
        this.playerRessourcen.mineral -= quantity
    },
    set sellMetal (good) {
        this.playerRessourcen.metal -= quantity
    },
    set sellGas (good) {
        this.playerRessourcen.gas -= quantity
    },
    set sellTech(good) {
        this.playerRessourcen.tech -= quantity
    },

    // buy methods

    set investMoney(money) {
        this.playerRessourcen.money -= money
    },
    set buyWater(good) {
        this.playerRessourcen.water += quantity 
    },
    set buyFood(good) {
        this.playerRessourcen.food += quantity
    },
    set buyDrugs(good) {
        this.playerRessourcen.drugs += quantity
    },
    set buyEnergy(good) {
        this.playerRessourcen.energy += quantity
    },
    set buyShipParts(good) {
        this.playerRessourcen.shipParts += quantity
    },
    // mine methods
    set mineWater(quantity) {
        this.playerRessourcen.water += crew
    },
    set mineMineral(quantity) {
        this.playerRessourcen.mineral += crew
    },
    set mineMetal(quantity) {
        this.playerRessourcen.metal += crew
    },
    set mineGas(quantity) {
        this.playerRessourcen.gas += crew
    },
    set mineEnergy(quantity) {
        this.playerRessourcen.energy += crew
    }
}
=======
/* class Ressourcen {
    constructor (name, quantity){
        this.name = name,
        this.quantity = quantity
    }

    changeQuantity (v) {
        return this.quantity + v
    }
}

class Subsystems {
    constructor (name, quantity){
        this.name = name,
        this.quantity = quantity
    }
}

class Ship {
    constructor(name, crew, subsysteme, ressourcen) {
        this.name = name,
        this.crew = crew,
        this.subsysteme = subsysteme,
        this.ressourcen = ressourcen
    }
}

const playerSubsystems = new Subsystems (10, 10, 10, 10)
const playerRessourcen = new Ressourcen (10, 10, 10, 10, 10, 10, 10, 10)
const playerShip = new Ship ('playerShip', 20, playerSubsystems, playerRessourcen)

console.log(playerShip)


const food = new Ressourcen ('food', 50)
const water = new Ressourcen ('water', 50)
const oxygen = new Ressourcen ('oxygen', 50)
const minerals = new Ressourcen ('minerals', 50)
const drugs = new Ressourcen ('drugs', 50)
const metal = new Ressourcen ('metal', 50)
const energy = new Ressourcen ('energy', 50)
const money = new Ressourcen ('credits', 50)


const motor         = new Subsystems('motor', 50)
const guns          = new Subsystems('guns', 50)
const lifeSupport   = new Subsystems('life support', 50)
const shield        = new Subsystems('shields', 50)
*/

// CLASS as constractor for all Ship OBJECTS (Player and AI)
// factory methode

class Ship {
    constructor (name, crew, resources, subsystems) {
        this.name = name
        this.crew = crew
        this.resources = resources
        this.subsystems = subsystems
    }
};


class Resources {
    constructor (food = 0, water = 0, oxygen = 0, minerals = 0, drugs = 0, metal = 0, energy = 0, specialTech = 0, credits = 0) {
        this.food = food
        this.water = water
        this.oxygen = oxygen
        this.minerals = minerals
        this.drugs = drugs
        this.metal = metal
        this.energy = energy
        this.specialTech = specialTech
        this.credits = credits
    }
};


class Subsystems {
    constructor (engine = 0, hull = 0, lifeSupport = 0, shield = 0, laser = undefined, torpedos = undefined) {
        this.engine = engine
        this.hull = hull
        this.lifeSupport = lifeSupport
        this.shield = shield
        this.laser = laser
        this.torpedos = torpedos
    }
};

class Weapons {
    constructor (name, dmg, accuracy, rateOfFire, critChance) {
        this.name = name
        this.dmg = dmg
        this.accuracy = accuracy
        this.rateOfFire = rateOfFire
        this.critChance = critChance
    }
};


const playerStartResources = new Resources (100, 80, 100, 0, 5, 0, 60, 0, 15);
const laser = new Weapons ("Laser", 5, 8, 4, 2);
const torpedos = new Weapons ("Torpedos", 20, 3, 1, 9)
const playerSubsystems = new Subsystems (100, 125, 90, 150, laser, torpedos);
const playerShip = new Ship ("playerShip", 200, playerStartResources, playerSubsystems);

console.log(playerShip);

const pirateResources = new Resources ();

const pirateSubsystems01 = new Subsystems (70, 80, 60, 70, laser, torpedos);
const pirateShip01 = new Ship ("Pirates of the Solar System", 150, pirateResources, pirateSubsystems01);

const pirateSubsystems02 = new Subsystems (80, 95, 75, 80, laser, torpedos);
const pirateShip02 = new Ship ("Stelar Thieves", 165, pirateResources, pirateSubsystems02);

const pirateSubsystems03 = new Subsystems (50, 60, 55, 60, laser);
const pirateShip03 = new Ship ("Desperate Desperados", 75, pirateResources, pirateSubsystems03);

const pirateSubsystems04 = new Subsystems (40, 50, 35, 45, laser);
const pirateShip04 = new Ship ("Weak but Mean", 60, pirateResources, pirateSubsystems04);

const pirateSubsystems05 = new Subsystems (35, 40, 30, 35, laser);
const pirateShip05 = new Ship ("Suicide Mission", 45, pirateResources, pirateSubsystems05);

console.log(pirateShip01);


const playerMoney = playerShip.resources.money

function buy (thing, quantity, cash) {

    console.log(thing)
    console.log(quantity)
    return cash - (thing * quantity)
}

    recruit () {

        playerShip.crew += Math.floor(Math.random() * 10)
        
        if(crew > maxCrewKapazität) {
            crew = maxCrewKapazität
        }
    },

    sell (thing, quantity) {
        playerShip.playerRessourcen.money += 30
        playerShip.playerRessourcen.thing -= 30//(thing * quantity)
    },

    buy (thing, quantity) {
    
        this.money -= (thing * quantity) * storeValue
        this.thing += (thing * quantity)
    },

    mine(){
        
    }
}