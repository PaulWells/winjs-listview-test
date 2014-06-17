(function () {
    "use strict";
    function itemInvoked(eventInfo) {
        var index = eventInfo.detail.itemIndex;
        var notification = "onItemInvoked().  Item " + index + " was invoked!";
        notifier.postNotification(notification);
    }

    function groupHeaderInvoked(eventInfo) {
       var index = eventInfo.detail.groupHeaderIndex;
       var notification =  "onGroupHeaderInvoked().  Header " + index + " was invoked!";
       notifier.postNotification(notification);
    }

    function elementAdded() {
        notifier.postNotification("Element Added");
    }

    function elementDeleted() {
        notifier.postNotification("Element deleted");
    }

    function elementChanged() {
        notifier.postNotification("Element changed");
    }

    function scrollPosition(pixel) {
        notifier.postNotification("Scrolled to pixel " + pixel);
    }
    function ensureVisibleFirst() {
        notifier.postNotification("Ensured the first item is visible");
    }
    function ensureVisibleMiddle() {
        var listView = document.querySelector(".listView").winControl;
        var index = listView.itemDataSource.length/2;
        notifier.postNotification("Ensured the middle item (item " + index + ") is visible");
    }
    function ensureVisibleLast() {
        var listView = document.querySelector(".listView").winControl;
        var index = listView.itemDataSource.length;
        notifier.postNotification("Ensured the last item (item " + index + ") is visible");
    }

    function itemDragStart(event) {
        var notification = "onItemDragStart().  Indices: " + getIndices(event);
        notifier.postNotification(notification);
    }

    function itemDragEnter(event) {
        var notification = "onItemDragEnter()";
        notifier.postNotification(notification);
    }

    function itemDragEnd(event) {
        var notification = "onItemDragEnd()";
        notifier.postNotification(notification);
    }

    function itemDragBetween(event) {
        var notification = "onItemDragBetween()";
        notifier.postNotification(notification);
    }

    function itemDragLeave(event) {
        var notification = "onItemDragLeave()";
        notifier.postNotification(notification);
    }

    function itemDragChanged(event) {
        var notification = "onItemDragChanged()";
        notifier.postNotification(notification);
    }

    function itemDragDrop(event) {
        var notification = "onItemDragDrop()";
        notifier.postNotification(notification);
    }

    function getIndices(event) {
        var detail = event.detail;
        var notification = detail.dragInfo.getIndices().toString();

        return notification;
    }

    function keyboardNavigating(event) {
        var detail = event.detail;
        notifier.postNotification("onKeyboardNavigating().  Navigated from item " + detail.oldFocus + " to item " + detail.newFocus);
    }

    function loadingStateChanged(event) {
        var listView = document.querySelector(".listView").winControl;
        var firstVisibleIndex = listView.indexOfFirstVisible;
        var lastVisibleIndex = listView.indexOfLastVisible;
        if (notifier) {
            notifier.postStickyNotification("onLoadingStateChanged().  First visible item: " + firstVisibleIndex + ", last visible item: " + lastVisibleIndex);
        }
    }

    function selectionChanging(event) {
        notifier.postNotification("onSelectionChanging()");
    }

    function selectionChanged(event) {
        var listView = document.querySelector(".listView").winControl;
        var indices = listView.selection.getIndices();
        var indicesLimit = 15;
        if (indices.length > 0) {
            if (indices.length < indicesLimit) {
                var notification = "Indices: " + indices.toString();
            } else {
                var notification = "Indices: " + indices.splice(0, indicesLimit).toString() + "...";
            }
        } else {
            var notification = "No items are selected";
        }

        notifier.postStickyNotification("onSelectionChanged().  " + notification);
    }

    function dataSourceSmall() {
        notifier.postNotification("Data source changed to 100 items");
    }

    function dataSourceLarge() {
        notifier.postNotification("Data source changed to 1000 items");
    }

    function groupHeaderPositionWarning(event) {
        if (listViewIsNotGrouped()) {
            notifier.postNotification("Group header position changed, enable grouping to see the group header.", Notifier.NotificationTypes.warning);
        }
    }

    function groupHeaderTemplateWarning(event) {
        if (listViewIsNotGrouped()) {
            notifier.postNotification("Group header template changed, enable grouping to see the group header template.", Notifier.NotificationTypes.warning);
        }
    }

    function groupHeaderTapBehaviorWarning(event) {
        if(listViewIsNotGrouped()){
            notifier.postNotification("Group header tap behavior changed, enable grouping to see the group header.", Notifier.NotificationTypes.warning);
         }
    }

    function listViewIsNotGrouped() {
        return ListView.listView.groupDataSource === null || ListView.listView.groupDataSource === undefined;
    }

    /* Controls logic for showing notifications */
    var Notifier = WinJS.Class.define(
        function () {
            var _banner = document.querySelector(".notificationBanner");
            var _timeOut = null;
            var _interval = 4000;
            var _busy = false;

            this.postNotification = function postNotification(content, type) {
                if (_busy) {
                    return;
                }

                this.postStickyNotification(content, type);
                _timeOut = setTimeout(hideNotification, _interval);
            }

            /*sticky notifications don't timeout*/
            this.postStickyNotification = function postStickyNotification(content, type) {

                if (_busy) {
                    return;
                }

                if (_timeOut) {
                    clearTimeout(_timeOut);
                }
                showNotification(content, type);

                if (type === Notifier.NotificationTypes.warning) {
                    _busy = true;
                }
            }
            
            var hideNotification = function hideNotification() {
                _banner.hidden = true;
                _busy = false;
            }

            var showNotification = function showNotification(notification, type) {
                var color = (type ? type.color : Notifier.NotificationTypes.info.color);
                _banner.style.backgroundColor = color;
                _banner.hidden = false;
                _banner.textContent = notification;
                console.log(notification);
            }
        },
        {},
        {
            NotificationTypes: {
                info: {
                    color: "#007ACC"
                },
                warning: {
                    color: "#CA5100"
                }
            }
        }
    );

    var notifier = null
    addEventListener("load", function () {
        notifier = new Notifier();
    }, false);


    WinJS.Namespace.define("Notifications", {
        itemInvoked: itemInvoked,
        groupHeaderInvoked: groupHeaderInvoked,
        elementAdded: elementAdded,
        elementDeleted: elementDeleted,
        elementChanged: elementChanged,
        scrollPosition: scrollPosition,
        ensureVisibleFirst: ensureVisibleFirst,
        ensureVisibleMiddle: ensureVisibleMiddle,
        ensureVisibleLast: ensureVisibleLast,
        itemDragStart: itemDragStart,
        itemDragEnter: itemDragEnter,
        itemDragEnd: itemDragEnd,
        itemDragBetween: itemDragBetween,
        itemDragLeave: itemDragLeave,
        itemDragChanged: itemDragChanged,
        itemDragDrop: itemDragDrop,
        keyboardNavigating: keyboardNavigating,
        loadingStateChanged: loadingStateChanged,
        selectionChanging: selectionChanging,
        selectionChanged: selectionChanged,
        dataSourceSmall: dataSourceSmall,
        dataSourceLarge: dataSourceLarge,
        groupHeaderPositionWarning: groupHeaderPositionWarning,
        groupHeaderTemplateWarning: groupHeaderTemplateWarning,
        groupHeaderTapBehaviorWarning: groupHeaderTapBehaviorWarning
    });
})();