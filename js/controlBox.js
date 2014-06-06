(function () {
    "use strict";
    function createControlBox() {

        var controlBox = document.querySelector(".controlBoxBody");
        var data = new WinJS.Binding.List(ControlBox.rows);
        var contentRepeater = new WinJS.UI.Repeater(controlBox, {
            data: data,
            template: ControlBox.controlBoxRowTemplate
        });

        removeDefaultFromActionSelectors();
    }

    function removeDefaultFromActionSelectors() {
        var selectors = document.querySelectorAll(".controlBoxActionSelector");
        for (var i = 0; i < selectors.length; i++) {
            selectors[i].selectedIndex = -1;
        }
    }

    WinJS.Namespace.define("ControlBox", {
        createControlBox: createControlBox
    });


})();