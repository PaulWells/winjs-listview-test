(function () {
    "use strict";
   
   function itemsReorderable(reorderable) {
       ListView.listView.itemsReorderable = reorderable;
   }

   function tapBehavior(behavior) {
       ListView.listView.tapBehavior = behavior;
   }

   function selectHeaderTapBehavior(behavior) {
       ListView.listView.groupHeaderTapBehavior = behavior;
   }

   function selectionMode(mode) {
       ListView.listView.selectionMode = mode;
   }

   function changeItemTemplate(templateName) {
       
        switch (templateName) {
            case "textWithImage":
                ListView.listView.itemTemplate = Templates.textWithImageTemplate;
                break;
            case "image":
                ListView.listView.itemTemplate = Templates.imageTemplate;
                break;
            case "inline":
                ListView.listView.itemTemplate = document.querySelector(".listIconTextTemplate");
                break;
            case "interactive":
                ListView.listView.itemTemplate = Templates.interactiveTemplate;
                break;
       }

   }

   function changeHeaderTemplate(templateType) {

        switch (templateType) {
            case "text":
                ListView.listView.groupHeaderTemplate = Templates.textHeaderTemplate;
                break;
            case "textWithImage":
                ListView.listView.groupHeaderTemplate = Templates.textWithImageHeaderTemplate;
                break;
            case "button":
                ListView.listView.groupHeaderTemplate = Templates.buttonHeaderTemplate;
                break;
            case "interactive":
                ListView.listView.groupHeaderTemplate = Templates.interactiveHeaderTemplate;
        }

   }

   function swipeBehavior(behavior) {
       ListView.listView.swipeBehavior = behavior;
   }

   function itemsDraggable(draggable) {
       ListView.listView.itemsDraggable = draggable;
   }

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