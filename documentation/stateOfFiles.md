/// ES GIBT FRAGEN AM ENDE

leer / pseudo / WIP / fertig / getested

# Mother Of Files

* main.js                   WIP

## Static Files

* PlayerShip.js             WIP (fehlen: Werte, Methoden Problemen)
* PirateShip.js             WIP (fehlen: Werte)
* Ressources.js => class    getested
* Subsystems.js => class    getested
* Location.js               nutzen / brauchen wir eigentlich dieses Datei?
* Map.js                    getested

## Actions

* direction                 fast fertig --> Die Methoden/Funktionen (sell, buy, ...) müssen noch eingebunden werden.
* inform                    getested
* mine                      WIP (Konfikte mit PlayerShip Methoden)
* danger                    noch nicht angefangen
* fight                     fertig(?)
* MaintainanceCost          WIP (es sollte als Methoden in PlayerShip eingefügt werden und von Direction gerufen)
* Wurmloch                  getested

## When you arrive to the planet

* Meldungen                 WIP (konflikt mit Direction: wer gibt die Meldungen und übernimmt die Spielentscheidungen?)
* Comerce                   WIP (konflikt zwischen diese Funktionen und die Methoden in PlayerShip)



### alteDateien (nicht mehr oder momentan nicht verwendet)

* Ship.js => class um mehreren Schiffe aufzubauen
* Crew.js => falls wir Spezialisten haben
* index.js => jetzt als main.js
* movement: to explore the space => von direction.js übernommen
* AutomaticPlanetEvents: refill air and recruit crew => als Methode in PlayerShip eingefügt

PlayerShip oxygen method