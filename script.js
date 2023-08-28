

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

function addRow(){
    // getting the table
    let attendanceTable = document.getElementById("attendance-table");
}