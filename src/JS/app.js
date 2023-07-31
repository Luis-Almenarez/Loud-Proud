document.addEventListener("DOMContentLoaded", function () {
  startApp();
});

function startApp() {
  createGalery();
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

    galery.appendChild(image);
  }
}
