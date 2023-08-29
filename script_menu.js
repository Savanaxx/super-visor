var checkhidden = require("./workers.json");
if(checkhidden.length == 0)
{
  document.getElementsByClassName("grid_app")[0].style.display = "none";
}


function showMenu(){
    var menu = document.getElementsByClassName("add_menu")[0];
    menu.style.display = "flex";
  }

function hideMenu(){
    var menu = document.getElementsByClassName("add_menu")[0];
    menu.style.display = "none";
    var name = document.getElementById("name");
    var surname = document.getElementById("surname");
    var workplace = document.getElementById("workplace");
    var company = document.getElementById('company');
    var startwork = document.getElementById("startwork");
    var stopwork= document.getElementById("stopwork");
    var startinsuarce = document.getElementById("startinsuarce");
    var stopinsuarce = document.getElementById("stopinsuarce");
    name.value = "";
    surname.value = "";
    workplace.value = "";
    company.value = "";
    startwork.value = "";
    stopwork.value = "";
    startinsuarce.value = "";
    stopinsuarce.value = "";
}

function clearMenu(){
    var name = document.getElementById("name");
    var surname = document.getElementById("surname");
    var workplace = document.getElementById("workplace");
    var company = document.getElementById('company');
    var startwork = document.getElementById("startwork");
    var stopwork= document.getElementById("stopwork");
    var startinsuarce = document.getElementById("startinsuarce");
    var stopinsuarce = document.getElementById("stopinsuarce");
    name.value = "";
    surname.value = "";
    workplace.value = "";
    company.value = "";
    startwork.value = "";
    stopwork.value = "";
    startinsuarce.value = "";
    stopinsuarce.value = "";
}