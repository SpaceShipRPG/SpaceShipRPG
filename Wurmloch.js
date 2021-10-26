playerPosition = 
        x = Math.floor(Math.random() * 21)
        y = Math.floor(Math.random() * 21)

for (const place of locations) {

    if(playerPosition === place) {
        console.log(`Life is full of misfortunes.`)
        console.log(`You'll be remembered as a brave adventurer.`)
        console.log(`RIP`)
        // wie zwingen wir das Spielende?
    }

}