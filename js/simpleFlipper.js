(function () {
    "use strict";

    // Controls logic for displaying ListView and Documentation together
    // when the screen is large or one at a time if the screen is small
    var SimpleFlipper = WinJS.Class.define(
        function () {
            this._toggle = document.querySelector(".listViewDocumentationToggle");
            this._listView = document.querySelector(".listViewSection");
            this._docs = document.querySelector(".interactiveInfoSection");
            this._prevMode = null;
            this._mode = SimpleFlipper.DisplayMode.UNINTIIALIZED;
            this._listViewText = "ListView";
            this._docsText = "Documentation";
            var _mediaQuery = "(max-width: 1366px)";
            this._docs.style.display = "none";
            this._toggle.style.display = "none";
            this._toggle.addEventListener("click", this.flip.bind(this));

            var expansionMediaQuery = window.matchMedia(_mediaQuery);
            var expansionMQHandler = function () {
                // If we're thinner than threshold width use flipMode.
                // Otherwise, show all controls
                if (expansionMediaQuery.matches) {
                    this.enterFlipMode();
                } else {
                    this.showAll();
                }
            }.bind(this);

            expansionMediaQuery.addListener(expansionMQHandler);
            expansionMQHandler();
        },
        {
            enterFlipMode: function () {
                this._toggle.style.display = "block";

                if (this._mode !== SimpleFlipper.DisplayMode.BOTH && this._mode !== SimpleFlipper.DisplayMode.UNINTIIALIZED) {
                    return;
                }

                if (this._prevMode) {
                    this._mode = this._prevMode;
                    this._prevMode = null;
                   
                } else {
                    this._mode = SimpleFlipper.DisplayMode.LISTVIEW;
                    this._prevMode = SimpleFlipper.DisplayMode.DOCS;
                }

                switch (this._mode) {
                    case SimpleFlipper.DisplayMode.LISTVIEW:
                        this._docs.style.display = "none";
                        break;
                    case SimpleFlipper.DisplayMode.DOCS:
                        this._listView.style.display = "none";
                        break;
                }
            },

            flip: function () {
                if (this._mode === SimpleFlipper.DisplayMode.BOTH) {
                    return;
                }
                switch (this._mode) {
                    case SimpleFlipper.DisplayMode.LISTVIEW:
                        this._flipToDocs();
                        break;
                    case SimpleFlipper.DisplayMode.DOCS:
                        this._flipToListView();
                        break;
                }
            },

            showAll: function () {
                if (this._mode === SimpleFlipper.DisplayMode.BOTH) {
                    return;
                }

                switch (this._mode) {
                    case SimpleFlipper.DisplayMode.LISTVIEW:
                       this._showDocs();
                        break;
                    case SimpleFlipper.DisplayMode.DOCS:
                        this._showListView();
                        break;
                    case SimpleFlipper.DisplayMode.UNINTIIALIZED:
                        this._showDocs();
                        this._showListView();
                        break;
                }

                this._toggle.style.display = "none";
                if (this._mode === SimpleFlipper.DisplayMode.UNINTIIALIZED) {
                    this._prevMode = SimpleFlipper.DisplayMode.LISTVIEW;
                } else {
                    this._prevMode = this._mode;
                }
                this._mode = SimpleFlipper.DisplayMode.BOTH;
            },

            _flipToDocs: function () {
                WinJS.UI.Animation.exitContent(this._toggle, null).done(function () {
                    WinJS.UI.Animation.enterContent(this._toggle, null);
                }.bind(this));
                WinJS.UI.Animation.exitContent(this._listView, null).done(function () {
                    this._listView.style.display = "none";
                    this._docs.style.display = "block";
                    WinJS.UI.Animation.enterContent(this._docs, null);
                    this._toggle.textContent = this._listViewText;
                }.bind(this));
                this._mode = SimpleFlipper.DisplayMode.DOCS;
            },

            _flipToListView: function () {
                WinJS.UI.Animation.exitContent(this._toggle, null).done(function () {
                    WinJS.UI.Animation.enterContent(this._toggle, null);
                }.bind(this));
                WinJS.UI.Animation.exitContent(this._docs, null).done(function () {
                    this._docs.style.display = "none";
                    this._listView.style.display = "block";
                    this._listView.querySelector(".listView").winControl.forceLayout();
                    WinJS.UI.Animation.enterContent(this._listView, null);
                    this._toggle.textContent = this._docsText;
                }.bind(this));
                this._mode = SimpleFlipper.DisplayMode.LISTVIEW;
            },

            _showDocs: function () {
                this._docs.style.display = "block";
                WinJS.UI.Animation.enterContent(this._docs, null);
            },

            _showListView: function () {
                this._listView.style.display = "block";
                WinJS.UI.Animation.enterContent(this._listView, null);
            }
        },
        {
            DisplayMode:{
                BOTH: 0,
                LISTVIEW: 1,
                DOCS: 2,
                UNINTIIALIZED: 3
            },
        }
    )

    var flipper = null;

    var initFlipper = function(){
        ExpandingFlipper.flipper = ExpandingFlipper.flipper || new SimpleFlipper();
    }

    WinJS.Namespace.define("ExpandingFlipper", {
        flipper: flipper,
        initFlipper: initFlipper
    });

})();