(function () {
    "use strict";

    function ensureFirstItemVisible() {
        ListView.listView.ensureVisible(0);
    }

    function ensureMiddleItemVisible() {
        ListView.listView.ensureVisible(Math.floor(ListView.data.length / 2));
    }

    function ensureLastItemVisible() {
        ListView.listView.ensureVisible(ListView.data.length - 1);
    }

    function scrollPosition(pixel) {
        ListView.listView.scrollPosition = pixel;
    }

    WinJS.Namespace.define("ListView.Methods", {
        ensureFirstItemVisible: ensureFirstItemVisible,
        ensureMiddleItemVisible: ensureMiddleItemVisible,
        ensureLastItemVisible: ensureLastItemVisible,
        scrollPosition: scrollPosition
    });

})();