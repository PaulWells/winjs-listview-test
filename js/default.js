﻿(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                //Initialize application
                
                Init.addListeners();

                var grouped = Data.createGroupedData();
                WinJS.Namespace.define("Sample.ListView", {
                    data: grouped
                });


            } else {
                // Restore application state
            }
            args.setPromise(WinJS.UI.processAll().then(function(){
                Init.initializeListView();
            }));
        }
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
