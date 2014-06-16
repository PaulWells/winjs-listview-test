(function () {
    "use strict";

    var app = WinJS.Application;
    hljs.initHighlightingOnLoad();
    document.addEventListener("DOMContentLoaded", function () {
        WinJS.Navigation.history.backStack = [{ location: "optionsPage" }];

    }, false);

    app.onactivated = function (args) {
        var listView = document.querySelector(".listView");
        var data = new WinJS.Binding.List(ListView.Data.createData());
        var groupedData = ListView.Data.groupData(data);
        WinJS.Namespace.define("ListView", {
            data: data,
            groupedData: groupedData,
            listView: listView
        });

        args.setPromise(WinJS.UI.processAll().then(function () {
            Init.initializeListView();
            Init.initializeDocumentation();
            Init.addClickListeners();
            ControlBox.createControlBox();
        }));
    };

    app.start();
   
})();
