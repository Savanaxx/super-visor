function info(id){
    let infomenu = document.getElementsByClassName("info_menu")[0];
    infomenu.style.display = "block";
    const data = require("./workers.json");
    data.forEach(element => {
        if(element['id'] == id){
            document.getElementById("name_info").innerText = element['name'];
            document.getElementById("surname_info").innerText = element['surname'];
            document.getElementById("workplace_info").innerText = element['workplace'];
            document.getElementById("company_info").innerText = element['company'];
            document.getElementById("startwork_info").innerText = element['startwork'];
            document.getElementById("stopwork_info").innerText = element['stopwork'];
            document.getElementById("startinsuarce_info").innerText = element['startinsuarce'];
            document.getElementById("stopinsuarce_info").innerText = element['stopinsuarce'];
        }
    });
    
}

function hideInfo(){
    let infomenu = document.getElementsByClassName("info_menu")[0];
    infomenu.style.display = "none";
}