changeCardDisplay("#name", ".cardholder-name");

changeCardDisplay("#month", "#month-display");

changeCardDisplay("#year", "#year-display");

changeCardDisplay("#cvc", "#cvc-number");

looseFocus("#cvc");

looseFocus("#year");

wrongFormat("#cvc");

wrongFormat("#year");

$("#first-button").click(function() {
    if ($("input").next("p").attr("class") !== "check" || $("input").val() !== "") {
      if($("input").val() !== "") {
        $(".complete").css("display", "block");
        $(".form").css("display", "none");
      }
    }
});

$("#month").blur(function() {
    if($(this).val() == "") {
        if ($("#year").siblings("p").attr("class") !== "check") {
            $("#year").after("<p style='color: red; margin-top: 8px;' class='check'>Can't be empty</p>");
        }
        $(this).addClass("changed")
    }else {
        $(".check").remove();
        $("#month").removeClass("changed");
    }
});

$("#month").keyup(function() {
  let numbers = /[a-z]/gi;
  if($(this).val().match(numbers)) {
    if ($("#year").siblings("p").attr("class") !== "check") {
      $("#year").after("<p style='color: red; margin-top: 8px;' class='check'>Can't be empty</p>");
    }
    $(this).addClass("changed");
  }else {
    $(".check").remove();
    $("#month").removeClass("changed");
  }
});

$("#card-number").keyup(function () {
  let numbers = /[a-z]/gi;
  if($(this).val().match(numbers)) {
    if ($(this).next().attr("class") !== "check") {
        $(this).addClass("change").after("<p style='color: red; margin-top: 8px;' class='check'>Wrong format, numbers only</p>");
    }
  }else {
    $(".check").remove();
    $(this).removeClass("change");
  }

  $(this).prop("value", function () {
    let cardNumber = $("#card-number").val();
    let whiteCardNumber = cardNumber.replace(
      /(\d{4})(\d{4})(\d{4})(\d{4})/,
      "$1 $2 $3 $4"
    );
    return whiteCardNumber;
  });

  $("#display-card-number")
    .text("")
    .append(function () {
      let cardNumber = $("#card-number").val();
      let whiteCardNumber = cardNumber.replace(/(\d{4})/g, "$1 ");
      return whiteCardNumber;
    });
});

function changeCardDisplay(para1, para2) {
  $(para1).keyup(function () {
    $(para2)
      .text("")
      .append(function () {
        return $(para1).val().toUpperCase();
      });
  });
}

function looseFocus(param) {
    $(param).blur(function() {
        if($(param).val() == "") {
            if ($(this).next().attr("class") !== "check1") {
                $(this).after("<p style='color: red; margin-top: 8px;' class='check1'>Can't be empty</p>");
            }
            $(this).addClass("changed");
        }else {
            $(".check1").remove();
            $(this).removeClass("changed");
        }
    });
}

function wrongFormat(param1) {
  $(param1).keyup(function() {
    let numbers = /[a-z]/gi;
    if($(this).val().match(numbers)) {
      if ($(this).next().attr("class") !== "check") {
        $(this).after("<p style='color: red; margin-top: 8px;' class='check2'>Numbers only</p>");
      }
      $(this).addClass("changed");
    }else {
      $(".check2").remove();
      $(this).removeClass("changed");
    }
  });
}