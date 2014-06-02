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

    function menuSubItemClickEvent(event, item, elem) {
        item.eventMethod();
        Documentation.updateInfo(item.info);

        var prevSelected = elem.parentElement.querySelector(".selectedOptionValue");
        if (prevSelected) {
            prevSelected.classList.remove("selectedOptionValue");
        }

        elem.classList.add("selectedOptionValue");
        Utility.cancelEvent(event);
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
        var data = new WinJS.Binding.List(Menu.optionMenuData);
        var contentRepeater = new WinJS.UI.Repeater(optionsMenu, {
            data: data,
            template: Menu.createMenuOptionTemplate
        });

        boldDefaultOptions(optionsMenu);
        displayFirstMenuItem(optionsMenu);
        
    }


    function displayFirstMenuItem(menu) {
        var firstTab = menu.querySelector(".optionTab");
        menu.querySelector(".optionMenuSection").classList.add("selectedOption");
        var subOptions = menu.querySelector(".menuSubOptions");
        subOptions.hidden = false;
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

    

    WinJS.Namespace.define("Menu", {
        createOptionMenu: createOptionMenu,
        menuSubItemClickEvent: menuSubItemClickEvent,
        menuItemClickEvent: menuItemClickEvent

    });

})();