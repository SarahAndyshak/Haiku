//Count Vowels in a String
export const countVowels = (string) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  for (let i = 0; i < string.length; i++){
    if(vowels.indexOf(string[i].toLowerCase()) !== -1){
      counter++;
    }
  }
  return counter;
};

