// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var retry = "";
var  options = {
  char: '',
  special: '',
  lower: '',
  upper: '',
  numbers: '',
};



// Function to prompt user for password options
function getPasswordOptions() {
  options.char = prompt("please enter a password length between 10 and 64")
    if(options.char >= 10 && options.char <= 64){
        options.special = confirm("would you like special characters")
        options.lower = confirm("would you like lower cases")
        options.upper = confirm("would you like uppper case")
        options.numbers = confirm("would you like numbers")
  }else {
    alert("please generate a new password your input was not valid")
    retry = "retry"
  }
      if((options.special === false && options.lower === false && options.upper === false &&  options.numbers === false)){
          alert("Please generate a new password it must have some characters")
          retry = "retry"
        }
  return options;
  }
// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
  
  
}


// Function to generate password with user input
function generatePassword() {
  let special ="";
  let lower ="";
  let upper ="";
  let numbers ="";
  let random =[""];
  let blank =[];

  getPasswordOptions()
  if(options.special === true){
    special = specialCharacters;
  }else{
    special = null
  }
  if(options.lower === true){
    lower = lowerCasedCharacters
  }else{
    lower = null
  }
  if(options.upper === true){
    upper = upperCasedCharacters
  }else{
    upper =null
  }
  if(options.numbers === true){
    numbers = numericCharacters
  }else{
    numbers = null
  }
  characters = blank.concat(special, lower, upper, numbers)
  
  
for(let i = 1; i < options.char; i++){
  
  random.push(getRandom(characters));
}



password = random.join("");
if(retry === "retry"){
  
}else{
  return password 
}
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
