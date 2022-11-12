const inputUser = document.querySelectorAll("#user-input");
var expression = "";
press = (num) => {
  expression += num;
  inputUser[0].value = expression;
};
equal = () => {
  inputUser[0].value = eval(expression);
  expression = "";
};
erase = () => {
  console.log("Working!!");
  expression = "";
  inputUser[0].value = expression;
};
