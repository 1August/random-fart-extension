"use strict";

function gotMessage(e, t, s) {
    e.settings.coverIcon ? chrome.browserAction.setIcon({path: "images/empty.png"}) : chrome.browserAction.setIcon({path: "images/fart_attack_icon-128.png"})
}

chrome.runtime.onMessage.addListener(gotMessage);