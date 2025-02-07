export function caesarCipher(str, shift = 3) {
    if (typeof str !== "string") {
        throw new TypeError("Input must be a non-negative integer");
    }

    if (typeof shift !== "number") {
        throw new TypeError("Shift must be a non-negative integer");
    }

    if (!Number.isInteger(shift)) {
        throw new TypeError("Shift must be a non-negative integer");
    }

    if (shift < 0) {
        throw new RangeError("Shift must be a non-negative integer");
    }

    return Array.from(str)
        .map((char) => {
            const cc = char.charCodeAt(0);
            const [a, z, A, Z] = [
                "a".charCodeAt(0),
                "z".charCodeAt(0),
                "A".charCodeAt(0),
                "Z".charCodeAt(0),
            ];
            let lowercase = cc >= a && cc <= z;
            let uppercase = cc >= A && cc <= Z;

            // Non-alphabetic
            if (!(lowercase || uppercase)) {
                return char;
            }

            // Map the alphabet to where
            // [a, z] = [0, 26] if lowercase
            // [A, Z] = [0, 26] if uppercase
            const sub = lowercase ? a : A;
            const shifted = cc - sub + (shift % 26);

            // Map back to the shifted character
            const shiftedChar = String.fromCharCode((shifted % 26) + sub);
            return shiftedChar;
        })
        .join("");
}
