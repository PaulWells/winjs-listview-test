(function () {

    var GitHubIssueLink = WinJS.Class.define(function () {

        var _link = document.querySelector(".gitHubIssueOpener").querySelector("a");
        var _config = {};

        /*retrieve ListView Configuration*/
        var cb = document.querySelector(".controlBoxArea");
        var tables = cb.querySelectorAll(".controlBox");
        for (var i = 0; i < tables.length ; i++) {
            var rows = tables[i].rows;
            for (var j = 0; j < rows.length; j++) {
                var label = rows[j].querySelector(".controlBoxLabel").textContent;
                var selector = rows[j].querySelector(".controlBoxSelector");
                if (selector.selectedIndex >= 0) {
                    var value = selector.options[selector.selectedIndex].textContent;
                    _config[label] = value;
                }
            }
        }

        function getOpenIssueHref() {
            return "https://github.com/winjs/winjs/issues/new?body=Feature:+" + encodeURIComponent("ListView") +
                "%0AEnvironment:+" + encodeURIComponent(navigator.userAgent) + "%0ASource:+http://try.buildwinjs.com%20Play%20With%20ListView%0A" + encodeURIComponent(configToString()) + "&title=" + encodeURIComponent("ListView") + ":%20%3Ctitle%20here%3E";
        }

        _link.href = getOpenIssueHref();

        function configToString() {
            var url = "";
            for (var label in _config) {
                url = url + label + ": " + _config[label] + "\n";
            }

            return url;
        }

        this.update = function (label, value) {
            _config[label] = value;
            _link.href = getOpenIssueHref();
        }

    },
    {},
    {});

    var issueOpener = null;

    window.addEventListener("load", function () {
        GitHub.issueOpener = new GitHubIssueLink();
    }, false);

    WinJS.Namespace.define("GitHub", {
        issueOpener: issueOpener
    })

})();