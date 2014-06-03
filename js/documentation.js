(function () {

    var horizontalOrientation = {
        description: "Sets the orientation of the ListView to horizontal.  This property applies to many WinJS controls.",
        code: "listViewControl.layout.orientation = WinJS.UI.Orientation.horizontal",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301804.aspx"

    }

    var verticalOrientation = {
        description: "Sets the orientation of the ListView to vertical.  This property applies to many WinJS controls.",
        code: "listViewControl.layout.orientation = WinJS.UI.Orientation.vertical",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301804.aspx"
    }

    var gridLayout = {
        description: "Sets the layout of the ListView to a GridLayout in which items are arranged in a horizontal grid.",
        code: "listView.layout = new WinJS.UI.GridLayout()",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211751.aspx"
    }

    var listLayout = {
        description: "Sets the layout of the ListView to a ListLayout in which items are arranged in a vertical list.",
        code: "listView.layout = new WinJS.UI.ListLayout()",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211792.aspx"
    }

    var itemTemplate = {
        description: "Gets or sets the WinJS.Binding.Template or templateing function that creates the Document Object Model (DOM) elements for each item in the itemDataSource. Each Item can contain multiple elements, but it must have a single root element.",
        code: "listView.itemTemplate = itemTemplate",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700705.aspx"
    }

    var itemsReorderable = {
        description: "Gets or sets a value that specifies whether the ListView control's items can be reordered within itself by dragging and dropping.",
        code: "listView.itemsReorderable = true",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301810.aspx",

    }

    var itemsNotReorderable = {
        description: "Gets or sets a value that specifies whether the ListView control's items can be reordered within itself by dragging and dropping.",
        code: "listView.itemsReorderable = false",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301810.aspx",

    }

    var tapBehaviorNone = {
        description: "When an item is clicked or tapped the item is neither selected nor invoked.",
        code: "listView.tapBehavior = WinJS.UI.TapBehavior.none",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700733.aspx"
    }

    var tapBehaviorDirectSelect = {
        description: "When an item is clicked or tapped the item is selected and invoked (the ListView's oniteminvoked event will fire).  If Selection Mode is set to None the item will not be selected.",
        code: "listView.tapBehavior = WinJS.UI.TapBehavior.directSelect",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700733.aspx"
    }
    var tapBehaviorToggleSelect = {
        description: "When an item is clicked or tapped it is selected if it was not already selected and is deselected if it was already selected.  In either case it will be invoked (the ListView's oniteminvoked event will fire).  If Selection Mode is set to None the item will not be selected/unselected.",
        code: "listView.tapBehavior = WinJS.UI.TapBehavior.toggleSelect",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700733.aspx"
    }
    var tapBehaviorInvoke = {
        description: "When an item is clicked or tapped it is invoked but not selected.  Invoked means that the ListView's oniteminvoked event will fire.",
        code: "listView.tapBehavior = WinJS.UI.TapBehavior.invokeOnly",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700733.aspx"
    }

    var selectionModeNone = {
        description: "When an item is clicked or tapped it will not be selected regardless of the tap behavior",
        code: "listView.selectionMode = WinJS.UI.SelectionMode.none",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211851.aspx"
    }
    var selectionModeSingle = {
        description: "No more than one item in the ListView may be selected at a time",
        code: "listView.selectionMode = WinJS.UI.SelectionMode.single",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211851.aspx"
    }
    var selectionModeMulti = {
        description: "More than one item in the ListView can be selected at the same time.  the tap behavior must be set to Toggle Select to select multiple items",
        code: "listView.selectionMode = WinJS.UI.SelectionMode.multi",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211851.aspx"
    }

    var groupItemsYes = {
        description: "ListView sorts its items into groups when it's datasource is a grouped list projection.  As the projection changes, the ListView reacts to those changes and may also change.",
        code: "var list = WinJS.UI.Binding.List(arrayData);  groupedList = list.createGrouped(); listView.itemDataSource = groupedList.dataSource; listView.groupDataSource = groupedList.groups.dataSource",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh465464.aspx"
    }

    var groupItemsNo = {
        description: "ListView sorts its items into groups when it's datasource is a grouped list projection.  As the projection changes, the ListView reacts to those changes and may also change.",
        code: "var list = WinJS.UI.Binding.List(arrayData);  listView.dataSource = list; listView.groupDataSource = null;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh465464.aspx"
    }

    var groupHeaderTemplate = {
        description: "Gets or sets the Template or function that creates the Document Object Model (DOM) elements for each group header in the groupDataSource. Each group header can contain multiple elements, but it must have a single root element.",
        code: "listView.groupHeaderTemplate = groupHeaderTemplate",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700674.aspx"
    }

    var groupHeaderPositionTop = {
        description: "Sets the position of the group header to be above the items in its group",
        code: "listView.layout.groupHeaderPosition = WinJS.UI.HeaderPosition.top",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn255119.aspx"
    }

    var groupHeaderPositionLeft = {
        description: "Sets the position of the group header to be to the left of the items in its group",
        code: "listView.layout.groupHeaderPosition = WinJS.UI.HeaderPosition.left",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn255119.aspx"
    }

    var groupHeaderTapBehaviorNone = {
        description: "When a header is clicked or tapped the item is neither selected nor invoked.",
        code: "listView.groupHeaderTapBehavior = WinJS.UI.GroupHeaderTapBehavior.none",
        link: ""
    }

    var groupHeaderTapBehaviorInvoke = {
        description: "When a header is clicked or tapped the item is invoked but not selected.",
        code: "listView.groupHeaderTapBehavior = WinJS.UI.GroupHeaderTapBehavior.invoke",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301808.aspx"
    }

    var dataChangesAdd = {
        description: "",
        code: "",
        link: ""
    }

    var dataChangesDelete = {
        description: "",
        code: "",
        link: ""
    }

    var dataChangesChange = {
        description: "",
        code: "",
        link: ""
    }

    var scrollingScrollPosition = {
        description: "",
        code: "",
        link: ""
    }

    var scrollingEnsureVisible = {
        description: "",
        code: "",
        link: ""
    }


    function updateInfo(info) {
        document.querySelector(".selectionDescription").innerText = info.description;
        document.querySelector(".selectionSampleCode").innerText = info.code;
        document.querySelector(".selectionDocumentation").innerText = info.link;
    }

    WinJS.Namespace.define("Documentation", {
        updateInfo: updateInfo,
        horizontalOrientation: horizontalOrientation,
        verticalOrientation: verticalOrientation,
        gridLayout: gridLayout,
        listLayout: listLayout,
        itemTemplate: itemTemplate,
        itemsReorderable: itemsReorderable,
        itemsNotReorderable: itemsNotReorderable,
        tapBehaviorNone: tapBehaviorNone,
        tapBehaviorDirectSelect: tapBehaviorDirectSelect,
        tapBehaviorToggleSelect: tapBehaviorToggleSelect,
        tapBehaviorInvoke: tapBehaviorInvoke,
        selectionModeNone: selectionModeNone,
        selectionModeSingle: selectionModeSingle,
        selectionModeMulti: selectionModeMulti,
        groupItemsYes: groupItemsYes,
        groupItemsNo: groupItemsNo,
        groupHeaderTemplate: groupHeaderTemplate,
        groupHeaderPositionTop: groupHeaderPositionTop,
        groupHeaderPositionLeft: groupHeaderPositionLeft,
        groupHeaderTapBehaviorNone: groupHeaderTapBehaviorNone,
        groupHeaderTapBehaviorInvoke: groupHeaderTapBehaviorInvoke,
        dataChangesAdd: dataChangesAdd,
        dataChangesDelete: dataChangesDelete,
        dataChangesChange: dataChangesChange,
        scrollingScrollPosition: scrollingScrollPosition,
        scrollingEnsureVisible: scrollingEnsureVisible

    });

})();