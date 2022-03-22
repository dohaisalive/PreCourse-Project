//String methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#

/**
 * sumOdds(numbers):
 * - receives an array of numbers
 * - returns the sum of only the ODD numbers
 *
 * e.g.
 * sumOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> 25
 * sumOdds([3, 7, 8, 15, 2, 1, 13]) -> 39
 */
function sumOdds(numbers) {
  let addSum = 0;
  numbers.forEach(element => {
    if (element%2===1) 
      addSum = addSum + element;
    });
  return addSum;
}
// console.log(sumOdds([3, 7, 8, 15, 2, 1, 13]));


/**
 * characterCount(string, c):
 * - receives a string and a character
 * - returns the number of times `c` occurs in the string
 * - note: this has to be case-insensitive
 *
 * e.g.
 * characterCount("Michael Stephenson", "e") -> 3
 * characterCount("Character Count is clever", "c") -> 4
 *
 * Hint: You need to turn the string into an array first
 * Another Hint: Use string methods to make it case-insensitive
 */
function characterCount(string, c) {
  let stringToArray = string.split('');
  let numOfC = stringToArray.filter(element=> element.toLowerCase()===c.toLowerCase());
  return numOfC.length;
}
//console.log(characterCount("Character Count is clever", "c"));

/**
 * largestIncrement(numbers):
 * - receives an array of numbers
 * - returns the largest difference between two consecutive numbers in the array
 * - see example below for clarification
 * - assume all differences are positive numbers
 * e.g.
 * largestIncrement([1, 3, 7, 9, 12]) -> 4
 * 3 - 1 = 2
 * 7 - 3 = 4
 * 9 - 7 = 2
 * 12 - 9 = 3
 * largest: 4
 *
 * largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> 545
 */
function largestIncrement(numbers) {
  let difference = 0;
  
  for (let i = 0; i < numbers.length; i++){
    let elementsDiff = Math.abs(numbers[i]-numbers[i-1])
    if (elementsDiff>difference){
      difference = elementsDiff; 
      }
  }
  return difference;
}
//console.log(largestIncrement([1, 3, 7, 9, 19]));

/**
 * afterX(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns an array of every number in `numbers` that occurs after `x`.
 *
 * - assume there are no duplicate numbers.
 *
 * e.g.
 * afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) -> [4, 5, 6, 7, 8, 9]
 * afterX([11, 35, 52, 14, 56, 601, 777, 888, 999], 52) -> [14, 56, 601, 777, 888, 999]
 */
function afterX(numbers, x) {
  let index = numbers.indexOf(x);
  let afterXArray = numbers.slice(index + 1, numbers.length);
  return afterXArray;
}
//console.log(afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

/**
 * abbreviate(firstName, lastName):
 * - receives a first name and a last name
 * - returns the initials in uppercase
 *
 * e.g.
 * abbreviate("Michael", "Singer") -> "MS"
 * abbreviate("jordan", "peterson") -> "JP"
 *
 * Hint: Use string method .toUpperCase()
 */
function abbreviate(firstName, lastName) {
  let capital1 = firstName.toUpperCase();
  let capital2 = lastName.toUpperCase();
  let abbrev = capital1.charAt(0) + capital2.charAt(0);
  return abbrev;
}
//abbreviate("miss", "Stephane");

/**
 * isUpperCase(string):
 * - receives a string
 * - returns true if the string is uppercase, false otherwise
 *
 * e.g.
 * isUpperCase("Mickey S") -> false
 * isUpperCase("JCREW") -> true
 *
 */
function isUpperCase(string) {
  return (string === string.toUpperCase())
}

//console.log(isUpperCase("JCREW"));

/**
 * elementInArray(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns true if `x` is found in the array, false otherwise
 *
 * e.g.
 * elementInArray([5, 6, 7], 6) -> true
 * elementInArray([5, 6, 7], 8) -> false
 *
 */
function elementInArray(numbers, x) {
  let found = numbers.filter(element=>element===x);
  return found.length !== 0;
}
// console.log(elementInArray([5, 6, 7], 8));

module.exports = {
  sumOdds,
  characterCount,
  largestIncrement,
  afterX,
  abbreviate,
  isUpperCase,
  elementInArray,
};
