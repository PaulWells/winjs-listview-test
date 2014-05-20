(function () {

    function addListeners() {
        document.querySelector(".itemsReorderableCheckBox").addEventListener("change", Config.itemsReorderable, false);
        document.querySelector(".groupItemsCheckBox").addEventListener("change", Config.groupItems, false);
        document.querySelector(".selectLayout").addEventListener("change", Config.selectLayout, false);
        document.querySelector(".toggleOrientation").addEventListener("click", Config.toggleOrientation, false);
        document.querySelector(".selectHeaderPosition").addEventListener("change", Config.selectHeaderPosition, false);
        document.querySelector(".selectTapBehavior").addEventListener("change", Config.selectTapBehavior, false);
        document.querySelector(".selectSelectionMode").addEventListener("change", Config.selectSelectionMode, false);
        document.querySelector(".changeTemplateButton").addEventListener("click", Config.openTemplateOptions, false);

        var radioButtons = document.getElementsByClassName("templateRadioButton");

        for (var i = 0; i < radioButtons.length; i++) {
            radioButtons.item(i).addEventListener("click", Config.changeTemplate, false);
        }
    }

    WinJS.Namespace.define("Init", {
        addListeners: addListeners
    });
})();