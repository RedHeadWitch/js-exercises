/*
  Write a JavaScript function that reverse a number
  Example x = 32243
  Expected Output : 34223
*/
function reverseNumber(num) {
  num = num + "";
  return num.split("").reverse().join("");
}

console.log(reverseNumber(32243)); // => 34223

/*
  Write a JavaScript function that returns a passed string with letters in alphabetical order
  Example string : 'webmaster'
  Expected Output : 'abeemrstw'
*/
function alphabetOrder(str) {
  return str.split("").sort().join("");
}

console.log(alphabetOrder('webmaster')); // => "abeemrstw"

/*
  Write a JavaScript function that accepts a string as a parameter and find the longest word within the string
  Example string : 'Web Development Tutorial'
  Expected Output : 'Development'
*/
function findLongestWord(sentence) {
  var longestWord = sentence.split(" ").sort(function(a, b) { return b.length - a.length; });
  return longestWord[0];
}

console.log(findLongestWord('Web Development Tutorial')); // => "Development"

/*
  Write a JavaScript function to extract unique characters from a string
  Example string : "thequickbrownfoxjumpsoverthelazydog"
  Expected Output : "thequickbrownfxjmpsvlazydg"
*/
function uniqueChars(str) {
  return str.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('');
}

console.log(uniqueChars('thequickbrownfoxjumpsoverthelazydog')); // => "thequickbrownfxjmpsvlazydg"

/*
  Write a JavaScript function to pass a 'JavaScript function' as parameter
  Example input : function
  Example output : "Student has been added"
*/
function addStudent(fn) {
  // Your code goes here ...
}

console.log(addStudent(onAddStudent)) // => "Student has been added"

/*
  Write a JavaScript function to get the value of "this" (keyword)
  Sample data :
  const user = {
    name: 'John',
    age: 27
  };
  Expected Output :
  {name: "john", age: 20}
*/
function getContext() {
  // Your code goes here ...
}
