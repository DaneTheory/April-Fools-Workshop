// ==UserScript==
// @name         Banner at top of page
// @namespace    https://holyokecodes.org/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        TARGET_WEBSITE
// @grant        none
// @require      http://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    var color = '#dc1b05';
    var message = 'School is Closed Today';
     $('body').prepend('<style>div#banner { position: absolute; top: 0; left: 0; background-color: ' + color +'; width: 100%; z-index:999999999999; }div#banner-content {padding: 40px; color: white; font-size: 2em;} div#main-content { padding-top: 100px;}</style><div id="banner"><div id="banner-content"><center>'+message+'</center></div></div><div id="main-content"></div>');
})();
