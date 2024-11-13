$('#lighting').on('click', 'button', function (e) {
    //$('p').html('Zmieniona treść');

    $.ajax({
        url: "ajax.php",
        type: 'post',
        data: {'user' : 'test'},
        beforeSend: function(){
            console.log("start");
        },
        complete: function(){
            console.log("complete request");
        },
        success: function(data){
            $('p').text(data);
        },
        error: function(){

        }
    
    });
});