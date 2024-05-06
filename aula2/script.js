// selecionar o botao
var botaoVoltarTopo = document.getElementById("botao");

// Quando o usuario rolar a pagina mais de 20px na vertical mostra o botao
window.onscroll = function () { funcaoRolagem() };


function funcaoRolagem() {
    if (document.documentElement.scrollTop > 40) {
        botaoVoltarTopo.style.display = "block";
    } else {
        botaoVoltarTopo.style.display = "none";
    }
}

botaoVoltarTopo.onclick = function () {
    document.documentElement.scrollTop = 0;
}