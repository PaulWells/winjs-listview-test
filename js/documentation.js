(function () {

    function updateInfo(info) {
        document.querySelector(".selectionDescription").innerText = info.description;
        document.querySelector(".selectionSampleCode").innerText = info.code;
        document.querySelector(".selectionDocumentation").innerText = info.link;
    }

    WinJS.Namespace.define("Documentation", {
      updateInfo: updateInfo
    });

})();