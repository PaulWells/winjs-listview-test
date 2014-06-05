(function () {

    function GarbageCan() {
        var elem = document.querySelector(".garbageCan");
        var self = this;
        var timeOut = null;
        var delay = 1000;
        elem.hidden = true;
        elem.control = this;
    
        this.activate = function() {
            elem.hidden = false;
        };
        
        this.deactivate = function() {
            elem.hidden = true;
        };

        this.drop = function(indices) {

            var items = []
            for (var i = indices.length - 1; i >= 0; i--) {
                //remove item from ListView datasource
                var item = Sample.ListView.data.splice(indices[i], 1)[0];
                items.unshift(item);
            }
        };

        elem.addEventListener("dragstart", function (event) {
            event.preventDefault();
        })

        elem.addEventListener("dragover", function (event) {
            event.preventDefault();
        });

        elem.addEventListener("dragenter", function (event) {
            event.preventDefault();
            event.dataTransfer.dropEffect = "move";
        });

        elem.addEventListener("drop", function (event) {
            event.preventDefault();
            var indices = event.dataTransfer.getData("text").split(",");
            this.control.drop(indices);
            this.control.deactivate();
        });
    }
    
    var garbageCan = null;
    window.addEventListener("load", function () {
        garbageCan = new GarbageCan();
    });
})();