$(document).ready(function () {
    $(".hero").mousemove(function (e) {
        var movementStrength = 25;
        var height = movementStrength / $(window).height();
        var width = movementStrength / $(window).width();
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $(".hero").css("background-position", (700-newvalueX)+"px     "+(250-newvalueY)+"px");

    })
});