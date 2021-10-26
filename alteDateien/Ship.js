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

module.exports = Ship