(function () {
    "use strict";

    function initializeListView() {
        var listView = document.querySelector(".listView").winControl;
        listView.itemTemplate = Templates.textWithImageTemplate;
        //TODO: change invoke method
        listView.addEventListener("groupheaderinvoked", Data.invokeGroupHeaderHandler, false);
        listView.addEventListener("iteminvoked", Data.invokeItemHandler, false);
    }

    WinJS.Namespace.define("Init", {
        initializeListView: initializeListView,
    });
})();