'use strict';

$(document).ready(function () {
    //Выдвижно-задвижное меню (определение наличия большого меню картинки menu-large)
    var simpleMenu = false;

    if ($('#menu-large').length > 0) {
        simpleMenu = false;
    } else {
        simpleMenu = true;
        if (document.body.clientWidth >= 850) {
            $('body').css({
                'padding-left': 220 + 'px',
                'transition': '0s'
            });
            $('#menu-simple-desktop').css({
                "left": "0",
                'transition': '0s'
            });
        } else {
            $('body').css({
                'padding-left': '0',
                'transition': '0s'
            });
            $('#menu-simple-desktop').css({
                "left": "-" + 220 + "px",
                'transition': '0s'
            });
        }
        $(window).resize(function () {
            if (document.body.clientWidth >= 850) {
                $('body').css({
                    'padding-left': 220 + 'px',
                    'transition': '1s'
                });
                $('#menu-simple-desktop').css({
                    "left": "0",
                    'transition': '1s'
                });
            } else {
                $('body').css({
                    'padding-left': '0',
                    'transition': '1s'
                });
                $('#menu-simple-desktop').css({
                    "left": "-" + 220 + "px",
                    'transition': '1s'
                });
            }
        });
    }

    //Мобильное меню
    var mobileMenuStatus = false;
    $(".menu-simple-mobile_show-menu-block").click(function () {
        if (mobileMenuStatus == false) {
            mobileMenuStatus = true;
            $("#menu-simple-mobile .top-line").stop().animate({
                left: "1px"
            }, 500, function () {
                $("#menu-simple-mobile .top-line").stop().animate({
                    left: "220px"
                }, 500);
            });
            $("#menu-simple-mobile .menu-block").stop().animate({
                left: "0"
            }, 300, function () {
                $("#menu-simple-mobile .menu-block .logo a").stop().animate({
                    marginTop: "0px"
                }, 1200);
            });
            $(".menu-simple-mobile_overlay").css({
                "display": "block"
            }).stop().animate({
                opacity: "0.5"
            }, 1500);
        } else {
            mobileMenuStatus = false;
            $("#menu-simple-mobile .top-line").stop().animate({
                left: "0"
            }, 800);
            $("#menu-simple-mobile .menu-block").stop().animate({
                left: "-220px"
            }, 800, function () {
                $("#menu-simple-mobile .menu-block .logo a").css({
                    "margin-top": "-300px"
                });
            });

            $(".menu-simple-mobile_overlay").stop().animate({
                opacity: "0"
            }, 1500, function () {
                $(".menu-simple-mobile_overlay").css({
                    "display": "none"
                });
            });
        }
    });
    $(".menu-simple-mobile_overlay").click(function () {
        mobileMenuStatus = false;
        $("#menu-simple-mobile .top-line").stop().animate({
            left: "0"
        }, 800);
        $("#menu-simple-mobile .menu-block").stop().animate({
            left: "-220px"
        }, 800, function () {
            $("#menu-simple-mobile .menu-block .logo a").css({
                "margin-top": "-300px"
            });
        });

        $(".menu-simple-mobile_overlay").stop().animate({
            opacity: "0"
        }, 1500, function () {
            $(".menu-simple-mobile_overlay").css({
                "display": "none"
            });
        });
    });

    //Открытие формы заявки (мини-версия в меню)

    $(".submit-your-application_open").click(function () {
        $("#submit-your-application .close_div").css({
            "top": "0px"
        });
        $(".submit-your-application_overlay").css({
            "display": "block"
        }).stop().animate({
            opacity: "0.5"
        }, 500);
        $("#submit-your-application form").css({
            "display": "block",
            "left": "-200%"
        }).stop().animate({
            opacity: "1",
            left: "50%"
        }, 900, function () {
            $("#submit-your-application .close_div").animate({
                top: "5px"
            }, 500, function () {
                $("#submit-your-application .close_div").animate({
                    top: "-35px"
                }, 900);
            });
        });
    });
    $(".submit-your-application_close").click(function () {
        $("#submit-your-application form").stop().animate({
            left: "-200%",
            opacity: 0
        }, 900, function () {
            $("#submit-your-application form").css({
                "display": "none"
            });
            $("#submit-your-application .close_div").css({
                "top": "-35px"
            });
        });

        $(".submit-your-application_overlay").stop().animate({
            opacity: "0"
        }, 500, function () {
            $(".submit-your-application_overlay").css({
                "display": "none"
            });
        });
    });

    $(".submit-your-application_overlay").click(function () {
        submitYourApplicationStatus = false;
        $("#menu-simple-mobile .top-line").stop().animate({
            left: "0"
        }, 800);
        $("#menu-simple-mobile .menu-block").stop().animate({
            left: "-220px"
        }, 800, function () {
            $("#menu-simple-mobile .menu-block .logo a").css({
                "margin-top": "-300px"
            });
        });

        $(".submit-your-application_overlay").stop().animate({
            opacity: "0"
        }, 1500, function () {
            $(".submit-your-application_overlay").css({
                "display": "none"
            });
        });
    });

    //Действия при скролле
    $(window).scroll(function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        //Параллакс картинки в шапке
        $('#general > div.background').css({
            "top": 0
        });
        if (document.body.clientWidth > 800) {
            var parallaxGeneralBg = scrolled * 0.4 + 'px';
            $('#general > div.background').css({
                "top": parallaxGeneralBg
            });
        }

        //Выдвижно-задвижное меню
        if (simpleMenu == false) {
            if (scrolled > 600 && document.body.clientWidth >= 850) {
                $('#menu-simple-desktop').css({
                    "left": "0"
                });
                $('body').css({
                    'padding-left': 220 + 'px'
                });
            } else {
                $('#menu-simple-desktop').css({
                    "left": "-" + 220 + "px"
                });
                $('body').css({
                    'padding-left': '0px'
                });
            }
            $(window).resize(function () {
                if (scrolled > 600 && document.body.clientWidth >= 850) {
                    $('#menu-simple-desktop').css({
                        "left": "0"
                    });
                    $('body').css({
                        'padding-left': 220 + 'px'
                    });
                } else {
                    $('#menu-simple-desktop').css({
                        "left": "-" + 220 + "px"
                    });
                    $('body').css({
                        'padding-left': '0px'
                    });
                }
            });
        }
    });

    //Маска для поле ввода
    if ($('.form-gb_input-phone').length > 0) {
        $('.form-gb_input-phone').mask('0 (000) 000-00-00');
    }

    //Плавный скроллинг
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