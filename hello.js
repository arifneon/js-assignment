function kilometerToMeter(km) {
    // this function converts kilometer to meter for input km
    if (km < 0) {
        // handling bad input from user
        return "Distance can not be negative";
    }
    var meter = km * 1000;
}
console.log(kilometerToMeter);

