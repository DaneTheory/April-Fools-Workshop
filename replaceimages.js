// ==UserScript==
// @name         Replace All Images
// @namespace    TARGET_WEBSITE
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        TARGET_WEBSITE
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = function () {
        var imgs = document.getElementsByTagName("img");
        for(var i=0, l=imgs.length;i<l;i++)
        {
            imgs[i].src = "NEW_IMAGE_URL";
        }
    };
 })();
