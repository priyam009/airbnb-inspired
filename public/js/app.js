$(document).ready(function() {
  $("#guests").on("click", function(event) {
    event.preventDefault();
  });

  $("#adults-minus").on("click", function() {
    event.preventDefault();
    if (parseInt($("#adults-count").text()) > 0) {
      $("#adults-count").text(parseInt($("#adults-count").text()) - 1);
    }
  });

  $("#adults-plus").on("click", function() {
    event.preventDefault();
    $("#adults-count").text(parseInt($("#adults-count").text()) + 1);
  });
});
