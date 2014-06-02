(function () {
    "use strict";

    function generateItemList() {
        var items = [
            { title: "Marvelous Mint", text: "Gelato", picture: "/images/fruits/60Mint.png" },
            { title: "Succulent Strawberry", text: "Sorbet", picture: "/images/fruits/60Strawberry.png" },
            { title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
            { title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
            { title: "Creamy Orange", text: "Sorbet", picture: "/images/fruits/60Orange.png" },
            { title: "Very Vanilla", text: "Ice Cream", picture: "/images/fruits/60Vanilla.png" },
            { title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" }
        ];
        return items;
    }

    function generateItem(itemOptions) {
        var num = Math.random()*itemOptions.length;
        var item = itemOptions[Math.floor(num)];
        return cloneItem(item);
    }

    function createData() {

        var items = [];
        var itemList = generateItemList();
        //Generate 100 items
        for (var i = 0; i < 100 ; i++) {
            items.push(generateItem(itemList));
        }
        return items;
    }

   

    function groupData(bindingList) {
        var groupedData = bindingList.createGrouped(function (item) {
            //items will be sorted into groups based on this value
            return item.title.toUpperCase().charAt(0);
        }, function (item) {
            //data of each group (runs on only one element from each group)
            return {
                title: item.title.toUpperCase().charAt(0),
                picture: item.picture
            };
        }, function (left, right) {
            //sort groups with this comparison
            return left.charCodeAt(0) - right.charCodeAt(0);
        });

        return groupedData;
    }


    function addElement() {
        var indices = getActionItemIndices();

        if (indices.length === 1) {
            addElementAt(indices);
        } else {
            addElementAt(indices[0]);
        }
    }

    function addElementAt(index) {
        var listView = document.querySelector(".listView").winControl;
        var data = getListViewData();
        var newItem;
        if (listView.groupDataSource) {
            var item = data.getItem(index);
            newItem = cloneItem(item);
        } else {
            newItem = generateItem(generateItemList());
        }
        data.splice(index, 0, newItem);
    }

    function deleteElement() {
        var indices = getActionItemIndices(true)
        //iterate through list backwards so removing items has no effect on remaining indexes
        for (var i = indices.length - 1; i >=0; i--) {
            deleteElementAt(indices[i]);
        }
    }

    function deleteElementAt(index) {
        var data = getListViewData();
        data.splice(index, 1);
    }

    function changeElement() {
        var indices = getActionItemIndices();

        for (var i = 0; i <indices.length; i++) {
            changeElementAt(indices[i]);
        }
    }

    function changeElementAt(index) {
        var data = getListViewData();
        var item = data.getAt(index);
        //reverse string
        item.title = item.title.split("").reverse().join("");
        data.setAt(index, item);
    }

    function getActionItemIndices(oneItem) {
        var listView = document.querySelector(".listView").winControl;
        var inputValue = document.querySelector(".textInput").value;
        var indices = [];
        if (inputValue) {
            indices.push(parseInt(inputValue));
        } else if (listView.selection.count() > 0) {
            indices = listView.selection.getIndices();
        } else {
            indices.push(0);
        }
        return indices;
    }

    function cloneItem(item) {
        if (item.data) {
            return {
                title: item.data.title,
                text: item.data.text,
                picture: item.data.picture
            };

        } else {
            return {
                title: item.title,
                text: item.text,
                picture: item.picture
            };
        }
    }

   function getListViewData() {
        var listView = document.querySelector(".listView").winControl;
        if (listView.groupDataSource) {
            return Sample.ListView.groupedData;
        } else {
            return Sample.ListView.data;
        }
    }

    WinJS.Namespace.define("Data", {
        createData: createData,
        groupData: groupData,
        addElement: addElement,
        deleteElement: deleteElement,
        changeElement: changeElement,
    });
})();