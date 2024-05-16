let elemento_titulo = document.getElementById("titulo")
console.log(elemento_titulo)

let elemento_class = document.getElementsByClassName("imagem")
console.log(elemento_class)

let conteudo_titulo = elemento_titulo.innerHTML;
console.log(conteudo_titulo);

elemento_titulo.style.color = "blue"

let elemento_image = document.getElementById("imagem")

elemento_image.setAttribute('src', 'https://img.')

//Definindo manipuladores de eventos

let input_change = document.querySelector('#input_change')
const botao_click = document.querySelector('#botao_clique')
const botao_over = document.querySelector('#botao_over')

function upperCase(){
    let upperCase = input_change.value.upperCase()
}
