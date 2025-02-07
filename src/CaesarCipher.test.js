import { describe, test, expect } from "@jest/globals";
import { caesarCipher } from "./CaesarCipher";

function testCaesarCipher() {
    test("Handles only strings", () => {
        expect(() => {
            caesarCipher(5);
        }).toThrow(TypeError);
        expect(() => {
            caesarCipher(5.5);
        }).toThrow(TypeError);
        expect(() => {
            caesarCipher("test");
        }).not.toThrow(TypeError);
    });

    test("Handles the empty string", () => {
        expect(caesarCipher("")).toBe("");
    });

    test("Shift is always a non-negative integer", () => {
        expect(() => {
            caesarCipher("test", "-1");
        }).toThrow(TypeError);
        expect(() => {
            caesarCipher("test", "3");
        }).toThrow(TypeError);
        expect(() => {
            caesarCipher("test", -1.2);
        }).toThrow(TypeError);
        expect(() => {
            caesarCipher("test", 1.1);
        }).toThrow(TypeError);
        expect(() => {
            caesarCipher("test", 0.0005);
        }).toThrow(TypeError);

        expect(() => {
            caesarCipher("test", -1);
        }).toThrow(RangeError);

        expect(() => {
            caesarCipher("test", 0);
        }).not.toThrow(Error);
    });

    test("Doesn't shift non-alphabetic text", () => {
        expect(caesarCipher("1234567890!@#$%^&*()")).toBe(
            "1234567890!@#$%^&*()"
        );
    });

    test("Achieves valid Caesar cipher", () => {
        expect(caesarCipher("1234@#$test$@#$[]/.TEST[[")).toBe(
            "1234@#$whvw$@#$[]/.WHVW[["
        );
        expect(caesarCipher("1234@#$test$@#$[]/.TEST[[", 4)).toBe(
            "1234@#$xiwx$@#$[]/.XIWX[["
        );
        expect(caesarCipher("1234@#$test$@#$[]/.TEST[[", 7)).toBe(
            "1234@#$alza$@#$[]/.ALZA[["
        );
        expect(caesarCipher("1234@#$test$@#$[]/.TEST[[", 5000)).toBe(
            "1234@#$bmab$@#$[]/.BMAB[["
        );
        expect(caesarCipher("1234@#$test$@#$[]/.TEST[[", 0)).toBe(
            "1234@#$test$@#$[]/.TEST[["
        );
    });
}
describe("Caesar Cipher module", testCaesarCipher);
