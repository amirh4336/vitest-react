import { it, expect, describe } from "vitest";
import { add } from "./math.js";

describe("add()", () => {
  it("should summarize all number values in an array", () => {
    const result = add([1, 2, 3]);
    expect(result).toBe(6);
  });

  it("should yield NaN if at least one invalid number is provided", () => {
    // arrange
    const input = ["invalid", 1];
    // act
    const result = add(input);
    //assert
    expect(result).toBeNaN();
  });

  it("should yield a correct sum if an array of numeric string values is provided", () => {
    // arrange
    const numbers = ["1", "2"];
    // act
    const result = add(numbers);
    //assert
    const expectedResult = numbers.reduce(
      (prevValue, curValue) => +prevValue + +curValue,
      0
    );
    expect(result).toBe(expectedResult);
  });

  it("should yield 0 if an empty array is provided", () => {
    // arrange
    const numbers = [];
    // act
    const result = add(numbers);
    //assert
    expect(result).toBe(0);
  });

  it("should throw an error if no value is passed into the function", () => {
    const resultFN = () => add();
    expect(resultFN).toThrow();
  });

  it("should throw an error if provided with multiple arguments instead of an array", () => {
    // arrange
    const num1 = 1;
    const num2 = 2;
    // act
    const resultFN = () => add(num1, num2);
    // assert
    expect(resultFN).toThrow();
  });
});
