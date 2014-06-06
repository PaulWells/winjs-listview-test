(function () {
    "use strict";
    function itemInvoked(eventInfo) {
        var index = eventInfo.detail.itemIndex;
        notification = "onItemInvoked().  Item " + index + " was invoked!";
        notifier.postNotification(notification);
    }

    function groupHeaderInvoked(eventInfo) {
       var index = eventInfo.detail.groupHeaderIndex;
       var notification =  "Group header " + index + " was invoked!";
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
        notifier.postNotification("onKeyboardNavigating()");
    }

    function loadingStateChanged(event) {
        var listView = document.querySelector(".listView").winControl;
        var firstVisibleIndex = listView.indexOfFirstVisible;
        var lastVisibleIndex = listView.indexOfLastVisible;
        notifier.postStickyNotification("onLoadingStateChanged().  First visible item: " + firstVisibleIndex + ", last visible item: " + lastVisibleIndex);
    }

    function selectionChanging(event) {
        notifier.postNotification("onSelectionChanging()");
    }

    function selectionChanged(event) {
        var listView = document.querySelector(".listView").winControl;
        var indices = listView.selection.getIndices();
        if (indices.length > 0) {
            var notification = "Indices: " + indices.toString();
        } else {
            var notification = "No items are selected";
        }

        notifier.postStickyNotification("onSelectionChanged().  " + notification);
    }

    function Notifier() {
        var banner = document.querySelector(".notificationBanner");
        var timeOut = null;
        var interval = 4000;

        this.postNotification = function postNotification(content) {
            this.postStickyNotification(content);
            timeOut = setTimeout(hideNotification, interval);
        }

        this.postStickyNotification = function postStickyNotification(content) {
            if (timeOut) {
                clearTimeout(timeOut);
            }
            showNotification(content);
        }

        var hideNotification = function hideNotification() {
            banner.hidden = true;
        }

        var showNotification = function showNotification(notification) {
            banner.hidden = false;
            banner.innerText = notification;
            console.log(notification);
        }
    }

    var notifier = null
    window.addEventListener("load", function () {
        notifier = new Notifier();
    });


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
        selectionChanged: selectionChanged
    });
})();