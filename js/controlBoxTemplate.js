(function () {
    "use strict";
    function controlBoxRowTemplate(item) {

        var row = document.createElement("tr");
        row.className = "controlBoxRow";

        var label = document.createElement("td");
        label.classList.add("controlBoxLabel");
        if (item.name.length > 22) {
            label.classList.add("largeLabel");
        }
        label.innerText = item.name;
        row.appendChild(label);

        var value = document.createElement("td");
        value.classList.add("controlBoxValue");

        var selector = document.createElement("select");
        selector.classList.add("controlBoxSelector");
        if (item.isAction) {
            selector.classList.add("controlBoxActionSelector");
        }
        var options = item.subOptions;
        for (var i = 0; i < options.length; i++) {
            var option = document.createElement("option");
            option.text = options[i].name;
            
            option.itemData = item.subOptions[i];
            selector.add(option);
        }
        adjustTextSize(selector);

        value.appendChild(selector);
        row.appendChild(value);


        selector.addEventListener("change", function () {
            changeListener(event, this, item.isAction);
        });

        selector.addEventListener("click", function () {
            clickListener(event, this);
        })

        if (item.isAction) {
            selector.selectedIndex = -1;
        }

        return row;

    }

    function changeListener(event, selector, isAction) {

        if (selector.selectedIndex == -1) {
            return;
        }

        var option = selector.options[selector.selectedIndex];
        var item = option.itemData;
        item.eventMethod();
        Documentation.updateInfo(item.info);

        if (isAction) {
            selector.selectedIndex = -1;
            item.notify();
        }
    }

    function clickListener(event, selector) {
        if (selector.selectedIndex == -1) {
            return;
        }
        var option = selector.options[selector.selectedIndex];
        adjustTextSize(selector,option);
        var item = option.itemData;
        Documentation.updateInfo(item.info);
    }

    function adjustTextSize(selector, option) {

        option = option || selector.options[0];

        var text = option.innerText;
        
        if (text.length > 12) {
            selector.classList.add("largeSelector");
        } else {
            selector.classList.remove("largeSelector");
        }
    }

    WinJS.Namespace.define("ControlBox", {
        controlBoxRowTemplate: controlBoxRowTemplate
    });

})();