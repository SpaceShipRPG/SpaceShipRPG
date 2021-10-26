const staticMap = require('./map.js');
const prompt = require('prompt-sync')();
/* let shipPosition = {
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
} */

let shipPosition = {
    x : 11,
    y : 11
}
function movement (order) {
    const newPosition = [];
    if(order === 8) {
        newPosition.push(shipPosition.x, shipPosition.y+1)

    } else if(order === 4){
        newPosition.push(shipPosition.x-1, shipPosition.y)

    } else if(order === 2){
        newPosition.push(shipPosition.x, shipPosition.y-1)

    } else if(order === 6) {
        newPosition.push(shipPosition.x+1, shipPosition.y)
    }
    return newPosition;
}
console.log('Your move:');
const meineBewegung = movement(Number(prompt('')));
const meineBewegungX = meineBewegung[0];
const meineBewegungY = meineBewegung[1];

const laenge = staticMap.length;

for (let elem of staticMap) {
  if (elem.x === meineBewegungX && elem.y === meineBewegungY) {
    console.log(`${elem.name} is in the way. The coordinates of your current position are x: ${meineBewegungX}, y: ${meineBewegungY}.`);
  }
  console.log(`You are in a empty space and the coordinates of your position are x: ${meineBewegungX}, y: ${meineBewegungY}.`);
  break;
}