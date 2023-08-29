const fs = window.require('fs');
function checkInfo(){
const data = require("./workers.json");
const info = document.getElementsByName('selection');
for(i = 0; i < info.length; i++)
{
    if (info[i].checked == true){
        delete data[i];
        var filtered = data.filter(elm => elm);
        fs.writeFileSync("./workers.json", JSON.stringify(filtered));
    }

}
location.reload();
}