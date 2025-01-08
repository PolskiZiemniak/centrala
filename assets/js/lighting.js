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
$("body").delegate("#lightningForm", "submit", function(e){
    $.ajax({
        url: 'server.php',
        type: 'POST',
        data: $("#lightningForm").serialize(),
        beforeSend: function() {
            console.log("wysyłanie");
        },
        complete: function() {
            console.log("ukończono");
        },
        success: function(response) {
            console.log(response);
            const arr = JSON.parse(response);
            var content = "";
            for(i = 1; i <= Object.keys(arr.switches).length; i++) {
                content += "<p>" + arr.switches[i].name + " " + arr.switches[i].switchStatus + "</p><br>";
            }
            $("#dane").html(content);
        },
        error: function() {
            console.log("aha");
        }
    });
    e.preventDefault();
});