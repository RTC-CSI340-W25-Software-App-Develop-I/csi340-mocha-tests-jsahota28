// Importing the Chai library to use its assert method, which offers more features than the built-in Node.js assertions
import { assert } from "chai";
//We are importing our Functions from src/index.js
import {
  helloWorld,
  addition,
  subtraction,
  multiplication,
  division,
  remainder,
  exponentiation,
} from "../src/index.js";

describe("helloWorld Function", () => {
  it("should return a string", () => {
    const result = helloWorld();
    assert.typeOf(result, "string", "The return value should be a string");
  });

  it('should return "Hello World"', () => {
    const result = helloWorld();
    assert.equal(result, "Hello World", 'The return value should be "Hello World"');
  });
});
describe("addition Function", () => {
  it("should return 15 when adding 5 and 10", () => {
    const result = addition(5, 10);
    assert.equal(result, 15, "5 + 10 should equal 15");
  });
});
describe("subtraction Function", () => {
  it("should return 5 when subtracting 10 from 15", () => {
    const result = subtraction(15, 10);
    assert.equal(result, 5, "15 - 10 should equal 5");
  });
});

describe("multiplication Function", () => {
  it("should return 50 when multiplying 5 by 10", () => {
    const result = multiplication(5, 10);
    assert.equal(result, 50, "5 * 10 should equal 50");
  });
});

describe("division Function", () => {
  it("should return 2 when dividing 10 by 5", () => {
    const result = division(10, 5);
    assert.equal(result, 2, "10 / 5 should equal 2");
  });
});

describe("remainder Function", () => {
  it("should return 1 when dividing 10 by 3", () => {
    const result = remainder(10, 3);
    assert.equal(result, 1, "10 % 3 should equal 1");
  });
});

describe("exponentiation Function", () => {
  it("should return 32 when raising 2 to the power of 5", () => {
    const result = exponentiation(2, 5);
    assert.equal(result, 32, "2^5 should equal 32");
  });
});
