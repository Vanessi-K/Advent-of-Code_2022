export function sumArray(array) {
    let result = 0;

    array.forEach(element => {
        result += parseInt(element);
    })

    return result;
}

export function highestValueInArray(array) {
    return Math.max(...array)
}

export function nHighestValuesInArray(array, n) {
    let helpArray = array;
    let highestValues = []
    for(let i = 1; i <= n; i++) {
        let singularHighestValue = highestValueInArray(helpArray);
        helpArray.splice(helpArray.indexOf(singularHighestValue), 1);
        highestValues.push(singularHighestValue);
    }
    return highestValues;
}

export function stackedStringToArray(stringStack) {
    const lines = stringStack.replace(/ /g, "").split(/\r?\n/);
    const singleStacks = lines.reduce((acc, line) => {
        let singleLine = line.replace("[]","[-]")
        acc.push(singleLine.slice(1, -1).split("]["))
        return acc;
    },[])
    return singleStacks;
}

export function greatestLength(arrays) {
    let length = 0;

    arrays.forEach(array => {
        if(array.length > length) length = array.length;
    })

    return length;
}

export function firstElements(arrays) {
    return arrays.reduce((acc, array) => {
        acc += array[0];
        return acc;
    }, "")
}

export function onlyUniqueElements(arr) {
    return new Set(arr).size === arr.length;
}