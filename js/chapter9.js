/**
 * Created by kissene on 17/2/25.
 */
function addClass(elem,value) {
    if(elem.className == null){
        elem.className = value;
    }else{
        elem.className += " ";
        elem.className += value;
    }
}
function getNextElement(node) {
    if(node.nodeType == 1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}

function styleElementSiblings(tag,theclass) {
    if(!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName(tag);
    var elem;
    for (var i = 0; i < headers.length; i++) {
        elem = getNextElement(headers[i].nextSibling);
        addClass(elem,theclass);
    }
}

addLoadEvent(function(){
    styleElementSiblings("h1","intro");
});

function stripeTable() {
    if(!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd,rows;
    for(var i=0; i<tables.length; i++){
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for(var j=0; j<rows.length; j++){
            if(odd == true){
                addClass(rows[j],"odd");
                odd = false;
            }else{
                odd =true;
            }
        }
    }
}

addLoadEvent(stripeTable);

function highlightRows() {
    if(!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for(var i=0; i<rows.length; i++){
        rows[i].onmouseover = function(){
            this.style.fontWeight = "bold";
        }
        rows[i].onmouseout = function(){
            this.style.fontWeight = "normal";
        }
    }
}

addLoadEvent(highlightRows);

