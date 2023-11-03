$("a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      2000,
      function () {
        window.location.hash = hash;
      }
    );
  }
});

//paralax
//about
$(window).on("load", function () {
  $(".pKiri").addClass("pMuncul");
  $(".pKanan").addClass("pMuncul");
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  //jumbotron
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1.5 + "%)",
  });

  //portfolio
  if (wScroll > $(".projects").offset().top - 200) {
    $(".projects #bg-body").each(function (i) {
      setTimeout(function () {
        $(".projects #bg-body").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });
  }
});
