(function () {
    "use strict";

    var app = WinJS.Application;

    app.onactivated = function (args) {
                
        var data = new WinJS.Binding.List(ListView.Data.createData());
        var groupedData = ListView.Data.groupData(data);
        WinJS.Namespace.define("Sample.ListView", {
            data: data,
            groupedData: groupedData
        });

        args.setPromise(WinJS.UI.processAll().then(function () {
            Init.initializeListView();
            Init.initializeDocumentation();
            ControlBox.createControlBox();

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
