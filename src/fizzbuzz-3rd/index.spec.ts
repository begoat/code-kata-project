import FizzBuzz from "./index";

function testsets(arrOfTests: any) {
  arrOfTests.map((testItem: any) => test(`should test for num: ${testItem[0]}`, () => {
    const [num, value] = testItem;
    expect(FizzBuzz(num)).toBe(value);
  }));
}

describe("test", () => {
  testsets([
    [1, 1],
    [2, 2],
    [3, "Fizz"],
    [5, "Buzz"],
    [6, "Fizz"],
    [7, 7],
    [8, 8],
    [9, "Fizz"],
    [10, "Buzz"],
    [11, 11],
    [12, "Fizz"],
    [13, 13],
    [15, "FizzBuzz"]
  ]);
});
