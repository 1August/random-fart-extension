"use strict";
chrome.runtime.onMessage.addListener(gotMessage);
var settings = {trackHover: !1, trackClick: !0, trackButtons: !0, coverIcon: !1, newTab: !0};

function gotMessage(t, e, n) {
    settings = t
}

chrome.storage.sync.get(["fartAttackSettings"], function (t) {
    t.fartAttackSettings && (settings = t.fartAttackSettings, console.log("🍑💨 Fart Attack settings loaded from Chrome storage"), console.log(settings), initiateOperationFart())
});
var links, buttons, players, lastPlayed,
    sounds = ["204844", "204849", "204918", "204959", "205008", "205021", "205026", "205033", "205044", "205053", "205102", "205106"];
<<<<<<< Updated upstream
//
// function trackElements(t, e) {
//     Array.prototype.slice.call(document.querySelectorAll(e)).forEach(function (t) {
//         settings.trackClick && t.addEventListener("click", function () {
//             playRandomSound()
//         }), settings.trackHover && (t.addEventListener("mouseenter", function () {
//             playRandomSound()
//         }), t.addEventListener("mouseleave", function () {
//             stopSound(lastPlayed)
//         }), t.addEventListener("touchmove", function () {
//             stopSound(lastPlayed)
//         })), settings.newTab && t.setAttribute("target", "_blank")
//     })
// }
=======

function trackElements(t, e) {
    Array.prototype.slice.call(document.querySelectorAll(e)).forEach(function (t) {
        settings.trackClick && t.addEventListener("click", function () {
            playRandomSound()
        }), settings.trackHover && (t.addEventListener("mouseenter", function () {
            playRandomSound()
        }), t.addEventListener("mouseleave", function () {
            stopSound(lastPlayed)
        }), t.addEventListener("touchmove", function () {
            stopSound(lastPlayed)
        })), settings.newTab && t.setAttribute("target", "_blank")
    })
}
>>>>>>> Stashed changes

function generateAudioPlayer(t) {
    var e = document.createElement("audio"), n = document.createElement("source"), o = document.createElement("source"),
        r = chrome.extension.getURL("sounds/mp3/" + t + ".mp3"),
        a = chrome.extension.getURL("sounds/ogg/" + t + ".ogg");
    e.setAttribute("preload", !0), e.style.display = "none", n.setAttribute("type", "audio/mpeg"), o.setAttribute("type", "audio/ogg"), n.setAttribute("src", r), o.setAttribute("src", a), n.addEventListener("error", function () {
        console.error("😶 D'oh! The mp3 file " + n.src + " is wrong!")
    }), o.addEventListener("error", function () {
        console.error("😶 D'oh! The ogg file " + o.src + " is wrong!")
    }), e.appendChild(n), e.appendChild(o), document.body.appendChild(e), e.controls = !1, e.load()
}

function playSound(t) {
    t && (0 !== t.currentTime && (t.currentTime = 0), t.play())
}

function stopSound(t) {
    t && 0 !== t.currentTime && (t.pause(), t.currentTime = 0)
}

function randomNum(t, e) {
    return Math.floor(Math.random() * (e - t + 1)) + t
}

function addPlayers() {
    sounds.forEach(function (t) {
        generateAudioPlayer(t)
    }), players = Array.prototype.slice.call(document.querySelectorAll("audio"))
}

function playRandomSound() {
    var t = randomNum(0, players.length - 1), e = players[t];
    playSound(e), lastPlayed = e
}

function initiateOperationFart() {
    addPlayers(), trackElements("links", "a"), settings.trackButtons && trackElements("buttons", "button")
}