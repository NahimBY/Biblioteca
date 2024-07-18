if (window.innerWidth >= 1000) {
  $(function () {
    let shrinkHeader = 1026;
    $(window).scroll(function () {
      let scroll = getCurrentScroll();
      if (scroll >= shrinkHeader) {
        $(".mision").css("left", "-10vh");
        setTimeout(function () {
          $(".mision").css("opacity", "1");
        }, 20);
      } else {
        $(".mision").css("left", "-30vh");
        setTimeout(function () {
          $(".mision").css("opacity", "0");
        }, 20);
      }
    });
    function getCurrentScroll() {
      return window.pageYOffset;
    }
  });
}

if (window.innerWidth >= 1000) {
  $(function () {
    let shrinkHeader = 1416;
    $(window).scroll(function () {
      let scroll = getCurrentScroll();
      if (scroll >= shrinkHeader) {
        $(".vision").css("right", "-17vh");
        setTimeout(function () {
          $(".vision").css("opacity", "1");
        }, 20);
      } else {
        $(".vision").css("right", "-60vh");
        setTimeout(function () {
          $(".vision").css("opacity", "0");
        }, 20);
      }
    });
    function getCurrentScroll() {
      return window.pageYOffset;
    }
  });
}

if (window.innerWidth >= 1000) {
  $(function () {
    let shrinkHeader = 1938;
    $(window).scroll(function () {
      let scroll = getCurrentScroll();
      if (scroll >= shrinkHeader) {
        $(".valores").css("left", "-10vh");
        setTimeout(function () {
          $(".valores").css("opacity", "1");
        }, 20);
      } else {
        $(".valores").css("left", "-30vh");
        setTimeout(function () {
          $(".valores").css("opacity", "0");
        }, 20);
      }
    });
    function getCurrentScroll() {
      return window.pageYOffset;
    }
  });
}
