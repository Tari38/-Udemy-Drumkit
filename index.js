const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-sam:acerK222HQL@drumkit-cluster-bckjc.mongodb.net/index", {useNewUrlParser: true}, {useUnifiedTopology: true});


app.get("*", function() {

const numberOfDrumButtons = document.querySelectorAll(".drum").length;

 for (const i = 0; i <numberOfDrumButtons; i++) {
//Detecting Button press
   document.querySelectorAll(".drum")[i].addEventListener("click", function() {

     const buttonInnerHTML = this.innerHTML;

     makeSound(buttonInnerHTML);

     buttonAnimation(buttonInnerHTML);

   })

 }

//Detecting keyboard press

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {

  switch (key) {
    case "w":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
        break;

    case "a":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
        break;

    case "s":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
        break;

    case "d":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
        break;

    case "j":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
        break;

    case "k":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
        break;

    case "l":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
        break;
}
}

function buttonAnimation(currentKey) {

    const activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
}
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function() {
  console.log("Server has started successfully.");
});
