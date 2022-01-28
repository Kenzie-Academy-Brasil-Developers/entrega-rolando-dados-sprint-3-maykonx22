const botao = document.getElementById("girar");
const divTabela = document.getElementById("tabela");
const divGrafico = document.getElementById("tbl-grafico");

function rolarDados() {
  let count = [];

  for (let i = 0; i <= 12; i++) {
    count.push(0);
  }

  let dado1 = 0;
  let dado2 = 0;
  let somadados = 0;

  for (let i = 0; i < 1000; i++) {
    dado1 = Math.floor(Math.random() * 6) + 1;
    dado2 = Math.floor(Math.random() * 6) + 1;
    somadados = dado1 + dado2;
    count[somadados]++;
  }
  criarTabela(count);
  tabelaGrafica(count);
  return count;
}

function criarTabela(rolarDados) {
  divTabela.innerText = "";

  const tabela = document.createElement("table");
  const primeiraLinha = document.createElement("tr");
  primeiraLinha.classList.add("menu-tabela");
  const dadosSomados = document.createElement("td");
  dadosSomados.innerText = "Soma dos Dados";

  const quantVezes = document.createElement("td");
  quantVezes.innerText = "Vezes que apareceu";

  primeiraLinha.appendChild(dadosSomados);
  primeiraLinha.appendChild(quantVezes);

  tabela.appendChild(primeiraLinha);

  for (let i = 2; i < rolarDados.length; i++) {
    const linhas = document.createElement("tr");
    const colunaSomado = document.createElement("td");
    colunaSomado.classList.add("soma");
    colunaSomado.innerText = i;

    const colunaVezes = document.createElement("td");
    colunaVezes.innerText = rolarDados[i];

    linhas.appendChild(colunaSomado);
    linhas.appendChild(colunaVezes);

    tabela.appendChild(linhas);
  }

  divTabela.appendChild(tabela);
}

function tabelaGrafica(rolarDados) {
  divGrafico.innerText = "";

  const tabela = document.createElement("table");
  const primeiraLinha = document.createElement("tr");
  primeiraLinha.classList.add("menu-tabela");
  const primeiraColuna = document.createElement("td");
  primeiraColuna.innerText = "Soma dos Dados";

  const colunaGrafico = document.createElement("td");
  colunaGrafico.innerText = "Grafico de vezes que apareceu";
  colunaGrafico.classList.add("td-grafico");

  primeiraLinha.appendChild(primeiraColuna);
  primeiraLinha.appendChild(colunaGrafico);

  tabela.appendChild(primeiraLinha);

  for (let i = 2; i < rolarDados.length; i++) {
    const linhas = document.createElement("tr");
    const colunaSoma = document.createElement("td");
    colunaSoma.classList.add("soma");
    colunaSoma.innerText = i;

    const colunaG = document.createElement("td");
    const divG = document.createElement("div");
    divG.style.width = `${rolarDados[i]}px`;

    if (i % 2 === 0) {
      divG.classList.add("cor1");
    } else {
      divG.classList.add("cor2");
    }

    colunaG.appendChild(divG);
    linhas.appendChild(colunaSoma);
    linhas.appendChild(colunaG);

    tabela.appendChild(linhas);
  }
  divGrafico.appendChild(tabela);
}

botao.addEventListener("click", rolarDados);
