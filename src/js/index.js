/*Quando o usuario clicar no card, deve mudar para o pokemon escolhido

Ideia geral: 
-ao clicar, deve mudar a condição de aberto do pokemon para fechado

-depois de mudado, deve mudar também a listagem, mostrando outro pokemon em vermelho, ou seja, ativo.

-junto disso, deve-se esconder o cartão anterior e mostrar o escolhido pelo usuário.

Para isso precisaremos de dois elementos: 
1-listagem 
2-cartao do pokemon

precisaremos também de:
-precisamos criar duas variáveis no JS para trabalhar com os elementos da tela

-precisaremos trabalhar com o evento de clique, feito pelo usuário na listagem de pokemon 

Então...

-removeremos a classe aberto só do cartão que está aberto
-ao clicar em pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar
-remover a classe ativa que marca o pokemon selecionado
-adicionar a classe ativo no item da lista selecionado
*/

//precisamos criar duas variáveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click',() => {   
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        const idPokemonSelecionado = pokemon.attributes.id.value  
        
        const idDoCartaoPokemonParaAbrir = 'cartao-' +idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')  
        
        const PokemonAtivoNaListagem = document.querySelector('.ativo')
        PokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })       
})