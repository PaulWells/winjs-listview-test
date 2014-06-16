(function () {
    "use strict";

    function setOrientation(orientation) {
        ListView.listView.layout.orientation = orientation;
    }

    function setLayout(layout) {
        layout.orientation = listView.layout.orientation;
        layout.groupHeaderPosition = listView.layout.groupHeaderPosition;
        ListView.listView.layout = layout;
    }

    function groupItems(groupItems) {
        if (groupItems) {
            ListView.listView.itemDataSource = ListView.groupedData.dataSource;
            ListView.listView.groupDataSource = ListView.groupedData.groups.dataSource;
        } else {
            ListView.listView.groupDataSource = null;
            ListView.listView.itemDataSource = ListView.data.dataSource;
        }
    }

    function selectHeaderPosition(position) {
        ListView.listView.layout.groupHeaderPosition = position;
    }

    WinJS.Namespace.define("Layout", {

        setOrientation: setOrientation,
        groupItems: groupItems,
        setLayout: setLayout,
        selectHeaderPosition: selectHeaderPosition
    });
})();