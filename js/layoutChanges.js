﻿(function () {
    "use strict";

    function setOrientation(orientation) {
        var listViewControl = document.querySelector(".listView").winControl;
        listViewControl.layout.orientation = orientation;
    }

    function setLayout(layout) {
        var listViewControl = document.querySelector(".listView").winControl;
        listViewControl.layout = layout;
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

    function selectHeaderPosition(position) {
        var listViewControl = document.querySelector(".listView").winControl;
        listViewControl.layout.groupHeaderPosition = position;
    }
    // Public interface.
    WinJS.Namespace.define("Config", {

        setOrientation: setOrientation,
        groupItems: groupItems,
        setLayout: setLayout,
        selectHeaderPosition: selectHeaderPosition
    });
})();