const userInputString = document.getElementById(
  "brackets"
)! as HTMLInputElement;
const checkBtn = document.getElementById("checkBtn")! as HTMLInputElement;
const answer = document.getElementById("answer")! as HTMLElement;

const checkValidInput = (char: string): boolean => {
  if (
    char === "[" ||
    char === "]" ||
    char === "{" ||
    char === "}" ||
    char === "(" ||
    char === ")"
  ) {
    return true;
  }
  return false;
};

const isMatchingPair = (open: string, close: string): boolean => {
  return (
    (open === "(" && close === ")") ||
    (open === "{" && close === "}") ||
    (open === "[" && close === "]")
  );
};

const checkValidParentheses = () => {
  if (!userInputString.value) {
    answer.textContent = "INVALID INPUT";
    return;
  }
  const inputString = userInputString.value.trim();
  if (inputString.length % 2 !== 0) {
    answer.textContent = "INVALID INPUT";
    return;
  }
  const userString = inputString.split("");
  for (let char of userString) {
    if (!checkValidInput(char)) {
      answer.textContent = "INVALID INPUT";
      return;
    }
  }

  let start = 0;
  let end = userString.length - 1;
  while (start < end) {
    if (!isMatchingPair(userString[start], userString[end])) {
      answer.textContent = "INVALID INPUT";
      return;
    } else {
      start++;
      end--;
    }
  }

  answer.textContent = "TRUE";
};

checkBtn.addEventListener("click", checkValidParentheses);
