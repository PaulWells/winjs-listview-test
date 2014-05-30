(function () {
    "use strict";

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
        menuItem.classList.add("selectedOption");
        subItems.hidden = false;

        if (prevSelection) {
            prevSelection.querySelector(".menuSubOptions").hidden = true;
        }
    }

    function undoPreviousSelection(prevSelection) {
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
                    {
                        name: "Grid",
                        className: "layoutGrid",
                        eventMethod: function () { Config.setLayout(new WinJS.UI.GridLayout, this.info) },
                        info: {
                            description: "Sets the layout of the ListView to a GridLayout in which items are arranged in a horizontal grid.",
                            code: "listView.layout = new WinJS.UI.GridLayout",
                            link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211751.aspx"
                        }
                    },
                    {
                        name: "List",
                        className: "layoutList",
                        eventMethod: function () { Config.setLayout(new WinJS.UI.ListLayout, this.info) },
                        info: {
                            description: "Sets the layout of the ListView to a ListLayout in which items are arranged in a vertical list.",
                            code: "listView.layout = new WinJS.UI.ListLayout",
                            link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211792.aspx"
                        }
                    },
                ]
            },
            {
                name: "Orientation", subOptions: [
                    {
                        name: "Vertical",
                        className: "orientationVertical",
                        eventMethod: function () { Config.setOrientation(WinJS.UI.Orientation.vertical, this.info) },
                        info: {
                            description: "Sets the orientation of the ListView to vertical.  This property applies to many WinJS controls.",
                            code: "listViewControl.layout.orientation = WinJS.UI.Orientation.vertical",
                            link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301804.aspx"
                        }
                    },
                    {
                        name: "Horizontal",
                        className: "orientationHorizontal",
                        eventMethod: function () { Config.setOrientation(WinJS.UI.Orientation.horizontal, this.info) },
                        info: {
                            description: "Sets the orientation of the ListView to horizontal.  This property applies to many WinJS controls.",
                            code: "listViewControl.layout.orientation = WinJS.UI.Orientation.horizontal",
                            link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301804.aspx"
                        }
                    }
                ]
            },
            {
                name: "Item Template", subOptions: [
                    {
                        name: "Text With Image",
                        className: "itemTemplateTextWithImage",
                        eventMethod: function () { Config.changeItemTemplate("textWithImage", this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    },
                    {
                        name: "Image",
                        className: "itemTemplateImage",
                        eventMethod: function () { Config.changeItemTemplate("image", this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    },
                    {
                        name: "Inline",
                        className: "itemTemplateInline",
                        eventMethod: function () { Config.changeItemTemplate("inline", this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    },
                    {
                        name: "Interactive",
                        className: "itemTemplateInteractive",
                        eventMethod: function () { Config.changeItemTemplate("interactive", this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    }
                ]
            },
            {
                name: "Items Reorderable", subOptions: [
                    {
                        name: "On",
                        className: "itemsReorderableOn",
                        eventMethod: function () { Config.itemsReorderable(true, this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    },
                    {
                        name: "Off",
                        className: "itemsReorderableOff",
                        eventMethod: function () { Config.itemsReorderable(false, this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    }
                ]
            },
            {
                name: "Tap Behavior", subOptions: [
                    {
                        name: "Direct Select",
                        className: "tapBehaviorDirectSelect",
                        eventMethod: function () { Config.tapBehavior(WinJS.UI.TapBehavior.directSelect, this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    },
                    {
                        name: "Toggle Select",
                        className: "tapBehaviorToggleSelect",
                        eventMethod: function () { Config.tapBehavior(WinJS.UI.TapBehavior.toggleSelect, this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    },
                    {
                        name: "Invoke Only",
                        className: "tapBehaviorInvokeOnly",
                        eventMethod: function () { Config.tapBehavior(WinJS.UI.TapBehavior.invokeOnly, this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    },
                    {
                        name: "None",
                        className: "tapBehaviorNone",
                        eventMethod: function () { Config.tapBehavior(WinJS.UI.TapBehavior.none, this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    }
                ]
            },
            {
                name: "Selection Mode", subOptions: [
                    {
                        name: "None",
                        className: "selectionModeNone",
                        eventMethod: function () { Config.selectionMode(WinJS.UI.SelectionMode.none, this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    },
                    {
                        name: "Single",
                        className: "selectionModeSingle",
                        eventMethod: function () { Config.selectionMode(WinJS.UI.SelectionMode.single, this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    },
                    {
                        name: "Multi",
                        className: "selectionModeMulti",
                        eventMethod: function () { Config.selectionMode(WinJS.UI.SelectionMode.multi, this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    }
                ]
            },
            {
                name: "Group Items", subOptions: [
                    {
                        name: "Yes",
                        className: "groupItemsYes",
                        eventMethod: function () { Config.groupItems(true, this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    },
                    {
                        name: "No",
                        className: "groupItemsNo",
                        eventMethod: function () { Config.groupItems(false, this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    }
                ]
            },
            {
                name: "Group Header Template", subOptions: [
                    {
                        name: "Text",
                        className: "groupHeaderTemplateText",
                        eventMethod: function () { Config.changeHeaderTemplate("text", this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    },
                    {
                        name: "Text With Image",
                        className: "groupHeaderTemplateTextWithImage",
                        eventMethod: function () { Config.changeHeaderTemplate("textWithImage", this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    },
                    {
                        name: "Button",
                        className: "groupHeaderTemplateButton",
                        eventMethod: function () { Config.changeHeaderTemplate("button", this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    },
                    {
                        name: "Interactive",
                        className: "groupHeaderTemplateInteractive",
                        eventMethod: function () { Config.changeHeaderTemplate("interactive", this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    }
                ]
            },
            {
                name: "Group Header Position", subOptions: [
                    {
                        name: "Top",
                        className: "groupHeaderPositionTop",
                        eventMethod: function () { Config.selectHeaderPosition(WinJS.UI.HeaderPosition.top, this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    },
                    {
                        name: "Left",
                        className: "groupHeaderPositionLeft",
                        eventMethod: function () { Config.selectHeaderPosition(WinJS.UI.HeaderPosition.left, this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    }
                ]
            },
            {
                name: "Group Header Tap Behavior", subOptions: [
                    {
                        name: "Invoke",
                        className: "groupHeaderTapBehaviorInvoke",
                        eventMethod: function () { Config.selectHeaderTapBehavior(WinJS.UI.GroupHeaderTapBehavior.invoke, this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    },
                    {
                        name: "None",
                        className: "groupHeaderTapBehaviorNone",
                        eventMethod: function () { Config.selectHeaderTapBehavior(WinJS.UI.GroupHeaderTapBehavior.none, this.info) },
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    }
                ]
            },
            {
                name: "Data Changes", subOptions: [
                    {
                        name: "Add Element",
                        className: "dataChangesAddElement",
                        eventMethod: function(){Data.addElement(this.info)},
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    },
                    {
                        name: "Delete Element",
                        className: "dataChangesDeleteElement",
                        eventMethod: function () { Data.deleteElement(this.info)},
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    },
                    {
                        name: "Change Element",
                        className: "dataChangesChangeElement",
                        eventMethod: function(){Data.changeElement(this.info)},
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    }
                ]
            },
            {
                name: "Scrolling", subOptions: [
                    {
                        name: "Scroll Position",
                        className: "scrollingScrollPosition",
                        eventMethod: Methods.scrollPosition,
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    },
                    {
                        name: "Ensure Visible",
                        className: "scrollingEnsureVisible",
                        eventMethod: Methods.ensureVisible,
                        info: {
                            description: "",
                            code: "",
                            link: ""
                        }
                    }
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
        menu.querySelector(".dataChangesAddElement").classList.add("selectedOptionValue");
        menu.querySelector(".scrollingScrollPosition").classList.add("selectedOptionValue");

    }

    function createMenuOptionTemplate(item) {
        var section = document.createElement("div");
        section.className = "optionMenuSection";

        var body = document.createElement("div");
        body.classList.add("optionTab");
        body.innerText = item.name;
        section.appendChild(body);

        var template = addSubOptions(section, item.subOptions);
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