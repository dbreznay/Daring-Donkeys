$('.navbar navbar-expand-lg navbar-light bg-light').on('click','div', function(){
    $('.navbar navbar-expand-lg navbar-light bg-light div.active').removeClass('active');
    $(this).addClass('active');  
});