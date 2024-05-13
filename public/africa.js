fetch("http://localhost:8080/Africa") //exibe os dados dos filmes puxados do filmes.json
  .then((response) => response.json()) // converte a resposta para json
  .then((data) => {
    //manipulando os dados
    const africaList = document.getElementById("africa-list");
    data.forEach((Africa) => {
      // iterando os filmes recebidos.
      const africaDiv = document.createElement("div");
      africaDiv.innerHTML = ` 
		<h2> ${Africa.nome} <h2/>
		<img src = "${Africa.imagem}" alt = "${Africa.nome}">
		<p> <strong> Dia da Viagem: </strong> ${Africa.dia_da_viagem} <p/>
		<p> <strong> Ponto Turistico: </strong> ${Africa.ponto_turistico} <p/>
		<p> <strong> Melhor Temporada: </strong> ${Africa.temporada} <p/>
		<p> <strong> Moeda Oficial: </strong> ${Africa.moeda} <p/>
		<p> <strong> Descrição: </strong> ${Africa.descricao} <p/>
		<p> <strong> Avaliação do local: </strong> ${Africa.avaliacao} <p/>
		<p> <strong> Valor da viagem: </strong> ${Africa.valor_da_viagem} <p/> `;
    africaList.appendChild(africaDiv);
    });
  })
  .catch((error) => console.error("Erro ao carregar os paises:", error));
