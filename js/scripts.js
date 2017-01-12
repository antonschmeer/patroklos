$(document).ready(function(){
	$('.song').on('click touchstart', function(){

		if(typeof time_marker != "undefined") {
			clearInterval(time_marker);			
		}

		var song = $(this);
		var song_loc = $(this).attr('data-song');

		$('#audio-player').empty().html('<audio id="audio-current" controls><source src="' + song_loc + '"type="audio/mpeg">Your browser does not support the audio element.</audio>');
		
		myAudio = document.getElementById('audio-current');
		myAudio.play();

		$('.song').removeClass('song-selected');
		$(this).addClass('song-selected');

		myAudio.addEventListener("ended", function(){
		    song_ended(song);
		});

		$('h3').removeClass('red');

		if(song.hasClass('part-one')){
			$('.0101').addClass('red');
		}
		else if(song.hasClass('part-two')){
			$('.0201').addClass('red');
		}
		else if(song.hasClass('part-three')){
			$('.0301').addClass('red');
		}
		else if(song.hasClass('part-four')){
			$('.0401').addClass('red');
		}
		else{
			$('.0501').addClass('red');
		}

		time_marker = setInterval(function(){
			// console.log(myAudio.currentTime);
			marker = myAudio.currentTime;

			if(song.hasClass('part-one')) {
				if(marker < 62 ) {
					$('h3:not(.0101)').removeClass('red');
					$('.0101').addClass('red');
				}
				else if(marker < 116) {
					$('h3:not(.0102)').removeClass('red');
					$('.0102').addClass('red');
				}
				else if(marker < 129) {
					$('h3:not(.0103)').removeClass('red');
					$('.0103').addClass('red');
				}
				else if(marker < 138) {
					$('h3:not(.0104)').removeClass('red');
					$('.0104').addClass('red');
				}
				else if(marker < 159) {
					$('h3:not(.0105)').removeClass('red');
					$('.0105').addClass('red');
				}
				else if(marker < 173) {
					$('h3:not(.0106)').removeClass('red');
					$('.0106').addClass('red');
				}
				else if(marker < 240) {
					$('h3:not(.0107)').removeClass('red');
					$('.0107').addClass('red');
				}
				else if(marker < 290) {
					$('h3:not(.0108)').removeClass('red');
					$('.0108').addClass('red');
				}
				else if(marker < 327) {
					$('h3:not(.0109)').removeClass('red');
					$('.0109').addClass('red');
				}
				else if(marker < 340) {
					$('h3:not(.0110)').removeClass('red');
					$('.0110').addClass('red');
				}
				else {
					$('h3:not(.0111)').removeClass('red');
					$('.0111').addClass('red');
				}
			}
			else if(song.hasClass('part-two')) {
				if(marker < 51) {
					$('h3:not(.0201)').removeClass('red');
					$('.0201').addClass('red');
				}
				else if(marker < 89) {
					$('h3:not(.0202)').removeClass('red');
					$('.0202').addClass('red');
				}
				else if(marker < 124) { 
					$('h3:not(.0203)').removeClass('red');
					$('.0203').addClass('red');
				}
				else if(marker < 152) { 
					$('h3:not(.0204)').removeClass('red');
					$('.0204').addClass('red');
				}
				else if(marker < 189) { 
					$('h3:not(.0205)').removeClass('red');
					$('.0205').addClass('red');
				}
				else if(marker < 222) { 
					$('h3:not(.0206)').removeClass('red');
					$('.0206').addClass('red');
				}
				else {
					$('h3:not(.0207)').removeClass('red');
					$('.0207').addClass('red');
				}
			}
			else if(song.hasClass('part-three')) {
				if(marker < 30) {
					$('h3:not(.0301)').removeClass('red');
					$('.0301').addClass('red');
				}
				else if(marker < 55) {
					$('h3:not(.0302)').removeClass('red');
					$('.0302').addClass('red');
				}
				else if(marker < 109) {
					$('h3:not(.0303)').removeClass('red');
					$('.0303').addClass('red');
				}
				else if(marker < 220) {
					$('h3:not(.0304)').removeClass('red');
					$('.0304').addClass('red');
				}
				else if(marker < 286) {
					$('h3:not(.0305)').removeClass('red');
					$('.0305').addClass('red');
				}
				else if(marker < 302) {
					$('h3:not(.0306)').removeClass('red');
					$('.0306').addClass('red');
				}
				else {
					$('h3:not(.0307)').removeClass('red');
					$('.0307').addClass('red');
				}
			}
			else if(song.hasClass('part-four')) {
				if(marker < 332) {
					$('h3:not(.0401)').removeClass('red');
					$('.0401').addClass('red');
				}
				else if(marker < 385) {
					$('h3:not(.0402)').removeClass('red');
					$('.0402').addClass('red');
				}
				else if(marker < 552) {
					$('h3:not(.0403)').removeClass('red');
					$('.0403').addClass('red');
				}
				else if(marker < 637) {
					$('h3:not(.0404)').removeClass('red');
					$('.0404').addClass('red');
				}
				else {
					$('h3:not(.0405)').removeClass('red');
					$('.0405').addClass('red');
				}
			}
			else if (song.hasClass('part-five')) {
				if(marker < 107) {
					$('h3:not(.0501)').removeClass('red');
					$('.0501').addClass('red');
				}
				else if(marker < 117) {
					$('h3:not(.0502)').removeClass('red');
					$('.0502').addClass('red');
				}
				else if(marker < 152) {
					$('h3:not(.0503)').removeClass('red');
					$('.0503').addClass('red');
				}
				else if(marker < 197) {
					$('h3:not(.0504)').removeClass('red');
					$('.0504').addClass('red');
				}
				else if(marker < 229) {
					$('h3:not(.0505)').removeClass('red');
					$('.0505').addClass('red');
				}
				else if(marker < 247) {
					$('h3:not(.0506)').removeClass('red');
					$('.0506').addClass('red');
				}
				else {
					$('h3:not(.0507)').removeClass('red');
					$('.0507').addClass('red');
				}
			}
		}, 100);


	})

	function song_ended(song) {		
		clearInterval(time_marker);
		var next_song = song.nextAll('.song:first');
		if(next_song[0]) {
			next_song.click();		  
		}
		else {
			$('#audio-player').empty();
			$('h3').removeClass('red');
			$('.song').removeClass('song-selected');
			// myAudio.currentTime = 0;
			return;
		}
	}

	$('.click-to-play-all').on('click touchstart', function(){
		$('.first-song').click();
	})

	function isPlaying(playerId) {
	    var player = document.getElementById(playerId);
	    return !player.paused && !player.ended && 0 < player.currentTime;	    
	}

	document.body.onkeydown = function(e){
	    if(e.keyCode == 32){
			e.preventDefault();
			if($('#audio-current').length){
		        if(isPlaying('audio-current')){	  
		        	document.getElementById('audio-current').pause();
		        }
		        else {
		        	document.getElementById('audio-current').play();
		        }				
			}
	    }
	}

	var name_spin = function(){

		var word = "ANTON SCHMEER";
		var wordLength = word.length;
		var scrambled = "";

		for (var i = 0; i < wordLength; i++) {
		    var charIndex = Math.floor(Math.random() * word.length);
		    scrambled += word.charAt(charIndex);
		    word = word.substr(0, charIndex) + word.substr(charIndex + 1);
		}

		$('.my-name').text(scrambled);

	}

	var stop_name_spin = function() {
	    $('.my-name').text('ANTON SCHMEER');
	}

	$('.wrapper').scroll(function(){
		name_spin();
		// console.log('scrolling');
	})

	$('.wrapper').scroll(function() {
	    clearTimeout($.data(this, 'scrollTimer'));
	    $.data(this, 'scrollTimer', setTimeout(function() {
	        stop_name_spin();
	        // console.log("Haven't scrolled in 200ms");
	    }, 200));
	});

	// scroll reveal https://github.com/jlmakes/scrollreveal
	window.sr = ScrollReveal();
	sr.reveal('.wrapper h3', {
		container: '.wrapper', 
		reset: true,
		mobile: true,
		easing: 'ease-in-out',
		scale: 1, 
		duration: 1600,
		delay: 0,
		distance: '0px'
	});

	// eliminate the 300ms click delay on mobile browsers https://github.com/ftlabs/fastclick
	$(function() {
	    FastClick.attach(document.body);
	});

});