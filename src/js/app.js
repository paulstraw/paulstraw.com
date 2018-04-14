(function() {
  // Pull in the YT player API
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/player_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  function dimTheLights() {
    document.getElementById('the-lights').classList.add('off')
  }

  function raiseTheLights() {
    document.getElementById('the-lights').classList.remove('off')
  }

  window.onYouTubePlayerAPIReady = function() {
    new YT.Player("vlog-frame", {
      events: {
        onStateChange: function(e) {
          if (e.data === YT.PlayerState.PLAYING) {
            dimTheLights()
          } else if (e.data === YT.PlayerState.PAUSED) {
            raiseTheLights()
          }
        }
      }
    })
  }
})()
