
function sell(where) {

    let storeValue = 1
    
    if (where === 'spaceStation') {
        storeValue = 0.5
    }

   

    console.log('Do you wanna sell something?')

    let option;
    //Ideal wäre hier ein while loop schreiben < solange o === 'y' >; der Spiele würde den Wert von o am Enden der (if) ändern, wenn er 'n' auswählt

    if(option === 'y') {
        console.log('what do you wannt to sell?')
        
        console.log('* Minerals: a')

        if (where === planetA) {
            console.log('* Special Tech: d')
            console.log('* Gas: c')
        }

        if (where === planetB) {
            console.log('* Metals: b')
            console.log('* Special Tech: d')
        }
        if (where === planetC) {
            console.log('* Metals: b')
            console.log('* Gas: c')
        }
        console.log('* Actually nothing: e')

        // Wie kann man Tasten blockieren?

        // Hier der Benutzer kann eine Taste zwischen a - e drucken, um den Wert für sell(t) auszuwählen
        
        console.log('* How many do you want to sell?')
        // Hier der Benutzer kann eine Taste zwischen a - e drucken, um den Wert für sell(q) auszuwählen
        
        
        function (thing, quantity, playerMoney /* diese Variable ist am Anfang dieses Datei schon definiert */) {

            PlayerShip.playerRessourcen.money += cash + (thing * quantity) * storeValue
            
        
        }
        console.log('Do you wanna sell something else?')
        console.log('* yes: y')
        console.log('* no: n')
        /*
        if (dieses Wert === 'n') {
            o === 'n'
        }
        */
    }
}

function buy() {

    console.log('Do you wanna buy something?')

    //Ideal wäre hier ein while loop schreiben < solange o === 'y' >; der Spiele würde den Wert von o am Enden der (if) ändern, wenn er 'n' auswählt

    if(o === 'y') {
        console.log('what do you wannt to buy?')
        console.log('* Food: a')
        console.log('* Water: b')
        console.log('* Drugs: c')
        console.log('* Energy: d')
        console.log('* Ship parts: e')

        // Hier der Benutzer kann eine Taste zwischen a - e drucken, um den Wert für sell(t) auszuwählen
        
        console.log('* How many do you want to buy?')
        // Hier der Benutzer kann eine Taste zwischen a - e drucken, um den Wert für sell(q) auszuwählen
        
        
        function (thing, quantity, playerMoney /* diese Variable ist am Anfang dieses Datei schon definiert */) {

            PlayerShip.playerRessourcen.money -= cash + (thing * quantity) * storeValue
        
        }

        console.log('Do you wanna buy something else?')
        console.log('* yes: y')
        console.log('* no: n')
        /*
        if (dieses Wert === 'n') {
            o === 'n'
        }
        */
    }

}