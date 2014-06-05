(function () {

    function controlBoxRowTemplate(item) {

        var row = document.createElement("tr");
        row.className = "controlBoxRow";

        var label = document.createElement("td");
        label.classList.add("controlBoxLabel");
        label.innerText = item.name;
        row.appendChild(label);

        var value = document.createElement("td");
        value.classList.add("controlBoxValue");

        var valueSelector = document.createElement("select");
        valueSelector.classList.add("controlBoxSelector");
        if (item.isAction) {
            valueSelector.classList.add("controlBoxActionSelector");
        }
        var options = item.subOptions
        for (var i = 0; i < options.length; i++) {
            var option = document.createElement("option");
            option.text = options[i].name;
            option.itemData = item.subOptions[i];
            valueSelector.add(option);
        }

        value.appendChild(valueSelector);
        row.appendChild(value);


        valueSelector.addEventListener("change", function () {
            changeListener(event, this, item.isAction);
        });

        if (item.isAction) {
            valueSelector.selectedIndex = -1;
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

    WinJS.Namespace.define("ControlBox", {
        controlBoxRowTemplate: controlBoxRowTemplate
    });

})();