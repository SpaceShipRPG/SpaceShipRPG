const PlayerShip = require('./PlayerShip.js');
function sell(what, quantity) {

/*    switch (what) {
        case 'mineral':
            if (quantity > PlayerShip.playerShip.resources.minerals[0]) {
                quantity = PlayerShip.playerShip.resources.minerals[0]
            }
            PlayerShip.playerShip.sell("minerals", quantity)
            break;
        case 'metal':
            if (quantity > PlayerShip.playerShip.resources.metal[0]) {
                quantity = PlayerShip.playerShip.resources.metal[0]
            }
            PlayerShip.playerShip.sell("metal", quantity)
            break;
        case 'gas':
            if (quantity > PlayerShip.playerShip.resources.gas[0]) {
                quantity = PlayerShip.playerShip.resources.gas[0]
            }
            PlayerShip.playerShip.sell("gas", quantity)
            break;
        case 'specialTech':
            if (quantity > PlayerShip.playerShip.resources.specialTech[0]) {
                quantity = PlayerShip.playerShip.resources.specialTech[0]
            }
            PlayerShip.playerShip.sell("specialTech", quantity)
            break;
    }
*/
    quantity = quantity > PlayerShip.playerShip.resources[what][0] ? PlayerShip.playerShip.resources[what][0] : quantity;

    PlayerShip.playerShip.sell(what, quantity);
    PlayerShip.playerShip.buy("credits", quantity);
}

function buy (what, quantity) {
    // hier wird überprüft ob quantity/Menge größer ist als das vorhandene Geld. Wenn Ja, dann kann nur soviel ausgegeben werden wie Geld vorhanden ist. Wenn mehr Geld vorhanden ist als quantity/Menge dann kann die gewünschte quantity/Menge gekauft werden. 
    quantity = quantity > PlayerShip.playerShip.resources.credits[0] ? PlayerShip.playerShip.resources.credits[0] : quantity;
    // hier wird überprüft wie viel 'what' gekauft werden kann in abhängigkeit der Lagerungskapazität.  
    quantity = (quantity > PlayerShip.playerShip.resources[what][1] - PlayerShip.playerShip.resources[what][0]) ? (PlayerShip.playerShip.resources[what][1] - PlayerShip.playerShip.resources[what][0]) : quantity;
/*    switch (what) {
        case 'water':
            PlayerShip.playerShip.buy("water", quantity);
            break;
        case 'food':
            PlayerShip.playerShip.buy("food", quantity);
            break;
        case 'drugs':
            PlayerShip.playerShip.buy("drugs", quantity);
            break;
        case 'shipParts':
            // diese Variable existiert nicht.
            PlayerShip.playerShip.buy("shipParts", quantity);
            break;
        case 'energy':
            PlayerShip.playerShip.buy("energy", quantity);
            break;
    }
*/
    // hier wird gekauft
    PlayerShip.playerShip.buy(what, quantity);
    // hier wird bezahlt
    PlayerShip.playerShip.sell("credits", quantity);
}
exports.sell = sell;
exports.buy = buy;