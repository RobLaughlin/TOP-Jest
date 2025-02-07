import { describe, test, expect } from "@jest/globals";
import { capitalize } from "./strUtils";

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
