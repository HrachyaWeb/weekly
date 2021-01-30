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
    gsap.registerPlugin(ScrollTrigger);
    let t1=gsap.timeline({
      scrollTrigger: {
          trigger: ".gCategories-row",
          toggleActions: "restart none reverse none",
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

let tSub=gsap.timeline({
    scrollTrigger: {
        trigger: ".gSubscribe",
        toggleActions: "restart none reverse none",
        start: "top center",

    }

});
tSub.from(".gSubscribe-title",{
    y:20,
    opacity:0,
    duration:0.5
});
tSub.from(".gSubscribe-form__input",{

    x:-10000,
    duration:0.5
});
tSub.from(".gSubscribe-form__submit",{

    x:10000,
    duration:0.5
});