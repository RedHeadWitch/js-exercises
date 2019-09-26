/*
  Write a JavaScript function to check whether an `input` is an array or not
  Test Data :
  console.log(isArray('hello'));
  console.log(isArray([1, 2, 4, 0]));
  false
  true
*/
function isArray(xs) {
  return Array.isArray([]);
}

console.log(isArray([1, 2, 4, 0])) // => true

/*
  Write a simple JavaScript function to join all elements of the following array into a string
  Sample array : myColor = ["Red", "Green", "White", "Black"];
  Expected Output :
  "Red,Green,White,Black"
*/
function join(arr) {
  return arr.join();
}

console.log(join(['Red', 'Green', 'White', 'Black'])); // => "Red,Green,White,Black"

/*
  Write a JavaScript function to sort the items of an array
  Sample array : var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
  Sample Output : -4, -3, 1, 2, 3, 5, 6, 7, 8
*/
function sort(arr) {
  return arr.sort();
}

console.log(sort([3, 8, 7, 6, 5, -4, 3, 2, 1])); // => [-4, -3, 1, 2, 3, 5, 6, 7, 8]

/*
  Write a JavaScript function to find the most frequent item of an array
  Sample array : var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
  Sample Output : a (5 times)
*/
function getFrequency(arr) {
  // Your code goes here ...
}

console.log([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]); // => a (5 times)

/*
  Write a JavaScript function to compute the union of two arrays
  Sample Data :
  console.log(union([1, 2, 3], [100, 2, 1, 10]));
  [1, 2, 3, 10, 100]
*/
function union() {
  // Your code goes here
}

console.log(union([1, 2, 3], [100, 2, 1, 10])); // => [1, 2, 3, 10, 100]
