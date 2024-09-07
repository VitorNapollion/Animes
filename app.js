
function pesquisar(){
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById('resultados-pesquisa')

    let pesquisaAnime = document.getElementById('campo-pesquisa').value

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = ''

    let resultadoEncontrado = false;

    if(pesquisaAnime == ""){
        section.innerHTML = "<p>Nenhum Titulo foi digitado! Por Favor digite um titulo de anime!</p>"
        return 
    }

    // Itera sobre os dados da pesquisa
    for (let dado of dados){
        if(dado.titulo.toLowerCase().includes(pesquisaAnime.toLowerCase()) ||
        dado.descricao.toLowerCase().includes(pesquisaAnime.toLowerCase()) || dado.tags.toLowerCase().includes(pesquisaAnime.toLowerCase())){
            resultadoEncontrado = true;
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div> 
        `}
    }
    if (!resultadoEncontrado) {
        section.innerHTML = "<p>Nenhum resultado encontrado para o título pesquisado.</p>";
    } else {

        // Atribui os resultados gerados à seção HTML
        section.innerHTML = resultados;
    }
}