// language=JQuery
$(document).ready(function() {
  var statusIcon;
  var player;

  $("#contentDiv").load("content/introduction.html");

  $("#introduction").on("click", function () {
    $("#contentDiv").load("content/introduction.html");
    <!--$('html, body').animate({ scrollTop: $("#contentDiv").offset().top }, 1000);-->
  });

  $("#titleSong").on("click", function () {
    player = document.getElementById('audioPlayer');
	 track = player.src.replace(/^.*[\\\/]/, '');
	 l = document.getElementById("titleSong");

    if (track.localeCompare("Balamukundam-song.mp4") == 0) {
		if(!player.paused) {
			player.pause();
			$(l).removeClass('fa-stop-circle');
			$(l).addClass('fa-play-circle');
		} else {
			$(l).removeClass('fa-play-circle');
			$(l).addClass('fa-stop-circle');
			player.play();
		}
    } else {
		 if(!player.paused) {	 	
		 	c = document.getElementById(track);
			$(c).removeClass('fa-stop-circle');
			$(c).addClass('fa-play-circle');
			player.pause();
	    }

		player.src = "media/Balamukundam-song.mp4";
		player.play();
		$(l).removeClass('fa-play-circle');
		$(l).addClass('fa-stop-circle');		
	}
  });

  $("#prayers").on("click", function () {
    $("#contentDiv").load("content/prayers.html");
    <!--$('html, body').animate({ scrollTop: $("#contentDiv").offset().top }, 1000);-->
  });

  $("#gallery").on("click", function () {
    $("#contentDiv").load("content/gallery.html");
    <!--$('html, body').animate({ scrollTop: $("#contentDiv").offset().top }, 1000);-->
  });

  $("#testimonials").on("click", function () {
    $("#contentDiv").load("content/testimonials.html");
    <!--$('html, body').animate({ scrollTop: $("#contentDiv").offset().top }, 1000);-->
  });

  $("#audioLessions").on("click", function () {
    $("#contentDiv").load("content/audioLessons.html");
    <!--$('html, body').animate({ scrollTop: $("#contentDiv").offset().top }, 1000);-->
  });

  $("#classBooks").on("click", function () {
    $("#contentDiv").load("content/classBooks.html");
    <!--$('html, body').animate({ scrollTop: $("#contentDiv").offset().top }, 1000);-->
  });

  $("#team").on("click", function () {
    $("#contentDiv").load("content/team.html");
    <!--$('html, body').animate({ scrollTop: $("#contentDiv").offset().top }, 1000);-->
  });

  $("#contact").on("click", function () {
    $("#contentDiv").load("content/contact.html");
    <!--$('html, body').animate({ scrollTop: $("#contentDiv").offset().top }, 1000);-->
  });

  // Enable only 1 audio player at any point of time
  $(function() {
    $("audio").on("play", function() {
      $("audio").not(this).each(function(index, audio) {
        audio.pause();
      });
    });
  });
});
