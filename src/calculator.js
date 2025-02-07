export const calculator = (() => {
    const validateInputs = (a, b) => {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new TypeError("a and b must be numbers.");
        }
    };

    const add = (a, b) => {
        validateInputs(a, b);
        return a + b;
    };

    const subtract = (a, b) => {
        validateInputs(a, b);
        return a - b;
    };

    const divide = (a, b) => {
        validateInputs(a, b);
        if (b == 0) {
            throw new RangeError("Cannot divide by 0.");
        }
        return a / b;
    };

    const multiply = (a, b) => {
        validateInputs(a, b);
        return a * b;
    };
    return { add, subtract, divide, multiply };
})();
