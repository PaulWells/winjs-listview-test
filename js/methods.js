(function () {
    "use strict";

    function ensureVisible() {
        var listView = document.querySelector(".listView").winControl;
        listView.ensureVisible(0);
    }

    function scrollPosition() {
        var listView = document.querySelector(".listView").winControl;
        listView.scrollPosition = 0;
    }

    WinJS.Namespace.define("ListView.Methods", {
        ensureVisible: ensureVisible,
        scrollPosition: scrollPosition
    });

})();