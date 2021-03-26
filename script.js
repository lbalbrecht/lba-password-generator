// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");



function generatePassword(){

    //lowercase letters
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var lower = alpha.split("");
    //uppercase letters
    var upperAlpha = alpha.toUpperCase();
    var upper = upperAlpha.split("");
    //numbers
    var numbers = "1234567890".split("");
    //special characters
    var special = "`~!@#$%^&*()_-+={[}|;:'<>?/".split("");
    //chosen characters
    var chosen = [];
    //confirm/prompt responses

      var lengthPrompt = prompt("How long would you like your password to be?");
    //set password to be between 8-128 characters
    if (8 <= lengthPrompt && lengthPrompt <= 128) {
      console.log(lengthPrompt);
    }

    else if (lengthPrompt === null) {
      return;
    }

    else {
      alert("Please enter a number between 8-128");
      return;
    }
  
  //confirm for all character types
    //lowercase
      var lowerConfirm = confirm("Would you like lowercase letters?");
      if (lowerConfirm === true) {
        lower.concat(chosen);
      }

    //uppercase
      var upperConfirm = confirm("Would you like uppercase letters?");
      if(upperConfirm === true) {
        upper.concat(chosen)
      }

    //numbers
      var numberConfirm = confirm("Would you like numbers?");
      if(numberConfirm === true) {
        numbers.concat(chosen)
      }
  
    //special
      var specialConfirm = confirm("Would you like special characters?");
      if(specialConfirm === true) {
        special.concat(chosen)
      }

    for (i = 0; i < lengthPrompt; i++) {
      var finalPassword = lower[Math.floor(Math.random() * lower.length)];
      console.log(finalPassword)
    }
    
    // console.log(chosen);
    return "supersecretpassword"
  }

// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);
