(function () {
    "use strict";

    function ensureFirstItemVisible() {
        ensureVisible(0);
    }

    function ensureMiddleItemVisible() {
        ensureVisible(ListView.data.length / 2);
    }

    function ensureLastItemVisible() {
        ensureVisible(ListView.data.length - 1);
    }

    function ensureVisible(index){
        var listView = document.querySelector(".listView").winControl;
        listView.ensureVisible(index);
    }

    function scrollPosition(pixel) {
        var listView = document.querySelector(".listView").winControl;
        listView.scrollPosition = pixel;
    }

    WinJS.Namespace.define("ListView.Methods", {
        ensureFirstItemVisible: ensureFirstItemVisible,
        ensureMiddleItemVisible: ensureMiddleItemVisible,
        ensureLastItemVisible: ensureLastItemVisible,
        scrollPosition: scrollPosition
    });

})();