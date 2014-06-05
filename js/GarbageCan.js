(function () {

    function GarbageCan() {
        var elem = document.querySelector(".garbageCan");
        var img = elem.querySelector("img");
        var text = elem.querySelector("div");
        var self = this;
        var dragInProgress = false;
        var full = false;
        var timeOut = null;
        var delay = 4000;
        elem.hidden = true;
        elem.control = this;
        img.hidden = true;
    
        this.activate = function() {
            dragInProgress = true;
            if (!full) {
                elem.hidden = false;
            }
        };
        

        this.deactivate = function() {
            if (full) {
                return;
            }
            dragInProgress = false;
            elem.hidden = true;
        };

        this.hide = function () {
            if (dragInProgress) {
                return;
            }
            elem.hidden = true;
        }

        this.drop = function(indices) {

            var items = []
            for (var i = indices.length - 1; i >= 0; i--) {
                //remove item from ListView datasource
                var item = Sample.ListView.data.splice(indices[i], 1)[0];
                items.unshift(item);
            }

            //show thumbnail of first item
            img.src = items[0].picture;
            img.hidden = false;
            text.hidden = true;
            full = true;
            clearTimeout(timeOut);
            dragInProgress = false;
            timeOut = setTimeout(this.empty, delay);
        };

        this.empty = function() {
            img.src = "#"
            img.hidden = true;
            text.hidden = false;
            full = false;
            self.hide();
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
    }, false);
})();