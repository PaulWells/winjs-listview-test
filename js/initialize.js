(function () {
    "use strict";

    function initializeListView() {
        var listView = document.querySelector(".listView").winControl;
        listView.itemTemplate = Templates.textWithImageTemplate;
        listView.addEventListener("iteminvoked", Notifications.itemInvoked, false);
        listView.addEventListener("groupheaderinvoked", Notifications.groupHeaderInvoked, false);
        listView.addEventListener("itemdragstart", Notifications.itemDragStart, false);
        listView.addEventListener("itemdragenter", Notifications.itemDragEnter, false);
        listView.addEventListener("itemdragend", Notifications.itemDragEnd, false);
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
        Documentation.updateInfo(Documentation.listLayout);
    }

    WinJS.Namespace.define("Init", {
        initializeListView: initializeListView,
        initializeDocumentation: initializeDocumentation
    });
})();