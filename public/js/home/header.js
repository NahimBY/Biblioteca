$(document).ready(function(){

  $('#biblioteca').click(function(){
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      if (decodedToken && decodedToken.is_admin) {
        window.location.href = '/admin';
      } else {
        window.location.href = '/biblioteca';
      }
    } else {
      window.location.href = '/login';
    }
  });

  $('#logo-box').animate({
    right: '0'
  });

  const toggle = document.getElementById("toggle");

  toggle.addEventListener("click", ()=>{
      toggle.classList.toggle("active");
  })
 
});


if (window.innerWidth >= 1000) {
  $(function(){
    let shrinkHeader = 675;
      $(window).scroll(function() {
        let scroll = getCurrentScroll();
          if ( scroll >= shrinkHeader ){
            $('header').addClass('scroll-change-color');
          } else {
            $('header').removeClass('scroll-change-color');
          }
      });
    function getCurrentScroll() {
        return window.pageYOffset;
        }
  });
}
