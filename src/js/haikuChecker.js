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
    const prevChar = string[i - 1];
    if ((!nextChar || nextChar === ' ') && vowels.includes(currentChar) && vowels.includes(prevChar)) {
      counter--;
    } else if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
      counter++;
    }
  }
  return counter;
};

// edge cases
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

// edge cases: 2-letter words ending in "e", words ending in "he" (the, she), "three" and "thee", also "me", etc

export const silentCandle = (string) => {
  let counter = 0;
  const splitString = string.split(" ");
  splitString.forEach(word => {
    if (word.endsWith('le')) {
      counter++;
    }
    // if (word.endsWith('es')) {
    //   counter--;
    // }
  });
  return counter;
};

export const silentEs = (string) => {
  let counter = 0;
  const splitString = string.split(" ");
  splitString.forEach(word => {
    if (word.endsWith('nes')){
      counter--;
    }
    // if (word.endsWith('ees')){
    //   counter++;
    // }
  });
  return counter; 
};

//   return counter;
// };export const silentEs = (string) => {
//   let counter = 0;
//   const splitString = string.split(" ");
//   splitString.forEach(word => {
//     if (word.endsWith('hes')) {
//       counter++;
//     }
//     if (word.endsWith('xes')){
//       counter++;
//     }
//     if (word.endsWith('ses')){
//       counter++;
//     }
//     // if (word.endsWith('les')){
//     //   counter++;
//     // }
//     if (word.endsWith('ee')){
//       counter--;
//     }
//     // if (word.endsWith('ees')) {
//     //   counter++;
//     // }
//   }); 
//   return counter;
// };

export const shortWords = (string) => {
  let counter = 0;
  // let vowels = ["e"];
  let otherVowels = ["a", "i", "o", "u", "y"];
  const splitString = string.split(" ");
  splitString.forEach(word => {
    if (word.length <= 3 && word.endsWith(otherVowels)) {
      counter--;
    }
    // if (word.length <= 3 && word.endsWith(vowels)) {
    //   counter++;
    // }
  });
  return counter;
};

export const countSyllables = (string) => {
  return countVowels(string) - countDif(string) - hiddenVowel(string) + silentCandle(string)- shortWords(string) + silentEs(string);
};

// A syllable is formed by at least one vowel (a, e, i, o, u). and y
// Divide the syllable between two same consonants.
// Divide between two vowels that make two sounds. edge case: preexisting
// Use prefixes and suffixes to separate syllables.
// Compound nouns are always divided between the two words.