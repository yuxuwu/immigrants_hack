function from0to1(){
    document.getElementById("text-box").innerHTML = "<h1>Testing</h1>";
}


$(document).ready(function () {
    $("#button0").on("click", from0to1);
});
