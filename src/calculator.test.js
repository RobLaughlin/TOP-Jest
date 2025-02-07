import { describe, test, expect } from "@jest/globals";
import { calculator } from "./calculator";

function testCalculator() {
    test("Only handles numbers", () => {
        const cases = [
            ["51", 5],
            [5, "502"],
            ["5", "8"],
            [5.1, "6"],
            ["6", 5.2],
        ];

        cases.forEach((values) => {
            const [a, b] = values;
            expect(() => {
                calculator.add(a, b);
            }).toThrow(TypeError);
            expect(() => {
                calculator.subtract(a, b);
            }).toThrow(TypeError);
            expect(() => {
                calculator.divide(a, b);
            }).toThrow(TypeError);
            expect(() => {
                calculator.multiply(a, b);
            }).toThrow(TypeError);
        });
    });

    test("Handles division by 0 or 0.0", () => {
        expect(() => {
            calculator.divide(5, 0);
        }).toThrow(RangeError);
        expect(() => {
            calculator.divide(5, 0.0);
        }).toThrow(RangeError);
    });

    test("Addition works", () => {
        expect(calculator.add(5, 10)).toBeCloseTo(15);
        expect(calculator.add(5.001, 10)).toBeCloseTo(15.001);
        expect(calculator.add(5.21, -5.01)).toBeCloseTo(0.2);
    });

    test("Subtraction works", () => {
        expect(calculator.subtract(5, 10)).toBeCloseTo(-5);
        expect(calculator.subtract(10, 4.999)).toBeCloseTo(5.001);
        expect(calculator.subtract(5.21, -5.01)).toBeCloseTo(10.22);
    });

    test("Division works", () => {
        expect(calculator.divide(5, 10)).toBeCloseTo(0.5);
        expect(calculator.divide(10, 4.999)).toBeCloseTo(10 / 4.999);
        expect(calculator.divide(5.21, -5.01)).toBeCloseTo(5.21 / -5.01);
    });

    test("Multiplication works", () => {
        expect(calculator.multiply(5, 10)).toBeCloseTo(50);
        expect(calculator.multiply(10, 4.999)).toBeCloseTo(10 * 4.999);
        expect(calculator.multiply(5.21, -5.01)).toBeCloseTo(5.21 * -5.01);
    });
}
describe("Calculator Module", testCalculator);
