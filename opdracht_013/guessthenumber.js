function myFunction() {
    var person = prompt("Welkom! Wat is je naam?", "Enter here");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hey " + person + "!";
    }
  };

// random value generated
let y = Math.floor(Math.random() * 25 + 1);
      
// counting the number of guesses
// made for correct Guess
let guess = 1;
  
document.getElementById("submitguess").onclick = function(){
  
// number guessed by user     
let x = document.getElementById("guessField").value;

if(x == y) {    
   alert("Yes! je hebt het goed in " + guess + " pogingen!");
}
else if(x > y) /* if guessed number is greater
               than actual number*/ 
{    
   guess++;
   alert("Oeps! Probeer kleiner..");
} else {
   guess++;
   alert("Oeps! Probeer groter..")
};
}

