let shipPosition = [1, 1]

function wurmloch (){
        
    x = Math.floor(Math.random() * 20)
    y = Math.floor(Math.random() * 20)
    
    if(x === 0) {
        x === 11
    }
    if(y === 0) {
        y === 11
    }

    shipPosition.shift()
    shipPosition.shift()
    shipPosition.unshift(y)
    shipPosition.unshift(x)
}
wurmloch()
console.log(shipPosition)