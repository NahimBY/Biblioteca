$(document).ready(function () {

  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/login.html';
  }

  const username = localStorage.getItem('userNombre');
  $('.username').text(username);

  function insertarRegistrosPorGenero(tablaId, genero, registros) {
    var tbody = $(`#${tablaId} tbody`);
    tbody.empty();

    var registrosFiltrados = registros.filter(function (registro) {
      return registro.Genero === genero;
    });

    registrosFiltrados.forEach(function (registro) {
      var fila = $('<tr>');

      fila.append($('<td class="inspectButton" title="Click aquí para inspeccionar">').text(registro.Titulo));
      fila.append($('<td class="inspectButton" title="Click aquí para inspeccionar">').text(registro.Autor));
      fila.append($('<td class="inspectButton" title="Click aquí para inspeccionar">').text(registro.Año));
      fila.append($('<td class="inspectButton" title="Click aquí para inspeccionar">').text(registro.Paginado));
      fila.append($('<td class="inspectButton" title="Click aquí para inspeccionar">').text(registro.Editorial));
      fila.append($('<td class="inspectButton">').html(`
            <button class="btn" title="Inspeccionar">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" ></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12ZM12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z" ></path> </g></svg>
            </button>
        `));

      tbody.append(fila);
    });

  }

  function generosLibros(registros) {
    insertarRegistrosPorGenero('tablaCientifica', 'Científica', registros);
    insertarRegistrosPorGenero('tablaLiteratura', 'Literatura', registros);
    insertarRegistrosPorGenero('tablaBiografias', 'Biografías', registros);
    insertarRegistrosPorGenero('tablaHistoria', 'Historia', registros);
    insertarRegistrosPorGenero('tablaPsicologia', 'Psicologia', registros);
    insertarRegistrosPorGenero('tablaNegocios', 'Negocios', registros);
    insertarRegistrosPorGenero('tablaTecnologia', 'Tecnologia', registros);
    insertarRegistrosPorGenero('tablaSociales', 'Sociales', registros);
    insertarRegistrosPorGenero('tablaArte', 'Arte', registros);
    insertarRegistrosPorGenero('tablaSalud', 'Salud', registros);
    insertarRegistrosPorGenero('tablaDerecho', 'Derecho', registros);
    insertarRegistrosPorGenero('tablaIdiomas', 'Idiomas', registros);
    insertarRegistrosPorGenero('tablaFilosofia', 'Filosofía', registros);
  }


  ///////////////////////////////////////////////////////////////////////////////////

  $.ajax({
    url: 'http://localhost:3000/api/mostrarLibrosActivos',
    method: 'GET',
    success: function (data) {
      // console.log(data);
      generosLibros(data);
    },
    error: function (error) {
      console.error('Error al obtener los libros activos:', error);
    }
  });

  $(document).on('click', '.vistasPanel', function(){
    $.ajax({
      url: 'http://localhost:3000/api/mostrarLibrosActivos',
      method: 'GET',
      success: function (data) {
        // console.log(data);
        generosLibros(data);
      },
      error: function (error) {
        console.error('Error al obtener los libros activos:', error);
      }
    });
  });

  ////////////////////////////////////////////////////////////////////////////////

  function splitTextIntoPages(text, maxLength) {
    var pages = [];
    var currentPage = '';

    var words = text.split(' ');
    words.forEach(function (word) {
      if ((currentPage + word).length > maxLength) {
        pages.push(currentPage);
        currentPage = '';
      }
      currentPage += word + ' ';
    });

    if (currentPage) {
      pages.push(currentPage);
    }

    return pages;
  }

  $(document).on('click', '.inspectButton', function () {

    $('.prestar').attr('disabled', true);
    $('.prestar').css({
      'pointer-events': 'none',
      'opacity': '0.5'
    });

    // Reset variables for new book

    var title = '';
    var author = '';
    var year = '';
    var pagination = '';
    var publisher = '';
  
    var row = $(this).closest('tr');
    title = row.find('td:nth-child(1)').text();
    author = row.find('td:nth-child(2)').text();
    year = row.find('td:nth-child(3)').text();
    pagination = row.find('td:nth-child(4)').text();
    publisher = row.find('td:nth-child(5)').text();
  
    $.ajax({
      url: 'http://localhost:3000/api/book-info',
      type: 'GET',
      data: { title: title },
      success: function (response) {
        // Reset flipbook
        var flipbook = $('#flipbook');
        flipbook.turn('destroy'); // Destroy existing flipbook
  
        // Remove all pages except the cover
        flipbook.empty();
  
        // Create new flipbook with cover
        flipbook.append('<div class="page"><img id="bookCover" src="" alt=""></div>');
        $('#bookCover').attr('src', response.coverUrl || '').show();
  
        var secondPageContent = `
          <div class="page bookInfoPage">
            <div class="infoPosition">
              <h2>${title}</h2>
              <p>${author}</p>
              <p>${year}</p>
              <p>${pagination}</p>
              <p>${publisher}</p>
            </div>
          </div>
        `;
        flipbook.append(secondPageContent);
  
        // Check and add synopsis
        if (response.description) {
          var description = response.description;
          var fragments = splitTextIntoPages(description, 1000); // Adjust 1000 based on your page size
  
          fragments.forEach(function (fragment, index) {
            if (index === 0) {
              // Add title only on the first synopsis page
              flipbook.append('<div class="page sinopsisPage"><div class="sinopsis"><h1 class="sinopsisTitle">Sinopsis</h1><br><p>' + fragment + '</p></div></div>');
            } else {
              flipbook.append('<div class="page sinopsisPage"><div class="sinopsis"><p>' + fragment + '</p></div></div>');
            }
          });
        }
  
        $.ajax({
          url: 'http://localhost:3000/api/mostrarLibrosActivos',
          type: 'GET',
          success: function (activeBooks) {
            var book = activeBooks.find(book => book.Titulo.trim().toLowerCase() === title.toLowerCase());
            if (book) {
              var cantidadMostrar = book.Cantidad - 1;
              if (cantidadMostrar < 0) {
                cantidadMostrar = 0; // Ensure quantity is not negative
              }
              $('.disponibilidad').text(`Disponibles: ${cantidadMostrar}`);
              $('.prestar').attr('data-cantidad', cantidadMostrar);
            } else {
              console.log('El libro no está activo.');
            }
          },
          error: function (error) {
            console.error('Error al obtener libros activos:', error);
          }
        });
  
        $('#fecha-ini').off('change').on('change', function () {
          var fechaInicialVal = $(this).val();
          var fechaInicial = new Date($(this).val());
          var hoy = new Date();
  
          if (fechaInicialVal === '' || isNaN(Date.parse(fechaInicialVal))) {
            $('.prestar').attr('disabled', true);
            $('.prestar').css({
                'pointer-events': 'none',
                'opacity': '0.5'
            });
            $('.errorDate').text('Favor de ingresar una fecha.');
            $('#fecha-dev').val('');
            return;
          }
          
          var fechaInicialString = Date.parse(fechaInicial.toISOString().split('T')[0]);
          var hoyString = Date.parse(hoy.toISOString().split('T')[0]);
    
  
          if (fechaInicialString < hoyString) {
            $('.prestar').attr('disabled', true);
            $('.prestar').css({
              'pointer-events': 'none',
              'opacity': '0.5'
            });
            $('.errorDate').text('La fecha inicial no puede ser anterior a la fecha actual.');
            $('#fecha-dev').val(''); // Clear return date if start date is invalid
          } else {
            $('.prestar').attr('disabled', false);
            $('.prestar').css({
              'pointer-events': 'auto',
              'opacity': '1'
            });
            $('.errorDate').text(''); // Clear error message if date is valid
  
            var fechaDevolucion = new Date(fechaInicial);
            fechaDevolucion.setDate(fechaDevolucion.getDate() + 5);
  
            var year = fechaDevolucion.getFullYear();
            var month = String(fechaDevolucion.getMonth() + 1).padStart(2, '0');
            var day = String(fechaDevolucion.getDate()).padStart(2, '0');
            var fechaDevolucionFormatted = `${year}-${month}-${day}`;
  
            $('#fecha-dev').val(fechaDevolucionFormatted);
          }
        });
  
        $(document).off('click', '.prestar').on('click', '.prestar', function () {
          var fechaInicio = $('#fecha-ini').val();
          var fechaDevolucion = $('#fecha-dev').val();
  
          var token = localStorage.getItem('token');
          var tokenPayload = JSON.parse(atob(token.split('.')[1]));
          var matricula = tokenPayload.matricula;
  
          $.ajax({
            url: 'http://localhost:3000/api/numPrestamos',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ matricula: matricula }),
            success: function (response) {
              var numPrestamos = response.num_prestamos;
  
              if (numPrestamos >= 5) {
                $('.prestamo-unsuccessful').animate({
                  top: 300
                });
                setTimeout(function () {
                  $('.prestamo-unsuccessful').animate({
                    top: 100
                  });
                }, 2000);
                return;
              }
  
              $.ajax({
                url: 'http://localhost:3000/api/mostrarLibrosActivos',
                type: 'GET',
                success: function (activeBooks) {
                  var bookData = activeBooks.find(bookData => bookData.Titulo.trim().toLowerCase() === title.toLowerCase());
                  if (bookData) {
                    var idLibro = bookData.id_libro;
                    
                    $.ajax({
                      url: 'http://localhost:3000/api/prestamo',
                      type: 'POST',
                      contentType: 'application/json',
                      headers: { 'Authorization': 'Bearer ' + token },
                      data: JSON.stringify({ id_libro: idLibro, titulo: title, fecha_inicio: fechaInicio, fecha_devolucion: fechaDevolucion }),
                      success: function (response) {
                        
                        $.ajax({
                          url: 'http://localhost:3000/api/mostrarLibrosActivos',
                          method: 'GET',
                          success: function (data) {
                            // console.log(data);
                            generosLibros(data);
                          },
                          error: function (error) {
                            console.error('Error al obtener los libros activos:', error);
                          }
                        });
                        
                        $('.card').addClass('hidden');
                        $('.prestamo-successful').animate({
                          right: 18
                        });
                        setTimeout(function () {
                          $('.prestamo-successful').animate({
                            right: -300
                          });
                        }, 2000);
  
                        $('#fecha-ini').val('');
                        $('#fecha-dev').val('');
                        title = '';
                        author = '';
                        year = '';
                        pagination = '';
                        publisher = '';
  
                        actualizarHistorial();
                      },
                      error: function (error) {
                        console.error('Error al registrar el prestamo:', error);
                      }
                    });
                  } else {
                    console.error('El libro no está activo.');
                  }
                },
                error: function (error) {
                  console.error('Error al obtener libros activos:', error);
                }
              });
            },
            error: function (error) {
              console.error('Error al contar los préstamos:', error);
            }
          });
        });
  
        // Reinitialize flipbook
        flipbook.turn({
          width: 900,
          height: 600,
          autoCenter: true
        });

        // Reset dates
        $('#fecha-ini').val('');
        $('#fecha-dev').val('');
        $('.errorDate').text('');

      },
      error: function (error) {
        console.error('Error:', error);
        $('#bookCover').hide();
        $('.sinopsisPage').remove();
      }
    });
  });
  

  /////////////////////////////////////////////////////////////////////////////

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  function insertarHistorial(registros) {
    var tbody = $('#tablaHistorial tbody');
    tbody.empty();

    registros.forEach(function (registro) {
      var fila = $('<tr>');

      fila.append($('<td>').text(registro.titulo));
      fila.append($('<td>').text(formatDate(registro.fecha_inicio)));
      fila.append($('<td>').text(formatDate(registro.fecha_devolucion)));

      tbody.append(fila);
    });

  }

  function actualizarHistorial() {
    $.ajax({
      url: 'http://localhost:3000/api/mostrarPrestamos',
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token') // Incluir el token en la cabecera
      },
      success: function (data) {
        // console.log(data);
        insertarHistorial(data);
      },
      error: function (error) {
        console.error('Error al obtener los prestamos:', error);
      }
    });
  }

  /////////////////////////////////////////////////////////////////////////////

  $("#history-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(".bg-user").removeClass("user-clicked");
    $(".user > ul > li").removeClass("user-options");

    $(this).addClass("selected");
    $(`.vista1-panel,
      .vista2-panel,
      .vista3-panel,
      .vista4-panel,
      .vista5-panel,
      .vista6-panel,
      .vista7-panel,
      .vista8-panel,
      .vista9-panel,
      .vista10-panel,
      .vista11-panel,
      .vista12-panel,
      .vista13-panel
      `).removeClass("selected");

    $(".history").show();
    $(`.vista1,
      .vista2,
      .vista3,
      .vista4,
      .vista5,
      .vista6,
      .vista7,
      .vista8,
      .vista9,
      .vista10,
      .vista11,
      .vista12,
      .vista13
      `).hide();

    actualizarHistorial();

  });

  /////////////////////////////////////////////////////////////////////////////

});
