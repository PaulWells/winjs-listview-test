(function () {
    "use strict";
    function createControlBox() {

        var controlBoxArea = document.querySelector(".controlBoxArea");
        var data = ControlBox.rows;

        var numTables = 2;
        var bucketSizes = getBucketSizes(numTables, data.length);
       
        for (var i = 0; i < numTables; i++) {
            var subData = new WinJS.Binding.List(data.splice(0, bucketSizes[i]));
            controlBoxArea.appendChild(createTable(subData));
        }

        removeDefaultFromActionSelectors();
    }

    function getBucketSizes(numTables, numRows ) {
        // Each element in bucketsizes represents the number of rows in a table
        var bucketSizes = [];
        var tableSize = Math.floor(numRows / numTables);
        for (var i = 0; i < numTables; i++) {
            bucketSizes[i] = tableSize;
        }

        // Distribute remaining rows after distributing equally
        var remainder = numRows - tableSize * numTables;
        var i = 0;
        while (remainder--) {
            bucketSizes[i]++;
            i++;
        }

        return bucketSizes;
    }

    function createTable(data) {
        var controlBox = document.createElement("table");
        controlBox.classList.add("controlBox");
        var controlBoxBody = document.createElement("tbody");
        controlBoxBody.classList.add("controlBoxBody");
        controlBox.appendChild(controlBoxBody);
        
        var contentRepeater = new WinJS.UI.Repeater(controlBoxBody, {
            data: data,
            template: ControlBox.controlBoxRowTemplate
        });
        return controlBox;
    }

    //To get behavior where selecting an action invokes the action but leaves the selector empty
    //e.g. selecting EnsureVisble
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