"use strict";

// Default Settings
var settings = {
  trackHover: false
};
var trackHover = document.querySelector('#track_hover')
var settingsSaved = document.querySelector('.settings_saved'); // Load settings

function loadPopupSettings() {
  trackHover.checked = settings.trackHover

} // Check if settings is available in Chrome Storage and put in settings


chrome.storage.sync.get(['fartAttackSettings'], function (result) {
  if (result.fartAttackSettings) {
    settings = result.fartAttackSettings;
  } // Load settings once the settings are loaded from storage

  loadPopupSettings();
}); // List button actions
// Track Hover

trackHover.addEventListener('input', function () {
  playRandomSound()
  console.log(trackHover)
  if (trackHover.checked) {
    settings.trackHover = trackHover.checked;
  } else {
    settings.trackHover = trackHover.checked;
  }

  updateSettings();
  sendSettings();
  showSettingsSaved();
}); // Track Click

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

var timerSettingsSaved;

function showSettingsSaved() {
  settingsSaved.style.display = 'block';
  clearInterval(timerSettingsSaved);
  timerSettingsSaved = setTimeout(hideSettingsSaved, 1500);
}

function hideSettingsSaved() {
  settingsSaved.style.display = 'none';
  clearInterval(timerSettingsSaved);
}

settingsSaved.addEventListener('click', hideSettingsSaved);

function sendSettings() {
  // Get current tab
  var params = {
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
