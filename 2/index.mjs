import {groupByLineArray} from "../scripts/readfile.mjs";
import {sumArray} from "../scripts/arrayHandling.mjs";

//A X  Rock
//B Y Paper
//C Z Scissors

const gameResultsTurns = {
    "A X": 4,
    "A Y": 8,
    "A Z": 3,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 7,
    "C Y": 2,
    "C Z": 6
}

//A Rock        X lose
//B Paper       Y draw
//C Scissors    Z win

const gameResultsEnds = {
    "A X": 3,
    "A Y": 4,
    "A Z": 8,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 2,
    "C Y": 6,
    "C Z": 7
}

const playStrategy = groupByLineArray("./input_1.txt")

const matchResults = playStrategy.reduce((acc, match) => {
    let roundPoints = gameResultsEnds[match]
    acc.push(roundPoints)
    return acc;
}, [])

let finalResult = sumArray(matchResults);

console.log(finalResult)
