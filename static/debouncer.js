$(document).ready(function() {

  var b = document.getElementById('butt');

  b.addEventListener('click', DB(log.bind(null)));

  function log() {
      console.log('log');
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
