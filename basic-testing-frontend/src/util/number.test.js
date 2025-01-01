import { it, expect , describe } from "vitest";

import { transformToNumber } from "./numbers.js";

describe("transformToNumber()", () => {
  it("should transfer a string to number of type number", () => {
    // arrange
    const input = "1";
    // act
    const result = transformToNumber(input);
    // assert
    expect(result).toBeTypeOf("number");
  });

  it("should transfer a string to number with same number value", () => {
    // arrange
    const input = "1";
    // act
    const result = transformToNumber(input);
    // assert
    expect(result).toBe(+input);
  });

  it("should yield NaN for non-transformed values", () => {
    // arrange
    const input = "invalid";
    const input2 = {};
    // act
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);
    // assert
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});
