function randomNr(min, max, decimalPlaces = 0) {
    if (decimalPlaces === 0) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        let multiplier = "1";
        for (i = 0; i < decimalPlaces; i++) {
            multiplier += "0";
        };
        multiplier = Number(multiplier);
        return Math.floor(Math.random() * ((max - min) * multiplier + 1) + min * multiplier) / multiplier;
    }
};
// console.log(randomNr(0.5, 2.5, 1));