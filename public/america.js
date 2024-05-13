fetch("http://localhost:8080/America")
  .then((response) => response.json())
  .then((data) => {
    const sliderContent = document.querySelector(".slider__content");

    data.forEach((viagem) => {
      const sliderItem = document.createElement("div");
      sliderItem.classList.add("slider__item");

      sliderItem.innerHTML = `
        <img class="slider__image" src="${viagem.img}" alt="${viagem.ponto_turistico}">
        <div class="slider__info">
          <div class="card">
            <h2>${viagem.pais}</h2>
            <p>Ponto Turístico: ${viagem.ponto_turistico}</p>
            <p>Temporada: ${viagem.temporada}</p>
            <p>Moeda: ${viagem.moeda}</p>
            <p>Disponibilidade: ${viagem.dia_da_viagem}</p>
            <p>Valor: ${viagem.valor_da_viagem}</p>
            <p>Avaliação: ${viagem.avaliacao}</p>
          </div>
        </div>
      `;

      sliderContent.appendChild(sliderItem);
    });

    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const slider = document.querySelector(".slider__content");

    prevButton.addEventListener("click", () => {
      slider.scrollBy({
        left: -slider.offsetWidth,
        behavior: "smooth"
      });
    });

    nextButton.addEventListener("click", () => {
      slider.scrollBy({
        left: slider.offsetWidth,
        behavior: "smooth"
      });
    });
  })
  .catch((error) => console.error("Erro ao carregar os países:", error));
