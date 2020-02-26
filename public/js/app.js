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
    updateGuestsInput();
  });

  $("#infants-plus").on("click", function() {
    event.preventDefault();
    $("#infants-count").text(parseInt($("#infants-count").text()) + 1);
    updateGuestsInput();
  });
}

//Close Guests Dropdown when click outside anywhere on the screen
function closeDropdown() {}

//Count the total updated adults, children and infants and update on the Guests input
function updateGuestsInput() {
  //Individual Guest Count
  let adultCount = parseInt($("#adults-count").text());
  let childrenCount = parseInt($("#children-count").text());
  let infantCount = parseInt($("#infants-count").text());

  //Total Guesnt Count
  let count = adultCount+childrenCount+infantCount;

  //Select first div and update Guest count text
  if(count > 0) {
    $("#guests").children().first().text("Guests: " + count);
  } else {
    $("#guests").children().first().text("Guests");
  }
}
