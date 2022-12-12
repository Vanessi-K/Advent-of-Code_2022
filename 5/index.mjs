import {groupByLineArray, readStackedString} from "../scripts/readfile.mjs";
import {firstElements, greatestLength, stackedStringToArray} from "../scripts/arrayHandling.mjs";

const stackedString = readStackedString("./input_1.txt")

const stackedArrayLines = stackedStringToArray(stackedString)
stackedArrayLines.pop()

let lengthColumns = greatestLength(stackedArrayLines);
let lengthRows = stackedArrayLines.length;

let stackedArray = []

for(let columnIndex = 0; columnIndex < lengthColumns; columnIndex++) {
    let stack = []
    for(let rowIndex = 0; rowIndex < lengthRows; rowIndex++) {
        let element = stackedArrayLines[rowIndex][columnIndex];
        if(!(element === "-" || element === undefined || element === "")) stack.push(element)
    }
    stackedArray.push(stack);
}


const stepGuideSentence = groupByLineArray("./input_2.txt")
const stepsNumbers = stepGuideSentence.reduce((acc, stepSentence) => {
    acc.push(stepSentence.replace("move ", "").replace(" from ", "-").replace(" to ", "-").split("-"))
    return acc
}, [])

let stackedArraySingle = stackedArray.slice()
// stepsNumbers.forEach(step => {
//     stackedArraySingle = moveStack(stackedArraySingle, step[0], step [1], step[2])
// })

let stackedArrayMultiple = stackedArray.slice()
stepsNumbers.forEach(step => {
    stackedArrayMultiple = moveMultipleOnStack(stackedArrayMultiple, step[0], step [1], step[2])
})

console.log("----------")
console.log("Single:")
console.log(firstElements(stackedArraySingle))
console.log("----------")
console.log("Multiple:")
console.log(firstElements(stackedArrayMultiple))


function moveStack(stacks, amount, start, end) {
    start--;
    end--;

    for(let count = 0; count < amount; count++) {
        let item = stacks[start].shift();
        stacks[end].unshift(item);
    }

    return stacks;
}

function moveMultipleOnStack(stacks, amount, start, end) {
    start--;
    end--;

    let item = stacks[start].splice(0, amount);
    stacks[end].unshift(...item);

    return stacks;
}