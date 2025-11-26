const divApp = document.getElementById('app');

async function fetchData() {
  try {
    const response = await fetch(configAPI.urlPrincipal);

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    const dadosRetornados = await response.json();

    for (let i = 0; i < 32 && i < dadosRetornados.data.length; i++) {

      const vagaOriginal = dadosRetornados.data[i];

      const vaga = new VagaRemota(
        vagaOriginal.title,
        vagaOriginal.company_name,
        vagaOriginal.description,
        vagaOriginal.url,
        vagaOriginal.remote
      );

      let categoria;
      if (vaga.remoto) {
        categoria = new Categoria("Remota");
      } else {
        categoria = new Categoria("Presencial");
      }

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>${vaga.titulo}</h3>
        <p class="empresa">${vaga.empresa}</p>

        <div class="descricao">
          ${vaga.exibirResumo()}
        </div>

        <span class="tipo ${categoria.tipo === "Remota" ? "remota" : "presencial"}">
          ${categoria.tipo}
        </span>

        <a href="${vaga.linkParaVaga}" target="_blank">
          Site
        </a>
      `;

      card.addEventListener("click", () => {
        card.classList.toggle("ativo");
      });

      divApp.appendChild(card);
    }

  } catch (error) {
    alert(constantesApp.mensagemErro);
    console.log(error);
  }
}

fetchData();

const vagaTeste = new VagaRemota(
  "Dev Front-End",
  "Empresa X",
  "Vaga estágio",
  "https://teste.com",
  true
);

console.log(vagaTeste.exibirResumo());
