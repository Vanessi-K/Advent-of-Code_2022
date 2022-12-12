import {splitLineByComma} from "../scripts/readfile.mjs";

const lines = splitLineByComma("./input_1.txt")

const areaLimits = lines.reduce((acc, line) => {
    acc.push([splitByDashMinMax(line[0]), splitByDashMinMax(line[1])])
    return acc;
}, [])

let includedAreas = 0;
let overlappingAreas = 0;

areaLimits.forEach( line => {
    let elf1 = line[0]
    let elf2 = line[1]

    if(checkIfAContainsB(elf1, elf2) || checkIfAContainsB(elf2, elf1)) {
        includedAreas++
    }

    if(checkIfOverlap(elf1, elf2)) {
        overlappingAreas++
    }
})

console.log("Included areas: " + includedAreas);
console.log("Overlapping areas: " + overlappingAreas);

function splitByDashMinMax(string) {
    let splited = string.split("-");
    return {min: splited[0], max: splited[1]}
}

function checkIfAContainsB(a, b) {
    return parseInt(a.min) <= parseInt(b.min) && parseInt(a.max) >= parseInt(b.max);
}

function checkIfOverlap(a, b) {
    return (parseInt(a.min) <= parseInt(b.min) && parseInt(a.max) >= parseInt(b.min)) || (parseInt(b.min) <= parseInt(a.min) && parseInt(b.max) >= parseInt(a.min)) ;
}