// alternatives Fight system
// muss weiter bearbeitet werden!!

const PlayerShip = require("./PlayerShip");
const PirateShip = require("./PirateShip");


//console.log(PlayerShip.playerShip.subsystems)


function combat (attackShip, defShip) {

    let torpedoDmg;
    
    // attack with torpedos
    
    const torpedoImpact = 20 // + random
    const torpedoEvasion = defShip.subsystems.engine[0]  // + random
    
    if(torpedoImpact > torpedoEvasion) {
        
        const torpedoSuccess = torpedoImpact - torpedoEvasion
        torpedoDmg = torpedoSuccess // + random
    } else {
        torpedoDmg = 0
    }
    
    
    // attack with laser
    
    const laserDmg = 5 // + random
    
 
    //dmg in shield

        const totalDmg = torpedoDmg + laserDmg
        let overDmg;

        defShip.subsystems.hull[0] -= totalDmg

        console.log(defShip.subsystems.hull[0])
        console.log(defShip.shieldValue[0])
        if(totalDmg > defShip.shieldValue[0]) {
            overDmg = totalDmg - defShip.shieldValue[0]    
        }
        
        // !! defShip.loseHull = overDmg !!

    
}

console.log(PlayerShip.playerShip)

combat(PlayerShip.playerShip, PirateShip.pirateShip01)

console.log(PlayerShip.playerShip)
/*
function round (player, pirate) {


    if(player.subsystems.hull > 0 && pirate.subsystems.hull > 0) {
                
        let i = 0;
        i++

        conso   le.log('ROUND ' + i)

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
*/