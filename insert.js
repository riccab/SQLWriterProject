jQuery(function(){

    jQuery('button.add-data').click(function(event){
        event.preventDefault();

    var newAtt;

        for (i=0; i<Tables.length; i++) {
            document.getElementById("existing_table").innerHTML = Tables[i].tableName;

            for (j=0; j<Tables[i].tableAttribute.length; j++) {
                newAtt = jQuery(
                        '<td class="add_insert_column"><input type="text">' + '&nbsp' +
                        '<button>INSERT</button>' + '&nbsp' +
                        '<a href="#" class="deleteInsert" class="remove-column">Remove</a></td>')
                jQuery('#add_insert_column' + j).append(newAtt);

            }
        }
    });

});

$('#insertDataTables').on('click', 'a.deleteInsert', function(){
    $(this).closest ('td').remove ();

});

