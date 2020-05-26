var sportsTwo = ["Golf", "Cricket", "Tennis", "Swimming"];
sportsTwo.push("Baseball");
sportsTwo.push("Football");
for (var _i = 0, sportsTwo_1 = sportsTwo; _i < sportsTwo_1.length; _i++) {
    var tempSport = sportsTwo_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + " << is my favorite sport");
    }
    console.log(tempSport);
}
