(function () {

    function addListeners() {
        document.querySelector(".itemsReorderableCheckBox").addEventListener("change", Config.itemsReorderable, true);
        document.querySelector(".groupItemsCheckBox").addEventListener("change", Config.groupItems, true);
        document.querySelector(".selectLayout").addEventListener("change", Config.selectLayout, true);
        document.querySelector(".toggleOrientation").addEventListener("click", Config.toggleOrientation, true);
    }

    WinJS.Namespace.define("Init", {
        addListeners: addListeners
    });
})();