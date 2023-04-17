// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

function generatePassword() {
  // initial prompt for # of characterd
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  
  // if user presses cancel, ends function
  if (!passwordLength) {
    return;

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  } else if (passwordLength > 8 && passwordLength < 128) {

    // ------------ ask and assign lowercase characters ------------ 
    var lowercaseSelect = window.confirm("Click OK to confirm including lowercase characters.");
      if (lowercaseSelect) {
        // The following is adapted from https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript
        var lowercaseCharList = "abcdefghijklmnopqrstuvwxyz"
        var lowercaseCharChoice = lowercaseCharList[Math.floor(Math.random() * lowercaseCharList.length)];

        console.log(lowercaseCharList);
        console.log(lowercaseCharChoice);

      } else {
        lowercaseCharList = undefined;

        console.log(lowercaseCharList);
        console.log(typeof lowercaseCharList);
      }

    // ------------ ask and assign uppercase characters ------------ 
    var uppercaseSelect = window.confirm("Click OK to confirm including uppercase characters.");
      if (uppercaseSelect) {
        // The following is adapted from https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript
        var uppercaseCharList = lowercaseCharList.toUpperCase();
        var uppercaseCharChoice = uppercaseCharList[Math.floor(Math.random() * uppercaseCharList.length)];

        console.log(uppercaseCharList);
        console.log(uppercaseCharChoice);

      } else {
        uppercaseCharList = undefined;

        console.log(uppercaseCharList);
        console.log(typeof uppercaseCharList);
      }

    // ------------ ask and assign numeric characters ------------ 
    var numericSelect = window.confirm("Click OK to confirm including numeric characters.");
      if (numericSelect) {
        // The following is adapted from https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript
        var numericCharList = "0123456789";
        var numericCharChoice = numericCharList[Math.floor(Math.random() * numericCharList.length)];

        console.log(numericCharList);
        console.log(numericCharChoice);        

      } else {
        numericCharList = undefined;

        console.log(numericCharList);
        console.log(typeof numericCharList);
      }
    
    // ------------ ask and assign special characters ------------ 
    var specialSelect = window.confirm("Click OK to confirm including special characters.");
      if (specialSelect) {
        // The following is adapted from https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript
        var specialCharList = "!@#$%^&*()_+~`-=[]\{}|;:'<>?,./";
        var specialCharChoice = specialCharList[Math.floor(Math.random() * specialCharList.length)];
        
        console.log(specialCharList);
        console.log(specialCharChoice);  

      } else {
        specialCharList = undefined;

        console.log(specialCharList);
        console.log(typeof specialCharList);
      }
    
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // creates an alert if char limit is outside range and restarts 
  } else {
    window.alert("Error: Password length must be greater than 8 characters and less than 128 characters. Try again.");
    generatePassword();
  }
  
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria

  
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

  
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
