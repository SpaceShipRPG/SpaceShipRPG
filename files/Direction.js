const chalk = require('chalk');
const staticMap = require('./map.js');
const wurmloch = require('./Wurmloch.js');
const prompt = require('prompt-sync')();

let shipPosition = [1, 20];
// playerShip.name = prompt('Please enter your ship name:    ');

function play() {
    
    console.log(chalk.bold.red.bgYellow(`Your current position is [x: ${shipPosition[0]} , y: ${shipPosition[1]}]`));
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
        } else if (order === 5) {
            console.log(chalk.red('see you next time!'));
            gameState.stopPlaying();
            return;
        } else {
            console.log(`\
            ******************************************\r\n\
            *** You have the following options:       \r\n\
            ***     Press 8 upward movement.          \r\n\
            ***     Press 6 forward movement.         \r\n\
            ***     Press 2 downward movement.        \r\n\
            ***     Press 4 backward movement         \r\n\
            ***     Press 5 to exit the game.         \r\n\
            ******************************************\r\n\
            `);
            return;
        }
        return newPosition;
    }
    /* function checkPosition() { */
        console.log(chalk.cyan.italic('Your move:'));
        let meineBewegung = movement(Number(prompt('')));
        let meineBewegungX;
        let meineBewegungY;
        if (meineBewegung !== undefined) {
            meineBewegungX = meineBewegung[0];
            meineBewegungY = meineBewegung[1];
        } 
        if (!gameState.isPlaying) {
            // Spieler hat das spiel abgebrochen.
            return;
        }
    
        let clash = false;
        if (meineBewegungX < 1 || meineBewegungX > 21 || meineBewegungY < 1 || meineBewegungY > 21) {
            console.log('The edge of the world is reached. Find another way!');
            return;
        } else {
            shipPosition[0] = meineBewegungX;
            shipPosition[1] = meineBewegungY;
        }
    
        for (let elem of staticMap) {
            if (elem.x === shipPosition[0] && elem.y === shipPosition[1]) {
            console.log(`Your current position is [x: ${shipPosition[0]}, y: ${shipPosition[1]}].`);
            
            if (elem.name === 'Home') {
                messagePlanet(elem.name);
                const inputUser = input();
                if (inputUser === 1) {
                    // delivery
                } else if (inputUser === 2) {
                    // recharge
                } else if (inputUser === 3) {
                    recruit();
                } else if (inputUser === 4) {
                    
                    return;
                } else {
                    console.log('Please enter a number between 1 and 4');
                }
            }
            if (elem.name === 'Vulkan' || elem.name === 'Kronos' || elem.name === 'Minerva') {
                messagePlanet(elem.name);
                const inputUser = input();
                if (inputUser === 1) {
                    // buy();
                } else if (inputUser === 2) {
                    // sell();
                } else if (inputUser === 3) {
                    // recruit()
                } else if (inputUser === 4) {
                    console.log('hier',shipPosition);
                    return;
                } else {
                    console.log('Please enter a number between 1 and 4');
                }
            }
    
            if (elem.name === 'Astroid' || elem.name === 'Nebula' || elem.name === 'Star' || elem.name === 'Graveyard') {
                messagePlanet(elem.name);
                const inputUser = input();
                if (inputUser === 1) {
                    mine();
                    danger();
                } else if (inputUser === 2) {
                    return;
                } else {
                    console.log('Please enter a number between 1 and 2');
                }
            }
    
            if (elem.name === 'Space Station') {
                messagePlanet(elem.name);
                const inputUser = input();
                if (inputUser === 1) {
                    buy();
                } else if (inputUser === 2) {
                    sell();
                } else if (inputUser === 3) {
                    // repair
                } else if (inputUser === 4) {
                    return;
                } else {
                    console.log('Please enter a number between 1 and 4');
                }
            }
    
            if (elem.name === 'Pirate') {
                messagePlanet(elem.name);
                const inputUser = input();
                if (inputUser === 1) {
                    fight();
                } else if (inputUser === 2) {
                    return;
                } else {
                    console.log('Please enter a number between 1 and 2');
                }
            }
            if (elem.name === 'Wormhole') {
                messagePlanet(elem.name);
                const wormHoleRandom = wurmloch();
                shipPosition[0] = x[0];
                shipPosition[1] = x[1];
                console.log(shipPosition);
            }
            clash = true; 
            }
        }
        if (!clash) {
            console.log(`You are in an empty space and the coordinates of your position are x: ${shipPosition[0]}, y: ${shipPosition[1]}.`);
            return;
        }
    
    
        function messagePlanet(params) {
            if (params === 'Vulkan' || params === 'Vulkan' || params === 'Vulkan') {
                console.log(`\
                ******************************************\r\n\
                *** Welcome to ${params}.                 \r\n\
                *** You have the following options:       \r\n\
                ***     Press 1 for purchasing.           \r\n\
                ***     Press 2 for selling.              \r\n\
                ***     Press 3 hire crew members.        \r\n\
                ***     Press 4 to continue your journey. \r\n\
                ******************************************\r\n\
                `);
    
            } else if (params === 'Astroid' || params === 'Nebula' || params === 'Star' || params === 'Graveyard') {
    
                console.log(`\
                ******************************************\r\n\
                *** Welcome to ${params}.                 \r\n\
                *** You have the following options:       \r\n\
                ***     Press 1 for mining for resources. \r\n\
                ***     Press 2 to continue your journey. \r\n\
                ***             D A N G E R!              \r\n\
                ******************************************\r\n\
                `);
    
            } else if (params === 'Pirate') {
    
                console.log(`\
                ******************************************\r\n\
                *** You are facing the ${params}.         \r\n\
                *** You have the following options:       \r\n\
                ***     Press 1 for fighting.             \r\n\
                ***     Press 2 to continue your journey. \r\n\
                ***             D A N G E R!              \r\n\
                ******************************************\r\n\
                `);
            } else if (params === 'Wormhole') {
    
                console.log(`\
                ******************************************\r\n\
                *** Welcome to ${params}.                 \r\n\
                ***     You are taking a short cut.       \r\n\
                ***             D A N G E R!              \r\n\
                ******************************************\r\n\
                `);
            } else if (params === 'Space Station') {
    
                console.log(`\
                ******************************************\r\n\
                *** Welcome to ${params}.                 \r\n\
                *** You have the following options:       \r\n\
                ***     Press 1 for purchasing.           \r\n\
                ***     Press 2 for selling.              \r\n\
                ***     Press 3 to repair your ship.      \r\n\
                ***     Press 4 to continue your journey  \r\n\
                ******************************************\r\n\
                `);
            } else if (params === 'Home') {
    
                console.log(`\
                ******************************************\r\n\
                *** Welcome to ${params}.                 \r\n\
                *** You have the following options:       \r\n\
                ***     Press 1 to deliver resources.     \r\n\
                ***     Press 2 to recharge.              \r\n\
                ***     Press 3 hire crew members.        \r\n\
                ***     Press 4 to continue your journey  \r\n\
                ******************************************\r\n\
                `);
            }
        }
    
    
        function input() {
            const userInput = Number(prompt('Please make a choice!     '));
            return userInput;
        } 
/*     }

    checkPosition(); */
};


const gameState = {
    isPlaying: true,
    stopPlaying() {
        this.isPlaying = false;
    }
}
while (gameState.isPlaying) {
    play();
}

/* module.export = shipPosition; */