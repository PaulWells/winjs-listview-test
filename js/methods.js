(function () {

    function ensureVisible() {
        listView = document.querySelector(".listView").winControl;
        listView.ensureVisible(fetchInputNumber());
    }

    function scrollPosition() {
        listView = document.querySelector(".listView").winControl;
        listView.scrollPosition = fetchInputNumber();
    }

    function fetchInputNumber(){
        return parseInt(document.querySelector(".textInput").value);
    }

    WinJS.Namespace.define("Methods", {
        ensureVisible: ensureVisible,
        scrollPosition: scrollPosition
    });

})();