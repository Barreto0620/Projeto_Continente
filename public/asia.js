fetch("http://localhost:8080/Asia") //exibe os dados dos filmes puxados do filmes.json
  .then((response) => response.json()) // converte a resposta para json
  .then((data) => {
    //manipulando os dados
    const asiaList = document.getElementById("asia-list");
    data.forEach((Asia) => {
      // iterando os filmes recebidos.
      const asiaDiv = document.createElement("div");
      asiaDiv.innerHTML = ` 
		<h2> ${Asia.nome} <h2/>
		<img src = "${Asia.imagem2}" alt = "${Asia.nome}">
		<p> <strong> Dia da Viagem: </strong> ${Asia.dia_viagem} <p/>
		<p> <strong> Ponto Turistico: </strong> ${Asia.ponto_turistico} <p/>
		<p> <strong> Melhor Temporada: </strong> ${Asia.temporada} <p/>
		<p> <strong> Moeda Oficial: </strong> ${Asia.moeda} <p/>
		<p> <strong> Descrição: </strong> ${Asia.descricao} <p/>
		<p> <strong> Avaliação do local: </strong> ${Asia.avaliacao} <p/>
		<p> <strong> Valor da viagem: </strong> ${Asia.val_viagem} <p/> `;
    asiaList.appendChild(asiaDiv);
    });
  })
  .catch((error) => console.error("Erro ao carregar os paises:", error));
