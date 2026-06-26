const repeatString = function(string, num) {
    outputString = "";
    for (let i = 0; i < num; i++) {
        outputString += string;
    }
    return outputString;
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
