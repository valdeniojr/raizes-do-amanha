const formulario = document.getElementById("formulario-voluntario");
const mensagemErroFormulario = document.getElementById("erro-formulario");

const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoTelefone = document.getElementById("telefone");

const campoCep = document.getElementById("cep");
const mensagemErroCep = document.getElementById("erro-cep");
const campoLogradouro = document.getElementById("logradouro");
const campoBairro = document.getElementById("bairro");
const campoNumero = document.getElementById("numero");
const campoCidade = document.getElementById("cidade");
const campoEstado = document.getElementById("estado");
const campoMensagem = document.getElementById("mensagem");

function mostarErro(campo, mensagem) {
  const elementoErro = document.getElementById(`erro-${campo.id}`);

  campo.classList.add("invalido");
  campo.classList.remove("valido");

  if (elementoErro) {
    elementoErro.textContent = mensagem;
  }
}

function limparErro(campo) {
  const elementoErro = document.getElementById(`erro-${campo.id}`);

  campo.classList.remove("invalido");
  campo.classList.add("valido");

  if (elementoErro) {
    elementoErro.textContent = "";
  }
}

function validarNome(nome) {
  return nome.trim().length >= 3;
}

function validarEmail(email) {
  // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email.trim());
}

function validarTelefone(telefone) {
  const telefoneLimpo = telefone.replace(/\D/g, "");
  const telefoneRegex = /^[0-9]{10,11}$/;

  return telefoneRegex.test(telefoneLimpo);
}

function limparDados() {
  campoLogradouro.value = "";
  campoBairro.value = "";
  campoCidade.value = "";
  campoEstado.value = "";
}

function limparFormulario() {
  campoNome.value = "";
  campoEmail.value = "";
  campoTelefone.value = "";
  campoLogradouro.value = "";
  campoBairro.value = "";
  campoNumero.value = "";
  campoCidade.value = "";
  campoEstado.value = "";
  campoMensagem.value = "";
}

async function pesquisarCEP(valor) {
  const cepLimpo = valor.replace(/\D/g, "");
  const validaCep = /^[0-9]{8}$/;

  if (!validaCep.test(cepLimpo)) {
    mensagemErroCep.textContent = "CEP Inválido";
    return;
  }

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);

    if (!resposta.ok) {
      throw new Error("Erro ao consultar o CEP");
    }

    const dados = await resposta.json();

    if (dados.erro) {
      mensagemErroCep.textContent = "CEP não encontrado";
      return;
    }
    return dados;
  } catch (error) {
    mensagemErroCep.textContent = "Não foi possível consultar o CEP";
    console.log("erro");
  }
}

async function atualizarDados(cep) {
  limparDados();

  const dados = await pesquisarCEP(cep);

  if (!dados) {
    return;
  }

  mensagemErroCep.textContent = "";

  campoLogradouro.value = dados.logradouro;
  campoBairro.value = dados.bairro;
  campoCidade.value = dados.localidade;
  campoEstado.value = dados.uf;
}

// Eventos

campoNome.addEventListener("input", () => {
  if (!validarNome(campoNome.value)) {
    mostarErro(campoNome, "O nome deve conter pelo menos 3 letras.");
    return;
  }
  limparErro(campoNome);
});

campoEmail.addEventListener("input", () => {
  if (!validarEmail(campoEmail.value)) {
    mostarErro(campoEmail, "Informe um e-mail válido.");
    return;
  }
  limparErro(campoEmail);
});

campoTelefone.addEventListener("input", () => {
  if (!validarTelefone(campoTelefone.value)) {
    mostarErro(campoTelefone, "Informe um número de telefone válido.");
    return;
  }
  limparErro(campoTelefone);
});

campoCep.addEventListener("change", () => {
  if (campoCep.value.trim() !== "") {
    atualizarDados(campoCep.value);
  } else {
    limparDados();
    mensagemErroCep.textContent = "";
  }
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nomeValido = validarNome(campoNome.value);
  const emailValido = validarEmail(campoEmail.value);
  const telefoneValido = validarTelefone(campoTelefone.value);

  if (!nomeValido || !emailValido || !telefoneValido) {
    mensagemErroFormulario.textContent =
      "Existem campos inválidos. Verifique as informações e tente novamente.";
    return;
  }

  mensagemErroFormulario.textContent = "";
  limparFormulario();
});
