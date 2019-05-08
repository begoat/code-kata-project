import { badValue, invalidFlag, unexpectedFlag } from "./args-exception";
import { SchemaType } from "./constants";

const ArgsResult = { // result object after parsing args
  init(args: object) {
    this._args = args;
  },
  getAllArgs() {
    return this._args || {};
  },
  hasFlag(flag: string) {
    return flag in this._args;
  },
  getValue(flag: string) {
    return this._args[flag];
  }
};

export const SchemaType2Regex = {
  recognize(schemaType: SchemaType, testStr: string) {
    const matchResult = testStr.match(this.getRegex(schemaType));
    if (matchResult) {
      return matchResult[1];
    }

    throw new badValue(testStr);
  },
  getRegex(schemaType: SchemaType) {
    let re;
    switch (schemaType) {
      case SchemaType.BOOLEAN:
        re = /^()$/;
        break;
      case SchemaType.INT:
        re = /^([+-]?[0-9]+)$/;
        break;
      case SchemaType.STRING:
        re = /^([a-zA-Z0-9_]+)$/;
        break;
      case SchemaType.STRING_ARRAY:
        re = /^([a-zA-Z0-9]+(,[a-zA-Z0-9]+)*)$/;
        break;
    }
    return re;
  }
};

/**
 * Schema:
 * char Boolean
 * char* String
 * char# Int
 * char[*] one element of a string array.
 */
const SchemaParser = {
  init(schema: string) {
    const res = {} as any;
    const splitedSchema = schema.split(",");
    splitedSchema.map((schemaItem) => {
      if (!(/^([a-zA-Z](([*#]|\[\*\])?))?$/.test(schemaItem))) {
        throw new invalidFlag(schemaItem);
      } else {
        res[schemaItem[0]] = this.typeRecognize(schemaItem);
      }
    });

    return res;
  },
  typeRecognize(schemaItem: string) {
    let type;
    switch (schemaItem.substring(1)) {
      case "":
        type = SchemaType.BOOLEAN;
        break;
      case "*":
        type = SchemaType.STRING;
        break;
      case "#":
        type = SchemaType.INT;
        break;
      case "[*]":
        type = SchemaType.STRING_ARRAY;
        break;
    }

    if (schemaItem[0]) {
      return type;
    }
  }
};

const CliInputParser = {
  init(cliInput: string[]) {
    return cliInput;
  }
};

const Args = {
  isFlag(flagString: string) {
    if (flagString.match(/^-[a-zA-Z]/)) {
      return flagString.substring(1);
    }

    return false;
  },
  matchSchemaWithCli(schemaResult: any, cliInputResult: any) {
    const schemaRecognizer = Object.create(SchemaType2Regex);
    const res = {} as any;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < cliInputResult.length; i++) {
      const flag = this.isFlag(cliInputResult[i]);
      if (flag) {
        if (!(flag in schemaResult)) {
          throw new unexpectedFlag(`-${flag}`);
        } else {
          if (schemaResult[flag] === SchemaType.BOOLEAN) {
            res[flag] = true;
          } else {
            const valueRes = schemaRecognizer.recognize(schemaResult[flag], cliInputResult[i + 1]);
            if (valueRes) {
              res[flag] = valueRes;
            }

            i++;
          }
        }
      }
    }

    return res;
  },
  parse(schema: string, cliInput: string[]) {
    const schemaResult = Object.create(SchemaParser).init(schema);
    const cliInputResult = Object.create(CliInputParser).init(cliInput);
    const matchResult =  this.matchSchemaWithCli(schemaResult, cliInputResult);
    const argsResult = Object.create(ArgsResult);
    argsResult.init(matchResult);
    return argsResult;
  }
};

export default Args;
