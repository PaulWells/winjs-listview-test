(function () {
    "use strict";

    function verticalOrientation() {
        toggleOrientation(WinJS.UI.Orientation.vertical);
    }

    function horizontalOrientation() {
        toggleOrientation(WinJS.UI.Orientation.horizontal);
    }

    function toggleOrientation(orientation) {
        var listViewControl = document.querySelector(".listView").winControl;
        listViewControl.layout.orientation = orientation;
    }

    function gridLayout() {
        selectLayout("grid");
    }

    function listLayout() {
        selectLayout("list");
    }

    function selectLayout(option) {
        var listViewControl = document.querySelector(".listView").winControl;

        if (option === "grid") {
            listViewControl.layout = new WinJS.UI.GridLayout;
        } else {
            listViewControl.layout = new WinJS.UI.ListLayout;
        }
    }

    function groupItems(groupItems) {
        var listViewControl = document.querySelector(".listView").winControl;
       
        if (groupItems) {
            listViewControl.itemDataSource = Sample.ListView.groupedData.dataSource;
            listViewControl.groupDataSource = Sample.ListView.groupedData.groups.dataSource;
            listViewControl.groupHeaderTemplate = Templates.textHeaderTemplate;
            listViewControl.layout.groupHeaderPosition = WinJS.UI.HeaderPosition["top"];
        } else {
            listViewControl.groupDataSource = null;
            listViewControl.itemDataSource = Sample.ListView.data.dataSource;
            listViewControl.layout.groupHeaderPosition = null;
            listViewControl.groupHeaderTemplate = null;
        }

    }

    function toggleVisibleOptionsOnGroup(grouped) {

        document.querySelector(".itemsReorderable").hidden = grouped;
        document.querySelector(".selectHeaderPosition").hidden = !grouped;
        document.querySelector(".changeHeaderTemplateButton").hidden = !grouped;
        document.querySelector(".headerTapBehavior").hidden = !grouped;
    }

    function selectHeaderPosition(position) {
        var listViewControl = document.querySelector(".listView").winControl;
        listViewControl.layout.groupHeaderPosition = position;
    }
    // Public interface.
    WinJS.Namespace.define("Config", {

        verticalOrientation: verticalOrientation,
        horizontalOrientation: horizontalOrientation,
        groupItems: groupItems,
        gridLayout: gridLayout,
        listLayout: listLayout,
        selectHeaderPosition: selectHeaderPosition
    });
})();