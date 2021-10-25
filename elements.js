// Schiff

// parameter zu erklären / erweitern : [volk, Frachtraum, Shuttelrampe{Shuttle1, ...}


class Ship {
    constructor(name, crew, subsysteme, ressourcen) {
        this.name = name,
        this.crew = crew,
        this.subsysteme = subsysteme,
        this.ressourcen = ressourcen
    }
}

class Subsystems {
    constructor (name, quantity){
        this.name = name,
        this.quantity = quantity
    }
}

class Ressourcen {
    constructor (name, quantity){
        this.name = name,
        this.quantity = quantity
    }
}

const food = new Ressourcen ('food', 50)
const water = new Ressourcen ('water', 50)
const oxygen = new Ressourcen ('oxygen', 50)
const minerals = new Ressourcen ('minerals', 50)
const drugs = new Ressourcen ('drugs', 50)
const metal = new Ressourcen ('metal', 50)
const energy = new Ressourcen ('energy', 50)
const credits = new Ressourcen ('credits', 50) // das Geld


const motor         = new Subsystems('motor', 50)
const guns          = new Subsystems('guns', 50)
const lifeSupport   = new Subsystems('life support', 50)
const shield        = new Subsystems('shields', 50)
