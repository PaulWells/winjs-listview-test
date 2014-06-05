(function () {
    "use strict";

    function initializeListView() {
        var listView = document.querySelector(".listView").winControl;
        listView.itemTemplate = Templates.textWithImageTemplate;
        listView.addEventListener("iteminvoked", Notifications.itemInvoked);
        listView.addEventListener("groupheaderinvoked", Notifications.groupHeaderInvoked);
        listView.addEventListener("itemdragstart", itemDragStartHandler);
        listView.addEventListener("itemdragenter", itemDragEnterHandler);
        listView.addEventListener("itemdragend", itemDragEndHandler);
        listView.addEventListener("itemdragbetween", Notifications.itemDragBetween);
        listView.addEventListener("itemdragleave", Notifications.itemDragLeave);
        listView.addEventListener("itemdragechanged", Notifications.itemDragChanged);
        listView.addEventListener("itemdragdrop", itemDropHandler);
        listView.addEventListener("keyboardnavigating", Notifications.keyboardNavigating);
        listView.addEventListener("loadingstatechanged", Notifications.loadingStateChanged);
        listView.addEventListener("selectionchanging", Notifications.selectionChanging);
        listView.addEventListener("selectionchanged", Notifications.selectionChanged);
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