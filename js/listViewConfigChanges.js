(function () {
    "use strict";
   
   function itemsReorderable(reorderable) {
       var listView = document.querySelector(".listView").winControl;
       listView.itemsReorderable = reorderable;
   }

   function tapBehavior(behavior) {
       var listView = document.querySelector(".listView").winControl;
       listView.tapBehavior = behavior;
       
   }

   function selectHeaderTapBehavior(behavior) {
       var listView = document.querySelector(".listView").winControl;
       listView.groupHeaderTapBehavior = behavior;
   }

   function selectionMode(mode) {
       var listView = document.querySelector(".listView").winControl;
       listView.selectionMode = mode;
   }

   function changeItemTemplate(templateName) {
       
       var listView = document.querySelector(".listView").winControl;

        switch (templateName) {
            case "textWithImage":
                listView.itemTemplate = Templates.textWithImageTemplate;
                break;
            case "image":
                listView.itemTemplate = Templates.imageTemplate;
                break;
            case "inline":
                listView.itemTemplate = document.querySelector(".listIconTextTemplate");
                break;
            case "interactive":
                listView.itemTemplate = Templates.interactiveTemplate;
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

   function swipeBehavior(behavior) {
       var listView = document.querySelector(".listView").winControl;
       listView.swipeBehavior = behavior;
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
        itemsDraggable: itemsDraggable,
        swipeBehavior: swipeBehavior
    });
})();