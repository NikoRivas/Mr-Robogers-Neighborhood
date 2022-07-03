function numList(num1) {
  const numArray = [];
  for (let i = 0; i <= num1; i++) [numArray.push(i)];
  return numArray;
}

function replaceNumber(num) {
  let numArray = numList(num);
  numArray.forEach(function (num1, i) {
    if (num1 === 3) numArray[i] = "Won't you be my neighbor";
  });
  console.log(numArray);
}
