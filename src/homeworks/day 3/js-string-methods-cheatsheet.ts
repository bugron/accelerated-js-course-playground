// String methods
const sampleString = "Yerevan";

// 0. Get the length of the string
sampleString.length; // 7

// 1. Accessing characters
sampleString[0]; // 'Y'
sampleString[sampleString.length - 1]; // 'n'
sampleString.at(-1); // 'n'
sampleString[-2]; // undefined
sampleString[10]; // undefined

// 1.1 strings are immutable
sampleString[0] = "y"; // this does NOT change the value of sampleString, it is still 'Yerevan'

// 2. Character codes
sampleString.charCodeAt(0); // 89 -> char code of 'Y'
String.fromCharCode(89); // 'Y'

// 3. Changing the case
sampleString.toUpperCase(); // 'YEREVAN'
sampleString.toLowerCase(); // 'yerevan'

// 4. String interpolation, template strings
const sentence = `${sampleString} is the capital of Armenia`; // 'Yerevan is the capital of Armenia'

// 5. Slicing strings
sampleString.slice(0, 3); // 'Yer', .slice(start, end) -> the end index is EXCLUSIVE
sampleString.slice(0); // 'Yerevan', gets all characters starting the index 0

// 6. Splitting strings
sampleString.split(); // WRONG, the result is ['Yerevan']
sampleString.split(""); // CORRECT, the result is ['Y', 'e', 'r', 'e', 'v', 'a', 'n']
sentence.split(" "); // ['Yerevan', 'is', 'the', 'capital', 'of', 'Armenia']

// 7. Finding substrings
sentence.includes("yerevan"); // false
sentence.includes("Yerevan"); // true
sentence.indexOf("is"); // 8
sentence.indexOf("yerevan"); // -1, which means no match
sentence.startsWith("Yerevan"); // true
sentence.endsWith("Armenia"); // true

// 8. Trim spaces
const textWithSpaces = "  There are unnecessary spaces here     ";
textWithSpaces.trim(); // 'There are unnecessary spaces here'

// 9. Replace characters
const anotherString =
  "UTC is fine cryptocurrency. Check the UTC/USD prices now.";
anotherString.replace("UTC", "BTC"); // 'BTC is fine cryptocurrency. Check the UTC/USD prices now.' -> notice only FIRST occurency is replaced
anotherString.replaceAll("UTC", "BTC"); // 'BTC is fine cryptocurrency. Check the BTC/USD prices now.' -> ALL occurences of UTC are replaced
