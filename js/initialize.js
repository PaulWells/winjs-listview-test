(function () {

    function initializeListView() {
        var listView = document.querySelector(".listView").winControl;
        listView.itemTemplate = Templates.textWithImageTemplate;
        listView.addEventListener("groupheaderinvoked", Config.ungroupItems, false);
    }

    function createOptionMenu(){
        var optionsMenu = document.querySelector(".optionMenu");
        var data = new WinJS.Binding.List(Data.createMenuOptionData());
        var contentRepeater = new WinJS.UI.Repeater(optionsMenu, {
            data: data,
            template: Templates.createMenuOptionTemplate
        });
    }



    WinJS.Namespace.define("Init", {
        initializeListView: initializeListView,
        createOptionMenu: createOptionMenu
    });
})();