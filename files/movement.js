let shipPosition = {
    x : 11,
    y : 11
}
 
function movement (order) {
    
    if(order === 8) {
        shipPosition.y++

    } else if(order === 4){
        shipPosition.x--

    } else if(order === 2){
        shipPosition.y--

    } else if(order === 6) {
        shipPosition.x++
    }

    if(x < 1) {
        x === 1
        console.log('no way')
    }
    if(y < 1) {
        y === 1
        console.log('no way')
    }
    if(x > 21) {
        x === 21
        console.log('no way')
    }
    if(y > 21) {
        y === 21
        console.log('no way')
    }
}