import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { countSyllables } from './js/haikuChecker';

// count lines in input
// count vowels in lines

function handleFormSubmission(event) {
  event.preventDefault();
  let line1 = document.getElementById("line1").value;
  let line2 = document.getElementById("line2").value;
  let line3 = document.getElementById("line3").value;
  const one = countSyllables(line1);
  const two = countSyllables(line2);
  const three = countSyllables(line3);
  let div = document.getElementById("results");

  console.log(one);
  console.log(two);
  console.log(three);

  const useTheRegEx = (line) => {
    const matches = line.match(/[^aeiou]?[aeiouy]+([^aeiou]?(?=\b || ?=[^aeiou])[e]?)/ig);
    return matches.length;
  };
  useTheRegEx('negative four for tree');
  
  if (one && three === 5 && two === 7) {
    div.innerText = "DUUUUDE!!! You did it! Hell yeah! Rad haiku!!!";
  } else {
    div.innerText = "ABSOLUTELY NOT A HAIKU";
  }
}

window.addEventListener("load", function() {
  document.getElementById("haiku-form").addEventListener("submit", handleFormSubmission);
});