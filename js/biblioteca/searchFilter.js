// $(document).ready(function () {
//   $('.searchInput').on('input', function () {
//     var searchValue = $(this).val().toLowerCase();

//     $('table tbody tr').each(function () {
//       var row = $(this);
//       var match = false;

//       row.find('td').each(function () {
//         var cellText = $(this).text().toLowerCase();
//         if (cellText.includes(searchValue)) {
//           match = true;
//           return false;
//         }
//       });

//       if (match) {
//         row.show();
//       } else {
//         row.hide();
//       }
//     });
//   });
// });