const playerShip = require('./PlayerShip.js');
function sell(what, quantity) {

    PlayerShip.getMoney = quantity

    switch (what) {
        case 'mineral':
            if (quantity > this.playerRessourcen.mineral) {
                quantity === this.playerRessourcen.mineral
            }
            PlayerShip.sellMineral = quantity
            break;
        case 'metal':
            if (quantity > this.playerRessourcen.metal) {
                quantity === this.playerRessourcen.metal
            }
            PlayerShip.sellMetal = quantity
            break;
        case 'gas':
            if (quantity > this.playerRessourcen.gas) {
                quantity === this.playerRessourcen.gas
            }
            PlayerShip.sellGas = quantity
            break;
        case 'tech':
            if (quantity > this.playerRessourcen.tech) {
                quantity === this.playerRessourcen.tech
            }
            PlayerShip.sellTech = quantity
            break;
    }
}

function buy (what, quantity) {
    
    PlayerShip.investMoney = quantity
    if (quantity > this.playerRessourcen.money) {
        quantity === money
    }

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

exports.sell = sell;
exports.buy = buy;