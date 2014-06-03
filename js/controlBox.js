(function () {

    function createControlBox() {

        var controlBox = document.querySelector(".controlBoxBody");
        var data = new WinJS.Binding.List(ControlBox.rows);
        var contentRepeater = new WinJS.UI.Repeater(controlBox, {
            data: data,
            template: ControlBox.controlBoxRowTemplate
        });

    }

    WinJS.Namespace.define("ControlBox", {
        createControlBox: createControlBox
    });


})();