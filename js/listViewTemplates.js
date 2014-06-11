(function () {
    "use strict";

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
       
        var template = buildImageTemplate(item);

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

    function buildInteractiveTemplate(item) {
        var template = buildTextWithImageTemplate(item);
        var ratingElement = document.createElement("div");
        template.style.height = "120px";
        template.appendChild(ratingElement);
        new WinJS.UI.Rating(ratingElement, {
            averageRating: 2,
            maxRating: 4
        });
        return template;
    }

    function buildTextHeaderTemplate(item) {
        var template = document.createElement("div");
        template.className = "listLayoutHeaderTemplate";
        template.style.overflow = "hidden";

        var title = document.createElement("div");
        title.className = "titleDiv"
        title.innerText = item.key;
        template.appendChild(title);
        return template;
    }

    function buildTextWithImageHeaderTemplate(item) {
        var template = buildTextHeaderTemplate(item);
        var image = document.createElement("img");
        image.src = item.data.picture;
        template.appendChild(image);
        return template;
    }

    function buildButtonHeaderTemplate(item) {

        var template = buildTextHeaderTemplate(item);
        var button = document.createElement("button");
        button.innerText = "Group " + item.data.title;
        template.appendChild(button);
        return template;
    }

    function buildInteractiveHeaderTemplate(item) {

        var template = buildTextHeaderTemplate(item);

        var ratingElement = document.createElement("div");
        new WinJS.UI.Rating(ratingElement, {
            averageRating: 1.2
        });

        template.appendChild(ratingElement);

        return template;
    }

    function textWithImageTemplate(itemPromise) {
        return itemPromise.then(function (item) {
            return buildTextWithImageTemplate(item);
        });
    }

    function imageTemplate(itemPromise) {
        return itemPromise.then(function (item) {
            return buildImageTemplate(item);
        });
    }

    function textHeaderTemplate(itemPromise) {
        return itemPromise.then(function (item) {
            return buildTextHeaderTemplate(item);
        });
    }

    function textWithImageHeaderTemplate(itemPromise) {
        return itemPromise.then(function (item) {
            return buildTextWithImageHeaderTemplate(item);
        });
    }

    function interactiveTemplate(itemPromise) {
        return itemPromise.then(function (item) {
            return buildInteractiveTemplate(item);
        });
    }

    function buttonHeaderTemplate(itemPromise){
        return itemPromise.then(function (item){
            return buildButtonHeaderTemplate(item);
        })
    }

    function interactiveHeaderTemplate(itemPromise) {
        return itemPromise.then(function (item) {
            return buildInteractiveHeaderTemplate(item);
        });
    }

    

    WinJS.Namespace.define("Templates", {
        textWithImageTemplate: textWithImageTemplate,
        imageTemplate: imageTemplate,
        textHeaderTemplate: textHeaderTemplate,
        interactiveTemplate: interactiveTemplate,
        textWithImageHeaderTemplate: textWithImageHeaderTemplate,
        buttonHeaderTemplate: buttonHeaderTemplate,
        interactiveHeaderTemplate: interactiveHeaderTemplate
    });


})();