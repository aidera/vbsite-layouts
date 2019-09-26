var curr_order_form_businessredevelopment = null;
$(document).ready(function () {



    $('#last-action_large a.form-button').click(function () {
        if($(this).hasClass('active')){
            // определение текущей формы
            var button = $(this);
            var parent = $(this).closest('form');
            curr_order_form_businessredevelopment = parent;
            var errors = parent.find('.form-gb_errors');
            var loading = parent.find('.form-gb_loading');
            var nameInput = parent.find('.form-gb_input-name').val();
            var phoneInput = parent.find('.form-gb_input-phone').val();
            var commentInput = 'Услуга: бизнес редевелопмент. Сфера: '
                +parent.find('.question1 li.active p').text()
                +'. Возраст: '+parent.find('.question2 input').val()
                +'. '+parent.find('.question3 li.active p').text()
                +'. Текущая прибыль: '+parent.find('.question4 #question4input').val()+' '+parent.find('.select-imitator input.hiddeninput').val()
                +'. Желаемая прибыль: '+parent.find('.question5 #question5input').val()+' '+parent.find('.select-imitator input.hiddeninput').val()

            if (!commentInput) {
                commentInput = 'без комментариев'
            }
            ;
            var description = parent.attr('form-gb-desc');
            var page = parent.attr('form-gb-page');

            // очистка ошибок для дальнейшего переопределения
            $(errors).empty()

            button.css({'display': 'none'})
            loading.css({'display': 'block'})

            grecaptcha.execute()


        
        }
        
    });
})

function check_server_recaptcha(token) {

    if (null == curr_order_form_businessredevelopment) {
        //if (true) {
        document.location.href = '/404';
        return;
    }

    try {
        fbq('track', 'Lead');
    } catch (e) {
    }

    var form = curr_order_form_businessredevelopment;
    var nameInput = form.find('.form-gb_input-name').val();
    var phoneInput = form.find('.form-gb_input-phone').val();
    var commentInput = 'Услуга: бизнес редевелопмент. Сфера: '
        +form.find('.question1 li.active p').text()
        +'. Возраст: '+form.find('.question2 input').val()
        +'. '+form.find('.question3 li.active p').text()
        +'. Текущая прибыль: '+form.find('.question4 #question4input').val()+' '+parent.find('.select-imitator input.hiddeninput').val()
        +'. Желаемая прибыль: '+form.find('.question5 #question5input').val()+' '+parent.find('.select-imitator input.hiddeninput').val()

    if (!commentInput) {
        commentInput = 'без комментариев'
    }
    var description = form.attr('form-gb-desc');
    var page = form.attr('form-gb-page');
    var contact_broker = $("meta[name='help_contact']").attr("content");


    var div_g_recaptcha = $('.g-recaptcha');

    var utm_source = div_g_recaptcha.attr("utm_source");
    var utm_medium = div_g_recaptcha.attr("utm_medium");
    var utm_campaign = div_g_recaptcha.attr("utm_campaign");

    var data = {
        g_recaptcha_response: token,
        name: nameInput,
        phone: phoneInput,
        comment: commentInput,
        desc: description,
        page: page,
        contact_broker: contact_broker,

        utm_source: utm_source,
        utm_medium: utm_medium,
        utm_campaign: utm_campaign,
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
