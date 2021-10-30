// alternatives Fight system
// muss weiter bearbeitet werden!!

const september = {
    name : 'september',
    subsystems : {
        engine : 10,
        hull : 20,
        shield : 20,
        laser : 5,
        torpedos : 1 
    }
}


const YMCA = {
    name : 'YMCA',
    subsystems : {
        engine : 10,
        hull : 20,
        shield : 20,
        laser : 5,
        torpedos : 1 
    }
}



function combat (attackShip, defShip) {

    let torpedoDmg;
    
    // attack with torpedos
    
    const torpedoImpact = attackShip.subsystems.laser // + random
    const torpedoEvasion = defShip.subsystems.engine  // + random
    
    console.log(torpedoImpact)
    console.log(torpedoEvasion)
    if(torpedoImpact > torpedoEvasion) {
        
        const torpedoSuccess = torpedoImpact - torpedoEvasion
        torpedoDmg = torpedoSuccess // + random
    } else {
        torpedoDmg = 0
    }
    
    
    // attack with laser
    
    const laserDmg = attackShip.subsystems.laser // + random
    
 
    //dmg in shield

        const totalDmg = torpedoDmg + laserDmg
        let overDmg;

        // !! defShip.loseShield = totalDmg !!

        if(totalDmg > defShip.subsystems.shield) {
            overDmg = totalDmg - defShip.subsystems.shield    
        }
        
        // !! defShip.loseHull = overDmg !!

    
}



function round (player, pirate) {

    console.log(player)
    console.log(pirate)

    if(player.subsystems.hull > 0 && pirate.subsystems.hull > 0) {
                
        let i = 0;
        i++

        console.log('ROUND ' + i)

        combat(player, pirate)
        combat(pirate, player)
        
        if (player.subsystems.hull <= 0) {
            console.log('RIP')
        } else if (pirate.subsystems.hull <= 0) {
            console.log('you won!')
        }

        // !! function repair muss hier drin !!

    } else if (shipA.subsystems.hull <= 0) {
        console.log('RIP')
    } else if (shipB.subsystems.hull <= 0) {
        console.log('you won!')
    }
}

round(september, YMCA)
