// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength="";
var confirmNumber;
var confirmUpper;
var confirmLower;
var confirmSpecial;

function generatePassword(){
  var confirmLength = window.prompt ("How many characters would you like your password to be?");

  while (confirmLength <=7 || confirmLength >= 129) {
    alert("Password must be between 8 and 128 characters.");
    var confirmLength = (prompt("How many characters would you like your password to be?"));
  }
  alert('Your password will have ' + confirmLength + ' characters');
  
var confirmNumber = confirm("Click OK to confirm if you would like to include numbers in your password.");
var confirmLower = confirm("Cick OK to confirm if you would like to include lower case letters in your password.");
var confirmUpper = confirm("Click OK to confirm if you would like to include upper case letters.");
var confirmSpecial = confirm("Click OK to confirm in you would like to include special characters");
  while(confirmUpper === false && confirmLower === false && confirmSpecial === false && confirmNumber === false) {
    alert("You must choose at least one special option");
    var confirmSpecial = confirm("Click OK to include special characters");
    var confirmLower = confirm("Click OK to include lower case letters");
    var confirmUpper = confirm("Click OK to include upper case letters");
    var confirmNumber = confirm("click OK to include numeric value");
  }
  var passwordCharacters = []

  if (confirmSpecial) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }
  if (confirmNumber) {
    passwordCharacters = passwordCharacters.concat(number)
  }
  if (confirmUpper) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  }
  if (confirmLower) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
  }
  console.log(passwordCharacters)

  var randomPassword = ""

  for (var i=0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);