(function () {

    function addListeners() {
        document.querySelector(".itemsReorderableCheckBox").addEventListener("change", Config.itemsReorderable, false);
        document.querySelector(".groupItemsCheckBox").addEventListener("change", Config.toggleGroupItems, false);
        document.querySelector(".selectLayout").addEventListener("change", Config.selectLayout, false);
        document.querySelector(".toggleOrientation").addEventListener("click", Config.toggleOrientation, false);
        document.querySelector(".selectHeaderPosition").addEventListener("change", Config.selectHeaderPosition, false);
        document.querySelector(".selectTapBehavior").addEventListener("change", Config.selectTapBehavior, false);
        document.querySelector(".selectSelectionMode").addEventListener("change", Config.selectSelectionMode, false);
        document.querySelector(".changeTemplateButton").addEventListener("click", Config.openTemplateOptions, false);
        document.querySelector(".changeHeaderTemplateButton").addEventListener("click", Config.openHeaderTemplateOptions, false);
        document.querySelector(".selectHeaderTapBehavior").addEventListener("change", Config.selectHeaderTapBehavior, false);
        document.querySelector(".ensureVisibleButton").addEventListener("click", Methods.ensureVisible, false);
        document.querySelector(".scrollToButton").addEventListener("click", Methods.scrollTo, false);
        document.querySelector(".addItemButton").addEventListener("click", Data.addElement, false);
        document.querySelector(".deleteItemButton").addEventListener("click", Data.deleteElement, false);
        document.querySelector(".changeItemButton").addEventListener("click", Data.changeElement, false);

        var radioButtons = document.getElementsByClassName("templateRadioButton");

        for (var i = 0; i < radioButtons.length; i++) {
            radioButtons.item(i).addEventListener("click", Config.changeItemTemplate, false);
        }

        radioButtons = document.getElementsByClassName("headerTemplateRadioButton");

        for (var i = 0; i < radioButtons.length; i++) {
            radioButtons.item(i).addEventListener("click", Config.changeHeaderTemplate, false);
        }
    }

    function initializeListView() {
        var listView = document.querySelector(".listView").winControl;
        listView.itemTemplate = Templates.textWithImageTemplate;
        listView.addEventListener("groupheaderinvoked", Config.ungroupItems, false);
    }

    WinJS.Namespace.define("Init", {
        addListeners: addListeners,
        initializeListView: initializeListView
    });
})();