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

    function ungroupItems() {
        var groupItemsCheckbox = document.querySelector(".groupItemsCheckBox");
        groupItemsCheckbox.checked = false;
        toggleGroupItems();
    }

    function toggleGroupItems() {
        var listViewControl = document.querySelector(".listView").winControl;
        var reorderableCheckbox = document.querySelector(".itemsReorderableCheckBox");
       
        if (this.checked) {
            var groupedData = Data.groupData(Sample.ListView.data);
            Sample.StoreData.data = Sample.ListView.data;
            Sample.ListView.data = groupedData;
            //var groupedData = Data.groupData(new WinJS.Binding.List(listViewControl.itemDataSource));  //TODO: why can't I do this?
            listViewControl.itemDataSource = groupedData.dataSource;  //TODO: why is this line necessary if I'm not changing the data?  Does grouping the data change it?
            listViewControl.groupDataSource = groupedData.groups.dataSource;
            listViewControl.groupHeaderTemplate = Templates.textHeaderTemplate;
            listViewControl.layout.groupHeaderPosition = WinJS.UI.HeaderPosition["top"];
            reorderableCheckbox.checked = false;
        } else {
            var data = Sample.ListView.data;
            Sample.ListView.data = Sample.StoreData.data;
            Sample.StoreData.data = data;
            listViewControl.groupDataSource = null;
            listViewControl.itemDataSource = Sample.ListView.data.dataSource;
            listViewControl.layout.groupHeaderPosition = null;
            listViewControl.groupHeaderTemplate = null;
        }

        toggleVisibleOptionsOnGroup(this.checked);
    }

    function toggleVisibleOptionsOnGroup(grouped) {

        document.querySelector(".itemsReorderable").hidden = grouped;
        document.querySelector(".selectHeaderPosition").hidden = !grouped;
        document.querySelector(".changeHeaderTemplateButton").hidden = !grouped;
        document.querySelector(".headerTapBehavior").hidden = !grouped;
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

    function toggleRTL() {
        var baseUrl = location.href.split("?")[0];
        if (this.checked) {
            window.location.assign(baseUrl + "?rtl=rtl");
        } else {
            window.location.assign(baseUrl);
        }
    }

    // Public interface.
    WinJS.Namespace.define("Config", {

        toggleOrientation: toggleOrientation,
        selectLayout: selectLayout,
        toggleGroupItems: toggleGroupItems,
        ungroupItems: ungroupItems,
        selectHeaderPosition: selectHeaderPosition,
        toggleRTL: toggleRTL
    });
})();