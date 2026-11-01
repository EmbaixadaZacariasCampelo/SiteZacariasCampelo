# Esse Arquivo servirá como explicação / Exemplo de como adicionar aulas no site

---

## 1. Instalando

O primeiro passo passo para criar os materiais é baixar os arquiivos de site:

1. Baixes os o arquivo .zip enviado a voce
2. de 2 cliques em **Instalador.bat**
3. Aguarde a instalação

!!! tip "Atalho"
    Será criado um atalho na area de trabalho (tela inincial) abra essa pasta

---

## 2. Como o site funciona

Agora que voce já tem os arquivos do site salvos em sua maquina, voce precisa entender como ele funciona:

Basicamente temos uma página inicial (home), que atualmente não tem nada a não ser a foto do indio e um botão: acessar curso de Xadrez (não precisa mexer nessa parte)

o que realmente interresa é a pasta **CursoXadrez** nela temos a seguinte estrutura:

```
CursoXadrez/
├── mkdocs.yml        ← configuração do curso, incluindo o MENU
└── docs/
    ├── index.md      ← "Início" Quando voce abre o curso é a "boas-vindas"
    ├── Aula1.md      ← Página da Aula 01
    ├── Aula2.md      ← Página da Aula 02
```

!!! info
    Aqui que voce deve editar/adicionar os arquivos para editar/adicionar as aulas

Os arquivo são salvos em formato marckdonw. Isso é um arquivo de texto com formtação simples que funciona em praticamente todos os dispositivos

---

## 3. Editando uma aula

Para editar uma aula basta abrir o o arquivo da aula, por exemplo: `Aula3.md` e editar como achar melhor **No final do documento tem um guia de como formatar esses arquivo** ([ir para o guia](#7-guia-de-formatacao))

Após editar, voce vai querer ver como ficou o documento da aula, para isso salve o arquivo `Aula3.md` (que voce acabou de mexer), abra o arquivo **Menu.bat** e digite **5**. Abrirá no google o site do curso com as alterçoes (o legal é que voce pode ver em tempo real as ediçoes)

!!! warning "Atenção"
    Mas isso está rodando locamente no seu pc, voce ainda não subiu o site (só voce consegue ver as alteraçoes), para isso voce precisa colocar as alterçoes no git hub

---

## 4. Enviando as alterações para o site

Veja como fazer isso:

1. Feche a janela do teste do site (a janela preta que abriu com a opção 5).
2. Abra o **Menu.bat** digite **3** (*Enviar minhas alteracoes para o site*).
3. O menu mostra a lista dos arquivos que você alterou e **confere se o site não tem erros**.
    - Se aparecer *"O site tem erros e o deploy vai FALHAR"*, leia a linha com `WARNING` logo acima: ela diz o arquivo e o problema. Corrija e tente de novo.
4. Escreva em poucas palavras o que você mudou (por exemplo: `Adiciona exercícios na Aula 3`) e aperte **Enter**.
5. Para confirmar, digite **S** e aperte **Enter**.
6. Aparece *"Enviado! O site sera atualizado em 2 a 3 minutos."*


---

## 5. Conferindo se o site foi atualizado

1. No Menu, digite **6**. Abre no navegador a página de publicação do GitHub.
2. A primeira linha da lista é o seu envio:
    - 🟡 **Bolinha amarela:** o site está sendo atualizado. Aguarde.
    - ✅ **Visto verde:** pronto! Abra o [site](https://embaixadazacariascampelo.github.io/SiteZacariasCampelo/)
     e confira. Se não vir a mudança, recarregue com **Ctrl + F5**.
    - ❌ **X vermelho:** deu erro, e o site antigo continua no ar. Chame o responsável técnico.

---

## 6. Antes de começar a trabalhar (sempre)

Eu também posso ter editado o curso. Antes de mexer em qualquer aula, abra o **Menu** e digite **1** (*Baixar atualizacoes do GitHub*). Assim você trabalha na versão mais recente.

??? question "Como criar uma aula nova?"
    1. Na pasta `CursoXadrez\docs`, crie um arquivo novo seguindo o padrão: `Aula6.md`, `Aula7.md`... (sem espaços e sem acentos).
    2. Comece o arquivo com o título: `# Aula 06 – Nome da aula`.
    3. Abra o arquivo `CursoXadrez\mkdocs.yml` e, no fim dele (parte `nav:`), acrescente a aula no módulo certo, por exemplo:

        ```yaml
          - Módulo 2 (Reconhecendo padrões):
              - Aula 06 – Mates conhecidos: Aula6.md
        ```

    4. **Cuidado com os espaços:** o módulo começa com **2 espaços** e a aula com **6 espaços**. Use a barra de espaço, nunca a tecla Tab.
    5. Teste com a opção **5** do Menu e envie com a opção **3**.

---

## 7. Guia de formatação

Você não vai precisar formatar tudo na mão, não se preucupe em decorar tudo, vou fazer um arquivo exemplo de como pedir para o claudinho formatar, isso é só para que voce tenha um noção

[Veja arquivo de Exemplo](ExemploPrompt.md)

### Títulos
Para criar um titulo coloque um "#" e espaço tudo que escrever depois fica em formato de titulo (letra grande)

O legal é criar uma Hieraquia de titulo por exemplo Exemplo: 
```markdown
# Título 1 - Título da aula (na primeira linha)
## Titulo 2 - Secção da aula
### Subseção
#### tópico
```
o resultado ficarica assim
# Título 1 - Título da aula (na primeira linha)
## Titulo 2 - Secção da aula
### Subseção
#### tópico

---
---

### Destaques
Para colocar um texto em negrito coloque ele entre dois asteristicos, em italico entre um asteristico


| Você escreve | Aparece no site |
| ------------ | --------------- |
| `**negrito**` | **negrito** |
| `*itálico*` | *itálico* |

### Listas

```markdown
Como voce escreve: 

- Item com bolinha
- Outro item
    - Subitem (4 espaços antes do -)

1. Item numerado
2. Segundo item
```
Resultado: 
- Item com bolinha
- Outro item
    - Subitem (4 espaços antes do -)

1. Item numerado
2. Segundo item


### Links

```markdown
[Texto que voce quer que aparela](link que voce ser direcionado)
```

### Imagens

Coloque a imagem na pasta `CursoXadrez\docs\assets` (nome sem espaços e sem acentos) e escreva:

```markdown
![Descrição do que a imagem mostra](assets/nome-do-arquivo-da-imagem.png)
```

### Caixas de destaque

```markdown
!!! tip "Dica"
    O texto da caixa começa com 4 espaços.
```

Tipos: `note`, `info`, `tip`, `success`, `question`, `warning`, `danger`, `example`, `quote`. Trocando `!!!` por `???`, a caixa só abre ao clicar (bom para respostas):

```markdown
??? success "Ver resposta"
    A resposta fica escondida até o aluno clicar.
```

### Vídeos do YouTube

Copie o código que aparece depois de `v=` no endereço do vídeo e troque no bloco abaixo:

```html
<div align="center">

<iframe
width="720"
height="405"
src="https://www.youtube.com/embed/CODIGO-DO-VIDEO"
title="Nome do vídeo"
frameborder="0"
allowfullscreen>
</iframe>

</div>
```

### Tabelas

```markdown
| Peça   | Valor |
| ------ | ----- |
| Peão   | 1     |
| Cavalo | 3     |
```

### Exercícios interativos

Para quiz de múltipla escolha e tabuleiro "encontre o melhor lance", veja os exemplos prontos na página [Testes Exercicios – Exercícios exemplo](Testeatividade.md). No fim dela há um bloco **"Para professores"** explicando como criar cada um.

!!! note "Guia completo"
    O passo a passo completo, com todos os recursos e uma tabela de problemas comuns, está no arquivo `README.md`, na pasta principal do projeto.


