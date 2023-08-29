// getting the table
var attendanceTable = document.getElementById("attendance-table");

function setWidth(){
    // get the selected width
    let selectedWidth = document.getElementById("width");

    if(selectedWidth.value === "50%"){
        // setting the attribute
        attendanceTable.setAttribute('class', 'firstWidth');
    }else if((selectedWidth.value === "70%")){
        attendanceTable.setAttribute('class', 'secondWidth');
    }else{
        attendanceTable.setAttribute('class', 'thirdWidth');
    }
    console.log(selectedWidth.value);
}

// setting theme
function setTheme(){
    // get the selected theme
    let selectedTheme = document.getElementById("themes");
    attendanceTable.style.backgroundColor = selectedTheme.value;
}

function addRow(e){
    // override default behaviour
    e.preventDefault();
    // document.forms returns all the forms on the page,to differentiate we give the form a name="" or if you know their hierarchy use document.forms[0] to target the first form
    let attendanceForm = document.forms["attendanceForm"];
    attendanceForm.style.backgroundColor = "";
    attendanceForm.style.width = "";

    // getting data using formData- it gives you everything filled in the form
    let data = new FormData(attendanceForm);
    console.log(data);

    // getting the value of the input tags by ID
    let firstName = document.getElementById("firstName").value;
    console.log(firstName);

    // this will return the key(value)
    // data.get('firstName');

    // add row 
    let row = attendanceTable.insertRow();
    /*
    and add data to each cell
    row.insertCell().innerHTML = data.get('firstName');
    row.insertCell().innerHTML = data.get('lastName');
    row.insertCell().innerHTML = data.get('phone');
    row.insertCell().innerHTML = data.get('Email');
    row.insertCell().innerHTML = data.get('gender');
    */

    // iterate through each of the form element
    for(let [key, value] of data){
        console.log(key, value);
        row.insertCell().innerHTML = data.get(key);
    }

    console.log(data);
    
}