//The prompt function
const prompt = require('prompt-sync')();
//Prompts the user to enter marks
const marks = parseInt(prompt('Please enter a value between 0 and 100: '))
//conditional statements to assign grades according to the marks
function grades(){
  

 if (marks>79 && marks < 100) {
     console.log ('Your grade is A')}

 else if (marks>60&&marks<=79){
    console.log('Your grade is B')
}

else if (marks>=49 && marks<=59) {
    console.log('Your mark is C')
}

    else if (marks>=40&& marks<=49){
        console.log('Your mark is D')}


     else if(marks> 0 && marks<40 ) {
        console.log('Your mark is E')
}
}
console.log(grades())
