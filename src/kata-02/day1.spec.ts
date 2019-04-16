import chop from "./day1";

test("1", () => {
  expect(chop(3, [])).toBe(-1);
  expect(chop(3, [1])).toBe(-1);
  expect(chop(1, [1])).toBe(0);

  expect(chop(1, [1, 3, 5])).toBe(0);
  expect(chop(3, [1, 3, 5])).toBe(1);
  expect(chop(5, [1, 3, 5])).toBe(2);
  expect(chop(0, [1, 3, 5])).toBe(-1);
  expect(chop(2, [1, 3, 5])).toBe(-1);
  expect(chop(4, [1, 3, 5])).toBe(-1);
  expect(chop(6, [1, 3, 5])).toBe(-1);
  expect(chop(1, [1, 3, 5, 7])).toBe(0);
  expect(chop(3, [1, 3, 5, 7])).toBe(1);
  expect(chop(5, [1, 3, 5, 7])).toBe(2);
  expect(chop(7, [1, 3, 5, 7])).toBe(3);
  expect(chop(0, [1, 3, 5, 7])).toBe(-1);
  expect(chop(2, [1, 3, 5, 7])).toBe(-1);
  expect(chop(4, [1, 3, 5, 7])).toBe(-1);
  expect(chop(6, [1, 3, 5, 7])).toBe(-1);
  expect(chop(8, [1, 3, 5, 7])).toBe(-1);
});
