var curr_order_form = null;
$(document).ready(function(){


    //maskedinput
    // $(".form-gb_input-phone").mask("8 (999) 999-99-99");

    // При клике на любую из кнопок "отправить"
    $('.form-gb_button').click(function(){

        // определение текущей формы
        var button = $(this);
        var parent = $(this).closest('form');
        curr_order_form = parent;
        var errors = parent.find('.form-gb_errors');
        var loading = parent.find('.form-gb_loading');
        var nameInput = parent.find('.form-gb_input-name').val();
        var phoneInput = parent.find('.form-gb_input-phone').val();
        var commentInput = parent.find('.form-gb_input-comment').val();
        if(!commentInput){commentInput='без комментариев'};
        var description = parent.attr('form-gb-desc');
        var page = parent.attr('form-gb-page');
        var checkboxCheck = parent.find('.form-gb-checkbox').is(':checked');
        var nameCheck = false;
        var phoneCheck = false;
        var commentCheck = true;

        // очистка ошибок для дальнейшего переопределения
        $(errors).empty();

        // Функции проверки полей и их запуск
        function nameCheckFunc(nameInput){
            var re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/i
            var valid = re.test(nameInput)
            if (valid === false) {
                $(errors).append('<span>Введите имя</span>');
                nameCheck = false;
            }else{
                nameCheck = true;
            }
        }
        nameCheckFunc(nameInput);

        function phoneCheckFunc(phoneInput){
            if (phoneInput){
                phoneCheck = true;
            }else{
                $(errors).append('<span>Введите номер телефона</span>');
                phoneCheck = false;
            }
        }
        phoneCheckFunc(phoneInput);

        function checkboxCheckFunc(checkboxCheck){
            if(checkboxCheck == false){
                $(errors).append('<span>Нужно согласиться с условиями и поставить галочку</span>');
            }
        }
        checkboxCheckFunc(checkboxCheck);

        // проверка валидности полей и отправа ajax запроса
        if (nameCheck === true && phoneCheck === true && checkboxCheck === true){
            button.css({'display': 'none'})
            loading.css({'display': 'block'})
            
            grecaptcha.execute();

            // Если надо сделать проверку без отправки ajax
            // ok.css({'display': 'block'});
            // конец проверки
            /*
            $.ajax({
                type: "POST",
                url: "libs/form-gb/ajax.php",
                data: "name=" + nameInput + "&phone=" + phoneInput + "&comment=" + commentInput + "&form=" + description + "&page=" + page,
                dataType: "html",
                cache: false,
                success: function (data) {
                    if (data === "yes") {
                        document.location.href = '/thank-you'
                    }
                }
            });
            */
            
        }


    })
})

function check_server_recaptcha(token) {

    if (null == curr_order_form) {
    //if (true) {
        document.location.href = '/404';
        return;
    }

    var form = curr_order_form;
    var nameInput = form.find('.form-gb_input-name').val();
    var phoneInput = form.find('.form-gb_input-phone').val();
    var commentInput = form.find('.form-gb_input-comment').val();
    var description = form.attr('form-gb-desc');
    var page = form.attr('form-gb-page');

    var data = {
        g_recaptcha_response: token,
        name: nameInput,
        phone: phoneInput,
        comment: commentInput,
        desc: description,
        page: page,
    };

    $.ajax({
        type: "POST",
        url: "/bitrix/components/vbiznese/order.call/request_order_call.php",
        data: data,
        dataType: "html",
        cache: false,
        success: function (data) {
            if (data === "true") {
                document.location.href = '/thank-you'
            } else {
                //grecaptcha.reset();
                document.location.href = '/404'
            }
        }
    });
}
