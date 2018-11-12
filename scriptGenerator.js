// We are working to edit the content of the <p> element ID Name: scriptDisplay
// Access all data from Tables:
//	- aTable objects

function startScript(){
	
}

// This function is kicked off each time a table is started (clicking "OK" button)
// and each time the user clicks the "SAVE" link in each column
function tableScript(){
	let tableStart = "CREATE TABLE " + currentTable + "<br>(<br>";
	let tableBody = "";
	let tableEnd = ");";

	if(Attributes.length > 0){
		for (i in Attributes){
			tableBody += Attributes[i].attTitle + " ";
			tableBody += Attributes[i].attType + " ";
			tableBody += Attributes[i].attSize + " ";
			if (Attributes[i].attNull === true){
				tableBody += "NULL ";
			} else {
				tableBody += "NOT NULL ";
			}
			if (Attributes[i].attUnique === true){
				tableBody += "UNIQUE,<br>";
			} else {
				tableBody += "NOT UNIQUE,<br>";
			}
		}
	}
	
	document.getElementById("scriptDisplay").innerHTML = tableStart + tableBody + tableEnd;
}