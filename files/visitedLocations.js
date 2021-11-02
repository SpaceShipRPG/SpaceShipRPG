const visitedPlaces = []
function isVisited(locations) {

for(const location of locations) {
if(location.visited === true) {

visitedPlaces.push(location)
}
}
return visitedPlaces
}

//isVisited(staticMap)

export.isVisited = isVisited