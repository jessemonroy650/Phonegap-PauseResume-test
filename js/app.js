//
//	Date: 2015-07-03
//
function onButtonClick() {
    alert("button clicked.");
    //document.getElementById('info').innerHTML = JSON.stringify(Sysinfo, null, 4);
}

var onPause = function() {
	document.getElementById('content').innerHTML = 'pause';
};

var onResume = function() {
	document.getElementById('info').innerHTML = 'resume';
};
