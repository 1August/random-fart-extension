"use strict";

chrome.runtime.onMessage.addListener(gotMessage);

var settings = {
  trackHover: false,
  trackClick: true,
  trackButtons: true,
  coverIcon: false,
  newTab: true

};
chrome.storage.sync.get(['fartAttackSettings'], function (result) {
  if (result.fartAttackSettings) {
    settings = result.fartAttackSettings;
    console.log('🍑💨 Fart settings loaded from Chrome storage');
    console.log(settings);
    initiateOperationFart();
  }
});

function gotMessage(message, sender, sendResponse) {
  settings = message;
}


var sounds = ['204844', '204849', '204918', '204959', '205008', '205021', '205026', '205033', '205044', '205053', '205102', '205106'],
    links,
    buttons,
    players,
    lastPlayed;

function trackElements(elementName, elementTag) {
  elementName = Array.prototype.slice.call(document.querySelectorAll(elementTag));
  elementName.forEach(function (element) {
    if (settings.trackClick) {
      element.addEventListener('click', function () {
        playRandomSound();
      });
    }

    if (settings.trackHover) {
      element.addEventListener('mouseenter', function () {
        playRandomSound();
      });
      element.addEventListener('mouseleave', function () {
        stopSound(lastPlayed);
      });
      element.addEventListener('touchmove', function () {
        stopSound(lastPlayed);
      });
    } 

    if (settings.newTab) {
      element.setAttribute('target', '_blank');
    }
  });
}

<<<<<<< Updated upstream
=======
const random = n => {
  const rand = Math.floor(Math.random() * n)
  return rand
}

const playFart = () => {

  const delay = random(3000)
  const idx = random(5)

  setTimeout(() => {
      arr[idx]()
      if (refChecked.current){
          playFart()
      }
  }, delay)}

>>>>>>> Stashed changes
function generateAudioPlayer(src) {
  var audioPlayer = document.createElement('audio'),
      mp3Source = document.createElement('source'),
      oggSource = document.createElement('source'),
      mp3Location = chrome.extension.getURL('sounds/mp3/' + src + '.mp3'),
      oggLocation = chrome.extension.getURL('sounds/ogg/' + src + '.ogg'); 

  audioPlayer.setAttribute('preload', true);
  audioPlayer.style.display = 'none';
  mp3Source.setAttribute('type', 'audio/mpeg');
  oggSource.setAttribute('type', 'audio/ogg');
  mp3Source.setAttribute('src', mp3Location);
  oggSource.setAttribute('src', oggLocation); 

  mp3Source.addEventListener('error', function () {
    console.error('😶 D\'oh! The mp3 file ' + mp3Source.src + ' is wrong!');
  });
  oggSource.addEventListener('error', function () {
    console.error('😶 D\'oh! The ogg file ' + oggSource.src + ' is wrong!');
  }); 

  audioPlayer.appendChild(mp3Source);
  audioPlayer.appendChild(oggSource);

  document.body.appendChild(audioPlayer);
  audioPlayer.controls = false; 

  audioPlayer.load(); 
}

function playSound(player) {
  if (player) {
    if (player.currentTime !== 0) {
      player.currentTime = 0;
    }

    player.play();
  }
}

function stopSound(player) {
  // check if player exists, the check if the sound already played before stopping it
  if (player && player.currentTime !== 0) {
    player.pause();
    player.currentTime = 0; 
  }
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addPlayers() {
  sounds.forEach(function (sound) {
    generateAudioPlayer(sound);
  });
  players = Array.prototype.slice.call(document.querySelectorAll('audio'));
}

function playRandomSound() {
  var num = randomNum(0, players.length - 1);
  var player = players[num];
  playSound(player);
<<<<<<< Updated upstream
  lastPlayed = player; // Register last played player
=======
  lastPlayed = player; 

  const time = randomNum(600_000, 1_800_000) 
  setTimeout(()=>{
    playRandomSound()
  }, time)

>>>>>>> Stashed changes
}

function initiateOperationFart() {
  addPlayers();
  trackElements('links', 'a');

<<<<<<< Updated upstream
  if (settings.trackButtons) {
    trackElements('buttons', 'button');
  }
=======
  playRandomSound()
>>>>>>> Stashed changes
}

