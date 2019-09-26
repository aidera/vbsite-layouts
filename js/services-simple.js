'use strict';

$(document).ready(function () {

    // НЕ ВКЛЮЧАТЬ ЕСЛИ ПОДКЛЮЧЕН JS файл SERVICES_SELL-BUSINESS
    //Анимация вводного экрана
    // $(".show-after-ready1").css({"opacity":"0"})
    // $(".show-after-ready2").css({"opacity":"0", "margin-top": "100px"})
    // $(".show-after-ready3").css({"opacity":"0"})
    // $(".show-after-ready4").css({"opacity":"0"})
    // $("#menu-simple-mobile div.top-line a.logo").css({"opacity":"0", "right": "-100px"})

    // function showAfterReady(){
    //   $(".show-after-ready1").animate({
    //       opacity: 1
    //   }, 800, function(){
    //       $(".show-after-ready2").animate({
    //           marginTop: "101px"
    //       }, 300, function(){
    //           $(".show-after-ready2").animate({
    //               marginTop: "0px",
    //               opacity: 1
    //           }, 400, function(){
    //               $(".show-after-ready3").animate({
    //                   opacity: 1
    //               }, 400, function(){

    //                     $("#menu-simple-mobile div.top-line a.logo").animate({
    //                         right: "-101px"
    //                     }, 800, function(){
    //                         $("#menu-simple-mobile div.top-line a.logo").animate({
    //                             right: "0px",
    //                             opacity: 1
    //                         }, 800)
    //                     })

    //               })
    //           })
    //       })
    //   })
    // }

    // setTimeout(showAfterReady, 1500)

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
});