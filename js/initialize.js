(function () {
    "use strict";

    function initializeListView() {
        var listView = document.querySelector(".listView").winControl;
        addListViewEventListeners(listView);

        WinJS.Namespace.define("ListView", {
            listView: listView
        });

        window.addEventListener("resize", function () {
            ListView.listView.recalculateItemPosition();
        }, false);
    }

    function addListViewEventListeners(listView) {
        listView.itemTemplate = WinJS.UI.simpleItemRenderer(Templates.textWithImageTemplate);
        listView.groupHeaderTemplate = WinJS.UI.simpleItemRenderer(Templates.textHeaderTemplate);
        listView.addEventListener("iteminvoked", Notifications.itemInvoked, false);
        listView.addEventListener("groupheaderinvoked", Notifications.groupHeaderInvoked, false);
        listView.addEventListener("itemdragstart", itemDragStartHandler, false);
        listView.addEventListener("itemdragenter", Notifications.itemDragEnter, false);
        listView.addEventListener("itemdragend", itemDragEndHandler, false);
        listView.addEventListener("itemdragbetween", Notifications.itemDragBetween, false);
        listView.addEventListener("itemdragleave", Notifications.itemDragLeave, false);
        listView.addEventListener("itemdragechanged", Notifications.itemDragChanged, false);
        listView.addEventListener("itemdragdrop", Notifications.itemDragDrop, false);
        listView.addEventListener("keyboardnavigating", Notifications.keyboardNavigating, false);
        listView.addEventListener("loadingstatechanged", Notifications.loadingStateChanged, false);
        listView.addEventListener("selectionchanging", Notifications.selectionChanging, false);
        listView.addEventListener("selectionchanged", Notifications.selectionChanged, false);
    }

    function initializeDocumentation() {
        Documentation.updateInfoImmediate(Documentation.welcome);
    }

    function itemDragStartHandler(event) {
        Notifications.itemDragStart(event);

        // Pass indices of dragged items into event so they're available for later drag events
        event.detail.dataTransfer.setData("text", event.detail.dragInfo.getIndices().toString());
        event.detail.dataTransfer.effectAllowed = "all";

        Dragging.garbageCan.activate();
    }

    function itemDragEndHandler(event) {
        Notifications.itemDragEnd(event);
        Dragging.garbageCan.deactivate();
    }

    function addClipBoardClickHandler() {
        var clipBoard = document.querySelector(".copyToClipboardButton");
        clipBoard.addEventListener("click", function () {
            var codeElem = document.querySelector(".selectionSampleCode");
            codeElem.textContent.select();
            document.execCommand("Copy");
        }, false);
    }

    WinJS.Namespace.define("Init", {
        initializeListView: initializeListView,
        initializeDocumentation: initializeDocumentation,
        addClipBoardClickHandler: addClipBoardClickHandler
    });
})();