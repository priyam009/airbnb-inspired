$(document).ready(function() {
  guestDropdown();
});

function guestDropdown() {
  $("#guests").on("click", function(event) {
    event.preventDefault();
    if($(".dropdown").attr("data-toggle") === "false") {
      $(".dropdown").css("visibility", "visible");
      $(".dropdown").attr("data-toggle", true);
    } else {
      $(".dropdown").css("visibility", "hidden");
      $(".dropdown").attr("data-toggle", false);
    }
  });
}

function addAdults() {
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
