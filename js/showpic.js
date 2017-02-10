/**
 * Created by Administrator on 2/4/2017.
 */

function showPic(whichpic) {
    if(!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var place = document.getElementById("placeholder");
    place.setAttribute("src", source);
    if(document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if(description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

function popUp(url) {
    window.open(url,"popup","width=320,height=480");
}

function prepareLinks() {
    if(!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function () {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}

function prepareGallery() {
    if(!document.getElementById || !document.getElementsByTagName) return false;
    var imagegallery = document.getElementById("imagegallery");
    if(imagegallery){
        var links = imagegallery.getElementsByTagName("a");
        for(var i=0; i<links.length-1; i++){
            links[i].onclick = function() {
                return showPic(this) ? false : true;
            }

        }
    }
}

//window.onload
function allLoadEvent(func) {
    var old = window.onload;
    if(typeof(window.onload) != 'function') {
        window.onload = func();
    }else {
        window.onload = function() {
            old();
            func();
        }
    }
}


allLoadEvent(prepareGallery);
allLoadEvent(prepareLinks);