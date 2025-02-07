export function capitalize(str) {
    if (typeof str !== "string") {
        throw new TypeError("Input must be a string.");
    }

    if (str.length === 0) {
        return str;
    }

    return str[0].toUpperCase() + str.slice(1);
}

// capitalize("capital");
