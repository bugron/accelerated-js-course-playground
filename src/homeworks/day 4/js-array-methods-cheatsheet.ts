// Array methods
const sampleArray = ['Y', 'e', 'r', 'e', 'v', 'a', 'n'];

// 0. Get the length of the array
sampleArray.length; // 7

// 1. Accessing elements
sampleArray[0]; // 'Y'
sampleArray[sampleArray.length - 1]; // 'n'
sampleArray.at(-1); // 'n'
sampleArray[-2]; // undefined
sampleArray[10]; // undefined

// 1.1 array elements CAN BE modified in-place
sampleArray[0] = "y"; // the value of sampleArray is ['y', 'e', 'r', 'e', 'v', 'a', 'n'] now

// 2. Slicing arrays
sampleArray.slice(0, 3); // ['Y', 'e', 'r'], .slice(start, end) -> the end index is EXCLUSIVE
sampleArray.slice(0); // ['Y', 'e', 'r', 'e', 'v', 'a', 'n'], returns a new array of all elements starting the index 0

// 3. Joining array elements
sampleArray.join(); // WRONG, the result is 'Y,e,r,e,v,a,n'
sampleArray.join(""); // CORRECT, the result is 'Yerevan'

// 4. Finding element matches
sampleArray.includes("y"); // false
sampleArray.includes("Y"); // true
sampleArray.indexOf("v"); // 4
sampleArray.indexOf("yerevan"); // -1, which means no match

// 5. Common array methods
// 5.1. .map, to transform array elements
sampleArray.map(function (character, index) {
  console.log(`The value ${character} is at index ${index}`)
  // The value 'Y' is at index 0
  // The value 'e' is at index 1
  // ...
  return character.toUpperCase();
}); // .map always returns a new array, in this case it is ['Y', 'E', 'R', 'E', 'V', 'A', 'N']

// 5.2 .filter, to filter array elements by some conditions
// if the condition is true the element is preserved otherwise it is dropped
[1, 2, 4, 5, 6, 7].filter(function (element, index) {
  console.log(`The value ${element} is at index ${index}`)
  // The value 1 is at index 0
  // The value 2 is at index 1
  // ...
  return element ** 2 < 30
}); // .filter always returns a new array, in this case it is [1, 2, 3, 4, 5]

// 5.3 .reduce, a powerful function which allows to do the transformation, filtering parts together
// however it is slightly harder to grasp
// Now given an array of characters let's construct an object where we keep count of each character
['a', 'c', 'a', 'b', 'j', 'a', 'c', 'o', 'j'].reduce(function (characterCounterObject, currentCharacter) {
  if (characterCounterObject[currentCharacter]) {
    characterCounterObject[currentCharacter]++ // increment the count if the character was already in the object
  } else {
    characterCounterObject[currentCharacter] = 1; // set the initial value of the counter for the character
  }

  return characterCounterObject;
}, {})
// this .reduce returns the following object
// {a: 3, c: 2, b: 1, j: 2, o: 1}