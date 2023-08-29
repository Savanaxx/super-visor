


let result = [];
try{
        require('./workers.json');
      }
      catch(err){
        fs.writeFileSync('workers.json', JSON.stringify(result));
      }
      
function load()
{
const data = require("./workers.json");
for(i = 0; i < data.length; i++)
{
      const checkboxid = document.createElement('section');
      const name = document.createElement('section');
      const surname = document.createElement('section');
      const company = document.createElement('section');
      const workplace = document.createElement('section');
      const more = document.createElement('section');
      var id = data[i]['id'];
      var namedata = document.createTextNode(data[i]['name']);
      var surnamedata = document.createTextNode(data[i]['surname']);
      var workplacedata = document.createTextNode(data[i]['workplace']);
      var companydata = document.createTextNode(data[i]['company']);
      var moredata = document.createTextNode("Więcej informacji");
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.id = id;
      checkbox.name = "selection";
      checkboxid.className = "--list_checkbox";
      checkboxid.appendChild(checkbox)
      name.className = "--list_name";
      name.appendChild(namedata);
      surname.className = "--list_surname";
      surname.appendChild(surnamedata);
      workplace.className = "--list_workplace";
      workplace.appendChild(workplacedata);
      company.className = "--list_company";
      company.appendChild(companydata);
      more.className = "--list_more";
      more.id = id;
      more.appendChild(moredata);
      const section = document.getElementsByClassName("grid_app")[0];
      section.appendChild(checkboxid);
      section.appendChild(name);
      section.appendChild(surname);
      section.appendChild(workplace);
      section.appendChild(company);
      section.appendChild(more);
      more.setAttribute("onclick", "info(id)");
  }
}

function loadNew(){
  var checkboxids = document.getElementsByName("selection");
  for(i = 0; i < data.length; i++)
  {
    try{
    if(checkboxids[i].id == data[i]['id']){
      continue
    }
  }
  catch(err){
    const checkboxid = document.createElement('section');
    const name = document.createElement('section');
    const surname = document.createElement('section');
    const workplace = document.createElement('section');
    const company = document.createElement('section');
    const more = document.createElement('section');
    var id = data[i]['id'];
    var namedata = document.createTextNode(data[i]['name']);
    var surnamedata = document.createTextNode(data[i]['surname']);
    var workplacedata = document.createTextNode(data[i]['workplace']);
    var companydata = document.createTextNode(data[i]['company']);
    var moredata = document.createTextNode("Więcej informacji");
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = id;
    checkbox.name = "selection";
    checkboxid.className = "--list_checkbox";
    checkboxid.appendChild(checkbox)
    name.className = "--list_name";
    name.appendChild(namedata);
    surname.className = "--list_surname";
    surname.appendChild(surnamedata);
    workplace.className = "--list_workplace";
    workplace.appendChild(workplacedata);
    company.className = "--list_company";
    company.appendChild(companydata);
    more.className = "--list_more";
    more.id = id;
    more.appendChild(moredata);
    const section = document.getElementsByClassName("grid_app")[0];
    section.appendChild(checkboxid);
    section.appendChild(name);
    section.appendChild(surname);
    section.appendChild(workplace);
    section.appendChild(company);
    section.appendChild(more);
    more.setAttribute("onclick", "info(id)");
    document.getElementsByClassName("grid_app")[0].style.display = "grid";
  }
}
}

