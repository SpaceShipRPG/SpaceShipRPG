//OBJECT FORM

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
        specialTech : undefined,
        money       : 20
    },

    playerSubsystems : {
        engine      : undefined,
        hull        : undefined,
        weapons     : undefined,
        lifeSupport : undefined,
        shield      : undefined
    },
    
    breath (){
        playerShip.playerRessourcen.oxygen = playerShip.playerRessourcen.maxOxygen
    },

    recruit () {

        playerShip.crew += Math.floor(Math.random() * 10)
        
        if(crew > maxCrewKapazität) {
            crew = maxCrewKapazität
        }
    },

    sell (thing, quantity) {
        playerShip.playerRessourcen.money += 30
        playerShip.playerRessourcen.thing -= 30//(thing * quantity)
    },

    buy (thing, quantity) {
    
        this.money -= (thing * quantity) * storeValue
        this.thing += (thing * quantity)
    },

    mine(){
        
    }
}