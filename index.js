

setImages({init: true});

function setImages(opts) {
  var cameraCount = 9;
  for (var i = 0; i <= cameraCount; i++) {
    var el = document.getElementById('cam-' + i);
    if (!el.complete) return;

    el.src = 'http://192.168.1.110/dvr/wwwroot/jstream.cgi?chid=' + i + '&time=' + Date.now();

    if (opts.init) el.addEventListener('click', handleClick);
  }
}

function handleClick(e) {
  var active = document.querySelector('.zoom');
  if (active) active.classList.remove('zoom');
  e.target.classList.add('zoom');
}

setInterval(function() {
  setImages({init: false});
}, 2000);
