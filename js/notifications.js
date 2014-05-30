(function () {

    function itemInvoked(eventInfo) {
        var index = eventInfo.detail.itemIndex;
        var banner = document.querySelector(".notificationBanner");
        banner.hidden = false;
        banner.innerText = "Item " + index + " was invoked!";
    }

    function groupHeaderInvoked(eventInfo) {
        var index = eventInfo.detail.groupHeaderIndex;
        var banner = document.querySelector(".notificationBanner");
        banner.hidden = false;
        banner.innerText = "Group header " + index + " was invoked!";
    }

    WinJS.Namespace.define("Notifications", {
        itemInvoked: itemInvoked,
        groupHeaderInvoked: groupHeaderInvoked
    });
})();