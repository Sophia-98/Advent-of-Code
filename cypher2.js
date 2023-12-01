const fs = require("fs");

/*function to open and add contents into an array*/
function syncReadFile(filename) {
  try {
    const contents = fs.readFileSync(filename, "utf-8");
    /*remove any empty strings*/
    const arr = contents.split(/\n/).filter((line) => line !== "");
    return arr;
  } catch (err) {
    console.error(err);
    return [];
  }
}

/*main function that centralises all*/
const processFile = () => {
  const fileContentsArray = syncReadFile("input.txt");

  const pairs = findNumbers(fileContentsArray);

  const totalSum = sum(pairs);

  console.log(totalSum);
};

/* loops through array and finds teh first and last numbers*/
const findNumbers = (array) => {
  let digits = []; /*declares new array*/

  for (let i = 0; i < array.length; i++) {
    /*reverses new array everytime*/
    let reversed = [...array[i]].reverse().join("");
    /*concatenates the two strings*/
    let concatenateDigits = checkDigits(array[i]) + checkDigits(reversed);
    /* turns string back into integar and adds this to digits array*/
    digits.push(parseInt(concatenateDigits, 10));
  }

  return digits;
};

/*loops through string and checks if it matches any numbers*/
const checkDigits = (str) => {
  for (let j = 0; j < str.length; j++) {
    if (str[j] >= "0" && str[j] <= "9") {
      /* for loop breaks and returns the number found*/
      return str[j];
    }
  }
};

const sum = (arr) => {
  let total = 0;
  // calculate sum using forEach() method
  arr.forEach((num) => {
    total += num;
  });

  return total;
};

processFile();
