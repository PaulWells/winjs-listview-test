(function () {
    "use strict";

    function initializeListView() {
        var listView = document.querySelector(".listView").winControl;
        listView.itemTemplate = Templates.textWithImageTemplate;
        listView.groupHeaderTemplate = Templates.textHeaderTemplate;
        listView.addEventListener("iteminvoked", Notifications.itemInvoked);
        listView.addEventListener("groupheaderinvoked", Notifications.groupHeaderInvoked);
        listView.addEventListener("itemdragstart", itemDragStartHandler);
        listView.addEventListener("itemdragenter", Notifications.itemDragEnter);
        listView.addEventListener("itemdragend", itemDragEndHandler);
        listView.addEventListener("itemdragbetween", Notifications.itemDragBetween);
        listView.addEventListener("itemdragleave", Notifications.itemDragLeave);
        listView.addEventListener("itemdragechanged", Notifications.itemDragChanged);
        listView.addEventListener("itemdragdrop", Notifications.itemDragDrop);
        listView.addEventListener("keyboardnavigating", Notifications.keyboardNavigating);
        listView.addEventListener("loadingstatechanged", Notifications.loadingStateChanged);
        listView.addEventListener("selectionchanging", Notifications.selectionChanging);
        listView.addEventListener("selectionchanged", Notifications.selectionChanged);
    }

    function initializeDocumentation() {
        Documentation.updateInfo(Documentation.welcome);
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

    function addClickListeners() {
        document.querySelector(".listViewDocumentationToggle").addEventListener("click", docListViewToggleHandler);
    }

    function docListViewToggleHandler(event) {
        var button = this;
        var listView = document.querySelector(".listViewSection");
        var docs = document.querySelector(".interactiveInfoSection");
        var docsButtonText = "Documentation";
        if (this.innerText === docsButtonText) {
            WinJS.UI.Animation.exitContent(button, null).done(function () {
                WinJS.UI.Animation.enterContent(button, null);
            })
            WinJS.UI.Animation.exitContent(listView, null).done(function () {
                listView.style.display = "none";
                docs.style.display = "block";
                WinJS.UI.Animation.enterContent(docs, null);
                button.innerText = "ListView";
            });
        } else {
            WinJS.UI.Animation.exitContent(button, null).done(function () {
                WinJS.UI.Animation.enterContent(button, null);
            })
            WinJS.UI.Animation.exitContent(docs, null).done(function () {
                docs.style.display = "none";
                listView.style.display = "block";
                WinJS.UI.Animation.enterContent(listView, null);
                button.innerText = docsButtonText;
            });
        }
    }

    

    WinJS.Namespace.define("Init", {
        initializeListView: initializeListView,
        initializeDocumentation: initializeDocumentation,
        addClickListeners: addClickListeners
    });
})();