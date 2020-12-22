// ==UserScript==
// @name        DA Resource Launcher
// @description Launch helpful search resources for Shiplify DA
// @match       https://tariffs.shiplify.com/review-tasks/next*
// @grant       GM_addStyle
// ==/UserScript==

/*--- Create a button in a container div.  It will be styled and
    positioned with CSS.
*/

var zNode = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button">'
                + 'For Pete\'s sake, don\'t click me!</button>'
                ;
zNode.setAttribute ('id', 'myContainer');
document.body.appendChild (zNode);

//--- Activate the newly added button.
document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false
);

function ButtonClickAction (zEvent) {
    var addressLines = document.getElementsByClassName("addr-line");
    var consigneeName = document.getElementsByClassName("title");
    var loopnetSearchStr = "https://www.google.com/search?q=".concat("Loopnet ", addressLines[0].innerHTML).replace(" ", "%20");
    var imageSearchStr = "https://www.google.com/search?tbm=isch&q=".concat(consigneeName[0].innerHTML, " ", addressLines[0].innerHTML).replace(" ", "%20");

    window.open(loopnetSearchStr, "_blank");
    window.open(imageSearchStr, "_blank");

    //var zNode = document.createElement ('p');
    //zNode.innerHTML = "Loopnet".concat(addressLines[0].innerHTML, " ", addressLines[1].innerHTML);
    //document.getElementById ("myContainer").appendChild (zNode);
}