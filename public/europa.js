fetch("http://localhost:8080/Europa") //exibe os dados dos filmes puxados do filmes.json
  .then((response) => response.json()) // converte a resposta para json
  .then((data) => {
    //manipulando os dados
    const europaList = document.getElementById("europa-list");
    data.forEach((Europa) => {
      // iterando os filmes recebidos.
      const europaDiv = document.createElement("div");
      europaDiv.innerHTML = ` 
		<h2> ${Europa.país} <h2/>
		<img src = "${Europa.imagem}" alt = "${Europa.país}">
		<p> <strong> Dia da Viagem: </strong> ${Europa.dia_da_viagem} <p/>
		<p> <strong> Ponto Turistico: </strong> ${Europa.ponto_turistico} <p/>
		<p> <strong> Melhor Temporada: </strong> ${Europa.temporada} <p/>
		<p> <strong> Moeda Oficial: </strong> ${Europa.moeda} <p/>
		<p> <strong> Descrição: </strong> ${Europa.descrição} <p/>
		<p> <strong> Avaliação do local: </strong> ${Europa.avaliacao} <p/>
		<p> <strong> Valor da viagem: </strong> ${Europa.valor_da_viagem} <p/> `;
    europaList.appendChild(europaDiv);
    });
  })
  .catch((error) => console.error("Erro ao carregar os paises:", error));
