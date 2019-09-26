'use strict';

$(document).ready(function () {
    //Значения в поисковой менюшке
    $('section#search div.themes a').click(function () {
        var elem = $(this);
        var elemStatus_active = $(this).hasClass('active');
        var selectParamValue = '';

        if (elemStatus_active === false) {
            elem.addClass('active');
        } else {
            elem.removeClass('active');
        }
        $('section#search div.themes a').each(function () {
            if ($(this).hasClass('active') === true) {
                if (selectParamValue == '') {
                    selectParamValue = $(this).attr('param-value');
                } else {
                    selectParamValue += ', ' + $(this).attr('param-value');
                }
            }
        });
    });

    // Подставление значений +при загрузки страницы
    $('section#search div.themes a').each(function () {
        var generalInputValue = $('section#search div.themes .hiddeninput').val();
        if (generalInputValue && generalInputValue != '' && generalInputValue != undefined) {
            var generalArray = generalInputValue.split(', ');
            $('section#search div.themes a').each(function () {
                var currentSpanOfParamValue = $(this);
                var currentValue = $(this).attr('param-value');
                $.each(generalArray, function (i, v) {
                    if (currentValue == v) {
                        currentSpanOfParamValue.addClass('active');
                    }
                });
            });
        }
    });
});