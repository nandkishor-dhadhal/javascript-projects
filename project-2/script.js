var userInputString = document.getElementById("brackets");
var checkBtn = document.getElementById("checkBtn");
var answer = document.getElementById("answer");
var checkValidInput = function (char) {
    if (char === "[" ||
        char === "]" ||
        char === "{" ||
        char === "}" ||
        char === "(" ||
        char === ")") {
        return true;
    }
    return false;
};
var isMatchingPair = function (open, close) {
    return ((open === "(" && close === ")") ||
        (open === "{" && close === "}") ||
        (open === "[" && close === "]"));
};
var checkValidParentheses = function () {
    if (!userInputString.value) {
        answer.textContent = "INVALID INPUT";
        return;
    }
    var inputString = userInputString.value.trim();
    if (inputString.length % 2 !== 0) {
        answer.textContent = "FALSE";
        return;
    }
    var userString = inputString.split("");
    for (var _i = 0, userString_1 = userString; _i < userString_1.length; _i++) {
        var char = userString_1[_i];
        if (!checkValidInput(char)) {
            answer.textContent = "INVALID INPUT";
            return;
        }
    }
    var start = 0;
    var end = userString.length - 1;
    while (start < end) {
        if (!isMatchingPair(userString[start], userString[end])) {
            answer.textContent = "FALSE";
            return;
        }
        else {
            start++;
            end--;
        }
    }
    answer.textContent = "TRUE";
};
checkBtn.addEventListener("click", checkValidParentheses);
