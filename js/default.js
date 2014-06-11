(function () {
    "use strict";

    var app = WinJS.Application;
    hljs.initHighlightingOnLoad();

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
            MediaQueries.registerLaptop();
        }));
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
   
})();
