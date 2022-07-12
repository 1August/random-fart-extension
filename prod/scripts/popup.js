"use strict";
var timerSettingsSaved, settings = {trackHover: !1, trackClick: !0, trackButtons: !0, coverIcon: !1, newTab: !0},
    trackHover = document.querySelector("#track_hover"), trackClick = document.querySelector("#track_click"),
    trackButtons = document.querySelector("#track_buttons"), coverIcon = document.querySelector("#cover_icon"),
    newTab = document.querySelector("#new_tab"), settingsSaved = document.querySelector(".settings_saved");

function loadPopupSettings() {
    trackHover.checked = settings.trackHover, trackClick.checked = settings.trackClick, trackButtons.checked = settings.trackButtons, coverIcon.checked = settings.coverIcon, newTab.checked = settings.newTab
}

function updateSettings() {
    settings.trackHover = trackHover.checked, settings.trackClick = trackClick.checked, settings.trackButtons = trackButtons.checked, settings.coverIcon = coverIcon.checked, settings.newTab = newTab.checked, chrome.storage.sync.set({fartAttackSettings: settings}, function () {
        console.log("🍑💨 Fart Attack settings saved in Chrome!"), console.log(settings)
    })
}

function toggleClass(t, e) {
    t.classList.toggle(e)
}

function showSettingsSaved() {
    settingsSaved.style.display = "block", clearInterval(timerSettingsSaved), timerSettingsSaved = setTimeout(hideSettingsSaved, 1500)
}

function hideSettingsSaved() {
    settingsSaved.style.display = "none", clearInterval(timerSettingsSaved)
}

function sendSettings() {
    chrome.tabs.query({active: !0, currentWindow: !0}, function (t) {
        chrome.tabs.sendMessage(t[0].id, settings), chrome.runtime.sendMessage({settings: settings})
    })
}

chrome.storage.sync.get(["fartAttackSettings"], function (t) {
    t.fartAttackSettings && (settings = t.fartAttackSettings), loadPopupSettings()
}), trackHover.addEventListener("input", function () {
    trackHover.checked, settings.trackHover = trackHover.checked, updateSettings(), sendSettings(), showSettingsSaved()
}), trackClick.addEventListener("input", function () {
    trackClick.checked, settings.trackClick = trackClick.checked, updateSettings(), sendSettings(), showSettingsSaved()
}), trackButtons.addEventListener("input", function () {
    trackButtons.checked, settings.trackButtons = trackButtons.checked, updateSettings(), sendSettings(), showSettingsSaved()
}), coverIcon.addEventListener("input", function () {
    coverIcon.checked, settings.coverIcon = coverIcon.checked, updateSettings(), sendSettings()
}), newTab.addEventListener("input", function () {
    newTab.checked, settings.newTab = newTab.checked, updateSettings(), sendSettings(), showSettingsSaved()
}), settingsSaved.addEventListener("click", hideSettingsSaved);