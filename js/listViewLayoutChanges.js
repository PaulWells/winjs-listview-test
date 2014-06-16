(function () {
    "use strict";

    function setOrientation(orientation) {
        var listView = document.querySelector(".listView").winControl;
        listView.layout.orientation = orientation;
    }

    function setLayout(layout) {
        var listView = document.querySelector(".listView").winControl;
        layout.orientation = listView.layout.orientation;
        layout.groupHeaderPosition = listView.layout.groupHeaderPosition;
        listView.layout = layout;
    }

    function groupItems(groupItems) {
        var listView = document.querySelector(".listView").winControl;
       
        if (groupItems) {
            listView.itemDataSource = ListView.groupedData.dataSource;
            listView.groupDataSource = ListView.groupedData.groups.dataSource;
        } else {
            listView.groupDataSource = null;
            listView.itemDataSource = ListView.data.dataSource;
        }
    }

    function selectHeaderPosition(position) {
        var listView = document.querySelector(".listView").winControl;
        listView.layout.groupHeaderPosition = position;
    }

    WinJS.Namespace.define("Layout", {

        setOrientation: setOrientation,
        groupItems: groupItems,
        setLayout: setLayout,
        selectHeaderPosition: selectHeaderPosition
    });
})();