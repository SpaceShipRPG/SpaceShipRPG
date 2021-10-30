const PlayerShip = require('./PlayerShip.js');

function victoryPoints(what, quantity) {


    switch (what) {
        case 'money' :
            if (quantity > this.resources.credits) {
                quantity === credits
            }
            PlayerShip.playerShip.victoryPoints = quantity
            break;
        case 'mineral':
            if (quantity > this.resources.mineral) {
                quantity === this.resources.mineral
            }
            PlayerShip.playerShip.victoryPoints = quantity * 2
            break;
        case 'metal':
            if (quantity > this.resources.metal) {
                quantity === this.resources.metal
            }
            PlayerShip.playerShip.victoryPoints = quantity * 4
            break;
        case 'gas':
            if (quantity > this.resources.gas) {
                quantity === this.resources.gas
            }
            PlayerShip.playerShip.victoryPoints = quantity * 8
            break;
        case 'tech':
            if (quantity > this.resources.tech) {
                quantity === this.resources.tech
            }
            PlayerShip.playerShip.victoryPoints = quantity * 16
            break;
    }
}