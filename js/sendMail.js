$('#sendMail').on('click', function(){
    var name = $('#name').val();
    var phone = $('#phone').val();
    var email = $('#email').val();
    var message = $('#message').val();

    if(name == ""){
        $('#errorName').text('Error Message');
        return false;
    } else if(phone == ""){
        $('#errorPhone').text('Error Message');
        return false;
    } else if(email == ""){
        $('#errorEmail').text('Error Message');
        return false;
    }

    $('#errorName').text("");
    $('#errorPhone').text("");
    $('#errorEmail').text("");

    $(".button").on("click", function() {
        $('.contact').toggle();
        $('.success').toggle();
    });

    $(".success__button").on('click', function(){
        location.reload();
    })


    

});