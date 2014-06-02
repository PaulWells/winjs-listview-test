(function () {

    function createMenuOptionTemplate(item) {
        var section = document.createElement("div");
        section.className = "optionMenuSection";

        var body = document.createElement("div");
        body.classList.add("optionTab");
        body.innerText = item.name;
        section.appendChild(body);

        var template = addSubOptions(section, item.subOptions);
        template.addEventListener("click", Menu.menuItemClickEvent, false);

        return template;

    }

    function addSubOptions(section, subOptions) {

        var elem = document.createElement("div");
        elem.className = "menuSubOptions";
        elem.hidden = true;
        var data = new WinJS.Binding.List(subOptions);
        //use another repeater for the subelements inside each option section
        var subOptionRepeater = new WinJS.UI.Repeater(elem, {
            data: data,
            template: createSubOptionTemplate
        });
        section.appendChild(elem);
        return section;
    }

    function createSubOptionTemplate(item) {

        var template = document.createElement("div");
        template.className = "optionSubTab";
        template.innerText = item.name;
        template.classList.add(item.className);

        template.addEventListener("click", function (event) {
            Menu.menuSubItemClickEvent(event, item, this);
        }, false);


        return template;
    }

    WinJS.Namespace.define("Menu", {
        createMenuOptionTemplate: createMenuOptionTemplate,
        createSubOptionTemplate: createSubOptionTemplate
    })

})();