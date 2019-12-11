"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function day2() {
    // First, get the contents of the input file for today's puzzle
    //const inputFilePath = path.join("D:\MXrepos\AdventOfCode\2019", 'day1.txt');
    var inputFileContents = fs.readFileSync("day2.txt", 'utf-8');
    // console.log(inputFileContents);
    // Next, let's put every line in the input file into an array - the last line
    // will be blank, so we'll remove the last item in the array
    var inputArray = inputFileContents.split(',').map(Number);
    // modules.pop();
    // console.log(modules);
    for (var index = 0; index < inputArray.length; index += 4) {
        console.log("current loop index: " + index + " with value: " + inputArray[index]);
        var opcode = inputArray[index];
        switch (opcode) {
            case 99:
                console.log("opcode = 99 | halting the program", inputArray);
                return;
                break;
            case 1:
                console.log("opcode = 1 | addition");
                inputArray[inputArray[index + 3]] = inputArray[index + 1] + inputArray[index + 2];
                break;
            case 2:
                console.log("opcode = 2 | multiplication");
                inputArray[inputArray[index + 3]] = inputArray[index + 1] * inputArray[index + 2];
                break;
            default:
                console.log("no opcode - abort");
                return;
                break;
        }
    }
}
exports.day2 = day2;
//# sourceMappingURL=day2.js.map