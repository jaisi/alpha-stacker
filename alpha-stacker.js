// Create an array that contains the letters of the alphabet
var alphabet = ["a","b","c","d", "e", "f", "g", "h", "i", "j", "k", "l"];

// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
     var j = "";
     for(i=0;i<theAlphabetArray.length;i++)
     {
     	
     	
     	k = i%3;
     	if (k === 0)
     	{
     		j += " ";
     	}
     	j += theAlphabetArray[i];

     	console.log(j);
     }
}

// Invoke the function and pass in the array
stackLetters(alphabet)