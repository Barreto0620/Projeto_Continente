fetch("http://localhost:8080/Oceania")
.then((response) => response.json()) // converte a resposta para json
.then((data) => {
//manipulando os dados
const oceaniaList = document.getElementById("oceania-list");
data.forEach((Oceania) => {
	// iterando os filmes recebidos.
	const oceaniaDiv = document.createElement("div");
	oceaniaDiv.innerHTML = ` 
<h2> ${Oceania.nome} <h2/>
<img src = "${Oceania.img_link}" alt = "${Oceania.nome}">
<p> <strong> Dia da Viagem: </strong> ${Oceania.dia_da_viagem} <p/>
<p> <strong> Ponto Turistico: </strong> ${Oceania.ponto_turistico} <p/>
<p> <strong> Melhor Temporada: </strong> ${Oceania.temporada} <p/>
<p> <strong> Moeda Oficial: </strong> ${Oceania.moeda} <p/>
<p> <strong> Descrição: </strong> ${Oceania.descricao} <p/>
<p> <strong> Avaliação do local: </strong> ${Oceania.avaliacao} <p/>
<p> <strong> Valor da viagem: </strong> ${Oceania.valor_da_viagem} <p/> `;
oceaniaList.appendChild(oceaniaDiv);
});
})
.catch(error => console.error("Erro ao carregar os países:", error));