const prompt = require('prompt-sync')();

const speed= parseInt(prompt('Please enter car speed:' ))

function speedDetectors() {
//we first get a message "ok" if the driver is observing the speed limit
if (speed<70){
    console.log("Ok")
}
//If the driver exceeds,the code below calculates his counter points
else { 
    console.log('points:'+((speed-70)/5));
    //If the driver's counter points exceed the limit of 12,his lisence gets suspended
    if (((speed-70)/5)>12)
    console.log("License suspended")
}

}
console.log (speedDetectors())
