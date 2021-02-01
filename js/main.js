$(document).ready(function () {
    $(".hero").mousemove(function (e) {
        const movementStrength = 25;
        let height = movementStrength / $(window).height();
        let width = movementStrength / $(window).width();
        let pageX = e.pageX - ($(window).width() / 2);
        let pageY = e.pageY - ($(window).height() / 2);
        let newvalueX = width * pageX * -1 - 25;
        let newvalueY = height * pageY * -1 - 50;
        $(".hero").css("background-position", (100-newvalueX)+"%"+(100-newvalueY)+"%");

    });
    $(".menu-burger").click(function (e) {
        e.preventDefault();
        $(".gMenu").addClass("show");
        $("body").addClass("no-overflow");

    });
    $(".gMenu-close").click(function (e) {
        e.preventDefault();
        $(".gMenu").removeClass("show");
        $("body").removeClass("no-overflow");

    });
    gsap.registerPlugin(ScrollTrigger);
    let t1=gsap.timeline({
      scrollTrigger: {
          trigger: ".gCategories-row",

          start: "top center",


      }

    });
    t1.from(".gCategories-bg__title",{

        opacity:0,
        duration:0.5,
        delay:0.5

    });
    t1.from(".gCategories-item-1",{
        y:-20,
        opacity:0,
        duration:0.3,

    });
    t1.from(".gCategories-item-2",{
        y:-20,
        opacity:0,
        duration:0.3,

    });
     t1.from(".gCategories-item-3",{
        y:-20,
         opacity:0,
        duration:0.3,

    });
     t1.from(".gCategories-item-4",{
        y:-20,
         opacity:0,
        duration:0.3,

    });
     t1.from(".gCategories-item-5",{
        y:-20,
         opacity:0,
        duration:0.3,

    });
     t1.from(".gCategories-item-6",{
        y:-20,
         opacity:0,
        duration:0.3,

    });
    t1.from(".gCategories-seeMore__text",{

       opacity:0,
        duration:0.3,


    });
    t1.from(".gCategories-seeMore__arrow",{
         opacity:0,
       x:10000,
        duration:0.5,


    });

});

let tgSub=gsap.timeline({
    scrollTrigger: {
        trigger: ".gSubscribe",
        start: "top center",

    }

});
tgSub.from(".gSubscribe-bg",{

    opacity:0,
    duration:0.5
});
tgSub.from(".gSubscribe-title",{
    y:20,
    opacity:0,
    duration:0.5
});
tgSub.from(".gSubscribe-form__input",{

    x:-10000,
    duration:0.5
});
tgSub.from(".gSubscribe-form__submit",{
    x:10000,
    duration:0.5
});
let tgArticle=gsap.timeline({
    scrollTrigger: {
        trigger: ".gArticle",
        start: "center center",

    }

});
tgArticle.from(".gArticles-item-1",{
    opacity:0,
    x:-30,
    duration:2



});
tgArticle.from(".gArticles-item-2",{
    opacity:0,
    x:-30,
    duration:2


});
tgArticle.from(".gArticles-item-3",{
    opacity:0,
    x:-30,
    duration:2


});
tgArticle.from(".gArticles-reg",{
    opacity:0,
    y:-30,
    duration:1


});