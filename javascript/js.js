function magic() {
	var list = ["jarno", "google", "listaa kaikki", "idkfa", "helpdesk", "varoitan", "ajastin", "woke", "around", "user"];
	var inputContent = $("#kek").val();
	var check = $.inArray(inputContent, list);
	var indexNum = 0;
	if (check != -1) {
		var current = inputContent
		console.log(check);
		if (current == "jarno") {
			$("#popUp").append(nameContent + xButton);
			$("#popUp").css({
				'visibility': 'visible',
				'opacity': '1',
				'width': '350px',
				'height': '440px'
			});
		} else if (current == "google") {
			$("#popUp").html(googleContent);
			$("#popUp").css({
				'visibility': 'visible',
				'opacity': '1',
				'width': '530px',
				'height': '270px'
			});
		} else if (current == "listaa kaikki") {
			$("#popUp").append(xButton);
			for (i = 0; i < list.length; i++) {
				$("#popUp").append('<li class="listAll">' + list[indexNum++] + '</li>');
			}
			$("#popUp").css({
				'visibility': 'visible',
				'opacity': '1',
				'width': '320px',
				'height': '325px'
			});
		} else if (current == "idkfa") {
			$(".idkfa").show();
			$(".idkfa").css("left", "0");
			if ($('.idkfa').has("li:not")) {
				$('.idkfa').append('<div class="buffer" style="height: 25px;"> </div>');
				for (i = 0; i < list.length; i++) {
					$(".idkfa").append('<li>' + list[indexNum++] + '</li>');
				}
			}
		} else if (current == "helpdesk") {
			alert(completelyLegit);
		} else if (current == "varoitan") {
			$("#popUp").append(xButton + kuuloContent);
			$("#popUp").css({
				'visibility': 'visible',
				'opacity': '1',
				'width': '890px',
				'height': '500px'
			});
		} else if (current == "ajastin") {
			$("#popUp").append(xButton + timerContent);
			$("#popUp").css({
				'visibility': 'visible',
				'opacity': '1',
				'width': '530px',
				'height': '270px'
			});
			timer();
		} else if (current == "woke") {
			
			$("body").empty().prepend(wokeContent);
			matrix();
		} else if (current == "around") {
			$('body').css({
				'animation-name': 'rotate',
				'animation-duration': '14s',
				'animation-iteration-count': 'infinite',
				'animation-timing-function': 'linear',
			});
			var audioElement = document.createElement('audio');
			audioElement.setAttribute('src', 'assets/around.wav');
			audioElement.setAttribute('autoplay', 'autoplay');
			audioElement.loop = true;
			audioElement.Play();
			audioElement.addEventListener('ended', function() {
				this.currentTime = 0;
				this.play();
			}, false);
		} else if (current == "user") {
			alert("Your resolution is " + window.screen.availWidth + "x" + (window.screen.availHeight + 40) + " \nYour operating system is " + OSName + ". \nINSTALL GENTOO.\nINSTALL GENTOO.\nINSTALL GENTOO.\nINSTALL GENTOO.\n");
		}
		// #popUp button behavior
		$("#no").click(function() {
			$(this).css("width", "40");
			$("#popUp").css({
				'visibility': 'hidden',
				'opacity': '0'
			});
			$("#popUp").empty();
			console.log("painettu");
		});
		$("#yes").click(function() {
			//
			$("body").fadeOut(300).delay(300).fadeIn();
			setTimeout(function() {
				window.open('http://www.google.fi', '_blank');
			}, 300);
		});
	};
	shh();
};
//Enter & Esc Functionality
$(document).keyup(function(e) {
	if ($("#kek").is(":focus") && (e.keyCode == 13)) {
		magic();
	}
	if (e.keyCode == 27) {
		$("#no").css("width", "40");
		$("#popUp").css({
			'visibility': 'hidden',
			'opacity': '0'
		});
		$("#popUp").empty();
		console.log("painettu");
	}
});
//Hide idkfa
$(".idkfa").click(function(e) {
	setTimeout(function() {
		$(".idkfa").hide();
	}, 1500);
	$(this).css("left", "-300");
});

function shh() {
	var val = 0;
	if ($("#popUp").find(".video").length > 0) {
		$("#no").mouseover(function() {
			console.log("toimiit");
			$("#no").css({
				left: (Math.floor((Math.random() * 400) + 260)) + "px",
				top: (Math.floor((Math.random() * 400) + 260)) + "px",
			});
			val++
			if (val == 3) {
				$("#no").html('<img src="assets/mad.gif" style="height: 100%;margin-left: -5;">').css("height", "120");
			}
		});
	};
}
//kello
function timer() {
	var seconds = 00;
	var tens = 00;
	var appendTens = document.getElementById("tens")
	var appendSeconds = document.getElementById("seconds")
	var buttonStart = document.getElementById('button-start');
	var buttonStop = document.getElementById('button-stop');
	var buttonReset = document.getElementById('button-reset');
	var Interval;
	buttonStart.onclick = function() {
		clearInterval(Interval);
		Interval = setInterval(startTimer, 10);
	}
	buttonStop.onclick = function() {
		clearInterval(Interval);
	}
	buttonReset.onclick = function() {
		clearInterval(Interval);
		tens = "00";
		seconds = "00";
		appendTens.innerHTML = tens;
		appendSeconds.innerHTML = seconds;
	}

	function startTimer() {
		tens++;
		if (tens < 9) {
			appendTens.innerHTML = "0" + tens;
		}
		if (tens > 9) {
			appendTens.innerHTML = tens;
		}
		if (tens > 99) {
			console.log("seconds");
			seconds++;
			appendSeconds.innerHTML = "0" + seconds;
			tens = 0;
			appendTens.innerHTML = "0" + 0;
		}
		if (seconds > 9) {
			appendSeconds.innerHTML = seconds;
		}
	}
}
// matrix
function matrix() {
	var s = window.screen;
	var width = q.width = s.width;
	var height = q.height;
	var yPositions = Array(300).join(0).split('');
	var ctx = q.getContext('2d');
	var draw = function() {
		ctx.fillStyle = 'rgba(0,0,0,.05)';
		ctx.fillRect(0, 0, width, height);
		ctx.fillStyle = '#0F0';
		ctx.font = '10pt Georgia';
		yPositions.map(function(y, index) {
			text = String.fromCharCode(1e2 + Math.random() * 33);
			x = (index * 10) + 5;
			q.getContext('2d').fillText(text, x, y);
			if (y > 100 + Math.random() * 1e4) {
				yPositions[index] = 0;
			} else {
				yPositions[index] = y + 10;
			}
		});
	};
	RunMatrix();

	function RunMatrix() {
		if (typeof Game_Interval != "undefined") clearInterval(Game_Interval);
		Game_Interval = setInterval(draw, 33);
	}

	function StopMatrix() {
		clearInterval(Game_Interval);
	}
}
var OSName = "Tuntematon OS";
if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
//HTML vomit because javascript doesn't allow for local file calls
var wokeContent = '<canvas id="q" width="800" height="1200">Sorry Browser Wont Support</canvas>'
var timerContent = '<div class="wrapperStop"><h1>Ajastin</h1><p class="timerP"><span id="seconds">00</span>:<span id="tens">00</span></p><button id="button-start">Start</button><button id="button-stop">Stop</button><button id="button-reset">Reset</button></div> '
var googleContent = '<div class="googlewrapper" style=" height: 100%; overflow:hidden; float: left;"><img class="google" src="assets/G.png"></div><button id="no">X</button><h1 style="text-align: left;font-weight: 400;margin-left: 290px;font-size: 42px;margin-top: 0px;">Siirryt&auml;&auml;nk&ouml; googleen?</h1>\<div class="buttonContainer"><button id="yes">KYLL&Auml;</button>\</div>';
var nameContent = '<img src="assets/profiili.jpg" style="max-height: 100%;">'
var kuuloContent = '<video class="video" autoplay="" height="500" width="900"><source src="assets/never.mp4" type="video/mp4">'
var completelyLegit = "Windows has detected some suspicious activity from your IP address. Some Spyware may have caused a security breach at your network location.\nCall Toll Free +1-999-3332-4923\n\nTerms & Conditions\nCopyright 2018 Windows. All rights not reserved\n\nSpyware WannaCry ZeusVirus 4LLURF1L3S4R3B3L0NGT0US.exe\nPlease contact windows certified technicians to rectify your issue. Please don't leave the site."
var xButton = "<button id='no'>X</button>";