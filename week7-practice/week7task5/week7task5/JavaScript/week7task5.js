function analyseForm(){
    //creating a variable to store the output from the For loop
    let wageValues = document.getElementsByName("wage");

    //Creating a for loop to go through the Radio buttons
    for (var i = 0; i < wageValues.length; i++){
        if (wageValues[i].checked){
            console.log(wageValues[i].value);
            //created a new variable to store the output of the For loop
            radioButton = wageValues[i].value;
            break;
        }
    }
    // to insert a newline use \n 
    window.alert("The minimum wage for the age range selected is: " + radioButton);
}

//Function for check box
function hideUnhide(){
    let elem = document.getElementById('edit_p');
    if (elem.hidden){
        elem.hidden = false;
    } else {
        elem.hidden = true;
    }
}