const randomNr = require('./randomNr.js');
const PlayerShip = require("./PlayerShip.js");


const planetVulkanRes = new PlayerShip.Resources ([Infinity, Infinity], [Infinity, Infinity], [Infinity, Infinity], [0, 0], [randomNr(100, 200), Infinity], [randomNr(1500, 3000), Infinity], [randomNr(300, 500), Infinity], [randomNr(200, 350), Infinity], [randomNr(20, 40), Infinity], [randomNr(8, 14), Infinity], [0, 0],[Infinity, Infinity]);
const planetKronosRes = new PlayerShip.Resources ([Infinity, Infinity], [Infinity, Infinity], [Infinity, Infinity], [randomNr(1500, 3000), Infinity], [randomNr(100, 200), Infinity], [0, 0], [randomNr(300, 500), Infinity], [randomNr(200, 350), Infinity], [randomNr(20, 40), Infinity], [randomNr(8, 14), Infinity], [0, 0],[Infinity, Infinity]);
const planetMinervaRes = new PlayerShip.Resources ([Infinity, Infinity], [Infinity, Infinity], [Infinity, Infinity], [randomNr(1500, 3000), Infinity], [randomNr(100, 200), Infinity], [0, 0], [0, 0], [randomNr(200, 350), Infinity], [randomNr(20, 40), Infinity], [randomNr(8, 14), Infinity], [0, 0],[Infinity, Infinity]);
const spaceStationRes = new PlayerShip.Resources ([Infinity, Infinity], [Infinity, Infinity], [Infinity, Infinity], [0, 0], [randomNr(100, 200), Infinity], [0, 0], [0, 0], [randomNr(200, 350), Infinity], [randomNr(20, 40), Infinity], [randomNr(8, 14), Infinity], [0, 0],[Infinity, Infinity]);


const staticMap = [
  {
    name: 'Home',
    x: 11,
    y: 11,
    visited: true
  },
  {
    name: 'Vulkan',
    x: 6,
    y: 5,
    visited: false,
    resources: planetVulkanRes
  },
  {
    name: 'Kronos',
    x: 14,
    y: 7,
    visited: false,
    resources: planetKronosRes
  },
  {
    name: 'Minerva',
    x: 18,
    y: 20,
    visited: false,
    resources: planetMinervaRes
  },
  {
    name: 'Star',
    x: 8,
    y: 15,
    visited: false,
    resources: {
      energy: [Infinity, Infinity]
    }
  },
  {
    name: 'Astroid',
    x: 1,
    y: 13,
    visited: false,
    resources: {
      metal: [randomNr(5, 25), 25]
    }
  },
  {
    name: 'Astroid',
    x: 2,
    y: 12,
    visited: false,
    resources: {
      minerals: [randomNr(5, 25), 25]
    }
  },
  {
    name: 'Astroid',
    x: 3,
    y: 11,
    visited: false,
    resources: {
      metal: [randomNr(5, 25), 25]
    }
  },
  {
    name: 'Astroid',
    x: 4,
    y: 10,
    visited: false,
    resources: {
      minerals: [randomNr(5, 25), 25]
    }
  },
  {
    name: 'Astroid',
    x: 5,
    y: 9,
    visited: false,
    resources: {
      metal: [randomNr(5, 25), 25]
    }
  },
  {
    name: 'Astroid',
    x: 6,
    y: 8,
    visited: false,
    resources: {
      minerals: [randomNr(5, 25), 25]
    }
  },
  {
    name: 'Nebula',
    x: 11,
    y: 8,
    visited: false,
    resources: {
      gas: [randomNr(5, 25), 25]
    }
  },
  {
    name: 'Nebula',
    x: 12,
    y: 9,
    visited: false,
    resources: {
      gas: [randomNr(5, 25), 25]
    }
  },
  {
    name: 'Nebula',
    x: 19,
    y: 10,
    visited: false,
    resources: {
      gas: [randomNr(5, 25), 25]
    }
  },
  {
    name: 'Space Station',
    x: 1,
    y: 10,
    visited: false,
    resources: spaceStationRes
  },
  {
    name: 'Space Station',
    x: 10,
    y: 5,
    visited: false,
    resources: spaceStationRes
  },
  {
    name: 'Space Station',
    x: 16,
    y: 13,
    visited: false,
    resources: spaceStationRes
  },
  {
    name: 'Graveyard',
    x: 21,
    y: 1,
    visited: false,
    resources: {
      shipParts: [randomNr(2, 8), 8],
      specialTech: [randomNr(5, 20), 20]
    }
  },
  {
    name: 'Graveyard',
    x: 15,
    y: 18,
    visited: false,
    resources: {
      shipParts: [randomNr(2, 8), 8],
      specialTech: [randomNr(5, 20), 20]
    }
  },
  {
    name: 'Pirate',
    x: 7,
    y: 8,
    visited: false
  },
  {
    name: 'Pirate',
    x: 8,
    y: 8,
    visited: false
  },
  {
    name: 'Pirate',
    x: 9,
    y: 8,
    visited: false
  },
  {
    name: 'Pirate',
    x: 10,
    y: 8,
    visited: false
  },
  {
    name: 'Wormhole',
    x: 1,
    y: 21,
    visited: false
  }
]

module.exports = staticMap;