var video = document.getElementById("animation");

$( document ).ready(function() {

	setVideoTime(video, 5.4);

    $( window ).scroll(function() {
    	var time = ($(document).scrollTop() / 500) + 5.4;
    	setVideoTime(video, time);
    	// console.log($(document).scrollTop()/200);

    });

});

function setVideoTime(video, time) {
	video.currentTime = time;
}