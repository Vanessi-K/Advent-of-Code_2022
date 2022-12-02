import {groupByEmptyLineArray} from "../scripts/readfile.mjs";
import {sumArray, highestValueInArray, nHighestValuesInArray} from "../scripts/arrayHandling.mjs";

const elfCalories = groupByEmptyLineArray("./input_1.txt")

const sumOfElfCalories = elfCalories.reduce((acc, calories) => {
    acc.push(sumArray(calories))
    return acc;
}, [])

const maxCalories = highestValueInArray(sumOfElfCalories)
const maxCaloriesN = nHighestValuesInArray(sumOfElfCalories, 3)

console.log(maxCalories)
console.log(sumArray(maxCaloriesN))