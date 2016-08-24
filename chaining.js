// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log("the array before the exercise: ", integers);

var answer =
  //this method sorts the numbers in descending order
  integers.sort(function (a, b) {return b - a;})
  //this method determines which numbers in the array that are less than 19, keeps them and removes any integers greater than 19
  .filter(function (numValue){return numValue <= 19})
  //this uses the map method to jump into the array and do the necessary math/function that is desired - this eercise requires us to multiply each remaining number by 1.5 and then subtract 1
  .map(function (math){return (math * 1.5) - 1});

console.log("the array after the exercise: ", answer);


