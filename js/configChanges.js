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

   function selectHeaderTapBehavior() {
       var listViewControl = document.querySelector(".listView").winControl;
       var tapBehavior = this.options[this.selectedIndex].value;
       listViewControl.groupHeaderTapBehavior = WinJS.UI.GroupHeaderTapBehavior[tapBehavior];
   }

   function selectionMode(mode) {
       var listViewControl = document.querySelector(".listView").winControl;
       listViewControl.selectionMode = mode;
   }

   function openTemplateOptions() {
       document.querySelector(".templateFlyout").winControl.show(this);
   }

   function openHeaderTemplateOption() {
       document.querySelector(".headerTemplateFlyout").winControl.show(this);
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

   function changeHeaderTemplate() {
       var listViewControl = document.querySelector(".listView").winControl;
       var radioButtons = document.getElementsByClassName("headerTemplateRadioButton");

       for (var i = 0; i < radioButtons.length; i++) {
           var element = radioButtons.item(i);
           if (!element.checked) {
               continue;
           }

           switch (element.value) {
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

           var flyout = document.querySelector(".headerTemplateFlyout").winControl;
           flyout.hide();
           break;
       }
   }

    // Public interface.
    WinJS.Namespace.define("Config", {

        itemsReorderable: itemsReorderable,
        tapBehavior: tapBehavior,
        selectionMode: selectionMode,
        openTemplateOptions: openTemplateOptions,
        openHeaderTemplateOptions: openHeaderTemplateOption,
        changeItemTemplate: changeItemTemplate,
        changeHeaderTemplate: changeHeaderTemplate,
        selectHeaderTapBehavior: selectHeaderTapBehavior
    });
})();