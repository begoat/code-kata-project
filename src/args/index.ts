interface IRule {
  defaultVal?: any;
  key: string;
  value?: any; // if not exist, means the flag has no value, just use defaultValue
}

function throwBadOption(val: string) {
  throw new Error(`bad option -${val}`);
}

const Args = {
  init() {
    this._rules = {};
    return this;
  },
  getRules() {
    return this._rules;
  },
  addRules(ruleItem: IRule) {
    const { key, value, defaultVal } = ruleItem;
    this._rules[key] = {
      defaultVal,
      value
    };
    return this;
  },
  evaluate(inputStr: string) {
    // get only useful flags and values from str to eval
    const usefulTokens = inputStr.split(" ")
      .filter((item: string) => ["\n", "", "\t", " "].indexOf(item) === -1);
    const evaluateResult = {} as any;
    let currentKey = "" as any; // if not empty, means next token is value, else is flag
    let currentValueRegex = "" as any;
    try {
      for (const token of usefulTokens) {
        if (!currentKey) { // current token is a flag
          currentKey = token.substring(1);
          const valueObj = this.getRules()[currentKey];
          if (!valueObj) { // no such option registered
            throwBadOption(token);
          }

          const { value, defaultVal } = valueObj;
          if (!value) { // has no value, just use default value and mark it an end
            evaluateResult[currentKey] = defaultVal;
            currentKey = "";
          } else {
            currentValueRegex = value;
          }
        } else {
          if (currentValueRegex.test(token)) {
            evaluateResult[currentKey] = token;
          } else {
            throwBadOption(currentKey);
          }

          currentKey = "";
        }
      }

      return evaluateResult;
    } catch (e) {
      return e.message;
    }
  }
};

const regForL = {
  defaultVal: true,
  key: "l"
};

const regForP = {
  key: "p",
  value: /^(\d+)/
};

const regForD = {
  key: "d",
  value: /^(.*)/
};

const regForG = {
  key: "g",
  value: /^([a-zA-Z]+(,[a-zA-Z]+)*)/
};

const regForS = {
  key: "s",
  value: /^(\d+(,\d+)*)/
};

const myArgs = Object.create(Args);
myArgs.init()
  .addRules(regForL)
  .addRules(regForP)
  .addRules(regForD)
  .addRules(regForG)
  .addRules(regForS);
export default myArgs;
