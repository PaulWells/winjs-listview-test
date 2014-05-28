(function () {
    "use strict";
   
   function itemsReorderable(reorderable) {
       var listViewControl = document.querySelector(".listView").winControl;
       listViewControl.itemsReorderable = reorderable;
   }

   function tapBehavior(behavior) {
       var listViewControl = document.querySelector(".listView").winControl;
       listViewControl.tapBehavior = behavior;
       
   }

   function selectHeaderTapBehavior(behavior) {
       var listViewControl = document.querySelector(".listView").winControl;
       listViewControl.groupHeaderTapBehavior = behavior;
   }

   function selectionMode(mode) {
       var listViewControl = document.querySelector(".listView").winControl;
       listViewControl.selectionMode = mode;
   }

   function changeItemTemplate(templateName) {
       
       var listViewControl = document.querySelector(".listView").winControl;

        switch (templateName) {
            case "textWithImage":
                listViewControl.itemTemplate = Templates.textWithImageTemplate;
                break;
            case "image":
                listViewControl.itemTemplate = Templates.imageTemplate;
                break;
            case "inline":
                listViewControl.itemTemplate = document.querySelector(".listIconTextTemplate");
                break;
            case "interactive":
                listViewControl.itemTemplate = Templates.interactiveTemplate;
                break;
        }

   }

   function changeHeaderTemplate(templateType) {
        var listViewControl = document.querySelector(".listView").winControl;

        switch (templateType) {
            case "text":
                listViewControl.groupHeaderTemplate = Templates.textHeaderTemplate;
                break;
            case "textWithImage":
                listViewControl.groupHeaderTemplate = Templates.textWithImageHeaderTemplate;
                break;
            case "button":
                listViewControl.groupHeaderTemplate = Templates.buttonHeaderTemplate;
                break;
            case "interactive":
                listViewControl.groupHeaderTemplate = Templates.interactiveHeaderTemplate;
        }

   }

    // Public interface.
    WinJS.Namespace.define("Config", {

        itemsReorderable: itemsReorderable,
        tapBehavior: tapBehavior,
        selectionMode: selectionMode,
        changeItemTemplate: changeItemTemplate,
        changeHeaderTemplate: changeHeaderTemplate,
        selectHeaderTapBehavior: selectHeaderTapBehavior
    });
})();