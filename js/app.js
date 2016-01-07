//
//    Date: 2015-07-03
//    Last Update: 2016-01-06
//
function onDeviceReady() {
    //alert("device ready.");
    console.log("device ready.");
    if (device.platform === "iOS") {
        //alert("got iOS.");
        // hide Exit button. They don't have one on iOS devices.
        // http://www.mzcart.com/javascript-how-to-addremove-css-class-from-a-dom-element/
        document.getElementById('exitApp').classList.add("hidden");
        /* deals with post-iOS-7 change that covers the status bar */
        /* http://coenraets.org/blog/2013/09/phonegap-and-cordova-with-ios-7/ */
        document.body.style.marginTop = "20px";
    } else if (device.platform == 'Android') {
        // Get rid of 300ms delay 
        document.addEventListener('DOMContentLoaded', function() { FastClick.attach(document.body); }, false);
        //
        document.getElementById('exitApp').addEventListener('click', function() {
           navigator.app.exitApp();
        });
        document.getElementById('theButton').addEventListener('click', function() {
           onButtonClick();
        });
    } else if (device.platform == 'browser') {
        document.getElementById('exitApp').addEventListener('click', function() {
           alert('Exit button clicked.');
        });
        document.getElementById('theButton').addEventListener('click', function() {
           onButtonClick();
        });
    }
    //
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
}


function onButtonClick() {
    //alert("button clicked.");
    document.getElementById('content').innerHTML = window.localStorage.getItem("theValue");
}

var onPause = function() {
    document.getElementById('content').innerHTML = 'paused';
    document.getElementById('content').innerHTML = document.getElementById('theValue').value;

    // Put Data to localstorage
    window.localStorage.setItem("theValue", theValue);
    window.sessionStorage.setItem("theValue", theValue);
};

var onResume = function() {
    setTimeout(function() {
        document.getElementById('content').innerHTML = 'resume';
    },
    5000);
    // Get Data to localstorage
    document.getElementById('peristentInfo').innerHTML = window.localStorage.getItem("theValue");
    document.getElementById('sessionInfo').innerHTML   = window.sessionStorage.getItem("theValue");
};

var device = {platform:"browser"};

document.addEventListener("deviceready", onDeviceReady, false);

//document.addEventListener("DOMContentLoaded", onDeviceReady, false);
