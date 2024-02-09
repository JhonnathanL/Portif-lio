window.addEventListener("scroll", function () {
  var header = document.getElementById("main-header");

  if (window.scrollY > 100) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

$(document).ready(function () {
  $('a[href^="#"]').on('click', function (event) {
     event.preventDefault();
     var offset = 200;

     $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - offset
     }, 1000);
  });
});


