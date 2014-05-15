(function () {

    function addListeners() {
        document.querySelector(".itemsReorderableCheckBox").addEventListener("change", Config.itemsReorderable, true);
        document.querySelector(".groupItemsCheckBox").addEventListener("change", Config.groupItems, true);
        document.querySelector(".selectLayout").addEventListener("change", Config.selectLayout, true);
        document.querySelector(".toggleOrientation").addEventListener("click", Config.toggleOrientation, true);
        document.querySelector(".selectHeaderPosition").addEventListener("change", Config.selectHeaderPosition, true);
        document.querySelector(".selectTapBehavior").addEventListener("change", Config.selectTapBehavior, true);
        document.querySelector(".selectSelectionMode").addEventListener("change", Config.selectSelectionMode, true);
    }

    WinJS.Namespace.define("Init", {
        addListeners: addListeners
    });
})();