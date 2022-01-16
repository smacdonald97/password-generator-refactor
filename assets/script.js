// Assignment code here
//Adding the constants for password generation
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "!@#$%^&*_-+=";




var generatePassword = function(){
    //length variable for security purposes
    var length = 8;
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
        charset = "!@#$%^&*-_+="
        //stack overflow taught me about the return value!
        retval = " "
    for (var i= 0, n=charset.length; i<length; ++i)
        return retval;
    //creating a conditionPrompt that can read integer input
    conditionPrompt= parseInt(conditionPrompt);
    var conditionPrompt = window.prompt("What conditions would you like for your secure password? Please enter one: 1.Capital Letters, 2. Special Characters, 3. Capital letters and special characters, 4. All conditions")
    //creating a switch dependent on user input for password conditions
    switch (conditionPrompt){
        case 1: 
            length
            charset= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
            break;
        case 2:
            length
            charset= "!@#$%^&*-_+="
            break;
        case 3:
            length
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*-_+="
            break;
        case 4:
            length
            charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*-_+="
            break;
        default:
            window.alert("You did not pick a valid response. Please enter 1 for capital letters, 2 for special characters, 3 for capital letters and special characters, 4 for all conditions")
    }
}

generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
