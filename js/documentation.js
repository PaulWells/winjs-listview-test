(function () {

    var horizontalOrientation = {
        description: "Sets the orientation of the ListView to horizontal.  This property applies to many WinJS controls.",
        code: "listViewControl.layout.orientation = WinJS.UI.Orientation.horizontal",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301804.aspx",
        title: "Horizontal Orientation"
    }

    var verticalOrientation = {
        description: "Sets the orientation of the ListView to vertical.  This property applies to many WinJS controls.",
        code: "listViewControl.layout.orientation = WinJS.UI.Orientation.vertical",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301804.aspx",
        title: "Vertical Orientation"
    }

    var gridLayout = {
        description: "Sets the layout of the ListView to a GridLayout in which items are arranged in a horizontal grid.",
        code: "listView.layout = new WinJS.UI.GridLayout()",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211751.aspx",
        title: "Grid Layout",
    }

    var listLayout = {
        description: "Sets the layout of the ListView to a ListLayout in which items are arranged in a vertical list.",
        code: "listView.layout = new WinJS.UI.ListLayout()",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211792.aspx",
        title: "List Layout"
    }

    var itemTemplate = {
        description: "Gets or sets the WinJS.Binding.Template or templating function that creates the Document Object Model (DOM) elements for each item in the itemDataSource. Each Item can contain multiple elements, but it must have a single root element.",
        code: "listView.itemTemplate = itemTemplate",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700705.aspx",
        title: "Item Template"
    }

    var itemsReorderable = {
        description: "Gets or sets a value that specifies whether the ListView control's items can be reordered within itself by dragging and dropping.",
        code: "listView.itemsReorderable = true",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301810.aspx",
        title: "Items Reorderable"
    }

    var itemsNotReorderable = {
        description: "Gets or sets a value that specifies whether the ListView control's items can be reordered within itself by dragging and dropping.",
        code: "listView.itemsReorderable = false",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301810.aspx",
        title: "Items Reorderable"

    }

    var tapBehaviorNone = {
        description: "When an item is clicked or tapped the item is neither selected nor invoked.",
        code: "listView.tapBehavior = WinJS.UI.TapBehavior.none",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700733.aspx",
        title: "Tap Behavior: None"
    }

    var tapBehaviorDirectSelect = {
        description: "When an item is clicked or tapped the item is selected and invoked (the ListView's oniteminvoked event will fire).  If Selection Mode is set to None the item will not be selected.",
        code: "listView.tapBehavior = WinJS.UI.TapBehavior.directSelect",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700733.aspx",
        title: "Tap Behavior: Direct Select"
    }
    var tapBehaviorToggleSelect = {
        description: "When an item is clicked or tapped it is selected if it was not already selected and is deselected if it was already selected.  In either case it will be invoked (the ListView's oniteminvoked event will fire).  If Selection Mode is set to None the item will not be selected/unselected.",
        code: "listView.tapBehavior = WinJS.UI.TapBehavior.toggleSelect",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700733.aspx",
        title: "Tap Behavior Toggle Select"
    }
    var tapBehaviorInvoke = {
        description: "When an item is clicked or tapped it is invoked but not selected.  Invoked means that the ListView's oniteminvoked event will fire.",
        code: "listView.tapBehavior = WinJS.UI.TapBehavior.invokeOnly",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700733.aspx",
        title: "Tap Behavior Invoke"
    }

    var selectionModeNone = {
        description: "When an item is clicked or tapped it will not be selected regardless of the tap behavior",
        code: "listView.selectionMode = WinJS.UI.SelectionMode.none",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211851.aspx",
        title: "Selection Mode: None"
    }
    var selectionModeSingle = {
        description: "No more than one item in the ListView may be selected at a time",
        code: "listView.selectionMode = WinJS.UI.SelectionMode.single",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211851.aspx",
        title: "Selection Mode: Single"
    }
    var selectionModeMulti = {
        description: "More than one item in the ListView can be selected at the same time.  the tap behavior must be set to Toggle Select to select multiple items",
        code: "listView.selectionMode = WinJS.UI.SelectionMode.multi",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211851.aspx",
        title: "Selection Mode Multi"
    }

    var groupItemsYes = {
        description: "ListView sorts its items into groups when it's datasource is a grouped list projection.  As the projection changes, the ListView reacts to those changes and may also change.",
        code: "var list = WinJS.UI.Binding.List(arrayData);  groupedList = list.createGrouped(); listView.itemDataSource = groupedList.dataSource; listView.groupDataSource = groupedList.groups.dataSource",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh465464.aspx",
        title: "Group Items"
    }

    var groupItemsNo = {
        description: "ListView sorts its items into groups when it's datasource is a grouped list projection.  As the projection changes, the ListView reacts to those changes and may also change.",
        code: "var list = WinJS.UI.Binding.List(arrayData);  listView.dataSource = list; listView.groupDataSource = null;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh465464.aspx",
        title: "Group Items"
    }

    var groupHeaderTemplate = {
        description: "Gets or sets the Template or function that creates the Document Object Model (DOM) elements for each group header in the groupDataSource. Each group header can contain multiple elements, but it must have a single root element.",
        code: "listView.groupHeaderTemplate = groupHeaderTemplate",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700674.aspx",
        title: "Group Header Template"
    }

    var groupHeaderPositionTop = {
        description: "Sets the position of the group header to be above the items in its group",
        code: "listView.layout.groupHeaderPosition = WinJS.UI.HeaderPosition.top",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn255119.aspx",
        title: "Group Header Position: Top"
    }

    var groupHeaderPositionLeft = {
        description: "Sets the position of the group header to be to the left of the items in its group",
        code: "listView.layout.groupHeaderPosition = WinJS.UI.HeaderPosition.left",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn255119.aspx",
        title: "Group Header Position: Left"
    }

    var groupHeaderTapBehaviorNone = {
        description: "When a header is clicked or tapped the item is neither selected nor invoked.",
        code: "listView.groupHeaderTapBehavior = WinJS.UI.GroupHeaderTapBehavior.none",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301808.aspx",
        title: "Group Header Tap Behavior: None"
    }

    var groupHeaderTapBehaviorInvoke = {
        description: "When a header is clicked or tapped the item is invoked but not selected.",
        code: "listView.groupHeaderTapBehavior = WinJS.UI.GroupHeaderTapBehavior.invoke",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301808.aspx",
        title: "Group Header Tap Behavior: Invoke"
    }

    var dataChangesAdd = {
        description: "To add an element to the ListView you only have to add an element to the WinJS.Binding.List that is assigned to the itemDataSource property of the ListView.  This change will be immediatley reflected in the ListView.   If the ListView is grouped then the data is stored in a different order than it is shown, so adding an element to index 0 of the Binding List may not add an element to the beginning of the grouped list.  The groups will be dynamically updated as you make changes to the dataset.",
        code: "data.splice(index, 0, newItem);",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/Hh700774.aspx",
        title: "Adding An Element"
    }

    var dataChangesDelete = {
        description: "To delete an element to the ListView you only have to remove the element from the WinJS.Binding.List that is assigned to the itemDataSource property of the ListView.  This change will be immediatley reflected in the ListView. If the ListView is grouped then the groups will be dynamically updated as you make changes to the dataset.",
        code: "data.splice(index, 1);",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/Hh700774.aspx",
        title: "Deleting An Element"
    }

    var dataChangesChange = {
        description: "To change an element intthe ListView you only have to change the element in the WinJS.Binding.List that is assigned to the itemDataSource property of the ListView.  This change will be immediatley reflected in the ListView.  If the ListView is grouped then the data is stored in a different order than it is shown, so changing the element at index 0 may not change the first element shown in the ListView.  The groups will be dynamically updated as you make changes to the dataset.",
        code: "data.splice(index, 1, newItem);",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/Hh700774.aspx",
        title: "Modifying An Element"
    }

    var scrollingScrollPosition = {
        description: "Gets or sets the distance, in pixels, of the start of the viewable area within the viewport.  For example, setting the scroll position to 0 would scroll the ListView to the beginning of the list",
        code: "listView.scrollPosition = position; //position is in pixels",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211847.aspx",
        title: "Scroll Position"
    }

    var scrollingEnsureVisible = {
        description: "Ensure Visible is a ListView method that takes the index of an element in the ListView.  If necessary the ListView will scroll to the item.",
        code: "listView.ensureVisible(index);",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211820.aspx",
        title: "Ensure Visible"
    }

    var itemsDraggableYes = {
        description: "Gets or sets a value that specifies whether items can be dragged. When this is set to true, the ListView provides built in behaviors related to item dragging.",
        code: "listView.itemsDraggable = true",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301809.aspx",
        title: "Items Draggable"
    }

    var itemsDraggableNo = {
        description: "Gets or sets a value that specifies whether items can be dragged. When this is set to true, the ListView provides built in behaviors related to item dragging.",
        code: "listView.itemsDraggable = false",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301809.aspx",
        title: "Items Draggable"
    }



    function updateInfo(info) {
        document.querySelector(".selectionDescription").innerText = info.description;
        document.querySelector(".selectionSampleCode").innerText = info.code;
        document.querySelector(".selectionDocumentation").href = info.link;
        document.querySelector(".selectionTitle").innerText = info.title;
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
        scrollingEnsureVisible: scrollingEnsureVisible,
        itemsDraggableYes: itemsDraggableYes,
        itemsDraggableNo: itemsDraggableNo

    });

})();