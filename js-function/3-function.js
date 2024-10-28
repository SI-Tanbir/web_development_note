// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

number = [23, 54, 21, 654, 1, 24];

function make_avg(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum = sum + number[i];
  }

  let average = sum / number.length;
  return average;
}

let output =make_avg(number);

console.log(output)
