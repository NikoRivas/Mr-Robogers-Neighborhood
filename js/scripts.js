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
      numArray[i] = "Won't you be my neighbor";
    } else if (numString.match(/2/)) {
      numArray[i] = 'Boop!';
    } else if (numString.match(/1/)) {
      numArray[i] = 'Beep!';
    }
  });
  console.log(numArray);
}

//UI Logic
