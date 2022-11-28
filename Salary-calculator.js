//The prompt function
const prompt = require('prompt-sync')();
//The function below prompts the user to enter salary
const grossPay= parseInt(prompt('Please enter gross salary:' ))
//The function below prompts the user to enter their benefits
const Benefits= parseInt(prompt('Please enter Benefits:' ))
//The fnction prompts the user to enter thier pensionable pay
const pensionablePay= parseInt(prompt('Please enter pensionable pay:' ))

//Function to calculate the tax payable 
function PAYETAX(){
    if (grossPay<=24000){
        console.log(`Tax:`,grossPay *0.01)
    }
    if ( grossPay>24000 && grossPay<=32333){
        console.log(`Tax:`,grossPay *0.25)
    }
    if (grossPay>32333){
        console.log(`Tax:`,grossPay *0.30)
    }
}
      console.log(PAYETAX()) 
 

//function to calculate the NHIF to be deducted

function NHIFDeduction(){
    if (grossPay>0 && grossPay<5999){
        console.log(`NHIFDeduction:`,150)}
  if (grossPay>=6000 && grossPay<=7999){
    console.log(`NHIFDeduction:`,300)
}
if (grossPay>=8000 && grossPay<=11999){
    console.log(`NHIFDeduction:`,400)
}
if (grossPay>=12000 && grossPay<=14999){
    console.log(`NHIFDeduction:`,500)}
    if (grossPay>=15000 && grossPay<=19999){
        console.log(`NHIFDeduction:`,600)}
        if (grossPay>=20000 && grossPay<=24999){
            console.log(`NHIFDeduction:`,750)}
            if (grossPay>=25000 && grossPay<=29999){
                console.log(`NHIFDeduction:`,850)}
                if (grossPay>=30000 && grossPay<=39999){
                    console.log(`NHIFDeduction:`,900)}
                    if (grossPay>=35000 && grossPay<=39999){
                        console.log(`NHIFDeduction:`,950)}
                        if (grossPay>=40000 && grossPay<=44999){
                            console.log(`NHIFDeduction:`,1000)}
                            if (grossPay>=45000 && grossPay<=49999){
                                console.log(`NHIFDeduction:`,1100)}
                                if (grossPay>=45000 && grossPay<=49999){
                                    console.log(`NHIFDeduction:`,1100)}
                                    if (grossPay>=500000 && grossPay<=59999){
                                        console.log(`NHIFDeduction:`,1200)}
                                        if (grossPay>=60000 && grossPay<=69999){
                                            console.log(`NHIFDeduction:`,1300)}
                                            if (grossPay>=70000 && grossPay<=79999){
                                                console.log(`NHIFDeduction:`,1400)}
                                                  if (grossPay>=800000 && grossPay<=89999){
                                                        console.log(`NHIFDeduction:`,1500)}
                                                        if (grossPay>=90000 && grossPay<=99999){
                                                            console.log(`NHIFDeduction:`,1600)}
                                                            if (grossPay>=100000){
                                                                console.log(`NHIFDeduction:`,1700)}}
console.log (NHIFDeduction())
 //The function that calculates the NSSF to be deducted                                                           
function NSSFDeduction(){
    console.log(`NSSFDeduction:`, grossPay * 0.06)
}
console.log(NSSFDeduction())
//The function to calculate the net salary
function NetSalary(){
    console.log(`NetSalary:`,grossPay + (Benefits) - (pensionablePay) - (grossPay * 0.06)-(NHIFDeduction))
}

console.log(NetSalary());
    