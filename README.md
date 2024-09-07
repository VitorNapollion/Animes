# Projeto Animes VT - Imersão Dev com Google Gemini

Este é um projeto simples de uma página web dedicada a informações sobre animes populares. Ele permite que os usuários pesquisem por animes utilizando palavras-chave relacionadas ao título, descrição ou tags e exibam os resultados na tela com detalhes sobre cada anime listado.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página, com seções como cabeçalho, corpo e rodapé.
- **CSS**: Utilizado para estilização e layout do conteúdo, como formatação de texto e disposição dos resultados.
- **JavaScript**: Responsável pela lógica da pesquisa, manipulação de dados, e exibição dinâmica dos resultados na página.

## Estrutura do Projeto

### 1. HTML
- O arquivo HTML é a base da estrutura da página, contendo:
  - **Cabeçalho** com o título do projeto.
  - **Campo de pesquisa** para o usuário digitar o nome de um anime e iniciar a busca.
  - **Seção de Resultados** onde os resultados da pesquisa serão exibidos dinamicamente.
  - **Rodapé** simples com informações do projeto.

### 2. CSS
- Um arquivo `style.css` para definir o layout e a aparência da página, como cores, tamanhos de fonte e posicionamento dos elementos.

### 3. JavaScript
- Dois scripts são utilizados:
  - **`dados.js`**: Contém um array com os dados dos animes, incluindo título, descrição, gênero, autor, ano de lançamento, tags e links para mais informações.
  - **`app.js`**: Responsável por controlar a pesquisa e exibir os resultados. Ele coleta a entrada do usuário, busca os dados no array e apresenta os animes que correspondem à pesquisa.

## Como Funciona

1. O usuário digita o nome ou uma palavra-chave no campo de pesquisa.
2. O botão "Pesquisar" aciona uma função em JavaScript que procura pelos animes correspondentes no array de dados.
3. Se o anime for encontrado, suas informações são exibidas dinamicamente na página, incluindo título, descrição e um link para mais detalhes.
4. Caso não seja encontrado, uma mensagem informando que "Nenhum resultado foi encontrado" é exibida.

## Como Rodar o Projeto

1. Faça o download ou clone o repositório para sua máquina.
2. Certifique-se de que os arquivos HTML, CSS e JavaScript estão no mesmo diretório.
3. Abra o arquivo `index.html` em um navegador da web.
