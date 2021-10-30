function repair (ship) {

    const damagedHull = ship.subsystems.hull
    const damagedShield = ship.subsystems.shield
    const crew = ship.crew
    const totalHull = ship.subsystems.totalHull
    const totalShield = ship.subsystems.totalShield
    let leftCrew = 0
    
    let hull = damagedHull + crew
    if (hull > totalHull) {
    hull = totalHull
    leftCrew = totalHull - damagedHull
    }
    let shield = damagedShield + leftCrew
    if (shield > totalShield) {
    shield = totalShield
    }
    
    ship.repairShip = hull
}    