/**
 * Created by kissene on 17/2/26.
 */
function positionMessage() {
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
     elem.style.position = "absolute";
    // elem.style.top = "100px";
    // elem.style.left = "50px";
    // var elem1 = document.getElementById("message2");
    //  elem1.style.position = "absolute";

    moveElement("message",500,200,10);
    moveElement("message2",500,200,10);

}

addLoadEvent(positionMessage);

function moveElement(elementID,final_x,final_y,interval) {
    if (!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    if(!elem.style.left){
        elem.style.left = "0px";
    }
    if(!elem.style.top){
        elem.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    if(xpos == final_x && ypos == final_y){
        return true;
    }
    if(xpos < final_x){
        dist = Math.ceil((final_x-xpos)/10);
        xpos = xpos + dist;
    }
    if(xpos > final_x){
        dist = Math.ceil((xpos-final_x)/10);
        xpos = xpos - dist;
    }
    if(ypos < final_y){
        dist = Math.ceil((final_y-ypos)/10);
        ypos = ypos + dist;
    }
    if(ypos > final_y){
        dist = Math.ceil((ypos-final_y)/10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);
}

function prepareSlideShow() {
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;

    if(!document.getElementById("linklist")) return false;
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("src","resource/timg.gif");
    preview.setAttribute("alt","building blocks of web design");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);

    // preview.style.left = "0px";
    // preview.style.up = "0px";
    var list = document.getElementById("linklist");
    list.parentNode.insertBefore(slideshow,list);
    var link = list.getElementsByTagName("a");
    link[0].onmouseover = function() {
        moveElement("preview",-128,0,10);
    }
    link[1].onmouseover = function() {
        moveElement("preview",-256,0,10);
    }
    link[2].onmouseover = function() {
        moveElement("preview",-384,0,10);
    }
}

addLoadEvent(prepareSlideShow);