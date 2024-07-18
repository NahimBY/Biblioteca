$(document).ready(function () {

  const token = localStorage.getItem('token');
  if (token) {
    const decodedToken = jwt_decode(token);
    if (decodedToken && decodedToken.is_admin) {
      window.location.href = '/admin.html';
    } else {
      window.location.href = '/public/biblioteca.html';
    }
  }

  $('#loginForm').on('submit', function (event) {
    event.preventDefault();

    const email = $('.emailLogin').val();
    const password = $('.passwordLogin').val();

    // Extraer matrícula del email
    const matricula = email.split('@')[0];

    // Encriptar la contraseña
    // const encryptedPassword = btoa(password); // Usando Base64 para encriptar (puedes usar una librería más robusta como bcrypt)

    // Preparar los datos para el envío
    const loginData = {
      matricula: matricula,
      email: email,
      password: password
    };

    // Enviar los datos al servidor
    $.ajax({
      url: 'http://localhost:3000/api/login',
      type: 'POST',
      data: JSON.stringify(loginData),
      contentType: 'application/json',
      xhrFields: {
        withCredentials: true
      },
      success: function (response) {
        console.log(response);
        localStorage.setItem('userNombre', response.nombre);
        localStorage.setItem('userEmail', response.email);
        localStorage.setItem('token', response.token);
        if (response.success) {
          if (response.is_admin) {
            window.location.href = '/admin.html';
          } else {
            window.location.href = '/public/biblioteca.html';
          }
        } else {
          var messageError = $(".errorNotification");
          
          messageError.append($('<p>').text("Credenciales incorrectas"));
          
          $(".errorNotification").animate({
            top: 45
          });
          setTimeout(function(){
            $(".errorNotification").animate({
              top: -100
            });
          }, 2000);
          setTimeout(function(){
            messageError.empty();
          }, 3000);
        }
      },
      error: function () {
        var messageError = $(".errorNotification");
          
          messageError.append($('<p>').text("Error en la solicitud. Intente nuevamente."));
          
          $(".errorNotification").animate({
            top: 45
          });
          setTimeout(function(){
            $(".errorNotification").animate({
              top: -100
            });
          }, 2000);
          setTimeout(function(){
            messageError.empty();
          }, 3000);
      }
    });

  });

  function validateForm() {
    const password = $('.passwordRegister').val();
    const confirmPassword = $('.confirmPasswordRegister').val();
    const email = $('.emailRegister').val();
    const emailDomain = email.split('@')[1];
    let isValid = true;
      
    if (emailDomain !== 'alumno.com') {
      $('#emailError').show();
      isValid = false;
    } else {
      $('#emailError').hide();
    }

    if (password !== confirmPassword) {
      $('#passwordError').show();
      isValid = false;
    } else {
      $('#passwordError').hide();
    }


    $('#registerButton').prop('disabled', !isValid);
  }

  $('.passwordRegister, .confirmPasswordRegister, .emailRegister').on('input', validateForm);


  
  $('#registerForm').on('submit', function (event) {
    event.preventDefault();

    const nombre = $('.nombreRegister').val().toUpperCase();
    const email = $('.emailRegister').val();
    const password = $('.passwordRegister').val();
    const is_admin = 0;

    // Extraer matrícula del email
    const matricula = email.split('@')[0];

    // Encriptar la contraseña
    // const encryptedPassword = btoa(password); // Usando Base64 para encriptar (puedes usar una librería más robusta como bcrypt)

    // Preparar los datos para el envío
    const registerData = {
      nombre: nombre,
      matricula: matricula,
      email: email,
      password: password,
      is_admin: is_admin
    };

    // Enviar los datos al servidor
    $.ajax({
      url: 'http://localhost:3000/api/register',
      type: 'POST',
      data: JSON.stringify(registerData),
      contentType: 'application/json',
      success: function (response) {
        console.log('Response from server:', response); // Para depuración
        if (response.success) {
          
          var message = $(".notification");
          
          message.append($('<p>').text("¡Registro exitoso!"));
          
          $(".notification").animate({
            top: 45
          });
          setTimeout(function(){
            $(".notification").animate({
              top: -100
            });
          }, 2000);
          setTimeout(function(){
            message.empty();
          }, 3000);

          $('.nombreRegister').val('');
          $('.emailRegister').val('');
          $('.passwordRegister').val('');
          $('.confirmPasswordRegister').val('');

          $('.login-link').click();
        } else {
          var messageError = $(".errorNotification");
          
          messageError.append($('<p>').text("Error en el registro"));
          
          $(".errorNotification").animate({
            top: 45
          });
          setTimeout(function(){
            $(".errorNotification").animate({
              top: -100
            });
          }, 2000);
          setTimeout(function(){
            messageError.empty();
          }, 3000);
        }
      },
      error: function (xhr, status, error) {
        if (xhr.status === 400) {
          var messageError = $(".errorNotification");
          
          messageError.append($('<p>').text("El correo electrónico o la matrícula ya están registrados"));
          
          $(".errorNotification").animate({
            top: 45
          });
          setTimeout(function(){
            $(".errorNotification").animate({
              top: -100
            });
          }, 2000);
          setTimeout(function(){
            messageError.empty();
          }, 3000);
        } else{
          var messageError = $(".errorNotification");
          
          messageError.append($('<p>').text("Error en la solicitud. Intente nuevamente más tarde"));
          
          $(".errorNotification").animate({
            top: 45
          });
          setTimeout(function(){
            $(".errorNotification").animate({
              top: -100
            });
          }, 2000);
          setTimeout(function(){
            messageError.empty();
          }, 3000);
        }
      }
    });
  });

});