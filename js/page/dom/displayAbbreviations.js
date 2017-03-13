/**
 * Created by kissene on 17/2/19.
 */
function displayAbbreviations() {
    if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    // get all markup "abbr"
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length < 1) return false;
    var defs = new Array();
    // traversal
    for(var i=0; i<abbreviations.length; i++){
        var current_abbr = abbreviations[i];
        if(current_abbr.childNodes.length < 1) continue;
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    //create dl
    var dlist = document.createElement("dl");
    for(key in defs){
        var definition = defs[key];
    //create dt
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
    //create dd
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
    //add them to list
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.childNodes.length < 1) return false;
    //create headline
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    //add headline&list to the body
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);

function displayCitations() {
    var quotes = document.getElementsByTagName("blockquote");
    for(var i=0; i < quotes.length; i++) {
        if (!quotes[i].getAttribute("cite")) continue;
        var url = quotes[i].getAttribute("cite");
        var quote_children = quotes[i].getElementsByTagName("*");
        if(quote_children.length < 1) continue;
        var elem = quote_children[quote_children.length - 1];
        var link = document.createElement("a");
        var link_text = document.createTextNode(url);
        link.appendChild(link_text);
        link.setAttribute("href", url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}

addLoadEvent(displayCitations);

function displayAccesskeys() {
    if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    //get all link
    var links = document.getElementsByTagName("a");
    var akeys = new Array();
    for(var i=0; i<links.length; i++) {
        var current_link = links[i];
        if (!current_link.getAttribute("accesskey")) continue;
        // get the value of accesskey
        var key = current_link.getAttribute("accesskey");
        //get the text of the link
        var key_text = current_link.lastChild.nodeValue;
        //add to array
        akeys[key] = key_text;
    }
    var list = document.createElement("ul");
    for(key in akeys) {
        var text = akeys[key];
        var str = key + ": " + text;
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Accesskeys");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}

addLoadEvent(displayAccesskeys);

function linkalert() {
    var link = document.getElementsByTagName("a");
    for(var i=0; i<link.length; i++){
        link[i].onclick = function(){
            alert("You clicked a link!");
        }
    }
}

addLoadEvent(linkalert);

