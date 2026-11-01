// Atividades interativas das aulas: quiz, "encontre o melhor lance" e progresso.
// Não usa bibliotecas externas, então funciona offline e abrindo o arquivo direto.
(function () {
    'use strict';

    // ============================================
    // PROGRESSO (salvo no navegador do aluno)
    // ============================================

    var CHAVE_PROGRESSO = 'atividades:' + location.pathname;

    function lerProgresso() {
        try {
            return JSON.parse(localStorage.getItem(CHAVE_PROGRESSO)) || {};
        } catch (e) {
            return {};
        }
    }

    function salvarProgresso(progresso) {
        try {
            localStorage.setItem(CHAVE_PROGRESSO, JSON.stringify(progresso));
        } catch (e) {
            // Sem armazenamento (ex.: aba anônima): o progresso vale só nesta visita.
        }
    }

    var progresso = {};

    function marcarConcluida(id) {
        progresso[id] = true;
        salvarProgresso(progresso);
        atualizarPainel();
    }

    function atualizarPainel() {
        var painel = document.querySelector('.progresso-atividades');
        if (!painel) {
            return;
        }
        var total = document.querySelectorAll('[data-atividade-id]').length;
        var feitas = 0;
        document.querySelectorAll('[data-atividade-id]').forEach(function (el) {
            if (progresso[el.dataset.atividadeId]) {
                feitas++;
            }
        });
        painel.querySelector('.progresso-texto').textContent =
            feitas + ' de ' + total + ' atividades concluídas';
        painel.querySelector('.progresso-barra-preenchida').style.width =
            (total ? (feitas / total) * 100 : 0) + '%';
    }

    function montarPainel() {
        var painel = document.querySelector('.progresso-atividades');
        if (!painel) {
            return;
        }
        painel.innerHTML =
            '<span class="progresso-texto"></span>' +
            '<span class="progresso-barra"><span class="progresso-barra-preenchida"></span></span>' +
            '<button type="button" class="md-button progresso-recomecar">Recomeçar</button>';
        painel.querySelector('.progresso-recomecar').addEventListener('click', function () {
            progresso = {};
            salvarProgresso(progresso);
            location.reload();
        });
        atualizarPainel();
    }

    // ============================================
    // QUIZ DE MÚLTIPLA ESCOLHA
    // Escrito em Markdown como lista de tarefas: [x] marca a alternativa certa.
    // Um bloco "> ..." recuado embaixo de uma alternativa errada explica o
    // motivo do erro (e pode ter um link para a aula onde o assunto foi visto).
    // ============================================

    function montarQuiz(quiz, indice) {
        var lista = quiz.querySelector('ul');
        if (!lista) {
            return;
        }
        var id = 'quiz-' + indice;
        quiz.dataset.atividadeId = id;

        var opcoes = document.createElement('div');
        opcoes.className = 'quiz-opcoes';
        var feedback = document.createElement('div');
        feedback.className = 'quiz-feedback';
        feedback.setAttribute('aria-live', 'polite');
        var tentarDeNovo = document.createElement('button');
        tentarDeNovo.type = 'button';
        tentarDeNovo.className = 'md-button quiz-tentar';
        tentarDeNovo.textContent = 'Tentar novamente';
        tentarDeNovo.hidden = true;

        var botoes = [];

        function mostrarFeedback(classe, titulo, motivo) {
            feedback.className = 'quiz-feedback ' + classe;
            feedback.innerHTML = '';
            var p = document.createElement('p');
            p.className = 'quiz-feedback-titulo';
            p.textContent = titulo;
            feedback.appendChild(p);
            if (motivo) {
                // Copia o conteúdo já convertido pelo MkDocs (texto e links).
                Array.prototype.forEach.call(motivo.childNodes, function (no) {
                    feedback.appendChild(no.cloneNode(true));
                });
            }
        }

        function travar() {
            quiz.classList.add('quiz-respondido');
            botoes.forEach(function (b) {
                b.disabled = true;
            });
            tentarDeNovo.hidden = false;
        }

        function reiniciarQuiz() {
            quiz.classList.remove('quiz-respondido');
            botoes.forEach(function (b) {
                b.disabled = false;
                b.classList.remove('quiz-certa', 'quiz-errada');
            });
            feedback.className = 'quiz-feedback';
            feedback.innerHTML = '';
            tentarDeNovo.hidden = true;
            botoes[0].focus();
        }

        lista.querySelectorAll(':scope > li').forEach(function (item) {
            var caixa = item.querySelector('input[type="checkbox"]');
            var correta = !!(caixa && caixa.checked);
            var motivo = item.querySelector('blockquote');

            // Texto da alternativa sem o motivo.
            var copia = item.cloneNode(true);
            var motivoCopia = copia.querySelector('blockquote');
            if (motivoCopia) {
                motivoCopia.remove();
            }

            var botao = document.createElement('button');
            botao.type = 'button';
            botao.className = 'quiz-opcao';
            botao.textContent = copia.textContent.trim();
            botao.addEventListener('click', function () {
                if (quiz.classList.contains('quiz-respondido')) {
                    return;
                }
                if (correta) {
                    botao.classList.add('quiz-certa');
                    mostrarFeedback('quiz-feedback-acerto', '✅ Correto!');
                    marcarConcluida(id);
                } else {
                    botao.classList.add('quiz-errada');
                    if (motivo) {
                        mostrarFeedback('quiz-feedback-erro', '❌ Resposta incorreta.', motivo);
                    } else {
                        mostrarFeedback('quiz-feedback-erro', '❌ Resposta incorreta. Revise o conteúdo e tente novamente.');
                    }
                }
                travar();
                tentarDeNovo.focus();
            });
            botoes.push(botao);
            opcoes.appendChild(botao);
        });

        tentarDeNovo.addEventListener('click', reiniciarQuiz);

        lista.replaceWith(opcoes);
        quiz.appendChild(feedback);
        quiz.appendChild(tentarDeNovo);

        if (progresso[id]) {
            mostrarFeedback('quiz-feedback-acerto', '✅ Você já acertou esta questão.');
            travar();
        }
        quiz.classList.add('quiz-pronto');
    }

    // ============================================
    // TABULEIRO: "ENCONTRE O MELHOR LANCE"
    // <div class="puzzle" data-fen="..." data-solucao="d1d8 ..."></div>
    // A solução usa o formato origem+destino (ex.: e2e4), alternando
    // lance do aluno e resposta do adversário.
    // ============================================

    // Mesmo símbolo (preenchido) para as duas cores; a cor vem do CSS.
    // O ︎ evita que o celular desenhe o peão como emoji.
    var SIMBOLOS = { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' };
    var NOMES = { k: 'rei', q: 'dama', r: 'torre', b: 'bispo', n: 'cavalo', p: 'peão' };
    var COLUNAS = 'abcdefgh';

    function lerFen(fen) {
        var partes = fen.trim().split(/\s+/);
        var casas = {};
        partes[0].split('/').forEach(function (linha, i) {
            var coluna = 0;
            for (var c = 0; c < linha.length; c++) {
                var ch = linha[c];
                if (/\d/.test(ch)) {
                    coluna += parseInt(ch, 10);
                } else {
                    casas[COLUNAS[coluna] + (8 - i)] = ch;
                    coluna++;
                }
            }
        });
        return { casas: casas, vez: partes[1] === 'b' ? 'b' : 'w' };
    }

    function corDaPeca(peca) {
        return peca === peca.toUpperCase() ? 'w' : 'b';
    }

    function aplicarLance(posicao, lance) {
        var origem = lance.slice(0, 2);
        var destino = lance.slice(2, 4);
        var peca = posicao.casas[origem];
        delete posicao.casas[origem];

        // Roque: o rei anda duas casas e a torre pula para o outro lado.
        if (peca.toLowerCase() === 'k' && Math.abs(COLUNAS.indexOf(origem[0]) - COLUNAS.indexOf(destino[0])) === 2) {
            var linha = origem[1];
            var ladoRei = destino[0] === 'g';
            var torreDe = (ladoRei ? 'h' : 'a') + linha;
            var torrePara = (ladoRei ? 'f' : 'd') + linha;
            posicao.casas[torrePara] = posicao.casas[torreDe];
            delete posicao.casas[torreDe];
        }

        // Promoção: usa a letra extra do lance (ex.: e7e8q) ou dama.
        if (peca.toLowerCase() === 'p' && (destino[1] === '8' || destino[1] === '1')) {
            var promovida = lance[4] || 'q';
            peca = corDaPeca(peca) === 'w' ? promovida.toUpperCase() : promovida.toLowerCase();
        }

        posicao.casas[destino] = peca;
        posicao.vez = posicao.vez === 'w' ? 'b' : 'w';
    }

    function montarPuzzle(puzzle, indice) {
        var id = 'puzzle-' + indice;
        puzzle.dataset.atividadeId = id;

        var posicao = lerFen(puzzle.dataset.fen);
        var solucao = puzzle.dataset.solucao.trim().split(/\s+/);
        var corAluno = posicao.vez;
        var passo = 0;
        var selecionada = null;
        var resolvido = false;
        var aguardando = false;
        var temporizador = null;
        var ultimoLance = null;

        puzzle.innerHTML =
            '<p class="puzzle-instrucao"></p>' +
            '<div class="puzzle-tabuleiro" role="grid"></div>' +
            '<p class="puzzle-feedback" aria-live="polite"></p>' +
            '<button type="button" class="md-button puzzle-reiniciar">Reiniciar</button>';
        var tabuleiro = puzzle.querySelector('.puzzle-tabuleiro');
        var feedback = puzzle.querySelector('.puzzle-feedback');
        var instrucao = puzzle.querySelector('.puzzle-instrucao');

        instrucao.textContent = (corAluno === 'w' ? 'Brancas' : 'Pretas') +
            ' jogam. Clique na peça e depois na casa de destino.';

        function desenhar() {
            tabuleiro.innerHTML = '';
            // Mostra o tabuleiro do ponto de vista de quem resolve.
            for (var i = 0; i < 64; i++) {
                var linha = corAluno === 'w' ? 8 - Math.floor(i / 8) : Math.floor(i / 8) + 1;
                var coluna = corAluno === 'w' ? i % 8 : 7 - (i % 8);
                var nome = COLUNAS[coluna] + linha;
                var casa = document.createElement('button');
                casa.type = 'button';
                casa.className = 'puzzle-casa ' + ((linha + coluna) % 2 === 0 ? 'casa-clara' : 'casa-escura');
                casa.dataset.casa = nome;

                var peca = posicao.casas[nome];
                var rotulo = nome;
                if (peca) {
                    var span = document.createElement('span');
                    span.className = 'puzzle-peca peca-' + (corDaPeca(peca) === 'w' ? 'branca' : 'preta');
                    span.textContent = SIMBOLOS[peca.toLowerCase()] + '︎';
                    span.setAttribute('aria-hidden', 'true');
                    casa.appendChild(span);
                    rotulo += ', ' + NOMES[peca.toLowerCase()] + (corDaPeca(peca) === 'w' ? ' branco' : ' preto');
                }
                casa.setAttribute('aria-label', rotulo);

                if (nome === selecionada) {
                    casa.classList.add('casa-selecionada');
                }
                if (ultimoLance && (nome === ultimoLance.slice(0, 2) || nome === ultimoLance.slice(2, 4))) {
                    casa.classList.add('casa-ultimo-lance');
                }
                // Coordenadas na borda, como num tabuleiro de verdade.
                if (i % 8 === 0) {
                    casa.insertAdjacentHTML('beforeend', '<span class="coord coord-linha">' + linha + '</span>');
                }
                if (i >= 56) {
                    casa.insertAdjacentHTML('beforeend', '<span class="coord coord-coluna">' + COLUNAS[coluna] + '</span>');
                }
                tabuleiro.appendChild(casa);
            }
        }

        function aoClicar(evento) {
            var casa = evento.target.closest('.puzzle-casa');
            if (!casa || resolvido || aguardando) {
                return;
            }
            var nome = casa.dataset.casa;
            var peca = posicao.casas[nome];

            // Clicou numa peça própria: seleciona (ou troca a seleção).
            if (peca && corDaPeca(peca) === corAluno) {
                selecionada = selecionada === nome ? null : nome;
                desenhar();
                return;
            }
            if (!selecionada) {
                return;
            }

            var lance = selecionada + nome;
            var esperado = solucao[passo];
            selecionada = null;

            if (lance !== esperado.slice(0, 4)) {
                feedback.className = 'puzzle-feedback puzzle-erro';
                feedback.textContent = '❌ Esse não é o melhor lance. Tente de novo.';
                desenhar();
                return;
            }

            aplicarLance(posicao, esperado);
            ultimoLance = esperado;
            passo++;

            if (passo >= solucao.length) {
                resolvido = true;
                feedback.className = 'puzzle-feedback puzzle-acerto';
                feedback.textContent = '✅ Correto! Exercício resolvido.';
                marcarConcluida(id);
                desenhar();
                return;
            }

            feedback.className = 'puzzle-feedback';
            feedback.textContent = '👍 Boa! Veja a resposta do adversário…';
            desenhar();

            // Resposta automática do adversário.
            aguardando = true;
            temporizador = setTimeout(function () {
                aguardando = false;
                var resposta = solucao[passo];
                aplicarLance(posicao, resposta);
                ultimoLance = resposta;
                passo++;
                feedback.textContent = '👍 Boa! Agora encontre o próximo lance.';
                desenhar();
            }, 600);
        }

        function reiniciar() {
            clearTimeout(temporizador);
            posicao = lerFen(puzzle.dataset.fen);
            passo = 0;
            selecionada = null;
            resolvido = false;
            aguardando = false;
            ultimoLance = null;
            feedback.className = 'puzzle-feedback';
            feedback.textContent = progresso[id] ? '✅ Você já resolveu este exercício.' : '';
            desenhar();
        }

        tabuleiro.addEventListener('click', aoClicar);
        puzzle.querySelector('.puzzle-reiniciar').addEventListener('click', reiniciar);
        reiniciar();
    }

    // ============================================
    // INICIALIZAÇÃO
    // ============================================

    function iniciar() {
        progresso = lerProgresso();
        document.querySelectorAll('.quiz').forEach(montarQuiz);
        document.querySelectorAll('.puzzle').forEach(montarPuzzle);
        montarPainel();
    }

    // O Material for MkDocs avisa por document$ quando uma página é carregada.
    if (window.document$) {
        window.document$.subscribe(iniciar);
    } else if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', iniciar);
    } else {
        iniciar();
    }
})();
