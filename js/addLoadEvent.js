/**
 * Created by kissene on 17/2/13.
 */

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
