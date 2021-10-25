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

const essen = new Ressourcen ('essen', 50)
const wasser = new Ressourcen ('wasser', 50)
const essen = new Ressourcen ('oxygen', 50)
const essen = new Ressourcen ('minerals', 50)
const essen = new Ressourcen ('drugs', 50)
const essen = new Ressourcen ('metals', 50)
const essen = new Ressourcen ('energy', 50)
const essen = new Ressourcen ('credits', 50) // das Geld


const motor         = new Subsystems('motor', 50)
const guns          = new Subsystems('motor', 50)
const lifeSupport   = new Subsystems('motor', 50)
const shield        = new Subsystems('motor', 50)
