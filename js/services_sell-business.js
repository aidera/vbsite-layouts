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
                        }, 200);

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
    }

    setTimeout(showAfterReady, 1500);

    $(window).scroll(function () {
        if (document.body.clientWidth >= 600) {
            var scrolled = window.pageYOffset || document.documentElement.scrollTop;

            var advAdvertisementOffset = $('#advantages .advertisement').offset().top - scrolled;
            var advAdvertisementHeight = $('#advantages .advertisement').height();
            if (advAdvertisementOffset - advAdvertisementHeight <= 0 && advAdvertisementOffset > -advAdvertisementHeight) {
                $('#advantages .advertisement .background').css({ 'left': advAdvertisementOffset * 0.02 });
                $('#advantages .advertisement .animation').css({ 'margin-left': -advAdvertisementOffset * 2 });
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

            var advNoOthersOffset = $('#advantages .no-others').offset().top - scrolled;
            var advNoOthersHeight = $('#advantages .no-others').height();
            if (advNoOthersOffset - advNoOthersHeight <= 0 && advNoOthersOffset > -advNoOthersHeight) {
                $('#advantages .no-others .text').css({ 'margin-top': -advNoOthersOffset * 0.2 });
                $('#advantages .no-others .el1').css({ 'margin-right': -advNoOthersOffset * 0.02 });
                $('#advantages .no-others .el2').css({ 'margin-right': -advNoOthersOffset * 0.05 });
                $('#advantages .no-others .el3').css({ 'margin-right': -advNoOthersOffset * 0.1 });
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