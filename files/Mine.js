function mine (what, quantity) {
    
    switch (what) {
        case 'water':
            PlayerShip.mineWater = quantity
            break;
        case 'mineral':
            PlayerShip.mineMetal = quantity
            break;
        case 'metal':
            PlayerShip.mineMetal = quantity
            break;
        case 'gas':
            PlayerShip.mineGas = quantity
            break;
        case 'energy':
            PlayerShip.mineEnergy = quantity
            break;
    }
}