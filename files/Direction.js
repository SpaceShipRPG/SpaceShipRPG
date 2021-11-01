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
const Repair = require('./repair.js');
const Mine = require('./Mine.js');
const victoryPoints = require('./victoryPoints.js')
const inform = require('./Inform.js')
const Maintainance = require('./maintainance.js')


let shipPosition = [5, 5];

function play() {
    
    console.log(chalk.bold.red.bgYellow(`Your are at home and your current position is [x: ${shipPosition[0]} , y: ${shipPosition[1]}]`));
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
        inform.infoShip();
        console.log(chalk.cyan.italic('Your move:'));
        let meineBewegung = movement(Number(prompt('')));
        let meineBewegungX;
        let meineBewegungY;
        if (meineBewegung !== undefined) {
            meineBewegungX = meineBewegung[0];
            meineBewegungY = meineBewegung[1];
        } 
        if (!gameState.isPlaying) {
            // User canceled the game.
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
                console.log(chalk.green.bold('Welcome back home!'));
                /* const inputUser = input();
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
                } */
            }
            if (elem.name === 'Vulkan' || elem.name === 'Kronos' || elem.name === 'Minerva') {
                elem.visited = true;
                //messageObject(elem.name);
                //const inputUser = input();
                while (tradeState.isTrade) {
                    messageObject(elem.name);
                    const inputUser = input();
                    let levelBack = true;
                    while (levelBack) {
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
                                inform.informCredit();
                                const howMuch = Number(prompt(`You can buy up to ${PlayerShip.playerShip.resources.water[1] - PlayerShip.playerShip.resources.water[0]} units of water. You only have enough money for ${PlayerShip.playerShip.resources.credits[0]} units of water. How much water do you want to buy?     `));
                                commerce.buy('water', howMuch, elem);
                            } else if (buyOption === 2) {
                                inform.informCredit();
                                const howMuch = Number(prompt(`You can buy up to ${PlayerShip.playerShip.resources.food[1] - PlayerShip.playerShip.resources.food[0]} units of food. You only have enough money for ${PlayerShip.playerShip.resources.credits[0]} units of food. How much food do you want to buy?     `));
                                commerce.buy('food', howMuch, elem)
                            } else if (buyOption === 3) {
                                inform.informCredit();
                                const howMuch = Number(prompt(`You can buy up to ${PlayerShip.playerShip.resources.drugs[1] - PlayerShip.playerShip.resources.drugs[0]} units of medicine. You only have enough money for ${PlayerShip.playerShip.resources.credits[0]} units of medicine. How much medicine do you want to buy?     `));
                                commerce.buy('drugs', howMuch, elem);
                            } else if (buyOption === 4) {
                                inform.informCredit();
                                const howMuch = Number(prompt(`You can buy up to ${PlayerShip.playerShip.resources.energy[1] - PlayerShip.playerShip.resources.energy[0]} units of energy. You only have enough money for ${PlayerShip.playerShip.resources.credits[0]} units of energy. How much energy do you want to buy?     `));
                                commerce.buy('energy', howMuch, elem);
                            } else if (buyOption === 5) {
                                inform.informCredit();
                                const howMuch = Number(prompt(`You can buy up to ${PlayerShip.playerShip.resources.shipParts[1] - PlayerShip.playerShip.resources.shipParts[0]} units of spare parts. You only have enough money for ${PlayerShip.playerShip.resources.credits[0]} units of spare parts. How much spare parts do you want to buy?     `));
                                commerce.buy('shipParts', howMuch, elem);
                            } else if (buyOption === 6) {
                                levelBack = false;
                            } else {
                                console.log('Please enter a number between 1 - 5');
                                levelBack = false;
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
                                inform.informCredit();
                                const howMuch = Number(prompt(`You can sell up to ${PlayerShip.playerShip.resources.minerals[0]} units of minerals. How much minerals do you want to sell?     `));
                                commerce.sell('minerals', howMuch, elem);
                                inform.informCredit();
                            } else if (sellOption === 2) {
                                inform.informCredit();
                                const howMuch = Number(prompt(`You can sell up to ${PlayerShip.playerShip.resources.metal[0]} units of metal. How much metal do you want to sell?     `));
                                commerce.sell('metal', howMuch, elem);
                                inform.informCredit();
                            } else if (sellOption === 3) {
                                inform.informCredit();
                                const howMuch = Number(prompt(`You can sell up to ${PlayerShip.playerShip.resources.gas[0]} units of gas. How much gas do you want to sell?     `));
                                commerce.sell('gas', howMuch, elem);
                                inform.informCredit();
                            } else if (sellOption === 4) {
                                inform.informCredit();
                                const howMuch = Number(prompt(`You can sell up to ${PlayerShip.playerShip.resources.specialTech[0]} units of special tech. How much special tech do you want to sell?     `));
                                commerce.sell('specialTech', howMuch, elem);
                                inform.informCredit();
                            } else if (sellOption === 5){
                                levelBack = false;
                            } else {
                                console.log('Please enter a number between 1 - 4');
                                levelBack = false;
                            }
                        } else if (inputUser === 3) {
                            inform.informCrew();
                            const howMuch = Number(prompt(`How many crew members do you want to hire?    `));
                            PlayerShip.playerShip.recruit(howMuch);
                            inform.informCrew();
                            levelBack = false;
                        } else if (inputUser === 4) {
                            inform.informAll();
                            levelBack = false;
                        } else if (inputUser === 5) {
                            tradeState.stopTrading();
                            Maintainance.maintainance();
                            Repair.selfRepair();
                            Repair.shieldRecharge();
                            return;
                        }
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
                                let resource = '';
                                if (elem.resources.minerals) {
                                    resource = 'minerals';
                                } else {
                                    resource = 'metal';
                                }
                                console.log(`Your current ${resource} is ${PlayerShip.playerShip.resources[resource][0]} units. ${elem.resources[resource][0]} units ${resource} is currently available for mining.`);
                                const storageCapacity = PlayerShip.playerShip.resources[resource][1] - PlayerShip.playerShip.resources[resource][0]; 
                                if (storageCapacity === 0) {
                                    console.log(`Maximum storage capacity of ${resource} has already been achieved.`);
                                    return;
                                } else {
                                    Mine.mine(resource, elem);
                                    console.log(`Your ${resource} after mining is ${PlayerShip.playerShip.resources[resource][0]} units.`);
                                }
                            };
                            if (elem.name === 'Nebula') {Mine.mine("gas", elem)};
                            if (elem.name === 'Star') {Mine.mine("energy", elem)};
                            if (elem.name === 'Graveyard') {Mine.mine("specialTech", elem)};
                            Danger.accident(elem.name);
                        } else if (inputUser === 2) {
                            inform.informAll();
                            levelBack = false;
                        } else if (inputUser === 3) {
                            tradeState.stopTrading();
                            Maintainance.maintainance();
                            Repair.selfRepair();
                            Repair.shieldRecharge();
                            return;
                        } else {
                            console.log('Please enter a number between 1 and 2');
                            return;
                        }
                }
            }
    
            if (elem.name === 'Space Station') {
                elem.visited = true;

                while (tradeState.isTrade) {
                    messageObject(elem.name);
                    const inputUser = input();
                    let levelBack = true;
                    while (levelBack) {
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
                                inform.informCredit();
                                const howMuch = Number(prompt(`You can buy up to ${PlayerShip.playerShip.resources.water[1] - PlayerShip.playerShip.resources.water[0]} units of water. You only have enough money for ${PlayerShip.playerShip.resources.credits[0]} units of water. How much water do you want to buy?     `));
                                commerce.buy('water', howMuch, elem);
                            } else if (buyOption === 2) {
                                inform.informCredit();
                                const howMuch = Number(prompt(`You can buy up to ${PlayerShip.playerShip.resources.food[1] - PlayerShip.playerShip.resources.food[0]} units of food. You only have enough money for ${PlayerShip.playerShip.resources.credits[0]} units of food. How much food do you want to buy?     `));
                                commerce.buy('food', howMuch, elem)
                            } else if (buyOption === 3) {
                                inform.informCredit();
                                const howMuch = Number(prompt(`You can buy up to ${PlayerShip.playerShip.resources.drugs[1] - PlayerShip.playerShip.resources.drugs[0]} units of drugs. You only have enough money for ${PlayerShip.playerShip.resources.credits[0]} units of medicine. How much medicine do you want to buy?     `));
                                commerce.buy('drugs', howMuch, elem);
                            } else if (buyOption === 4) {
                                inform.informCredit();
                                const howMuch = Number(prompt(`You can buy up to ${PlayerShip.playerShip.resources.energy[1] - PlayerShip.playerShip.resources.energy[0]} units of energy. You only have enough money for ${PlayerShip.playerShip.resources.credits[0]} units of energy. How much energy do you want to buy?     `));
                                commerce.buy('energy', howMuch, elem);
                            } else if (buyOption === 5) {
                                inform.informCredit();
                                const howMuch = Number(prompt(`You can buy up to ${PlayerShip.playerShip.resources.shipParts[1] - PlayerShip.playerShip.resources.shipParts[0]} units of spare parts. You only have enough money for ${PlayerShip.playerShip.resources.credits[0]} units of spare parts. How much spare parts do you want to buy?     `));
                                commerce.buy('shipParts', howMuch, elem);
                            } else if (buyOption === 6) {
                                levelBack = false;
                            } else {
                                console.log('Please enter a number between 1 - 5');
                                levelBack = false;
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
                                inform.informCredit();
                                const howMuch = Number(prompt(`You can sell up to ${PlayerShip.playerShip.resources.minerals[0]} units of minerals. How much minerals do you want to sell?     `));
                                commerce.sell('minerals', howMuch, elem);
                                inform.informCredit();
                            } else if (sellOption === 2) {
                                inform.informCredit();
                                const howMuch = Number(prompt(`You can sell up to ${PlayerShip.playerShip.resources.metal[0]} units of metal. How much metal do you want to sell?     `));
                                commerce.sell('metal', howMuch, elem);
                                inform.informCredit();
                            } else if (sellOption === 3) {
                                inform.informCredit();
                                const howMuch = Number(prompt(`You can sell up to ${PlayerShip.playerShip.resources.gas[0]} units of gas. How much gas do you want to sell?     `));
                                commerce.sell('gas', howMuch, elem);
                                inform.informCredit();
                            } else if (sellOption === 4) {
                                inform.informCredit();
                                const howMuch = Number(prompt(`You can sell up to ${PlayerShip.playerShip.resources.specialTech[0]} units of special tech. How much special tech do you want to sell?     `));
                                commerce.sell('specialTech', howMuch, elem);
                                inform.informCredit();
                            } else if (sellOption === 5) {
                                levelBack = false;
                            } else {
                                console.log('Please enter a number between 1 - 4');
                                levelBack = false;
                            }
                        } else if (inputUser === 3) {
                            Repair.fullRepair();
                            console.log(chalk.green.bold('Your ship is fully repaired!'));
                            levelBack = false;
                        } else if (inputUser === 4) {
                            inform.informAll();
                            levelBack = false;
                        } else if (inputUser === 5) {
                            tradeState.stopTrading();
                            Maintainance.maintainance();
                            Repair.selfRepair();
                            Repair.shieldRecharge();
                            return;
                        }
                    }
                }  
            }
    
            if (elem.name === 'Pirate') {
                elem.visited = true;
                messageObject(elem.name);
                const inputUser = input();
                if (inputUser === 1) {
                    fight.shipAttack(PirateShip.randomPirate(), "laser");
                } else if (inputUser === 2) {
                    inform.informAll();
                    levelBack = false;
                } else if (inputUser === 3) {
                    Maintainance.maintainance();
                    Repair.selfRepair();
                    Repair.shieldRecharge();
                    return;
                } else {
                    console.log('Please enter a number between 1 and 2');
                    return;
                }
            }
            if (elem.name === 'Wormhole') {
                elem.visited = true;
                messageObject(elem.name);
                const wormHoleRandom = wurmloch();
                shipPosition[0] = wormHoleRandom[0];
                shipPosition[1] = wormHoleRandom[1];
                console.log(shipPosition);
                Maintainance.maintainance();
                Repair.selfRepair();
                Repair.shieldRecharge();
            }
            clash = true; 
            }
        }
        if (!clash) {
            console.log(`You are in an empty space and the coordinates of your position are x: ${shipPosition[0]}, y: ${shipPosition[1]}.`);
            return;
        }
    
    
        function messageObject(params) {
            if (params === 'Vulkan' || params === 'Kronos' || params === 'Minerva') {
                console.log(`\
                ******************************************\r\n\
                *** Welcome to ${params}.                 \r\n\
                *** You have the following options:       \r\n\
                ***     Press 1 for purchasing.           \r\n\
                ***     Press 2 for selling.              \r\n\
                ***     Press 3 hire crew members.        \r\n\
                ***     Press 4 to see the cargo.         \r\n\
                ***     Press 5 to continue your journey. \r\n\
                ******************************************\r\n\
                `);
    
            } else if (params === 'Astroid' || params === 'Nebula' || params === 'Star' || params === 'Graveyard') {
    
                console.log(`\
                ******************************************\r\n\
                *** Welcome to ${params}.                 \r\n\
                *** You have the following options:       \r\n\
                ***     Press 1 for mining for resources. \r\n\
                ***     Press 2 to see the cargo.         \r\n\
                ***     Press 3 to continue your journey. \r\n\
                ***             D A N G E R!              \r\n\
                ******************************************\r\n\
                `);
    
            } else if (params === 'Pirate') {
    
                console.log(`\
                ******************************************\r\n\
                *** You are facing the ${params}.         \r\n\
                *** You have the following options:       \r\n\
                ***     Press 1 for fighting.             \r\n\
                ***     Press 2 to see the cargo.         \r\n\
                ***     Press 3 to continue your journey. \r\n\
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
                ***     Press 4 to see the cargo.         \r\n\
                ***     Press 5 to continue your journey  \r\n\
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
                ***     Press 4 to see the cargo.         \r\n\
                ***     Press 5 to continue your journey  \r\n\
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