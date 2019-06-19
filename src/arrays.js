const getNthElement = (index, array) => {
  if (index >= array.length)
    { 
      return array[index -array.length];
    }
 
      return array[index];
  
};

const arrayToCSVString = (array) => {
  return array.join();
};

const csvStringToArray = (string) => {
  return string.split(',');
};

const addToArray = (element, array) => { array.push(element) };

const addToArray2 = (element, array) =>  array.concat(element);

const removeNthElement = (index, array) =>  array.splice(index, 1);
   

const numbersToStrings = (numbers) => numbers.map(num => String(num));

const uppercaseWordsInArray = (strings) =>  strings.map(element => element.toUpperCase());

const reverseWordsInArray = (strings) => 
{
  const reverseString = (word) => word.split("").reverse().join('');
  return strings.map(word => reverseString(word));
};


const onlyEven = (numbers) =>  numbers.filter(num => num % 2 === 0);

const removeNthElement2 = (index, array) =>    array.slice(0,2).concat(array.slice(3));


const elementsStartingWithAVowel = (strings) => {
  const regex = /^[aeiou].*/i
   return strings.filter(elem => regex.test(elem))
};

const removeSpaces = (string) => {
  return string.split(' ').join("");
};

const sumNumbers = (numbers) => {
  return numbers.reduce((total, num) => total + num );
};

const sortByLastLetter = (strings) => {
  return strings.sort((wordA, wordB) => wordA.charAt(wordA.length -1) - wordA.charAt(wordA.length -1))
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
