const staticMap = require('./Map.js');
const prompt = require('prompt-sync')();


let shipPosition = [11, 11];
function movement (order) {
    const newPosition = [];
    if(order === 8) {
        newPosition.push(shipPosition[0], shipPosition[1]+1)

    } else if(order === 4){
        newPosition.push(shipPosition[0]-1, shipPosition[1])

    } else if(order === 2){
        newPosition.push(shipPosition[0], shipPosition[1]-1)

    } else if(order === 6) {
        newPosition.push(shipPosition[0]+1, shipPosition[1])
    }
    return newPosition;
}
console.log('Your move:');
const meineBewegung = movement(Number(prompt('')));
const meineBewegungX = meineBewegung[0];
const meineBewegungY = meineBewegung[1];

let clash = false;
if (meineBewegungX < 1 || meineBewegungX > 21 || meineBewegungY < 1 || meineBewegungY > 21) {
    console.log('The edge of the world is reached. Find another way!');
    return;
}
for (let elem of staticMap) {
    if (elem.x === meineBewegungX && elem.y === meineBewegungY) {
      console.log(`${elem.name} is in the way. The coordinates of your current position are x: ${shipPosition[0]}, y: ${shipPosition[1]}.`);
      clash = true;
    } 
}
if (!clash) {
    shipPosition[0] = meineBewegungX;
    shipPosition[1] = meineBewegungY;
    console.log(`You are in an empty space and the coordinates of your position are x: ${shipPosition[0]}, y: ${shipPosition[1]}.`);
}