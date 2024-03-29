"use strict";
/* TASK

Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
For a mass of 1969, the fuel required is 654.
For a mass of 100756, the fuel required is 33583.
The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

What is the sum of the fuel requirements for all of the modules on your spacecraft?

*/
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function day1() {
    // First, get the contents of the input file for today's puzzle
    //const inputFilePath = path.join("D:\MXrepos\AdventOfCode\2019", 'day1.txt');
    var inputFileContents = fs.readFileSync("day1.txt", 'utf-8');
    // Next, let's put every line in the input file into an array - the last line
    // will be blank, so we'll remove the last item in the array
    var modules = inputFileContents.split('\n');
    modules.pop();
    var massResult = 0;
    var fuelResult = 0;
    for (var index = 0; index < modules.length; index++) {
        var moduleMass = parseInt(modules[index]);
        // take its mass, divide by three, round down, and subtract 2
        massResult += Math.floor(moduleMass / 3) - 2;
        fuelResult += calculateFuel(moduleMass);
    }
    // fuelResult = calculateFuel(100756);
    // Replace the code below with the code you'll need to solve the puzzle!
    console.log('Replace the code here with your own code.');
    console.log("Your puzzle input contains " + modules.length + " lines.");
    console.log("Mass Result: " + massResult);
    console.log("Fuel Result: " + fuelResult);
    function calculateFuel(mass) {
        var currentValue = calculate(mass);
        if (currentValue <= 0)
            return 0;
        else
            return (currentValue + calculateFuel(currentValue));
    }
    function calculate(value) {
        return (Math.floor(value / 3) - 2);
    }
}
exports.day1 = day1;
//# sourceMappingURL=day1.js.map