function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

// function analyseForm() {
//     window.alert(document.getElementById('title').value + " " + document.getElementById('author').value + " " + document.getElementById('blog').value);

//     window.alert("Your email " + document.getElementById('email').value + " has been added to the mailing list." + " " + "Your Subject " + document.getElementByID('subject').value);
// }

var x = document.getElementById("form");
var createform = document.createElement('newPost'); // Create New Element Form
x.appendChild(createform);

var heading = document.createElement('h1'); // Heading of Form
heading.innerHTML = "NEW POST";
createform.appendChild(heading);