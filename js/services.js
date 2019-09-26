"use strict";

$(document).ready(function () {

    //Анимация вводного экрана
    $(".show-after-ready1").css({ "opacity": "0" });
    $(".show-after-ready2").css({ "opacity": "0", "margin-top": "100px" });
    $(".show-after-ready3").css({ "opacity": "0", "margin-top": "100px" });
    $("#menu-simple-mobile div.top-line a.logo").css({ "opacity": "0", "right": "-100px" });

    function showAfterReady() {
        $(".show-after-ready1").animate({
            opacity: 1
        }, 800, function () {
            $(".show-after-ready2").animate({
                marginTop: "101px"
            }, 300, function () {
                $(".show-after-ready2").animate({
                    marginTop: "0px",
                    opacity: 1
                }, 400, function () {
                    $(".show-after-ready3").animate({
                        marginTop: "0px",
                        opacity: 1
                    }, 500, function () {

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
        });
    }

    setTimeout(showAfterReady, 1500);
});