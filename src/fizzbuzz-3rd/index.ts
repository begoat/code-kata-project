export default (num: number) => {
  if (!(num % 15)) {
     return "FizzBuzz";
  }

  if (!(num % 3)) {
    return "Fizz";
  }

  if (!(num % 5)) {
    return "Buzz";
  }

  return num;
};
