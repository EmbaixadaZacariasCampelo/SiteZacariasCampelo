# Curso de Xadrez – Embaixada Zacarias Campelo

Site do Curso de Xadrez da Embaixada Zacarias Campelo (Segunda Igreja em Fragoso).

🌐 **Acesse:** https://embaixadazacariascampelo.github.io/SiteZacariasCampelo/

Este documento tem três partes:

1. [Sobre o curso](#parte-1--sobre-o-curso): para alunos e visitantes.
2. [Como adicionar e editar aulas](#parte-2--como-adicionar-e-editar-aulas): tutorial para professores, sem precisar saber programação.
3. [Como o site funciona](#parte-3--como-o-site-funciona-parte-técnica): parte técnica, para quem for manter o site.

---

## Parte 1 – Sobre o curso

O site reúne o material do Curso de Xadrez da Embaixada Zacarias Campelo. O curso é dividido em **módulos**, cada módulo tem **aulas**, e cada aula traz explicações, dicas, vídeos e exercícios.

Hoje está disponível o **Módulo 1 – Xadrez Básico**:

| Aula | Conteúdo |
| ---- | -------- |
| 01 | Sobre o curso e o jogo: tabuleiro, coordenadas e valor das peças |
| 02 | Conceitos básicos (tática e estratégia) e princípios da abertura |
| 03 | Meio-jogo e treino de tática *(em preparação)* |
| 04 | Finais e treino de mates *(em preparação)* |
| 05 | Análise de uma partida *(em preparação)* |

Também há um **Glossário** com os termos de xadrez usados nas aulas.

### Como usar o site

- **Entrar no curso:** na página inicial, clique em **Acessar Curso de Xadrez**.
- **Menu de aulas:** no computador, fica à esquerda. No celular, toque nas **três barrinhas (☰)** no canto superior esquerdo.
- **Sumário da aula:** no computador, os tópicos da aula aparecem à direita. Clique para ir direto a um assunto.
- **Busca:** use a **lupa (🔍)** no topo para procurar qualquer palavra em todas as aulas.
- **Modo escuro:** clique no **botão de alternar** ao lado da lupa.
- **Voltar ao topo:** ao rolar a página para cima, aparece um botão "Voltar para o topo".
- **Blocos que abrem ao clicar:** caixas com uma setinha (›) escondem dicas ou respostas. Clique para abrir.
- **Exercícios interativos:** algumas aulas podem ter perguntas de múltipla escolha e tabuleiros onde você move as peças. Seu progresso fica salvo no navegador do aparelho que você está usando.

### Contato

O site ainda está em fase de testes e pode apresentar falhas. Dúvidas, sugestões ou erros encontrados podem ser enviados para **er.zacariascampelo@gmail.com** ou pelas redes sociais da Embaixada:
[Instagram](https://www.instagram.com/embaixada.sibfragoso/) ·
[Facebook](https://www.facebook.com/EmbaixadaZCsibemfragoso/?locale=pt_BR) ·
[YouTube](https://www.youtube.com/@EmbaixadaZacariaCampelo)

---

## Parte 2 – Como adicionar e editar aulas

Este tutorial é para professores, e você **não precisa saber programar**. Há dois jeitos de trabalhar:

- **Pelo site do GitHub, no navegador** (Passos 0 a 5): não precisa instalar nada. Bom para correções rápidas.
- **No seu computador, com o `menu.bat`** ([Opção B](#opção-b--trabalhando-no-computador-com-o-menubat)): você edita os arquivos no computador, vê o resultado antes de publicar e envia com poucos cliques.

### Índice do tutorial

- [Passo 0 – O que você precisa](#passo-0--o-que-você-precisa)
- [Passo 1 – Entendendo onde ficam as aulas](#passo-1--entendendo-onde-ficam-as-aulas)
- [Passo 2 – Editando uma aula existente](#passo-2--editando-uma-aula-existente)
- [Passo 3 – Criando uma aula nova](#passo-3--criando-uma-aula-nova)
- [Passo 4 – Colocando a aula no menu](#passo-4--colocando-a-aula-no-menu)
- [Passo 5 – Conferindo se deu certo](#passo-5--conferindo-se-deu-certo)
- [Opção B – Trabalhando no computador com o menu.bat](#opção-b--trabalhando-no-computador-com-o-menubat)
- [Guia de formatação: o básico (Markdown)](#guia-de-formatação-o-básico-markdown)
- [Guia de formatação: recursos especiais do curso](#guia-de-formatação-recursos-especiais-do-curso)
- [Exercícios interativos](#exercícios-interativos)
- [Problemas comuns](#problemas-comuns)

### Passo 0 – O que você precisa

1. Uma conta no [GitHub](https://github.com) (é gratuita).
2. Permissão para editar o projeto. Peça ao responsável pelo site para adicionar sua conta à organização **EmbaixadaZacariasCampelo**.

### Passo 1 – Entendendo onde ficam as aulas

Cada aula é um **arquivo de texto** com a extensão `.md`. Todos ficam na pasta **`CursoXadrez/docs/`**:

```
CursoXadrez/
├── mkdocs.yml        ← configuração do curso, incluindo o MENU
└── docs/
    ├── index.md      ← página "Início"
    ├── Aula1.md      ← Aula 01
    ├── Aula2.md      ← Aula 02
    ├── ...
    ├── Glossario.md  ← Glossário
    └── assets/       ← imagens usadas nas aulas
```

Os arquivos `.md` são escritos em **Markdown**: texto comum com alguns símbolos para formatar (por exemplo, `**negrito**`). O programa **MkDocs** transforma esses arquivos nas páginas bonitas do site. Você só precisa escrever o texto; o visual é automático.

> **Regra de ouro:** toda alteração salva no GitHub é publicada no site **automaticamente**, em 2 a 3 minutos. Não existe botão de "publicar".

### Passo 2 – Editando uma aula existente

1. Abra o projeto: https://github.com/EmbaixadaZacariasCampelo/SiteZacariasCampelo
2. Clique na pasta **`CursoXadrez`** e depois em **`docs`**.
3. Clique no arquivo da aula, por exemplo **`Aula2.md`**.
4. Clique no **ícone de lápis ✏️** (*Edit this file*), no canto superior direito do texto.
5. Faça as alterações. Use o [guia de formatação](#guia-de-formatação-o-básico-markdown) abaixo.
6. Se quiser, clique na aba **Preview** para ter uma ideia do resultado.
   *Atenção:* o Preview do GitHub mostra só a formatação básica. Os blocos coloridos (dicas, avisos), vídeos e exercícios só aparecem corretamente no site.
7. Clique no botão verde **Commit changes...** (Salvar alterações).
8. Na janela que abrir:
   - Em **Commit message**, escreva em poucas palavras o que você mudou. Exemplo: `Adiciona vídeo de tática na Aula 2`.
   - Deixe marcada a opção **Commit directly to the `main` branch**.
   - Clique em **Commit changes**.
9. Pronto! Em 2 a 3 minutos a alteração aparece no site. Veja como conferir no [Passo 5](#passo-5--conferindo-se-deu-certo).

### Passo 3 – Criando uma aula nova

1. No GitHub, entre na pasta **`CursoXadrez/docs`**.
2. Clique em **Add file** → **Create new file**.
3. No campo do nome, escreva o nome do arquivo seguindo o padrão das outras aulas: `Aula6.md`, `Aula7.md`...
   - Use **sem espaços e sem acentos**.
   - Termine sempre com **`.md`**.
4. Escreva o conteúdo. Comece com um título usando `#`:

    ```markdown
    # Aula 06 – Mates conhecidos

    ## Introdução

    Nesta aula vamos estudar...
    ```

5. Salve com **Commit changes...**, como no Passo 2.
6. **Importante:** a aula nova ainda **não aparece no menu**. Faça o Passo 4.

### Passo 4 – Colocando a aula no menu

O menu do site é definido no arquivo **`CursoXadrez/mkdocs.yml`**, na parte que começa com `nav:`. Ela está no fim do arquivo:

```yaml
nav:
  - Início: index.md

  - Módulo 1 (Xadrez Básico - Primeiros conceitos):
      - Aula 01 – Sobre o curso, Sobre o Jogo: Aula1.md
      - Aula 02 – Conceitos Básicos e Abertura: Aula2.md
      - Aula 03 – Meio Jogo, Treino de Tática: Aula3.md
      - Aula 04 – Finais, Treino de Mates: Aula4.md
      - Aula 05 – Análise de uma partida: Aula5.md

  - Materiais extras:
      - Glossário: Glossario.md
```

Cada linha segue o formato **`- Nome que aparece no menu: NomeDoArquivo.md`**.

**Exemplo: criando o Módulo 2 com a Aula 06.** Edite o `mkdocs.yml` (lápis ✏️) e acrescente as linhas marcadas abaixo:

```yaml
  - Módulo 1 (Xadrez Básico - Primeiros conceitos):
      - Aula 01 – Sobre o curso, Sobre o Jogo: Aula1.md
      ...
      - Aula 05 – Análise de uma partida: Aula5.md

  - Módulo 2 (Reconhecendo padrões):          # ← linha nova
      - Aula 06 – Mates conhecidos: Aula6.md  # ← linha nova

  - Materiais extras:
      - Glossário: Glossario.md
```

⚠️ **Cuidado com os espaços no começo das linhas.** Esse arquivo é muito sensível a eles:

- O **módulo** começa com **2 espaços** antes do `-`.
- A **aula** começa com **6 espaços** antes do `-`.
- Use sempre a **barra de espaço**, nunca a tecla **Tab**.
- Não esqueça os **dois-pontos (`:`)** entre o nome e o arquivo.
- O nome do arquivo precisa ser **exatamente igual** ao que você criou, inclusive maiúsculas (`Aula6.md` é diferente de `aula6.md`).

Se algo estiver errado, o site **não é atualizado** (o que estava no ar continua no ar). Veja os [Problemas comuns](#problemas-comuns).

### Passo 5 – Conferindo se deu certo

1. No GitHub, clique na aba **Actions**, no topo do projeto.
2. A primeira linha da lista é a sua alteração:
   - 🟡 **Bolinha amarela girando:** o site está sendo atualizado. Aguarde.
   - ✅ **Visto verde:** deu certo! Abra o site e confira. Se não vir a mudança, recarregue a página com **Ctrl + F5**.
   - ❌ **X vermelho:** algo deu errado e o site **não** foi atualizado. Clique na linha, depois em **deploy** e procure a mensagem com `WARNING` ou `Error`. Veja os [Problemas comuns](#problemas-comuns).

---

### Opção B – Trabalhando no computador com o menu.bat

O **`menu.bat`**, na pasta principal do projeto, é um menu que faz todo o trabalho do Git por você. Basta dar **duplo clique** nele.

**Antes da primeira vez:**

1. Extraia o ZIP do instalador enviado pelo responsável técnico e dê duplo clique em **`Instalar.bat`**. Ele monta tudo em `C:\SiteZacariasCampelo`: o projeto, o Python, o Git e o `menu.bat`. Não é preciso instalar mais nada.
2. Na **Área de Trabalho** aparece o atalho **"Curso de Xadrez"**, que abre a pasta do projeto. É por ele que você chega ao `menu.bat`, ao `Testar.bat` e às aulas.

Na primeira vez que abrir o `menu.bat`, ele pergunta:

- o seu **usuário** e o seu **token** do GitHub (a chave de acesso enviada pelo responsável técnico; ela não aparece na tela ao digitar). Eles ficam no arquivo `.env`. **Nunca envie esse arquivo para ninguém**;
- o seu **nome**, que aparece no histórico das alterações.

**O menu:**

```
   1 - Baixar atualizacoes do GitHub
   2 - Ver o que eu mudei
   3 - Enviar minhas alteracoes para o site
   4 - Ver as ultimas alteracoes enviadas
   5 - Testar o site no meu computador
   6 - Ver se o site ja foi atualizado (GitHub Actions)

   0 - Sair
```

Aperte só o **número** da opção.

**O dia a dia, em 4 passos:**

1. **Antes de começar, opção 1 – Baixar atualizações.** Assim você trabalha na versão mais recente, com o que os outros professores enviaram.
2. **Edite os arquivos** em `CursoXadrez\docs\` com um editor de texto simples (o Bloco de Notas serve), seguindo o [guia de formatação](#guia-de-formatação-o-básico-markdown). Para o recuo das caixas do curso, use **4 espaços**, nunca a tecla Tab. Deixe o editor e o navegador do passo 3 lado a lado (tecla Windows + seta para a esquerda ou para a direita).
3. **Opção 5 – Testar o site** para ver o resultado. Abre uma janela e o navegador. A página se atualiza sozinha cada vez que você salva o arquivo.
4. **Opção 3 – Enviar minhas alterações.** O menu:
   - mostra a lista de arquivos que vão ser enviados;
   - **confere se o site não tem erros** (por exemplo, link para uma aula que não existe). Se tiver, mostra o erro e **não envia**;
   - pede uma frase curta descrevendo o que você mudou;
   - pede confirmação: digite **S** e aperte Enter;
   - junta suas alterações com as que outros professores enviaram enquanto isso, e envia.

Depois de enviar, use a **opção 6** para acompanhar a publicação, como no [Passo 5](#passo-5--conferindo-se-deu-certo).

**Se aparecer uma mensagem de erro:**

| Mensagem | O que fazer |
| -------- | ----------- |
| "O site tem erros e o deploy vai FALHAR" | Leia a linha com `WARNING` logo acima: ela diz o arquivo e o problema. Corrija e envie de novo |
| "Authentication failed" ou "403" | O usuário ou a chave do `.env` estão errados ou venceram. Peça um novo `.env` ao responsável técnico |
| "Não foi possível juntar suas alterações" | Outra pessoa mudou o mesmo trecho que você. Suas alterações **não se perdem**: ficam salvas no computador. Chame o responsável técnico |
| "Not possible to fast-forward" (ao baixar) | Você tem alterações ainda não enviadas. Use a opção 3 para enviá-las primeiro |

---

### Guia de formatação: o básico (Markdown)

Copie os exemplos e troque pelo seu texto.

#### Títulos

O número de `#` define o nível. Sempre deixe **um espaço** depois do `#`.

```markdown
# Título da aula (use só um por aula, na primeira linha)
## Seção
### Subseção
#### Tópico menor
```

As seções `##` e `###` aparecem no sumário à direita da página.

#### Parágrafos e quebras de linha

- Para começar um **novo parágrafo**, deixe **uma linha em branco** entre os textos.
- Apertar Enter uma vez só **não** quebra a linha no site: o texto continua no mesmo parágrafo.

#### Destaques no texto

| Você escreve | Aparece no site |
| ------------ | --------------- |
| `**negrito**` | **negrito** |
| `*itálico*` | *itálico* |
| `***negrito e itálico***` | ***negrito e itálico*** |

#### Listas

```markdown
- Item com bolinha
- Outro item
    - Subitem (4 espaços antes do -)

1. Item numerado
2. Segundo item
```

Deixe uma linha em branco **antes** e **depois** da lista.

#### Links

```markdown
[texto que aparece](https://www.site.com)
[Veja a Aula 01](Aula1.md)
[Veja o valor das peças](Aula1.md#valores-das-pecas)
[O que é uma casa?](Glossario.md#casa)
```

- Para outra aula, use o **nome do arquivo** (`Aula1.md`), não o endereço do site.
- Para ir a uma **seção específica**, coloque `#` e o título da seção em minúsculas, sem acentos e com hífens no lugar dos espaços. Exemplo: "Valores das peças" vira `#valores-das-pecas`.
- Para um **termo do glossário**, use `Glossario.md#` e o termo do mesmo jeito: `#casa`, `#xeque-mate`, `#peao-passado`.

#### Imagens

1. Envie a imagem para a pasta **`CursoXadrez/docs/assets/`**: no GitHub, entre na pasta e clique em **Add file** → **Upload files**. Use nomes sem espaços e sem acentos, como `mate-do-corredor.png`.
2. Na aula, escreva:

```markdown
![Descrição da imagem](assets/mate-do-corredor.png)
```

A descrição entre colchetes ajuda pessoas com deficiência visual. Descreva o que a imagem mostra.

#### Tabelas

```markdown
| Peça   | Valor |
| ------ | ----- |
| Peão   | 1     |
| Cavalo | 3     |
```

As colunas não precisam ficar alinhadas, mas cada linha precisa ter o mesmo número de `|`.

#### Linha divisória

Três hífens sozinhos numa linha, com uma linha em branco antes e depois:

```markdown
---
```

---

### Guia de formatação: recursos especiais do curso

Estes recursos são do **MkDocs Material**, o "tema" do site. Eles **não aparecem no Preview do GitHub**, só no site.

#### Caixas de destaque (dica, aviso, informação...)

```markdown
!!! tip "Dica para memorizar"
    Lembre-se da frase: **D de Dama.**
```

Regras importantes:

- A primeira linha começa com **`!!!`**, depois o **tipo** e, entre aspas, o **título**.
- O conteúdo da caixa começa na linha de baixo, com **exatamente 4 espaços** no início de **cada** linha.
- Para mais de um parágrafo dentro da caixa, deixe uma linha em branco entre eles (também com o recuo de 4 espaços no texto).

Tipos disponíveis (cada um tem uma cor e um ícone):

| Tipo | Quando usar |
| ---- | ----------- |
| `note` | Observação geral |
| `info` | Informação importante |
| `tip` | Dica |
| `success` | Resposta certa, conclusão |
| `question` | Pergunta para o aluno pensar |
| `warning` | Atenção, cuidado |
| `danger` | Erro grave a evitar |
| `example` | Exemplo |
| `quote` | Citação |

#### Caixas que abrem ao clicar

Igual à caixa de destaque, trocando `!!!` por **`???`**. Ótimo para respostas de exercícios e conteúdo extra:

```markdown
**Por que o Rei não tem valor em pontos?**

??? success "Ver resposta"
    Porque o objetivo do jogo é dar xeque-mate no Rei.
```

Use `???+` em vez de `???` se quiser que a caixa já comece **aberta**.

#### Vídeos do YouTube

1. No YouTube, abra o vídeo e copie o código que aparece depois de `v=` no endereço. Exemplo: em `https://www.youtube.com/watch?v=nP_k8khBo7o`, o código é `nP_k8khBo7o`.
2. Na aula, cole o bloco abaixo, trocando o código e o título:

```html
<div align="center">

<iframe
width="720"
height="405"
src="https://www.youtube.com/embed/nP_k8khBo7o"
title="Montagem do Tabuleiro"
frameborder="0"
allowfullscreen>
</iframe>

</div>
```

O vídeo se ajusta sozinho ao tamanho da tela do celular.

#### Abas

Para mostrar conteúdos alternativos lado a lado (por exemplo, "Brancas" e "Pretas"):

```markdown
=== "Brancas"
    Plano das brancas...

=== "Pretas"
    Plano das pretas...
```

O conteúdo de cada aba também precisa de **4 espaços** no início.

---

### Exercícios interativos

O site tem dois tipos de exercício interativo. Eles mostram uma barra de progresso se você colocar esta linha no começo da aula:

```html
<div class="progresso-atividades"></div>
```

#### Quiz de múltipla escolha

```markdown
<div class="quiz" markdown>

**Quanto vale uma torre?**

- [ ] 3 pontos

    > 3 pontos é o valor do cavalo e do bispo. A torre é mais forte do que elas. [Reveja: Aula 01 – Valores das peças](Aula1.md#valores-das-pecas)

- [x] 5 pontos
- [ ] 9 pontos

    > 9 pontos é o valor da dama. A torre é mais fraca do que ela. [Reveja: Aula 01 – Valores das peças](Aula1.md#valores-das-pecas)

</div>
```

- Cada alternativa começa com **`- [ ]`**. Na alternativa **certa**, use **`- [x]`**.
- Embaixo de cada alternativa **errada**, deixe uma linha em branco e escreva o **motivo do erro** começando com `>` e com **4 espaços** antes. Coloque um link para onde o assunto foi estudado. **Não escreva a resposta certa no motivo.**
- Mantenha as linhas `<div class="quiz" markdown>` e `</div>`, com uma linha em branco depois da primeira e antes da última.
- O aluno vê o motivo quando erra e pode clicar em **Tentar novamente**.

#### Tabuleiro "encontre o melhor lance"

```html
<div class="puzzle"
     data-fen="6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1"
     data-solucao="d1d8"></div>
```

Você precisa de duas informações:

1. **A posição (`data-fen`):**
   - Monte a posição no editor de tabuleiro do Lichess: https://lichess.org/editor
   - Escolha quem joga (brancas ou pretas).
   - Copie o texto do campo **FEN**, abaixo do tabuleiro, e cole entre as aspas.
2. **A solução (`data-solucao`):** cada lance é escrito com a **casa de saída e a casa de chegada**, juntas. Exemplo: a torre que vai de d1 para d8 é `d1d8`.
   - Para exercícios com mais de um lance, separe por espaço, **alternando** o seu lance e a resposta do adversário: `b1b6 e6e7 a5a7 e7e8 b6b8`.
   - **Promoção:** acrescente a letra da peça no fim: `e7e8q` (dama), `e7e8n` (cavalo).
   - **Roque:** escreva o movimento do rei: `e1g1` (roque pequeno das brancas).

Cuidados:

- Só a linha escrita na solução é aceita. Escolha posições com **uma única** solução boa.
- O tabuleiro aparece virado para o lado de quem joga.

---

### Problemas comuns

| Problema | Causa provável | Como resolver |
| -------- | -------------- | ------------- |
| ❌ X vermelho na aba Actions | Link para um arquivo que não existe, ou erro no `mkdocs.yml` | Abra o erro (Passo 5) e leia a linha com `WARNING`. Ela diz o arquivo e o link com problema |
| A aula nova não aparece no menu | Faltou o Passo 4 | Adicione a aula no `nav:` do `mkdocs.yml` |
| Erro depois de mexer no `mkdocs.yml` | Espaços errados, Tab, ou faltou `:` | Compare com as linhas de cima e acerte os espaços (2 para módulo, 6 para aula) |
| A caixa de dica aparece como texto comum | Faltou o recuo de 4 espaços, ou faltou a linha em branco antes | Coloque 4 espaços no começo de cada linha do conteúdo |
| O texto ficou todo junto | Faltou linha em branco entre os parágrafos | Deixe uma linha vazia entre eles |
| A imagem não aparece | Nome diferente do arquivo enviado | Confira maiúsculas, acentos e a extensão (`.png`, `.jpg`) |
| A mudança não aparece no site | O site ainda está atualizando, ou o navegador guardou a versão antiga | Aguarde o ✅ na aba Actions e recarregue com **Ctrl + F5** |

Errou algo? Não se preocupe: o GitHub guarda **todas as versões** de cada arquivo. No arquivo, clique em **History** para ver as versões anteriores, ou peça ajuda ao responsável técnico.

---

## Parte 3 – Como o site funciona (parte técnica)

### Visão geral

O site é **estático** (não tem servidor nem banco de dados) e é hospedado gratuitamente no **GitHub Pages**. Ele tem duas partes:

| Parte | Endereço | Tecnologia |
| ----- | -------- | ---------- |
| Página inicial | `/SiteZacariasCampelo/` | HTML, CSS e JavaScript puros |
| Curso | `/SiteZacariasCampelo/documentacao/` | [MkDocs](https://www.mkdocs.org/) com o tema [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) |

### Estrutura de pastas

```
SiteZacariasCampelo/
├── index.html                  Página inicial (aviso, botão para o curso, rodapé)
├── css/style.css               Estilos da página inicial
├── js/Script.js                Aviso "site em testes" (lembra em localStorage que foi fechado)
├── image/                      Imagens da página inicial: fundo, escudo, favicon
│   └── redes/                  Logos das redes sociais (SVG, do Wikimedia Commons)
├── menu.bat                    Menu do Git: baixar, ver, enviar, histórico, testar (não vai para o Git)
├── Testar.bat                  Atalho para testar o curso localmente (não vai para o Git)
├── python314/                  Python 3.14 para Windows, usado pelos .bat (não vai para o Git)
├── gitportable/                Git portátil, usado pelo menu.bat (só nos computadores do instalador)
├── .env                        Usuário e token do GitHub de cada pessoa (não vai para o Git)
├── .venv/                      Ambiente virtual criado pelo Testar.bat (não vai para o Git)
├── .github/workflows/
│   └── deploy.yml              Build e publicação automática no GitHub Pages
└── CursoXadrez/
    ├── mkdocs.yml              Configuração do MkDocs: tema, extensões, menu (nav)
    ├── requirements.txt        Pacotes principais com versões fixas (usado no deploy)
    ├── requirements-lock.txt   Todos os pacotes, versões exatas (pip freeze), para os computadores
    └── docs/
        ├── *.md                Aulas, página inicial do curso e glossário
        ├── assets/             Logo, favicon e imagens das aulas
        ├── stylesheets/extra.css   Estilos extras: vídeos responsivos, quiz, tabuleiro
        └── javascripts/atividades.js   Quiz, tabuleiro interativo e progresso
```

### Publicação (deploy)

O arquivo [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) roda no GitHub Actions a cada push na branch `main`:

1. Instala o Python 3.11 e as dependências de `CursoXadrez/requirements.txt`.
2. Roda `mkdocs build --strict` dentro de `CursoXadrez/`. O `--strict` faz o build **falhar** com qualquer aviso, como um link quebrado. Assim, um erro nunca chega ao site: a versão anterior continua no ar.
3. Monta a pasta `public/`:
   - `index.html`, `css/`, `js/` e `image/` na raiz;
   - o curso gerado (`CursoXadrez/site/`) em `public/documentacao/`.
4. Publica `public/` no GitHub Pages.

O GitHub Pages precisa estar configurado com **Source: GitHub Actions** (em *Settings → Pages*).

### Testando localmente

O teste local usa **somente o Python da pasta `python314/`**, na raiz do projeto, e nunca o Python instalado no computador. A pasta `python314/` (Python 3.14 para Windows 64 bits, cerca de 69 MB), o `Testar.bat` e o `menu.bat` estão no `.gitignore`: não ficam no repositório e são distribuídos à parte pelo responsável técnico, junto com o `.env`. As dependências ficam num ambiente virtual próprio, o `.venv/`, também no `.gitignore` porque guarda caminhos do computador onde foi criado.

Para atualizar o Python no futuro: instale a nova versão com o instalador oficial de [python.org](https://www.python.org/downloads/windows/) (*Customize installation*, sem *Add python.exe to PATH*) numa pasta nova, troque `PASTA_PYTHON` no topo do `Testar.bat` e confira se todas as dependências têm versão pronta para Windows. O PyYAML, por exemplo, ainda não tem para o Python 3.15.

**Uso:** dê duplo clique em **`Testar.bat`**. Ele:

1. confere se existe `python314\python.exe` e para com uma mensagem de erro se não existir;
2. cria o `.venv` com esse Python, ou recria se o `.venv` tiver sido feito por outro Python;
3. instala no `.venv` as dependências de `CursoXadrez/requirements-lock.txt` (ou do `requirements.txt`, se o lock não existir), na primeira vez e sempre que esse arquivo mudar;
4. roda `mkdocs serve --open`, que abre o navegador em http://127.0.0.1:8000/SiteZacariasCampelo/documentacao/ e **atualiza a página sozinho** sempre que um arquivo `.md` é salvo. Para parar, feche a janela.

Observações:

- O `mkdocs serve` mostra **só o curso**. A página inicial (`index.html`) não faz parte do MkDocs.
- O `menu.bat` roda `mkdocs build --strict` antes de cada envio (opção 3), para pegar os mesmos erros que o deploy pegaria. A pasta `CursoXadrez/site/` gerada está no `.gitignore`.
- O projeto está no OneDrive. As pastas `python314/` e `.venv/` têm milhares de arquivos, e o OneDrive vai tentar sincronizá-las. Se ficar lento, mova o projeto para fora do OneDrive (por exemplo, `C:\Projetos\`).

### Menu do Git (`menu.bat`) e o arquivo `.env`

O `menu.bat` lê o login do arquivo `.env`, na raiz do projeto:

```
GITHUB_USERNAME=usuario-do-github
GITHUB_TOKEN=github_pat_...
```

- O `.env` está no `.gitignore` e **nunca** deve ser enviado ao repositório.
- **Use um token, não a senha da conta.** O GitHub não aceita a senha da conta em operações do Git desde 2021. Crie um *fine-grained personal access token* em *GitHub → Settings → Developer settings → Personal access tokens*, com acesso **só a este repositório** e permissão **Contents: Read and write**. Se ele vazar, o estrago fica limitado a este projeto. O `GITHUB_PASSWORD` só é usado se não houver `GITHUB_TOKEN`.
- O login é entregue ao Git por um ajudante temporário (`GIT_ASKPASS`) criado em `%TEMP%` e apagado ao sair. O token não é gravado no `.git/config`, no endereço do repositório nem no arquivo do ajudante. O Gerenciador de Credenciais do Windows é ignorado (`-c credential.helper=`).
- Todos os comandos chamam `git.exe` com a extensão, para nunca executar por engano outro arquivo chamado `git` que esteja na pasta atual.
- As opções também podem ser chamadas direto: `menu.bat baixar`, `menu.bat status`, `menu.bat historico`, `menu.bat enviar`, `menu.bat validar`.

O que cada opção faz:

| Opção | Comandos |
| ----- | -------- |
| 1 – Baixar | `git pull --ff-only --autostash` |
| 2 – Ver o que mudei | `git status --short` |
| 3 – Enviar | `mkdocs build --strict` → `git add -A` → `git commit -F <mensagem>` → `git pull --rebase --autostash` → `git push origin HEAD`. Se o rebase falhar, roda `git rebase --abort` e o commit fica só local |
| 4 – Histórico | `git log -n 15` |
| 5 – Testar | Abre o `Testar.bat` em outra janela |
| 6 – Actions | Abre a página do GitHub Actions no navegador |

Na primeira execução, o menu configura `user.name` (perguntando o nome) e `user.email` (o próprio usuário, se for um email, ou `usuario@users.noreply.github.com`) **neste repositório**.

### Configuração do MkDocs (`CursoXadrez/mkdocs.yml`)

- **Tema:** `material`, em português (`language: pt-BR`), com modo claro e escuro (`palette`), cores índigo e âmbar.
- **Extensões de Markdown:**

  | Extensão | Para que serve |
  | -------- | -------------- |
  | `admonition`, `pymdownx.details` | Caixas `!!!` e `???` |
  | `pymdownx.superfences` | Blocos de código dentro de listas e caixas |
  | `pymdownx.tasklist` | Listas `- [ ]` / `- [x]`, usadas também pelo quiz |
  | `pymdownx.tabbed` | Abas `===` |
  | `toc` | Sumário e endereços das seções (`#titulo-da-secao`) |
  | `def_list` | Listas de definição |
  | `attr_list` | Atributos como `{ #id }`, usados nos termos do glossário |
  | `md_in_html` | Markdown dentro de `<div markdown>`, usado pelo quiz |

- **Menu:** a lista `nav` define a ordem e os nomes das páginas no menu.
- **Arquivos extras:** `extra_css` (`stylesheets/extra.css`) e `extra_javascript` (`javascripts/atividades.js`) são carregados em todas as páginas.

### Exercícios interativos (`atividades.js`)

JavaScript puro, sem bibliotecas externas:

- **Quiz (`.quiz`):** lê a lista de tarefas gerada pelo Markdown. O `checked` marca a alternativa certa, e o `<blockquote>` de cada alternativa é o motivo do erro. A lista é trocada por botões, e há o botão "Tentar novamente".
- **Tabuleiro (`.puzzle`):** lê o FEN, desenha um tabuleiro 8×8 com botões e compara cada lance com `data-solucao`, em notação de origem e destino (UCI). Não valida as regras do xadrez, só compara com a solução. Trata roque e promoção ao aplicar os lances.
- **Progresso (`.progresso-atividades`):** salva as atividades concluídas no `localStorage`, por página. Não há envio de dados para nenhum servidor.
- Inicializa pelo `document$` do Material for MkDocs, com alternativa por `DOMContentLoaded`.

### Dependências e futuro

- As dependências ficam em dois arquivos em `CursoXadrez/`:
  - **`requirements.txt`**: só os pacotes principais (`mkdocs`, `mkdocs-material`, `pymdown-extensions`), com versões fixas. É o arquivo que você edita, e é o usado no deploy (Linux, Python 3.11).
  - **`requirements-lock.txt`**: o resultado do `pip freeze`, com **todos** os pacotes, inclusive as dependências das dependências, nas versões exatas. É usado pelo `Testar.bat` e pelo `Instalar.bat`, para todos os computadores terem o mesmo ambiente. Foi gerado no Windows com Python 3.14.
- Para atualizar: mude o `requirements.txt`, instale no `.venv` (`.venv\Scripts\python.exe -m pip install -r CursoXadrez\requirements.txt`), teste, e gere o lock de novo com `.venv\Scripts\python.exe -m pip freeze > CursoXadrez\requirements-lock.txt`. Depois copie de volta o comentário do topo do arquivo, que o `pip freeze` não mantém.
- **O Material for MkDocs deixa de receber correções em 5 de maio de 2027.** O sucessor indicado pelos autores é o [Zensical](https://zensical.org), que lê o mesmo `mkdocs.yml`. A migração deve ser testada num branch separado, com o tema `variant: classic`, antes dessa data.
