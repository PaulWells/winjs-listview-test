(function () {

    function registerLaptop() {
        var laptopMQ = window.matchMedia("(max-width: 1366px)");
        var laptopMQHandler = function () {
            var docs = document.querySelector(".interactiveInfoSection");
            if (laptopMQ.matches) {
                //smaller than laptop size
                //docs.style.opacity = 0;
                //docs.elem.style.opacity = 100;
                document.querySelector(".listViewDocumentationToggle").style.display = "block";
                docs.style.display = "none";
            } else {
                //larger than laptop size
                document.querySelector(".interactiveInfoSection").style.display = "block";
                document.querySelector(".listViewDocumentationToggle").style.display = "none";
                docs.style.display = "block";
            }
        }
        laptopMQ.addListener(laptopMQHandler);
        laptopMQHandler();
    }

    WinJS.Namespace.define("MediaQueries", {
        registerLaptop: registerLaptop
    })

})();