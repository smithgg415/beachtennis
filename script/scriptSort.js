
let qtde = 0;
let nomesMasculinos = [];
let nomesFemininos = [];
let totalNomes = 0;
let countdownInterval;

function abrirModal() {
    qtde = document.getElementById("qtde").value;

    if (qtde % 2 !== 0 || qtde <= 0) {
        alert("A quantidade de nomes deve ser par e maior que zero!");
        return;
    }

    totalNomes = qtde;
    $('#nameModal').modal('show');
}
function adicionarNome() {
    let nome = document.getElementById("nome").value;
    let genero = document.getElementById("genero").value;

    if (nome && (genero === 'M' || genero === 'F')) {
        if (genero === 'M') {
            nomesMasculinos.push(nome);
        } else {
            nomesFemininos.push(nome);
        }
        qtde--;

        if (qtde > 0) {
            document.getElementById("nome").value = "";
            document.getElementById("genero").value = "M";
        } else {
            $('#nameModal').modal('hide');
            iniciarContagemRegressiva();
        }
    } else {
        alert("Por favor, insira um nome válido e selecione um gênero.");
    }
}

function iniciarContagemRegressiva() {
    let tempo = 5; // Tempo em segundos
    document.getElementById("countdown").innerText = `Sorteio em: ${tempo}`;
    countdownInterval = setInterval(() => {
        tempo--;
        if (tempo > 0) {
            document.getElementById("countdown").innerText = `Sorteio em: ${tempo}`;
        } else {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerText = "";
            realizarSorteio();
        }
    }, 1000);
}

function realizarSorteio() {
    nomesMasculinos = nomesMasculinos.sort(() => Math.random() - 0.5);
    nomesFemininos = nomesFemininos.sort(() => Math.random() - 0.5);

    let resultadoHTML = '<table class="table table-striped"><thead><tr><th>Pessoa 01 da dupla</th><th>Pessoa 02 da dupla</th></tr></thead><tbody>';
    while (nomesMasculinos.length > 0 && nomesFemininos.length > 0) {
        resultadoHTML += `<tr><td>${nomesMasculinos.pop()}</td><td>${nomesFemininos.pop()}</td></tr>`;
    }
    while (nomesMasculinos.length > 1) {
        resultadoHTML += `<tr><td>${nomesMasculinos.pop()}</td><td>${nomesMasculinos.pop()}</td></tr>`;
    }
    while (nomesFemininos.length > 1) {
        resultadoHTML += `<tr><td>${nomesFemininos.pop()}</td><td>${nomesFemininos.pop()}</td></tr>`;
    }
    resultadoHTML += '</tbody></table>';
    document.getElementById("resultado").innerHTML = resultadoHTML;
}