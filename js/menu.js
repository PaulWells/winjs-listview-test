(function () {

    function menuItemClickEvent() {
        var subOptions = this.querySelector(".menuSubOptions");
        var prevSelection = document.querySelector(".selectedOption");

        undoPreviousSelection(prevSelection);

        if (subOptions.hidden) {
            displaySubOption(this, subOptions, prevSelection);
        } else {
            subOptions.hidden = true;
        }
    }

    function displaySubOption(menuItem, subItems, prevSelection) {
        elem.classList.add("selectedOption");
        subItems.hidden = false;

        if (prevSelection) {
            prevSelection.querySelector(".menuSubOptions").hidden = true;
        }
    }

    function undoPreviousSelection() {
        if (prevSelection) {
            prevSelection.classList.remove("selectedOption");
        }
    }

    function createOptionMenu() {
        var optionsMenu = document.querySelector(".optionMenu");
        var data = new WinJS.Binding.List(createMenuOptionData());
        var contentRepeater = new WinJS.UI.Repeater(optionsMenu, {
            data: data,
            template: createMenuOptionTemplate
        });

        boldDefaultOptions(optionsMenu);
    }

    function createMenuOptionData() {
        var items = [
            {
                name: "Layout", subOptions: [
                    { name: "Grid", className: "layoutGrid", eventMethod: function () { Config.setLayout(WinJS.UI.GridLayout) } },
                    { name: "List", className: "layoutList", eventMethod: function () { Config.setLayout(WinJS.UI.ListLayout) } },
                ]
            },
            {
                name: "Orientation", subOptions: [
                    { name: "Vertical", className: "orientationVertical", eventMethod: function () { Config.setOrientation(WinJS.UI.Orientation.vertical) } },
                    { name: "Horizontal", className: "orientationHorizontal", eventMethod: function () { Config.setOrientation(WinJS.UI.Orientation.horizontal) } }
                ]
            },
            {
                name: "Item Template", subOptions: [
                    { name: "Text With Image", className: "itemTemplateTextWithImage", eventMethod: function () { Config.changeItemTemplate("textWithImage") } },
                    { name: "Image", className: "itemTemplateImage", eventMethod: function () { Config.changeItemTemplate("image") } },
                    { name: "Inline", className: "itemTemplateInline", eventMethod: function () { Config.changeItemTemplate("inline") } },
                    { name: "Interactive", className: "itemTemplateInteractive", eventMethod: function () { Config.changeItemTemplate("interactive") } }
                ]
            },
            {
                name: "Items Reorderable", subOptions: [
                    { name: "On", className: "itemsReorderableOn", eventMethod: function () { Config.itemsReorderable(true) } },
                    { name: "Off", className: "itemsReorderableOff", eventMethod: function () { Config.itemsReorderable(false) } }
                ]
            },
            {
                name: "Tap Behavior", subOptions: [
                    { name: "Direct Select", className: "tapBehaviorDirectSelect", eventMethod: function () { Config.tapBehavior(WinJS.UI.TapBehavior.directSelect) } },
                    { name: "Toggle Select", className: "tapBehaviorToggleSelect", eventMethod: function () { Config.tapBehavior(WinJS.UI.TapBehavior.toggleSelect) } },
                    { name: "Invoke Only", className: "tapBehaviorInvokeOnly", eventMethod: function () { Config.tapBehavior(WinJS.UI.TapBehavior.invokeOnly) } },
                    { name: "None", className: "tapBehaviorNone", eventMethod: function () { Config.tapBehavior(WinJS.UI.TapBehavior.none) } }
                ]
            },
            {
                name: "Selection Mode", subOptions: [
                    { name: "None", className: "selectionModeNone", eventMethod: function () { Config.selectionMode(WinJS.UI.SelectionMode.none) } },
                    { name: "Single", className: "selectionModeSingle", eventMethod: function () { Config.selectionMode(WinJS.UI.SelectionMode.single) } },
                    { name: "Multi", className: "selectionModeMulti", eventMethod: function () { Config.selectionMode(WinJS.UI.SelectionMode.multi) } }
                ]
            },
            {
                name: "Group Items", subOptions: [
                    { name: "Yes", className: "groupItemsYes", eventMethod: function () { Config.groupItems(true) } },
                    { name: "No", className: "groupItemsNo", eventMethod: function () { Config.groupItems(false) } }
                ]
            },
            {
                name: "Group Header Template", subOptions: [
                    { name: "Text", className: "groupHeaderTemplateText", eventMethod: function () { Config.changeHeaderTemplate("text") } },
                    { name: "Text With Image", className: "groupHeaderTemplateTextWithImage", eventMethod: function () { Config.changeHeaderTemplate("textWithImage") } },
                    { name: "Button", className: "groupHeaderTemplateButton", eventMethod: function () { Config.changeHeaderTemplate("button") } },
                    { name: "Interactive", className: "groupHeaderTemplateInteractive", eventMethod: function () { Config.changeHeaderTemplate("interactive") } }
                ]
            },
            {
                name: "Group Header Position", subOptions: [
                    { name: "Top", className: "groupHeaderPositionTop", eventMethod: function () { Config.selectHeaderPosition(WinJS.UI.HeaderPosition.top) } },
                    { name: "Left", className: "groupHeaderPositionLeft", eventMethod: function () { Config.selectHeaderPosition(WinJS.UI.HeaderPosition.left) } }
                ]
            },
            {
                name: "Group Header Tap Behavior", subOptions: [
                    { name: "Invoke", className: "groupHeaderTapBehaviorInvoke", eventMethod: function () { Config.selectHeaderTapBehavior(WinJS.UI.GroupHeaderTapBehavior.invoke) } },
                    { name: "None", className: "groupHeaderTapBehaviorNone", eventMethod: function () { Config.selectHeaderTapBehavior(WinJS.UI.GroupHeaderTapBehavior.none) } }
                ]
            },
            {
                name: "Data Changes", subOptions: [
                    { name: "Add Element", className: "dataChangesAddElement", eventMethod: Data.addElement },
                    { name: "Delete Element", className: "dataChangesDeleteElement", eventMethod: Data.deleteElement },
                    { name: "Change Element", className: "dataChangesChangeElement", eventMethod: Data.changeElement }
                ]
            },
            {
                name: "Scrolling", subOptions: [
                    { name: "Scroll Position", className: "scrollingScrollPosition", eventMethod: Methods.scrollPosition },
                    { name: "Ensure Visible", className: "scrollingEnsureVisible", eventMethod: Methods.ensureVisible }
                ]
            }
        ]

        return items;
    }

    

    function boldDefaultOptions(menu) {
        menu.querySelector(".layoutList").classList.add("selectedOptionValue");
        menu.querySelector(".orientationVertical").classList.add("selectedOptionValue");
        menu.querySelector(".itemTemplateTextWithImage").classList.add("selectedOptionValue");
        menu.querySelector(".itemsReorderableOff").classList.add("selectedOptionValue");
        menu.querySelector(".tapBehaviorInvokeOnly").classList.add("selectedOptionValue");
        menu.querySelector(".selectionModeMulti").classList.add("selectedOptionValue");
        menu.querySelector(".groupItemsNo").classList.add("selectedOptionValue");
        menu.querySelector(".groupHeaderTemplateText").classList.add("selectedOptionValue");
        menu.querySelector(".itemsReorderableOff").classList.add("selectedOptionValue");
        menu.querySelector(".groupHeaderPositionTop").classList.add("selectedOptionValue");
        menu.querySelector(".groupHeaderTapBehaviorInvoke").classList.add("selectedOptionValue");

    }

    function createMenuOptionTemplate(item) {
        var section = document.createElement("div");
        section.className = "optionMenuSection";

        var body = document.createElement("div");
        body.classList.add("optionTab");
        body.innerText = item.name;
        section.appendChild(body);

        template = addSubOptions(section, item.subOptions);
        template.addEventListener("click", menuItemClickEvent, false);

        return template;

    }

    function createSubOptionTemplate(item) {

        var template = document.createElement("div");
        template.className = "optionSubTab";
        template.innerText = item.name;
        template.classList.add(item.className);

        template.addEventListener("click", function (event) {
            item.eventMethod();

            //TODO: remove dependancy on html structure
            var prevSelected = this.parentElement.querySelector(".selectedOptionValue");
            if (prevSelected) {
                prevSelected.classList.remove("selectedOptionValue");
            }

            this.classList.add("selectedOptionValue");
            Utility.cancelEvent(event);
        }, false);

        return template;
    }

    function addSubOptions(section, subOptions) {

        var elem = document.createElement("div");
        elem.className = "menuSubOptions";
        elem.hidden = true;
        var data = new WinJS.Binding.List(subOptions);
        //use another repeater for the subelements inside each option section
        var subOptionRepeater = new WinJS.UI.Repeater(elem, {
            data: data,
            template: createSubOptionTemplate
        });
        section.appendChild(elem);
        return section;
    }

    WinJS.Namespace.define("Menu", {
        createOptionMenu: createOptionMenu,
    });

})();