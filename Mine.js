// System für Minen
function getRessources (type){

    const q = playerShip.crew * (Math.floor(Math.random))

    let t;

    if(type === 'asteroidenFeld')
        t =  (Math.floor(Math.random) * 4)
    } else if(type === 'Nebel'){
        t = 1
    } else if(type === 'Stern') {
        t = 2
    } else if(type === 'schiffsfriedhof') {
        t = 'specialTechnology'
    }

    if(t === 1) {
        playerShip.playerRessourcen.water += q
    }else if(t === 2)
        playerShip.playerRessourcen.minerals += q
    }else if(t === 3)
        playerShip.playerRessourcen.metal += q
    }else if(t === 4)
        playerShip.playerRessourcen.gas += q
    }else if(t === 5)
        playerShip.playerRessourcen.energy += q
    }else if(t === 6) {
        playerShip.playerRessourcen.specialTech += q
    }
}