export function capitalize(str) {
    if (typeof str !== "string") {
        throw new TypeError("Input must be a string.");
    }

    if (str.length === 0) {
        return str;
    }

    return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    if (typeof str !== "string") {
        throw new TypeError("Input must be a string.");
    }

    const chars = Array.from(str);
    chars.reverse();
    return chars.join("");
}
