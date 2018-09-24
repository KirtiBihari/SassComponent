//import "../../node_modules/bootstrap/scss/bootstrap.scss"
// import "../../node_modules/font-awesome/css/font-awesome.css"
import "../scss/main.scss"


import $ from "jquery"
window.$ = $

$("#allRateInfo").click(function() {
    $("#allRateInfo span i").toggleClass('slideup');
    $("#room-info").slideToggle( "slow", function(event) {

    });
});
$(".view-desc").click(function() {
    $(this).parent().find("i").toggleClass( "slideup" );
    $(this).parent().parent().find(".room-desc-container").slideToggle( "slow", function(event) {
    
    });
});
