// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-08-10
// @description  try to take over the world!
// @author       You
// @match        https://vietlonghung.com.vn/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vietlonghung.com.vn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function a()
    {
        location.reload();
    }
    setTimeout (a, 1000 * 5);
})();