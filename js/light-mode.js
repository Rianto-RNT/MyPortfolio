function checkStyle(evt) {
    var strUser = evt.options[evt.selectedIndex].value;
    Style(strUser);
}

function Style(index) {

    var cssLinkIndex = 0;
    var counter;
    switch (index) {
        case "1":
            counter = "css/main.css";
            break;
        case "2":
            counter = "css/light-mode.css";
            break;
        default:
            counter = "css/main.css";
    }

    changeCSS(counter, cssLinkIndex);
}

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}