/**
 * Created by kissene on 17/3/3.
 */

//test1 jQuery for list.
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

//test2 jQuery the change between DOM variable and jQuery variable
$(document).ready(function(){
    var $cr = $("#cr");
    var cr = $cr.get(0);
    $cr.click(function(){
        if($cr.is(":checked")){
            alert("You agreed.");
        }
    })
});

//test3 DOM
var items = document.getElementsByTagName("p");
for(var i=0; i<items.length; i++){
    items[i].onclick = function(){
        alert("test" + i);
    };
}

//test4 DOM
var tables = document.getElementsByTagName("tr");
for(var i=0; i<tables.length; i++){
    if(i%2 == 1){
        tables[i].style.backgroundColor = "#888";
    }
}

var btn = document.getElementById("btn");
btn.onclick = function(){
    var arrays = new Array();
    var item = document.getElementsByClassName("t5");
    for(var i=0; i<item.length; i++){
        if(item[i].checked){
            arrays.push(item[i].value);
        }
    }
    alert("The number is " + arrays.length);
}

//test6

// $('#one').css("background","#bbffaa");
// $('.mini').css("background","#bbffcc");
// $('div').css("background","#bbffdd");
// $('*').css("background","#bbffee");
// $('span,#two').css("background","#aaccbb");
// $('body div').css("background","#bbaacc");
// $('body > div').css("background","#ddaacc");
// $('.one + div').css("background","#aabbcc");
// $('#two ~ div').css("background","#aabbcc");

// $('#two').nextAll("div").css("background","#aabbcc");
// $('.one').siblings("div").css("background","#bbaacc");

// $('div:first').css("background","#ddaacc");
// $('div:last').css("background","#aabbcc");3

// $('div:not(.one)').css("background","#ddaabb");
// $('div:even').css("background","#aabbcc");
// $('div:odd').css("background","#bbccaa");
// $('div:eq(4)').css("background","#aabbcc");
// $('div:gt(4)').css("background","#aabbcc");
// $('div:lt(4)').css("background","#aabbcc");
// $(':header').css("background","#aabbcc");
// $(':animated').css("background","#aabbcc");
// $('div:contains("class is one")').css("background","#aabbcc");
// $('div:empty').css("background","#aabbcc");
// $('div:has(.one)').css("background","#aabbcc");
// $('div:parent').css("background","#aabbcc");
// $('div:visible').css("background","#aabbcc");
// $('div:hidden').show(1000);
$('div:parent').css("color","#bbccdd");