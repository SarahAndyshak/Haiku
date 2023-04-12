//Count Vowels in a String
export const countVowels = (string) => {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  let counter = 0;
  for (let i = 0; i < string.length; i++){
    if(vowels.indexOf(string[i].toLowerCase()) !== -1){
      counter++;
    }
  }
  return counter;
};

// export const countDif = (string) => {
//   const difVowels = ["oo", "ui", "ea", "ay", "ae", "oi", "ou", "oa", "ee", "ai", "oy", "ey", "ye", "ei", "you" ,"ya"];
//   let counter = 0;
//   for (let i = 0; i < string.length; i++){
//     if(difVowels.indexOf(string[i].toLowerCase()) !== -1){
//       counter++;
//     }
//   }
//   return counter;
// };

export const countDif = (string) => {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  let counter = 0;
  for (let i = 0; i < string.length; i++){
    const currentChar = string[i];
    const nextChar = string[i + 1];
    if(vowels.includes(currentChar) && vowels.includes(nextChar)){
      counter++;
    }
  }
  return counter;
};

// export const countDif = (string) => {
//   const result = (/[aeiouy][aeiouy]/gi)
// }


export const countSyllables = (string) => {
  return countVowels(string) - countDif(string);
};