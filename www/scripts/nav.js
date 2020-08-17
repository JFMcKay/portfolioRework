$(document).ready(function() {
    $(window).on('scroll', function() {
        if($(window).scrollTop()) {
            $('nav').addClass('dark-back');
        }
        else 
        {
            $('nav').removeClass('dark-back');
        }
    });
    $('.logo').click( function () {
        $('.profile-card').toggleClass('profile-show');
    });
});