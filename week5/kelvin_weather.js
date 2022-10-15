const kelvin = 293; //constant variable and cannot be changed
let celsius = kelvin - 273; //convert kelvin to celsius
let fahrenheit = Math.floor(celsius * (9 / 5) + 32); //calculate fahrenheit, round it to the largest integer and store result in variable fahrenheit
console.log(`The temperature is ${fahrenheit} degree Fahrenheit`); //string interpolation to embed fahrenheit variable in the string