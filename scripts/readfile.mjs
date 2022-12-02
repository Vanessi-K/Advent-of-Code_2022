import read from 'read-file';

function readfile(file) {
    const buffer = read.sync(file, "utf8");
    return buffer;
}

export function fileToArray(file) {
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
