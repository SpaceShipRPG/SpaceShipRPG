const chalk = require('chalk');
const staticMap = require('./map.js');
const wurmloch = require('./Wurmloch.js');
const commerce = require('./Comerce.js');
const prompt = require('prompt-sync')();
const PlayerShip = require('./PlayerShip.js');
const Danger = require('./Danger.js');
const randomNr = require('./randomNr.js');
const PirateShip = require('./PirateShip.js');
const fight = require('./fight.js');
const repair = require('./repair.js');
const Mine = require('./Mine.js');
const victoryPoints = require('./victoryPoints.js')
const inform = require('./Inform.js')


let shipPosition = [5, 5];
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
                messageObject(elem.name);
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
                elem.visited = true;
                messageObject(elem.name);
                const inputUser = input();
                while (tradeState.isTrade) {
                    if (inputUser === 1) {
                        console.log(`\
                        ******************************************\r\n\
                        *** You have the following options:       \r\n\
                        ***     Press 1 to buy water.             \r\n\
                        ***     Press 2 to buy Food.              \r\n\
                        ***     Press 3 to buy medicine.          \r\n\
                        ***     Press 4 to buy energy.            \r\n\
                        ***     Press 5 to buy spare parts.       \r\n\
                        ***     Press 6 to exit.                  \r\n\
                        ******************************************\r\n\
                        `);
                        const buyOption = input();
                        if (buyOption === 1) {
                            inform.inform();
                            const howMuch = Number(prompt(`You can buy up to ${PlayerShip.playerShip.resources.water[1] - PlayerShip.playerShip.resources.water[0]} water. How much water do you want to buy?     `));
                            commerce.buy('water', howMuch);
                        } else if (buyOption === 2) {
                            inform.inform();
                            const howMuch = Number(prompt(`You can buy up to ${PlayerShip.playerShip.resources.food[1] - PlayerShip.playerShip.resources.food[0]} food. How much food do you want to buy?     `));
                            commerce.buy('food', howMuch)
                        } else if (buyOption === 3) {
                            inform.inform();
                            const howMuch = Number(prompt(`You can buy up to ${PlayerShip.playerShip.resources.drugs[1] - PlayerShip.playerShip.resources.drugs[0]} drugs. How much medicine do you want to buy?     `));
                            commerce.buy('drugs', howMuch);
                        } else if (buyOption === 4) {
                            inform.inform();
                            const howMuch = Number(prompt(`You can buy up to ${PlayerShip.playerShip.resources.energy[1] - PlayerShip.playerShip.resources.energy[0]} energy. How much energy do you want to buy?     `));
                            commerce.buy('energy', howMuch);
                        } else if (buyOption === 5) {
                            inform.inform();
                            const howMuch = Number(prompt(`You can buy up to ${PlayerShip.playerShip.resources.shipParts[1] - PlayerShip.playerShip.resources.shipParts[0]} spare parts. How much spare parts do you want to buy?     `));
                            commerce.buy('shipParts', howMuch);
                        } else {
                            tradeState.stopTrading();
                            return;
                        }
                    } else if (inputUser === 2) {
                        console.log(`\
                        *******************************************\r\n\
                        *** You have the following options:        \r\n\
                        ***     Press 1 to sell minerals.          \r\n\
                        ***     Press 2 to sell metal.             \r\n\
                        ***     Press 3 to sell gas.               \r\n\
                        ***     Press 4 to sell special technology.\r\n\
                        ***     Press 5 to exit.                   \r\n\
                        *******************************************\r\n\
                        `);
                        const sellOption = input();
                        if (sellOption === 1) {
                            inform.inform();
                            const howMuch = Number(prompt(`You can sell up to ${PlayerShip.playerShip.resources.minerals[0]} minerals. How much minerals do you want to sell?     `));
                            commerce.sell('minerals', howMuch);
                            inform.inform();
                        } else if (sellOption === 2) {
                            inform.inform();
                            const howMuch = Number(prompt(`You can sell up to ${PlayerShip.playerShip.resources.metal[0]} metal. How much metal do you want to sell?     `));
                            commerce.sell('metal', howMuch);
                            inform.inform();
                        } else if (sellOption === 3) {
                            inform.inform();
                            const howMuch = Number(prompt(`You can sell up to ${PlayerShip.playerShip.resources.gas[0]} gas. How much gas do you want to sell?     `));
                            commerce.sell('gas', howMuch);
                            inform.inform();
                        } else if (sellOption === 4) {
                            inform.inform();
                            const howMuch = Number(prompt(`You can sell up to ${PlayerShip.playerShip.resources.specialTech[0]} special tech. How much special tech do you want to sell?     `));
                            commerce.sell('specialTech', howMuch);
                            inform.inform();
                        } else {
                            tradeState.stopTrading();
                            return;
                        }
                    } else if (inputUser === 3) {
                        // recruit()
                    } else if (inputUser === 4) {
                        console.log('hier',shipPosition);
                        return;
                    }
                }  
            }
            
            if (elem.name === 'Astroid' || elem.name === 'Nebula' || elem.name === 'Star' || elem.name === 'Graveyard') {
                elem.visited = true;
                
                while (tradeState.isTrade) {
                    messageObject(elem.name);
                    const inputUser = input();
                    if (inputUser === 1) {
                        if (elem.name === 'Astroid') {
                            let random = randomNr(1, 2);
                            let resource = random === 1 ? "metal" : "minerals";
                            console.log(`Your current ${resource} is ${PlayerShip.playerShip.resources[resource][0]}`);
                            const storageCapacity = PlayerShip.playerShip.resources[resource][1] - PlayerShip.playerShip.resources[resource][0]; 
                            if (storageCapacity === 0) {
                                console.log(`Maximum storage capacity of ${resource} has already been achieved.`);
                                return;
                            } else {
                                Mine.mine(resource);
                                console.log(`Your ${resource} after mining is ${PlayerShip.playerShip.resources[resource][0]}`);
                            }
                        };
                        if (elem.name === 'Nebula') {Mine.mine("gas")};
                        if (elem.name === 'Star') {Mine.mine("energy")};
                        if (elem.name === 'Graveyard') {Mine.mine("specialTech")};
                        Danger.accident(elem.name);
                    } else if (inputUser === 2) {
                        tradeState.stopTrading();
                        return;
                    } else {
                        console.log('Please enter a number between 1 and 2');
                    }
                }
            }
    
            if (elem.name === 'Space Station') {
                elem.visited = true;
                messageObject(elem.name);
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
                elem.visited = true;
                messageObject(elem.name);
                const inputUser = input();
                if (inputUser === 1) {
                    fight.shipAttack(PirateShip.randomPirate(), "laser");
                } else if (inputUser === 2) {
                    return;
                } else {
                    console.log('Please enter a number between 1 and 2');
                }
            }
            if (elem.name === 'Wormhole') {
                elem.visited = true;
                messageObject(elem.name);
                const wormHoleRandom = wurmloch();
                shipPosition[0] = wormHoleRandom[0];
                shipPosition[1] = wormHoleRandom[1];
                console.log(shipPosition);
            }
            clash = true; 
            }
        }
        if (!clash) {
            console.log(`You are in an empty space and the coordinates of your position are x: ${shipPosition[0]}, y: ${shipPosition[1]}.`);
            return;
        }
    
    
        function messageObject(params) {
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

const tradeState = {
    isTrade: true,
    stopTrading() {
        this.isTrade = false;
    }
}

const gameState = {
    isPlaying: true,
    stopPlaying() {
        this.isPlaying = false;
    }
}
while (gameState.isPlaying) {
    play();
}

exports.play = play;