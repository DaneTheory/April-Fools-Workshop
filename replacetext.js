// ==UserScript==
// @name         Replace Text
// @namespace    TARGET_WEBSITE
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        TARGET_WEBSITE
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.innerHTML= document.body.innerHTML.replace("TEXT_TO_REPLACE","TEXT_TO_BE");
 })();
