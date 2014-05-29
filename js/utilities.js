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

    WinJS.Namespace.define("Utility", {
        cancelEvent: cancelEvent
    });
})();