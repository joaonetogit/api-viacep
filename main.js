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
    axios({
      method: "GET",
      url: `https://viacep.com.br/ws/${inputCep.value}/json/`,
    }).then((response) => {
      let data = response.data;
      inputBairro.value = data.bairro;
      inputCepDado.value = data.cep;
      inputLogradouro.value = data.logradouro;
      inputEstado.value = data.uf;

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

function clickEnter(event) {
  if (event.code === "Enter") {
    buscarCep();
  }
}

inputCep.oninput = function () {
  if (this.value.length > 8) {
    this.value = this.value.slice(0, 8);
  }
};

if (btnCep) {
  btnCep.addEventListener("click", buscarCep);
}

if (inputCep) {
  inputCep.addEventListener("keyup", clickEnter);
}
