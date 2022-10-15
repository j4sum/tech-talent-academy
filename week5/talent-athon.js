let raceNumber = Math.floor(Math.random() * 1000); //race numbers are randomly generated
let registeredEarly = true; //runner registered early returns true
let runnerAge = 21; //runner's age is equal to 18

//if runner is an adult and registered early add 1000 to their raceNumber 
if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;
}

//if else statements to check age and registration time to determine race time
if (runnerAge > 18 && registeredEarly) {
    console.log(`Race number: ${raceNumber}, Early adults run at 9:30 am`);
} else if (runnerAge > 18 && !registeredEarly) {
    console.log(`Race number: ${raceNumber}, Late adults run at 11:00 am`);
} else if (runnerAge < 18) {
    console.log(`Race number: ${raceNumber}, Youth registrants run at 12:30 pm (regardless of registration)`);
} else {
    console.log('see the registration desk');
}