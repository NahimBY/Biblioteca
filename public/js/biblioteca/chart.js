$(document).ready(function() {
  $(document).on('click', '.vista6-panel', function() {
      $('.contentScroll').addClass('content-Stadistics');
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // Los meses en JavaScript son 0-11
      const currentYear = currentDate.getFullYear();
    
      $('#month').val(currentMonth);
      $('#chartYear').val(currentYear);
    
      actualizarGrafica(currentMonth, currentYear);
  });

  $(document).on('click', '.vistasPanel', function() {
      $('.contentScroll').removeClass('content-Stadistics');
  });

  let myChart = null;

  function actualizarGrafica(month, year) {
      $.ajax({
          url: 'https://biblioteca-x1al.onrender.com/api/librosMasPrestados',
          method: 'GET',
          data: { month: month, year: year },
          success: function(data) {
              const titulos = data.map(item => item.titulo);
              const cantidades = data.map(item => item.cantidad_prestamos);

              const ctx = document.getElementById('myChart').getContext('2d');
              
              if (myChart) {
                  myChart.destroy();
              }

              myChart = new Chart(ctx, {
                  type: 'bar',
                  data: {
                      labels: titulos,
                      datasets: [{
                          label: 'Cantidad de Préstamos',
                          data: cantidades,
                          backgroundColor: 'rgba(0, 147, 103, 0.2)',
                          borderColor: 'rgba(1, 138, 97, 1)',
                          borderWidth: 1
                      }]
                  },
                  options: {
                      scales: {
                          y: {
                              beginAtZero: true
                          }
                      }
                  }
              });
          },
          error: function(err) {
              console.error(err);
          }
      });
  }

  $('#actualizarGrafica').on('click', function() {
      const month = $('#month').val();
      const year = $('#chartYear').val();

      actualizarGrafica(month, year);
  });
});
