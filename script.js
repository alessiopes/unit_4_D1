////////////////////////////////////////

//? Exercise 1

function checkNumbers(num1, num2) {
  return num1 === 50 || num2 === 50 || num1 + num2 === 50;
}

// Example usage
console.log(checkNumbers(50, 20)); // Output: true
console.log(checkNumbers(30, 20)); // Output: false
console.log(checkNumbers(25, 25)); // Output: true
console.log(checkNumbers(10, 20)); // Output: false

////////////////////////////////

//? Exercise 2

function removeLetterAtPosition(str, position) {
  if (position < 0 || position >= str.length) {
    // Invalid position, return the original string
    return str;
  }

  // Split the string into an array of characters
  const strArray = str.split("");

  // Remove the letter at the specified position
  strArray.splice(position, 1);

  // Join the array back into a string and return it
  return strArray.join("");
}

// Example usage
console.log(removeLetterAtPosition("Hello World", 2)); // Output: "Helo World"
console.log(removeLetterAtPosition("JavaScript", 5)); // Output: "JavaSript"
console.log(removeLetterAtPosition("HTML", 0)); // Output: "TML"
console.log(removeLetterAtPosition("CSS3", 10)); // Output: "CSS3"

////////////////////////////////

//? Exercise 3

function checkNumberRange(num1, num2) {
  const range1 = (num1 >= 40 && num1 <= 60) || (num2 >= 40 && num2 <= 60);
  const range2 = (num1 >= 70 && num1 <= 100) || (num2 >= 70 && num2 <= 100);

  return range1 || range2;
}

// Example usage
console.log(checkNumberRange(50, 55)); // Output: true
console.log(checkNumberRange(30, 70)); // Output: false
console.log(checkNumberRange(80, 90)); // Output: true
console.log(checkNumberRange(20, 30)); // Output: false

////////////////////////////////

//? Exercise 4

function checkCityName(cityName) {
  const firstThreeLetters = cityName.slice(0, 3).toLowerCase();

  return firstThreeLetters === "los" || firstThreeLetters === "new";
}

// Esempi di utilizzo
console.log(checkCityName("Los Angeles")); // Output: true
console.log(checkCityName("New York")); // Output: true
console.log(checkCityName("San Francisco")); // Output: false
console.log(checkCityName("Chicago")); // Output: false

////////////////////////////////

//? Exercise 5

function sumArrayElements(arr) {
  let sum = 0; // Initialize a variable sum to zero

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Add each element to the sum
  }

  return sum; // Return the sum
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
console.log(sumArrayElements(array1)); // Output: 15

const array2 = [10, -5, 7, 12];
console.log(sumArrayElements(array2)); // Output: 24

const array3 = [];
console.log(sumArrayElements(array3)); // Output: 0

//////////////////////////////////

//? Exercise 6

function checkArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1 || array[i] === 3) {
      return false; // If 1 or 3 is found, return false
    }
  }

  return true; // If 1 or 3 is not found, return true
}

// Example usage
const array4 = [2, 4, 6, 8];
console.log(checkArray(array4)); // Output: true (does not contain 1 or 3)

const array5 = [1, 5, 7, 9];
console.log(checkArray(array5)); // Output: false (contains 1)

const array6 = [3, 6, 9, 12];
console.log(checkArray(array6)); // Output: false (contains 3)

////////////////////////////////

//? Exercise 7

function getAngleType(degrees) {
  let angleType;

  switch (true) {
    case degrees < 90:
      angleType = "acute"; // Angle is less than 90 degrees
      break;
    case degrees === 90:
      angleType = "right"; // Angle is exactly 90 degrees
      break;
    case degrees < 180:
      angleType = "obtuse"; // Angle is between 90 and 180 degrees
      break;
    case degrees === 180:
      angleType = "straight"; // Angle is exactly 180 degrees
      break;
    default:
      angleType = "invalid"; // Angle is greater than 180 degrees
      break;
  }

  return angleType;
}

// Example usage
console.log(getAngleType(45)); // Output: "acute"
console.log(getAngleType(90)); // Output: "right"
console.log(getAngleType(135)); // Output: "obtuse"
console.log(getAngleType(180)); // Output: "straight"
console.log(getAngleType(200)); // Output: "invalid"

////////////////////////////////

//? Exercise 8

function createAcronym(sentence) {
  const words = sentence.split(" "); // Split the sentence into an array of words
  let acronym = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const firstLetter = word.charAt(0).toUpperCase(); // Get the first letter of each word and convert it to uppercase
    acronym += firstLetter; // Append the first letter to the acronym
  }

  return acronym;
}

// Example usage
console.log(createAcronym("Fabbrica Italiana Automobile Torino")); // Output: "FIAT"
console.log(createAcronym("Hello World")); // Output: "HW"
console.log(
  createAcronym("United Nations Educational, Scientific, Cultural Organization")
); // Output: "UNESCO"

////////////////////////////////

//! EXTRAS

//? Exercise 1

function findMostFrequentCharacter(input) {
  // Create an empty object to keep track of character counts
  const charCount = {};

  // Iterate through the input string and increment the count for each character, no repeating characters
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    charCount[char] = charCount.hasOwnProperty(char) ? charCount[char] + 1 : 1;
  }
  console.log(charCount);

  // Find the character with the highest count
  let mostFrequentChar;
  let highestCount = 0;
  for (const char in charCount) {
    if (charCount[char] > highestCount) {
      mostFrequentChar = char;
      highestCount = charCount[char];
    }
  }

  return mostFrequentChar;
}

// Example usage
const inputString = "Hello, World!";
const mostFrequent = findMostFrequentCharacter(inputString);
console.log(mostFrequent); // Output: "l"

///////////////////////////////////

//? Exercise 2

function areAnagrams(str1, str2) {
  // Remove punctuation and spaces, and convert everything to lowercase
  const cleanStr1 = str1.replace(/[^\w]/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^\w]/g, "").toLowerCase();

  // Check if the cleaned strings have the same length
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Count the occurrences of each character in the cleaned strings
  const charCount = {};
  for (let i = 0; i < cleanStr1.length; i++) {
    const char = cleanStr1[i];
    // Increment the character count if the property already exists, or set it to 1 if it doesn't
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Verify that the same character occurrences are found in the second string
  for (let i = 0; i < cleanStr2.length; i++) {
    const char = cleanStr2[i];
    // If the character is not found or the count becomes zero, the strings are not anagrams
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  // If both loops complete without returning false, the strings are anagrams
  return true;
}

// Example usage
const string1 = "Hello, World!";
const string2 = "dlrowolleH";

const result = areAnagrams(string1, string2);
console.log(result); // Output: true

///////////////////////////////////

//? Exercise 3

function findCorrectAnagrams(word, anagrams) {
  const sortedWord = word.split("").sort().join(""); // Sort the characters of the input word
  const correctAnagrams = [];

  for (let i = 0; i < anagrams.length; i++) {
    const sortedAnagram = anagrams[i].split("").sort().join(""); // Sort the characters of the anagram word
    if (sortedAnagram === sortedWord) {
      correctAnagrams.push(anagrams[i]);
    }
  }

  return correctAnagrams;
}

const word = "cartine";
const anagrams = ["carenti", "incerta", "espatrio"];
console.log(findCorrectAnagrams(word, anagrams)); // Output: ["carenti", "incerta"]

//////////////////////////////////

//? Exercise 4

function isPalindrome(str) {
  // Remove any white spaces and convert the string to lowercase
  str = str.toLowerCase().replace(/\s/g, "");

  // Initialize two pointers, one at the start and one at the end of the string
  let left = 0;
  let right = str.length - 1;

  // Iterate until the pointers meet in the middle
  while (left < right) {
    // If the characters at the pointers are not equal, it's not a palindrome
    if (str[left] !== str[right]) {
      return false;
    }

    // Move the pointers inward
    left++;
    right--;
  }

  // If the loop completes without finding any mismatch, it's a palindrome
  return true;
}

// Examples of using the function
console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man a plan a canal Panama")); // Output: true

////////////////////////////////

//? Exercise 5

function reverseNumber(num) {
  // Check if the number is an integer
  if (!Number.isInteger(num)) {
    return NaN;
  }

  // Put number into an array
  arr = num.toString().split("");

  let newStr = "";

  // Reverse the string
  for (let i = arr.length - 1; i >= 0; i--) {
    newStr += arr[i];
  }

  // Return the new string as a number
  return parseInt(newStr);
}

// Example usage
console.log(reverseNumber(12348)); // Output: 84321
console.log(reverseNumber(0)); // Output: 0
console.log(reverseNumber(123.45)); // Output: NaN

/////////////////////////////////

//? Exercise 6

function printStaircase(x) {
  for (let i = 1; i < x + 1; i++) {
    // Check if the number is positive
    if (x <= 0) {
      console.log("Il numero deve essere positivo.");
      return;
    }

    let stair = "";

    for (let n = 1; n < i + 1; n++) {
      stair += "#";
    }
    console.log(stair);
  }
}

// Exaple usages:
printStaircase(2);
// Output:
// '# '
// '##'

printStaircase(3);
// Output:
// '# '
// '## '
// '###'

///////////////////////////////////////

//? Exercise 7

function reverseString(str) {
  // Split the string into an array of characters
  const chars = str.split("");

  // Reverse the array of characters using array methods
  const reversedChars = chars.reverse();

  // Join the reversed characters back into a string
  const reversedStr = reversedChars.join("");

  return reversedStr;
}

// Example usage
console.log(reverseString("Ciao")); // Output: "oaiC"
console.log(reverseString("Hello, world!")); // Output: "!dlrow ,olleH"
console.log(reverseString("12345")); // Output: "54321"

//////////////////////////////////////

//? Exercise 8

function divideArrayIntoSubarrays(array, y) {
  let resultArray = [];

  for (let i = 0; i < array.length; i += y) {
    const subArray = [];

    for (let j = i; j < i + y && j < array.length; j++) {
      subArray.push(array[j]);
    }

    resultArray.push(subArray);
  }

  return resultArray;
}

// Example usage:
const array7 = [1, 2, 3, 4];
const y1 = 2;
console.log(divideArrayIntoSubarrays(array7, y1));
// Output: [[1, 2], [3, 4]]

const array8 = [1, 2, 3, 4, 5];
const y2 = 4;
console.log(divideArrayIntoSubarrays(array8, y2));
// Output: [[1, 2, 3, 4], [5]]

////////////////////////////////////////

//? Exercise 9

function createPyramid(x) {
  // Check if the number is positive
  if (x <= 0) {
    console.log("The number must be positive.");
    return;
  }

  // Iterate through the items of the pyramid
  for (let i = 1; i <= x; i++) {
    let spaces = "";
    let blocks = "";

    // Calculate the white spaces before or after the block
    for (let j = 1; j <= x - i; j++) {
      spaces += " ";
    }

    // Calculate the '#' blocks
    for (let k = 1; k <= 2 * i - 1; k++) {
      blocks += "#";
    }

    // Construct the row by concatenating the spaces, blocks, and spaces
    let stair = spaces + blocks + spaces;

    // Print the row
    console.log(stair);
  }
}

// Example usage:
const x = 3;
createPyramid(x);
// Output:
// ' # '
// ' ### '
// '#####'

///////////////////////////////////////////

//? Exercise 10

function generateSpiralMatrix(N) {
  const matrix = [];
  for (let i = 0; i < N; i++) {
    matrix.push([]);
  }

  let num = 1;
  let startRow = 0;
  let endRow = N - 1;
  let startCol = 0;
  let endCol = N - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // Riempimento della riga superiore
    for (let col = startCol; col <= endCol; col++) {
      matrix[startRow][col] = num++;
    }
    startRow++;

    // Riempimento della colonna a destra
    for (let row = startRow; row <= endRow; row++) {
      matrix[row][endCol] = num++;
    }
    endCol--;

    // Riempimento della riga inferiore
    for (let col = endCol; col >= startCol; col--) {
      matrix[endRow][col] = num++;
    }
    endRow--;

    // Riempimento della colonna a sinistra
    for (let row = endRow; row >= startRow; row--) {
      matrix[row][startCol] = num++;
    }
    startCol++;
  }

  return matrix;
}

console.log(generateSpiralMatrix(2));
console.log(generateSpiralMatrix(3));
console.log(generateSpiralMatrix(4));

///////////////////////////////////////

//! EXTRAS (MARCO)

//? Exercise 1

function twoSum(nums, target) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

const nums = [4, 9, 11, 13];
const target = 22;

const results = twoSum(nums, target);
console.log(results); // Output: [1, 3]


////////////////////////////////////////

//? Exercise 2

function fizzBuzzer() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(`Fizz`);
    } else if (i % 3 !== 0 && i % 5 === 0) {
      console.log(`Buzz`);
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log(`FizzBuzz`);
    } else {
      console.log(i);
    }
  }
}

fizzBuzzer();