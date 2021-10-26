function recruit (v) {

    playerShip.crew += v
    
    if(crew > maxCrewKapazität) {
        crew = maxCrewKapazität
    }
}

function breath (){
    //playerShip.playerRessourcen.oxigen = max
}