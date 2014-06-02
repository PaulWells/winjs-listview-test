(function () {

   
    var optionMenuData = [
        {
            name: "Layout", subOptions: [
                {
                    name: "Grid",
                    className: "layoutGrid",
                    eventMethod: function () { Config.setLayout(new WinJS.UI.GridLayout) },
                    info: Documentation.gridLayout
                },
                {
                    name: "List",
                    className: "layoutList",
                    eventMethod: function () { Config.setLayout(new WinJS.UI.ListLayout) },
                    info: Documentation.listLayout
                },
            ]
        },
        {
            name: "Orientation", subOptions: [
                {
                    name: "Vertical",
                    className: "orientationVertical",
                    eventMethod: function () { Config.setOrientation(WinJS.UI.Orientation.vertical) },
                    info: Documentation.verticalOrientation

                },
                {
                    name: "Horizontal",
                    className: "orientationHorizontal",
                    eventMethod: function () { Config.setOrientation(WinJS.UI.Orientation.horizontal) },
                    info: Documentation.horizontalOrientation
                }
            ]
        },
        {
            name: "Item Template", subOptions: [
                {
                    name: "Text With Image",
                    className: "itemTemplateTextWithImage",
                    eventMethod: function () { Config.changeItemTemplate("textWithImage") },
                    info: Documentation.itemTemplate
                },
                {
                    name: "Image",
                    className: "itemTemplateImage",
                    eventMethod: function () { Config.changeItemTemplate("image") },
                    info: Documentation.itemTemplate
                },
                {
                    name: "Inline",
                    className: "itemTemplateInline",
                    eventMethod: function () { Config.changeItemTemplate("inline") },
                    info: Documentation.itemTemplate
                },
                {
                    name: "Interactive",
                    className: "itemTemplateInteractive",
                    eventMethod: function () { Config.changeItemTemplate("interactive") },
                    info: Documentation.itemTemplate
                }
            ]
        },
        {
            name: "Items Reorderable", subOptions: [
                {
                    name: "On",
                    className: "itemsReorderableOn",
                    eventMethod: function () { Config.itemsReorderable(true) },
                    info: Documentation.itemsReorderable
                },
                {
                    name: "Off",
                    className: "itemsReorderableOff",
                    eventMethod: function () { Config.itemsReorderable(false) },
                    info: Documentation.itemsNotReorderable
                }
            ]
        },
        {
            name: "Tap Behavior", subOptions: [
                {
                    name: "Direct Select",
                    className: "tapBehaviorDirectSelect",
                    eventMethod: function () { Config.tapBehavior(WinJS.UI.TapBehavior.directSelect) },
                    info: Documentation.tapBehaviorDirectSelect
                },
                {
                    name: "Toggle Select",
                    className: "tapBehaviorToggleSelect",
                    eventMethod: function () { Config.tapBehavior(WinJS.UI.TapBehavior.toggleSelect) },
                    info: Documentation.tapBehaviorToggleSelect
                },
                {
                    name: "Invoke Only",
                    className: "tapBehaviorInvokeOnly",
                    eventMethod: function () { Config.tapBehavior(WinJS.UI.TapBehavior.invokeOnly) },
                    info: Documentation.tapBehaviorInvoke
                },
                {
                    name: "None",
                    className: "tapBehaviorNone",
                    eventMethod: function () { Config.tapBehavior(WinJS.UI.TapBehavior.none) },
                    info: Documentation.tapBehaviorNone
                }
            ]
        },
        {
            name: "Selection Mode", subOptions: [
                {
                    name: "None",
                    className: "selectionModeNone",
                    eventMethod: function () { Config.selectionMode(WinJS.UI.SelectionMode.none) },
                    info: Documentation.selectionModeNone
                },
                {
                    name: "Single",
                    className: "selectionModeSingle",
                    eventMethod: function () { Config.selectionMode(WinJS.UI.SelectionMode.single) },
                    info: Documentation.selectionModeSingle
                },
                {
                    name: "Multi",
                    className: "selectionModeMulti",
                    eventMethod: function () { Config.selectionMode(WinJS.UI.SelectionMode.multi) },
                    info: Documentation.selectionModeMulti
                }
            ]
        },
        {
            name: "Group Items", subOptions: [
                {
                    name: "Yes",
                    className: "groupItemsYes",
                    eventMethod: function () { Config.groupItems(true) },
                    info: Documentation.groupItemsYes
                },
                {
                    name: "No",
                    className: "groupItemsNo",
                    eventMethod: function () { Config.groupItems(false) },
                    info: Documentation.groupItemsNo
                }
            ]
        },
        {
            name: "Group Header Template", subOptions: [
                {
                    name: "Text",
                    className: "groupHeaderTemplateText",
                    eventMethod: function () { Config.changeHeaderTemplate("text") },
                    info: Documentation.groupHeaderTemplate
                },
                {
                    name: "Text With Image",
                    className: "groupHeaderTemplateTextWithImage",
                    eventMethod: function () { Config.changeHeaderTemplate("textWithImage") },
                    info: Documentation.groupHeaderTemplate
                },
                {
                    name: "Button",
                    className: "groupHeaderTemplateButton",
                    eventMethod: function () { Config.changeHeaderTemplate("button") },
                    info: Documentation.groupHeaderTemplate
                },
                {
                    name: "Interactive",
                    className: "groupHeaderTemplateInteractive",
                    eventMethod: function () { Config.changeHeaderTemplate("interactive") },
                    info: Documentation.groupHeaderTemplate
                }
            ]
        },
        {
            name: "Group Header Position", subOptions: [
                {
                    name: "Top",
                    className: "groupHeaderPositionTop",
                    eventMethod: function () { Config.selectHeaderPosition(WinJS.UI.HeaderPosition.top) },
                    info: Documentation.groupHeaderPositionTop
                },
                {
                    name: "Left",
                    className: "groupHeaderPositionLeft",
                    eventMethod: function () { Config.selectHeaderPosition(WinJS.UI.HeaderPosition.left) },
                    info: Documentation.groupHeaderPositionLeft
                }
            ]
        },
        {
            name: "Group Header Tap Behavior", subOptions: [
                {
                    name: "Invoke",
                    className: "groupHeaderTapBehaviorInvoke",
                    eventMethod: function () { Config.selectHeaderTapBehavior(WinJS.UI.GroupHeaderTapBehavior.invoke) },
                    info: Documentation.groupHeaderTapBehaviorInvoke
                },
                {
                    name: "None",
                    className: "groupHeaderTapBehaviorNone",
                    eventMethod: function () { Config.selectHeaderTapBehavior(WinJS.UI.GroupHeaderTapBehavior.none) },
                    info: Documentation.groupHeaderTapBehaviorNone
                }
            ]
        },
        {
            name: "Data Changes", subOptions: [
                {
                    name: "Add Element",
                    className: "dataChangesAddElement",
                    eventMethod: Data.addElement,
                    info: Documentation.dataChangesAdd
                },
                {
                    name: "Delete Element",
                    className: "dataChangesDeleteElement",
                    eventMethod: Data.deleteElement,
                    info: Documentation.dataChangesDelete
                },
                {
                    name: "Change Element",
                    className: "dataChangesChangeElement",
                    eventMethod: Data.changeElement,
                    info: Documentation.dataChangesChange
                }
            ]
        },
        {
            name: "Scrolling", subOptions: [
                {
                    name: "Scroll Position",
                    className: "scrollingScrollPosition",
                    eventMethod: Methods.scrollPosition,
                    info: Documentation.scrollingScrollPosition
                },
                {
                    name: "Ensure Visible",
                    className: "scrollingEnsureVisible",
                    eventMethod: Methods.ensureVisible,
                    info: Documentation.scrollingEnsureVisible
                }
            ]
        }
    ];


    WinJS.Namespace.define("Menu", {
        optionMenuData: optionMenuData
    })
})();