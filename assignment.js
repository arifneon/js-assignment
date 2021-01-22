 //First ----------
function kilometerToMeter(km) {
    // kilometer to meter 
    if (km < 0) {
        // input from user
        return "Distance";
    }
    var meter = km * 1000;
    return meter;
}
// Second------------------
function budgetCalculator(watchAmount, phoneAmount, laptopAmount) {
    // watch price 50, phone price 100, laptop price 500 per piece
    if (watchAmount < 0 || phoneAmount < 0 || laptopAmount < 0) {
        return "You can buy any products";
    }
    var budget = 0;
    budget += watchAmount * 50;
    budget += phoneAmount * 100;
    budget += laptopAmount * 500;
    return budget;
}

// Third---------------------
function hotelCost(days) {
    if (days < 0) {
        return "days";
    }
    if (days == 0) {
        return 0;
    }
    var totalExpense = 0;
    for (var i = 1; i <= days; i++) {
        if (i <= 10) {
            totalExpense += 100;
        } else if (i <= 20) {
            totalExpense += 80;
        } else {
            totalExpense += 50;
        }
    }
    return totalExpense;
}
// Fourth-----------------------
function megaFriend(friendsName) {
    if (friendsName.length < 1) {
        return "Empty array";
    }
    var longestName = friendsName[0];

    for (var i = 1; i < friendsName.length; i++) {
        if (friendsName[i].length > longestName.length) {
            longestName = friendsName[i];
        }
    }
    return longestName;
}
