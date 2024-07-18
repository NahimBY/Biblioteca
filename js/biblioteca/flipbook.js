$(document).ready(function(){
  var flipbookEL = document.getElementById('flipbook');
  
      window.addEventListener('resize', function(e) {
        flipbookEL.style.width = '';
        flipbookEL.style.height = '';
        $(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
      });
  
      $(flipbookEL).turn({
          width: 900,
          height: 600,
          autoCenter: true
      });
});