// Assignment Code
var generateBtn = document.querySelector("#generate");
var outPutbox = document.querySelector("#password");

function generatePassword() {


  document.getElementById("password").value = "";
  // Sets the possible password values
  var complexity = prompt("Choose how long your password should be between 8 and 128 characters.");
  
  let useUpperCase = confirm("Would you like to use upper case characters in your password?");
  let useLowerCase = confirm("Would you like to use lower case characters in your password?");
  let useNumbers = confirm("Would you like to use numbers in your password?");
  let useSymbols = confirm("Would you like to use special characters such as !, @, and # in your password?");

  const characters = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()-_=+"
  }
  
  var allowed = "";

  if (complexity >= 8 && complexity <= 128 && complexity) {      
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
    for (var i = 0; i <= complexity - 1; i++) {
      password += allowed.charAt(Math.floor(Math.random() * Math.floor(allowed.length - 1)));
    }
    return password;
  } else {
    return password = "Check Password Length";
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

function copyOutput() {
  outPutbox.select();
  document.execCommand('copy');
  alert("Password Copied to Clipboard");
}

// Add event listener to generate button
generateBtn.addEventListener("click", clearOutput);
generateBtn.addEventListener("click", writePassword);
outPutbox.addEventListener("click", copyOutput);
console.log("V4");