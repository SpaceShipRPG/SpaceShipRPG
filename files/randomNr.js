function randomNr(minimum, maximum, kommastellen = 0) {
    result = Math.random() * maximum;
    // console.log("Zufallszahl = ", result);
    if (kommastellen === 0) {
        result = Math.round(result);
        return (result < minimum ? minimum : result);
    } else {
        let multiplikator = "1";
        for (i = 0; i < kommastellen; i++) {
            multiplikator += "0";
        };
        multiplikator = Number(multiplikator);
        result = (Math.round(result * multiplikator) / multiplikator);
        return (result < minimum ? minimum : result);
    }
};
// console.log(randomNr(5, 8))