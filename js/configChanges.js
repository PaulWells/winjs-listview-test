(function () {
    "use strict";
   


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

        itemsReorderable: toggleItemsReorderable,
        selectTapBehavior: selectTapBehaviour,
        selectSelectionMode: selectSelectionMode,
        openTemplateOptions: openTemplateOptions,
        changeTemplate: changeTemplate
    });
})();