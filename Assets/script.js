// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

function generatePassword() {
  // initial prompt for # of characterd
  var passwordLength = window.prompt("How many characters would you like your password to contain? (Range: 8-128 characters).");
  
  // if user presses cancel, ends function
  if (!passwordLength) {
    window.alert("Error: No value input. Try again.");
    var password = "Try Again";
    return password;
    return;

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
} else if (passwordLength > 8 && passwordLength < 128) {
    // ask to assign lowercase characters  
    var lowercaseSelect = window.confirm("Click OK to confirm including lowercase characters.");

    // ask to assign uppercase characters  
    var uppercaseSelect = window.confirm("Click OK to confirm including uppercase characters.");

    // ask to assign numeric characters  
    var numericSelect = window.confirm("Click OK to confirm including numeric characters.");
    
    // ask to assign special characters 
    var specialSelect = window.confirm("Click OK to confirm including special characters.");
        
    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters
    // creates an alert if char limit is outside range and restarts 
  } else {
    window.alert("Error: Password length must be 8-128 characters. Try again.");
    // generatePassword();
    password = "Try Again";
    return password;   
    return;
  }
  
  // assign character variables and methods
  var charOptions = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' `~!@#$%^&*()_-+=[]{}\'|;:",.<>?/'
  };
   

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // ----------------- all seclected -----------------
  if (lowercaseSelect && uppercaseSelect && numericSelect && specialSelect) {
    var charSelection = charOptions.lowercase + charOptions.uppercase + charOptions.numeric + charOptions.special;

    console.log("Your choice of characters are " + charSelection);
  
    // ----------------- 3 selected -----------------
  } else if (lowercaseSelect && uppercaseSelect && numericSelect && !specialSelect) {
    var charSelection = charOptions.lowercase + charOptions.uppercase + charOptions.numeric;

    console.log("Your choice of characters are " + charSelection);

  } else if (lowercaseSelect && uppercaseSelect && !numericSelect && specialSelect) {
    var charSelection = charOptions.lowercase + charOptions.uppercase + charOptions.special;

    console.log("Your choice of characters are " + charSelection);

  } else if (lowercaseSelect && !uppercaseSelect && numericSelect && specialSelect) {
    var charSelection = charOptions.lowercase + charOptions.numeric + charOptions.special;

    console.log("Your choice of characters are " + charSelection);

  } else if (!lowercaseSelect && uppercaseSelect && numericSelect && specialSelect) {
    var charSelection = charOptions.uppercase + charOptions.numeric + charOptions.special;

    console.log("Your choice of characters are " + charSelection);
  
    // ----------------- 2 selected -----------------
  } else if (!lowercaseSelect && !uppercaseSelect && numericSelect && specialSelect) {
    var charSelection = charOptions.numeric + charOptions.special;

    console.log("Your choice of characters are " + charSelection);

  } else if (!lowercaseSelect && uppercaseSelect && !numericSelect && specialSelect) {
    var charSelection = charOptions.uppercase + charOptions.special;

    console.log("Your choice of characters are " + charSelection);

  } else if (!lowercaseSelect && uppercaseSelect && numericSelect && !specialSelect) {
    var charSelection = charOptions.uppercase + charOptions.numeric;

    console.log("Your choice of characters are " + charSelection);

  } else if (lowercaseSelect && !uppercaseSelect && !numericSelect && specialSelect) {
    var charSelection = charOptions.lowercase + charOptions.special;

    console.log("Your choice of characters are " + charSelection);

  } else if (lowercaseSelect && !uppercaseSelect && numericSelect && !specialSelect) {
    var charSelection = charOptions.lowercase + charOptions.numeric;

    console.log("Your choice of characters are " + charSelection);
  
  } else if (lowercaseSelect && uppercaseSelect && !numericSelect && !specialSelect) {
    var charSelection = charOptions.lowercase + charOptions.uppercase;

    console.log("Your choice of characters are " + charSelection);

    // ----------------- 1 selected -----------------
  } else if (lowercaseSelect && !uppercaseSelect && !numericSelect && !specialSelect) {
    var charSelection = charOptions.lowercase;

    console.log("Your choice of characters are " + charSelection);

  } else if (!lowercaseSelect && uppercaseSelect && !numericSelect && !specialSelect) {
    var charSelection = charOptions.uppercase;

    console.log("Your choice of characters are " + charSelection);

  } else if (!lowercaseSelect && !uppercaseSelect && numericSelect && !specialSelect) {
    var charSelection = charOptions.numeric;

    console.log("Your choice of characters are " + charSelection);


  } else if (!lowercaseSelect && !uppercaseSelect && !numericSelect && specialSelect) {
    var charSelection = charOptions.special;

    console.log("Your choice of characters are " + charSelection);

  } 
  
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // The following was adapted from https://stackoverflow.com/questions/62627469/random-password-generator-with-prompts
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += charSelection.charAt(Math.floor(Math.random() * charSelection.length));
  }
  
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  // The following was adapted from https://stackoverflow.com/questions/62627469/random-password-generator-with-prompts
  console.log("Your newly generated password is " + password);
  return password;
  
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
