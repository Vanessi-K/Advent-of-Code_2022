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