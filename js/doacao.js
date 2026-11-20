const valoresDoacao = document.querySelectorAll(".valor-doacao");
const valorPersonalizado = document.getElementById("valor-personalizado");
const quantidadeImpacto = document.getElementById("quantidade-impacto");
const valorTotal = document.getElementById("valor-total");

function calcularImpactoDaDoacao(valor) {
  const numero = Number(valor);

  if (!Number.isFinite(numero) || numero <= 0) {
    return 0;
  }

  return Math.floor(numero / 5);
}

function atualizarImpactoDaDoacao(valorDoacao) {
  const kits = calcularImpactoDaDoacao(valorDoacao);
  const textoUnidade = kits <= 1 ? "kit escolar" : "kits escolares";

  quantidadeImpacto.textContent = `${kits} ${textoUnidade}`;
}

function atualizarValorTotal(valor) {
  const numero = Number(valor);

  valorTotal.textContent = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number.isFinite(numero) && numero > 0 ? numero : 0);
}

function removerSelecaoDoacao() {
  valoresDoacao.forEach((botao) => {
    botao.classList.remove("ativo");
  });
}

function atualizarDoacao(valor) {
  atualizarImpactoDaDoacao(valor);
  atualizarValorTotal(valor);
}

// Eventos

valoresDoacao.forEach((botao) => {
  botao.addEventListener("click", () => {
    removerSelecaoDoacao();

    botao.classList.add("ativo");
    valorPersonalizado.value = botao.dataset.valor;

    atualizarDoacao(botao.dataset.valor);
  });
});

valorPersonalizado.addEventListener("input", () => {
  removerSelecaoDoacao();

  atualizarDoacao(valorPersonalizado.value);
});
