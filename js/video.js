var video = document.querySelector("#player1");

//page load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.loop = false
	video.autoPlay = false
});

//play button
document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play()
});

//pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
   	video.pause()
});

//slow down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
   	video.playbackRate *= .90
	console.log("Playback Rate: " + video.playbackRate)
});

//speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
   	video.playbackRate *= 1.10
	console.log("Playback Rate: " + video.playbackRate)
});

//skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead in Video");
	if (video.currentTime <= 57.403333){
		video.currentTime = video.currentTime + 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log("Current Location: " + video.currentTime)
});

//mute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		console.log("Mute Video");
		video.muted = true;
		mute.textContent = "Unmute"
	}
	else{
		console.log("Unmute Video")
		video.muted = false
		mute.textContent = "Mute"
	}
});

//volume slider
document.querySelector("#slider").addEventListener("click", function() {
	console.log("Current Volume: ", video.volume);
	video.volume = this.value / 100;
	console.log("Volume: ", video.volume);
});

document.querySelector("#volume").addEventListener("click", function() {
	video.volume * 100 + "%"
});

//styled
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add(oldSchool)
});

//original
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove(oldSchool)
});