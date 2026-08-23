console.log("Script Loaded")
let name = prompt("please enter your name");
alert("Hello, " + name );
let weightLifted = Number(prompt("Please enter a number of weights lifted."));
let repsPerformed = Number(prompt("Please enter the number of reps performed."));
let totalVolume = weightLifted * repsPerformed;
alert("total volume: " + totalVolume);
alert("Congratulations, " + name + "! " + "You have lifted a total volume of " + totalVolume);