//Amal Kariyawasam, 2022

/* This is
    the main
        JavaScript file for 
            this portfolio website */
// document.getElementById("time").innerHTML=Date();
// Following function will show time at page load
function time_function()
{
    document.getElementById("time").innerHTML=Date();

}

function page_version()
{
    document.getElementById("version").innerHTML="Content last updated on 30/10/2022"
}

time_function()
page_version()