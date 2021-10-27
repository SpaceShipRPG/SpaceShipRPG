// jede Gefahr muss jede Runde aktiviert werden, in der der Spieler da bleibt


function accident(type, risk) {

    let randomAccident = Math.floor(Math.random() * 10)
    let badLuck = risk - randomAccident
    if (risk > randomAccident) {
        
        switch (type){

            case 'asteroids' : 
                
                PlayerShip.Subsystems.hull -= badLuck // selbe System als in fight, das wandelt dmg erstmal um Hülle und dann um Strucktur
                break;

            case 'gas' : 
                PlayerShip.Ressourcen.oxygen -= crew * badLuck
                PlayerShip.Ressourcen.water -= crew * badLuck
                PlayerShip.Ressourcen.food -= crew * badLuck
                break;

            case 'schwarzesLoch' : 
                PlayerShip.Subsystems.hull -= badLuck * 1.5 // selbe System als in fight, das wandelt dmg erstmal um Hülle und dann um Strucktur
                break;

            case 'stern' : 
                PlayerShip.Subsystems.hull -= badLuck * 1.5 // selbe System als in fight, das wandelt dmg erstmal um Hülle und dann um Strucktur
                break;
        }
    }

}





// Asteroiden
accident('asteroids', 5)

// Gas
accident('gas', 6)

// Schwarzes Loch
accident('schwarzerLoch', 7)

// Stern
accident('stern', 8)