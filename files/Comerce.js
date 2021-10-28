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