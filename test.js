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
        this.playerRessourcen.money += this.money
    },
    set sellMineral(good) {
        this.playerRessourcen.mineral -= this.money
    },
    set sellMetal (good) {
        this.playerRessourcen.metal -= this.money
    },
    set sellGas (good) {
        this.playerRessourcen.gas -= this.money
    },
    set sellTech(good) {
        this.playerRessourcen.tech -= this.money
    },

    // buy methods

    set investMoney(money) {
        this.playerRessourcen.money -= this.money
    },
    set buyWater(good) {
        this.playerRessourcen.water +=  this.money
    },
    set buyFood(good) {
        this.playerRessourcen.food += this.money
    },
    set buyDrugs(good) {
        this.playerRessourcen.drugs += this.money
    },
    set buyEnergy(good) {
        this.playerRessourcen.energy += this.money
    },
    set buyShipParts(good) {
        this.playerRessourcen.shipParts += this.money
    },
    // mine methods
    set mineWater(quantity) {
        this.playerRessourcen.water += this.crew
    },
    set mineMineral(quantity) {
        this.playerRessourcen.mineral += this.crew
    },
    set mineMetal(quantity) {
        this.playerRessourcen.metal += this.crew
    },
    set mineGas(quantity) {
        this.playerRessourcen.gas += this.crew
    },
    set mineEnergy(quantity) {
        this.playerRessourcen.energy += this.crew
    }
}


function sell(what, quantity) {
    PlayerShip.getMoney = quantity

    switch (what) {
        case 'mineral':
            PlayerShip.sellMineral = quantity
            break;
        case 'metal':
            PlayerShip.sellMetal = quantity
            break;
        case 'gas':
            PlayerShip.sellGas = quantity
            break;
        case 'tech':
            PlayerShip.sellTech = quantity
            break;
    }
}

function buy (what, quantity) {
    PlayerShip.investMoney = quantity

    switch (what) {
        case 'water':
            PlayerShip.buyWater = quantity
            break;
        case 'food':
            PlayerShip.buyFood = quantity
            break;
        case 'drugs':
            PlayerShip.buyDrugs = quantity
            break;
        case 'shipParts':
            PlayerShip.buyShipParts = quantity
            break;
        case 'energy':
            PlayerShip.buyEnergy = quantity
            break;
    }
}

console.log(PlayerShip)
sell('gas', 10)
console.log(PlayerShip)
