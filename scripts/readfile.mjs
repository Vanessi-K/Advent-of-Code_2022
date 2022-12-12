import read from 'read-file';
import {sumArray} from "./arrayHandling.mjs";

function readfile(file) {
    const buffer = read.sync(file, "utf8");
    return buffer;
}

export function groupByEmptyLineArray(file) {
    const buffer = readfile(file)
    const splitArray = buffer.split(/\r?\n/);

    let groupedArray = [];
    let subGroup = []
    splitArray.forEach(element => {
        if(element === "") {
            groupedArray.push(subGroup);
            subGroup = []
        } else {
            subGroup.push(element)
        }
    })

    return groupedArray;
}

export function groupByLineArray(file) {
    const buffer = readfile(file)
    const splitArray = buffer.split(/\r?\n/);

    return splitArray;
}

export function splitLineByComma(file) {
    const lines = groupByLineArray(file)

    const splittedLines = lines.reduce((acc, line) => {
        acc.push(line.split(","))
        return acc;
    }, [])

    return splittedLines;
}

export function readStackedString(file) {
    let buffer = readfile(file);
    buffer = buffer.replace(/    /g, "[ ] ");

    return buffer;
}

