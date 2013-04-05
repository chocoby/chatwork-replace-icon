function replaceIcon() {
    if (timer) return;

    timer = setTimeout(function() {
        var iconClass = ""; // ex. cw_a123456
        var newIconUrl = "https://gist.github.com/chocoby/5320696/raw/3afb39adf96976e5b76cda4fb9cf7c490021619c/mikudayo.jpg";

        var icons = document.getElementsByClassName(iconClass);
        for (var i = 0; i < icons.length; i++) {
            icons[i].setAttribute("src", newIconUrl);
        }

        timer = 0;
    }, 10);
};

var timer = 0;
window.addEventListener("DOMNodeInserted", replaceIcon, false);
