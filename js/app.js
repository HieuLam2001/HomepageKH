var toggleButton = document.querySelector(".toggle-menu");
var navBar = document.querySelector(".nav-bar");
toggleButton.addEventListener("click", function () {
  navBar.classList.toggle("toggle");
});
AOS.init({
  duration: 2000,
  delay: 300,
  offset: 150,
  once: true,
  disable: "mobile",
  disable: function () {
    var maxWidth = 1023;
    return window.innerWidth < maxWidth;
  },
});
$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
AOS.init({});
AOS.init({});
$(document).ready(function () {
  $(".num-in span").click(function () {
    var $input = $(this).parents(".num-block").find("input.in-num");
    if ($(this).hasClass("minus")) {
      var count = parseFloat($input.val()) - 1;
      count = count < 1 ? 1 : count;
      if (count < 2) {
        $(this).addClass("dis");
      } else {
        $(this).removeClass("dis");
      }
      $input.val(count);
    } else {
      var count = parseFloat($input.val()) + 1;
      $input.val(count);
      if (count > 1) {
        $(this).parents(".num-block").find(".minus").removeClass("dis");
      }
    }

    $input.change();
    return false;
  });
});
$(".stars").mousemove(function (e) {
  var gLeft = $(".stars .stars-ghost").offset().left,
    pX = e.pageX;

  $(".stars .stars-ghost").width(pX - gLeft);
});
$(document).ready(function () {
  /* 1. Visualizing things on Hover - See next part for action on click */
  $("#stars li")
    .on("mouseover", function () {
      var onStar = parseInt($(this).data("value"), 10); // The star currently mouse on

      // Now highlight all the stars that's not after the current hovered star
      $(this)
        .parent()
        .children("li.star")
        .each(function (e) {
          if (e < onStar) {
            $(this).addClass("hover");
          } else {
            $(this).removeClass("hover");
          }
        });
    })
    .on("mouseout", function () {
      $(this)
        .parent()
        .children("li.star")
        .each(function (e) {
          $(this).removeClass("hover");
        });
    });

  /* 2. Action to perform on click */
  $("#stars li").on("click", function () {
    var onStar = parseInt($(this).data("value"), 10); // The star currently selected
    var stars = $(this).parent().children("li.star");

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass("selected");
    }

    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass("selected");
    }

    // JUST RESPONSE (Not needed)
    // var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    // var msg = "";
    // if (ratingValue > 1) {
    //     msg = "Thanks! You rated this " + ratingValue + " stars.";
    // }
    // else {
    //     msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
    // }
    // responseMessage(msg);
  });
});

function responseMessage(msg) {
  $(".success-box").fadeIn(200);
  $(".success-box div.text-message").html("<span>" + msg + "</span>");
}
$(".zoomWrapper img").click(function(){
  $(this).toggleClass("flasher");
});
$(".img_producto_container")
  // tile mouse actions
  .on("mouseover", function() {
    $(this)
      .children(".img_producto")
      .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
  })
  .on("mouseout", function() {
    $(this)
      .children(".img_producto")
      .css({ transform: "scale(1)" });
  })
  .on("mousemove", function(e) {
    $(this)
      .children(".img_producto")
      .css({
        "transform-origin":
          ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
          "% " +
          ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
          "%"
      });
  });
  var modal = document.getElementById("myModal");
