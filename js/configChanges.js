(function () {
    "use strict";
    var LayoutChanges = {
        toggleOrientation: function () {
            var listViewControl = document.getElementById("listView").winControl;
            listViewControl.layout.orientation = (listViewControl.layout.orientation === WinJS.UI.Orientation.horizontal ? WinJS.UI.Orientation.vertical : WinJS.UI.Orientation.horizontal);
        },

        selectLayout: function () {
            var listViewControl = document.getElementById("listView").winControl;
            var selector = document.getElementById("selectLayout");
            var layout = selector.options[selector.selectedIndex].value;

            if (layout === "grid") {
                listViewControl.layout = new WinJS.UI.GridLayout;
            } else {
                listViewControl.layout = new WinJS.UI.ListLayout;
            }
        }

    };


    // Public interface.
    WinJS.Namespace.define("Config", {

        toggleOrientation: LayoutChanges.toggleOrientation,
        selectLayout: LayoutChanges.selectLayout
    });
})();