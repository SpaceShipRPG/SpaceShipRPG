const PlayerShip = require('./PlayerShip.js');
function sell(what, quantity) {

    switch (what) {
        case 'mineral':
            if (quantity > PlayerShip.playerShip.resources.minerals) {
                quantity = PlayerShip.playerShip.resources.minerals
            }
            PlayerShip.playerShip.sellMineral = quantity
            break;
        case 'metal':
            if (quantity > PlayerShip.playerShip.resources.metal) {
                quantity = PlayerShip.playerShip.resources.metal
            }
            PlayerShip.playerShip.sellMetal = quantity
            break;
        case 'gas':
            // gas ist nicht definiert
            if (quantity > PlayerShip.playerShip.resources.gas) {
                quantity = PlayerShip.playerShip.resources.gas
            }
            PlayerShip.playerShip.sellGas = quantity
            break;
        case 'tech':
            if (quantity > PlayerShip.playerShip.resources.specialTech) {
                quantity = PlayerShip.playerShip.resources.specialTech
            }
            PlayerShip.playerShip.sellTech = quantity
            break;
    }
    PlayerShip.playerShip.getMoney = quantity
}

function buy (what, quantity) {
    
    if (quantity > PlayerShip.playerShip.resources.credits) {
        quantity = PlayerShip.playerShip.resources.credits
    }
    switch (what) {
        case 'water':
            PlayerShip.playerShip.buyWater = quantity;
            break;
        case 'food':
            PlayerShip.playerShip.buyFood = quantity;
            break;
        case 'drugs':
            PlayerShip.playerShip.buyDrugs = quantity;
            break;
        case 'shipParts':
            // diese Variable existiert nicht.
            PlayerShip.playerShip.buyShipParts = quantity;
            break;
        case 'energy':
            PlayerShip.playerShip.buyEnergy = quantity;
            break;
    }
    PlayerShip.playerShip.investMoney = quantity;
}
exports.sell = sell;
exports.buy = buy;