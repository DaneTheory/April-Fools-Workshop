// ==UserScript==
// @name         Replace Text
// @namespace    https://holyokecodes.org
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        */*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('div, p, h1, h2, h3, li, span, a').contents().filter(function() {
        // Filter text nodes
        return this.nodeType == 3;
    }).each(function(){
        this.textContent = this.textContent.replace(/TEXT_TO_REPLACE/g, 'REPLACEMENT_TEXT');
        // For example:
        //this.textContent = this.textContent.replace(/Add to [Cc]art/g, 'Buy for Andrew!');
        // Or whatever text you want to replace...
    });
 })();
