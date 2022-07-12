<<<<<<< Updated upstream
"use strict";

// Default Settings
var settings = {
    trackHover: false
};
var trackHover = document.querySelector('#track_hover')
var settingsSaved = document.querySelector('.settings_saved'); // Load settings

=======
let settings = {
    trackHover: false,
    trackClick: true,
    trackButtons: true,
    coverIcon: false,
    newTab: true
}

let trackHover = document.querySelector('#track_hover');
let trackClick = document.querySelector('#track_click');
let trackButtons = document.querySelector('#track_buttons');
let coverIcon = document.querySelector('#cover_icon');
let newTab= document.querySelector('#new_tab');
let settingsSaved = document.querySelector('.settings_saved');


>>>>>>> Stashed changes
function loadPopupSettings() {
    trackHover.checked = settings.trackHover
} // Check if settings is available in Chrome Storage and put in settings


<<<<<<< Updated upstream
chrome.storage.sync.get(['fartAttackSettings'], function (result) {
    if (result.fartAttackSettings) {
        settings = result.fartAttackSettings;
    } // Load settings once the settings are loaded from storage

    loadPopupSettings();
}); // List button actions
// Track Hover

trackHover.addEventListener('input', function () {
    playRandomSound()
    console.log(trackHover.checked)
=======
chrome.storage.sync.get(['fartAttackSettings'], function(result) {
    if (result.fartAttackSettings) {
        settings = result.fartAttackSettings;
    }
    loadPopupSettings();
});

trackHover.addEventListener('input', function(){
>>>>>>> Stashed changes
    if (trackHover.checked) {
        settings.trackHover = trackHover.checked;
    } else {
        settings.trackHover = trackHover.checked;
    }

<<<<<<< Updated upstream
=======
trackClick.addEventListener('input', function(){
    if (trackClick.checked) {
        settings.trackClick = trackClick.checked;
    } else {
        settings.trackClick = trackClick.checked;
    }
>>>>>>> Stashed changes
    updateSettings();
    sendSettings();
    showSettingsSaved();
}); // Track Click

<<<<<<< Updated upstream
=======
trackButtons.addEventListener('input', function(){
    if (trackButtons.checked) {
        settings.trackButtons = trackButtons.checked;
    } else {
        settings.trackButtons = trackButtons.checked;
    }
    updateSettings();
    sendSettings();
    showSettingsSaved();
});

coverIcon.addEventListener('input', function(){
    if (coverIcon.checked) {
        settings.coverIcon = coverIcon.checked;
    } else {
        settings.coverIcon = coverIcon.checked;
    }
    updateSettings();
    sendSettings();
});

newTab.addEventListener('input', function(){
    if (newTab.checked) {
        settings.newTab = newTab.checked;
    } else {
        settings.newTab = newTab.checked;
    }
    updateSettings();
    sendSettings();
    showSettingsSaved();
});

>>>>>>> Stashed changes
function updateSettings() {
    settings.trackHover = trackHover.checked;
    chrome.storage.sync.set({
        fartAttackSettings: settings
    }, function () {
        console.log('🍑💨 Fart Attack settings saved in Chrome!');
        console.log(settings);
    });
} // Toggle Class


function toggleClass(element, className) {
    element.classList.toggle(className);
}

<<<<<<< Updated upstream
var timerSettingsSaved;

=======
let timerSettingsSaved;
>>>>>>> Stashed changes
function showSettingsSaved() {
    settingsSaved.style.display = 'block';
    clearInterval(timerSettingsSaved);
    timerSettingsSaved = setTimeout(hideSettingsSaved, 1500);
}

function hideSettingsSaved() {
    settingsSaved.style.display = 'none';
    clearInterval(timerSettingsSaved);
}
<<<<<<< Updated upstream

settingsSaved.addEventListener('click', hideSettingsSaved);

function sendSettings() {
    // Get current tab
    var params = {
=======
settingsSaved.addEventListener('click', hideSettingsSaved);

function sendSettings() {
    let params = {
>>>>>>> Stashed changes
        active: true,
        currentWindow: true
    };
    chrome.tabs.query(params, gotTab);

    function gotTab(tab) {
        chrome.tabs.sendMessage(tab[0].id, settings);
        chrome.runtime.sendMessage({
            settings: settings
        });
    }
}
//# sourceMappingURL=popup.js.map
