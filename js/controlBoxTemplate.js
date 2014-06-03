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
            option.text = options[i].name;
            valueSelector.add(option);
        }

        value.appendChild(valueSelector);
        row.appendChild(value);

        return row;

    }

    WinJS.Namespace.define("ControlBox", {
        controlBoxRowTemplate: controlBoxRowTemplate
    });

})();