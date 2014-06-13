(function () {
    "use strict";
    function GarbageCan() {
        var elem = document.querySelector(".garbageCan");
        var self = this;
        var timeOut = null;
        var delay = 1000;
        elem.hidden = false;
        elem.style.opacity = 0;
        elem.control = this;
    
        this.activate = function () {
            WinJS.UI.Animation.enterContent(elem, null);
        };
        
        this.deactivate = function () {
            WinJS.UI.Animation.exitContent(elem, null);
        };

        this.drop = function(indices) {

            var items = []
            for (var i = indices.length - 1; i >= 0; i--) {
                //remove item from ListView datasource
                var item = ListView.data.splice(indices[i], 1)[0];
                items.unshift(item);
            }
        };

        elem.addEventListener("dragstart", function (event) {
            event.preventDefault();
        }, false);

        elem.addEventListener("dragover", function (event) {
            event.preventDefault();
        }, false);

        elem.addEventListener("dragenter", function (event) {
            event.preventDefault();
            event.dataTransfer.dropEffect = "move";
        }, false);

        elem.addEventListener("drop", function (event) {
            event.preventDefault();
            var indices = event.dataTransfer.getData("text").split(",");
            this.control.drop(indices);
            this.control.deactivate();
        }, false);
    }
    
    var garbageCan = null;
    window.addEventListener("load", function () {
        garbageCan = new GarbageCan();
    }, false);
})();