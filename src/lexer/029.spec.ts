import { objEqual, arrayEqual, mixEqual } from './029';

test('1', () => {
  let obj1 = {a: 1, b: 2};
  let obj2 = {a: 1, b: 2};
  expect(objEqual(obj1, obj2)).toBe(true);
});

test('2', () => {
  let obj1 = {a: 1, b: 2, c: 1};
  let obj2 = {a: 1, b: 2, c: 1};
  expect(objEqual(obj1, obj2)).toBe(true);
});

test('3', () => {
  let obj1 = {a: 1, b: 2, c: 1};
  let obj2 = {c: 1, b: 2, a: 1};
  expect(objEqual(obj1, obj2)).toBe(true);
});

test('4', () => {
  let obj1 = {a: 1, b: 2, c: '1'};
  let obj2 = {c: 1, b: 2, a: 1};
  expect(objEqual(obj1, obj2)).toBe(false);
});

test('5', () => {
  let obj1 = {a: 1, b: 2, c: '1'};
  let obj2 = {c: '1', b: 2, a: 1};
  expect(objEqual(obj1, obj2)).toBe(true);
});
