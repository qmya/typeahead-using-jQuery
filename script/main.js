$(document).ready(function () {
  $("#search").keyup(function () {
    $("#result").html("");
    var searchField = $("#search").val();
    var expression = new RegExp(searchField, "i");
    $.getJSON("http://localhost:3000/states", function (data) {
      $.each(data, function (key, value) {
        if (value.name.search(expression) == 0) {
          $("#result").append(
            "<option id='" + key + "'>" + value.name + "</option>"
          );
        }
      });
    });
  });
});
