function swapLang(walue){
	switch(walue){
    case "EN":
        enLang();
        break;
    case "FR":
        frLang();
        break;
    default:
        break;
	}
}

function enLang(){
	alert("You selected English, haha!");
	document.getElementById('english').disabled = "true";
	//document.getElementById('french').disabled = "false";
}

function frLang(){
	alert("You selected French, hoho!");
	document.getElementById('french').disabled = "true";
	//document.getElementById('english').disabled = "false";
}