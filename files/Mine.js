// System für Minen
function getRessources (type){

    
    const arbeit = Math.round((Math.random() * playerShip.crew) + playerShip.crew)

    let t;

    if(type === 'asteroidenFeld'){
        t =  (Math.floor(Math.random) * 4)
    } else if(type === 'Nebel'){
        t = 4
    } else if(type === 'Stern') {
        t = 5
    } else if(type === 'schiffsfriedhof') {
        t = 'specialTechnology'
    }
    
    //aufrunden

    if(t === 1) {
        playerShip.playerRessourcen.water += arbeit
    }else if(t === 2){
        playerShip.playerRessourcen.minerals += arbeit
    }else if(t === 3){
        playerShip.playerRessourcen.metal += arbeit
    }else if(t === 4){
        playerShip.playerRessourcen.gas += arbeit
    }else if(t === 5){
        playerShip.playerRessourcen.energy += arbeit
    }else if(t === 6) {
        playerShip.playerRessourcen.specialTech += arbeit
    }

}