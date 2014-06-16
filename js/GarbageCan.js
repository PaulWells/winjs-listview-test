(function () {
    "use strict";

    /* Controls logic for dragging an item into a garbage can.  ListView must have 
    itemsReorderable set to true or itemsDraggable set to true*/
    var GarbageCan = WinJS.Class.define(
        function GarbageCan() {
            var _elem = document.querySelector(".garbageCan");
            _elem.hidden = false;
            _elem.style.opacity = 0;
            _elem.control = this;

            _elem.addEventListener("dragstart", function (event) {
                event.preventDefault();
            }, false);

            _elem.addEventListener("dragover", function (event) {
                event.preventDefault();
            }, false);

            _elem.addEventListener("dragenter", function (event) {
                event.preventDefault();
                event.dataTransfer.dropEffect = "move";
            }, false);

            _elem.addEventListener("drop", function (event) {
                event.preventDefault();
                var indices = event.dataTransfer.getData("text").split(",");
                this.control.drop(indices);
                this.control.deactivate();
            }, false);

            this.activate = function () {
                WinJS.UI.Animation.enterContent(_elem, null);
            }

            this.deactivate = function () {
                WinJS.UI.Animation.exitContent(_elem, null);
            }

            this.drop = function (indices) {

                var items = []
                for (var i = indices.length - 1; i >= 0; i--) {
                    //remove item from ListView datasource
                    var item = ListView.data.splice(indices[i], 1)[0];
                    items.unshift(item);
                }
            }
        },
        {},
        {}
    );

    
    var garbageCan = null;
    addEventListener("load", function () {
        Dragging.garbageCan = new GarbageCan();
    }, false);

    WinJS.Namespace.define("Dragging", {
        garbageCan: garbageCan
    })
})();