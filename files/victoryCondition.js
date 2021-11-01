import staticMap from './map.js'

function victoryCondition (locations) {

    let i = 0;

    for(const location of locations) {
        if(location.visited === true) {
            i++
        }
    }

    if(i ===locations.length) {
        console.log('you won')
        // wie viele Punkte
        // break
    } else {
        console.log('not won yet')
    }
}

module.exports = victoryCondition;