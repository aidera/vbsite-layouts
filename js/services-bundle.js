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

    //Маска для поле ввода
    $('.number-input').mask("### ### ###", { reverse: true });

    //Имитатор селекта (открыть-закрыть список)

    $('div.select-imitator_overlay').css({ "display": "none", "opacity": "0" });
    $('.select-imitator ul.list').css({ "display": "none", "opacity": "0" });

    $('.select-imitator .input-container').click(function () {
        $('div.select-imitator_overlay').css({ "display": "block" }).stop().animate({
            opacity: "0.5"
        }, 500);
        $(this).parent('.select-imitator').find('ul.list').css({ "display": "block" }).stop().animate({
            opacity: "1"
        }, 300);
    });
    $('.select-imitator_overlay').click(function () {

        $('div.select-imitator_overlay').stop().animate({
            opacity: "0"
        }, 300, function () {
            $('div.select-imitator_overlay').css({ "display": "none" });
        });
        $('.select-imitator ul.list').stop().animate({
            opacity: "0"
        }, 300, function () {
            $('.select-imitator ul.list').css({ "display": "none" });
        });
        $('.offer-card-container_sorting-block div.list').stop().animate({
            opacity: "0"
        }, 300, function () {
            $('.offer-card-container_sorting-block div.list').css({ "display": "none" });
        });
    });

    $('.select-imitator_simplify ul.list li span').click(function () {
        var elem = $(this);
        var elemBody = elem.parent('li').parent('ul.list').parent('div.select-imitator');
        var selectParamValue = '';
        var selectUserValue = '';

        elemBody.find('span').removeClass('active');
        elem.addClass('active');
        selectUserValue = elem.find('p').text();
        selectParamValue = elem.attr('param-value');
        elemBody.find('input.hiddeninput').val(selectParamValue);
        elemBody.find('div.input-container input').val(selectUserValue);

        $('div.select-imitator_overlay').stop().animate({
            opacity: "0"
        }, 100, function () {
            $('div.select-imitator_overlay').css({ "display": "none" });
        });
        $('.select-imitator ul.list').stop().animate({
            opacity: "0"
        }, 100, function () {
            $('.select-imitator ul.list').css({ "display": "none" });
        });
    });

    //Подставление значений имитатора селекта при загрузки страницы
    $('.select-imitator').each(function () {
        var generalInputValue = $(this).find('.hiddeninput').val();
        if (generalInputValue || generalInputValue != '') {
            var generalArray = generalInputValue.split(', ');
            var userInput = $(this).find('.input-container').find('input');
            var userInputValue = '';
            $(this).find('span[param-value]').each(function () {
                var currentSpanOfParamValue = $(this);
                var currentValue = $(this).attr('param-value');
                $.each(generalArray, function (i, v) {
                    if (currentValue == v) {
                        currentSpanOfParamValue.addClass('active');
                        if (userInputValue != '') {
                            userInputValue = userInputValue + ", " + currentSpanOfParamValue.find('p').text();
                        } else {
                            userInputValue = currentSpanOfParamValue.find('p').text();
                        }
                        $(userInput).val(userInputValue);
                        if (currentSpanOfParamValue.hasClass('header')) {
                            currentSpanOfParamValue.parent('li.group').find('span').each(function () {
                                $(this).addClass('active');
                            });
                        }
                    }
                });
            });
        }
    });

    function stage4Func() {
        var stage4 = $('#stages #stage4');
        var stage4Width = stage4.width();

        if (document.body.clientWidth > 600) {
            stage4.mousemove(function (e) {
                // положение элемента
                var pos = $(this).offset();
                var elem_left = pos.left;
                // положение курсора внутри элемента
                var Xinner = e.pageX - elem_left;
                var menuSimple = $('#menu-simple-desktop');
                var menuSimpleSize = 0;

                if (document.body.clientWidth > 600) {
                    if (menuSimple.css('display') != 'none') {
                        menuSimpleSize = menuSimple.width();
                    }
                    stage4.find('.animation').css({ 'width': stage4Width - Xinner - menuSimpleSize });
                } else {
                    stage4.find('.animation').css({ 'width': '100%' });
                }
            });
        } else {
            stage4.find('.animation').css({ 'width': '100%' });
        }
    }

    function stage5Func() {
        var stage5 = $('#stages #stage5');
        var stage5AnimEl = $('#stages #stage5 div.animation div.el.animate');
        stage5AnimEl.mouseenter(function () {
            if (document.body.clientWidth >= 600) {
                var animElemImage = $(this).find('div.image');
                var animElemPunct = $(this).find('div.punct');
                if (animElemImage.hasClass('active')) {
                    animElemPunct.animate({ opacity: 1 }, 200);
                    animElemImage.animate({ opacity: 0 }, 200);
                    animElemImage.removeClass('active');
                } else {
                    animElemPunct.animate({ opacity: 0 }, 200);
                    animElemImage.animate({ opacity: 1 }, 200);
                    animElemImage.addClass('active');
                }
            }
        });
    }

    function stage6Func() {
        var stage6Anim = $('#stages #stage6 div.animation');
        stage6Anim.click(function () {
            $(this).find('.ribbon-left').addClass('ribbon-left-animate');
            $(this).find('.ribbon-right').addClass('ribbon-right-animate');
            $(this).find('.scissors-bottom').addClass('scissors-animate');
            $(this).find('.scissors-top').addClass('scissors-animate');
        });
    }

    stage4Func();
    stage5Func();
    stage6Func();

    $(window).resize(function () {
        stage4Func();
    });

    $(window).scroll(function () {
        if (document.body.clientWidth >= 600) {
            var scrolled = window.pageYOffset || document.documentElement.scrollTop;

            $('#stages div.stage').each(function () {
                var stage = $(this);
                var offset = stage.offset().top - scrolled;
                var height = stage.height();
                if (offset - height <= 0 && offset > -height) {
                    stage.find('.text').css({ 'margin-top': -offset * 0.1 });
                }
            });

            var stage2 = $('#stages #stage2');
            var stage2Offset = stage2.offset().top - scrolled;
            var stage2Height = stage2.height();
            if (stage2Offset - stage2Height <= 0 && stage2Offset > -stage2Height) {
                if (document.body.clientWidth > 800) {
                    stage2.find('.animation .el1').css({ 'margin-top': stage2Offset * 0.2 });
                    stage2.find('.animation .el2').css({ 'margin-top': stage2Offset * 1 });
                } else {
                    stage2.find('.animation .el1').css({ 'margin-top': '0' });
                    stage2.find('.animation .el2').css({ 'margin-top': '0' });
                }
            }

            var stage3 = $('#stages #stage3');
            var stage3Offset = stage3.offset().top - scrolled;
            var stage3Height = stage3.height();
            if (stage3Offset > 0) {
                stage3.find('.animation .el1 .check1').css({ 'opacity': '0' });
                stage3.find('.animation .el1 .check2').css({ 'opacity': '0' });
                stage3.find('.animation .el1 .check3').css({ 'opacity': '0' });
            }
            if (stage3Offset - stage3Height <= 0 && stage3Offset > -stage3Height) {
                if (document.body.clientWidth > 800) {
                    if (stage3Offset >= 0) {
                        stage3.find('.animation').css({ 'margin-bottom': -stage3Offset * 0.4 });
                        stage3.find('.animation').css({ 'margin-right': stage3Offset * 0.4 });
                    } else {
                        stage3.find('.animation').css({ 'margin-bottom': '0' });
                        stage3.find('.animation').css({ 'margin-right': '0' });
                    }
                    if (stage3Offset < 0) {
                        stage3.find('.animation .el1 .check1').animate({ opacity: '1' }, 300, function () {
                            stage3.find('.animation .el1 .check2').animate({ opacity: '1' }, 300, function () {
                                stage3.find('.animation .el1 .check3').animate({ opacity: '1' }, 300);
                            });
                        });
                    }
                } else {
                    stage3.find('.animation').css({ 'margin-bottom': '0' });
                    stage3.find('.animation').css({ 'margin-right': '0' });
                    stage3.find('.animation .el1 .check1').css({ 'opacity': '1' });
                    stage3.find('.animation .el1 .check2').css({ 'opacity': '1' });
                    stage3.find('.animation .el1 .check3').css({ 'opacity': '1' });
                }
            }
        }
    });

    //Last-action форма для redevelopment
    var lastAction = $('#last-action_large');
    var lastActionNavigation = $('#last-action_large .navigation');
    var lastActionNavigationP1 = lastActionNavigation.find('.part1li');
    var lastActionNavigationP2 = lastActionNavigation.find('.part2li');
    var lastActionNavigationP3 = lastActionNavigation.find('.part3li');
    var lastActionNavigationP4 = lastActionNavigation.find('.part4li');
    var lastActionNewComment = '';

    var lastActionP = lastAction.find('.part');
    var lastActionP1 = lastAction.find('.part1');
    var lastActionP2 = lastAction.find('.part2');
    var lastActionP3 = lastAction.find('.part3');
    var lastActionP4 = lastAction.find('.part4');
    var lastActionP1_BNext = lastActionP1.find('.buttons a.next');
    var lastActionP2_BNext = lastActionP2.find('.buttons a.next');
    var lastActionP3_BNext = lastActionP3.find('.buttons a.next');
    var lastActionP_BSend = lastActionP4.find('.buttons a.form-button');
    var lastActionQ1 = lastAction.find('.question1');
    var lastActionQ2 = lastAction.find('.question2');
    var lastActionQ3 = lastAction.find('.question3');
    var lastActionQ4 = lastAction.find('.question4');
    var lastActionQ5 = lastAction.find('.question5');
    var lastActionQ6 = lastAction.find('.question6');
    var lastActionQ7 = lastAction.find('.question7');

    //Переключалка вопроса 1
    lastActionQ1.find('li').click(function () {
        lastActionQ1.find('li').removeClass('active');
        $(this).addClass('active');
        lastActionP1_BNext.addClass('active');
        lastActionNavigationP1.find('p').css({ 'display': 'block' });
        lastActionNavigationP1.find('p').text($(this).find('p').text());
    });

    //Функция проверки для кнопки "далее" и добавление в правое меню
    function checklastActionP2Func() {
        if (lastActionQ2.find('input').val() == '') {
            lastActionNavigationP2.find('p').text(lastActionQ3.find('li.active p').text());
        } else {
            var lastActionQ2Val = lastActionQ2.find('input').val();
            var lastActionQ2NewText = '';
            if (lastActionQ2Val == '1') {
                lastActionQ2NewText = '1 год';
            } else if (lastActionQ2Val == '2' || lastActionQ2Val == '3' || lastActionQ2Val == '4') {
                lastActionQ2NewText = lastActionQ2Val + ' года';
            } else {
                lastActionQ2NewText = lastActionQ2Val + ' лет';
            }
            lastActionNavigationP2.find('p').html(lastActionQ2NewText + '<br>' + lastActionQ3.find('li.active p').text());
        }
        if (lastActionQ2.find('input').val() != '' && lastActionQ3.find('li').is('.active')) {
            lastActionP2_BNext.addClass('active');
        } else {
            lastActionP2_BNext.removeClass('active');
        }
    }

    //Переход на страницу 2
    lastActionP1_BNext.click(function () {
        if (lastActionP1_BNext.hasClass('active')) {
            lastActionP.animate({ opacity: 0 }, 300, function () {
                lastActionP.css({ 'display': 'none' });
                lastActionP2.css({ 'display': 'inline-block' });
                lastActionP2.animate({ opacity: 1 }, 300);
            });
            lastActionNavigationP2.addClass('active');
            lastActionNavigationP2.find('p').css({ 'display': 'block' });
            checklastActionP2Func();
        }
    });

    //Переключалка вопроса 3
    lastActionQ3.find('li').click(function () {
        lastActionQ3.find('li').removeClass('active');
        $(this).addClass('active');
        checklastActionP2Func();
    });
    //Запуск функции при вводе в инпут
    lastActionQ2.find('input').on('input', function () {
        checklastActionP2Func();
    });

    function checklastActionP3Func() {
        var q4input = lastActionQ4.find('#question4input').val();
        var q5input = lastActionQ5.find('#question5input').val();
        var q4select = lastActionQ4.find('.select-imitator input.hiddeninput').val();
        var q5select = lastActionQ5.find('.select-imitator input.hiddeninput').val();
        lastActionNavigationP3.find('p').text('');
        lastActionP3_BNext.removeClass('active');
        if (q4input != '' && q5input != '') {
            lastActionNavigationP3.find('p').html('Текущая ' + q4input + ' ' + q4select + '<br>Желаемая ' + q5input + ' ' + q5select);
            lastActionP3_BNext.addClass('active');
        } else if (q4input != '') {
            lastActionNavigationP3.find('p').html('Текущая ' + q4input + ' ' + q4select);
        } else if (q5input != '') {
            lastActionNavigationP3.find('p').html('Желаемая ' + q5input + ' ' + q5select);
        }
    }
    lastActionQ4.find('#question4input').on('input', function () {
        checklastActionP3Func();
    });
    lastActionQ4.find('.select-imitator').on('click', function () {
        checklastActionP3Func();
    });
    lastActionQ5.find('#question5input').on('input', function () {
        checklastActionP3Func();
    });
    lastActionQ5.find('.select-imitator').on('click', function () {
        checklastActionP3Func();
    });

    //Переход на страницу 3
    lastActionP2_BNext.click(function () {
        if (lastActionP2_BNext.hasClass('active')) {
            lastActionP.animate({ opacity: 0 }, 300, function () {
                lastActionP.css({ 'display': 'none' });
                lastActionP3.css({ 'display': 'inline-block' });
                lastActionP3.animate({ opacity: 1 }, 300);
            });
            lastActionNavigationP3.addClass('active');
            lastActionNavigationP3.find('p').css({ 'display': 'block' });
            checklastActionP3Func();
        }
    });

    //Переход на страницу 4
    lastActionP3_BNext.click(function () {
        if (lastActionP3_BNext.hasClass('active')) {
            lastActionP.animate({ opacity: 0 }, 300, function () {
                lastActionP.css({ 'display': 'none' });
                lastActionP4.css({ 'display': 'inline-block' });
                lastActionP4.animate({ opacity: 1 }, 300);
            });
            lastActionNavigationP4.addClass('active');
            lastActionNavigationP4.find('p').css({ 'display': 'block' });
            lastActionNavigationP4.find('p').text('Ваши контактные данные');
        }
    });

    function checklastActionP4Func() {
        var q6input = lastActionQ6.find('input').val();
        var q7input = lastActionQ7.find('input').val();
        lastActionP_BSend.removeClass('active');
        if (q6input != '' && q7input.length == 17 && lastAction.find('.form-gb-checkbox').prop('checked') == true) {
            lastActionP_BSend.addClass('active');
        }
    }
    lastActionQ6.find('input').on('input', function () {
        checklastActionP4Func();
    });
    lastActionQ7.find('input').on('input', function () {
        checklastActionP4Func();
    });
    lastAction.find('.form-gb-checkbox').on('click', function () {
        checklastActionP4Func();
    });

    //переходы по навигации
    lastActionNavigationP1.click(function () {
        if ($(this).hasClass('active')) {
            lastActionP.animate({ opacity: 0 }, 300, function () {
                lastActionP.css({ 'display': 'none' });
                lastActionP1.css({ 'display': 'inline-block' });
                lastActionP1.animate({ opacity: 1 }, 300);
            });
            lastActionNavigation.find('li').removeClass('active');
            lastActionNavigation.find('p').css({ 'display': 'none' });
            lastActionNavigationP1.addClass('active');
            lastActionNavigationP1.find('p').css({ 'display': 'block' });
        }
    });
    lastActionNavigationP2.click(function () {
        if ($(this).hasClass('active')) {
            lastActionP.animate({ opacity: 0 }, 300, function () {
                lastActionP.css({ 'display': 'none' });
                lastActionP2.css({ 'display': 'inline-block' });
                lastActionP2.animate({ opacity: 1 }, 300);
            });
            lastActionNavigation.find('li').removeClass('active');
            lastActionNavigation.find('p').css({ 'display': 'none' });
            lastActionNavigationP1.addClass('active');
            lastActionNavigationP2.addClass('active');
            lastActionNavigationP1.find('p').css({ 'display': 'block' });
            lastActionNavigationP2.find('p').css({ 'display': 'block' });
        }
    });
    lastActionNavigationP3.click(function () {
        if ($(this).hasClass('active')) {
            lastActionP.animate({ opacity: 0 }, 300, function () {
                lastActionP.css({ 'display': 'none' });
                lastActionP3.css({ 'display': 'inline-block' });
                lastActionP3.animate({ opacity: 1 }, 300);
            });
            lastActionNavigation.find('li').removeClass('active');
            lastActionNavigation.find('p').css({ 'display': 'none' });
            lastActionNavigationP1.addClass('active');
            lastActionNavigationP2.addClass('active');
            lastActionNavigationP3.addClass('active');
            lastActionNavigationP1.find('p').css({ 'display': 'block' });
            lastActionNavigationP2.find('p').css({ 'display': 'block' });
            lastActionNavigationP3.find('p').css({ 'display': 'block' });
        }
    });
});