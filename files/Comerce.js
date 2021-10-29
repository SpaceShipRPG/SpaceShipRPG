const playerShip = require('./PlayerShip.js');
function sell(what, quantity) {

    PlayerShip.getMoney = quantity

    switch (what) {
        case 'mineral':
            if (quantity > this.resources.mineral) {
                quantity === this.resources.mineral
            }
            PlayerShip.sellMineral = quantity
            break;
        case 'metal':
            if (quantity > this.resources.metal) {
                quantity === this.resources.metal
            }
            PlayerShip.sellMetal = quantity
            break;
        case 'gas':
            if (quantity > this.resources.gas) {
                quantity === this.resources.gas
            }
            PlayerShip.sellGas = quantity
            break;
        case 'tech':
            if (quantity > this.resources.tech) {
                quantity === this.resources.tech
            }
            PlayerShip.sellTech = quantity
            break;
    }
}

function buy (what, quantity) {
    
    PlayerShip.investMoney = quantity
    if (quantity > this.resources.money) {
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