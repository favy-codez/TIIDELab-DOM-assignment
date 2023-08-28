

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
    // document.forms returns all the forms on the page,to differentiate we give the form a name="" or if you know their hierarchy use document.forms[0] to target the first form
    let attendanceForm = document.forms["attendanceForm"];

    // getting data using formData- it gives you everything filled in the form
    let data = new FormData(attendanceForm);
    console.log(data);

    // getting the value of the input tags by ID
    let firstName = document.getElementById("firstName").value;
    console.log(firstName);
    
    
}