function showEdit(){
    const data = require("./workers.json");
    const checked = document.getElementsByName("selection");
    let i = 0;
    checked.forEach(element => {
    if(element.checked == true){
        i++;
    }
    });
    if(i == 0)
    {
        return;
    }
    if(i == 1){
        checked.forEach(check => {
            if(check.checked == true){
                data.forEach(element => {
                    if(element['id'] == check.id){
                        document.getElementById("name_edit").value = element['name'];
                        document.getElementById("surname_edit").value = element['surname'];
                        document.getElementById("workplace_edit").value = element['workplace'];
                        document.getElementById("company_edit").value = element['company'];
                        document.getElementById("startwork_edit").value = element['startwork'];
                        document.getElementById("stopwork_edit").value = element['stopwork'];
                        document.getElementById("startinsuarce_edit").value = element['startinsuarce'];
                        document.getElementById("stopinsuarce_edit").value = element['stopinsuarce'];
                        globalThis.id = check.id;
                    }
                });
            }
        });
        let editmenu = document.getElementsByClassName("edit_menu")[0];
        editmenu.style.display = "flex";
    }   
}

function edit(){
    var nameadd = document.getElementById('name_edit').value;
    var surnameadd = document.getElementById('surname_edit').value;
    var workplaceadd = document.getElementById('workplace_edit').value;
    var companyadd = document.getElementById('company_edit').value;
    var startworkadd = document.getElementById('startwork_edit').value;
    var stopworkadd = document.getElementById('stopwork_edit').value;
    var startinsuarceadd = document.getElementById('startinsuarce_edit').value;
    var stopinsuarceadd = document.getElementById('stopinsuarce_edit').value;
    data.forEach(element => {
        if(element['id'] == id){
            element['name'] = nameadd;
            element['surname'] = surnameadd;
            element['workplace'] = workplaceadd;
            element['company'] = companyadd;
            element['startwork'] = startworkadd;
            element['stopwork'] = stopworkadd;
            element['startinsuarce'] = startinsuarceadd;
            element['stopinsuarce'] = stopinsuarceadd;
        }
    });
    let editmenu = document.getElementsByClassName("edit_menu")[0];
    editmenu.style.display = "none";
    fs.writeFileSync("./workers.json", JSON.stringify(data));
    window.location.reload();
}

function hideEdit(){
    let editmenu = document.getElementsByClassName("edit_menu")[0];
    editmenu.style.display = "none";
}