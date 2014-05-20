(function () {

    function buildImageTemplate(item){
        //create base template object
        var template = document.createElement("div");
        template.className = "listIconTextTemplate";
        template.style.overflow = "hidden";

        //add image to template
        var image = document.createElement("img");
        image.className = "listIconTextItem-Image"
        image.src = item.data.picture;
        template.appendChild(image);

        return template;
    }

    function buildTextWithImageTemplate(item) {
       
        template = buildImageTemplate(item);

        //add text body
        var body = document.createElement("div");
        body.className = "listIconTextItem-Detail"
        body.style.overflow = "hidden";
        template.appendChild(body);

        //add title
        var title = document.createElement("h4");
        title.innerText = item.data.title;
        body.appendChild(title);

        //add display text
        var fulltext = document.createElement("h6");
        fulltext.innerText = item.data.text;
        body.appendChild(fulltext);

        return template;
    }

    function textWithImageTemplatingFunction(itemPromise) {
        return itemPromise.then(function (item) {
            return buildTextWithImageTemplate(item);
        });
    }

    function imageTemplatingFunction(itemPromise) {
        return itemPromise.then(function (item) {
            return buildImageTemplate(item);
        });
    }


    WinJS.Namespace.define("Templates", {
        textWithImageTemplatingFunction: textWithImageTemplatingFunction,
        imageTemplatingFunction: imageTemplatingFunction
    });


})();