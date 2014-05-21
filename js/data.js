(function () {

    function createData() {
        var itemArray = [
            { title: "Marvelous Mint", text: "Gelato", picture: "/images/fruits/60Mint.png" },
            { title: "Succulent Strawberry", text: "Sorbet", picture: "/images/fruits/60Strawberry.png" },
            { title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
            { title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
            { title: "Creamy Orange", text: "Sorbet", picture: "/images/fruits/60Orange.png" },
            { title: "Very Vanilla", text: "Ice Cream", picture: "/images/fruits/60Vanilla.png" },
            { title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
            { title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" }
        ];

        var items = [];

        //Generate 160 items
        for (var i = 0; i < 20 ; i++) {
            itemArray.forEach(function (item) {
                items.push(item);
            });
        }
        return items;
    }

    function createGroupedData(){
        var data = new WinJS.Binding.List(this.createData());
        var groupedData = data.createGrouped(function (item) {
            //items will be sorted into groups based on this value
            return item.title.toUpperCase().charAt(0);
        }, function (item) {
            //data of each group (runs on only one element from each group)
            return {
                title: item.title.toUpperCase().charAt(0),
                picture: item.picture
            };
        }, function (left, right) {
            //sort items in each group with this comparison
            return left.charCodeAt(0) - right.charCodeAt(0);
        });

        return groupedData;
    }

    WinJS.Namespace.define("Data", {
        createData: createData,
        createGroupedData: createGroupedData
    });
})();