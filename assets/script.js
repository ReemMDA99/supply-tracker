// on click event listener
// ready- once this document finishes loading
$(document).ready(function(){
$("#button").click(function() {
    // console.log("keypress");
    var campListItem = $("input[name=campItem").val();
    $("ol").append("<li>" + campListItem + "</li>");
    $("input[name=campItem").val("");
});
// Keyboard events

// double click to strike and unstrike items
$("ol").on("dblclick", "li", function() {
    //event delegation- allows us to attach a single event listener to a parent element that will fire for all descendents matchin selector, whether those descendants exist now or are added in the future
    //event propogation/ event bubbling- dynamically generated- no direct event listener. when the event is clicked it travels all the way up to the parent like a bubble(bottom to top)
    $(this).toggleClass("strike");
});
$("ol").sortable();
$(function(){
$("#datepicker").datepicker({
    onSelect: function(dateText, inst) {
        var formattedDate = moment(dateText).format('MM Do YY');
        $("date-text").text(formattedDate);
    }
})
});
});