(function () {
    "use strict";
    var horizontalOrientation = {
        description: "Sets the orientation of the ListView to horizontal.  This property applies to many WinJS controls.",
        code: "//first get a reference to your ListView\n" +
              "var listView = document.querySelector(\".listView\").winControl;  \n" +
              "listView.layout.orientation = WinJS.UI.Orientation.horizontal;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301804.aspx",
        title: "Horizontal Orientation"
    }

    var verticalOrientation = {
        description: "Sets the orientation of the ListView to vertical.  This property applies to many WinJS controls.",
        code: "//first get a reference to your ListView\n" +
              "var listView = document.querySelector(\".listView\").winControl;  \n" +
              "listView.layout.orientation = WinJS.UI.Orientation.vertical;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301804.aspx",
        title: "Vertical Orientation"
    }

    var gridLayout = {
        description: "Sets the layout of the ListView to a GridLayout in which items are arranged in a horizontal grid.",
        code: "//first get a reference to your ListView\n" +
              "var listView = document.querySelector(\".listView\").winControl;  \n" + 
              "listView.layout = new WinJS.UI.GridLayout();",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211751.aspx",
        title: "Grid Layout",
    }

    var listLayout = {
        description: "Sets the layout of the ListView to a ListLayout in which items are arranged in a vertical list.",
        code: "//first get a reference to your ListView\n" + 
              "var listView = document.querySelector(\".listView\").winControl;\n" +
              "listView.layout = new WinJS.UI.ListLayout();",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211792.aspx",
        title: "List Layout"
    }

    var itemTemplateTextWithImage = {
        description: "Gets or sets the WinJS.Binding.Template or templating function that creates the Document Object Model (DOM) elements for each item in the itemDataSource. Each Item can contain multiple elements, but it must have a single root element.",
        code: "function createTemplate(item){\n" +
              "    //create template element\n"+
              "    var template = document.createElement(\"div\"); \n" +
              "    //add image\n" +
              "    var image = document.createElement(\"img\"); \n" +
              "    image.src = item.picture;\n" +
              "    template.appendChild(image);\n" +
              "    //add element to hold text elements\n" +
              "    var textArea = document.createElement(\"div\");\n" +
              "    var template.appendChild(textArea);\n" +
              "    //add title and description\n" +
              "    var title = document.createElement(\"h4\");\n" +
              "    title.innerText = item.title;\n" +
              "    textArea.appendChild(title); \n" +
              "    var description = document.createElement(\"h6\"); \n" +
              "    description.innerText = item.description;\n" +
              "    template.appendChild(description);\n" +
              "    return template;\n" +
              "}\n\n" +
              "function textWithImageTemplate(itemPromise){\n" +
              "    return itemPromise.then(function (item) {\n " +
              "        return createTemplate(item);\n" +
              "    });\n" +
              "}\n\n" +
              "var listView = document.querySelector(\".listView\").winControl;  \n" +
              "listView.itemTemplate = textWithImageTemplate;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700705.aspx",
        title: "Item Template"
    }
    var itemTemplateImage = {
        description: "Gets or sets the WinJS.Binding.Template or templating function that creates the Document Object Model (DOM) elements for each item in the itemDataSource. Each Item can contain multiple elements, but it must have a single root element.",
        code: "function createTemplate(item){\n" +
              "    //create template element\n" +
              "    var template = document.createElement(\"div\"); \n" +
              "    //add image\n" +
              "    var image = document.createElement(\"img\"); \n" +
              "    image.src = item.picture;\n" +
              "    template.appendChild(image);\n" +
              "    return template;\n" +
              "}\n\n" +
              "function imageTemplate(itemPromise){\n" +
              "    return itemPromise.then(function (item) {\n " +
              "        return createTemplate(item);\n" +
              "    });\n" +
              "}\n\n" +
              "var listView = document.querySelector(\".listView\").winControl;  \n" +
              "listView.itemTemplate = imageTemplate;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700705.aspx",
        title: "Item Template"
    }
    var itemTemplateInline = {
        description: "Gets or sets the WinJS.Binding.Template or templating function that creates the Document Object Model (DOM) elements for each item in the itemDataSource. Each Item can contain multiple elements, but it must have a single root element.",
        code: "<!--simple inline template for ListView-->\n" +
              "<div class=\"listIconTextTemplate\" \n     data-win-control=\"WinJS.Binding.Template\" \n     style=\"display: none\">\n" +
              "    <img src=\"#\" data-win-bind=\"src: picture\" />\n" +
              "    <div class=\"listIconTextItem-Detail\">\n" +
              "        <h4 data-win-bind=\"textContent: title\"></h4>\n" +
              "        <h6 data-win-bind=\"textContent: text\"></h6>\n" +
              "    </div>\n" +
              "</div>\n\n" +
              "<div class=\"win-selectionstylefilled listView\n" +
              "     data-win-control=\"WinJS.UI.ListView\n" +
              "     data-win-options=\"{\n" +
              "         itemDataSource: ListView.data.dataSource,\n" +
              "         layout: {type: WinJS.UI.ListLayout}\n" +
              "     }\">\n"+
              "</div>\n",
             
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700705.aspx",
        title: "Item Template"
    }
    var itemTemplateInteractive = {
        description: "Gets or sets the WinJS.Binding.Template or templating function that creates the Document Object Model (DOM) elements for each item in the itemDataSource. Each Item can contain multiple elements, but it must have a single root element.",
        code: "function createTemplate(item){\n" +
              "    //create template element\n" +
              "    var template = document.createElement(\"div\"); \n" +
              "    //add image\n" +
              "    var image = document.createElement(\"img\"); \n" +
              "    image.src = item.picture;\n" +
              "    template.appendChild(image);\n" +
              "    //add element to hold text elements\n" +
              "    var textArea = document.createElement(\"div\");\n" +
              "    var template.appendChild(textArea);\n" +
              "    //add title and description\n" +
              "    var title = document.createElement(\"h4\");\n" +
              "    title.innerText = item.title;\n" +
              "    textArea.appendChild(title); \n" +
              "    var description = document.createElement(\"h6\"); \n" +
              "    description.innerText = item.description;\n" +
              "    template.appendChild(description);\n" +
              "    //add WinJS Rating control\n"+
              "    var ratingElement = document.createElement(\"div\");\n"+
              "    template.style.height = \"120px\";\n" +
              "    template.appendChild(ratingElement);\n" +
              "    new WinJS.UI.Rating(ratingElement, {\n" +
              "        averageRating: 3.4\n" +
              "    });\n" +
              "    return template;\n" +
              "}\n\n" +
              "function textWithImageTemplate(itemPromise){\n" +
              "    return itemPromise.then(function (item) {\n " +
              "        return createTemplate(item);\n" +
              "    });\n" +
              "}\n\n" +
              "var listView = document.querySelector(\".listView\").winControl;  \n" +
              "listView.itemTemplate = createTemplate;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700705.aspx",
        title: "Item Template"
    }

    var itemsReorderable = {
        description: "Gets or sets a value that specifies whether the ListView control's items can be reordered within itself by dragging and dropping.",
        code: "var listView = document.querySelector(\".listView\").winControl;\nlistView.itemsReorderable = true;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301810.aspx",
        title: "Items Reorderable"
    }

    var itemsNotReorderable = {
        description: "Gets or sets a value that specifies whether the ListView control's items can be reordered within itself by dragging and dropping.",
        code: "var listView = document.querySelector(\".listView\").winControl;\nlistView.itemsReorderable = false;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301810.aspx",
        title: "Items Reorderable"

    }

    var tapBehaviorNone = {
        description: "When an item is clicked or tapped the item is neither selected nor invoked.",
        code: "var listView = document.querySelector(\".listView\").winControl;\nlistView.tapBehavior = WinJS.UI.TapBehavior.none;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700733.aspx",
        title: "Tap Behavior: None"
    }

    var tapBehaviorDirectSelect = {
        description: "When an item is clicked or tapped the item is selected and invoked (the ListView's oniteminvoked event will fire).  If Selection Mode is set to None the item will not be selected.",
        code: "var listView = document.querySelector(\".listView\").winControl;\nlistView.tapBehavior = WinJS.UI.TapBehavior.directSelect;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700733.aspx",
        title: "Tap Behavior: Direct Select"
    }
    var tapBehaviorToggleSelect = {
        description: "When an item is clicked or tapped it is selected if it was not already selected and is deselected if it was already selected.  In either case it will be invoked (the ListView's oniteminvoked event will fire).  If Selection Mode is set to None the item will not be selected/unselected.",
        code: "var listView = document.querySelector(\".listView\").winControl;\nlistView.tapBehavior = WinJS.UI.TapBehavior.toggleSelect;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700733.aspx",
        title: "Tap Behavior Toggle Select"
    }
    var tapBehaviorInvoke = {
        description: "When an item is clicked or tapped it is invoked but not selected.  Invoked means that the ListView's oniteminvoked event will fire.",
        code: "var listView = document.querySelector(\".listView\").winControl;\nlistView.tapBehavior = WinJS.UI.TapBehavior.invokeOnly;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700733.aspx",
        title: "Tap Behavior Invoke"
    }

    var selectionModeNone = {
        description: "When an item is clicked or tapped it will not be selected regardless of the tap behavior",
        code: "var listView = document.querySelector(\".listView\").winControl;\nlistView.selectionMode = WinJS.UI.SelectionMode.none;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211851.aspx",
        title: "Selection Mode: None"
    }
    var selectionModeSingle = {
        description: "No more than one item in the ListView may be selected at a time",
        code: "var listView = document.querySelector(\".listView\").winControl;\nlistView.selectionMode = WinJS.UI.SelectionMode.single;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211851.aspx",
        title: "Selection Mode: Single"
    }
    var selectionModeMulti = {
        description: "More than one item in the ListView can be selected at the same time.  the tap behavior must be set to Toggle Select to select multiple items",
        code: "var listView = document.querySelector(\".listView\").winControl;\nlistView.selectionMode = WinJS.UI.SelectionMode.multi;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211851.aspx",
        title: "Selection Mode Multi"
    }

    var groupItemsYes = {
        description: "ListView sorts its items into groups when it's datasource is a grouped list projection.  As the projection changes, the ListView reacts to those changes and may also change.",
        code: "var listView = document.querySelector(\".listView\").winControl;\n" +
              "//arrayData is an array of the data you want to display\n"+
              "var list = WinJS.UI.Binding.List(arrayData);\n"+
              "var groupedList = list.createGrouped();\n"+
              "listView.itemDataSource = groupedList.dataSource;\n"+
              "listView.groupDataSource = groupedList.groups.dataSource;\n"+
              "//NOTE: you will also want to assign a group header template",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh465464.aspx",
        title: "Group Items"
    }

    var groupItemsNo = {
        description: "ListView sorts its items into groups when it's datasource is a grouped list projection.  As the projection changes, the ListView reacts to those changes and may also change.",
        code: "var listView = document.querySelector(\".listView\").winControl;\n" +
               "//arrayData is an array of the data you want to display\n" +
              "var list = WinJS.UI.Binding.List(arrayData);\n"+
              "listView.dataSource = list;\n"+
              "listView.groupDataSource = null;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh465464.aspx",
        title: "Group Items"
    }

    var groupHeaderTemplateText = {
        description: "Gets or sets the Template or function that creates the Document Object Model (DOM) elements for each group header in the groupDataSource. Each group header can contain multiple elements, but it must have a single root element.",
        code: "function createHeaderTemplate(item){\n" +
             "    //create template element\n" +
             "    var template = document.createElement(\"div\"); \n" +
             "    //add title\n" +
             "    var title = document.createElement(\"div\"); \n" +
             "    title.innerText = item.data.title;\n" +
             "    template.appendChild(title);\n" +
             "    return template;\n" +
             "}\n\n" +
             "function headerTemplate(itemPromise){\n" +
             "    return itemPromise.then(function (item) {\n " +
             "        return createHeaderTemplate(item);\n" +
             "    });\n" +
             "}\n\n" +
             "//listView is a ListView that's items are grouped\n"+
             "var listView = document.querySelector(\".listView\").winControl;  \n" +
             "listView.itemTemplate = headerTemplate;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700674.aspx",
        title: "Group Header Template"
    }
    var groupHeaderTemplateTextWithImage = {
        description: "Gets or sets the Template or function that creates the Document Object Model (DOM) elements for each group header in the groupDataSource. Each group header can contain multiple elements, but it must have a single root element.",
        code: "function createHeaderTemplate(item){\n" +
            "    //create template element\n" +
            "    var template = document.createElement(\"div\"); \n" +
            "    //add title\n" +
            "    var title = document.createElement(\"div\"); \n" +
            "    title.innerText = item.data.title;\n" +
            "    template.appendChild(title);\n" +
            "    //add image\n" +
            "    var image = document.createElement(\"img\");\n" +
            "    image.src = item.data.picture;\n" +
            "    template.appendChild(image);\n" +
            "    return template;\n" +
            "}\n\n" +
            "function headerTemplate(itemPromise){\n" +
            "    return itemPromise.then(function (item) {\n " +
            "        return createHeaderTemplate(item);\n" +
            "    });\n" +
            "}\n\n" +
            "//listView is a ListView that's items are grouped\n" +
            "var listView = document.querySelector(\".listView\").winControl;  \n" +
            "listView.itemTemplate = headerTemplate;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700674.aspx",
        title: "Group Header Template"
    }
    var groupHeaderTemplateButton = {
        description: "Gets or sets the Template or function that creates the Document Object Model (DOM) elements for each group header in the groupDataSource. Each group header can contain multiple elements, but it must have a single root element.",
        code: "function createHeaderTemplate(item){\n" +
             "    //create template element\n" +
             "    var template = document.createElement(\"div\"); \n" +
             "    //add title\n" +
             "    var title = document.createElement(\"div\"); \n" +
             "    title.innerText = item.data.title;\n" +
             "    template.appendChild(title);\n" +
             "    //add button\n" +
             "    var button = document.createElement(\"button\");\n" +
             "    button.innerText = \"Group \" + item.key;\n" +
             "    template.appendChild(button);\n" +
             "    return template;\n" +
             "}\n\n" +
             "function headerTemplate(itemPromise){\n" +
             "    return itemPromise.then(function (item) {\n " +
             "        return createHeaderTemplate(item);\n" +
             "    });\n" +
             "}\n\n" +
             "//listView is a ListView that's items are grouped\n" +
             "var listView = document.querySelector(\".listView\").winControl;  \n" +
             "listView.itemTemplate = headerTemplate;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700674.aspx",
        title: "Group Header Template"
    }
    var groupHeaderTemplateInteractive = {
        description: "Gets or sets the Template or function that creates the Document Object Model (DOM) elements for each group header in the groupDataSource. Each group header can contain multiple elements, but it must have a single root element.",
        code: "function createHeaderTemplate(item){\n" +
             "    //create template element\n" +
             "    var template = document.createElement(\"div\"); \n" +
             "    //add title\n" +
             "    var title = document.createElement(\"div\"); \n" +
             "    title.innerText = item.data.title;\n" +
             "    template.appendChild(title);\n" +
             "    //add WinJS Rating control\n" +
             "    var ratingElement = document.createElement(\"div\");\n" +
             "    template.style.height = \"120px\";\n" +
             "    template.appendChild(ratingElement);\n" +
             "    new WinJS.UI.Rating(ratingElement, {\n" +
             "        averageRating: 3.4\n" +
             "    });\n" +
             "    return template;\n" +
             "}\n\n" +
             "function headerTemplate(itemPromise){\n" +
             "    return itemPromise.then(function (item) {\n " +
             "        return createHeaderTemplate(item);\n" +
             "    });\n" +
             "}\n\n" +
             "//listView is a ListView that's items are grouped\n" +
             "var listView = document.querySelector(\".listView\").winControl;\n" +
             "listView.itemTemplate = headerTemplate;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700674.aspx",
        title: "Group Header Template"
    }

    var groupHeaderPositionTop = {
        description: "Sets the position of the group header to be above the items in its group",
        code: "var listView = document.querySelector(\".listView\").winControl;\nlistView.layout.groupHeaderPosition = WinJS.UI.HeaderPosition.top;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn255119.aspx",
        title: "Group Header Position: Top"
    }

    var groupHeaderPositionLeft = {
        description: "Sets the position of the group header to be to the left of the items in its group",
        code: "var listView = document.querySelector(\".listView\").winControl;\nlistView.layout.groupHeaderPosition = WinJS.UI.HeaderPosition.left;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn255119.aspx",
        title: "Group Header Position: Left"
    }

    var groupHeaderTapBehaviorNone = {
        description: "When a header is clicked or tapped the item is neither selected nor invoked.",
        code: "var listView = document.querySelector(\".listView\").winControl;\nlistView.groupHeaderTapBehavior = WinJS.UI.GroupHeaderTapBehavior.none;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301808.aspx",
        title: "Group Header Tap Behavior: None"
    }

    var groupHeaderTapBehaviorInvoke = {
        description: "When a header is clicked or tapped the item is invoked but not selected.",
        code: "var listView = document.querySelector(\".listView\").winControl;\nlistView.groupHeaderTapBehavior = WinJS.UI.GroupHeaderTapBehavior.invoke;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301808.aspx",
        title: "Group Header Tap Behavior: Invoke"
    }

    var dataChangesAdd = {
        description: "To add an element to the ListView you only have to add an element to the WinJS.Binding.List that is assigned to the itemDataSourceproperty of the ListView.  This change will be immediatley reflected in the ListView.   If the ListView is grouped then the data is stored in a different order than it is shown, so adding an element to index 0 of the Binding List may not add an element to the beginning of the grouped list.  The groups will be dynamically updated as you make changes to the dataset.",
        code: "/*data is the WinJS.Binding.List that you assigned to itemDataSource\nof your ListView*/\ndata.splice(index, 0, newItem);",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/Hh700774.aspx",
        title: "Adding An Element"
    }

    var dataChangesDelete = {
        description: "To delete an element to the ListView you only have to remove the element from the WinJS.Binding.List that is assigned to the itemDataSource property of the ListView.  This change will be immediatley reflected in the ListView. If the ListView is grouped then the groups will be dynamically updated as you make changes to the dataset.",
        code: "/*data is the WinJS.Binding.List that you assigned to itemDataSource\nof your ListView*/\ndata.splice(index, 1);",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/Hh700774.aspx",
        title: "Deleting An Element"
    }

    var dataChangesChange = {
        description: "To change an element in the ListView you only have to change the element in the WinJS.Binding.List that is assigned to the itemDataSource property of the ListView.  This change will be immediatley reflected in the ListView.  If the ListView is grouped then the data is stored in a different order than it is shown, so changing the element at index 0 may not change the first element shown in the ListView.  The groups will be dynamically updated as you make changes to the dataset.",
        code: "/*data is the WinJS.Binding.List that you assigned to itemDataSource\nof your ListView*/\ndata.splice(index, 1, newItem);",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/Hh700774.aspx",
        title: "Modifying An Element"
    }

    var scrollPositionZero = {
        description: "Gets or sets the distance, in pixels, of the start of the viewable area within the viewport.  For example, setting the scroll position to 0 would scroll the ListView to the beginning of the list",
        code: "//to scroll to the first pixel\nvar listView = document.querySelector(\".listView\").winControl;\nlistView.scrollPosition = 0; //position is in pixels",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211847.aspx",
        title: "Scroll Position"
    }

    var scrollPositionFiveHundred = {
        description: "Gets or sets the distance, in pixels, of the start of the viewable area within the viewport.  For example, setting the scroll position to 0 would scroll the ListView to the beginning of the list",
        code: "//to scroll to the 500th pixel\nvar listView = document.querySelector(\".listView\").winControl;\nlistView.scrollPosition = 500; //position is in pixels",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211847.aspx",
        title: "Scroll Position"
    }

    var ensureVisibleFirst = {
        description: "Ensure Visible is a ListView method that takes the index of an element in the ListView.  If necessary the ListView will scroll to the item.",
        code: "//to ensure the first item is visible\nvar listView = document.querySelector(\".listView\").winControl;\nlistView.ensureVisible(0);",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211820.aspx",
        title: "Ensure Visible"
    }

    var ensureVisibleMiddle = {
        description: "Ensure Visible is a ListView method that takes the index of an element in the ListView.  If necessary the ListView will scroll to the item.",
        code: "//to ensure the middle item is visible\nvar listView = document.querySelector(\".listView\").winControl;\nlistView.ensureVisible(listView.itemDataSource.length / 2);",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211820.aspx",
        title: "Ensure Visible"
    }

    var ensureVisibleLast = {
        description: "Ensure Visible is a ListView method that takes the index of an element in the ListView.  If necessary the ListView will scroll to the item.",
        code: "//to ensure the last item is visible\nvar listView = document.querySelector(\".listView\").winControl;\nlistView.ensureVisible(listView.itemDataSource.length - 1);",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/br211820.aspx",
        title: "Ensure Visible"
    }

    var itemsDraggableYes = {
        description: "Gets or sets a value that specifies whether items can be dragged. When this is set to true, the ListView provides built in behaviors related to item dragging.",
        code: "var listView = document.querySelector(\".listView\").winControl;\nlistView.itemsDraggable = true;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301809.aspx",
        title: "Items Draggable"
    }

    var itemsDraggableNo = {
        description: "Gets or sets a value that specifies whether items can be dragged. When this is set to true, the ListView provides built in behaviors related to item dragging.",
        code: "var listView = document.querySelector(\".listView\").winControl;\nlistView.itemsDraggable = false;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/dn301809.aspx",
        title: "Items Draggable"
    }

    var swipeBehaviorNone = {
        description: "Gets or sets how the ListView reacts to the swipe gesture. The swipe gesture can select the swiped items or can have no effect on the current selection.",
        code: "var listView = document.querySelector(\".listView\").winControl;\nlistView.swipeBehavior = WinJS.UI.SwipeBehavior.none;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700730.aspx",
        title: "Swipe Behavior"
    }

    var swipeBehaviorSelect = {
        description: "Gets or sets how the ListView reacts to the swipe gesture. The swipe gesture can select the swiped items or can have no effect on the current selection.",
        code: "var listView = document.querySelector(\".listView\").winControl;\nlistView.swipeBehavior = WinJS.UI.SwipeBehavior.select;",
        link: "http://msdn.microsoft.com/en-us/library/windows/apps/hh700730.aspx",
        title: "Swipe Behavior"
    }

    function updateInfo(info) {

        var infoSection = document.querySelector(".interactiveInfoSection");
        var title = infoSection.querySelector(".selectionTitle");
        var code = infoSection.querySelector(".selectionSampleCode");
        var description = infoSection.querySelector(".selectionDescription");

        var currentInfo = {
            title: title.innerText,
            code: code.innerText,
            description: description.innerText
        }

        //don't update docs if they don't change
        if (sameInfo(info, currentInfo)) {
            return;
        }

        WinJS.UI.Animation.exitContent(infoSection, null);

        description.innerHTML = info.description;
        code.innerHTML = hljs.highlightAuto(info.code).value;
        infoSection.querySelector(".selectionDocumentation").href = info.link;
        title.innerHTML = info.title;

        WinJS.UI.Animation.enterContent(infoSection, null);
    }

    function sameInfo(info1, info2) {
        return (info1.title === info2.title && info1.code === info2.code && info1.description === info2.description);
    }

    WinJS.Namespace.define("Documentation", {
        updateInfo: updateInfo,
        horizontalOrientation: horizontalOrientation,
        verticalOrientation: verticalOrientation,
        gridLayout: gridLayout,
        listLayout: listLayout,
        itemTemplateTextWithImage: itemTemplateTextWithImage,
        itemTemplateImage: itemTemplateImage,
        itemTemplateInline: itemTemplateInline,
        itemTemplateInteractive: itemTemplateInteractive,
        itemsReorderable: itemsReorderable,
        itemsNotReorderable: itemsNotReorderable,
        tapBehaviorNone: tapBehaviorNone,
        tapBehaviorDirectSelect: tapBehaviorDirectSelect,
        tapBehaviorToggleSelect: tapBehaviorToggleSelect,
        tapBehaviorInvoke: tapBehaviorInvoke,
        selectionModeNone: selectionModeNone,
        selectionModeSingle: selectionModeSingle,
        selectionModeMulti: selectionModeMulti,
        groupItemsYes: groupItemsYes,
        groupItemsNo: groupItemsNo,
        groupHeaderTemplateText: groupHeaderTemplateText,
        groupHeaderTemplateTextWithImage: groupHeaderTemplateTextWithImage,
        groupHeaderTemplateButton: groupHeaderTemplateButton,
        groupHeaderTemplateInteractive: groupHeaderTemplateInteractive,
        groupHeaderPositionTop: groupHeaderPositionTop,
        groupHeaderPositionLeft: groupHeaderPositionLeft,
        groupHeaderTapBehaviorNone: groupHeaderTapBehaviorNone,
        groupHeaderTapBehaviorInvoke: groupHeaderTapBehaviorInvoke,
        dataChangesAdd: dataChangesAdd,
        dataChangesDelete: dataChangesDelete,
        dataChangesChange: dataChangesChange,
        scrollPositionZero: scrollPositionZero,
        scrollPositionFiveHundred: scrollPositionFiveHundred,
        ensureVisibleFirst: ensureVisibleFirst,
        ensureVisibleMiddle: ensureVisibleMiddle,
        ensureVisibleLast: ensureVisibleLast,
        itemsDraggableYes: itemsDraggableYes,
        itemsDraggableNo: itemsDraggableNo,
        swipeBehaviorSelect: swipeBehaviorSelect,
        swipeBehaviorNone: swipeBehaviorNone

    });

})();