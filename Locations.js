/* function r() {
    return Math.floor(Math.random() * 10)
} */

class Location extends Ressourcen {
    constructor(name) {
        super (name, quantity)
    }

    buyFood() {
        food + 1
        money - 1
    }
    buyWater() {
        water + 1
        money - 1
    }
    buyEnergie() {
        energy + 1
        money - 1
    }
    buyDrugs() {
        drugs + 1
        money - 1
    }
    buyShipParts() {
        shipParts + 1
        money - 1
    }
    sellMineral() {
        minerals - 1
        money + 1
    }
    sellMetal() {
        metal - 1
        money + 1
    }
    sellGas() {
        gas - 1
        money + 1
    }
    sellSpecialTech() {
        specialTech - 1
        money + 1
    }
    oxigen(){
        oxigen === full
    }
    recruit(){
        crew + 1
    }
}

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
