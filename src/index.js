import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { countVowels } from './js/haikuChecker';

// count lines in input
function handleFormSubmission(event) {
  event.preventDefault();
  let line1 = document.getElementById("line1").value;
  let line2 = document.getElementById("line2").value;
  let line3 = document.getElementById("line3").value;
  const one = countVowels(line1);
  const two = countVowels(line2);
  const three = countVowels(line3);
  let div = document.getElementById("results");

  if (one && three === 5 && two === 7) {
    div.innerText = "DUUUUDE!!! You did it! Hell yeah! Rad haiku!!!";
  } else {
    div.innerText = "ABSOLUTELY NOT A HAIKU";
  }
}

// count vowels in lines

window.addEventListener("load", function() {
  document.getElementById("haiku-form").addEventListener("submit", handleFormSubmission);
});