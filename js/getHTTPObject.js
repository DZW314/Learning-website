/**
 * Created by kissene on 17/2/13.
 */

function getHTTPObject() {
    if(typeof XMLHttpRequest == "undefinded") {
        XMLHttpRequest = function () {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (e) {
            }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (e) {
            }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
            }
            return false;
        }
    }
    return new XMLHttpRequest();
}