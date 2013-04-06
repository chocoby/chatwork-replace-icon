// ==UserScript==
// // @name           ChatWork Replace Icon
// // @description    Replace user icon in ChatWork.
// // @namespace      https://github.com/chocoby/chatwork-replace-icon
// // @include        https://www.chatwork.com/*
// // @version        0.0.1
// // ==/UserScript==

var iconClass = ""; // ex. cw_a123456
var newIconUrl = "https://raw.github.com/chocoby/chatwork-replace-icon/master/images/mikudayo.jpg";
var newIconImageType = "image/jpeg";

function findIcon() {
    if (timer) return;

    timer = setTimeout(function() {
        var icons = document.getElementsByClassName(iconClass);
        for (var i = 0; i < icons.length; i++) {
            fetchAndReplaceIcon(newIconUrl, icons[i]);
        }

        timer = 0;
    }, 30);
};

function fetchAndReplaceIcon(iconUrl, icon) {
    var imageDataURL = localStorage.getItem(iconUrl);

    if (imageDataURL) {
        icon.setAttribute("src", imageDataURL);
    } else {
        var req = new XMLHttpRequest(),
            blob,
            fileReader = new FileReader();

        requestUrl = 'http://allow-any-origin.appspot.com/' + iconUrl;
        req.open('GET', requestUrl, true);
        req.responseType = "arraybuffer";

        req.addEventListener("load", function() {
            blob = new Blob([new Uint8Array(req.response)], { type: newIconImageType });

            fileReader.onload = function(e) {
                imageDataURL = e.target.result;
                icon.setAttribute("src", imageDataURL);
                localStorage.setItem(iconUrl, imageDataURL);
            }

            fileReader.readAsDataURL(blob);
        }, false);

        req.send();
    }
}

var timer = 0;
window.addEventListener("DOMNodeInserted", findIcon, false);
