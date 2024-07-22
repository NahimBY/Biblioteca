$(document).ready(function () {

  const token = localStorage.getItem('token');
  
  if (token) {
    const decodedToken = jwt_decode(token);
    if (decodedToken && decodedToken.is_admin) {}
    else {
      window.location.href = '../../views/biblioteca.html';
    }
  } else {
    window.location.href = '../../views/login.html';
  }


  $(".vista1-panel").addClass("selected");

  $(".vista1-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(".vista1-panel").addClass("selected");
    $(`.vista2-panel,
      .vista3-panel,
      .vista4-panel,
      .vista5-panel,
      .vista6-panel
      `).removeClass("selected");

    $(".vista1").show();
    $(`.vista2,
      .vista3,
      .vista4,
      .vista5,
      .vista6
      `).hide();
  });

  $(".vista2-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(".vista2-panel").addClass("selected");
    $(`.vista1-panel,
      .vista3-panel,
      .vista4-panel,
      .vista5-panel,
      .vista6-panel
      `).removeClass("selected");

    $(".vista2").show();
    $(`.vista1,
      .vista3,
      .vista4,
      .vista5,
      .vista6
      `).hide();
  });

  $(".vista3-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(".vista3-panel").addClass("selected");
    $(`.vista1-panel,
      .vista2-panel,
      .vista4-panel,
      .vista5-panel,
      .vista6-panel
      `).removeClass("selected");

    $(".vista3").show();
    $(`.vista1,
      .vista2,
      .vista4,
      .vista5,
      .vista6
      `).hide();
  });

  $(".vista4-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(".vista4-panel").addClass("selected");
    $(`.vista1-panel,
      .vista2-panel,
      .vista3-panel,
      .vista5-panel,
      .vista6-panel
      `).removeClass("selected");

    $(".vista4").show();
    $(`.vista1,
      .vista2,
      .vista3,
      .vista5,
      .vista6
      `).hide();
  });

  $(".vista5-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(".vista5-panel").addClass("selected");
    $(`.vista1-panel,
      .vista2-panel,
      .vista3-panel,
      .vista4-panel,
      .vista6-panel
      `).removeClass("selected");

    $(".vista5").show();
    $(`.vista1,
      .vista2,
      .vista3,
      .vista4,
      .vista6
      `).hide();
  });

  $(".vista6-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(".vista6-panel").addClass("selected");
    $(`.vista1-panel,
      .vista2-panel,
      .vista3-panel,
      .vista4-panel,
      .vista5-panel
      `).removeClass("selected");

    $(".vista6").show();
    $(`.vista1,
      .vista2,
      .vista3,
      .vista4,
      .vista5
      `).hide();
  });
  

  const username = localStorage.getItem('userNombre');
  $('.username').text(username);

  function insertarRegistros(tablaId, registros) {
    var tbody = $(`#${tablaId} tbody`);
    tbody.empty();
  
    registros.forEach(function (registro) {
      var fila = $('<tr>');
  
      fila.append($('<td class="inspectButton">').text(registro.id_libro));
      fila.append($('<td class="inspectButton">').text(registro.Titulo));
      fila.append($('<td class="inspectButton">').text(registro.Autor));
      fila.append($('<td class="inspectButton">').text(registro.Año));
      fila.append($('<td class="inspectButton">').text(registro.Paginado));
      fila.append($('<td class="inspectButton">').text(registro.Editorial));
      fila.append($('<td class="inspectButton">').html(`
        <button class="btn" title="Editar">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M11 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40974 4.40973 4.7157 4.21799 5.09202C4 5.51985 4 6.0799 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V12.5M15.5 5.5L18.3284 8.32843M10.7627 10.2373L17.411 3.58902C18.192 2.80797 19.4584 2.80797 20.2394 3.58902C21.0205 4.37007 21.0205 5.6364 20.2394 6.41745L13.3774 13.2794C12.6158 14.0411 12.235 14.4219 11.8012 14.7247C11.4162 14.9936 11.0009 15.2162 10.564 15.3882C10.0717 15.582 9.54378 15.6885 8.48793 15.9016L8 16L8.04745 15.6678C8.21536 14.4925 8.29932 13.9048 8.49029 13.3561C8.65975 12.8692 8.89125 12.4063 9.17906 11.9786C9.50341 11.4966 9.92319 11.0768 10.7627 10.2373Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>
        </button>
      `));
  
      tbody.append(fila);
    });
  }
  
  function insertarRegistrosLotes(registros) {
    var tbody = $(`#tablaLotes tbody`);
    tbody.empty();
  
    registros.forEach(function (registro) {
      var fila = $('<tr>');
  
      fila.append($('<td>').text(registro.id_libro));
      fila.append($('<td>').text(registro.Titulo));
      fila.append($('<td>').text(registro.Autor));
      fila.append($('<td>').text(registro.Cantidad));
      
      var estadoTd = $('<td>');
      if (registro.Estado === 'Disponible') {
        estadoTd.html('<span class="status-label status-available">Disponible</span>');
      } else if (registro.Estado === 'No disponible') {
        estadoTd.html('<span class="status-label status-unavailable">No disponible</span>');
      }

      fila.append(estadoTd);
      tbody.append(fila);
    });
  }


  ///////////////////////////////////////////////////////////////////////////////////

  $('.bg-user').click(function() {
    $(this).toggleClass('user-clicked');
    $('.user > ul > li').toggleClass('user-options');
  });

  $('#logout').click(function() {
    localStorage.clear();
    window.location.href = '../../views/index.html';
  });


  /////////////////////////////////////////////////////////////////////////////


  function formatDateToUTC6(dateString) {
    // Crear un objeto Date a partir de la cadena de fecha
    var date = new Date(dateString);
    
    // Obtener la fecha en UTC y ajustar al formato "dd-mm-yyyy"
    var day = String(date.getUTCDate()).padStart(2, '0');
    var month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Meses empiezan en 0
    var year = date.getUTCFullYear();
    
    return `${day}-${month}-${year}`;
  }

  function insertarPrestamos(registros) {
    var tbody = $('#tablaPrestamos tbody');
    tbody.empty();

    registros.forEach(function (registro) {
      var fila = $('<tr>');

      fila.append($('<td class="btnCompleted">').text(registro.id));
      fila.append($('<td class="btnCompleted">').text(registro.matricula));
      fila.append($('<td class="btnCompleted">').text(registro.email));
      fila.append($('<td class="btnCompleted">').text(registro.id_libro));
      fila.append($('<td class="btnCompleted">').text(registro.titulo));
      fila.append($('<td class="btnCompleted">').text(formatDateToUTC6(registro.fecha_inicio)));
      fila.append($('<td class="btnCompleted">').text(formatDateToUTC6(registro.fecha_devolucion)));
      
      var estadoTd = $('<td>');
      if (registro.estado === 'Completado') {
        estadoTd.html('<span class="status-label status-available">Completado</span>');
      } else if (registro.estado === 'Pendiente') {
        estadoTd.html('<span class="status-label status-unavailable">Pendiente</span>');
      }

      fila.append(estadoTd);
      
      fila.append($('<td class="btnCompleted">').html(`
        <button title="Completar">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.48334 5.25942C6.33891 5.38732 5.42286 6.29057 5.29045 7.42268C4.93476 10.4638 4.93476 13.5361 5.29045 16.5772C5.42286 17.7093 6.33891 18.6126 7.48334 18.7405C10.4602 19.0732 13.5398 19.0732 16.5166 18.7405C17.6611 18.6126 18.5771 17.7093 18.7095 16.5772C18.9651 14.3921 19.037 12.1909 18.9253 9.99668C18.9224 9.94002 18.9436 9.88475 18.9837 9.84463L20.0225 8.80585C20.1427 8.68562 20.3482 8.7608 20.3609 8.93036C20.557 11.5353 20.5031 14.1543 20.1994 16.7515C19.9845 18.5884 18.5096 20.0271 16.6832 20.2312C13.5957 20.5763 10.4043 20.5763 7.31673 20.2312C5.49035 20.0271 4.01545 18.5884 3.8006 16.7515C3.43137 13.5945 3.43137 10.4053 3.8006 7.24843C4.01545 5.41146 5.49035 3.97282 7.31673 3.7687C10.4043 3.42362 13.5957 3.42362 16.6832 3.7687C17.3265 3.84059 17.9261 4.06562 18.4425 4.40725C18.5441 4.47448 18.5542 4.61732 18.468 4.70346L17.6652 5.50635C17.5995 5.57202 17.4976 5.58307 17.4158 5.5392C17.1423 5.39271 16.8385 5.29539 16.5166 5.25942C13.5398 4.92671 10.4602 4.92671 7.48334 5.25942Z" fill="#053124"></path> <path d="M21.0303 6.03028C21.3232 5.73738 21.3232 5.26251 21.0303 4.96962C20.7374 4.67672 20.2625 4.67672 19.9696 4.96962L11.5 13.4393L9.0303 10.9696C8.73741 10.6767 8.26253 10.6767 7.96964 10.9696C7.67675 11.2625 7.67675 11.7374 7.96964 12.0303L10.9696 15.0303C11.2625 15.3232 11.7374 15.3232 12.0303 15.0303L21.0303 6.03028Z" fill="#053124"></path> </g></svg>
        </button>
      `));

      tbody.append(fila);
    });

  }

  /////////////////////////////////////////////////////////////////////////////

  $(document).on('click', '.cancelar', function () {
    $('.card').toggleClass('showCard');
  });

  $(document).on('click', '.btnCompleted', function() {
    
    $('.card').toggleClass('showCard');

    var id = '';
    var id_libro = '';

    var row = $(this).closest('tr');
    id = row.find('td:nth-child(1)').text();
    id_libro = row.find('td:nth-child(4)').text();

    $(document).off('click', '.completar').on('click', '.completar', function(){
      $.ajax({
          url: 'http://localhost:3000/api/completarPrestamo', // URL del servidor para ejecutar el proceso
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({ id: id, id_libro: id_libro }), // Envía el ID u otros datos necesarios como JSON
          success: function(response) {
              $('.card').removeClass('showCard');
              $('.prestamoCompleted-successful').animate({
                right: 18
              });
              setTimeout(function () {
                $('.prestamoCompleted-successful').animate({
                  right: -320
                });
              }, 2000);

              $.ajax({
                url: 'http://localhost:3000/api/mostrarPrestamosAdmin',
                method: 'GET',
                success: function (data) {
                  allRecordsPrestamos = data;
                  paginatePrestamos();
                },
                error: function (error) {
                  console.error('Error al obtener los prestamos:', error);
                }
              });
          },
          error: function(error) {
              console.error('Error al ejecutar el proceso:', error);
              $('.card').removeClass('showCard');
              $('.prestamoCompleted-unsuccessful').animate({
                right: 18
              });
              setTimeout(function () {
                $('.prestamoCompleted-unsuccessful').animate({
                  right: -420
                });
              }, 2000);
          }
      });
    });
  });

  /////////////////////////////////////////////////////////////////////////////

  function limpiarFormulario() {
    $('#titulo').val('');
    $('#autor').val('');
    $('#year').val('');
    $('#paginado').val('');
    $('#editorial').val('');
    $('#genero').val('');
    $('#cantidad').val('');
    $('#estado').val('');
    $('#descripcion').val('');
  }
  
  $(document).off('click', '.inspectButton').on('click', '.inspectButton', function () {
    limpiarFormulario();
    const idLibro = $(this).closest('tr').find('td:first').text(); 
    obtenerDatosLibro(idLibro);
    actualizarLibro(idLibro);
    $('.edit-book').toggleClass('showEdit-Book');
  });
  
  $(document).on('click', '.closeWin', function () {
    $('.edit-book').toggleClass('showEdit-Book');
    limpiarFormulario();
  });
  
  function obtenerDatosLibro(idLibro) {
    $.ajax({
      url: 'http://localhost:3000/api/edit-book',
      method: 'GET',
      data: { id: idLibro },
      success: function (data) {
        llenarFormulario(data);
      },
      error: function (error) {
        console.error('Error al obtener los datos del libro:', error);
      }
    });
  }
  
  /////////////////////////////////////////////////////////////////////////////

  function llenarFormulario(data) {
    $('#titulo').val(data.Titulo);
    $('#autor').val(data.Autor);
    $('#year').val(data.Año);
    $('#paginado').val(data.Paginado);
    $('#editorial').val(data.Editorial);
    $('#genero').val(data.Genero);
    $('#cantidad').val(data.Cantidad);
    $('#estado').val(data.Estado);
    $('#descripcion').val(data.Descripcion);

    limpiarMensajesError();

    ajustarEstado(data.Estado);
  }
  
  function actualizarLibro(idLibro) {
    $(document).off('click', '.actualizar').on('click', '.actualizar', function () {
      let isValid = true;
      $('.input-form').each(function () {
        if (!validateForm(this)) {
          isValid = false;
        }
      });
      if (isValid) {
        const datosActualizados = {
          id_libro: idLibro,
          Titulo: $('#titulo').val(),
          Autor: $('#autor').val(),
          Año: $('#year').val(),
          Paginado: $('#paginado').val(),
          Editorial: $('#editorial').val(),
          Descripcion: $('#descripcion').val(),
          Genero: $('#genero').val(),
          Cantidad: $('#cantidad').val(),
          Estado: $('#estado').val()
        };
    
        $.ajax({
          url: 'http://localhost:3000/api/actualizarLibro',
          method: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(datosActualizados),
          success: function (response) {
            $('.edit-book').removeClass('showEdit-Book');
            limpiarFormulario();
  
            $('.edit-successful').animate({
              right: 18
            });
            setTimeout(function () {
              $('.edit-successful').animate({
                right: -320
              });
            }, 2000);
            
            $.ajax({
              url: 'http://localhost:3000/api/mostrarTodosLosLibros',
              method: 'GET',
              success: function (data) {
                allRecords = data;
                paginateRecords();
              },
              error: function (error) {
                console.error('Error al obtener los libros activos:', error);
              }
            });
          },
          error: function (error) {
            console.error('Error al actualizar el libro:', error);
            $('.edit-book').removeClass('showEdit-Book');
            $('.edit-unsuccessful').animate({
              right: 18
            });
            setTimeout(function () {
              $('.edit-unsuccessful').animate({
                right: -420
              });
            }, 2000);
          }
        });
      } else {
        console.log("Faltan campos por llenar");
      }
    });
  }

  function ajustarEstado(estado) {
    const cantidad = $('#cantidad').val();
    if (cantidad == 1) {
        $('#estado').val('No disponible').prop('disabled', true);
    } else {
        $('#estado').val(estado || "Disponible").prop('disabled', false);
    }
  }

  // Detecta cambios en el campo Cantidad
  $('#cantidad').on('change', function() {
      ajustarEstado();
  });

  /////////////////////////////////////////////////////////////////////////////
  
  function limpiarFormularioAdd() {
    $('#add-titulo').val('');
    $('#add-autor').val('');
    $('#add-year').val('');
    $('#add-paginado').val('');
    $('#add-editorial').val('');
    $('#add-genero').val('');
    $('#add-cantidad').val('');
    $('#add-estado').val('');
    $('#add-descripcion').val('');

    limpiarMensajesError();
  }
  
  $(document).on('click', '.addBtn', function(){
    $('.add-book').toggleClass('showAdd-Book');
    
    $(document).off('click', '.add').on('click', '.add', function(){
      let isValid = true;
      $('.add-input-form').each(function () {
        if (!validateForm(this)) {
          isValid = false;
        }
      });
  
      if (isValid) {
        const addBook = {
          Titulo: $('#add-titulo').val(),
          Autor: $('#add-autor').val(),
          Año: $('#add-year').val(),
          Paginado: $('#add-paginado').val(),
          Editorial: $('#add-editorial').val(),
          Descripcion: $('#add-descripcion').val(),
          Genero: $('#add-genero').val(),
          Cantidad: $('#add-cantidad').val(),
          Estado: $('#add-estado').val()
        };
  
        $.ajax({
          url: 'http://localhost:3000/api/agregarLibro',
          method: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(addBook),
          success: function (response) {
            $('.add-book').removeClass('showAdd-Book');
  
            $('.add-successful').animate({
              right: 18
            });
            setTimeout(function () {
              $('.add-successful').animate({
                right: -320
              });
            }, 2000);
  
            limpiarFormularioAdd();
  
            $.ajax({
              url: 'http://localhost:3000/api/mostrarTodosLosLibros',
              method: 'GET',
              success: function (data) {
                generosLibros(data);
              },
              error: function (error) {
                console.error('Error al obtener los libros activos:', error);
              }
            });
          },
          error: function (error) {
            console.error('Error al agregar el libro:', error);
            $('.add-book').removeClass('showAdd-Book');
            $('.add-unsuccessful').animate({
              right: 18
            });
            setTimeout(function () {
              $('.add-unsuccessful').animate({
                right: -420
              });
            }, 2000);
          }
        });
      } else {
        console.log("Faltan campos por llenar");
      }
    });
  });
  
  $(document).on('click', '.add-closeWin', function(){
    $('.add-book').toggleClass('showAdd-Book');
    limpiarFormularioAdd();
  });

  /////////////////////////////////////////////////////////////////////////////

  function insertarIncidentes(registros) {
    var tbody = $('#tablaIncidentes tbody');
    tbody.empty();

    registros.forEach(function (registro) {
      var fila = $('<tr>');

      fila.append($('<td class="btnEditIncidents">').text(registro.id));
      fila.append($('<td class="btnEditIncidents">').text(registro.matricula));
      fila.append($('<td class="btnEditIncidents">').text(registro.email));
      fila.append($('<td class="btnEditIncidents">').text(registro.id_libro));
      fila.append($('<td class="btnEditIncidents">').text(registro.titulo));
      fila.append($('<td class="btnEditIncidents">').text(formatDateToUTC6(registro.fecha)));
      fila.append($('<td class="btnEditIncidents">').html(`
        <button class="btn" title="Editar">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40974 4.40973 4.7157 4.21799 5.09202C4 5.51985 4 6.0799 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V12.5M15.5 5.5L18.3284 8.32843M10.7627 10.2373L17.411 3.58902C18.192 2.80797 19.4584 2.80797 20.2394 3.58902C21.0205 4.37007 21.0205 5.6364 20.2394 6.41745L13.3774 13.2794C12.6158 14.0411 12.235 14.4219 11.8012 14.7247C11.4162 14.9936 11.0009 15.2162 10.564 15.3882C10.0717 15.582 9.54378 15.6885 8.48793 15.9016L8 16L8.04745 15.6678C8.21536 14.4925 8.29932 13.9048 8.49029 13.3561C8.65975 12.8692 8.89125 12.4063 9.17906 11.9786C9.50341 11.4966 9.92319 11.0768 10.7627 10.2373Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </button>
      `));

      tbody.append(fila);
    });

  }

 /////////////////////////////////////////////////////////////////////////////

  function limpiarFormularioIncident() {
    $('#incident-matricula').val('');
    $('#incident-email').val('');
    $('#incident-titulo').val('');
    $('#incident-id_libro').val('');
    $('#incident-fecha').val('');
    $('#incident-descripcion').val('');

    limpiarMensajesError();
  }
  
  $(document).on('click', '.incidentBtn', function(){
    $('.incident-book').toggleClass('showIncident-Book');

    $(document).off('click', '.incident').on('click', '.incident', function(){
      let isValid = true;
      $('.incident-input-form').each(function () {
        if (!validateForm(this)) {
          isValid = false;
        }
      });
  
      if (isValid) {
        const incidentBook = {
          Matricula: $('#incident-matricula').val(),
          Email: $('#incident-email').val(),
          Titulo: $('#incident-titulo').val(),
          id_libro: $('#incident-id_libro').val(),
          Fecha: $('#incident-fecha').val(),
          Incidente: $('#incident-descripcion').val()
        };
  
        $.ajax({
          url: 'http://localhost:3000/api/agregarIncidente',
          method: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(incidentBook),
          success: function (response) {
            $('.incident-book').removeClass('showIncident-Book');
  
            $('.incident-successful').animate({
              right: 18
            });
            setTimeout(function () {
              $('.incident-successful').animate({
                right: -320
              });
            }, 2000);
  
            limpiarFormularioIncident();
  
            $.ajax({
              url: 'http://localhost:3000/api/mostrarIncidentes',
              method: 'GET',
              success: function (data) {
                allRecordsIncidentes = data;
                paginateIncidentes();
              },
              error: function (error) {
                console.error('Error al obtener los incidentes:', error);
              }
            });
          },
          error: function (error) {
            console.error('Error al agregar el incidente:', error);
            $('.incident-book').removeClass('showincident-Book');
            $('.incident-unsuccessful').animate({
              right: 18
            });
            setTimeout(function () {
              $('.incident-unsuccessful').animate({
                right: -420
              });
            }, 2000);
          }
        });
      } else {
        console.log("Faltan campos por llenar");
      }
    });
  });

  $(document).on('click', '.incident-closeWin', function(){
    $('.incident-book').toggleClass('showIncident-Book');
    limpiarFormularioIncident();
  });

  /////////////////////////////////////////////////////////////////////////////

  function limpiarFormularioEditIncident() {
    $('#edit-incident-matricula').val('');
    $('#edit-incident-email').val('');
    $('#edit-incident-titulo').val('');
    $('#edit-incident-id_libro').val('');
    $('#edit-incident-fecha').val('');
    $('#edit-incident-descripcion').val('');
  }

  $(document).off('click', '.btnEditIncidents').on('click', '.btnEditIncidents', function () {
    limpiarFormularioEditIncident();
    const id = $(this).closest('tr').find('td:first').text();
    obtenerDatosIncidente(id);
    actualizarIncident(id);
    $('.edit-incident-book').toggleClass('showIncident-Book');
  });
  
  $(document).on('click', '.edit-incident-closeWin', function () {
    $('.edit-incident-book').toggleClass('showIncident-Book');
    limpiarFormularioEditIncident();
  });

  function obtenerDatosIncidente(id) {
    $.ajax({
      url: 'http://localhost:3000/api/edit-incident',
      method: 'GET',
      data: { id: id },
      success: function (data) {
        // console.log(data);
        llenarFormularioEditIncident(data);
      },
      error: function (error) {
        console.error('Error al obtener los datos del libro:', error);
      }
    });
  }

  function llenarFormularioEditIncident(data) {
    $('#edit-incident-matricula').val(data.matricula);
    $('#edit-incident-email').val(data.email);
    $('#edit-incident-titulo').val(data.titulo);
    $('#edit-incident-id_libro').val(data.id_libro);

    var fecha = new Date(data.fecha).toISOString().split('T')[0];
    $('#edit-incident-fecha').val(fecha);
    
    $('#edit-incident-descripcion').val(data.incidente);

    limpiarMensajesError();
  }
  
  function actualizarIncident(id) {
    $(document).off('click', '.edit-incident').on('click', '.edit-incident', function () {
      let isValid = true;
      $('.edit-incident-input-form').each(function () {
        if (!validateForm(this)) {
          isValid = false;
        }
      });
      if (isValid) {
        const datosActualizados = {
          id: id,
          Matricula: $('#edit-incident-matricula').val(),
          Email: $('#edit-incident-email').val(),
          Titulo: $('#edit-incident-titulo').val(),
          id_libro: $('#edit-incident-id_libro').val(),
          Fecha: $('#edit-incident-fecha').val(),
          Incidente: $('#edit-incident-descripcion').val()
        };
    
        $.ajax({
          url: 'http://localhost:3000/api/actualizarIncidente',
          method: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(datosActualizados),
          success: function (response) {
            $('.edit-incident-book').removeClass('showIncident-Book');
            limpiarFormularioEditIncident();
  
            $('.edit-incident-successful').animate({
              right: 18
            });
            setTimeout(function () {
              $('.edit-incident-successful').animate({
                right: -320
              });
            }, 2000);
            
            $.ajax({
              url: 'http://localhost:3000/api/mostrarIncidentes',
              method: 'GET',
              success: function (data) {
                allRecordsIncidentes = data;
                paginateIncidentes();
              },
              error: function (error) {
                console.error('Error al obtener los incidentes:', error);
              }
            });
          },
          error: function (error) {
            console.error('Error al actualizar el incidente:', error);
            $('.edit-incident-book').removeClass('showIncident-Book');
            $('.edit-incident-unsuccessful').animate({
              right: 18
            });
            setTimeout(function () {
              $('.edit-incident-unsuccessful').animate({
                right: -420
              });
            }, 2000);
          }
        });
      } else {
        console.log("Faltan campos por llenar");
      }
    });
  }

  /////////////////////////////////////////////////////////////////////////////

  $('#incident-id_libro').prop('disabled', true);

  $('#incident-matricula').on('input', function() {
    const term = $(this).val();
    const suggestionBox = $(this).siblings('.suggestions');
    suggestionBox.addClass('showSuggestions');

    if (term.length >= 2) {
      $.get('http://localhost:3000/api/buscarMatricula', { term: term }, function(data) {
        const suggestions = data.map(item => item.matricula);
        mostrarSugerencias('#incident-matricula', suggestions);
      });
    } else {
      suggestionBox.removeClass('showSuggestions');
      suggestionBox.empty();
    }
    
    // Autocompletar el email
    if (term.length > 0) {
      $('#incident-email').val(`${term}@alumno.com`);
    } else {
      $('#incident-email').val('');
    }
  });

  $('#incident-titulo').on('input', function() {
    const term = $(this).val();
    const suggestionBox = $(this).siblings('.suggestions');
    suggestionBox.addClass('showSuggestions');

    if (term.length >= 2) {
      $.get('http://localhost:3000/api/buscarLibro', { term: term }, function(data) {
        const suggestions = data.map(item => item.Titulo);
        mostrarSugerencias('#incident-titulo', suggestions);
      });
    } else {
      suggestionBox.removeClass('showSuggestions');
      suggestionBox.empty();
    }
  });

  $('#incident-titulo').on('change', function() {
    const titulo = $(this).val();

    if (titulo.length > 0) {
      $.get('http://localhost:3000/api/obtenerIdLibro', { titulo: titulo }, function(data) {
        if (data.length > 0) {
          $('#incident-id_libro').val(data[0].id_libro).prop('disabled', true);
        } else {
          $('#incident-id_libro').val('').prop('disabled', true);
        }
      });
    } else {
      $('#incident-id_libro').val('').prop('disabled', true);
    }
  });

  // Event handler to hide suggestions on input blur
  $('input').on('blur', function() {
    const suggestionBox = $(this).siblings('.suggestions');
    setTimeout(function() {
      suggestionBox.removeClass('showSuggestions').empty();
    }, 200); // Delay to allow click event on suggestion items
  });

  // Prevent suggestions from disappearing on suggestion item click
  $(document).on('mousedown', '.suggestion-item', function(e) {
    e.preventDefault();
  });

  // Function to display suggestions
  function mostrarSugerencias(input, suggestions) {
    let suggestionBox = $(input).siblings('.suggestions');
    if (suggestionBox.length === 0) {
      suggestionBox = $('<div class="suggestions"></div>').insertAfter(input);
    }
    suggestionBox.empty();
    suggestions.forEach(item => {
      $('<div class="suggestion-item"></div>').text(item).appendTo(suggestionBox).on('click', function() {
        $(input).val($(this).text());
        suggestionBox.empty();

        if (input === '#incident-matricula') {
          $('#incident-email').val(`${$(this).text()}@alumno.com`);
        }
      });
    });
  }

  /////////////////////////////////////////////////////////////////////////////

  $('#edit-incident-id_libro').prop('disabled', true);

  $('#edit-incident-matricula').on('input', function() {
    const term = $(this).val();
    const suggestionBox = $(this).siblings('.suggestions');
    suggestionBox.addClass('showSuggestions');

    if (term.length >= 2) {
      $.get('http://localhost:3000/api/buscarMatricula', { term: term }, function(data) {
        const suggestions = data.map(item => item.matricula);
        mostrarSugerenciasEdit('#edit-incident-matricula', suggestions);
      });
    } else {
      suggestionBox.removeClass('showSuggestions');
      suggestionBox.empty();
    }
    
    // Autocompletar el email
    if (term.length > 0) {
      $('#edit-incident-email').val(`${term}@alumno.com`);
    } else {
      $('#edit-incident-email').val('');
    }
  });

  $('#edit-incident-titulo').on('input', function() {
    const term = $(this).val();
    const suggestionBox = $(this).siblings('.suggestions');
    suggestionBox.addClass('showSuggestions');

    if (term.length >= 2) {
      $.get('http://localhost:3000/api/buscarLibro', { term: term }, function(data) {
        const suggestions = data.map(item => item.Titulo);
        mostrarSugerenciasEdit('#edit-incident-titulo', suggestions);
      });
    } else {
      suggestionBox.removeClass('showSuggestions');
      suggestionBox.empty();
    }
  });

  $('#edit-incident-titulo').on('change', function() {
    const titulo = $(this).val();

    if (titulo.length > 0) {
      $.get('http://localhost:3000/api/obtenerIdLibro', { titulo: titulo }, function(data) {
        if (data.length > 0) {
          $('#edit-incident-id_libro').val(data[0].id_libro).prop('disabled', true);
        } else {
          $('#edit-incident-id_libro').val('').prop('disabled', true);
        }
      });
    } else {
      $('#edit-incident-id_libro').val('').prop('disabled', true);
    }
  });

  // Event handler to hide suggestions on input blur
  $('input').on('blur', function() {
    const suggestionBox = $(this).siblings('.suggestions');
    setTimeout(function() {
      suggestionBox.removeClass('showSuggestions').empty();
    }, 200); // Delay to allow click event on suggestion items
  });

  // Prevent suggestions from disappearing on suggestion item click
  $(document).on('mousedown', '.suggestion-item', function(e) {
    e.preventDefault();
  });

  // Function to display suggestions
  function mostrarSugerenciasEdit(input, suggestions) {
    let suggestionBox = $(input).siblings('.suggestions');
    if (suggestionBox.length === 0) {
      suggestionBox = $('<div class="suggestions"></div>').insertAfter(input);
    }
    suggestionBox.empty();
    suggestions.forEach(item => {
      $('<div class="suggestion-item"></div>').text(item).appendTo(suggestionBox).on('click', function() {
        $(input).val($(this).text());
        suggestionBox.empty();

        if (input === '#edit-incident-matricula') {
          $('#edit-incident-email').val(`${$(this).text()}@alumno.com`);
        }
      });
    });
  }

  /////////////////////////////////////////////////////////////////////////////

  function limpiarMensajesError() {
    $('.errorMsg').text('');  // Limpiar todos los mensajes de error
  }

  function validateForm(form) {
    let isValid = true;
    $(form).find('input[required], textarea[required]').each(function () {
      if (!$(this).val()) {
        $(this).siblings('.errorMsg').text('Este campo es requerido');
        isValid = false;
      } else {
        $(this).siblings('.errorMsg').text('');
      }
    });
    return isValid;
  }



  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////



  var currentPageActivos = 1;
  var recordsPerPageActivos = 5;

  var currentPageBajas = 1;
  var recordsPerPageBajas = 5;

  var currentPageLotes = 1;
  var recordsPerPageLotes = 5;  

  var currentPagePrestamos = 1;
  var recordsPerPagePrestamos = 5;

  var currentPageIncidentes = 1;
  var recordsPerPageIncidentes = 5;

  var allRecords = [];

  $('.entriesActivos').change(function() {
    recordsPerPageActivos = parseInt($(this).val());
    currentPageActivos = 1;
    paginateRecords();
  });

  $('.entriesBajas').change(function() {
      recordsPerPageBajas = parseInt($(this).val());
      currentPageBajas = 1;
      paginateRecords();
  });

  $('.entriesLotes').change(function() {
    recordsPerPageLotes = parseInt($(this).val());
    currentPageLotes = 1;
    paginateLotes();
  });

  $('.entriesPrestamos').change(function() {
    recordsPerPagePrestamos = parseInt($(this).val());
    currentPagePrestamos = 1;
    paginatePrestamos();
  });

  $('.entriesIncidentes').change(function() {
    recordsPerPageIncidentes = parseInt($(this).val());
    currentPageIncidentes = 1;
    paginateIncidentes();
  });

  function paginateRecords() {
    var startActivos = (currentPageActivos - 1) * recordsPerPageActivos;
    var endActivos = startActivos + recordsPerPageActivos;
    var startBajas = (currentPageBajas - 1) * recordsPerPageBajas;
    var endBajas = startBajas + recordsPerPageBajas;

    var activos = allRecords.filter(r => r.Estado === 'Disponible').slice(startActivos, endActivos);
    var bajas = allRecords.filter(r => r.Estado === 'No disponible').slice(startBajas, endBajas);

    insertarRegistros('tablaActivos', activos);
    insertarRegistros('tablaBajas', bajas);
    updatePaginationControls();
}
  
  function paginateLotes() {
    var startLotes = (currentPageLotes - 1) * recordsPerPageLotes;
    var endLotes = startLotes + recordsPerPageLotes;
  
    var lotes = allRecordsLotes.slice(startLotes, endLotes);
  
    insertarRegistrosLotes(lotes);
    updatePaginationControlsLotes();
  }
  
  function paginatePrestamos() {
    var startPrestamos = (currentPagePrestamos - 1) * recordsPerPagePrestamos;
    var endPrestamos = startPrestamos + recordsPerPagePrestamos;
  
    var prestamos = allRecordsPrestamos.slice(startPrestamos, endPrestamos);
  
    insertarPrestamos(prestamos);
    updatePaginationControlsPrestamos();
  }
  
  function paginateIncidentes() {
    var startIncidentes = (currentPageIncidentes - 1) * recordsPerPageIncidentes;
    var endIncidentes = startIncidentes + recordsPerPageIncidentes;
  
    var incidentes = allRecordsIncidentes.slice(startIncidentes, endIncidentes);
  
    insertarIncidentes(incidentes);
    updatePaginationControlsIncidentes();
  }
  

  function updatePaginationControls() {
    var totalPagesActivos = Math.ceil(allRecords.filter(r => r.Estado === 'Disponible').length / recordsPerPageActivos);
    var totalPagesBajas = Math.ceil(allRecords.filter(r => r.Estado === 'No disponible').length / recordsPerPageBajas);

    updatePageNumbers('Activos', totalPagesActivos, currentPageActivos);
    updatePageNumbers('Bajas', totalPagesBajas, currentPageBajas);

    $('#prev-page-activos').attr('disabled', currentPageActivos === 1);
    $('#next-page-activos').attr('disabled', currentPageActivos === totalPagesActivos);
    $('#prev-page-bajas').attr('disabled', currentPageBajas === 1);
    $('#next-page-bajas').attr('disabled', currentPageBajas === totalPagesBajas);
  }
  
  function updatePaginationControlsLotes() {
    var totalPagesLotes = Math.ceil(allRecordsLotes.length / recordsPerPageLotes);
  
    updatePageNumbers('Lotes', totalPagesLotes, currentPageLotes);
  
    $('#prev-page-lotes').attr('disabled', currentPageLotes === 1);
    $('#next-page-lotes').attr('disabled', currentPageLotes === totalPagesLotes);
  }
  
  function updatePaginationControlsPrestamos() {
    var totalPagesPrestamos = Math.ceil(allRecordsPrestamos.length / recordsPerPagePrestamos);
  
    updatePageNumbers('Prestamos', totalPagesPrestamos, currentPagePrestamos);
  
    $('#prev-page-prestamos').attr('disabled', currentPagePrestamos === 1);
    $('#next-page-prestamos').attr('disabled', currentPagePrestamos === totalPagesPrestamos);
  }
  
  function updatePaginationControlsIncidentes() {
    var totalPagesIncidentes = Math.ceil(allRecordsIncidentes.length / recordsPerPageIncidentes);
  
    updatePageNumbers('Incidentes', totalPagesIncidentes, currentPageIncidentes);
  
    $('#prev-page-incidentes').attr('disabled', currentPageIncidentes === 1);
    $('#next-page-incidentes').attr('disabled', currentPageIncidentes === totalPagesIncidentes);
  }
  

  const MAX_VISIBLE_PAGES = 5; // Número máximo de páginas visibles

  function updatePageNumbers(type, totalPages, currentPage) {
    var container = $(`#page-numbers-${type.toLowerCase()}`);
    container.empty();

    if (totalPages <= MAX_VISIBLE_PAGES) {
        for (var i = 1; i <= totalPages; i++) {
            var pageNumber = $('<span>').text(i).addClass('page-number');
            if (i === currentPage) {
                pageNumber.addClass('active');
            }
            pageNumber.click((function(page) {
                return function() {
                    switch(type) {
                        case 'Activos':
                            currentPageActivos = page;
                            break;
                        case 'Bajas':
                            currentPageBajas = page;
                            break;
                        case 'Lotes':
                            currentPageLotes = page;
                            break;
                        case 'Prestamos':
                            currentPagePrestamos = page;
                            break;
                        case 'Incidentes':
                            currentPageIncidentes = page;
                            break;
                    }
                    switch(type) {
                        case 'Activos':
                        case 'Bajas':
                            paginateRecords();
                            break;
                        case 'Lotes':
                            paginateLotes();
                            break;
                        case 'Prestamos':
                            paginatePrestamos();
                            break;
                        case 'Incidentes':
                            paginateIncidentes();
                            break;
                    }
                };
            })(i));
            container.append(pageNumber);
        }
    } else {
        var startPage, endPage;

        if (currentPage <= Math.ceil(MAX_VISIBLE_PAGES / 2)) {
            startPage = 1;
            endPage = MAX_VISIBLE_PAGES;
        } else if (currentPage + Math.floor(MAX_VISIBLE_PAGES / 2) >= totalPages) {
            startPage = totalPages - MAX_VISIBLE_PAGES + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - Math.floor(MAX_VISIBLE_PAGES / 2);
            endPage = currentPage + Math.floor(MAX_VISIBLE_PAGES / 2);
        }

        for (var i = startPage; i <= endPage; i++) {
            var pageNumber = $('<span>').text(i).addClass('page-number');
            if (i === currentPage) {
                pageNumber.addClass('active');
            }
            pageNumber.click((function(page) {
                return function() {
                    switch(type) {
                        case 'Activos':
                            currentPageActivos = page;
                            break;
                        case 'Bajas':
                            currentPageBajas = page;
                            break;
                        case 'Lotes':
                            currentPageLotes = page;
                            break;
                        case 'Prestamos':
                            currentPagePrestamos = page;
                            break;
                        case 'Incidentes':
                            currentPageIncidentes = page;
                            break;
                    }
                    switch(type) {
                        case 'Activos':
                        case 'Bajas':
                            paginateRecords();
                            break;
                        case 'Lotes':
                            paginateLotes();
                            break;
                        case 'Prestamos':
                            paginatePrestamos();
                            break;
                        case 'Incidentes':
                            paginateIncidentes();
                            break;
                    }
                };
            })(i));
            container.append(pageNumber);
        }

        if (startPage > 1) {
            container.prepend($('<span>').text('...').addClass('dots'));
        }

        if (endPage < totalPages) {
            container.append($('<span>').text('...').addClass('dots'));
        }
    }
  }

  // Asignar manejadores de eventos a los botones de paginación
  $('#prev-page-activos').click(function() {
      if (currentPageActivos > 1) {
          currentPageActivos--;
          paginateRecords();
      }
  });

  $('#next-page-activos').click(function() {
      if (currentPageActivos < Math.ceil(allRecords.filter(r => r.Estado === 'Disponible').length / recordsPerPageActivos)) {
          currentPageActivos++;
          paginateRecords();
      }
  });


  $('#prev-page-bajas').click(function() {
      if (currentPageBajas > 1) {
          currentPageBajas--;
          paginateRecords();
      }
  });

  $('#next-page-bajas').click(function() {
      var totalPagesBajas = Math.ceil(allRecords.filter(r => r.Estado === 'No disponible').length / recordsPerPageBajas);
      if (currentPageBajas < totalPagesBajas) {
          currentPageBajas++;
          paginateRecords();
      }
  });

  // Similar click handlers for Lotes, Prestamos, Incidentes
  $('#prev-page-lotes').click(function() {
      if (currentPageLotes > 1) {
          currentPageLotes--;
          paginateLotes();
      }
  });

  $('#next-page-lotes').click(function() {
      var totalPagesLotes = Math.ceil(allRecordsLotes.length / recordsPerPageLotes);
      if (currentPageLotes < totalPagesLotes) {
          currentPageLotes++;
          paginateLotes();
      }
  });

  $('#prev-page-prestamos').click(function() {
      if (currentPagePrestamos > 1) {
          currentPagePrestamos--;
          paginatePrestamos();
      }
  });

  $('#next-page-prestamos').click(function() {
      var totalPagesPrestamos = Math.ceil(allRecordsPrestamos.length / recordsPerPagePrestamos);
      if (currentPagePrestamos < totalPagesPrestamos) {
          currentPagePrestamos++;
          paginatePrestamos();
      }
  });

  $('#prev-page-incidentes').click(function() {
      if (currentPageIncidentes > 1) {
          currentPageIncidentes--;
          paginateIncidentes();
      }
  });

  $('#next-page-incidentes').click(function() {
      var totalPagesIncidentes = Math.ceil(allRecordsIncidentes.length / recordsPerPageIncidentes);
      if (currentPageIncidentes < totalPagesIncidentes) {
          currentPageIncidentes++;
          paginateIncidentes();
      }
  });

  // Fetch records and initialize pagination for Lotes, Prestamos, Incidentes

  $.ajax({
    url: 'http://localhost:3000/api/mostrarTodosLosLibros',
    method: 'GET',
    success: function (data) {
      allRecords = data;
      paginateRecords();
    },
    error: function (error) {
      console.error('Error al obtener los libros:', error);
    }
  });

  $.ajax({
      url: 'http://localhost:3000/api/mostrarTodosLosLibros',
      method: 'GET',
      success: function(data) {
          allRecordsLotes = data;
          paginateLotes();
      },
      error: function(error) {
          console.error('Error al obtener los lotes:', error);
      }
  });

  $.ajax({
      url: 'http://localhost:3000/api/mostrarPrestamosAdmin',
      method: 'GET',
      success: function(data) {
          allRecordsPrestamos = data;
          paginatePrestamos();
      },
      error: function(error) {
          console.error('Error al obtener los prestamos:', error);
      }
  });

  $.ajax({
      url: 'http://localhost:3000/api/mostrarIncidentes',
      method: 'GET',
      success: function(data) {
          allRecordsIncidentes = data;
          paginateIncidentes();
      },
      error: function(error) {
          console.error('Error al obtener los incidentes:', error);
      }
  });



  $(document).on('click', '.vistasPanel', function(){
    $.ajax({
      url: 'http://localhost:3000/api/mostrarTodosLosLibros',
      method: 'GET',
      success: function (data) {
        allRecords = data;
        paginateRecords();

      },
      error: function (error) {
        console.error('Error al obtener los libros:', error);
      }
    });

    $.ajax({
      url: 'http://localhost:3000/api/mostrarTodosLosLibros',
      method: 'GET',
      success: function(data) {
          allRecordsLotes = data;
          paginateLotes();
      },
      error: function(error) {
          console.error('Error al obtener los lotes:', error);
      }
    });

    $.ajax({
      url: 'http://localhost:3000/api/mostrarPrestamosAdmin',
      method: 'GET',
      success: function (data) {
        allRecordsPrestamos = data;
        paginatePrestamos();
      },
      error: function (error) {
        console.error('Error al obtener los prestamos:', error);
      }
    });

    $.ajax({
      url: 'http://localhost:3000/api/mostrarIncidentes',
      method: 'GET',
      success: function(data) {
          allRecordsIncidentes = data;
          paginateIncidentes();
      },
      error: function(error) {
          console.error('Error al obtener los incidentes:', error);
      }
    });

  });



  $('.searchInput').on('input', function () {
    var searchValue = $(this).val().toLowerCase();
  
    if (searchValue.trim() === '') {
      // Si la búsqueda está vacía, mostrar todos los registros y resetear la paginación
      loadTableRecords(allRecords);
      paginateRecords();

      loadTableRecordsLotes(allRecordsLotes);
      paginateLotes();

      loadTableRecordsPrestamos(allRecordsPrestamos);
      paginatePrestamos();
      
      loadTableRecordsIncidentes(allRecordsIncidentes);
      paginateIncidentes();

    } else {
      // Filtrar todos los registros basados en la búsqueda
      var filteredRecords = allRecords.filter(r => 
        r.Titulo.toLowerCase().includes(searchValue) ||
        r.Autor.toLowerCase().includes(searchValue)
      );

      var filteredRecordsLotes = allRecordsLotes.filter(r =>
        r.id_libro.toString().toLowerCase().includes(searchValue) ||
        r.Titulo.toLowerCase().includes(searchValue) ||
        r.Autor.toLowerCase().includes(searchValue) ||
        r.Estado.toLowerCase().includes(searchValue)
      );

      var filteredRecordsPrestamos = allRecordsPrestamos.filter(r => 
        r.id.toString().toLowerCase().includes(searchValue) ||
        r.matricula.toString().toLowerCase().includes(searchValue) ||
        r.email.toLowerCase().includes(searchValue) ||
        r.titulo.toLowerCase().includes(searchValue) ||
        r.estado.toLowerCase().includes(searchValue)
      );

      var filteredRecordsIncidentes = allRecordsIncidentes.filter(r => 
        r.id.toString().toLowerCase().includes(searchValue) ||
        r.matricula.toString().toLowerCase().includes(searchValue) ||
        r.email.toLowerCase().includes(searchValue) ||
        r.titulo.toLowerCase().includes(searchValue)
      );



      insertarRegistros('tablaActivos', filteredRecords.filter(r => r.Estado === 'Disponible'));
      insertarRegistros('tablaBajas', filteredRecords.filter(r => r.Estado === 'No disponible'));

      var availableRecordsLotes = filteredRecordsLotes.filter(r => r.Estado.toLowerCase() === 'disponible');
      var unavailableRecordsLotes = filteredRecordsLotes.filter(r => r.Estado.toLowerCase() === 'no disponible');

      insertarRegistrosLotes([...availableRecordsLotes, ...unavailableRecordsLotes]);


      var availableRecordsPrestamos = filteredRecordsPrestamos.filter(r => r.estado.toLowerCase() === 'completado');
      var unavailableRecordsPrestamos = filteredRecordsPrestamos.filter(r => r.estado.toLowerCase() === 'pendiente');

      insertarPrestamos([...availableRecordsPrestamos, ...unavailableRecordsPrestamos]);

      insertarIncidentes(filteredRecordsIncidentes);
    }
  });

  function loadTableRecords(records) {
    allRecords = records;
    paginateRecords();
  }
  
  function loadTableRecordsLotes(records) {
    allRecordsLotes = records;
    paginateLotes();
  }
  
  function loadTableRecordsPrestamos(records) {
    allRecordsPrestamos = records;
    paginatePrestamos();
  }
  
  function loadTableRecordsIncidentes(records) {
    allRecordsIncidentes = records;
    paginateIncidentes();
  }

});
