// this variable holds ALL created Tables and is not to be cleared
var Tables = [];

// This variable holds all current attributes and is cleared
// once a Table is saved
var Attributes = [];

function anAttribute(){
	this.tableName = "",
	this.attTitle = "",
	this.attType = "",
	this.attSize = 0,
	this.attNull = false,
	this.attUnique = false
};

function aTable(){
	tableName = "",
	tableAttribute = []
};

//When user clicks "OK" button when naming table,
//generate the named 'Table' object
let currentTable = "";
function makeTable(tableName){
	document.getElementById('tn').disabled = "true";
	currentTable = document.getElementById('tn').value;
	// Script creation function
	tableScript();
}


//When the user clicks the "SAVE" link to save the attribute,
//all fields will be disabled to stop the suer from making changes
//and the "SAVE" link changes to "EDIT"
function saveAttribute(attributeNumber){
	let newAttribute = new anAttribute();
	newAttribute.tableName = currentTable;
	newAttribute.attTitle = document.getElementById('title-column' + attributeNumber).value;
	newAttribute.attType = document.getElementById('type-column' + attributeNumber).value;
	newAttribute.attSize = document.getElementById('size-column' + attributeNumber).value;
	newAttribute.attNull = document.getElementById('null-column' + attributeNumber).checked;
	newAttribute.attUnique = document.getElementById('unique-column' + attributeNumber).checked;
	Attributes.push(newAttribute);
	tableScript();
}


//ToDo: When the user "saves" all attributes, the Save Table button
//will activate, otherwise they cannot save the table or create a new one
function saveTable(){
	let newTable = new aTable();
	newTable.tableName = currentTable;
	newTable.tableAttribute = Attributes;
	Tables.push(newTable);
	currentTable = "";
	Attributes = [];
}

//=========================================================//
//=========================================================//
//===================== BUTCHER-BLOCK =====================//
//=========================================================//
//=========================================================//

/*
CURRENT ASSOCIATED ATTRIBUTE ELEMENT ID'S
-----------------------------------------
tablerow
tablecolumn-names
tablecolumn
tablecolumn-null
tablecolumn-unique
-----------------------------------------
*/

//Display Insert Tab and add Table names and Column Names to Insert Tab
//TODO fix adding attribute logic
function displayInsert(){
var newAtt;
document.getElementById("databutton").disabled = false;
	for (i=0; i<Tables.length; i++) {
		document.getElementById("existing_table").innerHTML = Tables[i].tableName;

		for (j=0; j<Tables[i].tableAttribute.length; j++) {
			newAtt = jQuery(
				'<tr id="add_insert_column' + j + '">' +
					'<td id="existing_attribute' + j +'" ></td>' +
					'<td class="add_insert_column"><input type="text"></td>' +
					'<td class="add_insert_column"><button>INSERT</button></td>' +
				'</tr>' )
			jQuery('table.addAttributeTable0').append(newAtt);
			document.getElementById('existing_attribute' + j).innerHTML = Tables[i].tableAttribute[j].attTitle;

		}
	}

}


//=============================================================//
//===============// TABLE ATTRIBUTE FUNCTIONS //===============//
//=============================================================//

//======= ATTRIBUTE VARIABLES =======//
var counter = 1;
var attributeCounter = 0;
//===================================//

//======= ADD NEW ATTRIBUTE =======//
//add new column for SQL table (adds new Attribute to the table in html)
jQuery(function(){
    //moved 'counter' variable outside of main function for global access
    jQuery('button.add-column').click(function(event){
        event.preventDefault();

        var newRow = jQuery(
			'<tr id="tablerow' + counter + '">' +
				'<td id="tablecolumn-names">' +
					'<input id="title-column' + counter + '" type="text" name="acolumn" placeholder="column name">' +
				'</td>' +
				'<td id="tablecolumn-names">' +
					'<select id="type-column' + counter + '" name="type">' +
						'<option value="0">Select a data type</option>' +
						'<option value="varchar">varchar</option>' +
						'<option value="integer">integer</option>' +
						'<option value="decimal">decimal</option>' +
						'<option value="datetime">datetime</option>' +
						'<option value="char">char</option>' +
					'</select>' +
				'</td>' +
				'<td id="tablecolumn-names">' +
					'<input id="size-column' + counter + '" type="number" name="size" placeholder="column size">' +
				'</td>' +
				'<td id="tablecolumn-names">' +
                    '<input id="null-column' + counter + '" type ="checkbox" name="null" value="null">' +
				'</td> ' +
				'<td id="tablecolumn-names">' +
					'<input id="unique-column' + counter + '" type ="checkbox" name="unique" value="unique">' +
				'</td>' +
                '<td id="tablecolumn-names"> '+
                    '<a href="#" id="remove-column' + counter + '" class="remove-column">Remove</a>' +
				'</td>' +
				'<td id="tablecolumn-names">' +
					'<a href="#" name="' + counter + '" class="save-column" onclick="saveAttribute(this.name)">SAVE</a>' +
				'</td>' +
			'</tr>');
        jQuery('table.columnname').append(newRow);
		counter++;
    });
});
//=================================//

//======= REMOVE ATTRIBUTE =======//
//remove a column in SQL table (removes selected table row in html)
$('table.columnname').on('click', 'a.remove-column', function(){
    $(this).closest ('tr').remove ();
});
//================================//

//======= INITIALIZE ATTRIBUTE BUTTON =======//
//Once ok button is selected to create table name columns are displayed and table name is added to SQL script view
$(document).ready(function(){
    $("#new-column-button").click(function(){
        $("#newP").show();
        $("table.columnname").show();
		$("#question").show();
        $("#bounce-image").show();
		$("#add-col").show();
		$("#save-table").show();
        $("#rm-col").show();
        $(this).hide();
		tName = $("#tn").val();
		$("#aboutus").css({'position': 'relative', 'background-color': '#f1f1f1'});
        //sqlScript = sqlScript + "<br>CREATE TABLE " + tName + " ("
       //$('#displayScript').append("<br>CREATE TABLE " + tName + " (");

    });
});
//===========================================//


/* This can be removed */
//======================ADD COLUMN TO SQL=====================//
//In the works to add column values to sql script
$('table.columnname').on('blur', function(){
    cName = $("#tablecolumn").val();
    sqlScript = sqlScript + "<br>CREATE COLUMN " + cName + " "
    $('#displayScript').append("<br>CREATE COLUMN " + cName + " (");
});
//============================================================//


//=============================================================//
//===============// TABLE ATTRIBUTE FUNCTIONS //===============//
//=============================================================//


