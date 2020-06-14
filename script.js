// Assignment Code
var generateBtn = document.querySelector("#generate");
var outPutbox = document.querySelector("#password");

function generatePassword() {
  
  // Sets the possible password length
  var complexity = prompt("Choose how long your password should be between 8 and 128 characters.");

  // Creates confirm prompts and stores the values for use later in the document
  let useUpperCase = confirm("Would you like to use upper case characters in your password?");
  let useLowerCase = confirm("Would you like to use lower case characters in your password?");
  let useNumbers = confirm("Would you like to use numbers in your password?");
  let useSymbols = confirm("Would you like to use special characters such as !, @, and # in your password?");

  // Objects containing multiple strings of possible characters
  const characters = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()-_=+"
  }
  
  // Sets a blank variable for use later in the document
  var allowed = "";

  // If else statement determining if length of password is within the criteria
  if (complexity >= 8 && complexity <= 128 && complexity) {    
    //Multiple if statements to add characters from the object into the allowed variable for use later determining what characters to create the password from  
    if (useLowerCase || useLowerCase || useNumbers || useSymbols) {
      if (useUpperCase) {
        allowed += characters.upperCase;
      }
      if (useLowerCase) {
        allowed += characters.lowerCase;
      }
      if (useNumbers) {
        allowed += characters.numbers;
      }
      if (useSymbols) {
        allowed += characters.symbols;
      }
    } else {
      return password = "You need to choose atleast one option";
    }
    // For loop to randomly pick characters from the allowed variable
    for (var i = 0; i <= complexity - 1; i++) {
      password += allowed.charAt(Math.floor(Math.random() * Math.floor(allowed.length - 1)));
    }
    // Returns the randomly generated password to the passwordText element
    return password;
  } else {
    // Returns that the requested password does not meet length criteria and must be changed
    return password = "Check Password Length! Must be between 8 and 128 characters! You chose " + complexity + " characters";
  }
};

// Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  password = password.replace('[object HTMLTextAreaElement]', '');
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Clears previous password from output
function clearOutput() {
  password = password.replace(password, '');
}

// Copies the output when you click on the passwordText textarea
function copyOutput() {
  outPutbox.select();
  document.execCommand('copy');
  alert("Password Copied to Clipboard");
}

// Add event listener to generate button
generateBtn.addEventListener("click", clearOutput);
generateBtn.addEventListener("click", writePassword);
outPutbox.addEventListener("click", copyOutput);
console.log("V5");
