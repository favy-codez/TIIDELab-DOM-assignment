

function setTheme(){
    // getting the table
    let attendanceTable = document.getElementById("attendance-table");
    let selectedTheme = document.getElementById("themes");

    if(selectedTheme.value === "blue"){
        // setting the attribute
        attendanceTable.setAttribute('class', 'blueTheme');
    }else{
        attendanceTable.setAttribute('class', 'redTheme');
    }
    console.log(selectedTheme.value);
}

function addRow(e){
    // override default behaviour
    e.preventDefault();
    // document.forms returns all the forms on the page, to differentiate we give the form a name="" or if you know their hierarchy use document.forms[0] to target
    // getting the table
    let attendanceTable = document.getElementById("attendance-table");
}