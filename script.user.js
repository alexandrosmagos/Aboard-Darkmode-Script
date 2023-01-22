// ==UserScript==
// @name        Dark Theme for Aboard
// @namespace   https://alexandrosmagos.com/
// @version     1.0
// @description Changes website theme to a dark
// @author      Alexandros Magos
// @match       https://aboard.iee.ihu.gr/*
// @grant       none
// ==/UserScript==

(function() {
    var style = document.createElement("style");
    style.innerHTML = `
        html, body {
            background-color: #282b30;
            height: 100%;
            margin: 0;
            padding: 0;
        }
        .footer, .navbar-dropdown {
            background-color: #282b30;
        }
        .card {
            background-color: #333;
            color: #fff;
        }
        * {
            color: #fff !important;
        }
        .navbar, .notification {
            background-color: #1e2124;
        }
        .box, .input, .vue-treeselect__control, .vue-treeselect__menu {
            background-color: #424549;
        }
        .tag {
            background-color: #424549 !important;
        }
        .is-light {
            background-color: #3850b7 !important;
        }

    `;
    document.head.appendChild(style);
})();
