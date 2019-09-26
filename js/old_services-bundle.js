"use strict";

$(document).ready(function () {

    //Анимация вводного экрана
    $(".show-after-ready1").css({ "opacity": "0" });
    $(".show-after-ready2").css({ "opacity": "0" });
    $(".show-after-ready3").css({ "opacity": "0" });
    $(".show-after-ready4").css({ "opacity": "0" });
    $("#menu-simple-mobile div.top-line a.logo").css({ "opacity": "0", "right": "-100px" });

    function showAfterReady() {
        $(".show-after-ready1").animate({
            opacity: 1
        }, 800, function () {
            $(".show-after-ready2").animate({
                // marginTop: "101px"
            }, 300, function () {
                $(".show-after-ready2").animate({
                    opacity: 1
                }, 400, function () {
                    $(".show-after-ready3").animate({
                        opacity: 1
                    }, 400, function () {
                        $(".show-after-ready4").animate({
                            opacity: 1
                        }, 400, function () {
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
        });
    }

    setTimeout(showAfterReady, 1500);

    $('div.case div.main').click(function () {
        $('#cases-overlay').css({ 'display': 'block' });
        $('#cases-overlay').animate({ opacity: '0.5' }, 500);
        var popup = $(this).parent('div.case').find('div.popup');
        popup.css({ 'display': 'block' });
        popup.animate({ opacity: '1' }, 500);
    });

    $('div.cases div.popup div.close').click(function () {
        $('div.case div.popup').animate({ opacity: '0' }, 200, function () {
            $('div.case div.popup').css({ 'display': 'none' });
        });
        $('#cases-overlay').animate({ opacity: '0' }, 200, function () {
            $('#cases-overlay').css({ 'display': 'none' });
        });
    });
    $('#cases-overlay').click(function () {
        $('div.case div.popup').animate({ opacity: '0' }, 200, function () {
            $('div.case div.popup').css({ 'display': 'none' });
        });
        $('#cases-overlay').animate({ opacity: '0' }, 200, function () {
            $('#cases-overlay').css({ 'display': 'none' });
        });
    });

    function sidebar() {
        var a = document.querySelector('#stages-menu'),
            b = null,
            P = 0;
        window.addEventListener('scroll', Ascroll, false);
        document.body.addEventListener('scroll', Ascroll, false);
        function Ascroll() {
            if (document.body.clientWidth > 0) {
                if (b == null) {
                    var Sa = getComputedStyle(a, ''),
                        s = '';
                    for (var i = 0; i < Sa.length; i++) {
                        if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                            s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; ';
                        }
                    }
                    b = document.createElement('div');
                    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                    a.insertBefore(b, a.firstChild);
                    var l = a.childNodes.length;
                    for (var i = 1; i < l; i++) {
                        b.appendChild(a.childNodes[1]);
                    }
                    a.style.height = b.getBoundingClientRect().height + 'px';
                    a.style.padding = '0';
                    a.style.border = '0';
                }
                var Ra = a.getBoundingClientRect(),
                    R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#stages').getBoundingClientRect().bottom); // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
                if (Ra.top - P <= 0) {
                    if (Ra.top - P <= R) {
                        b.className = 'stop-sidebar';
                        b.style.top = -R + 'px';
                    } else {
                        b.className = 'sticky-sidebar';
                        b.style.top = P + 'px';
                    }
                } else {
                    b.className = '';
                    b.style.top = '';
                }
                window.addEventListener('resize', function () {
                    a.children[0].style.width = getComputedStyle(a, '').width;
                }, false);
            }
        }
    }
    sidebar();

    $(window).scroll(function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        // Выделение нужного пункта меню при скроллинге
        $('.stage').each(function (i, el) {
            var top = $(el).offset().top - 100;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if (scroll > top && scroll < bottom) {
                $('#stages-menu li.active').removeClass('active');
                $('a[href="#' + id + '"]').parent('li').addClass('active');
            }
        });
    });
});