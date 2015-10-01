$(document).ready(function() {

  var b = document.getElementById('butt');
  var fires = document.getElementById('fires');
  fires.innerHTML = 0;

  b.addEventListener('click', DB(log));

  function log() {
      fires.innerHTML = parseInt(fires.innerHTML) + 1;
  }

  function DB(F) {

    var id = null;
    return function() {
      if (id) {
          clearTimeout(id);
      }
      id = setTimeout(F, 1000);
    }
  }
});
