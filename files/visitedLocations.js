const staticMap = require('./map.js');

function victoryCondition () {

    let i = 0;

    for(const location of staticMap) {
        if(location.visited === true) {
            i++
        }
    }

    if(i === staticMap.length) {
        console.log('you won')
        // wie viele Punkte
        // break
    }
}

module.exports = victoryCondition;




/* const visitedPlaces = []
function isVisited(locations) {

for(const location of locations) {
if(location.visited === true) {

visitedPlaces.push(location)
}
}
return visitedPlaces
}

//isVisited(staticMap)

exports.isVisited = isVisited */