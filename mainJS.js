// ============== word toggle
var words = ['innovator','student', 'designer', 'developer', 'coder', 'programmer'];
var x=0;

wordtoggle(1);

function wordtoggle(x){
	if (x < 3) {
		setTimeout(function() {
			$("#word1").fadeOut(function() {
				$(this).text(words[x]).fadeIn();
			});
			setTimeout(function() {
				$("#word2").fadeOut(function() {
					$(this).text(words[x+2]).fadeIn();
				});
				x++;
				wordtoggle(x);
			}, 2500);
		}, 3000);
	} else {
		wordtoggle(0);
	}
}

// ============== arrows to change sections


// ========== navbar navigation to different sections
function scrollto(div){
	var extra = 0;
	if (div === 'one') {extra = 60}
	else if (div === 'two') {extra = 130}
	else if (div === 'three') {extra = 150}
	else if (div === 'four') {extra = 150}
	$('html,body').animate({
		scrollTop: $("#"+div).offset().top - extra
	},'slow');
	
};


// ========== sticky navbar on scroll 
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var header = document.getElementById("header");


// var link = $(element);
// var offset = link.offset();
// var bottom = $(header).height() - link.height();
// bottom = offset.top - bottom;

function myFunction() {

  var y = $(this).scrollTop();
      
      // If the document is scrolled 90%
      if( y > 500) {
        // Add the "sticky" class
        $('nav').addClass('sticky');
        $('nav').addClass('visi');

      } else {
        // Else remove it.
        $('nav').removeClass('sticky');
      }		
}


// =========== display video toggle ===========
function displayVid(videoID) {
	var x = document.getElementById(videoID);
	var y = document.getElementById('video1');
	var z = document.getElementById('video2');
	var a = document.getElementById('video3');
	var b = document.getElementById('video4');
	var c = document.getElementById('video5');
	var d = document.getElementById('video6');
	//array of all videos 
	var videos = [x, y, z, a, b, c, d];

	if (x.style.display === 'none') {
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
	var i;
	for (i = 0; i < videos.length; i++) {
		if (videos[i] !== x) {
			videos[i].style.display = 'none';
		}
		
	}
}
