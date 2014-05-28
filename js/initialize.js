(function () {

    function initializeListView() {
        var listView = document.querySelector(".listView").winControl;
        listView.itemTemplate = Templates.textWithImageTemplate;
        //TODO: change invoke method
        listView.addEventListener("groupheaderinvoked", Config.function, false);
    }

    WinJS.Namespace.define("Init", {
        initializeListView: initializeListView,
    });
})();