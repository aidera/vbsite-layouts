"use strict";

$(document).ready(function () {

    //Анимация вводного экрана
    $(".show-after-ready1").css({ "opacity": "0" });
    $(".show-after-ready2").css({ "opacity": "0", "margin-top": "100px" });
    $(".show-after-ready3").css({ "opacity": "0", "margin-top": "100px" });
    $(".show-after-ready4").css({ "opacity": "0" });
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

    // ---QUESTER---
    function questerForm() {

        // переменные
        var blockQuest1 = $('#quester .quest1');
        var inputQuest1 = $('#quester input.q-form_input_quest1');
        var buttonQuest1 = $('#quester a.q-form_button_quest1');
        var blockQuest2 = $('#quester .quest2');
        var inputQuest2 = $('#quester input.q-form_input_quest2');
        var buttonQuest2 = $('#quester a.q-form_button_quest2');
        var blockQuest3 = $('#quester .quest3');
        var inputQuest3 = $('#quester input.q-form_input_quest3');
        var buttonSubmit = $('#quester a.q-form_button_submit');
        var blockSuccess = $('#quester .success');
        var blockError = $('#quester .error');

        // Маска на телефон
        inputQuest3.mask('0 (000) 000-00-00');

        // ШАГ1
        // проверка наличия текста
        inputQuest1.on('input', function () {
            if ($(this).val() != '') {
                buttonQuest1.addClass('active');
            } else {
                buttonQuest1.removeClass('active');
            }
        });
        // переключить на 2 вопрос
        buttonQuest1.click(function () {
            if ($(this).hasClass('active') == true) {
                blockQuest1.animate({
                    opacity: 0
                }, 200, function () {
                    blockQuest1.css({ 'display': 'none' });
                    blockQuest2.css({ 'display': 'block' });
                    blockQuest2.animate({
                        opacity: 1
                    }, 200);
                });
            }
        });

        // ШАГ2
        // всегда active потому что можно выбрать пустое значение
        buttonQuest2.addClass('active');
        // переключить на 3 вопрос
        buttonQuest2.click(function () {
            if ($(this).hasClass('active') == true) {
                blockQuest2.animate({
                    opacity: 0
                }, 200, function () {
                    blockQuest2.css({ 'display': 'none' });
                    blockQuest3.css({ 'display': 'block' });
                    blockQuest3.animate({
                        opacity: 1
                    }, 200);
                });
            }
        });

        // ШАГ3
        // проверка наличия текста
        inputQuest3.on('input', function () {
            console.log($(this).val());
            console.log($(this).val().replace(/\D/g, "").length);
            if ($(this).val().replace(/\D/g, "").length == 11) {
                buttonSubmit.addClass('active');
            } else {
                buttonSubmit.removeClass('active');
            }
        });
        // отправка формы
        buttonSubmit.click(function () {
            if ($(this).hasClass('active') == true) {
                buttonSubmit.removeClass('active');
                buttonSubmit.children('img.arrow').css({ 'display': 'none' });
                buttonSubmit.children('img.loading').css({ 'display': 'block' });
                var data = {
                    wantedIncome: inputQuest1.val(),
                    wantedCategory: inputQuest2.val(),
                    phone: inputQuest3.val()
                };
                $.ajax({
                    type: "POST",
                    // url: "/bitrix/components/vbiznese/order.call/request_order_call.php",
                    data: data,
                    dataType: "html",
                    cache: false,
                    success: function success(data) {
                        if (data === "true") {
                            blockQuest3.animate({
                                opacity: 0
                            }, 200, function () {
                                blockQuest3.css({ 'display': 'none' });
                                blockSuccess.css({ 'display': 'block' });
                                blockSuccess.animate({
                                    opacity: 1
                                }, 200);
                            });
                        } else {
                            blockQuest3.animate({
                                opacity: 0
                            }, 200, function () {
                                blockQuest3.css({ 'display': 'none' });
                                blockError.css({ 'display': 'block' });
                                blockError.animate({
                                    opacity: 1
                                }, 200);
                            });
                        }
                        buttonSubmit.children('img.arrow').css({ 'display': 'block' });
                        buttonSubmit.children('img.loading').css({ 'display': 'none' });
                    }
                });
            }
        });
    }
    questerForm();
});