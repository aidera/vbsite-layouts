'use strict';

$(document).ready(function () {

    if ($('.phoneinput').length > 0) {
        $('.phoneinput').mask('0 (000) 000-00-00');
    }
    if ($('.numberinput').length > 0) {
        $('.numberinput').mask("# ### 000 000 000 000 000 000", { reverse: true });
    }

    //Имитатор чекбокса
    $('.switch-btn').each(function () {
        var switchValue = $(this).find('input.hiddeninput').val();
        if (switchValue == 'true') {
            $(this).addClass('switch-on');
        } else {
            $(this).removeClass('switch-on');
        }
    });
    $('.switch-btn').click(function () {
        var switchValue = $(this).find('input.hiddeninput').val();
        if (switchValue == 'true') {
            $(this).removeClass('switch-on');
            $(this).find('input.hiddeninput').val('');
        } else {
            $(this).addClass('switch-on');
            $(this).find('input.hiddeninput').val('true');
        }
    });

    //Имитатор радио-выбора
    $('.radio-imitator').each(function () {
        var radioValue = $(this).find('input.hiddeninput').val();
        $(this).find('div.list a').removeClass('active');
        $(this).find('div.list a').each(function (e, i) {
            if (radioValue == $(i).attr('param-value')) {
                $(i).addClass('active');
            }
        });
        if (radioValue == "") {
            $(this).find('a:first').addClass('active');
            var newRadioValue = $(this).find('a:first').attr('param-value');
            $(this).find('input.hiddeninput').val(newRadioValue);
        }
    });
    $('.radio-imitator a').click(function () {
        var newRadioValue = $(this).attr('param-value');
        $(this).parents('.radio-imitator').find('a').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.radio-imitator').find('input.hiddeninput').val(newRadioValue);
    });

    //Открывание-закрывание имитатора селекта
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

    //Имитатор селекта
    $('.select-imitator_multiply ul.list li span').click(function () {
        var elem = $(this);
        var elemStatus_active = $(this).hasClass('active');
        var elemStatus_header = $(this).hasClass('header');
        var elemParent = elem.parent('li');
        var elemBody = elem.parent('li').parent('ul.list').parent('div.select-imitator');
        var elemParentClass_all = elemParent.hasClass('all');
        var elemParentClass_group = elemParent.hasClass('group');
        var selectParamValue = '';
        var selectUserValue = '';

        if (elemParentClass_all === true) {
            if (elemStatus_active === false) {
                elemParent.parent().find('span').addClass('active');
            } else {
                elemParent.parent().find('span').removeClass('active');
            }
            selectUserValue = elemBody.find('li.all span p').text();
            selectParamValue = '';
        }
        if (elemParentClass_group === true) {
            elemParent.parent().find('li.all span').removeClass('active');

            if (elemStatus_header === true) {
                if (elemStatus_active === false) {
                    elemParent.find('span').addClass('active');
                } else {
                    elemParent.find('span').removeClass('active');
                }
            } else {
                if (elemParent.find('.header').hasClass('active') === true) {
                    elemParent.find('.header').removeClass('active');
                }
                if (elemStatus_active === false) {
                    elem.addClass('active');
                } else {
                    elem.removeClass('active');
                }
            }
        }
        if (elemBody.find('ul.list li.all span').hasClass('active')) {
            selectUserValue = elemBody.find('li.all span p').text();
            selectParamValue = '';
        } else {
            elemBody.find('ul.list li.group').each(function () {
                if ($(this).find('span.header').hasClass('active')) {
                    var x = $(this).find('span.header p').text();
                    if (selectUserValue == '') {
                        selectUserValue = x;
                    } else {
                        selectUserValue += ', ' + x;
                    }
                    var y = $(this).find('span.header').attr('param-value');
                    if (selectParamValue == '') {
                        selectParamValue = y;
                    } else {
                        selectParamValue += ', ' + y;
                    }
                } else {
                    $(this).find('span.active').each(function () {
                        var x = $(this).find('p').text();
                        if (selectUserValue == '') {
                            selectUserValue = x;
                        } else {
                            selectUserValue += ', ' + x;
                        }
                        var y = $(this).attr('param-value');
                        if (selectParamValue == '') {
                            selectParamValue = y;
                        } else {
                            selectParamValue += ', ' + y;
                        }
                    });
                }
            });
        }
        elemBody.find('input.hiddeninput').val(selectParamValue);
        if (selectUserValue != '') {
            elemBody.find('div.input-container input').val(selectUserValue);
        } else {
            selectUserValue = elemBody.find('li.all span p').text();
            elemBody.find('div.input-container input').val(selectUserValue);
        }
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

    //Проверка полей
    function checkRequired() {
        var result = true;
        $('p.error.required').css({ 'display': 'none' });
        $('input.required').each(function () {
            if ($(this).val() == '') {
                $($(this)).parents('div.group').find('p.error.required').css({ 'display': 'block' });
                var destination = $(this).parents('div.group').offset().top;
                $("html:not(:animated),body:not(:animated)").stop().animate({ scrollTop: destination + 'px' }, 1100, "swing");
                result = false;
                return result;
            }
        });
        return result;
    }
    //Добавить/сохранить объект
    $('a#add,a#save').click(function () {
        var check = checkRequired();
        if (check == true) {
            //Все переменные для записи в БД
            //ВЫЗОВ AJAX
            alert('ВЫЗОВ AJAX');
        }
    });

    //Проверка инпутов и текстарей на введенные символы и их максимум
    function checkSymbols() {
        $('.symbols-input').each(function () {
            var inputValue = $(this).val();
            var maxLength = $(this).parents('div.group').find('div.symbols p.all').text();
            var newInputValue = '';
            if ($(this).parents('div.group').find('div.symbols').hasClass('deny')) {
                newInputValue = inputValue.slice(0, maxLength);
                $(this).val(newInputValue);
            } else {
                newInputValue = inputValue;
            }
            var inputLength = newInputValue.length;
            if (inputLength == '' || !inputLength) {
                inputLength = 0;
            }
            $(this).parents('div.group').find('div.symbols p.current').text(inputLength);
            if (inputLength >= maxLength) {
                $(this).parents('div.group').find('div.symbols p').css({ "color": 'red' });
            } else {
                $(this).parents('div.group').find('div.symbols p').css({ "color": 'black' });
            }
        });
    }
    checkSymbols();
    $('.symbols-input').on("input", function () {
        checkSymbols();
    });
});