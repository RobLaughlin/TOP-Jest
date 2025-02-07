import { describe, test, expect } from "@jest/globals";
import { analyzeArray } from "./AnalyzeArray";

function testAnalyzeArray() {
    test("Only accepts arrays of numbers", () => {
        expect(() => {
            analyzeArray("");
        }).toThrow(TypeError);
        expect(() => {
            analyzeArray(5);
        }).toThrow(TypeError);
        expect(() => {
            analyzeArray(5.5);
        }).toThrow(TypeError);
        expect(() => {
            analyzeArray(new Set());
        }).toThrow(TypeError);
        expect(() => {
            analyzeArray([5, "2"]);
        }).toThrow(TypeError);
        expect(() => {
            analyzeArray([5, 3.3, -0.5]);
        }).not.toThrow(TypeError);
        expect(() => {
            analyzeArray([]);
        }).not.toThrow(TypeError);
    });

    test("Deals with empty arrays", () => {
        expect(analyzeArray([])).toStrictEqual({
            average: null,
            min: null,
            max: null,
            length: 0,
        });
    });

    test("Average works", () => {
        expect(analyzeArray([15, 25])).toEqual(
            expect.objectContaining({
                average: 20,
            })
        );
        expect(analyzeArray([0, 0])).toEqual(
            expect.objectContaining({
                average: 0,
            })
        );
        expect(analyzeArray([-5, 10])).toEqual(
            expect.objectContaining({
                average: expect.closeTo(2.5),
            })
        );
        expect(analyzeArray([-5.01, 25.23])).toEqual(
            expect.objectContaining({
                average: expect.closeTo(10.11),
            })
        );
    });

    test("Max works", () => {
        expect(analyzeArray([-5, 10, 15])).toEqual(
            expect.objectContaining({
                max: 15,
            })
        );
        expect(analyzeArray([-5.123, -5.124, -5.122, -5.1234])).toEqual(
            expect.objectContaining({
                max: -5.122,
            })
        );
        expect(analyzeArray([0, 0, 0])).toEqual(
            expect.objectContaining({
                max: 0,
            })
        );
    });

    test("Min works", () => {
        expect(analyzeArray([-5, 10, 15])).toEqual(
            expect.objectContaining({
                min: -5,
            })
        );
        expect(analyzeArray([-5.123, -5.124, -5.122, -5.1234])).toEqual(
            expect.objectContaining({
                min: -5.124,
            })
        );
        expect(analyzeArray([0, 0, 0])).toEqual(
            expect.objectContaining({
                min: 0,
            })
        );
    });

    test("Length works", () => {
        expect(analyzeArray([-5, 10, 15])).toEqual(
            expect.objectContaining({
                length: 3,
            })
        );
        expect(analyzeArray([-5.123, -5.124, -5.122, -5.1234])).toEqual(
            expect.objectContaining({
                length: 4,
            })
        );
        expect(analyzeArray([])).toEqual(
            expect.objectContaining({
                length: 0,
            })
        );
    });
}
describe("Analyze Array module", testAnalyzeArray);
