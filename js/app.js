//
//    Date: 2015-07-03
//    Last Update: 2016-01-06
//
function onDeviceReady() {
    //alert("device ready.");
    if (device.platform === "iOS") {
        //alert("got iOS.");
        // hide Exit button. They don't have one on iOS devices.
        // http://www.mzcart.com/javascript-how-to-addremove-css-class-from-a-dom-element/
        document.getElementById('exitApp').classList.add("hidden");
        /* deals with post-iOS-7 change that covers the status bar */
        /* http://coenraets.org/blog/2013/09/phonegap-and-cordova-with-ios-7/ */
        document.body.style.marginTop = "20px";
    }
    // Get rid of 300ms delay 
    document.addEventListener('DOMContentLoaded', function() { FastClick.attach(document.body); }, false);
    //
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
}


function onButtonClick() {
    //alert("button clicked.");
    var perAfterResumeValue = persistentStorage.getItem("theValue");
    document.getElementById('permInfo').innerHTML = perAfterResumeValue;
}

var onPause = function() {
    //document.getElementById('content').innerHTML = 'pause';
    var theValue = document.getElementById('theValue').value;
    document.getElementById('content').innerHTML = theValue;

    // Put Data to localstorage
    persistentStorage.setItem("theValue", theValue);
    sessionStorage.setItem("theValue", theValue);
};

var onResume = function() {
    alert('got onResume');
    // Get Data to localstorage
    var perAfterResumeValue = persistentStorage.getItem("theValue");
    var sesAfterResumeValue = sessionStorage.getItem("theValue");

    document.getElementById('info').innerHTML = perAfterResumeValue;
};

var persistentStorage = window.localStorage;
var sessionStorage = window.sessionStorage;

document.addEventListener("deviceready", onDeviceReady, false);
