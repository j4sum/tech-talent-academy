let temperature, condition, goToWork;

//assign value to temperature
temperature = 15;
console.log(`The temperature is ${temperature}`);

//store value for condition
condition = 'Cloudy';

/*
if (condition === 'Sunny') {
    console.log('It is Sunny');
} else if (condition === 'Cloudy') {
    console.log('It is Cloudy');
} else if (condition === 'Raining') {
    console.log('It is Raining');
} else if (condition === 'Snowing') {
    console.log('It is Snowing');
} else {
    console.log('There will be Thunder');
} 
*/


//case-switch statement displays a message based on the temperature detected
switch (condition) {
    case (temperature >= 10 && condition):
        console.log('go to work');
        break;
    case (temperature > 20 && condition):
        console.log('go to work');
        break;
    case (temperature > 30 && condition):
        console.log("it's too hot to work effectively");
        break;
    case (temperature < 10 && condition):
        console.log("it's too cold to work effectively");
        break;
    default:
        console.log("No temperature detected");
}

//if-else statement
if (temperature >= 10 && condition) {
    console.log('go to work');
} else if (temperature > 20 && condition) {
    console.log('go to work');
} else if (temperature > 30 && condition) {
    console.log("it's too hot to work effectively");
} else if (temperature < 10 && condition) {
    console.log("it's too hot to work effectively");
} else {
    console.log("No temperature detected");
}

// function goToWork(temperature, condition) {
//     return goToWork;
// }