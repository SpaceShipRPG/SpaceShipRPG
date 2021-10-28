function wurmloch (){
        
    x = Math.floor(Math.random() * 20)
    y = Math.floor(Math.random() * 20)
    
    return [x,y];
}

module.exports = wurmloch;