/**
 * Created by kissene on 17/3/3.
 */
$(".has_children").click(function(){
    $(this).addClass("highlight").children("a").show().end().silbings().removeClass("highlight").children("a").hide();
});


function test() {
    var $menu = $("#menu");
    var menu = $menu.get(0);
    var temp = document.createElement("p");
    var temp_text = document.createTextNode("1.8-This is a test");
    temp.appendChild(temp_text);
    menu.appendChild(temp);
}

addLoadEvent(test);

$(document).ready(function(){
    var $cr = $("#cr");
    var cr = $cr.get(0);
    $cr.click(function(){
        if($cr.is(":checked")){
            alert("You agreed.");
        }
    })
});

var items = document.getElementsByTagName("p");
for(var i=0; i<items.length; i++){
    items[i].onclick = function(){
        return alert("test");
    };
}