document.addEventListener("DOMContentLoaded", function () {
  startApp();
});

function startApp() {
  navigation();
  createGalery();
}

function navigation() {
  const bar = document.querySelector(".header");
  const about = document.querySelector(".about");
  const body = document.querySelector("body");

  window.addEventListener("scroll", function () {
    if (about.getBoundingClientRect().bottom < 0) {
      bar.classList.add("fixed");
      body.classList.add("body-scroll");
    } else {
      bar.classList.remove("fixed");
      body.classList.remove("body-scroll");
    }
  });
}

function createGalery() {
  const galery = document.querySelector(".galery__image");

  for (let i = 1; i <= 12; i++) {
    const image = document.createElement("picture");
    image.innerHTML = `
      
      <picture>
      <source srcset="./build/img/thumb/${i}.webp" type="image/webp" />
      <img loading="lazy" width="200" height="300" src="./build/img/thumb/${i}.jpg" alt="Img galery" />
    </picture>

      `;

    image.onclick = function () {
      showImage(i);
    };
    galery.appendChild(image);
  }
}

function showImage(id) {
  const image = document.createElement("picture");
  image.innerHTML = `
    
    <picture>
    <source srcset="./build/img/grande/${id}.webp" type="image/webp" />
    <img loading="lazy" width="200" height="300" src="./build/img/grande/${id}.jpg" alt="Img galery" />
  </picture>

    `;
  // CREA OVERLAY CON IMAGEN
  const overlay = document.createElement("div");
  overlay.appendChild(image);
  overlay.classList.add("overlay");
  overlay.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("fixed-body");
    overlay.remove();
  };

  //BOTÓN PARA CERRAR EL MODAL
  const closeModal = document.createElement("p");
  closeModal.textContent = "X";
  closeModal.classList.add("btn-close");
  closeModal.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("fixed-body");
    overlay.remove();
  };
  overlay.appendChild(closeModal);

  //AÑADE AL  HTML
  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fixed-body");
}
