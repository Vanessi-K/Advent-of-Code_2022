import {fileToArray} from "../scripts/readfile.mjs";
import {sumArray, highestValueInArray} from "../scripts/arrayHandling.mjs";

const elfCalories = fileToArray("./input-1.txt")

const sumOfElfCalories = elfCalories.reduce((acc, calories) => {
    acc.push(sumArray(calories))
    return acc;
}, [])

const maxCalories = highestValueInArray(sumOfElfCalories)

console.log(maxCalories)