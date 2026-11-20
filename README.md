# 🌱 Raízes do Amanhã — Site Institucional de ONG

> Projeto desenvolvido para a disciplina de **Introdução à Computação**.
>
> O site apresenta uma organização social e suas iniciativas voltadas ao desenvolvimento de crianças e da comunidade.

---

## 📋 Sobre o Projeto

O **Raízes do Amanhã** é um site institucional desenvolvido com **HTML, CSS e JavaScript**. O objetivo é apresentar uma organização social, divulgar seus projetos e mostrar formas pelas quais as pessoas podem conhecer o trabalho realizado e contribuir com a iniciativa.

A página foi organizada em seções para facilitar a navegação e reunir as principais informações em um único lugar. O visual utiliza imagens, textos, cards e áreas de interação, com adaptação para diferentes tamanhos de tela.

Além da apresentação institucional, foram implementadas funcionalidades interativas utilizando JavaScript, incluindo uma calculadora de impacto das doações, um formulário de voluntariado com validação dos dados e integração com a API ViaCEP, além de um mapa interativo utilizando Leaflet.

---

## 🗂️ Estrutura do Projeto

```text
raizes-do-amanha/
│
├── index.html                 # Estrutura e conteúdo da página
├── style.css                  # Estilos e responsividade
├── README.md                  # Documentação do projeto
│
├── js/
│   ├── script.js              # Interações gerais da página
│   ├── doacao.js              # Calculadora de impacto das doações
│   ├── formulario.js          # Validação e consulta à API ViaCEP
│   └── mapa.js                # Inicialização do mapa interativo
│
└── imagens/
    ├── hero.png               # Imagem principal da página
    ├── projeto-educacao.jpg   # Imagem do projeto de educação
    ├── projeto-cultura.jpg    # Imagem do projeto de cultura
    ├── projeto-esporte.jpg    # Imagem do projeto de esporte
    └── ...                    # Outras imagens utilizadas no site
```

---

## 🚀 Seções e Funcionalidades

### 🎨 Apresentação visual

- Layout organizado com cabeçalho, menu de navegação e rodapé.
- Cards para apresentar os projetos sociais.
- Imagens distribuídas entre a seção principal, projetos e galeria.
- Estilos definidos em um arquivo CSS separado do HTML.
- Classes com nomes relacionados ao conteúdo de cada seção.
- Comentários no CSS para facilitar a organização e manutenção.

### 📱 Responsividade

O CSS inclui ajustes para telas menores, reorganizando os elementos para que a página continue legível e utilizável em computadores, tablets e celulares.

O menu de navegação também possui interatividade para facilitar o acesso às seções em dispositivos móveis.

### 💰 Calculadora de Impacto das Doações

**Arquivo responsável:** `js/doacao.js`

Foi desenvolvida uma calculadora interativa para demonstrar como diferentes valores de doação podem contribuir com as atividades da organização.

**Como funciona:**

1. O usuário seleciona um valor de doação entre as opções disponíveis ou informa um valor personalizado.
2. O JavaScript captura o valor selecionado.
3. A função de cálculo determina a quantidade estimada de kits escolares correspondente à contribuição.
4. A interface atualiza automaticamente a quantidade de kits e o valor total da doação.
5. O botão selecionado recebe um destaque visual.

O cálculo utiliza a seguinte regra demonstrativa:

**Quantidade de kits = valor da doação ÷ 5**, considerando apenas a parte inteira do resultado.

Por exemplo, uma contribuição de R$ 50,00 representa aproximadamente 10 kits escolares.

**Observação:** os valores utilizados são ilustrativos e não representam necessariamente os custos reais dos materiais ou uma transação financeira.

### 🤝 Formulário de Voluntariado

**Arquivo responsável:** `js/formulario.js`

Foi desenvolvido um formulário para que pessoas interessadas possam demonstrar interesse em participar das atividades da organização.

O formulário solicita informações como nome completo, e-mail, telefone, endereço, área de interesse e motivação para participar do projeto.

**Validação com JavaScript:**

- Verificação dos campos obrigatórios.
- Validação do formato do e-mail.
- Verificação da quantidade de dígitos do telefone.
- Validação do formato do CEP.
- Exibição de mensagens de erro para orientar o preenchimento.
- Utilização de eventos como `input`, `change` e `submit`.

As validações permitem identificar informações inválidas antes de prosseguir com o formulário.

### 📍 Integração com a API ViaCEP

O formulário de voluntariado utiliza a **API ViaCEP** para consultar informações de endereço a partir do CEP informado.

**Como funciona:**

1. O usuário informa o CEP.
2. O JavaScript remove caracteres não numéricos e verifica se existem exatamente oito dígitos.
3. Uma requisição HTTP é realizada utilizando `fetch()`.
4. A resposta JSON é convertida em um objeto JavaScript.
5. Os dados retornados são utilizados para preencher automaticamente os campos de logradouro, bairro, cidade e estado.
6. Caso o CEP seja inválido, não seja encontrado ou ocorra uma falha na consulta, uma mensagem de erro é apresentada.

**Exemplo de endpoint:**

`https://viacep.com.br/ws/01001000/json/`

Documentação: https://viacep.com.br/

### 🗺️ Mapa Interativo

**Arquivo responsável:** `js/mapa.js`

Foi adicionada uma seção com mapa interativo para apresentar visualmente os locais relacionados às atividades da organização.

O mapa utiliza a biblioteca **Leaflet**, em conjunto com dados cartográficos do **OpenStreetMap**.

**Funcionalidades:**

- Visualização de um mapa navegável.
- Aproximação e afastamento utilizando controles de zoom.
- Movimentação pelo mapa.
- Exibição de marcadores geográficos.
- Apresentação de informações ao clicar nos marcadores.

Os pontos apresentados podem ser configurados por meio de coordenadas geográficas no arquivo JavaScript.

Documentação do Leaflet: https://leafletjs.com/

OpenStreetMap: https://www.openstreetmap.org/

### 🧭 Interatividade da Navegação

**Arquivo responsável:** `js/script.js`

O JavaScript também é utilizado para controlar comportamentos interativos da página, incluindo a abertura e o fechamento do menu de navegação em dispositivos móveis.

Essa funcionalidade permite melhorar a experiência de navegação em telas menores.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Utilização |
|---|---|
| `HTML5` | Organização do conteúdo e estrutura da página. |
| `CSS3` | Estilização, layout, cores e responsividade. |
| `JavaScript` | Eventos, validações e atualização dinâmica da interface. |
| `Fetch API` | Realização de requisições HTTP. |
| `ViaCEP` | Consulta e preenchimento automático de endereços. |
| `Leaflet` | Implementação do mapa interativo. |
| `OpenStreetMap` | Fornecimento dos dados cartográficos do mapa. |

O projeto não exige instalação de dependências por meio de gerenciadores de pacotes.

Entretanto, é necessária uma conexão com a internet para consultar a API ViaCEP e carregar os recursos externos do mapa.

---

## ▶️ Como Executar

**1. Baixe ou clone o projeto.**

Se o projeto estiver em um repositório Git, utilize:

```bash
git clone URL_DO_REPOSITORIO
cd raizes-do-amanha
```

Substitua `URL_DO_REPOSITORIO` pelo endereço correto do repositório.

**2. Abra o projeto no Visual Studio Code.**

Recomenda-se utilizar a extensão **Live Server** para executar o site em um servidor local.

**3. Inicie a aplicação.**

Abra o arquivo `index.html` utilizando o Live Server.

**4. Teste as funcionalidades.**

- Navegue pelas seções e teste o menu responsivo.
- Selecione valores na calculadora de doações.
- Preencha os campos do formulário de voluntariado.
- Informe um CEP válido para testar o preenchimento automático.
- Interaja com o mapa utilizando os controles e marcadores.

**5. Confira os arquivos do projeto.**

Mantenha as pastas `js/` e `imagens/` nos caminhos utilizados pelo HTML para garantir o funcionamento dos scripts e a exibição das imagens.

---

## 📁 Organização do Código

- **`index.html`:** contém as seções, textos, links, formulários e elementos da página.
- **`style.css`:** concentra os estilos visuais, estados de validação e regras de responsividade.
- **`js/script.js`:** controla as interações gerais da página.
- **`js/doacao.js`:** realiza os cálculos e atualiza os resultados da calculadora de doações.
- **`js/formulario.js`:** contém a lógica de validação e integração com a API ViaCEP.
- **`js/mapa.js`:** configura o mapa interativo e seus marcadores.
- **`imagens/`:** armazena os arquivos de imagem utilizados no site.

A separação das funcionalidades em arquivos JavaScript específicos facilita a leitura, manutenção e organização do código.

---

## 📌 Observações

- O site foi desenvolvido com finalidade acadêmica.
- A calculadora de doações utiliza valores ilustrativos e não realiza pagamentos.
- A consulta de CEP depende da disponibilidade da API ViaCEP e de uma conexão com a internet.
- O mapa depende do carregamento da biblioteca Leaflet e dos recursos cartográficos externos.
- Os textos e elementos apresentados possuem finalidade de demonstração acadêmica.

---

*Projeto desenvolvido com fins acadêmicos para a disciplina de Introdução à Computação.*