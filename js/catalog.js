'use strict';

$(document).ready(function () {

    //Маска для поле ввода
    $('.cost-search').mask("### ### ###", { reverse: true });
    $('.income-search').mask("### ### ###", { reverse: true });

    //Открытие-закрытие расширенного поиска
    $(".show-hide_catalog-search-form").click(function () {
        if ($(".show-hide_catalog-search-form").hasClass('active')) {
            $(this).removeClass('active');
            $(this).find('p').text('Расширенный поиск');
            $(this).find('img').css({ 'transform': 'rotate(90deg)', 'margin-top': '-12px' });
            $('#catalog-search-form').css({ 'display': 'none' });
        } else {
            $(this).addClass('active');
            $(this).find('p').text('Скрыть поиск');
            $(this).find('img').css({ 'transform': 'rotate(270deg)', 'margin-top': '-7px' });
            $('#catalog-search-form').css({ 'display': 'block' });
        }
    });
    $(window).resize(function () {
        if (document.body.clientWidth >= 1400) {
            $('#catalog-search-form').css({ 'display': 'block' });
        } else {
            if ($(".show-hide_catalog-search-form").hasClass('active')) {
                $(this).addClass('active');
                $(this).find('p').text('Скрыть поиск');
                $(this).find('img').css({ 'transform': 'rotate(270deg)', 'margin-top': '-7px' });
                $('#catalog-search-form').css({ 'display': 'block' });
            } else {
                $(this).removeClass('active');
                $(this).find('p').text('Расширенный поиск');
                $(this).find('img').css({ 'transform': 'rotate(90deg)', 'margin-top': '-12px' });
                $('#catalog-search-form').css({ 'display': 'none' });
            }
        }
    });

    //Имитатор селекта (открыть-закрыть список)

    $('div.select-imitator_overlay').css({ "display": "none", "opacity": "0" });
    $('#category-select-imitator ul.list').css({ "display": "none", "opacity": "0" });
    $('#subcategory-select-imitator ul.list').css({ "display": "none", "opacity": "0" });
    $('#metro-select-imitator ul.list').css({ "display": "none", "opacity": "0" });
    $('#tenure-select-imitator ul.list').css({ "display": "none", "opacity": "0" });
    $('.offer-card-container_sorting-block div.list').css({ "display": "none", "opacity": "0" });

    $('.select-imitator .input-container').click(function () {
        $('div.select-imitator_overlay').css({ "display": "block" }).stop().animate({
            opacity: "0.5"
        }, 500);
        $(this).parent('.select-imitator').find('ul.list').css({ "display": "block" }).stop().animate({
            opacity: "1"
        }, 300);
    });
    $('.offer-card-container_sorting-block-activator').click(function () {
        $('div.select-imitator_overlay').css({ "display": "block" }).stop().animate({
            opacity: "0.5"
        }, 500);
        $('.offer-card-container_sorting-block div.list').css({ "display": "block" }).stop().animate({
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

    //Проверка на наличие выбора категории для типа объекта
    function checkCategory(elem) {
        $('#subcategory-select-imitator ul.list li.group').css({ 'display': 'none' });
        var elemParameter = '';
        if (elem != false) {
            elemParameter = elem.attr('param-value');
            $('#subcategory-select-imitator ul.list span').removeClass('active');
        } else {
            elemParameter = $('#category-select-imitator input.hiddeninput').val();
        }
        $('#subcategory-select-imitator ul.list li.group[param-value="' + elemParameter + '"]').css({ 'display': 'block' });

        if ($('#category-select-imitator input.hiddeninput').val() != '') {

            $('div.subcategory div.status').removeClass('disable');
            if ($('#subcategory-select-imitator input.hiddeninput').val() == '') {
                $('#subcategory-select-imitator_container input').val('--Все типы--');
            }
        } else {
            $('div.subcategory div.status').addClass('disable');
            $('#subcategory-select-imitator_container input').val('--Выберите категорию-');
        }
    }
    checkCategory(false);
    $('#category-select-imitator ul.list li span').click(function () {
        $('#subcategory-select-imitator input.hiddeninput').val('');
        checkCategory($(this));
    });
});