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
    document.getElementById('content').innerHTML = localStorage.getItem("theValue");
}

var onPause = function() {
    theValue = document.getElementById('theValue').value;
    document.getElementById('lastState').innerHTML = 'paused';
    if (theValue) {
        document.getElementById('content').innerHTML   = theValue;
        // Put Data to localstorage
        localStorage.setItem("theValue", theValue);
    }
    sessionStorage.setItem("theValue", myDate.getEpoch());
};

var onResume = function() {
    setTimeout(function() {
        document.getElementById('lastState').innerHTML = 'resume';
    },
    3000);
    // Get Data to localstorage
    document.getElementById('peristentInfo').innerHTML = localStorage.getItem("theValue");
    document.getElementById('sessionInfo').innerHTML   = sessionStorage.getItem("theValue");
};

var myDate = {
    now : new Date(),
    utcNow    : (new Date()).toUTCString(),
    getEpoch : function() { return (new Date()).getTime(); },
    getToday : function() { return (new Date()).toUTCString(); }
}

var device   = {platform:"browser"};
var theValue = "0";

// Thanks http://www.quirksmode.org/js/detect.html
if ('mozApps' in navigator) {
    document.addEventListener("DOMContentLoaded", onDeviceReady, false);
    document.getElementById("demo").innerHTML = "got mozApps";
} else {
    document.addEventListener("deviceready", onDeviceReady, false);
    document.getElementById("demo").innerHTML = JSON.stringify(navigator);
}

