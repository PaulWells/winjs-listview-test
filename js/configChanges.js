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
        var listView = document.querySelector(".listView").winControl;

        switch (templateType) {
            case "text":
                listView.groupHeaderTemplate = Templates.textHeaderTemplate;
                break;
            case "textWithImage":
                listView.groupHeaderTemplate = Templates.textWithImageHeaderTemplate;
                break;
            case "button":
                listView.groupHeaderTemplate = Templates.buttonHeaderTemplate;
                break;
            case "interactive":
                listView.groupHeaderTemplate = Templates.interactiveHeaderTemplate;
        }

   }

   function itemsDraggable(draggable) {
       var listView = document.querySelector(".listView").winControl;
       listView.itemsDraggable = draggable;
   }

    // Public interface.
    WinJS.Namespace.define("Config", {

        itemsReorderable: itemsReorderable,
        tapBehavior: tapBehavior,
        selectionMode: selectionMode,
        changeItemTemplate: changeItemTemplate,
        changeHeaderTemplate: changeHeaderTemplate,
        selectHeaderTapBehavior: selectHeaderTapBehavior,
        itemsDraggable: itemsDraggable
    });
})();