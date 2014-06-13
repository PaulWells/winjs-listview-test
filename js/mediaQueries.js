(function () {

    var portraitMQ = window.matchMedia("(max-width: 768px) and (min-height: 800px)");

    function registerLaptop() {
        var laptopMQ = window.matchMedia("(max-width: 1366px)");
        var laptopMQHandler = function () {
            var docs = document.querySelector(".interactiveInfoSection");
            if (laptopMQ.matches) {
                //smaller than laptop size
                var button = document.querySelector(".listViewDocumentationToggle");
                Utility.setInnerText(button,"Documentation");
                button.style.display = "block";
                docs.style.display = "none";
            } else {
                //larger than laptop size
                if (Utility.getInnerText(document.querySelector(".listViewDocumentationToggle")) === "Documentation") {
                    docs.style.display = "block";
                    WinJS.UI.Animation.enterContent(docs, null);
                } else {
                    var listView = document.querySelector(".listViewSection");
                    listView.style.display = "block";
                    WinJS.UI.Animation.enterContent(listView, null);
                }
                document.querySelector(".listViewDocumentationToggle").style.display = "none";
            }
        }
        laptopMQ.addListener(laptopMQHandler);
        laptopMQHandler();
    }


    function registerQueries() {
        registerLaptop();
    }


    WinJS.Namespace.define("MediaQueries", {
        registerQueries: registerQueries,
        portraitMQ: portraitMQ
    })

})();