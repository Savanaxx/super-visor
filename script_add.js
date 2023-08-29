const data = require("./workers.json");
require("./script_load.js");
require("./script_menu.js");
function addWorker()
{
    let tempVal = 0;
    let tempArray= [];
    let check = true;
    data.forEach(element => {
        tempArray.push(element['id']);
    });
    while(check == true){
    if(tempArray.includes(tempVal)){
        tempVal++;
    }
    else{
        check = false;
    }
    }
    

var nameadd = document.getElementById('name').value;
var surnameadd = document.getElementById('surname').value;
var workplaceadd = document.getElementById('workplace').value;
var companyadd = document.getElementById('company').value;
var startworkadd = document.getElementById('startwork').value;
var stopworkadd = document.getElementById('stopwork').value;
var startinsuarceadd = document.getElementById('startinsuarce').value;
var stopinsuarceadd = document.getElementById('stopinsuarce').value;
var id = tempVal;
if(startworkadd > stopworkadd)
{
    document.getElementById('startwork').value = '';
    document.getElementById('stopwork').value = '';
    alert("Data rozpoczęcia pracy nie może być późniejsza niż zakończenia");
}
else{
    stop
}
if(startinsuarceadd > stopinsuarceadd)
{
    document.getElementById('startinsuarce').value = '';
    document.getElementById('stopinsuarce').value = '';
    alert("Data wykoniania badań nie może być późniejsza niż zakończenia");
}
else{
    stop
}
let worker = {
    id: id,
    name: nameadd,
    surname: surnameadd,
    workplace: workplaceadd,
    company: companyadd,
    startwork: startworkadd,
    stopwork: stopworkadd,
    startinsuarce: startinsuarceadd,
    stopinsuarce: stopinsuarceadd,
}
data.push(worker);
fs.writeFileSync("./workers.json", JSON.stringify(data));
var menu = document.getElementsByClassName("add_menu")[0];
menu.style.display = "none";
loadNew();
}