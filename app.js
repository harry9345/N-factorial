let calBtn = document.getElementById("cal");
let inputNumber = document.getElementById("number");
let result = document.getElementById("result");

var numberIn = inputNumber.value;

function factirial() {
  var answer = 1;
  if (inputNumber.value === 0 || inputNumber.value === 1) {
    return answer;
  } else {
    for (var i = inputNumber.value; i >= 1; i--) {
      answer = answer * i;
    }
  }
  console.log(inputNumber.value);
  result.innerText = answer;
}
calBtn.addEventListener("click", factirial);
