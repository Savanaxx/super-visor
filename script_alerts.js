setInterval("checkAlert()", 8.64e+7);
function checkAlert(){
const time = new Date();
const day = time.getDate();
const month = time.getMonth() + 1;
const year = time.getFullYear();
const data = require("./workers.json");
data.forEach(element => {
    let stopworkdate = JSON.stringify(element['stopwork']);
    stopworkdate = stopworkdate.replaceAll('"', '');
    stopworkdate = stopworkdate.split('-');
    if(stopworkdate[0] - year> 0){
        return;
    }
    if(stopworkdate[1] - month > 0){
        return;
    }
    if(stopworkdate[2] - day > 7){
        return;
    }
    else if(stopworkdate[2] - day < 7 && stopworkdate[1] - month <= 0){
        try{
            if(document.getElementsByClassName('--alertsw')[0].id == element['id'])
            {
                document.getElementsByClassName("--info")[0].style.animation = "pulse 2.5s linear infinite forwards";
                windowAlertSW(element);
            }
            else
            {
                firstAddSw(element, stopworkdate, day);
            }
        }
        catch (err){
            firstAddSw(element, stopworkdate, day);
        }
    }
});
data.forEach(element => {
    let stopinsuarcedate = JSON.stringify(element['stopinsuarce']);
    stopinsuarcedate = stopinsuarcedate.replaceAll('"', '');
    stopinsuarcedate = stopinsuarcedate.split('-');
    if(stopinsuarcedate[0] - year > 0){
        return;
    }
    if(stopinsuarcedate[1] - month > 0){
        return;
    }
    if(stopinsuarcedate[2] - day > 7){
        return;
    }
    else if(stopinsuarcedate[2] - day < 7 && stopinsuarcedate[1] - month <= 0){
        try{

            if(document.getElementsByClassName('--alertin')[0].id == element['id'])
            {
                document.getElementsByClassName("--info")[0].style.animation = "pulse 2.5s linear infinite forwards";
                windowAlertIN(element);
            }
            else
            {
                firstAddIn(element, stopinsuarcedate, day);
            }
        }
        catch (err){
            firstAddIn(element, stopinsuarcedate, day);
        }
    }
});
}
function firstAddSw(element, stopworkdate, day){
    document.getElementsByClassName("--info")[0].style.animation = "pulse 2.5s linear infinite forwards";
    console.log("stworzono!1")
    const section = document.getElementsByClassName("--inside_alert")[0];
    const p = document.createElement("p");
    p.className = "--alertsw";
    p.id = element.id;
    let text = (element["name"] + " " + element["surname"] + " kończy się umowa zatrudnienia za: " + (stopworkdate[2] - day) + " dni");
    p.innerText = text;
    section.appendChild(p);
    document.getElementsByClassName("--default_alert")[0].style.display = "none";
    document.getElementsByClassName("--info")[0].style.animation = "pulse 2.5s linear infinite forwards";
    windowAlertSW(element);
}

function firstAddIn(element, stopinsuarcedate, day){
    document.getElementsByClassName("--info")[0].style.animation = "pulse 2.5s linear infinite forwards";
    console.log("stworzono!2")
    const section = document.getElementsByClassName("--inside_alert")[0];
    const p = document.createElement("p");
    p.className = "--alertin";
    p.id = element.id;
    let text = (element["name"] + " " + element["surname"] + " kończą się badania lekarskie za: " + (stopinsuarcedate[2] - day) + " dni");
    p.innerText = text;
    section.appendChild(p);
    document.getElementsByClassName("--default_alert")[0].style.display = "none";
    document.getElementsByClassName("--info")[0].style.animation = "pulse 2.5s linear infinite forwards";
    windowAlertIN(element);
}

function showAlert(){
    let alertmenu = document.getElementsByClassName("alert_menu")[0];
    alertmenu.style.display = "block";
}

function hideAlert(){
    let alertmenu = document.getElementsByClassName("alert_menu")[0];
    alertmenu.style.display = "none";
}

function windowAlertSW(element){
    const NOTIFICATION_TITLE_SW = 'Kończy sie umowa o pracę!';
    const NOTIFICATION_BODY_SW = "Umowa" + " " + element['name'] + " " + element['surname'] + " kończy się!";
    new Notification(NOTIFICATION_TITLE_SW, {body: NOTIFICATION_BODY_SW });
  
  }
  
  function windowAlertIN(element){
    const NOTIFICATION_TITLE_IN = 'Kończą się badania lekarskie!';
    const NOTIFICATION_BODY_IN = "Badania lekarskie" +" "+ element['name'] + " " + element['surname'] + " kończą się!";
    new Notification(NOTIFICATION_TITLE_IN, {body: NOTIFICATION_BODY_IN });
  }