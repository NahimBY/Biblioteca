$(document).ready(function(){

  $('.us').addClass('not-clicked');
  $('.fr').addClass('not-clicked');
  $('.mx, .us, .fr').css('display', 'block');

  let changeBtn = 1;

  $('.mx').click(function(){
    
    $('.mx').css('border-radius', '3vh 0 0 3vh');

    if (changeBtn == 1) {
      $('.mx').addClass('clicked');
      setTimeout(function() {
        $('.mx').css('border-radius', '3vh 0 0 0');
      }, 20);
      $('.us').css('border-radius', '0 0 0 0');
      $('.us').removeClass('not-clicked');
      $('.us').addClass('clicked');
      $('.fr').css('border-radius', '0 0 0 3vh');
      $('.fr').removeClass('not-clicked');
      $('.fr').addClass('clicked');

      changeBtn = 0;
    } else {
      $('.mx').removeClass('clicked');
      setTimeout(function() {
        $('.mx').css('border-radius', '3vh 0 0 3vh');
      }, 20);
      $('.us').css('border-radius', '3vh 0 0 3vh');
      $('.us').addClass('not-clicked');
      $('.fr').css('border-radius', '3vh 0 0 3vh');
      $('.fr').addClass('not-clicked');

      changeBtn = 1;
    }
  });
  
  $('.us').click(function(){
    
    $('.us').removeClass('not-clicked');
    $('.us').css('border-radius', '3vh 0 0 3vh');

    if (changeBtn == 1) {
      $('.us').addClass('clicked');
      setTimeout(function() {
        $('.us').css('border-radius', '0 0 0 0');
      }, 20);
      $('.mx').css('border-radius', '3vh 0 0 0');
      $('.mx').removeClass('not-clicked');
      $('.mx').addClass('clicked');
      $('.fr').css('border-radius', '0 0 0 3vh');
      $('.fr').removeClass('not-clicked');
      $('.fr').addClass('clicked');

      changeBtn = 0;
    } else {
      $('.us').removeClass('clicked');
      setTimeout(function() {
        $('.us').css('border-radius', '3vh 0 0 3vh');
      }, 20);
      $('.mx').css('border-radius', '3vh 0 0 3vh');
      $('.mx').addClass('not-clicked');
      $('.fr').css('border-radius', '3vh 0 0 3vh');
      $('.fr').addClass('not-clicked');

      changeBtn = 1;
    }
  });
  
  $('.fr').click(function(){
    
    $('.fr').removeClass('not-clicked');
    $('.fr').css('border-radius', '3vh 0 0 3vh');

    if (changeBtn == 1) {
      $('.fr').addClass('clicked');
      setTimeout(function() {
        $('.fr').css('border-radius', '0 0 0 3vh');
      }, 20);
      $('.mx').css('border-radius', '3vh 0 0 0');
      $('.mx').removeClass('not-clicked');
      $('.mx').addClass('clicked');
      $('.us').css('border-radius', '0 0 0 0');
      $('.us').removeClass('not-clicked');
      $('.us').addClass('clicked');

      changeBtn = 0;
    } else {
      $('.fr').removeClass('clicked');
      setTimeout(function() {
        $('.fr').css('border-radius', '3vh 0 0 3vh');
      }, 20);
      $('.mx').css('border-radius', '3vh 0 0 3vh');
      $('.mx').addClass('not-clicked');
      $('.us').css('border-radius', '3vh 0 0 3vh');
      $('.us').addClass('not-clicked');

      changeBtn = 1;
    }
  });

});
