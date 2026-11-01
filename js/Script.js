// O script é carregado no fim do <body>, então os elementos já existem.
(function () {
    var CHAVE = 'avisoCiente';
    var overlay = document.getElementById('overlay-aviso');
    var botao = document.getElementById('btn-ciente');
    var conteudo = document.querySelector('.wrapper-conteudo');

    function jaCiente() {
        try {
            return localStorage.getItem(CHAVE) === '1';
        } catch (e) {
            return false;
        }
    }

    function fecharAviso() {
        overlay.classList.add('oculto');
        conteudo.removeAttribute('inert');
        document.removeEventListener('keydown', aoTeclar);
        try {
            localStorage.setItem(CHAVE, '1');
        } catch (e) {
            // Sem armazenamento (ex.: aba anônima): o aviso volta na próxima visita.
        }
    }

    function aoTeclar(evento) {
        if (evento.key === 'Escape') {
            fecharAviso();
        }
    }

    if (jaCiente()) {
        overlay.classList.add('oculto');
        return;
    }

    // Bloqueia o restante da página (inclusive o rodapé) enquanto o aviso está aberto.
    conteudo.setAttribute('inert', '');
    botao.addEventListener('click', fecharAviso);
    document.addEventListener('keydown', aoTeclar);
    botao.focus();
})();
