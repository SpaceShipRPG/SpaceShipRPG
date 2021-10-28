const PlayerShip = {
    
    name            : 'playerShip',
    crew            : 20,
    
    playerRessourcen : {
        food        : 20,
        water       : 20,
        oxygen      : 20,
        minerals    : 20,
        drugs       : 20,
        metal       : 20,
        energy      : 20,
        specialTech : 20,
        money       : 20
    },
    
    playerSubsystems : {
        engine      : 20,
        hull        : 20,
        weapons     : 20,
        lifeSupport : 20,
        shield      : 20
    },
    
    set maintainanceCost(people) {
    
        //oxygen
        this.playerRessourcen.oxygen = this.playerRessourcen.oxygen - people
        //water
        this.playerRessourcen.water = this.playerRessourcen.water - people
        //food
        this.playerRessourcen.food = this.playerRessourcen.food - people

    }
}

PlayerShip.sell = 'mineral', 20;

console.log(PlayerShip);
PlayerShip.maintainanceCost = 5;
console.log(PlayerShip);



/*
var o = {
    a: 7,
    get b() {
        return this.a + 1;
    },
    set c(x) {
        this.a = x / 2;
    }
};

console.log(o.a); // 7
console.log(o.b); // 8 <-- At this point the get b() method is initiated.
o.c = 50;         //   <-- At this point the set c(x) method is initiated
console.log(o.a); // 25

*/