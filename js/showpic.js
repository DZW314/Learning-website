/**
 * Created by Administrator on 2/4/2017.
 */
function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var place = document.getElementById("placeholder");
    place.setAttribute("src", source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
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
                showPic(this);
                return false;
            }
        }
    }
}

window.onload = function() {
    prepareLinks();
    prepareGallery();
}