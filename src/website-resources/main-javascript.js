//This is the main JavaScript file

//ES Module Imports
//Following will import the CSS file used to style the project
import "./main-style-sheet.css";

function time_function() {
  document.getElementById("time").textContent = Date();
}

function page_version() {
  document.getElementById("version").textContent =
    "Website updated on: 24/12/2023";
}

time_function();
page_version();
