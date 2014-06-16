(function () {
    "use strict";

    /*Controls logic for displaying ListView and Documentation either together
     when the screen is large enough or one at a time if the screen is smaller*/
    var SimpleFlipper = WinJS.Class.define(
        function () {
            var _toggle = document.querySelector(".listViewDocumentationToggle");
            var _listView = document.querySelector(".listViewSection");
            var _docs = document.querySelector(".interactiveInfoSection");
            var _prevMode = null;
            var _mode = SimpleFlipper.DisplayMode.BOTH;
            var _listViewText = "ListView";
            var _docsText = "Documentation";
            var _mediaQuery = "(max-width: 1366px)";
            var _self = this;

            _toggle.style.display = "none";


            this.flip = function () {
                if (_mode === SimpleFlipper.DisplayMode.BOTH) {
                    return;
                }
                switch (_mode) {
                    case SimpleFlipper.DisplayMode.LISTVIEW:
                        showDocs();
                        break;
                    case SimpleFlipper.DisplayMode.DOCS:
                        showListView();
                        break;
                }
            }

            _toggle.addEventListener("click", _self.flip, false);


            var showListView = function () {
                WinJS.UI.Animation.exitContent(_toggle, null).done(function () {
                    WinJS.UI.Animation.enterContent(_toggle, null);
                })
                WinJS.UI.Animation.exitContent(_docs, null).done(function () {
                    _docs.style.display = "none";
                    _listView.style.display = "block";
                    _listView.querySelector(".listView").winControl.forceLayout();
                    WinJS.UI.Animation.enterContent(_listView, null);
                    _toggle.textContent = _docsText;
                });
                _mode = SimpleFlipper.DisplayMode.LISTVIEW;
            }

            var showDocs = function () {
                WinJS.UI.Animation.exitContent(_toggle, null).done(function () {
                    WinJS.UI.Animation.enterContent(_toggle, null);
                })
                WinJS.UI.Animation.exitContent(_listView, null).done(function () {
                    _listView.style.display = "none";
                    _docs.style.display = "block";
                    WinJS.UI.Animation.enterContent(_docs, null);
                    _toggle.textContent = _listViewText;
                });
                _mode = SimpleFlipper.DisplayMode.DOCS;
            }

            this.enterFlipMode = function () {
                _toggle.style.display = "block";

                if (_mode !== SimpleFlipper.DisplayMode.BOTH) {
                    return;
                }

                if (_prevMode) {
                    _mode = _prevMode;
                    _prevMode = null;
                   
                } else {
                    _mode = SimpleFlipper.DisplayMode.LISTVIEW;
                }

                switch (_mode) {
                    case SimpleFlipper.DisplayMode.LISTVIEW:
                        _docs.style.display = "none";
                        break;
                    case SimpleFlipper.DisplayMode.DOCS:
                        _listView.style.display = "none";
                        break;
                }
            }

            this.showAll = function () {
                if (_mode === SimpleFlipper.DisplayMode.BOTH) {
                    return;
                }

                switch (_mode) {
                    case SimpleFlipper.DisplayMode.LISTVIEW:
                        _docs.style.display = "block";
                        WinJS.UI.Animation.enterContent(_docs, null);
                        break;
                    case SimpleFlipper.DisplayMode.DOCS:
                        _listView.style.display = "block";
                        WinJS.UI.Animation.enterContent(_listView, null);
                        break;
                }
                _toggle.style.display = "none";
                _prevMode = _mode;
                _mode = SimpleFlipper.DisplayMode.BOTH;
            }

           

            

            var expansionMediaQuery = window.matchMedia(_mediaQuery);
            var expansionMQHandler = function () {
                if (expansionMediaQuery.matches) {
                    //smaller than laptop size
                    _self.enterFlipMode();
                } else {
                    //larger than laptop size
                    _self.showAll();
                }
            }

            expansionMediaQuery.addListener(expansionMQHandler);
            expansionMQHandler();

            

        },
        {},
        {
            DisplayMode:{
                BOTH: 0,
                LISTVIEW: 1,
                DOCS: 2
            },
        }
    )

    var flipper = null;
    window.addEventListener("load", function () {
        ExpandingFlipper.flipper = new SimpleFlipper();
    }, false);

    WinJS.Namespace.define("ExpandingFlipper", {
        flipper: flipper
    });

})();