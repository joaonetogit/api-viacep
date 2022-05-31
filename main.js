const inputCep = document.getElementById("js-input-cep");
const btnCep = document.getElementById("js-buscar-cep");

const areaDados = document.getElementById("js-dados");
const msgError = document.getElementById("js-error");

const inputBairro = document.getElementById("js-input-bairro");
const inputCepDado = document.getElementById("js-input-cep-dados");
const inputLogradouro = document.getElementById("js-input-logradouro");
const inputEstado = document.getElementById("js-input-estado");

function buscarCep() {
  if (inputCep.value != "") {
    fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        inputBairro.value = json.bairro;
        inputCepDado.value = json.cep;
        inputLogradouro.value = json.logradouro;
        inputEstado.value = json.uf;

        areaDados.style.display = "block";
        msgError.style.display = "none";
      });
  } else {
    inputBairro.value = "";
    inputCepDado.value = "";
    inputLogradouro.value = "";
    inputEstado.value = "";
    areaDados.style.display = "none";
    msgError.style.display = "block";
  }
}

if (btnCep) {
  btnCep.addEventListener("click", buscarCep);
}
