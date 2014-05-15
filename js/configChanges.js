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
        },

        groupItems: function() {
            var listViewControl = document.getElementById("listView").winControl;
            var checkbox = document.getElementById("groupItemsCheckBox");

            if (checkbox.checked) {
                listViewControl.groupDataSource = Data.initGroupedData().groups.dataSource;
                listViewControl.groupHeaderTemplate = document.getElementById("listLayoutTopHeaderTemplate");
                listViewControl.layout.groupHeaderPosition = WinJS.UI.HeaderPosition["top"];
            } else {
                listViewControl.groupDataSource = null;
                listViewControl.layout.groupHeaderPosition = null;
                listViewControl.groupHeaderTemplate = null;
            }

            //TODO: disable reordering

        }

    };

    var DataChanges = {
        toggleItemsReorderable: function () {
            window.console.log("hey");
            var listViewControl = document.getElementById("listView").winControl;
            var checkbox = document.getElementById("itemsReorderableCheckBox");

            listViewControl.itemsReorderable = checkbox.checked;
        }
    };




    // Public interface.
    WinJS.Namespace.define("Config", {

        toggleOrientation: LayoutChanges.toggleOrientation,
        selectLayout: LayoutChanges.selectLayout,
        itemsReorderable: DataChanges.toggleItemsReorderable,
        groupItems: LayoutChanges.groupItems
    });
})();