"use strict";

$(document).ready(function () {

    //Анимация вводного экрана
    $(".show-after-ready1").css({ "opacity": "0" });
    $(".show-after-ready2").css({ "opacity": "0", "margin-top": "100px" });
    $(".show-after-ready3").css({ "opacity": "0" });
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

    var advEducationEl1MaxWidth = $('#advantages .education  .el1').width();
    $(window).scroll(function () {
        if (document.body.clientWidth >= 600) {
            var scrolled = window.pageYOffset || document.documentElement.scrollTop;

            var advAllIsRealOffset = $('#advantages .all-is-real').offset().top - scrolled;
            var advAllIsRealHeight = $('#advantages .all-is-real').height();
            if (advAllIsRealOffset - advAllIsRealHeight <= 0 && advAllIsRealOffset > -advAllIsRealHeight) {
                $('#advantages .all-is-real .text').css({ 'margin-top': -advAllIsRealOffset * 0.2 });
            }

            var advAllDocumentsOffset = $('#advantages .all-documents').offset().top - scrolled;
            var advAllDocumentsHeight = $('#advantages .all-documents').height();
            if (advAllDocumentsOffset - advAllDocumentsHeight <= 0 && advAllDocumentsOffset > -advAllDocumentsHeight) {
                if (advAllDocumentsOffset < 0) {
                    $('#advantages .all-documents .el1').css({ 'margin-top': 0 });
                    $('#advantages .all-documents .el2').css({ 'margin-top': 0 });
                    $('#advantages .all-documents .el3').css({ 'margin-top': 0 });
                    $('#advantages .all-documents .el4').css({ 'margin-top': 0 });
                } else {
                    $('#advantages .all-documents .el1').css({ 'margin-top': advAllDocumentsOffset * 0.4 });
                    $('#advantages .all-documents .el2').css({ 'margin-top': advAllDocumentsOffset * 2.2 });
                    $('#advantages .all-documents .el3').css({ 'margin-top': advAllDocumentsOffset * 0.8 });
                    $('#advantages .all-documents .el4').css({ 'margin-top': advAllDocumentsOffset * 0.4 });
                }
            }

            var advEducationOffset = $('#advantages .education').offset().top - scrolled;
            var advEducationHeight = $('#advantages .education').height();
            var advEducationEl1CurrentWidth = $('#advantages .education  .el1').width();
            if (advEducationOffset - advEducationHeight <= 0 && advEducationOffset > -advEducationHeight) {
                if (document.body.clientWidth > 800) {
                    $('#advantages .education .el1').css({ 'width': advEducationOffset * 5 + advEducationEl1MaxWidth });
                    $('#advantages .education .el2').css({ 'width': advEducationOffset * 3 + advEducationEl1MaxWidth });
                } else {
                    $('#advantages .education .el1').css({ 'width': advEducationOffset * 3 + advEducationEl1MaxWidth });
                    $('#advantages .education .el2').css({ 'width': advEducationOffset * 1.5 + advEducationEl1MaxWidth });
                }
            }

            var advProtectionOffset = $('#advantages .protection').offset().top - scrolled;
            var advProtectionHeight = $('#advantages .protection').height();
            if (advProtectionOffset - advProtectionHeight <= 0 && advProtectionOffset > -advProtectionHeight) {
                $('#advantages .protection .text').css({ 'margin-top': -advProtectionOffset * 0.2 });
                $('#advantages .protection .background').css({ 'margin-left': -advProtectionOffset * 0.05 });
                $('#advantages .protection .el1').css({ 'margin-right': -advProtectionOffset * 0.05 });
            }
        }
    });
});