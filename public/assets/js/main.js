var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

      var imgs = document.images,
          len = imgs.length,
          counter = 0;

      [].forEach.call( imgs, function( img ) {
          if(img.complete)
            incrementCounter();
          else
            img.addEventListener( 'load', incrementCounter, false );
      } );

      function incrementCounter() {
          counter++;
          if ( counter === len ) {
              console.log( 'All images loaded!' );
              document.getElementById("loader").style.display = "none"
              document.getElementById("content").style = "display:block;opacity: 1;"
          }
      }

      document.addEventListener('DOMContentLoaded', function() {

        document.onkeydown = function(e){
            e = e || window.event;
            var key = e.which || e.keyCode;
            var w = window.innerWidth;
            var h = window.innerHeight;
            var d = window.navigator.userAgent
            var o = window.orientation
            var t = new Date();
            var inner = "=========== Window Details ============= \nwidth: "+w+"\nheight: "+h+ "\ndevice: "+d+"\norientation: "+o+"\ntimestamp: "+t
            if(key===32){
                alert(inner)
            }
        }
      });