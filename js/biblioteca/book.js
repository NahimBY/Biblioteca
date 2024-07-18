$(document).ready(function () {
  $('.card').addClass('hidden');
});

$(document).on('click', '.inspectButton', function () {

  $('.card').toggleClass('hidden');
  $('#flipbook').turn('page', 1);

});

$(document).on('click', '.close', function () {
  
  $('.card').toggleClass('hidden');

});

