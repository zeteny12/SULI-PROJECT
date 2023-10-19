let imagesByColor = {
  "Kek": [
    "passion_A8202_kepek/Passion - A8202_2.jpg",
    "passion_A8202_kepek/Passion2.jpg"
  ],
  "Fekete": [
    "passion_A8202_kepek/feketePassion.jpg",
    "passion_A8202_kepek/feketePassion2.jpg"
  ]
};

let colorSelect = document.getElementById("szinValaszto");
let slideIndex = 0;

window.onload = function () {
  showSlides();
};

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n - 1));
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

function kivalasztottSzin() {
  const selectedColor = colorSelect.value;
  const imagePaths = imagesByColor[selectedColor];

  if (imagePaths) {
    for (let i = 0; i < imagePaths.length; i++) {
      const imageElement = document.querySelector(`.mySlides:nth-child(${i + 1}) img`);
      imageElement.src = imagePaths[i];
    }
  }
}



function kivalasztottSzin() {
  let szinValaszto = document.getElementById("szinValaszto");
  let kivalasztottSzin = szinValaszto.value;

  // Színekhez tartozó képek forrásai
  let kepTartalmak = {
    "Kek": ["passion_A8202_kepek/Passion - A8202_2.jpg", "passion_A8202_kepek/Passion2.jpg"],
    "Fekete": ["passion_A8202_kepek/feketePassion.jpg", "passion_A8202_kepek/feketePassion2.jpg"],
  };


  // Képek cseréje a kiválasztott színhez és méret beállítása
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    const img = slides[i].getElementsByTagName("img")[0];
    img.src = kepTartalmak[kivalasztottSzin][i];
    
  }
}
colorSelect.addEventListener('change', function () {
  const selectedColor = colorSelect.value;
  const imagePaths = imagesByColor[selectedColor];

  if (imagePaths) {
    // Kiválasztott képek betöltése
    for (let i = 0; i < 2; i++) { // A kettő a kiválasztott színből két képet jelent
      const imageElement = document.querySelector(`.mySlides:nth-child(${i + 1}) img`);
      imageElement.src = imagePaths[i];
    }
  }
});

