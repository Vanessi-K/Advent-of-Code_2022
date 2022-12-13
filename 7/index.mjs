import {groupByLineArray} from "../scripts/readfile.mjs";
import {sumArray} from "../scripts/arrayHandling.mjs";

let consoleOutput = groupByLineArray("./input_1.txt");

const filesystem = {"/": null};
let currentDirectory;

consoleOutput = consoleOutput.filter(a => a !== '$ ls')

//create file-structure
consoleOutput.forEach(line => {
    if(line.match(/ cd /)) {
        let moveDirectory = line.substring(5)
        switch(moveDirectory) {
            case "/": {
                currentDirectory = "/";
                break;
            }
            case "..": {
                currentDirectory = "/" + currentDirectory.split("/").pop()
                break;
            }
            default: {
                currentDirectory = newPath(currentDirectory, moveDirectory);
                break;
            }
        }
    } else if(line.match(/dir /)) {
        let moveDirectory = line.substring(4)
        filesystem[newPath(currentDirectory, moveDirectory)] = null
    } else {
        let file = line.split(" ");
        filesystem[newPath(currentDirectory, file[1])] = file[0]
    }
})

// get directories
let directories = [];
let files = [];
Object.keys(filesystem).forEach(key => {
    if(filesystem[key] === null) directories.push(key);
    else files.push(key);
});

let directorySizes = []
directories.forEach(directory => {
    let directoryFiles = [];
    files.forEach(filename => {
        let reqex = "^" + directory + ".*"
        if(filename.match(reqex)) {
           // console.log(directory + " of " + filename)
            directoryFiles.push(filename);
        }
    });

    let directorySize = directoryFiles.reduce((acc, file) => {
        acc += parseInt(filesystem[file]);
        return acc;
    }, 0)

    directorySizes[directory] = directorySize;
});

console.log(directorySizes)

let smallDirectories = [];
const maxDirectorySize = 100000;
Object.keys(directorySizes).forEach(key => {
    if(directorySizes[key] <= maxDirectorySize && directorySizes[key] > 0) smallDirectories.push(directorySizes[key]);
});

console.log("smallDirectories")
console.log(smallDirectories)

console.log("sum of smallDirectories")
console.log(sumArray(smallDirectories))

function newPath(old, file) {
    return old +  file + "/"
}
