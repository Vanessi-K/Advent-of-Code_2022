import {readFile} from "../scripts/readfile.mjs";
import {onlyUniqueElements} from "../scripts/arrayHandling.mjs";

const signal = readFile("./input_1.txt");


console.log("Start of packet")
console.log(firstUniqueString(signal, 4))

console.log("Start of message")
console.log(firstUniqueString(signal, 14))

function firstUniqueString(string, length) {
    let index = 0;
    while(1) {
        let shortString = string.substring(index, index + length);
        if(onlyUniqueElements(shortString)) {
            console.log(shortString)
            return index + length;
        }
        index++
    }
}