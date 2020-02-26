$(document).ready(function() {
  guestDropdown();
  addAdults();
  addChildren();
  addInfants();
  updateGuestsInput();
});

//Toggle Guests Dropdown
function guestDropdown() {
  $("#guests").on("click", function(event) {
    event.preventDefault();

    //Open dropdown
    if ($(".dropdown").attr("data-toggle") === "false") {
      $(".dropdown").css("visibility", "visible");
      $(".dropdown").attr("data-toggle", true);
    }
    //Close dropdown
    else {
      $(".dropdown").css("visibility", "hidden");
      $(".dropdown").attr("data-toggle", false);
    }
  });
}

//Update total number of Adults count
function addAdults() {
  $("#adults-minus").on("click", function() {
    event.preventDefault();
    if (parseInt($("#adults-count").text()) > 0) {
      $("#adults-count").text(parseInt($("#adults-count").text()) - 1);
      updateGuestsInput();
    }
  });

  $("#adults-plus").on("click", function() {
    event.preventDefault();
    $("#adults-count").text(parseInt($("#adults-count").text()) + 1);
    updateGuestsInput();
  });
}

//Update total number of Children count
function addChildren() {
  $("#children-minus").on("click", function() {
    event.preventDefault();
    if (parseInt($("#children-count").text()) > 0) {
      $("#children-count").text(parseInt($("#children-count").text()) - 1);
    }
    updateGuestsInput();
  });

  $("#children-plus").on("click", function() {
    event.preventDefault();
    $("#children-count").text(parseInt($("#children-count").text()) + 1);
    updateGuestsInput();
  });
}

//Update total number of Infants count
function addInfants() {
  $("#infants-minus").on("click", function() {
    event.preventDefault();
    if (parseInt($("#infants-count").text()) > 0) {
      $("#infants-count").text(parseInt($("#infants-count").text()) - 1);
    }
  });

  $("#infants-plus").on("click", function() {
    event.preventDefault();
    $("#infants-count").text(parseInt($("#infants-count").text()) + 1);
  });
}
