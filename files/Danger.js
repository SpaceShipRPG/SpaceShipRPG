// jede Gefahr muss jede Runde aktiviert werden, in der der Spieler da bleibt

function accident(type, risk) {

    let badLuck = false

    if (risk > Math.floor(Math.random() * 11)) {

        switch (type){

            case 'asteoids' : 
                console.log('Asteoids');
                break;
            case 'Gas' : 
                console.log('Gas');
                break;
            case 'schwarzesLoch' : 
                console.log('Schwarzes Loch');
                break;
            case 'asteroids' : 
                console.log('asteroids');
                break;
        }
    }

}




/*
// Asteroiden
accident(5)

// Gas
accident(6)

// Schwarzes Loch
accident(7)
*/
// Stern
accident(8)