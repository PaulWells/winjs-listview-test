(function () {

    function initializeListView() {
        var listView = document.querySelector(".listView").winControl;
        listView.itemTemplate = Templates.textWithImageTemplate;
        //TODO: change invoke method
        listView.addEventListener("groupheaderinvoked", Config.function, false);
    }

    function createOptionMenu(){
        var optionsMenu = document.querySelector(".optionMenu");
        var data = new WinJS.Binding.List(Data.createMenuOptionData());
        var contentRepeater = new WinJS.UI.Repeater(optionsMenu, {
            data: data,
            template: Templates.createMenuOptionTemplate
        });

        boldDefaultOptions(optionsMenu);
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

    WinJS.Namespace.define("Init", {
        initializeListView: initializeListView,
        createOptionMenu: createOptionMenu
    });
})();