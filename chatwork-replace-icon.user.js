// ==UserScript==
// @name           ChatWork Replace Icon
// @description    Replace user icon in ChatWork.
// @namespace      https://github.com/chocoby/chatwork-replace-icon
// @include        https://www.chatwork.com/*
// @version        0.0.1
// ==/UserScript==

var iconClass = ""; // ex. cw_a123456
var newIconUrl = ""; // ex. http://example.com/path/to/image.jpeg
var newIconImageType = "image/jpeg";

function findIcon() {
    if (timer) return;

    timer = setTimeout(function() {
        var icons = document.getElementsByClassName(iconClass);
        for (var i = 0; i < icons.length; i++) {
            fetchAndReplaceIcon(newIconUrl, icons[i]);
        }

        timer = 0;
    }, 5);
};

function fetchAndReplaceIcon(iconUrl, icon) {
    var imageDataURL = localStorage.getItem(iconUrl);

    if (imageDataURL) {
        icon.setAttribute("src", imageDataURL);
    } else {
        console.log("no cache! fetching icon...");

        var req = new XMLHttpRequest();

        requestUrl = 'http://allow-any-origin.appspot.com/' + iconUrl;
        req.open('GET', requestUrl, true);
        req.responseType = "arraybuffer";

        req.addEventListener("load", function() {
            if (req.status === 200) {
                var blob = new Blob([new Uint8Array(req.response)], { type: newIconImageType });
                var fileReader = new FileReader();

                fileReader.onload = function(e) {
                    imageDataURL = e.target.result;
                    icon.setAttribute("src", imageDataURL);
                    localStorage.setItem(iconUrl, imageDataURL);

                    console.log("cached icon!");
                }

                fileReader.readAsDataURL(blob);
            } else {
                console.log("icon fetch error!");
            }
        }, false);

        req.send();
    }
}

var timer = 0;
window.addEventListener("DOMNodeInserted", findIcon, false);
