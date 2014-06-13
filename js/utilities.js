(function () {
    "use strict";

    function cancelEvent(event) {
        if (event.preventDefault) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.returnValue = false;
            event.cancelBubble = true;
        }
    }

    function getInnerText(elem) {
        return elem.innerText || elem.textContent;
    }

    function setInnerText(elem, text) {
        if (!elem) {
            return;
        }

        if ("innerText" in elem) {
            elem.innerText = text;
        } else if ("textContent" in elem) {
            elem.textContent = text;
        }
    }

    WinJS.Namespace.define("Utility", {
        cancelEvent: cancelEvent,
        getInnerText: getInnerText,
        setInnerText: setInnerText
    });
})();