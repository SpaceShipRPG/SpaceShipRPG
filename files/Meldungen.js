// when Spieler an Location ankommt...

const playerShip = {

    name            : 'playerShip',
    crew            : 20,

    playerRessourcen : {
        food        : undefined,
        water       : undefined,
        oxygen      : undefined,
        minerals    : undefined,
        drugs       : undefined,
        metal       : undefined,
        energy      : undefined,
        money       : 20
    },

    playerSubsystems : {
        engine      : undefined,
        hull        : undefined,
        weapons     : undefined,
        lifeSupport : undefined,
        shield      : undefined
    }
}

const playerMoney = playerShip.playerRessourcen.money


const planetA = new Location('planet A')
const planetB = new Location('planet B')
const planetC = new Location('planet C')
const spaceStation = new Location('space station')
const asteroid = new Location('asteroid')
const fog = new Location('fog')
const worm = new Location('worm')
const star = new Location('star')
const spaceHulk = new Location('space hulk')
const pirates = new Location('pirates')



function locationInteraction (place) {

    if (place === planetA || place === planetB || place === planetC || place === spaceStation) {
        
        breath()
    }

    if (place === planetA || place === planetB || place === planetC){
        
        recruit()
        sell()
        buy()
    }
    
    if(place === spaceStation) {
        sell('spaceStation')  // mit variable für kleinerer Ein- und Verkauf
        buy('spaceStation')   // mit variable für kleinerer Ein- und Verkauf
    }

    if(place === asteroidenFeld) {
        mine('asteroidenFeld')
        danger('asteroidenFeld')
    }
    if(place === Nebel) {
        mine('Nebel')
        danger('Nebel')
    }
    if(place === Stern) {
        mine('Stern')
        danger('Stern')
    }
    if(place === Wurmloch) {
        wurmloch()
    }
    if(place === schiffsfriedhof) {
        mine('schiffsfriedhof')
        danger('schiffsfriedhof')
    }
    if(place === piraten) {
        fight()
    }
    else {
        console.log('you watch the last frontier: the space')
    }
}