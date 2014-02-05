// ==UserScript==
// @name           ChatWork Replace Icon
// @description    Replace user icon for ChatWork.
// @namespace      https://github.com/chocoby/chatwork-replace-icon
// @include        https://www.chatwork.com/*
// @version        0.0.3
// ==/UserScript==

// EDIT BEGIN
var userId = ""; // ex. "XXXXXX" (data-aid="123456")
var newIconUrl = ""; // ex. "http://example.com/path/to/image.jpg"
// EDIT END

var apiEndpoint = "http://chatwork-allow-origin-proxy.herokuapp.com/v1/image.json?url="
var imageDataURL;

var timer = 0;

function findIcon() {
    if (timer) return;

    timer = setTimeout(function() {
        var xpath = document.evaluate(getXpathExpression(), document, null, 7, null);
        var xpathLength = xpath.snapshotLength;

        for (var i = 0; i < xpathLength; i++) {
            fetchAndReplaceIcon(newIconUrl, xpath.snapshotItem(i));
        }

        timer = 0;
    }, 5);
};

function fetchAndReplaceIcon(iconUrl, icon) {
    if (!imageDataURL) {
        imageDataURL = localStorage.getItem(iconUrl);
    }

    if (imageDataURL) {
        icon.setAttribute("src", imageDataURL);
    } else {
        console.log("no cache. fetching icon...");

        var xhr = new XMLHttpRequest();

        var requestUrl = apiEndpoint + iconUrl;
        xhr.open('GET', requestUrl, true);

        xhr.addEventListener("load", function() {
            if (xhr.readyState == 4) {
                var res = JSON.parse(xhr.response);
                if (xhr.status === 200) {
                    imageDataURL = res.data;
                    icon.setAttribute("src", imageDataURL);
                    localStorage.setItem(iconUrl, imageDataURL);

                    console.log("icon cached");
                } else {
                    var statusMessage = res.status;
                    console.log("icon fetch error: " + statusMessage);
                }
            }
        }, false);

        xhr.send();
    }
}

function getXpathExpression() {
    return './/img[contains(concat(" ", @data-aid, " "), " ' + userId + ' ")]';
}

window.addEventListener("DOMNodeInserted", findIcon, false);
