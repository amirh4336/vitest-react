import { it, expect, describe } from "vitest";

import { validateStringNotEmpty } from "./validation.js";

describe("validateStringNotEmpty()", () => {
  it("should throw an error if the input is empty", () => {
    // arrange
    const input = "";
    // act
    const result = () => validateStringNotEmpty(input);
    // assert
    expect(result).toThrow();
  });

  it("should throw error if the input is not string", () => {
    // arrange
    const input = null;
    // act
    const result = () => validateStringNotEmpty(input);
    // assert
    expect(result).throw();
  });
});
