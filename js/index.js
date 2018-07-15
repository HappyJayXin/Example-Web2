$(document).ready(function () {
    var audio = new Audio("music.mp3");
    audio.play();
    $('.content').hide();
    $('.word').on('click', function () {
        $('.container').fadeOut(1000);
        $('.content').delay(1000).fadeIn(1000);
        audio.pause();
    });   
});