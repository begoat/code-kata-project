export const fizzBuzz = {
  init() {
    this.filterRules = [];
  },
  addFilter(rule: (num: number) => number | string) {
    this.filterRules.push(rule);
    return this;
  },
  evaluate(num: number) {
    let result;
    this.filterRules.some((rule: any) => {
      result = rule(num);
      return result;
    });

    return result || num;
  }
};

export const phase1FizzBuzz = Object.create(fizzBuzz);
phase1FizzBuzz.init();
phase1FizzBuzz
  .addFilter((num: number) => {
    if (!(num % 5) && !(num % 3)) {
      return "FizzBuzz";
    }
  })
  .addFilter((num: number) => {
    if (!(num % 5)) {
      return "Buzz";
    }
  })
  .addFilter((num: number) => {
    if (!(num % 3)) {
      return "Fizz";
    }
  });

export const phase2FizzBuzz = Object.create(fizzBuzz);
phase2FizzBuzz.init();
phase2FizzBuzz
  .addFilter((num: any) => {
    if (!(num % 5) && !(num % 3)) {
      return "FizzBuzz";
    }
  })
  .addFilter((num: number) => {
    const numStr = num.toString();
    if (numStr.includes("3")) {
      return "Fizz";
    } else if (numStr.includes("5")) {
      return "Buzz";
    }
  })
  .addFilter((num: number) => {
    if (!(num % 5)) {
      return "Buzz";
    }
  })
  .addFilter((num: number) => {
    if (!(num % 3)) {
      return "Fizz";
    }
  });
