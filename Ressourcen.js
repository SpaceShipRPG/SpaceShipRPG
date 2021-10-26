class Ressourcen {
    constructor (name, quantity){
        this.name = name,
        this.quantity = quantity
    }

    changeQuantity (v) {
        return this.quantity + v
    }
}