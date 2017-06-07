// Play/Pause, listens for clicks
var playButton = document.getElementById('play-button');
// Stop, listens for clicks
var stopButton = document.getElementById('stop-button');
// Chosen Song Form, listens for change
var chosenSongElement = document.getElementById('choose-song');
var songList = document.getElementById('song-list');



function Jukebox (){
	
	var playWindow = document.getElementById('playing');


	this.audio = document.getElementsByTagName('audio')[0];

	// Load Array of Songs
	this.songs = [];
	this.songs.push(this.audio.firstElementChild.src.split('/').pop());

	songList.innerText = this.songs;

	this.play = function () {
		if (this.audio.paused){
			this.audio.play();
		} else {
			this.audio.pause();
		}

	};

	this.stop = function () {
		this.audio.load();
	};

	this.chooseSong = function () {
		
	}

	this.loadNewSong = function (chosenSong) {
		this.audio.src = "songs/" + chosenSong;
		this.audio.load();	
		this.songs.push(chosenSong);
		songList.innerText = this.songs;
		// this.songList.load();	
	}

};

// Create instance of Jukebox
var myJukebox = new Jukebox();

// Play Button
playButton.addEventListener('click', function () {
	myJukebox.play();
});

// Pause Button
stopButton.addEventListener('click', function () {
	myJukebox.stop();
});

// When Song Changes
chosenSongElement.addEventListener('change', function () {
	let chosenSong = chosenSongElement.value.split('\\').pop();
	myJukebox.loadNewSong(chosenSong);
});

// Stop Button

// Add Songs to Jukebox
