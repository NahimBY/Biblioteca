$(document).ready(function () {
  const $container = $(".container"),
    $pwShowHide = $(".showHidePw"),
    $pwFields = $(".password"),
    $signUp = $(".signup-link"),
    $login = $(".login-link");

  // jQuery code to show/hide password and change icon
  $pwShowHide.on("click", function () {
    $pwFields.each(function () {
      const $pwField = $(this);
      if ($pwField.attr("type") === "password") {
        $pwField.attr("type", "text");
        $pwShowHide.each(function () {
          $(this).removeClass("uil-eye-slash").addClass("uil-eye");
        });
      } else {
        $pwField.attr("type", "password");
        $pwShowHide.each(function () {
          $(this).removeClass("uil-eye").addClass("uil-eye-slash");
        });
      }
    });
  });

  // jQuery code to appear signup and login form
  $signUp.on("click", function () {
    $container.addClass("active");
  });

  $login.on("click", function () {
    $container.removeClass("active");
  });


});
