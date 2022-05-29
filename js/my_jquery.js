$(document).ready(function () {
    $(".ques_item").click(function () {
        $(this).find(".hide_txt").slideToggle(500);
        $(this).find(".plusBtn").toggle();
        $(this).find(".minusBtn").toggle();
        $(this).find(".title").toggleClass("blue");
        $(this).siblings().children(".title_box").children(".title").removeClass("blue");
        $(this).siblings().children(".hide_txt").slideUp(500);
    });
    /*-----------------------------------------------------*/
    $(".m10").click(function (event) {
        event.preventDefault();
        $(".changeNum").text("10000");
        $(".basic_money").text("600");
        $(".normal_money").text("1600");
    });
    $(".m15").click(function (event) {
        event.preventDefault();
        $(".changeNum").text("15000");
        $(".basic_money").text("800");
        $(".normal_money").text("1800");
    });

    $(".m20").click(function (event) {
        event.preventDefault();
        $(".changeNum").text("20000");
        $(".basic_money").text("1000");
        $(".normal_money").text("2000");
    });

    $(".m25").click(function (event) {
        event.preventDefault();
        $(".changeNum").text("25000");
        $(".basic_money").text("1200");
        $(".normal_money").text("2200");
    });

    $(".m25p").click(function (event) {
        event.preventDefault();
        $(".changeNum").text(">25000");
        $(".basic_money").text("1400");
        $(".normal_money").text("2400");

    });

    /*-------------------------------------------------------*/
    $(".gotop").click(function () {
        $("html").animate({
            scrollTop: 0
        }, 500);

    });


});
