const PlayerShip = require('./PlayerShip.js');
function sell(what, quantity) {

    PlayerShip.playerShip.getMoney = quantity

    switch (what) {
        case 'mineral':
            if (quantity > this.resources.mineral) {
                quantity === this.resources.mineral
            }
            PlayerShip.playerShip.sellMineral = quantity
            break;
        case 'metal':
            if (quantity > this.resources.metal) {
                quantity === this.resources.metal
            }
            PlayerShip.playerShip.sellMetal = quantity
            break;
        case 'gas':
            if (quantity > this.resources.gas) {
                quantity === this.resources.gas
            }
            PlayerShip.playerShip.sellGas = quantity
            break;
        case 'tech':
            if (quantity > this.resources.tech) {
                quantity === this.resources.tech
            }
            PlayerShip.playerShip.sellTech = quantity
            break;
    }
}

function buy (what, quantity) {
    
    PlayerShip.playerShip.investMoney = quantity
    if (quantity > PlayerShip.playerShip.resources.credits) {
        quantity === credits
    }

    switch (what) {
        case 'water':
            PlayerShip.playerShip.buyWater = quantity;
            break;
        case 'food':
            PlayerShip.playerShip.buyFood = quantity
            break;
        case 'drugs':
            PlayerShip.playerShip.buyDrugs = quantity
            break;
        case 'shipParts':
            PlayerShip.playerShip.buyShipParts = quantity
            break;
        case 'energy':
            PlayerShip.playerShip.buyEnergy = quantity
            break;
    }
}
exports.sell = sell;
exports.buy = buy;