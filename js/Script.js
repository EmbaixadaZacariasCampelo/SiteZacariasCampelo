document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementById('overlay-aviso');
    var botao = document.getElementById('btn-ciente');
    var conteudo = document.querySelector('.conteudo-principal');

    botao.addEventListener('click', function () {
        overlay.classList.add('oculto');
        conteudo.classList.add('desbloqueado');
    });
});
