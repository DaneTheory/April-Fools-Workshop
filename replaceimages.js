// ==UserScript==
// @name         Replace All Images
// @namespace    https://holyokecodes.org
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        */*
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
