// Achtung nur Pseudo-Code für Planung und Brainstorming


function shipAttack(enemy, weaponStrength) {
    if (enemy.shield > 0) {
        enemy.shield -= weaponStrength * randomDamageStrength() * randomHitChance();
        console.log(`${enemy.name} shields are now at (${enemy.shield})`)
    } else {
        randomShipDamage(enemy, weaponStrength);
    }   
};


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
};

function boardingAction () {
    // (eigeneSoldaten * Handwaffenstärke * Random) - (FeindlicheSoldaten * Handwaffenstärke * Random)
    // danach (FeindlicheSoldaten * Handwaffenstärke * Random) - (eigeneSoldaten * Handwaffenstärke * Random)
    // repead irengwer = 0
    // if FeindlicheSoldaten >= 0 = Boarding failed;
    // if eigeneSoldaten >= 0 = Boarding erfolgreich; Schiff feindlich übernommen)
};


// Schiffswaffen:
// Laser: {stärke : 5, hitChance : 8, criticalHitChance: 2}
// Torpedo: {stärke : 10, hitChance: 3, criticalHitChance: 6}

// Spieler kann Waffen für den Angriff wählen (falls mehrere vorhanden) und welche feindlichen Subsysteme anvisiert werden sollen (x% Wahrscheinlichkeit diese im falle eines Treffers zu beschädigen)

// Antrieb intakt (und ein hoher Wert = schnelles Schiff) bedeutet gewisse Wahrscheinlichkeit dem Beschuss auszuweichen? Antrieb kaputt bedeutet fast 100%ige wahrscheinlichkeit getroffen zu werden?










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