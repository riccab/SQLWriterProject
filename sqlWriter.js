
var pName;
var tName;
var cName;
var dbscript;
var myScript = false;
var sqlScript;


//======================LANGUAGE========================//
function languageFunction() {
    var obj = document.getElementById("language");
    var opt = obj.options[obj.selectedIndex].text;
    if (opt == "SQL"){
        modal.style.display = "none"
        greeting="The language you selected is <b>SQL</b>" //This is a place holder for actual functionality that should be added later
    }
    else if (opt == "mySQL") {
        modal.style.display = "none"
        greeting="The language you selected is <b>mySQL</b>"; //This is a place holder for actual functionality that should be added later
    }

    return greeting;
}
//==========================================================//



//======================PROJECT NAME========================//
function nameFunction() {
    var txt;
    pName = prompt("Please enter a name for your project", "Project1");
    if (pName == null || pName == "") {
        txt = "You canceled the prompt.  Select the 'Create New Project' button to start over";
    } else {
        txt = "Your Database will be named <b>" + pName + "</b>. Add a table next"; //This is a place holder for actual functionality that should be added later
        document.getElementById("tablebutton").disabled = false;
    }
    document.getElementById("newDatabase").innerHTML = txt; openCRUD(event, 'Database');
    //txt;
    dbscript = "CREATE SCHEMA";  //script to create the database goes in this variable
    sqlScript = dbscript + " " + pName + ";";
    return pName; script; sqlScript;
}
//==========================================================//



//======================SCRIPT VIEW=========================//
function scriptView() {

    if (myScript != false) {
        $('#displayScript').hide();
        myScript = false;
        //document.getElementById("displayButton").value = "View Script";
    } else {
        $('#displayScript').show();
        sqlScript;
        myScript = true;
        //document.getElementById("displayButton").value = "Hide Script";
    }
    return sqlScript; myScript;
}
//==========================================================//



//==========================================================//
function scriptButton() {
    //document.getElementById("displayButton").style.display = "block";
	$('#displayButton').css('display','block');
}
//==========================================================//




//==========================================================//
function tableButton() {
    document.getElementById("nameTable").style.display = "block";
}
//==========================================================//



//==========================================================//
function displayColumn() {
    document.getElementById("nameColumn").style.display = "block";
}
//==========================================================//



//==========================================================//
function changeButton(elmnt) {
    if (elmnt.innerHTML == 'View Script'){
        elmnt.innerHTML = 'Hide Script';
    }
    else {
        elmnt.innerHTML = 'View Script';
    }
}
//==========================================================//




//==========================================================//
function openCRUD(evt, crud) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(crud).style.display = "block";
    evt.currentTarget.className += " active";
}
//==========================================================//



//=================CLEAR WEBSITE===================//
function clearFunction() {
 var txt;
    if (confirm("This will permanently delete your project, are you sure you want to continue?")) {
        location.reload(true);
    }
    else {
        txt = " ";
    }
    document.getElementById("clearMe").innerHTML = txt;

}
//==========================================================//


// NEW FUNCTIONS 8/21/2018 @4:15pm //
function hideIntro(){
	$('#introTitle').hide();
	$('#myBtn').hide();
}


