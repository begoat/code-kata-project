import myArgs from "./index";

function testing(testStr: string, expectedVal: object) {
  test(`unit-test on ${testStr}`, () => {
    expect(myArgs.evaluate(testStr)).toEqual(expectedVal);
  });
}

describe("", () => {
  [
    ["-l", {
      l: true
    }],
    ["-l  ", {
      l: true
    }],
    ["-l  \t -p 8080", {
      l: true,
      p: "8080"
    }],
    ["-p 8080", {
      p: "8080"
    }],
    ["-l -p 8080", {
      l: true,
      p: "8080"
    }],
    [" -p 8080 -l", {
      l: true,
      p: "8080"
    }],
    ["-d /usr/logs", {
      d: "/usr/logs"
    }],
    ["-d /usr/logs  ", {
      d: "/usr/logs"
    }],
    ["-d   /usr/logs  ", {
      d: "/usr/logs"
    }],
    ["-l -p 8080 -d /usr/logs", {
      d: "/usr/logs",
      l: true,
      p: "8080"
    }],
    ["-g this,is,a,list -s 1,2,-3,5", {
      s: "1,2,-3,5",
      g: "this,is,a,list",
    }],
    ["-l asd", "bad value: asd"],
    ["-l -asd", "unknown option -asd"],
    ["-p asd", "bad option -p"],
    ["-s -1", {
      s: "-1"
    }],
    ["-c as", "unknown option -c"]
  ].map((testCase: any ) => {
    const [testStr, expectedVal] = testCase;
    testing(testStr, expectedVal);
  });
});
