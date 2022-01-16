// Assignment code here
var generatePassword = function(){
    conditionPrompt= parseInt(conditionPrompt);
    var conditionPrompt = window.prompt("What conditions would you like for your secure password? Please enter one: 1.Capital Letters, 2. Special Characters, 3. 8 or more characters, 4. Capital letters and special characters, 5. Eight or more characters and special characters, 6. Eight or more characters and capital letters, 7. All conditions")
    //creating a switch dependent on user input
    switch (conditionPrompt){
        case 1: 
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5: 
            break;
        case 6: 
            break;
        case 7:
            break;
        default:
            window.alert("You did not pick a valid response. Please enter 1 for capital letters, 2 for special characters, 3 for 8 or more characters, 4 for capital letters and special characters, 5 for special characters and eight or more characters")
    }
}


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
