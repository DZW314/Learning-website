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

//Create a function instead of "window.onload"
function addLoadEvent(func) {
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

//平稳退化样例
function add(){
    var placeholder = document.createElement("img");
    placeholder.setAttribute("class", "img-thumbnail");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "resource/timg.gif");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("Choose an image.");
    description.appendChild(desctext);
    document.getElementsByTagName("body")[0].insertBefore(description,document.getElementsByTagName("script")[0]);
    document.getElementsByTagName("body")[0].appendChild(placeholder);
}


//Create a function "insertAfter"
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}



addLoadEvent(add);
addLoadEvent(prepareGallery);
addLoadEvent(prepareLinks);

//START --Add a "p" line by an onclick event of the id "insert".

// function run(){
//     var temp = document.createElement("p");
//     var temptext = document.createTextNode("我是第二行,已添加");
//     temp.appendChild(temptext);
//     document.getElementById("insert").onclick = function(){
//         insertAfter(temp,document.getElementsByClassName("one")[0]);
//     }
// }
//
// addLoadEvent(run);

//END --Add a "p" line by an onclick event of the id "insert".

