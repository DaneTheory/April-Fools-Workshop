// ==UserScript==
// @name         Banner at top of page
// @namespace    TARGET_WEBSITE
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        TARGET_WEBSITE
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var fragment = create('<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>Test</title><style type="text/css" media="screen">* {margin: 0; padding: 0;}div#schoolclosed { position: absolute; top: 0; left: 0; background-color: #B22222; width: 100%; }div#schoolclosed-content { width: 100%; height: 15%; margin: 0 auto; padding: 10px; border: 1px solid #000;}div#main-content { padding-top: 70px;}</style></head><body><div id="schoolclosed"><div id="schoolclosed-content"><center>School is Closed Today for No Reason</center></div></div><div id="main-content"></div></body></html>');
    document.body.insertBefore(fragment, document.body.childNodes[0]);
 })();

function create(htmlStr) {
    var frag = document.createDocumentFragment(),
    temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}
