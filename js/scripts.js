//Business Logic

function numList(num1) {
  const numArray = [];
  for (let i = 0; i <= num1; i++) [numArray.push(i)];
  return numArray;
}

function replaceNumber(num) {
  let numArray = numList(num);
  numArray.forEach(function (num1, i) {
    const numString = num1.toString();
    if (numString.match(/3/)) {
      numArray[i] = "Won't you be my neighbor?";
    } else if (numString.match(/2/)) {
      numArray[i] = 'Boop!';
    } else if (numString.match(/1/)) {
      numArray[i] = 'Beep!';
    }
  });
  return numArray.toString();
}

//UI Logic
window.onload = function () {
  let answer = document.getElementById('answer');
  answer.style.display = 'none';
  let resetBtn = document.getElementById('reset');
  resetBtn.style.display = 'none';
  resetBtn.onclick = function () {
    location.reload();
  };

  let form = document.querySelector('form');
  form.onsubmit = function (event) {
    answer.style.display = 'block';
    form.style.display = 'none';
    resetBtn.removeAttribute('style');
    const userNumber = document.getElementById('userNumber').value;
    const finalResults = replaceNumber(userNumber);
    // replaceNumber(userNumber);
    document.getElementById('finalResult').innerText = finalResults;
    event.preventDefault();
  };
};
