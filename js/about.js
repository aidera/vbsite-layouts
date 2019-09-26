"use strict";

$(document).ready(function () {

    //Анимация вводного экрана
    $(".show-after-ready1").css({ "opacity": "0", "margin-top": "100px" });
    $(".show-after-ready2").css({ "opacity": "0", "margin-top": "100px" });
    $(".show-after-ready3").css({ "opacity": "0", "margin-top": "100px" });
    $(".show-after-ready4").css({ "opacity": "0", "margin-top": "100px" });
    $("#menu-simple-mobile div.top-line a.logo").css({ "opacity": "0", "right": "-100px" });

    function showAfterReady() {
        $(".show-after-ready1").animate({
            marginTop: "0px",
            opacity: 1

        }, 400, function () {
            $(".show-after-ready2").animate({
                marginTop: "0px",
                opacity: 1
            }, 400, function () {
                $(".show-after-ready3").animate({
                    marginTop: "0px",
                    opacity: 1
                }, 500, function () {
                    $(".show-after-ready4").animate({
                        marginTop: "0px",
                        opacity: 1
                    }, 500);
                    $("#menu-simple-mobile div.top-line a.logo").animate({
                        right: "-101px"
                    }, 800, function () {
                        $("#menu-simple-mobile div.top-line a.logo").animate({
                            right: "0px",
                            opacity: 1
                        }, 800);
                    });
                });
            });
        });
    }

    setTimeout(showAfterReady, 2500);

    //Двигающийся офис
    function movingArea() {
        if (document.body.clientWidth >= 850) {
            var onMouseMoving = function onMouseMoving() {
                var windowWidth = $(window).width();
                var newValue = event.pageX * 100 / windowWidth;
                areaImg.css({
                    'background-position-x': newValue + '%'
                });
            };

            var area = $('#workers');
            var areaImg = $('#room-background div.img');

            area.mousemove(onMouseMoving);
        }
    }

    movingArea();
    $(window).resize(function () {
        movingArea();
    });
    $(window).scroll(function () {
        movingArea();
    });
});