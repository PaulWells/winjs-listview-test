﻿(function () {
    "use strict";
    function toggleOrientation() {
        var listViewControl = document.querySelector(".listView").winControl;
        listViewControl.layout.orientation = (listViewControl.layout.orientation === WinJS.UI.Orientation.horizontal ? WinJS.UI.Orientation.vertical : WinJS.UI.Orientation.horizontal);
    }

    function selectLayout() {
        var listViewControl = document.querySelector(".listView").winControl;
        var selector = document.querySelector(".selectLayout");
        var layout = selector.options[selector.selectedIndex].value;

        if (layout === "grid") {
            listViewControl.layout = new WinJS.UI.GridLayout;
        } else {
            listViewControl.layout = new WinJS.UI.ListLayout;
        }
    }

    function groupItems(){
        var listViewControl = document.querySelector(".listView").winControl;
        var groupItemsCheckbox = document.querySelector(".groupItemsCheckBox");
        var reorderableCheckbox = document.querySelector(".itemsReorderableCheckBox");
        var reorderableGroup = document.querySelector(".itemsReorderable");
        var selectHeaderPosition = document.querySelector(".selectHeaderPosition");

        if (groupItemsCheckbox.checked) {
            listViewControl.groupDataSource = Data.createGroupedData().groups.dataSource;
            listViewControl.groupHeaderTemplate = Templates.textHeaderTemplatingFunction;
            listViewControl.layout.groupHeaderPosition = WinJS.UI.HeaderPosition["top"];
            reorderableCheckbox.checked = false;
            reorderableGroup.hidden = true;
            selectHeaderPosition.hidden = false;
        } else {
            listViewControl.groupDataSource = null;
            listViewControl.layout.groupHeaderPosition = null;
            listViewControl.groupHeaderTemplate = null;
            reorderableGroup.hidden = false;
            selectHeaderPosition.hidden = true;
        }
    }

    function selectHeaderPosition() {
        var selectHeaderPosition = document.querySelector(".selectHeaderPosition");
        var listViewControl = document.querySelector(".listView").winControl;

        if(selectHeaderPosition.options[selectHeaderPosition.selectedIndex].value === "top"){
            listViewControl.layout.groupHeaderPosition = WinJS.UI.HeaderPosition["top"];
        } else {
            listViewControl.layout.groupHeaderPosition = WinJS.UI.HeaderPosition["left"];
        }
    }


   function toggleItemsReorderable() {
        var listViewControl = document.querySelector(".listView").winControl;
        var checkbox = document.querySelector(".itemsReorderableCheckBox");

        listViewControl.itemsReorderable = checkbox.checked;
   }

   function selectTapBehaviour() {
       var listViewControl = document.querySelector(".listView").winControl;
       var tapBehaviorSelector = document.querySelector(".selectTapBehavior");

       var tapBehavior = tapBehaviorSelector.options[tapBehaviorSelector.selectedIndex].value
       listViewControl.tapBehavior = WinJS.UI.TapBehavior[tapBehavior];
       
   }

   function selectSelectionMode() {
       var listViewControl = document.querySelector(".listView").winControl;
       var selectionModeSelector = document.querySelector(".selectSelectionMode");

       var selectionMode = selectionModeSelector.options[selectionModeSelector.selectedIndex].value
       listViewControl.selectionMode = WinJS.UI.SelectionMode[selectionMode];

   }

   function openTemplateOptions() {
       var templateButton = document.querySelector(".changeTemplateButton");
       document.querySelector(".templateFlyout").winControl.show(templateButton);
   }

   function changeTemplate() {
       
       var listViewControl = document.querySelector(".listView").winControl;

       var radioButtons =  document.getElementsByClassName("templateRadioButton");

       for (var i = 0; i < radioButtons.length; i++) {
           var element = radioButtons.item(i);
           if (!element.checked) {
               continue;
           }

           switch (element.value) {
               case "textWithImage":
                   listViewControl.itemTemplate = Templates.textWithImageTemplatingFunction;
                   break;
               case "image":
                   listViewControl.itemTemplate = Templates.imageTemplatingFunction;
                   break;
               case "inline":
                   listViewControl.itemTemplate = document.querySelector(".listIconTextTemplate");
                   break;
           }

           var flyout = document.querySelector(".templateFlyout").winControl;
           flyout.hide();
           break;
       }
   }

    // Public interface.
    WinJS.Namespace.define("Config", {

        toggleOrientation: toggleOrientation,
        selectLayout: selectLayout,
        itemsReorderable: toggleItemsReorderable,
        groupItems: groupItems,
        selectHeaderPosition: selectHeaderPosition,
        selectTapBehavior: selectTapBehaviour,
        selectSelectionMode: selectSelectionMode,
        openTemplateOptions: openTemplateOptions,
        changeTemplate: changeTemplate
    });
})();