(function () {
    "use strict";

    function initializeListView() {
        var listView = document.querySelector(".listView").winControl;
        listView.itemTemplate = Templates.textWithImageTemplate;
        listView.groupHeaderTemplate = Templates.textHeaderTemplate;
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
        document.querySelector(".listViewDocumentationToggle").addEventListener("click", docListViewToggleHandler, false);
        addBackButtonListener();
    }

    function addBackButtonListener() {
        document.querySelector(".win-navigation-backbutton").addEventListener("click", function () {
            parent.postMessage("back", "*");
        }, false);
    }


    function docListViewToggleHandler(event) {
        var button = this;
        var listView = document.querySelector(".listViewSection");
        var docs = document.querySelector(".interactiveInfoSection");
        var docsButtonText = "Documentation";
        if (Utility.getInnerText(this) === docsButtonText) {
            WinJS.UI.Animation.exitContent(button, null).done(function () {
                WinJS.UI.Animation.enterContent(button, null);
            })
            WinJS.UI.Animation.exitContent(listView, null).done(function () {
                listView.style.display = "none";
                docs.style.display = "block";
                WinJS.UI.Animation.enterContent(docs, null);
                Utility.setInnerText(button, "ListView");
            });
        } else {
            WinJS.UI.Animation.exitContent(button, null).done(function () {
                WinJS.UI.Animation.enterContent(button, null);
            })
            WinJS.UI.Animation.exitContent(docs, null).done(function () {
                docs.style.display = "none";
                listView.style.display = "block";
                WinJS.UI.Animation.enterContent(listView, null);
                Utility.setInnerText(button,docsButtonText);
            });
        }
    }

    

    WinJS.Namespace.define("Init", {
        initializeListView: initializeListView,
        initializeDocumentation: initializeDocumentation,
        addClickListeners: addClickListeners,
        addBackButtonListener: addBackButtonListener,
    });
})();