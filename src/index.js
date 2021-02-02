module.exports = function check(str, bracketsConfig) {
    let open = "";
    let close = "";
    for (let i = 0; i < bracketsConfig.length; i++) {
        open += bracketsConfig[i][0];
        close += bracketsConfig[i][1];
    }
    str = str.split("");
    let templ = 0;
    while (str.length != 0) {
        for (let j = 0; j < str.length; j++) {
            if (open.includes(str[j])) {
                if (open.indexOf(str[j]) == close.indexOf(str[j + 1])) {
                    str.splice(j, 2);
                }
            }
        }
        templ++;
        if (templ > 40) return false;
    }
    return true;
};
