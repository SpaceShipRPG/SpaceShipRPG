/* class Ressourcen {
    constructor (name, quantity){
        this.name = name,
        this.quantity = quantity
    }

    changeQuantity (v) {
        return this.quantity + v
    }
}

class Subsystems {
    constructor (name, quantity){
        this.name = name,
        this.quantity = quantity
    }
}

class Ship {
    constructor(name, crew, subsysteme, ressourcen) {
        this.name = name,
        this.crew = crew,
        this.subsysteme = subsysteme,
        this.ressourcen = ressourcen
    }
}

const playerSubsystems = new Subsystems (10, 10, 10, 10)
const playerRessourcen = new Ressourcen (10, 10, 10, 10, 10, 10, 10, 10)
const playerShip = new Ship ('playerShip', 20, playerSubsystems, playerRessourcen)

console.log(playerShip)


const food = new Ressourcen ('food', 50)
const water = new Ressourcen ('water', 50)
const oxygen = new Ressourcen ('oxygen', 50)
const minerals = new Ressourcen ('minerals', 50)
const drugs = new Ressourcen ('drugs', 50)
const metal = new Ressourcen ('metal', 50)
const energy = new Ressourcen ('energy', 50)
const money = new Ressourcen ('credits', 50)


const motor         = new Subsystems('motor', 50)
const guns          = new Subsystems('guns', 50)
const lifeSupport   = new Subsystems('life support', 50)
const shield        = new Subsystems('shields', 50)
*/

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

function buy (thing, quantity, cash) {

    console.log(thing)
    console.log(quantity)
    return cash - (thing * quantity)
}

function sell (thing, quantity, cash) {

    console.log(thing)
    console.log(quantity)
    return cash + (thing * quantity)
}

function recruit (v) {

    playerShip.crew += v

}
