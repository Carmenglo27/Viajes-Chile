$("h5").click(function(){
    $(this).css({
    "color": "skyblue",
    "font-size": "2em"
    });
    });

 $(document).ready(function () {
    $("#boton").click(function () {
    alert("El correo fue enviado correctamente");
     });
    });

    $(document).ready(function() {
      $("a.nav-link").on("click", function(event) {
          if (this.hash !== "a") {
              event.preventDefault();
              var hash = this.hash;

              $("html, body").animate({
                  scrollTop: $(hash).offset().top
              }, 800);
          }
      });
  });

  