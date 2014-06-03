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
        var options = item.subOptions
        for (var i = 0; i < options.length; i++) {
            var option = document.createElement("option");
            var subItem = item.subOptions[i];
            option.text = options[i].name;
            option.eventMethod = subItem.eventMethod;
            option.info = subItem.info;
            valueSelector.add(option);
        }

        value.appendChild(valueSelector);
        row.appendChild(value);

        valueSelector.addEventListener("change", function () {
            changeListener(event, this);
        }, false);

        return row;

    }

    function changeListener(event, selector) {

        if (selector.selectedIndex == -1) {
            return;
        }

        var option = selector.options[selector.selectedIndex];
        option.eventMethod();
        Documentation.updateInfo(option.info);
    }

    WinJS.Namespace.define("ControlBox", {
        controlBoxRowTemplate: controlBoxRowTemplate
    });

})();