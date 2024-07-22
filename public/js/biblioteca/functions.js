$(document).ready(function () {

  $('.bg-user').click(function () {
    $(this).toggleClass('user-clicked');
    $('.user > ul > li').toggleClass('user-options');
  });

  $('#logout').click(function () {
    localStorage.clear();
    window.location.href = '/';
  });



  $(".vista1-panel").addClass("selected");

  $(".vista1-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(this).addClass("selected");
    $(`#history-panel,
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

    $(".vista1").show();
    $(`.history,
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
  });

  $(".vista2-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(this).addClass("selected");
    $(`#history-panel,
      .vista1-panel,
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

    $(".vista2").show();
    $(`.history,
      .vista1,
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
  });

  $(".vista3-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(this).addClass("selected");
    $(`#history-panel,
      .vista1-panel,
      .vista2-panel,
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

    $(".vista3").show();
    $(`.history,
      .vista1,
      .vista2,
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
  });

  $(".vista4-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(this).addClass("selected");
    $(`#history-panel,
      .vista1-panel,
      .vista2-panel,
      .vista3-panel,
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

    $(".vista4").show();
    $(`.history,
      .vista1,
      .vista2,
      .vista3,
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
  });

  $(".vista5-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(this).addClass("selected");
    $(`#history-panel,
      .vista1-panel,
      .vista2-panel,
      .vista3-panel,
      .vista4-panel,
      .vista6-panel,
      .vista7-panel,
      .vista8-panel,
      .vista9-panel,
      .vista10-panel,
      .vista11-panel,
      .vista12-panel,
      .vista13-panel
      `).removeClass("selected");

    $(".vista5").show();
    $(`.history,
      .vista1,
      .vista2,
      .vista3,
      .vista4,
      .vista6,
      .vista7,
      .vista8,
      .vista9,
      .vista10,
      .vista11,
      .vista12,
      .vista13
      `).hide();
  });

  $(".vista6-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(this).addClass("selected");
    $(`#history-panel,
      .vista1-panel,
      .vista2-panel,
      .vista3-panel,
      .vista4-panel,
      .vista5-panel,
      .vista7-panel,
      .vista8-panel,
      .vista9-panel,
      .vista10-panel,
      .vista11-panel,
      .vista12-panel,
      .vista13-panel
      `).removeClass("selected");

    $(".vista6").show();
    $(`.history,
      .vista1,
      .vista2,
      .vista3,
      .vista4,
      .vista5,
      .vista7,
      .vista8,
      .vista9,
      .vista10,
      .vista11,
      .vista12,
      .vista13
      `).hide();
  });

  $(".vista7-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(this).addClass("selected");
    $(`#history-panel,
      .vista1-panel,
      .vista2-panel,
      .vista3-panel,
      .vista4-panel,
      .vista5-panel,
      .vista6-panel,
      .vista8-panel,
      .vista9-panel,
      .vista10-panel,
      .vista11-panel,
      .vista12-panel,
      .vista13-panel
      `).removeClass("selected");

    $(".vista7").show();
    $(`.history,
      .vista1,
      .vista2,
      .vista3,
      .vista4,
      .vista5,
      .vista6,
      .vista8,
      .vista9,
      .vista10,
      .vista11,
      .vista12,
      .vista13
      `).hide();
  });

  $(".vista8-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(this).addClass("selected");
    $(`#history-panel,
      .vista1-panel,
      .vista2-panel,
      .vista3-panel,
      .vista4-panel,
      .vista5-panel,
      .vista6-panel,
      .vista7-panel,
      .vista9-panel,
      .vista10-panel,
      .vista11-panel,
      .vista12-panel,
      .vista13-panel
      `).removeClass("selected");

    $(".vista8").show();
    $(`.history,
      .vista1,
      .vista2,
      .vista3,
      .vista4,
      .vista5,
      .vista6,
      .vista7,
      .vista9,
      .vista10,
      .vista11,
      .vista12,
      .vista13
      `).hide();
  });

  $(".vista9-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(this).addClass("selected");
    $(`#history-panel,
      .vista1-panel,
      .vista2-panel,
      .vista3-panel,
      .vista4-panel,
      .vista5-panel,
      .vista6-panel,
      .vista7-panel,
      .vista8-panel,
      .vista10-panel,
      .vista11-panel,
      .vista12-panel,
      .vista13-panel
      `).removeClass("selected");

    $(".vista9").show();
    $(`.history,
      .vista1,
      .vista2,
      .vista3,
      .vista4,
      .vista5,
      .vista6,
      .vista7,
      .vista8,
      .vista10,
      .vista11,
      .vista12,
      .vista13
      `).hide();
  });

  $(".vista10-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(this).addClass("selected");
    $(`#history-panel,
      .vista1-panel,
      .vista2-panel,
      .vista3-panel,
      .vista4-panel,
      .vista5-panel,
      .vista6-panel,
      .vista7-panel,
      .vista8-panel,
      .vista9-panel,
      .vista11-panel,
      .vista12-panel,
      .vista13-panel
      `).removeClass("selected");

    $(".vista10").show();
    $(`.history,
      .vista1,
      .vista2,
      .vista3,
      .vista4,
      .vista5,
      .vista6,
      .vista7,
      .vista8,
      .vista9,
      .vista11,
      .vista12,
      .vista13
      `).hide();
  });

  $(".vista11-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(this).addClass("selected");
    $(`#history-panel,
      .vista1-panel,
      .vista2-panel,
      .vista3-panel,
      .vista4-panel,
      .vista5-panel,
      .vista6-panel,
      .vista7-panel,
      .vista8-panel,
      .vista9-panel,
      .vista10-panel,
      .vista12-panel,
      .vista13-panel
      `).removeClass("selected");

    $(".vista11").show();
    $(`.history,
      .vista1,
      .vista2,
      .vista3,
      .vista4,
      .vista5,
      .vista6,
      .vista7,
      .vista8,
      .vista9,
      .vista10,
      .vista12,
      .vista13
      `).hide();
  });

  $(".vista12-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(this).addClass("selected");
    $(`#history-panel,
      .vista1-panel,
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
      .vista13-panel
      `).removeClass("selected");

    $(".vista12").show();
    $(`.history,
      .vista1,
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
      .vista13
      `).hide();
  });

  $(".vista13-panel").click(function () {
    $(".searchInput").val("");
    $("table tbody tr").show();

    $(this).addClass("selected");
    $(`#history-panel,
      .vista1-panel,
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
      .vista12-panel
      `).removeClass("selected");

    $(".vista13").show();
    $(`.history,
      .vista1,
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
      .vista12
      `).hide();
  });

});
