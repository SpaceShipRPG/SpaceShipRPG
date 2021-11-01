// Achtung nur Pseudo-Code für Planung und Brainstorming

// Import:
const randomNr = require("./randomNr");
const PlayerShip = require("./PlayerShip");
const PirateShip = require("./PirateShip");




function combat(attackShip, defShip) {

    let torpedoDmg;

    // attack with torpedos

    const torpedoImpact = 20 // + random
    const torpedoEvasion = defShip.subsystems.engine[0] // + random

    if (torpedoImpact > torpedoEvasion) {

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

    console.log(`${defShip.name}, hull: ${defShip.subsystems.hull[0]}, shield: ${defShip.shieldValue[0]}`)
    if (totalDmg > defShip.shieldValue[0]) {
        overDmg = totalDmg - defShip.shieldValue[0]
    }

    // !! defShip.loseHull = overDmg !!


}

// console.log(PlayerShip.playerShip)

// combat(PlayerShip.playerShip, PirateShip.pirateShip01)

// console.log(PlayerShip.playerShip)





function round(player, pirate) {
    for (let i = 1; player.subsystems.hull[0] > 0 | pirate.subsystems.hull[0] > 0; i++) {

        console.log('ROUND ' + i)
        combat(player, pirate)
        combat(pirate, player)

        if (player.subsystems.hull[0] <= 0) {
            console.log('RIP');
            break;
        } else if (pirate.subsystems.hull[0] <= 0) {
            console.log('you won!');
            break;
        }
        // !! function repair muss hier drin !!
        // } else if (player.subsystems.hull[0] <= 0) {
        //     console.log('RIP')
        // } else if (pirate.subsystems.hull[0] <= 0) {
        //     console.log('you won!')
    }
};
round(PlayerShip.playerShip, PirateShip.pirateShip01);
// console.log(PirateShip.pirateShip01);
// console.log(PlayerShip.playerShip);












// alter und alternativer Code, Beispiele von anderen etc.:



// ganz einfache Version nur mit Laser (ohne Torpedo) und sehr vereinfachten Rechnung:
// function shipAttack(enemy, weapon) {

// };

// exports.shipAttack = shipAttack;





// function shipAttack(enemy, weapon) {
//     if (enemy.subsystems.shield > 0) {
//         enemy.subsystems.shield -= weaponStrength * randomDamageStrength() * randomHitChance();
//         console.log(`${enemy.name} shields are now at (${enemy.shield})`)
//     } else {
//         randomShipDamage(enemy, weaponStrength);
//     }   
// };

// Erster Schritt: Trifft man oder nicht: (Entscheidungstabelle)
// this.subsystems.laser.accuracy * this.subsystems.laser.rateOfFire - enemy.subsystems.engine * randomNr(0.8, 1.2, 1);

// Wenn ja: Schaden ermitteln:
// Schilde noch oben? > Dann Schaden an den Schilden. Falls nicht, dann Schaden am Schiff. (Zufall welches System/e?)


/*
function randomDamageStrength () {
    return Math.random * 5;
};

function randomHitChance () {
    const chance = Math.random;
    return (chance > 0.3 ? chance : 0);
};

function randomShipDamage(enemy, weaponStrength) {
    const chance = Math.random * 10;
    if (chance <= 6) {
        // Schaden an der Hülle
    }
    if (chance <= 8) {
        // Schaden am Antrieb
    }
    if (chance <= 10) {
        // Schaden an der Lebenserhaltung    
    }
};      */

// function boardingAction () {
// (eigeneSoldaten * Handwaffenstärke * Random) - (FeindlicheSoldaten * Handwaffenstärke * Random)
// danach (FeindlicheSoldaten * Handwaffenstärke * Random) - (eigeneSoldaten * Handwaffenstärke * Random)
// repead irengwer = 0
// if FeindlicheSoldaten >= 0 = Boarding failed;
// if eigeneSoldaten >= 0 = Boarding erfolgreich; Schiff feindlich übernommen)
// };


// Schiffswaffen:
// Laser: {stärke : 5, hitChance : 8, criticalHitChance: 2}
// Torpedo: {stärke : 10, hitChance: 3, criticalHitChance: 6}

// Spieler kann Waffen für den Angriff wählen (falls mehrere vorhanden) und welche feindlichen Subsysteme anvisiert werden sollen (x% Wahrscheinlichkeit diese im falle eines Treffers zu beschädigen)

// Antrieb intakt (und ein hoher Wert = schnelles Schiff) bedeutet gewisse Wahrscheinlichkeit dem Beschuss auszuweichen? Antrieb kaputt bedeutet fast 100%ige wahrscheinlichkeit getroffen zu werden?





// Vielleicht Ausgabe der einzelnen Runden von Kämpfen (Schiffe oder Boarding) mit setTimeout(meineFunktion, 500); jeweils um eine halbe Sekunde verzögern, damit es spannender wird und nicht direkt das Endergebniss angezeigt wird.








// Geklauter Code von Duel-Simulator:
/*
function duel(a,d) {		
    var EVA_FACTOR = 1.125;
    var EVA_INHERENT = 0.5;				
    var l = [];

    a = clone(a); d = clone(d);

    while(d.hp>0) {
        a = [d, d = a][0];
        r = d.eva-a.hit;				
        dg = 0;
        if( !(Math.random() < ( EVA_INHERENT + (r>0?1:-1) * Math.pow(Math.abs(r),EVA_FACTOR)/100)) ) {
            dg = (a.atk-d.def)<1 ? 1 : (a.atk-d.def);
            d.hp = d.hp<dg ? 0 : (d.hp-dg);				
        }
        l.push({atkr:a.id,dmg:dg});
    }

    function clone(c) { return JSON.parse(JSON.stringify(c)); }

    return {winner:a,log:l};
}

var p1 = {id:'player 1',hp:10,atk:3,def:1,hit:1,eva:1};
var p2 = {id:'player 2',hp:10,atk:1,def:3,hit:1,eva:3};

console.log(duel(p1,p2))

*/


// Code-Vorlage von Maxims DoomGuy-Spiel:

/* function fight(enemy, weapon) {
    // Aufgabe 3
    enemy.life -= this.weapons[weapon]
    console.log(`${this.name} fight ${enemy.name}(${enemy.life})`)
    // Aufgabe 1
    if (enemy.life <= 0)
        console.log(`${this.name} wins!`)
}

// Aufgabe 2
function heal() {
    this.life++
}

const doomGuy = {
    name: 'Doomguy',
    life: 10,
    attack: 2,
    fight,
    // Aufgabe 2
    heal,
    // Aufgabe 3
    weapons: {
        chainsaw: 10,
        shotgun: 15
    }
}

const cyberDemon = {
    name: 'Cyberdemon',
    life: 15,
    attack: 1,
    fight,
    // Aufgabe 2
    heal,
    // Aufgabe 3
    weapons: {
        chainsaw: 10,
        shotgun: 15
    }
}

doomGuy.fight(cyberDemon, "chainsaw")
doomGuy.fight(cyberDemon, "shotgun")
cyberDemon.fight(doomGuy, "chainsaw")
doomGuy.fight(cyberDemon, "shotgun")
cyberDemon.fight(doomGuy, "shotgun")
doomGuy.heal()
cyberDemon.fight(doomGuy, "shotgun")
doomGuy.fight(cyberDemon, "chainsaw")   */