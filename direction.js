let shipPosition = {
    x : 11,
    y : 11
}
 
function movement (order) {
    
    if(order === 'w') {
        shipPosition.y++

    } else if(order === 'a'){
        shipPosition.x--

    } else if(order === 's'){
        shipPosition.y--

    } else if(order === 'd') {
        shipPosition.x++
    }
}