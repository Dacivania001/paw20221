// ####### INTRODUÇÃO A JAVASCRIPT #######

// ####### VARIAVEIS E TIPOS DE DADOS (let e const)

// Let cria uma variavel que pode ter seu valor alterado e const cria uma variavel constante
var nome = "Rafael luz araujo"
let idade = 29
const salario = 1000.5
let listaDeEstudantes = ['Alex', 'Jean','Valdizar','Vanessa']

// alert e console.log

// alert("minha mensagem")
console.log(nome)


// ####### OPERAÇÕES MATEMÁTICAS

let n1 = 10
let n2 = 20

let soma = n1 + n2 


// ####### Estrutura Condicional (IF)

if (soma > 10){
    console.log('maior')
} else {
    console.log('menor')
}
    


// ####### Estrutura de repetição 
    // FOR

    // for para percorrer uma lista de itens
    for( let estudante in listaDeEstudantes){
        console.log(listaDeEstudantes[estudante])
    }

    // for para fazer um laço de tamanho determinado
    // for (let i = 0; i <=5; i++){
    //     console.log(i)
    // }


    // WHILE

    console.log("------------- while")
    let contador = 0
    while(contador <=5){
        console.log(contador)
        contador +=1
    }
        


// ####### DOM (Modelo de Objeto de Documento)
    // document.getElementById("IdDoElemento")
    // document.querySelector("Elemento");

// O Javascript mapeia todos os elementos html em objetos que podem ser manipulados
// Quando um elemento possui um id, podemos chamar ele pelo seu id diretamente e fazer alguma ação, como alterar seu conteúdo:
userName.textContent = "Shara Lorranny"

// Alterar o conteudo de um elemento (textContent)


// ####### EVENTOS
    // onclick, onmouseover, etc...
// ####### FUNÇÕES

    // function nomeDaFuncao(let argumentos){
    //     // code
    // }

    // chamar a função
    // nomeDaFuncao()

    // Alterar cor

    function changeColor(textColor){
        userName.style.color = textColor
    }

    
    // Função para mostrar alert, sendo chamada com um clique de botão

    function CliqueOnclick (){
        alert("GitHub")
    }


//Arrow functions 
    // argumentos => {
    // }

    // (arg1, arg2) => {
    // }

    // () => {
    // }

// ####### CONSUMINDO API DO GITHUB (api.github.com)

function getProfileInfosGitHub(){
    const url = `https://api.github.com/users/rafaluz`  
    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userAvatar.src = data.avatar_url
     })
}

getProfileInfosGitHub()

