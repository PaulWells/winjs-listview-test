(function () {
    "use strict";
    var portraitMQ = window.matchMedia("(max-width: 768px) and (min-height: 800px)");

    WinJS.Namespace.define("MediaQueries", {
        portraitMQ: portraitMQ
    });

})();