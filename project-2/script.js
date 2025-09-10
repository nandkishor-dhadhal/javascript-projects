const userInputString = document.getElementById("brackets");
const checkBtn = document.getElementById("checkBtn");
const answer = document.getElementById("answer");

const checkValidInput = (char) => {
  return ["(", ")", "{", "}", "[", "]"].includes(char);
};

const isMatchingPair = (open, close) => {
  return (
    (open === "(" && close === ")") ||
    (open === "{" && close === "}") ||
    (open === "[" && close === "]")
  );
};

const checkValidParentheses = () => {
  const inputString = userInputString.value.trim();
  const userString = inputString.split("");

  for (let char of userString) {
    if (!checkValidInput(char)) {
      answer.textContent = "INVALID INPUT";
      return;
    }
  }

  const stack = [];

  for (let char of userString) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        answer.textContent = "FALSE";
        return;
      }
      const lastOpen = stack.pop();
      if (!isMatchingPair(lastOpen, char)) {
        answer.textContent = "FALSE";
        return;
      }
    }
  }

  if (stack.length === 0) {
    answer.textContent = "TRUE";
  } else {
    answer.textContent = "FALSE";
  }
};

checkBtn.addEventListener("click", checkValidParentheses);
