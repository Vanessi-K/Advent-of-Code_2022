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

