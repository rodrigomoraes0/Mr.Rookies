$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active')
        $('#mobile_btn').find('i').toggleClass('fa-x')
    });
});

$('#mobile_menu a').on('click', function(){
    $('#mobile_menu').removeClass('active');
    $('#mobile_btn').find('i').removeClass('fa-x');
});