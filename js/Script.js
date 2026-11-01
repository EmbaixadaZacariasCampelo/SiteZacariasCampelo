// O script é carregado no fim do <body>, então os elementos já existem.
// O aviso aparece toda vez que a página abre e só fecha pelo botão "Estou ciente".
(function () {
    var overlay = document.getElementById('overlay-aviso');
    var botao = document.getElementById('btn-ciente');
    var conteudo = document.querySelector('.wrapper-conteudo');

    // Bloqueia o restante da página (inclusive o rodapé) enquanto o aviso está aberto.
    conteudo.setAttribute('inert', '');
    document.body.classList.add('aviso-aberto');

    botao.addEventListener('click', function () {
        overlay.classList.add('oculto');
        conteudo.removeAttribute('inert');
        document.body.classList.remove('aviso-aberto');
    });

    botao.focus();
})();
