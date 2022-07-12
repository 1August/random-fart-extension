<<<<<<< Updated upstream
"use strict";

chrome.runtime.onMessage.addListener(gotMessage); // Default settings

var settings = {
    trackHover: false
};
chrome.storage.sync.get(['fartAttackSettings'], function (result) {
=======
chrome.runtime.onMessage.addListener(gotMessage);

let settings = {
    trackHover: false,
    trackClick: true,
    trackButtons: true,
    coverIcon: false,
    newTab: true
}

chrome.storage.sync.get(['fartAttackSettings'], function(result) {
>>>>>>> Stashed changes
    if (result.fartAttackSettings) {
        settings = result.fartAttackSettings;
        console.log('🍑💨 Fart Attack settings loaded from Chrome storage');
        console.log(settings);
        initiateOperationFart();
    }
});

function gotMessage(message, sender, sendResponse) {
    settings = message;
<<<<<<< Updated upstream
} // Operation Fart


var sounds = ['204844', '204849', '204918', '204959', '205008', '205021', '205026', '205033', '205044', '205053', '205102', '205106'],
    links,
    buttons,
    players,
    lastPlayed;

// function trackElements(elementName, elementTag) {
//     elementName = Array.prototype.slice.call(document.querySelectorAll(elementTag));
//     elementName.forEach(function (element) {
//         if (settings.trackClick) {
//             element.addEventListener('click', function () {
//                 playRandomSound();
//             });
//         }
//
//         if (settings.trackHover) {
//             element.addEventListener('mouseenter', function () {
//                 playRandomSound();
//             });
//             element.addEventListener('mouseleave', function () {
//                 stopSound(lastPlayed);
//             });
//             element.addEventListener('touchmove', function () {
//                 stopSound(lastPlayed);
//             });
//         } // Make sure links open in a new window
//
//
//         if (settings.newTab) {
//             element.setAttribute('target', '_blank');
//         }
//     });
// }
=======
}

let
    sounds = [
        '204844',
        '204849',
        '204918',
        '204959',
        '205008',
        '205021',
        '205026',
        '205033',
        '205044',
        '205053',
        '205102',
        '205106'
    ],
    links,
    buttons,
    players,
    lastPlayed
;


function trackElements(elementName, elementTag) {
    elementName = Array.prototype.slice.call(document.querySelectorAll(elementTag));
    elementName.forEach(element => {
        if (settings.trackClick) {
            element.addEventListener('click', () => {
                playRandomSound();
            });
        }
        if (settings.trackHover) {
            element.addEventListener('mouseenter', () => {
                playRandomSound();
            });
            element.addEventListener('mouseleave', () => {
                stopSound(lastPlayed);
            });
            element.addEventListener('touchmove', () => {
                stopSound(lastPlayed);
            });
        }

        if (settings.newTab) {
            element.setAttribute('target', '_blank');
        }
        
    });
}


>>>>>>> Stashed changes

function generateAudioPlayer(src) {
    var audioPlayer = document.createElement('audio'),
        mp3Source = document.createElement('source'),
        oggSource = document.createElement('source'),
        mp3Location = chrome.extension.getURL('sounds/mp3/' + src + '.mp3'),
        oggLocation = chrome.extension.getURL('sounds/ogg/' + src + '.ogg'); // Set attributes

    audioPlayer.setAttribute('preload', true);
    audioPlayer.style.display = 'none';
    mp3Source.setAttribute('type', 'audio/mpeg');
    oggSource.setAttribute('type', 'audio/ogg');
    mp3Source.setAttribute('src', mp3Location);
    oggSource.setAttribute('src', oggLocation); // Catch errors

<<<<<<< Updated upstream
    mp3Source.addEventListener('error', function () {
=======

    mp3Source.addEventListener('error', function(){
>>>>>>> Stashed changes
        console.error('😶 D\'oh! The mp3 file ' + mp3Source.src + ' is wrong!');
    });
    oggSource.addEventListener('error', function () {
        console.error('😶 D\'oh! The ogg file ' + oggSource.src + ' is wrong!');
    }); // appending the sources to the player element

    audioPlayer.appendChild(mp3Source);
<<<<<<< Updated upstream
    audioPlayer.appendChild(oggSource); // Append player to page

    document.body.appendChild(audioPlayer);
    audioPlayer.controls = false; // Hide player

    audioPlayer.load(); // Load audio when it's updated
=======
    audioPlayer.appendChild(oggSource);

    document.body.appendChild(audioPlayer);

    audioPlayer.controls = false;
    
    audioPlayer.load();
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    // check if player exists, the check if the sound already played before stopping it
=======
>>>>>>> Stashed changes
    if (player && player.currentTime !== 0) {
        player.pause();
        player.currentTime = 0
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

const random = n => {
    const rand = Math.floor(Math.random() * n)
    // if (rand < 1000 * 60 * 1) return random()
    return rand
}

const playFart = () => {
    // console.log(checked)

    const delay = random(3000)
    const idx = random(5)

    setTimeout(() => {
        // arr[idx]()
        if (refChecked.current){
            playFart()
        }
    }, delay)
}

function playRandomSound() {
    var num = randomNum(0, players.length - 1);
    var player = players[num];
    playSound(player);
<<<<<<< Updated upstream
    lastPlayed = player

    const delay = random(2000)

    setTimeout(() => {

        // if (settings.trackHover){
        playRandomSound()
        // }
    }, delay)
}

function initiateOperationFart() {
    addPlayers();
    // trackElements('links', 'a');
    //
    // if (settings.trackButtons) {
    //     trackElements('buttons', 'button');
    // }
    // playRandomSound()
}

//# sourceMappingURL=content.js.map
=======
    lastPlayed = player;
}

function initiateOperationFart() {
    addPlayers();
    trackElements('links', 'a');
    if (settings.trackButtons) {
        trackElements('buttons', 'button');
    }
}
>>>>>>> Stashed changes
