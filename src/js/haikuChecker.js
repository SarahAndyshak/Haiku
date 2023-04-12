//Count Vowels in a String
export const countVowels = (string) => {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i].toLowerCase()) !== -1) {
      counter++;
    }
  }
  return counter;
};

export const countDif = (string) => {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    const nextChar = string[i + 1];
    if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
      counter++;
    }
  }
  return counter;
};

export const hiddenVowel = (string) => {
  const vowels = ["e"];
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    const nextChar = string[i + 1];
    const lastChar = string.charAt(string.length - 1);
    if (vowels.includes(currentChar) && (nextChar === " ")) {
      counter++;
    }
    if (lastChar.includes(vowels) && !nextChar) {
      counter++;
    }
  }
  return counter;
};

export const silentCandle = (string) => {
  let counter = 0;
  const splitString = string.split(" ");
  splitString.forEach(word => {
    if (word.endsWith('le')) {
      counter++;
    }
  });
  return counter;
};

export const silentEs = (string) => {
  let counter = 0;
  const splitString = string.split(" ");
  splitString.forEach(word => {
    if (word.endsWith('hes')) {
      counter--;
    }
    if (word.endsWith('xes')){
      counter--;
    }
    if (word.endsWith('ses')){
      counter--;
    }
    if (word.endsWith('es')) {
      counter++;
    }
  }); 
  return counter;
};

export const countSyllables = (string) => {
  return countVowels(string) - countDif(string) - hiddenVowel(string) + silentCandle(string) - silentEs(string);
};