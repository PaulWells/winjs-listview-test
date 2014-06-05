(function () {
    "use strict";

    function initializeListView() {
        var listView = document.querySelector(".listView").winControl;
        listView.itemTemplate = Templates.textWithImageTemplate;
        listView.addEventListener("iteminvoked", Notifications.itemInvoked, false);
        listView.addEventListener("groupheaderinvoked", Notifications.groupHeaderInvoked, false);
        listView.addEventListener("itemdragstart", itemDragStartHandler, false);
        listView.addEventListener("itemdragenter", itemDragEnterHandler, false);
        listView.addEventListener("itemdragend", itemDragEndHandler, false);
        listView.addEventListener("itemdragbetween", Notifications.itemDragBetween, false);
        listView.addEventListener("itemdragleave", Notifications.itemDragLeave, false);
        listView.addEventListener("itemdragechanged", Notifications.itemDragChanged, false);
        listView.addEventListener("itemdragdrop", itemDropHandler, false);
        listView.addEventListener("keyboardnavigating", Notifications.keyboardNavigating, false);
        listView.addEventListener("loadingstatechanged", Notifications.loadingStateChanged, false);
        listView.addEventListener("selectionchanging", Notifications.selectionChanging, false);
        listView.addEventListener("selectionchanged", Notifications.selectionChanged, false);
    }

    function initializeDocumentation() {
        Documentation.updateInfo(Documentation.listLayout);
    }

    function itemDragEnterHandler(event) {
        Notifications.itemDragEnter(event);
    }

    function itemDropHandler(event) {
        Notifications.itemDragDrop(event);
    }

    function itemDragStartHandler(event) {
        Notifications.itemDragStart(event);

        //pass indices of dragged itmes into event so its available for later drag events
        event.detail.dataTransfer.setData("text", event.detail.dragInfo.getIndices().toString());
        event.detail.dataTransfer.effectAllowed = "all";

        var garbageCan = document.querySelector(".garbageCan").control;
        garbageCan.activate();
    }

    function itemDragEndHandler(event) {
        Notifications.itemDragEnd(event);
        var garbageCan = document.querySelector(".garbageCan").control;
        garbageCan.deactivate();
    }

    WinJS.Namespace.define("Init", {
        initializeListView: initializeListView,
        initializeDocumentation: initializeDocumentation
    });
})();