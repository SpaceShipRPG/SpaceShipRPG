const PlayerShip = require('./PlayerShip.js');
function sell(what, quantity, source) {
    // hier wird überprüft ob die Menge, die wir verkaufen wollen größer ist als die Menge, die vorhanden ist. Falls ja, dann kann/wird nur die gesamte vorhandene Menge verkauft. 
    quantity = quantity > PlayerShip.playerShip.resources[what][0] ? PlayerShip.playerShip.resources[what][0] : quantity;
    // hier wird verkauft
    PlayerShip.playerShip.sell(what, quantity);
    // hier erhalten wir Geld
    PlayerShip.playerShip.buy("credits", quantity);
    // hier werden die Resourcen der Location hinzugefügt
    source.resources[what][0] += quantity;
}

function buy (what, quantity, source) {
    // Check ob mehr gekauft werden soll, als in der Lokation vorhanden ist.
    quantity = quantity > source.resources[what][0] ? source.resources[what][0] : quantity;
    // hier wird überprüft ob quantity/Menge größer ist als das vorhandene Geld. Wenn Ja, dann kann nur soviel ausgegeben werden wie Geld vorhanden ist. Wenn mehr Geld vorhanden ist als quantity/Menge dann kann die gewünschte quantity/Menge gekauft werden. 
    quantity = quantity > PlayerShip.playerShip.resources.credits[0] ? PlayerShip.playerShip.resources.credits[0] : quantity;
    // hier wird überprüft wie viel 'what' gekauft werden kann in abhängigkeit der Lagerungskapazität.  
    quantity = (quantity > PlayerShip.playerShip.resources[what][1] - PlayerShip.playerShip.resources[what][0]) ? (PlayerShip.playerShip.resources[what][1] - PlayerShip.playerShip.resources[what][0]) : quantity;
    // hier wird gekauft
    PlayerShip.playerShip.buy(what, quantity);
    // hier wird bezahlt
    PlayerShip.playerShip.sell("credits", quantity);
    // hier werden die gekauften Resourcen der Location abgezogen:
    source.resources[what][0] -= quantity;
}
exports.sell = sell;
exports.buy = buy;