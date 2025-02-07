import { describe, test, expect } from "@jest/globals";
import { capitalize, reverseString } from "./strUtils";

function testCapitalization() {
    test("Throws error if input is not a string", () => {
        expect(() => {
            capitalize(5);
        }).toThrow(TypeError);

        expect(() => {
            capitalize(-5.5);
        }).toThrow(TypeError);
    });

    test("Handles the empty string properly", () => {
        expect(capitalize("")).toBe("");
    });

    test("Capitalizes the first letter of a string", () => {
        expect(capitalize("capital")).toBe("Capital");
        expect(capitalize("Capital")).toBe("Capital");
        expect(capitalize("5capital")).toBe("5capital");
        expect(capitalize("_capital")).toBe("_capital");
    });
}
describe("Capitalization module", testCapitalization);

function testReverseString() {
    test("Throws error if input is not a string", () => {
        expect(() => {
            reverseString(5);
        }).toThrow(TypeError);

        expect(() => {
            reverseString(-5.5);
        }).toThrow(TypeError);
    });

    test("Handles the empty string properly", () => {
        expect(reverseString("")).toBe("");
    });

    test("Reverses the string", () => {
        expect(reverseString("racecar")).toBe("racecar");
        expect(reverseString("test")).toBe("tset");
        expect(reverseString("5reversed")).toBe("desrever5");
    });
}
describe("Reverse text module", testReverseString);
