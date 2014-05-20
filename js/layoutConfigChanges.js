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

    function groupItems() {
        var listViewControl = document.querySelector(".listView").winControl;
        var groupItemsCheckbox = document.querySelector(".groupItemsCheckBox");
        var reorderableCheckbox = document.querySelector(".itemsReorderableCheckBox");
        var reorderableGroup = document.querySelector(".itemsReorderable");
        var selectHeaderPosition = document.querySelector(".selectHeaderPosition");

        if (groupItemsCheckbox.checked) {
            listViewControl.groupDataSource = Data.createGroupedData().groups.dataSource;
            listViewControl.groupHeaderTemplate = Templates.textHeaderTemplatingFunction;
            listViewControl.layout.groupHeaderPosition = WinJS.UI.HeaderPosition["top"];
            reorderableCheckbox.checked = false;
            reorderableGroup.hidden = true;
            selectHeaderPosition.hidden = false;
        } else {
            listViewControl.groupDataSource = null;
            listViewControl.layout.groupHeaderPosition = null;
            listViewControl.groupHeaderTemplate = null;
            reorderableGroup.hidden = false;
            selectHeaderPosition.hidden = true;
        }
    }

    function selectHeaderPosition() {
        var selectHeaderPosition = document.querySelector(".selectHeaderPosition");
        var listViewControl = document.querySelector(".listView").winControl;

        if (selectHeaderPosition.options[selectHeaderPosition.selectedIndex].value === "top") {
            listViewControl.layout.groupHeaderPosition = WinJS.UI.HeaderPosition["top"];
        } else {
            listViewControl.layout.groupHeaderPosition = WinJS.UI.HeaderPosition["left"];
        }
    }

    // Public interface.
    WinJS.Namespace.define("Config", {

        toggleOrientation: toggleOrientation,
        selectLayout: selectLayout,
        groupItems: groupItems,
        selectHeaderPosition: selectHeaderPosition,
    });
})();