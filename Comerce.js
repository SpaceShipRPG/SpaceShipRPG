
function sell() {

    console.log('Do you wanna sell something?')

    //Ideal wäre hier ein while loop schreiben < solange o === 'y' >; der Spiele würde den Wert von o am Enden der (if) ändern, wenn er 'n' auswählt

    if(o === 'y') {
        console.log('what do you wannt to sell?')
        console.log('* Minerals: a')
        console.log('* Metals: b')
        console.log('* Gas: c')
        console.log('* Special Tech: d')
        console.log('* Actually nothing: e')
        // Hier der Benutzer kann eine Taste zwischen a - e drucken, um den Wert für sell(t) auszuwählen
        
        console.log('* How many do you want to sell?')
        // Hier der Benutzer kann eine Taste zwischen a - e drucken, um den Wert für sell(q) auszuwählen
        
        
        function (t, q, playerMoney /* diese Variable ist am Anfang dieses Datei schon definiert */) {

            return cash + (thing * quantity)
        
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
        
        console.log('* How many do you want to sell?')
        // Hier der Benutzer kann eine Taste zwischen a - e drucken, um den Wert für sell(q) auszuwählen
        
        
        function (t, q, playerMoney /* diese Variable ist am Anfang dieses Datei schon definiert */) {

            return cash - (thing * quantity)
        
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