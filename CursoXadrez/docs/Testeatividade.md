# Aula Testes – Exercícios interativos

Esta aula reúne exemplos dos tipos de exercício que podem ser usados no curso. Resolva as atividades abaixo e acompanhe seu progresso.

<div class="progresso-atividades"></div>

!!! info "Seu progresso fica salvo neste aparelho"
    As atividades concluídas ficam guardadas no navegador que você está usando. Em outro celular ou computador o progresso começa do zero.

---

## 1. Pense e veja a resposta

Pense na resposta antes de clicar.

**Por que o Rei não possui um valor em pontos?**

??? success "Ver resposta"
    Porque o objetivo do jogo é dar xeque-mate no Rei. Se ele fosse capturado, a partida já teria acabado, por isso seu valor é considerado **inestimável**.

**Qual casa deve ficar no canto inferior direito do tabuleiro?**

??? success "Ver resposta"
    Uma casa **branca** (clara), do lado das peças brancas.

---

## 2. Quiz

Escolha a alternativa correta. Se errar, você verá o motivo e onde rever o assunto. Depois clique em **Tentar novamente**.

<div class="quiz" markdown>

**Quanto vale uma torre?**

- [ ] 3 pontos

    > 3 pontos é o valor do cavalo e do bispo, as peças menores. A torre é mais forte do que elas. [Reveja: Aula 01 – Valores das peças](Aula1.md#valores-das-pecas)

- [x] 5 pontos
- [ ] 9 pontos

    > 9 pontos é o valor da dama, a peça mais valiosa depois do rei. A torre é mais fraca do que ela. [Reveja: Aula 01 – Valores das peças](Aula1.md#valores-das-pecas)

</div>

<div class="quiz" markdown>

**Em que coluna o Rei começa a partida?**

- [ ] Coluna D

    > A coluna D é a da Dama (lembre da dica "D de Dama"). O Rei e a Dama não começam na mesma coluna. [Reveja: Aula 01 – Posicionamento correto das peças](Aula1.md#posicionamento-correto-das-pecas)

- [x] Coluna E
- [ ] Coluna F

    > Na coluna F começa um dos bispos, não o Rei. [Reveja: Aula 01 – Posicionamento correto das peças](Aula1.md#posicionamento-correto-das-pecas)

</div>

<div class="quiz" markdown>

**Qual destes NÃO é um princípio da abertura?**

- [ ] Dominar o centro

    > Dominar o centro é, sim, um princípio da abertura: as casas centrais dão mais mobilidade às peças. [Reveja: Aula 02 – Princípios da abertura](Aula2.md#principios-da-abertura)

- [ ] Desenvolver as peças

    > Desenvolver as peças é, sim, um princípio da abertura: colocar as peças em casas onde participem do jogo. [Reveja: Aula 02 – Princípios da abertura](Aula2.md#principios-da-abertura)

- [x] Mover a dama logo no começo
- [ ] Proteger o rei

    > Proteger o rei é, sim, um princípio da abertura, normalmente feito com o roque. [Reveja: Aula 02 – Princípios da abertura](Aula2.md#principios-da-abertura)

</div>

---

## 3. Encontre o melhor lance

Clique na peça que você quer mover e depois na casa de destino. Se o exercício tiver mais de um lance, o adversário responde sozinho.

### Mate no corredor (brancas jogam)

O rei preto está preso atrás dos próprios peões. Encontre o xeque-mate em 1 lance.

<div class="puzzle"
     data-fen="6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1"
     data-solucao="d1d8"></div>

### Mate pastor (brancas jogam)

As pretas acabaram de jogar o cavalo para f6 e deixaram uma casa fraca sem defesa. Encontre o xeque-mate em 1 lance.

<div class="puzzle"
     data-fen="r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4"
     data-solucao="h5f7"></div>

### Mate no corredor (pretas jogam)

Agora é a sua vez com as pretas. O tabuleiro aparece do seu lado.

<div class="puzzle"
     data-fen="3r2k1/5ppp/8/8/8/8/5PPP/6K1 b - - 0 1"
     data-solucao="d8d1"></div>

### Mate da escada (brancas jogam, 3 lances)

Use as duas torres, uma de cada vez, para empurrar o rei preto até a última linha.

<div class="puzzle"
     data-fen="8/8/4k3/R7/8/8/8/1R4K1 w - - 0 1"
     data-solucao="b1b6 e6e7 a5a7 e7e8 b6b8"></div>

---

## 4. Puzzle do Dia do Lichess

O [Lichess](https://lichess.org) é um site de xadrez gratuito. O exercício abaixo muda todos os dias e vem direto de lá. Clique no tabuleiro para resolver.

<div align="center">

<iframe
class="lichess-puzzle"
src="https://lichess.org/training/frame?theme=brown&bg=light"
title="Puzzle do Dia do Lichess"
loading="lazy"
frameborder="0">
</iframe>

</div>

---

??? note "Para professores: como criar novos exercícios"

    **Ver resposta**: use um bloco que abre ao clicar.

    ```markdown
    ??? success "Ver resposta"
        Texto da resposta.
    ```

    **Quiz**: escreva as alternativas como lista de tarefas e marque a correta com `[x]`. Embaixo de cada alternativa errada, deixe uma linha em branco e escreva o motivo do erro num bloco `>` recuado com 4 espaços, com um link para a aula onde o assunto foi estudado. Não escreva a resposta certa no motivo.

    ```markdown
    <div class="quiz" markdown>

    **Pergunta?**

    - [ ] Alternativa errada

        > Por que está errada. [Reveja: Aula 01 – Assunto](Aula1.md#titulo-da-secao)

    - [x] Alternativa certa

    </div>
    ```

    O endereço depois do `#` é o título da seção em minúsculas, sem acentos e com hífens no lugar dos espaços (por exemplo, "Valores das peças" vira `#valores-das-pecas`).

    **Encontre o melhor lance**: copie a posição em FEN (no Lichess: *Ferramentas › Editor de tabuleiro*, campo "FEN") e escreva a solução com a casa de origem e a de destino de cada lance, separados por espaço. Os lances alternam entre o aluno e o adversário.

    ```html
    <div class="puzzle"
         data-fen="6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1"
         data-solucao="d1d8"></div>
    ```

    - Quem joga primeiro é definido pelo `w` (brancas) ou `b` (pretas) no FEN.
    - Para promoção, acrescente a peça no fim: `e7e8q` (dama), `e7e8n` (cavalo).
    - Para roque, escreva o lance do rei: `e1g1`.
    - Só a linha escrita na solução é aceita. Se houver dois lances igualmente bons, escolha uma posição em que só um funcione.

    O progresso aparece em qualquer aula que tenha o bloco `<div class="progresso-atividades"></div>`.
