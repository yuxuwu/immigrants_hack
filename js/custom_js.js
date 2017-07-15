function from0to1en(){
    $("#text-box").animate({
        opacity: 0
    }, 500,
    function() {
        $(this).animate({
            opacity: 1
        }, 500);
        $("#text-box").load("html/search_location.html");   
    });

}


$(document).ready(function () {
    $("#english_bu").on("click", from0to1en);
});
