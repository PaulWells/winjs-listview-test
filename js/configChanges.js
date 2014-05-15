(function () {
    "use strict";
    function toggleOrientation() {
        var listViewControl = document.querySelector(".listView").winControl;
        listViewControl.layout.orientation = (listViewControl.layout.orientation === WinJS.UI.Orientation.horizontal ? WinJS.UI.Orientation.vertical : WinJS.UI.Orientation.horizontal);
    }

    function selectLayout() {
        var listViewControl = document.querySelector(".listView").winControl;
        var selector = document.querySelector(".selectLayout");
        var layout = selector.options[selector.selectedIndex].value;

        if (layout === "grid") {
            listViewControl.layout = new WinJS.UI.GridLayout;
        } else {
            listViewControl.layout = new WinJS.UI.ListLayout;
        }
    }

    function groupItems(){
        var listViewControl = document.querySelector(".listView").winControl;
        var checkbox = document.querySelector(".groupItemsCheckBox");

        if (checkbox.checked) {
            listViewControl.groupDataSource = Data.createGroupedData().groups.dataSource;
            listViewControl.groupHeaderTemplate = document.querySelector(".listLayoutTopHeaderTemplate");
            listViewControl.layout.groupHeaderPosition = WinJS.UI.HeaderPosition["top"];
        } else {
            listViewControl.groupDataSource = null;
            listViewControl.layout.groupHeaderPosition = null;
            listViewControl.groupHeaderTemplate = null;
        }

        //TODO: disable reordering

    }


   function toggleItemsReorderable() {
        var listViewControl = document.querySelector(".listView").winControl;
        var checkbox = document.querySelector(".itemsReorderableCheckBox");

        listViewControl.itemsReorderable = checkbox.checked;
    }

    // Public interface.
    WinJS.Namespace.define("Config", {

        toggleOrientation: toggleOrientation,
        selectLayout: selectLayout,
        itemsReorderable: toggleItemsReorderable,
        groupItems: groupItems
    });
})();