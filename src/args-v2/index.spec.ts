import Args, { SchemaType2Regex } from "./Args";
import { exceptionConstants, SchemaType } from "./constants";

function parseArgs(schema: string, cliInput: string[]) {
  return Args.parse(schema, cliInput);
}

describe("", () => {
  test("no schema nor input", () => {
    const inputParseResult = parseArgs("", []);
    expect(inputParseResult.hasFlag("l")).toBe(false);
    expect(inputParseResult.hasFlag("s")).toBe(false);
    expect(inputParseResult.hasFlag("z")).toBe(false);
    expect(inputParseResult.getAllArgs()).toEqual({});
  });

  test("schema no such flag but input does", () => {
    try {
      const argsResult = parseArgs("", ["-l"]);
      throw new Error("argsResult should throw Error");
    } catch (e) {
      expect(e.name).toBe(exceptionConstants.UNEXPECTED_FLAG);
      expect(e.message).toBe("-l");
    }
  });

  test("no schema but multiple input groups exist", () => {
    try {
      const argsResult = parseArgs("", ["-l", "-p"]);
      throw new Error("argsResult should throw Error");
    } catch (e) {
      expect(e.name).toBe(exceptionConstants.UNEXPECTED_FLAG);
      expect(e.message).toBe("-l");
    }
  });

  test("schema error without inputs", () => {
    try {
      const argsResult = parseArgs("l>", []);
      throw new Error("argsResult should throw Error");
    } catch (e) {
      expect(e.name).toBe(exceptionConstants.INVALID_SCHEMA);
      expect(e.message).toBe("l>");
    }
  });

  test("schema error with inputs", () => {
    try {
      const argsResult = parseArgs("l~", ["-l", "-p"]);
      throw new Error("argsResult should throw Error");
    } catch (e) {
      expect(e.name).toBe(exceptionConstants.INVALID_SCHEMA);
      expect(e.message).toBe("l~");
    }
  });

  test("boolean schema with boolean input", () => {
    const inputParseResult = parseArgs("l", ["-l"]);
    expect(inputParseResult.hasFlag("l")).toBe(true);
    expect(inputParseResult.hasFlag("s")).toBe(false);
    expect(inputParseResult.hasFlag("p")).toBe(false);
  });

  // test("recoginzeSchemaItem", () => {
  //   expect(SchemaType2Regex.recognize(SchemaType.BOOLEAN, "")).toBe("");
  //   expect(SchemaType2Regex.recognize(SchemaType.BOOLEAN, "ss")).toBe(false);
  //   expect(SchemaType2Regex.recognize(SchemaType.INT, "123123")).toBe("123123");
  //   expect(SchemaType2Regex.recognize(SchemaType.INT, "-12")).toBe("-12");
  //   expect(SchemaType2Regex.recognize(SchemaType.STRING, "asd12")).toBe("asd12");
  //   expect(SchemaType2Regex.recognize(SchemaType.STRING, "aasdzxc")).toBe("aasdzxc");
  //   expect(SchemaType2Regex.recognize(SchemaType.STRING, "")).toBe(false);
  //   expect(SchemaType2Regex.recognize(SchemaType.STRING, "asd_asd")).toBe("asd_asd");
  //   expect(SchemaType2Regex.recognize(SchemaType.STRING_ARRAY, "asd,asdasd,asd123")).toBe("asd,asdasd,asd123");
  // });

  test("boolean schema without input", () => {
    const inputParseResult = parseArgs("l", [""]);
    expect(inputParseResult.hasFlag("l")).toBe(false);
    expect(inputParseResult.hasFlag("s")).toBe(false);
    expect(inputParseResult.hasFlag("p")).toBe(false);
  });

  test("int schema input", () => {
    const inputParseResult = parseArgs("p#", ["-p", "8080"]);
    expect(inputParseResult.hasFlag("l")).toBe(false);
    expect(inputParseResult.hasFlag("s")).toBe(false);
    expect(inputParseResult.hasFlag("p")).toBe(true);
    expect(inputParseResult.getValue("p")).toBe("8080");
  });

  test("int schema without input", () => {
    try {
      const inputParseResult = parseArgs("p#", ["-p", ""]);
      throw new Error("argsResult should throw Error");
    } catch (e) {
      expect(e.name).toBe(exceptionConstants.BAD_VALUE);
      expect(e.message).toBe("");
    }
  });

  test("int schema without input", () => {
    const inputParseResult = parseArgs("l", ["-l", "123"]);
    expect(inputParseResult.hasFlag("l")).toBe(true);
    expect(inputParseResult.hasFlag("s")).toBe(false);
    expect(inputParseResult.hasFlag("p")).toBe(false);
    expect(inputParseResult.getValue("l")).toBe(true);
  });

  test("string schema with input", () => {
    const inputParseResult = parseArgs("s*", ["-s", "asdxczxcqe123asda"]);
    expect(inputParseResult.hasFlag("l")).toBe(false);
    expect(inputParseResult.hasFlag("s")).toBe(true);
    expect(inputParseResult.hasFlag("p")).toBe(false);
    expect(inputParseResult.getValue("s")).toBe("asdxczxcqe123asda");
  });

  test("string schema without input", () => {
    try {
      const inputParseResult = parseArgs("s*", ["-s", ""]);
      throw new Error("argsResult should throw Error");
    } catch (e) {
      expect(e.name).toBe(exceptionConstants.BAD_VALUE);
      expect(e.message).toBe("");
    }
  });

  test("string schema with invalid input", () => {
    try {
      const inputParseResult = parseArgs("s*", ["-s", "-"]);
      throw new Error("argsResult should throw Error");
    } catch (e) {
      expect(e.name).toBe(exceptionConstants.BAD_VALUE);
      expect(e.message).toBe("-");
    }
  });

  test("string-array schema with input", () => {
    const inputParseResult = parseArgs("s[*]", ["-s", "asd,123dsz,asd"]);
    expect(inputParseResult.hasFlag("l")).toBe(false);
    expect(inputParseResult.hasFlag("s")).toBe(true);
    expect(inputParseResult.hasFlag("p")).toBe(false);
    expect(inputParseResult.getValue("s")).toBe("asd,123dsz,asd");
  });

  test("string-array schema with invalid input", () => {
    try {
      const inputParseResult = parseArgs("s[*]", ["-s", "as:asd"]);
      throw new Error("argsResult should throw Error");
    } catch (e) {
      expect(e.name).toBe(exceptionConstants.BAD_VALUE);
      expect(e.message).toBe("as:asd");
    }
  });

  test("string-array schema without input", () => {
    try {
      const inputParseResult = parseArgs("s[*]", ["-s", ""]);
      throw new Error("argsResult should throw Error");
    } catch (e) {
      expect(e.name).toBe(exceptionConstants.BAD_VALUE);
      expect(e.message).toBe("");
    }
  });

  test("acc", () => {
    try {
      const inputParseResult = parseArgs("c,s[*]", ["-s", ""]);
      throw new Error("argsResult should throw Error");
    } catch (e) {
      expect(e.name).toBe(exceptionConstants.BAD_VALUE);
      expect(e.message).toBe("");
    }
  });

  test("acc2", () => {
    const inputParseResult = parseArgs("c,s[*]", ["-s", "asdasd"]);
    expect(inputParseResult.hasFlag("c")).toBe(false);
    expect(inputParseResult.hasFlag("s")).toBe(true);
    expect(inputParseResult.hasFlag("p")).toBe(false);
    expect(inputParseResult.getValue("s")).toBe("asdasd");
  });

  test("acc3", () => {
    const inputParseResult = parseArgs("c,s[*]", ["-s", "asdasd", "-c"]);
    expect(inputParseResult.hasFlag("c")).toBe(true);
    expect(inputParseResult.hasFlag("s")).toBe(true);
    expect(inputParseResult.hasFlag("p")).toBe(false);
    expect(inputParseResult.getValue("s")).toBe("asdasd");
    expect(inputParseResult.getValue("c")).toBe(true);
  });
});
