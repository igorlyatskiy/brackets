module.exports = function check(str, bracketsConfig) {
    let bracket = 0;
    let square = 0;
    let figure = 0;
    let flag = true;
    let counter = 0;
    let longConst = 0;
    let newArray = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "{") {
            figure++;
            newArray.push("{");
        }
        if (str[i] == "[") {
            square++;
            newArray.push("[");
        }
        if (str[i] == "(") {
            bracket++;
            newArray.push("(");
        }
        if (str[i] == "|") {
            longConst++;
            newArray.push("|");
        }
        if (str[i] == "}") {
            figure--;
            while (newArray[newArray.length - 1] != "{") {
                if (
                    newArray[newArray.length - 1] != "|" &&
                    longConst % 2 != 0
                ) {
                    return false;
                    flag = false;
                } else newArray.pop();
            }
            newArray.pop();
        }
        if (str[i] == "]") {
            square--;
            while (newArray[newArray.length - 1] != "[") {
                if (
                    newArray[newArray.length - 1] != "|" &&
                    longConst % 2 != 0
                ) {
                    return false;
                    flag = false;
                } else newArray.pop();
            }
            newArray.pop();
        }
        if (str[i] == ")") {
            bracket--;
            while (newArray[newArray.length - 1] != "(") {
                if (
                    newArray[newArray.length - 1] != "|" &&
                    longConst % 2 != 0
                ) {
                    return false;
                    flag = false;
                } else newArray.pop();
            }
            newArray.pop();
        }
        if (str[i] == "|" && longConst % 2 == 1) {
            longConst--;
            newArray.push("|");
        }
        if (bracket < 0 || square < 0 || figure < 0) {
            return false;
        }
    }
    if (bracket != 0 || square != 0 || figure != 0) return false;
    longConst = 0;
    let unicArray = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        for (let j = 0; j < bracketsConfig[i].length; j++) {
            if (bracketsConfig[i][j] == "{") {
                figure++;
                counter++;
                unicArray.push("{");
            }
            if (bracketsConfig[i][j] == "[") {
                square++;
                counter++;
                unicArray.push("[");
            }
            if (bracketsConfig[i][j] == "(") {
                bracket++;
                counter++;
                unicArray.push("(");
            }
            if (bracketsConfig[i][j] == "|") {
                longConst++;
                unicArray.push("|");
            }
            if (bracketsConfig[i][j] == "}") {
                figure--;
                if (unicArray[unicArray.length - 1] != "{") {
                    return false;
                    flag = false;
                } else unicArray.pop();
            }
            if (bracketsConfig[i][j] == "]") {
                square--;
                if (unicArray[unicArray.length - 1] != "[") {
                    return false;
                    flag = false;
                } else unicArray.pop();
            }
            if (bracketsConfig[i][j] == ")") {
                bracket--;
                if (unicArray[unicArray.length - 1] != "(") {
                    return false;
                    flag = false;
                } else unicArray.pop();
            }
            if (bracket < 0 || square < 0 || figure < 0) {
                flag = false;
                break;
            }
        }
    }
    if (flag) return true;
    else return false;
};
