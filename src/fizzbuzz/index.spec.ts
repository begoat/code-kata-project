import { phase1FizzBuzz, phase2FizzBuzz } from "./index";

describe("phase1", () => {
  test("just output 1-20", () => {
    expect(phase1FizzBuzz.evaluate(1)).toBe(1);
    expect(phase1FizzBuzz.evaluate(2)).toBe(2);
    expect(phase1FizzBuzz.evaluate(3)).toBe("Fizz");
    expect(phase1FizzBuzz.evaluate(4)).toBe(4);
    expect(phase1FizzBuzz.evaluate(5)).toBe("Buzz");
    expect(phase1FizzBuzz.evaluate(6)).toBe("Fizz");
    expect(phase1FizzBuzz.evaluate(7)).toBe(7);
    expect(phase1FizzBuzz.evaluate(8)).toBe(8);
    expect(phase1FizzBuzz.evaluate(9)).toBe("Fizz");
    expect(phase1FizzBuzz.evaluate(10)).toBe("Buzz");
    expect(phase1FizzBuzz.evaluate(11)).toBe(11);
    expect(phase1FizzBuzz.evaluate(12)).toBe("Fizz");
    expect(phase1FizzBuzz.evaluate(13)).toBe(13);
    expect(phase1FizzBuzz.evaluate(14)).toBe(14);
    expect(phase1FizzBuzz.evaluate(15)).toBe("FizzBuzz");
    expect(phase1FizzBuzz.evaluate(16)).toBe(16);
    expect(phase1FizzBuzz.evaluate(17)).toBe(17);
    expect(phase1FizzBuzz.evaluate(18)).toBe("Fizz");
    expect(phase1FizzBuzz.evaluate(19)).toBe(19);
    expect(phase1FizzBuzz.evaluate(20)).toBe("Buzz");
  });
});

describe("phase2", () => {
  test("just output 1-20", () => {
    expect(phase2FizzBuzz.evaluate(1)).toBe(1);
    expect(phase2FizzBuzz.evaluate(2)).toBe(2);
    expect(phase2FizzBuzz.evaluate(3)).toBe("Fizz");
    expect(phase2FizzBuzz.evaluate(4)).toBe(4);
    expect(phase2FizzBuzz.evaluate(5)).toBe("Buzz");
    expect(phase2FizzBuzz.evaluate(6)).toBe("Fizz");
    expect(phase2FizzBuzz.evaluate(7)).toBe(7);
    expect(phase2FizzBuzz.evaluate(8)).toBe(8);
    expect(phase2FizzBuzz.evaluate(9)).toBe("Fizz");
    expect(phase2FizzBuzz.evaluate(10)).toBe("Buzz");
    expect(phase2FizzBuzz.evaluate(11)).toBe(11);
    expect(phase2FizzBuzz.evaluate(12)).toBe("Fizz");
    expect(phase2FizzBuzz.evaluate(13)).toBe("Fizz");
    expect(phase2FizzBuzz.evaluate(14)).toBe(14);
    expect(phase2FizzBuzz.evaluate(15)).toBe("FizzBuzz");
    expect(phase2FizzBuzz.evaluate(16)).toBe(16);
    expect(phase2FizzBuzz.evaluate(17)).toBe(17);
    expect(phase2FizzBuzz.evaluate(18)).toBe("Fizz");
    expect(phase2FizzBuzz.evaluate(19)).toBe(19);
    expect(phase2FizzBuzz.evaluate(20)).toBe("Buzz");
  });
});
