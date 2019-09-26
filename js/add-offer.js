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

  $('.checkbox.oneffect').each(function () {
    var checked = $(this).find('input').is(':checked');
    if (checked == true || checked == 'true') {
      $(this).find('label').addClass('active');
    } else {
      $(this).find('label').removeClass('active');
    }
  });
  $('.checkbox.oneffect').click(function () {
    var checked = $(this).find('input').is(':checked');
    if (checked == true || checked == 'true') {
      $(this).find('label').addClass('active');
    } else {
      $(this).find('label').removeClass('active');
    }
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
  function checkDomains() {
    var result = true;
    var domainZones = ['.ru', '.com', '.net', '.org', '.kz', '.ру', '.рф', '.ua'];
    $('p.error.domains').css({ 'display': 'none' });
    $('input.nodomains, textarea.nodomains').each(function () {
      var thisInput = $(this);
      var thisInputVal = $(this).val();
      domainZones.forEach(function (a) {
        if (thisInputVal.search(a) == '0') {
          thisInput.parents('div.group').find('p.error.domains').css({ 'display': 'block' });
          var destination = thisInput.parents('div.group').offset().top;
          $("html:not(:animated),body:not(:animated)").stop().animate({ scrollTop: destination + 'px' }, 1100, "swing");
          result = false;
          return result;
        }
      });
    });
    return result;
  }
  //Добавить/сохранить объект
  $('a#add,a#save').click(function () {
    var check1 = checkRequired();
    var check2 = checkDomains();
    if (check1 == true && check2 == true) {
      //Все переменные для записи в БД
      var moderationActive = $('#part-moderation-active').find('input.hiddeninput').val();
      var moderationStatus = $('#part-moderation-status').find('input.hiddeninput').val();
      var moderationRecommend = $('#part-moderation-recommend').find('input.hiddeninput').val();
      var moderationBroker = $('#part-moderation-broker').find('input.hiddeninput').val();
      var moderationDate = $('#part-moderation-date').val();
      var moderationHidepatback = $('#part-moderation-hidepayback').find('input.hiddeninput').val();
      var moderationComment = $('#part-moderation-textblock').val();

      var moderationLabelProverenno = $('#part-moderation-labelproverenno').is(':checked');
      var moderationLabelNizkayaarenda = $('#part-moderation-labelnizkayaarenda').is(':checked');
      var moderationLabelVysokayapribyl = $('#part-moderation-labelvysokayapribyl').is(':checked');
      var moderationLabelNizkayaStoimost = $('#part-moderation-labelnizkayastoimost').is(':checked');
      var moderationLabelLicenziya = $('#part-moderation-labellicenziya').is(':checked');
      var moderationLabelKlassifikaciya = $('#part-moderation-labelklassifikaciya').is(':checked');
      var moderationLabelRazreshenie = $('#part-moderation-labelrazreshenie').is(':checked');
      var moderationLabelFranshiza = $('#part-moderation-labelfranshiza').is(':checked');
      var moderationLabelRaspolozhenie = $('#part-moderation-labelraspolozhenie').is(':checked');
      var moderationLabelSobstvennost = $('#part-moderation-labelsobstvennost').is(':checked');
      var moderationLabelReklama = $('#part-moderation-labelreklama').is(':checked');
      var moderationLabelOborudovanie = $('#part-moderation-labeloborudovanie').is(':checked');
      var moderationLabelVozrast = $('#part-moderation-labelvozrast').is(':checked');
      var moderationLabelPomeshenie = $('#part-moderation-labelpomeshenie').is(':checked');
      var moderationLabelDolgosrochniy = $('#part-moderation-labeldolgosrochniy').is(':checked');
      var moderationLabelReputaciya = $('#part-moderation-labelreputaciya').is(':checked');
      var moderationLabelOkupaemost = $('#part-moderation-labelokupaemost').is(':checked');
      var moderationLabelProdazha = $('#part-moderation-labelprodazha').is(':checked');

      var ownerName = $('#part-owner-name').val();
      var ownerPhone1 = $('#part-owner-phone1').val();
      var ownerPhone2 = $('#part-owner-phone2').val();
      var ownerPhone3 = $('#part-owner-phone3').val();
      var ownerPhone4 = $('#part-owner-phone4').val();
      var ownerPhone5 = $('#part-owner-phone5').val();
      var ownerEmail = $('#part-owner-email').val();

      var generalName = $('#part-general-name').val();
      var generalLegalform = $('#part-general-legalform').find('input.hiddeninput').val();
      var generalTaxication = $('#part-general-taxication').find('input.hiddeninput').val();
      var generalFranchise = $('#part-general-franchise').find('input.hiddeninput').val();
      var generalCategory = '';
      $('#part-general-category span.active').each(function () {
        generalCategory += ', ' + $(this).attr('parent');
      });
      generalCategory = generalCategory.replace(/^.{2}/, '');
      var generalType = $('#part-general-category').find('input.hiddeninput').val();
      var generalLicense = $('#part-general-license').find('input.hiddeninput').val();
      var generalResolution = $('#part-general-resolution').find('input.hiddeninput').val();
      var generalClassification = $('#part-general-classification').find('input.hiddeninput').val();
      var generalAge = $('#part-general-age').find('input.hiddeninput').val();
      var generalFinalcost = $('#part-general-finalcost_input').val();
      var generalOwnercost = $('#part-general-ownercost_input').val();
      var generalTitle = $('#part-general-title').val();
      var generalTextblock = $('#part-general-textblock').val();

      var locationAddress = $('#part-location-address').val();
      var locationMetro = $('#metro-select-imitator').find('input.hiddeninput').val();
      var locationBuildingtype = $('#part-location-buildingtype').find('input.hiddeninput').val();
      var locationFund = $('#part-location-fund').find('input.hiddeninput').val();
      var locationFlorcurrent = $('#part-location-flor-current').val();
      var locationFlorall = $('#part-location-flor-all').val();
      var locationEnter = $('#part-location-enter').find('input.hiddeninput').val();
      var locationQuadrature = $('#part-location-quadrature').val();
      var locationOwn = $('#part-location-own').find('input.hiddeninput').val();
      var locationRent = $('#part-location-rent').find('input.hiddeninput').val();
      var locationProlongation = $('#part-location-prolongation').find('input.hiddeninput').val();
      var locationLeaseterm = $('#part-location-leaseterm').val();
      var locationRentcostAverage = $('#part-location-rentcostaverage').val();
      var locationRentcostFrom = $('#part-location-rentcostfrom').val();
      var locationRentcostTo = $('#part-location-rentcostto').val();
      var locationCommunalincuded = $('#part-location-communalincuded').find('input.hiddeninput').val();
      var locationCommunalcostAverage = $('#part-location-communalcostaverage').val();
      var locationCommunalcostFrom = $('#part-location-communalcostfrom').val();
      var locationCommunalcostTo = $('#part-location-communalcostto').val();
      var locationTextblock = $('#part-location-textblock').val();

      var equipmentTextblock = $('#part-location-equipment').val();

      var staffSalary = $('#part-staff-salary').val();
      var staffPersons = $('#part-staff-persons').val();
      var staffTextblock = $('#part-staff-textblock').val();

      var advertiseCost = $('#part-advertise-cost').val();
      var advertiseTextblock = $('#part-advertise-textblock').val();

      var financeTurnoverAverage = $('#part-finance-turnoveraverage').val();
      var financeTurnoverFrom = $('#part-finance-turnoverfrom').val();
      var financeTurnoverTo = $('#part-finance-turnoverto').val();
      var financeProfitAverage = $('#part-finance-profitaverage').val();
      var financeProfitFrom = $('#part-finance-profitfrom').val();
      var financeProfitTo = $('#part-finance-profitto').val();
      var financeTextblock = $('#part-finance-textblock').val();

      var otherOtheradv = $('#part-other-otheradv').find('input.hiddeninput').val();
      //ВЫЗОВ AJAX
      alert('ВЫЗОВ AJAX');
    }
  });

  //Добавлене номеров телефона
  if ($('#part-owner-phone2').val() == '') {
    $('#part-owner-phone2').css({ 'display': 'none' });
  }
  if ($('#part-owner-phone3').val() == '') {
    $('#part-owner-phone3').css({ 'display': 'none' });
  }
  if ($('#part-owner-phone4').val() == '') {
    $('#part-owner-phone4').css({ 'display': 'none' });
  }
  if ($('#part-owner-phone5').val() == '') {
    $('#part-owner-phone5').css({ 'display': 'none' });
  }
  if ($('#part-owner-phone5').css('display') != 'none') {
    $('#part-owner-phone_addbutton').css({ 'display': 'none' });
  }
  $('#part-owner-phone_addbutton').click(function () {
    if ($('#part-owner-phone4').css('display') != 'none') {
      $('#part-owner-phone5').css({ 'display': 'block' });
      $('#part-owner-phone_addbutton').css({ 'display': 'none' });
    } else if ($('#part-owner-phone3').css('display') != 'none') {
      $('#part-owner-phone4').css({ 'display': 'block' });
    } else if ($('#part-owner-phone2').css('display') != 'none') {
      $('#part-owner-phone3').css({ 'display': 'block' });
    } else {
      $('#part-owner-phone2').css({ 'display': 'block' });
    }
  });

  //Лицензия, разрешение, классификация в зависимости от выбранной категории
  $('#onhide-license').css({ 'display': 'none' });
  $('#onhide-resolution').css({ 'display': 'none' });
  $('#onhide-classification').css({ 'display': 'none' });

  function checkCategory() {
    $('#onhide-license').css({ 'display': 'none' });
    $('#onhide-resolution').css({ 'display': 'none' });
    $('#onhide-classification').css({ 'display': 'none' });

    $('#part-general-category').find('span[param-value]').each(function () {
      if ($(this).hasClass('active') == true) {
        if ($(this).attr('parent') == 'obshepit') {
          $('#onhide-license').css({ 'display': 'block' });
        }
        if ($(this).attr('parent') == 'beautyhealth') {
          $('#onhide-license').css({ 'display': 'block' });
        }
        if ($(this).attr('parent') == 'hotel') {
          $('#onhide-classification').css({ 'display': 'block' });
        }
        if ($(this).attr('parent') == 'auto') {
          $('#onhide-resolution').css({ 'display': 'block' });
        }
        if ($(this).attr('parent') == 'trading') {
          $('#onhide-license').css({ 'display': 'block' });
        }
        if ($(this).attr('parent') == 'production') {
          $('#onhide-license').css({ 'display': 'block' });
        }
        if ($(this).attr('parent') == 'service') {
          $('#onhide-license').css({ 'display': 'block' });
        }
        if ($(this).attr('parent') == 'fun') {
          $('#onhide-license').css({ 'display': 'block' });
        }
      }
    });
  }
  checkCategory();
  $('#part-general-category').click(function () {
    checkCategory();
  });

  //Проверка срока аренды
  function checkRent() {
    if ($('#part-location-rent').find('input.hiddeninput').val() == $('#part-location-rent').find('div.onhideparam').attr('param-value')) {
      $('#onhide-prolongation').css({ 'display': 'none' });
      $('#onhide-leaseterm').css({ 'display': 'block' });
    } else {
      $('#onhide-prolongation').css({ 'display': 'block' });
      $('#onhide-leaseterm').css({ 'display': 'none' });
    }
  }
  checkRent();
  $('#part-location-rent').click(function () {
    checkRent();
  });
  //Проверка включенности коммунальных услуг
  function checkCommunal() {
    if ($('#part-location-communalincuded').find('input.hiddeninput').val() == 'true') {
      $('#onhide-communalcost').css({ 'display': 'none' });
    } else {
      $('#onhide-communalcost').css({ 'display': 'block' });
    }
  }
  checkCommunal();
  $('#part-location-communalincuded').click(function () {
    checkCommunal();
  });
  //Проверка на собственность или в аренду
  function checkOwn() {
    if ($('#part-location-own').find('input.hiddeninput').val() == $('#part-location-own').find('div.onhideparam').attr('param-value')) {
      $('#onhide-communalcost').css({ 'display': 'block' });
      $('#onhide-block-own').css({ 'display': 'none' });
    } else {
      checkCommunal();
      $('#onhide-block-own').css({ 'display': 'block' });
    }
  }
  checkOwn();
  $('#part-location-own').click(function () {
    checkOwn();
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

  //Проверка стоимости
  function getInt(val) {
    var tmp1 = val.split(' ').join('');
    tmp1 = parseInt(tmp1);
    return Math.floor(tmp1);
  }
  function checkCost() {
    var inputValue = $('#part-general-cost').val();
    var currentValue = getInt(inputValue);
    var newValue = 0;
    var newValueComiss = 0;
    if ($('#part-general-cost').val() == '') {
      $('.part-general-ownercost_show').text(0);
      $('.part-general-finalcost_show').text(0);
      $('#part-general-finalcost_input').val(0);
      $('#part-general-ownercost_input').val(0);
    } else {
      if ($('#part-general-costquestion').find('input.hiddeninput').val() == "true") {
        if (currentValue >= 500000000) {
          newValueComiss = currentValue - currentValue / (1 + 0.02);
        } else if (currentValue >= 50000000) {
          newValueComiss = currentValue - currentValue / (1 + 0.03);
        } else if (currentValue >= 25000000) {
          newValueComiss = currentValue - currentValue / (1 + 0.04);
        } else if (currentValue >= 15000000) {
          newValueComiss = currentValue - currentValue / (1 + 0.05);
        } else if (currentValue >= 11000000) {
          newValueComiss = currentValue - currentValue / (1 + 0.06);
        } else if (currentValue >= 8000000) {
          newValueComiss = currentValue - currentValue / (1 + 0.07);
        } else if (currentValue >= 5000000) {
          newValueComiss = currentValue - currentValue / (1 + 0.08);
        } else if (currentValue >= 3000000) {
          newValueComiss = currentValue - currentValue / (1 + 0.09);
        } else if (currentValue > 1000000) {
          newValueComiss = currentValue - currentValue / (1 + 0.10);
        } else {
          newValueComiss = 100000;
        }
        if (newValueComiss < 100000) {
          newValueComiss = 100000;
        }
        newValue = currentValue - newValueComiss;
        newValue = newValue / 1000;
        newValue = Math.ceil(newValue);
        newValue = newValue * 1000;
        newValue = newValue.toLocaleString();
        $('.part-general-ownercost_show').text(newValue);
        $('.part-general-finalcost_show').text(inputValue);
        $('#part-general-finalcost_input').val(inputValue);
        $('#part-general-ownercost_input').val(newValue);
      } else {
        if (currentValue >= 500000000) {
          newValueComiss = currentValue * 0.02;
        } else if (currentValue >= 50000000) {
          newValueComiss = currentValue * 0.03;
        } else if (currentValue >= 25000000) {
          newValueComiss = currentValue * 0.04;
        } else if (currentValue >= 15000000) {
          newValueComiss = currentValue * 0.05;
        } else if (currentValue >= 11000000) {
          newValueComiss = currentValue * 0.06;
        } else if (currentValue >= 8000000) {
          newValueComiss = currentValue * 0.07;
        } else if (currentValue >= 5000000) {
          newValueComiss = currentValue * 0.08;
        } else if (currentValue >= 3000000) {
          newValueComiss = currentValue * 0.09;
        } else if (currentValue >= 1000000) {
          newValueComiss = currentValue * 0.1;
        } else {
          newValueComiss = 100000;
        }
        if (newValueComiss < 100000) {
          newValueComiss = 100000;
        }
        newValue = currentValue + newValueComiss;
        newValue = newValue / 1000;
        newValue = Math.ceil(newValue);
        newValue = newValue * 1000;
        newValue = newValue.toLocaleString();
        $('.part-general-ownercost_show').text(inputValue);
        $('.part-general-finalcost_show').text(newValue);
        $('#part-general-finalcost_input').val(newValue);
        $('#part-general-ownercost_input').val(inputValue);
      }
    }
  }
  checkCost();
  $('#part-general-cost').on("input", function () {
    checkCost();
  });
  $('#part-general-costquestion').click(function () {
    checkCost();
  });
  // МИСТИЧЕСКАЯ фигня ПРОИСХОДИТ С ЭТИМ МЕСТОМ ПОЧЕМУ-ТО


  //Не трогать это место!
  //Двигающийся сайдбар
  (function () {
    var a = document.querySelector('#header-tabs-desktop'),
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
            R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#content').getBoundingClientRect().bottom); // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
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
  })();

  //Проверка объявления
  function offerRender(a) {

    //Помещение и расположение
    //тип здания
    var newBuildingTypeValue = $('#part-location-buildingtype_container input').val();
    if (newBuildingTypeValue != '') {
      $('.render_buildingtype').css({ 'display': 'block' });
      $('.render_buildingtype').html('<b>Тип здания:</b> ' + newBuildingTypeValue);
    } else {
      $('.render_buildingtype').css({ 'display': 'none' });
    }
    //фонд
    var newFundValue = $('#part-location-fund_container input').val();
    if (newFundValue != '') {
      $('.render_fund').css({ 'display': 'block' });
      $('.render_fund').html('<b>Фонд помещения:</b> ' + newFundValue);
    } else {
      $('.render_fund').css({ 'display': 'none' });
    }
    //этаж
    var newFlorCurrentValue = $('#part-location-flor-current').val();
    var newFlorAllValue = $('#part-location-flor-all').val();
    if (newFlorCurrentValue != '' || newFlorAllValue != '') {
      $('.render_flor').css({ 'display': 'block' });
      if (newFlorCurrentValue > 0) {
        $('.render_flor').html('<b>Этаж:</b> ' + newFlorCurrentValue + ' из ' + newFlorAllValue);
      } else {
        $('.render_flor').html('<b>Этаж:</b> цокольный из ' + newFlorAllValue);
      }
    } else {
      $('.render_flor').css({ 'display': 'none' });
    }
    //вход
    var newEnterValueHelper = $('#part-location-enter input').val();
    var newEnterValue = $('#part-location-enter').find('a[param-value=' + newEnterValueHelper + ']').text();
    if (newEnterValue != '') {
      $('.render_enter').css({ 'display': 'block' });
      $('.render_enter').html('<b>Вход:</b> ' + newEnterValue);
    } else {
      $('.render_enter').css({ 'display': 'none' });
    }
    //помещение
    var newOwnValueHelper = $('#part-location-own input').val();
    var newOwnValue = $('#part-location-own').find('a[param-value=' + newOwnValueHelper + ']').text();
    if (newOwnValue != '') {
      $('.render_own').css({ 'display': 'block' });
      $('.render_own').html('<b>Помещение:</b> ' + newOwnValue);
    } else {
      $('.render_own').css({ 'display': 'none' });
    }
    //квадратура
    var newQuadratureValue = $('#part-location-quadrature').val();
    if (newQuadratureValue != '') {
      $('.render_quadrature').css({ 'display': 'block' });
      $('.render_quadrature').html('<b>Квадратура помещения:</b> ' + newQuadratureValue + ' м<sup>2</sup>');
    } else {
      $('.render_quadrature').css({ 'display': 'none' });
    }

    var newRentCostAverageValue = $('#part-location-rentcostaverage').val();
    var newRentCostFromValue = $('#part-location-rentcostfrom').val();
    var newRentCostToValue = $('#part-location-rentcostto').val();
    var newRentValueHelper = $('#part-location-rent input').val();
    var newRentValue = $('#part-location-rent').find('a[param-value=' + newRentValueHelper + ']').text();
    var newCommunalCostAverageValue = $('#part-location-communalcostaverage').val();
    var newCommunalCostFromValue = $('#part-location-communalcostfrom').val();
    var newCommunalCostToValue = $('#part-location-communalcostto').val();
    var newCommunalincludedValue = $('#part-location-communalincuded input').val();

    //если объект в аренду
    if ($('#part-location-own').find('input.hiddeninput').val() != $('#part-location-own').find('div.onhideparam').attr('param-value')) {
      //договор аренды

      $('.render_rent').css({ 'display': 'block' });
      //если долгосрочный
      if (newRentValueHelper == $('#part-location-rent').find('div.onhideparam').attr('param-value')) {
        //на какой срок
        var age = $('#part-location-leaseterm').val();
        if (age != '') {
          if (age == 1) {
            newRentValue += ' на 1 год';
          } else if (age > 1 && age <= 4 || age > 21 && age <= 24) {
            newRentValue += ' на ' + age + ' года';
          } else {
            newRentValue += ' на ' + age + ' лет';
          }
        }
      } else {
        //если краткосрочный
        //с пролонгацией?
        if ($('#part-location-prolongation input').val() == 'true') {
          newRentValue += ' с пролонгацией';
        }
      }
      $('.render_rent').html('<b>Договор аренды:</b> ' + newRentValue);
      //арендная плата

      if (newRentCostAverageValue != '' || newRentCostFromValue != '' || newRentCostToValue != '') {
        $('.render_rentcost').css({ 'display': 'block' });
        if (newRentCostFromValue != '' && newRentCostToValue != '') {
          $('.render_rentcost').html('<b>Арендная плата:</b> ' + newRentCostFromValue + ' - ' + newRentCostToValue + ' руб./мес.');
        } else if (newRentCostFromValue != '') {
          $('.render_rentcost').html('<b>Арендная плата:</b> от ' + newRentCostFromValue + ' руб./мес.');
        } else if (newRentCostToValue != '') {
          $('.render_rentcost').html('<b>Арендная плата:</b> до ' + newRentCostToValue + ' руб./мес.');
        } else if (newRentCostAverageValue != '') {
          $('.render_rentcost').html('<b>Арендная плата:</b> ~ ' + newRentCostAverageValue + ' руб./мес.');
        } else {
          $('.render_rentcost').css({ 'display': 'none' });
        }
      } else {
        $('.render_rentcost').css({ 'display': 'none' });
      }
      //коммунальные услуги

      if (newCommunalincludedValue == 'true') {
        $('.render_communalcost').css({ 'display': 'block' });
        $('.render_communalcost').html('<b>Коммунальные услуги:</b> включены в аренду');
      } else {
        if (newCommunalCostAverageValue != '' || newCommunalCostFromValue != '' || newCommunalCostToValue != '') {
          $('.render_communalcost').css({ 'display': 'block' });
          if (newCommunalCostFromValue != '' && newCommunalCostToValue != '') {
            $('.render_communalcost').html('<b>Коммунальные услуги:</b> ' + newCommunalCostFromValue + ' - ' + newCommunalCostToValue + ' руб./мес.');
          } else if (newCommunalCostFromValue != '') {
            $('.render_communalcost').html('<b>Коммунальные услуги:</b> от ' + newCommunalCostFromValue + ' руб./мес.');
          } else if (newCommunalCostToValue != '') {
            $('.render_communalcost').html('<b>Коммунальные услуги:</b> до ' + newCommunalCostToValue + ' руб./мес.');
          } else if (newCommunalCostAverageValue != '') {
            $('.render_communalcost').html('<b>Коммунальные услуги:</b> ~ ' + newCommunalCostAverageValue + ' руб./мес.');
          }
        } else {
          $('.render_communalcost').css({ 'display': 'none' });
        }
      }
    } else {
      //если объект в собственнность
      $('.render_rent').css({ 'display': 'none' });
      $('.render_rentcost').css({ 'display': 'none' });
    }

    //Персонал
    //фот
    var newStaffSalaryValue = $('#part-staff-salary').val();
    if (newStaffSalaryValue != '') {
      $('.render_staffsalary').css({ 'display': 'block' });
      $('.render_staffsalary').html('<b>Фонд оплаты труда:</b> ' + newStaffSalaryValue + ' руб./мес.');
    } else {
      $('.render_staffsalary').css({ 'display': 'none' });
    }
    //количество человек
    var newStaffPersonsValue = $('#part-staff-persons').val();
    if (newStaffPersonsValue != '') {
      $('.render_staffpersons').css({ 'display': 'block' });
      $('.render_staffpersons').html('<b>Количество человек:</b> ' + newStaffPersonsValue + ' чел.');
    } else {
      $('.render_staffpersons').css({ 'display': 'none' });
    }

    //Реклама
    var newAdvertiseCostValue = $('#part-advertise-cost').val();
    if (newAdvertiseCostValue != '') {
      $('.render_advertisecost').css({ 'display': 'block' });
      $('.render_advertisecost').html('<b>Затраты на рекламу:</b> ' + newAdvertiseCostValue + ' руб./мес.');
    } else {
      $('.render_advertisecost').css({ 'display': 'none' });
    }

    //Финансы
    //оборот
    var newTurnoverAverageValue = $('#part-finance-turnoveraverage').val();
    var newTurnoverFromValue = $('#part-finance-turnoverfrom').val();
    var newTurnoverToValue = $('#part-finance-turnoverto').val();
    if (newTurnoverAverageValue != '' || newTurnoverFromValue != '' || newTurnoverToValue != '') {
      $('.render_turnover').css({ 'display': 'block' });
      if (newTurnoverFromValue != '' && newTurnoverToValue != '') {
        $('.render_turnover').html('<b>Оборот:</b> ' + newTurnoverFromValue + ' - ' + newTurnoverToValue + ' руб./мес.');
      } else if (newTurnoverFromValue != '') {
        $('.render_turnover').html('<b>Оборот:</b> от ' + newTurnoverFromValue + ' руб./мес.');
      } else if (newTurnoverToValue != '') {
        $('.render_turnover').html('<b>Оборот:</b> до ' + newTurnoverToValue + ' руб./мес.');
      } else if (newTurnoverAverageValue != '') {
        $('.render_turnover').html('<b>Оборот:</b> ~ ' + newTurnoverAverageValue + ' руб./мес.');
      } else {
        $('.render_turnover').css({ 'display': 'none' });
      }
    } else {
      $('.render_turnover').css({ 'display': 'none' });
    }
    //чистая прибыль
    var newProfitAverageValue = $('#part-finance-profitaverage').val();
    var newProfitFromValue = $('#part-finance-profitfrom').val();
    var newProfitToValue = $('#part-finance-profitto').val();
    if (newProfitAverageValue != '' || newProfitFromValue != '' || newProfitToValue != '') {
      $('.render_profit').css({ 'display': 'block' });
      if (newProfitFromValue != '' && newProfitToValue != '') {
        $('.render_profit').html('<b>Чистая прибыль:</b> ' + newProfitFromValue + ' - ' + newProfitToValue + ' руб./мес.');
      } else if (newProfitFromValue != '') {
        $('.render_profit').html('<b>Чистая прибыль:</b> от ' + newProfitFromValue + ' руб./мес.');
      } else if (newProfitToValue != '') {
        $('.render_profit').html('<b>Чистая прибыль:</b> до ' + newProfitToValue + ' руб./мес.');
      } else if (newProfitAverageValue != '') {
        $('.render_profit').html('<b>Чистая прибыль:</b> ~ ' + newProfitAverageValue + ' руб./мес.');
      } else {
        $('.render_profit').css({ 'display': 'none' });
      }
    } else {
      $('.render_profit').css({ 'display': 'none' });
    }
    //окупаемость + значения чистой прибыли
    var finalCost = $('#part-general-finalcost_input').val().replace(/\s+/g, '');
    var hidePayback = $('#part-moderation-hidepayback').find('input.hiddeninput').val();
    finalCost = finalCost.replace(/\s+/g, '');
    if (hidePayback == '') {
      if (finalCost != '' || finalCost != '0' || finalCost != 0) {
        if (newProfitAverageValue != '' || newProfitFromValue != '' || newProfitToValue != '') {
          $('.render_payback').css({ 'display': 'block' });
          if (newProfitFromValue != '' && newProfitToValue != '') {
            newProfitFromValue = newProfitFromValue.replace(/\s+/g, '');
            newProfitToValue = newProfitToValue.replace(/\s+/g, '');
            $('.render_payback').html('<b>Окупаемость:</b> ' + Math.round(finalCost / newProfitToValue) + ' - ' + Math.round(finalCost / newProfitFromValue) + ' мес.');
          } else if (newProfitFromValue != '') {
            newProfitFromValue = newProfitFromValue.replace(/\s+/g, '');
            $('.render_payback').html('<b>Окупаемость:</b> до ' + Math.round(finalCost / newProfitFromValue) + ' мес.');
          } else if (newProfitToValue != '') {
            newProfitToValue = newProfitToValue.replace(/\s+/g, '');
            $('.render_payback').html('<b>Окупаемость:</b> от ' + Math.round(finalCost / newProfitToValue) + ' мес.');
          } else if (newProfitAverageValue != '') {
            newProfitAverageValue = newProfitAverageValue.replace(/\s+/g, '');
            $('.render_payback').html('<b>Окупаемость:</b> ~ ' + Math.round(finalCost / newProfitAverageValue) + ' мес.');
          } else {
            $('.render_payback').css({ 'display': 'none' });
          }
        } else {
          $('.render_payback').css({ 'display': 'none' });
        }
      } else {
        $('.render_payback').css({ 'display': 'none' });
      }
    } else {
      $('.render_payback').css({ 'display': 'none' });
    }

    //Текстоблоки
    var newGeneralTextBlockValue = $('#part-general-textblock').val();
    $('.render-general-textblock').html(newGeneralTextBlockValue);

    var newLocationTextBlockValue = $('#part-location-textblock').val();
    $('.render-location-textblock').html(newLocationTextBlockValue);

    var newEquipmentTextBlockValue = $('#part-equipment-textblock').val();
    if (newEquipmentTextBlockValue == '') {
      $('.render_equipment-block').css({ 'display': 'none' });
    } else {
      $('.render_equipment-block').css({ 'display': 'block' });
    }
    $('.render-equipment-textblock').html(newEquipmentTextBlockValue);

    var newStaffTextBlockValue = $('#part-staff-textblock').val();
    $('.render-staff-textblock').html(newStaffTextBlockValue);

    var newAdvertiseTextBlockValue = $('#part-advertise-textblock').val();
    $('.render-advertise-textblock').html(newAdvertiseTextBlockValue);

    var newFinanceTextBlockValue = $('#part-finance-textblock').val();
    $('.render-finance-textblock').html(newFinanceTextBlockValue);

    //проверка на пустоту
    if (newStaffSalaryValue == '' && newStaffPersonsValue == '' && newStaffTextBlockValue == '') {
      $('.render_staff-block').css({ 'display': 'none' });
    } else {
      $('.render_staff-block').css({ 'display': 'block' });
    }
    if (newAdvertiseCostValue == '' && newAdvertiseTextBlockValue == '') {
      $('.render_advertise-block').css({ 'display': 'none' });
    } else {
      $('.render_advertise-block').css({ 'display': 'block' });
    }
    if (newStaffSalaryValue == '' && newAdvertiseCostValue == '' && newProfitAverageValue == '' && newProfitFromValue == '' && newProfitToValue == '' && newTurnoverAverageValue == '' && newTurnoverFromValue == '' && newTurnoverToValue == '' && newRentCostToValue == '' && newRentCostFromValue == '' && newRentCostAverageValue == '' && newCommunalCostToValue == '' && newCommunalCostFromValue == '' && newCommunalCostAverageValue == '' && newFinanceTextBlockValue == '' && finalCost == '0') {
      $('.render_finance-block').css({ 'display': 'none' });
    } else {
      $('.render_finance-block').css({ 'display': 'block' });
    }
  }
  $('input,textarea,.select-imitator,.radio-imitator, .switch-btn').each(function () {
    offerRender($(this));
  });
  $('input,textarea,.select-imitator,.radio-imitator, .switch-btn').on('input', function () {
    offerRender($(this));
  });
  $('input,textarea,.select-imitator,.radio-imitator, .switch-btn').click(function () {
    offerRender($(this));
  });

  //Футерная часть с кнопками сохранить и добавить
  var contentHeight = $('#content').height();
  var contentOffset = $('#content').offset();
  var footerHeight = $('#offer-footer').innerHeight();
  var windowHeight = $(window).innerHeight();
  $('#offer-footer').css({ 'top': windowHeight - contentOffset.top - footerHeight + 'px' });
  $(window).resize(function () {
    contentHeight = $('#content').height();
    contentOffset = $('#content').offset();
    footerHeight = $('#offer-footer').innerHeight();
    windowHeight = $(window).innerHeight();
    $('#offer-footer').css({ 'top': windowHeight - contentOffset.top - footerHeight + 'px' });
  });

  //Действия при скроллинге
  $(window).scroll(function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    // Выделение нужного пункта меню при скроллинге
    $('.part').each(function (i, el) {
      var top = $(el).offset().top - 100;
      var bottom = top + $(el).height();
      var scroll = $(window).scrollTop();
      var id = $(el).attr('id');
      if (scroll > top && scroll < bottom) {
        $('#header-tabs-desktop li.active').removeClass('active');
        $('a[href="#' + id + '"]').parent('li').addClass('active');
      }
    });

    //футерная часть заполнения/изменения
    if (scrolled >= contentHeight - 600) {
      $('#offer-footer').stop().css({
        'position': 'relative',
        'margin': '0',
        'top': '0',
        'border-bottom': 'none',
        'opacity': 1,
        'box-shadow': 'none',
        'z-index': '4'
      });
    } else {
      $('#offer-footer').stop().css({
        'position': 'absolute',
        'border-bottom': '1px solid lightgray',
        'top': windowHeight - contentOffset.top - footerHeight + scrolled + 'px',
        'opacity': 0,
        'box-shadow': '0px 0px 10px rgba(0,0,0,0.2)',
        'z-index': '3'
      });
      $('#offer-footer').stop().animate({
        opacity: 1
      });
    }
  });
});