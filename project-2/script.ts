const userInputString = document.getElementById("brackets")! as HTMLInputElement;
const checkBtn = document.getElementById("checkBtn")! as HTMLInputElement;
const answer = document.getElementById("answer")! as HTMLInputElement;

const checkValidInput = (char: string): boolean => {
  return ["(", ")", "{", "}", "[", "]"].includes(char);
};

const isMatchingPair = (open: string | undefined, close: string): boolean => {
  return (
    (open === "(" && close === ")") ||
    (open === "{" && close === "}") ||
    (open === "[" && close === "]")
  );
};

const checkValidParentheses = () => {
  if(!userInputString.value){
    
  }
  const inputString = userInputString.value.trim();
  const userString = inputString.split("");

  for (let char of userString) {
    if (!checkValidInput(char)) {
      answer.textContent = "INVALID INPUT";
      return;
    }
  }

  const arrayOfBracket : string[]= [];

  for (let char of userString) {
    if (char === "(" || char === "{" || char === "[") {
      arrayOfBracket.push(char);
    } else {
      if (arrayOfBracket.length === 0) {
        answer.textContent = "FALSE";
        return;
      }
      const lastOpen = arrayOfBracket.pop();
      if (!isMatchingPair(lastOpen, char)) {
        answer.textContent = "FALSE";
        return;
      }
    }
  }

  if (arrayOfBracket.length === 0) {
    answer.textContent = "TRUE";
  } else {
    answer.textContent = "FALSE";
  }
};

checkBtn.addEventListener("click", checkValidParentheses);
