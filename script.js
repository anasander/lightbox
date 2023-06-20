function abrirModal() {
  document.getElementById("lightbox").style.display = "block";
}

function fecharModal() {
  document.getElementById("lightbox").style.display = "none";
}

let indexSlides = 1;
mostrarSlides(indexSlides);

function proximoSlide(n) {
  mostrarSlides((indexSlides += n));
}

function slideAtual(n) {
  mostrarSlides((indexSlides = n));
}

function mostrarSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let thumbnail = document.getElementsByClassName("thumbnail");
  let legenda = document.getElementById("legenda");

  if (n > slides.length) {
    indexSlides = 1;
  }

  if (n < 1) {
    indexSlides = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < thumbnail.lenght; i++) {
    thumbnail[i].className = thumbnail[i].className.replace(" active", "");
  }

  slides[indexSlides - 1].style.display = "block";
  thumbnail[indexSlides - 1].className += " active";
  legenda.innerHTML = thumbnail[indexSlides - 1].alt;
}
