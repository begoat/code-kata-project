export default function fizzBuzz(num: number) {
  if (!(num % 5) && !(num % 3)) {
    return "FizzBuzz";
  }

  if (!(num % 5)) {
    return "Buzz";
  }

  if (!(num % 3)) {
    return  "Fizz";
  }

  return num;
}

function main() {
  for (let i = 0; i < 20; i++) {
    console.log(fizzBuzz(i + 1));
  }
}


// main();