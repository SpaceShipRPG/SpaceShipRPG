const randomNr = require('./randomNr.js')
function wurmloch (){
        
    x = randomNr(1,21);
    y = randomNr(1,21);
    
    return [x,y];
}

module.exports = wurmloch;