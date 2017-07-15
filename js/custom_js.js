var aTags = [];

function animateTextbox(file_location){
    $("#text-box").animate({
        opacity: 0
    }, 500,
    function() {
        $(this).animate({
            opacity: 1
        }, 500);
        $("#text-box").load(file_location);   
    });

}

function from0to1en(){
    animateTextbox("html/search_location.html");
/*    $('div#text-box').find('a').each (
        ()=>{
            aTags.push($(this).prop('id'));
            console.log(aTags);
            
        }
    );
    aTag.forEach(function(element) {
        console.log(element);
    });
*/
    // for (var i=0; i<aTags.length; i++){
    //             if (aTags[i] ==='ellis-island'){
    //                 // TODO: g
    //                 console.log('eliis island clicked');
    //                 expandEllis();
    //             }
    // }
    document.title="Select a Location";
   // window.location.href="html/search_location.html";    
}

function expandEllis() {
    console.log("hi");
    animateTextbox("html/ellis_island_details.html"); 
    document.title="Ellis Island";
    
}

function expandShirtwaist() {
}

function expandBrill() {
}

function expandCarnegie() {
}

function expandHart() {
}


$(document).ready(function () {
    
    $("#english_bu").on("click", from0to1en);
    $("#ellis-island").click( function(){
            console.log('eliis island clicked');
            expandEllis();
    });
    $("#shirtwaist-factory").on("click", expandShirtwaist);
    $("#brill-building").on("click", expandBrill);
    $("#carnegie-hall").on("click", expandCarnegie);
    $("#hart-island").on("click", expandHart);
   
});
