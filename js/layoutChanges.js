(function () {
    "use strict";

    function setOrientation(orientation) {
        var listView = document.querySelector(".listView").winControl;
        listView.layout.orientation = orientation;
    }

    function setLayout(layout) {
        var listView = document.querySelector(".listView").winControl;
        listView.layout = layout;
    }

    function groupItems(groupItems) {
        var listView = document.querySelector(".listView").winControl;
       
        if (groupItems) {
            listView.itemDataSource = Sample.ListView.groupedData.dataSource;
            listView.groupDataSource = Sample.ListView.groupedData.groups.dataSource;
            listView.groupHeaderTemplate = Templates.textHeaderTemplate;
        } else {
            listViewl.groupDataSource = null;
            listView.itemDataSource = Sample.ListView.data.dataSource;
            listView.groupHeaderTemplate = null;
        }
    }

    function selectHeaderPosition(position) {
        var listView = document.querySelector(".listView").winControl;
        listView.layout.groupHeaderPosition = position;
    }

    // Public interface.
    WinJS.Namespace.define("Config", {

        setOrientation: setOrientation,
        groupItems: groupItems,
        setLayout: setLayout,
        selectHeaderPosition: selectHeaderPosition
    });
})();