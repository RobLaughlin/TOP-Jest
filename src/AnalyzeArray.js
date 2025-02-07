function isNotNumber(n) {
    return typeof n !== "number";
}

export function analyzeArray(arr) {
    if (arr.constructor !== Array || arr.some(isNotNumber)) {
        throw new TypeError("Must be given an array of numbers");
    }

    const analysis = {
        average: null,
        max: null,
        min: null,
        length: arr.length,
    };

    if (arr.length === 0) {
        return analysis;
    }

    analysis.average = arr.reduce((acc, n) => acc + n, 0) / arr.length;
    analysis.max = Math.max(...arr);
    analysis.min = Math.min(...arr);
    return analysis;
}
