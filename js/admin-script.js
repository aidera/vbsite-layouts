'use strict';

$(document).ready(function () {
    //Выдвижно-задвижное меню (определение наличия большого меню картинки menu-large)
    var simpleMenu = false;
    // let simpleMenuDesktopWidth = $('#menu-admin-desktop').width()
    var simpleMenuDesktopWidth = 220;
    var simpleMenuDesktopWidthPercent = simpleMenuDesktopWidth * 0.1;

    if ($('#menu-large').length > 0) {
        simpleMenu = false;
    } else {
        simpleMenu = true;
        if (document.body.clientWidth >= 850) {
            $('body').css({
                'padding-left': 220 + 'px'
            });
            $('#menu-admin-desktop').css({
                "left": "0"
            });
        } else {
            $('body').css({
                'padding-left': '0'
            });
            $('#menu-admin-desktop').css({
                "left": "-" + 220 + "px"
            });
        }
        $(window).resize(function () {
            if (document.body.clientWidth >= 850) {
                $('body').css({
                    'padding-left': 220 + 'px'
                });
                $('#menu-admin-desktop').css({
                    "left": "0"
                });
            } else {
                $('body').css({
                    'padding-left': '0'
                });
                $('#menu-admin-desktop').css({
                    "left": "-" + 220 + "px"
                });
            }
        });
    }

    //Мобильное меню
    var mobileMenuStatus = false;
    $(".menu-admin-mobile_show-menu-block").click(function () {
        if (mobileMenuStatus == false) {
            mobileMenuStatus = true;
            $("#menu-admin-mobile .top-line").stop().animate({
                left: "1px"
            }, 500, function () {
                $("#menu-admin-mobile .top-line").stop().animate({
                    left: "220px"
                }, 500);
            });
            $("#menu-admin-mobile .menu-block").stop().animate({
                left: "0"
            }, 300, function () {
                $("#menu-admin-mobile .menu-block .logo a").stop().animate({
                    marginTop: "0px"
                }, 1200);
            });
            $(".menu-admin-mobile_overlay").css({
                "display": "block"
            }).stop().animate({
                opacity: "0.5"
            }, 1500);
        } else {
            mobileMenuStatus = false;
            $("#menu-admin-mobile .top-line").stop().animate({
                left: "0"
            }, 800);
            $("#menu-admin-mobile .menu-block").stop().animate({
                left: "-220px"
            }, 800, function () {
                $("#menu-admin-mobile .menu-block .logo a").css({
                    "margin-top": "-300px"
                });
            });

            $(".menu-admin-mobile_overlay").stop().animate({
                opacity: "0"
            }, 1500, function () {
                $(".menu-admin-mobile_overlay").css({
                    "display": "none"
                });
            });
        }
    });
    $(".menu-admin-mobile_overlay").click(function () {
        mobileMenuStatus = false;
        $("#menu-admin-mobile .top-line").stop().animate({
            left: "0"
        }, 800);
        $("#menu-admin-mobile .menu-block").stop().animate({
            left: "-220px"
        }, 800, function () {
            $("#menu-admin-mobile .menu-block .logo a").css({
                "margin-top": "-300px"
            });
        });

        $(".menu-admin-mobile_overlay").stop().animate({
            opacity: "0"
        }, 1500, function () {
            $(".menu-admin-mobile_overlay").css({
                "display": "none"
            });
        });
    });

    // Плавный скроллинг
    $(".scrollto").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").stop().animate({ scrollTop: destination + 'px' }, 1100, "swing");
        return false;
    });

    //Прелоадер
    function preloading() {
        $("section#preloading").animate({ opacity: 0 }, 800, function () {
            $("section#preloading").css({ "display": "none" });
        });
    }
    setTimeout(preloading, 500);
});