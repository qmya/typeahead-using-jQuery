$(document).ready(function () {
  $("#search").keyup(function () {
    $("#result").html("");
    var searchField = $("#search").val();
    console.log(searchField);
    var expression = new RegExp(searchField, "i");

    console.log(expression);
    $.getJSON("http://localhost:3000/states", function (data) {
      $.each(data, function (key, value) {
        if (value.name.search(expression) == 0) {
          console.log("yes yes");
          console.log(value);
          console.log(value.name.search(expression));
          $("#result").append(
            "<option id='" + key + "'>" + value.name + "</option>"
          );
        }
      });
    });
  });
});
