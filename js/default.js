(function () {
    "use strict";

    var app = WinJS.Application;
    hljs.initHighlightingOnLoad();
    document.addEventListener("DOMContentLoaded", function () {
        WinJS.Navigation.history.backStack = [{ location: "optionsPage" }];
        ControlBox.createControlBox();

    }, false);

    app.onactivated = function (args) {
        var data = new WinJS.Binding.List(ListView.Data.createData());
        var groupedData = ListView.Data.groupData(data);
        var smallData = new WinJS.Binding.List(data.slice(0, 100));
        var smallGroupedData = ListView.Data.groupData(smallData);

        WinJS.Namespace.define("ListView", {
            data: data,
            groupedData: groupedData,
            smallData: smallData,
            smallGroupedData: smallGroupedData
        });

        args.setPromise(WinJS.UI.processAll().then(function () {

            Init.initializeListView();
            Init.initializeDocumentation();
            Init.addClickListeners();
        }));
    };

    app.start();
   
})();
