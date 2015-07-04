//
//    Date: 2015-07-03
//
function onButtonClick() {
    alert("button clicked.");
    //document.getElementById('info').innerHTML = JSON.stringify(Sysinfo, null, 4);
}

var onPause = function() {
    //document.getElementById('content').innerHTML = 'pause';
    var theValue = document.getElementById('theValue').value;
    document.getElementById('content').innerHTML = theValue;

    // Put Data to localstorage
    // persistentStorage.setItem("theValue", theValue);
    // sessionStorage.setItem("theValue", theValue);
};

var onResume = function() {
    // Get Data to localstorage
    // persistentStorage.getItem("theValue");
    // sessionStorage.getItem("theValue");

    //document.getElementById('info').innerHTML = 'resume';
};
