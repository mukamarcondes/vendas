function exibePaginaInicial(){
    Esportes.style.display = 'none';
    certificações.style.display = 'none';
    contatos.style.display = 'none';
    PaginaInicial.style.display = 'flex';
    console.log("teste")
}
function exibeContatos(){
    PaginaInicial.style.display = 'none';
    certificações.style.display = 'none';
    Esportes.style.display = 'none';
    contatos.style.display = 'grid';
}
function exibeCertificacoes(){
    PaginaInicial.style.display = 'none';
    contatos.style.display = 'none';
    Esportes.style.display = 'none';
    certificações.style.display = 'grid';
}
function exibeEsportes(){
    PaginaInicial.style.display = 'none';
    contatos.style.display = 'none';
    certificações.style.display = 'none';
    Esportes.style.display = 'flex';
}

let $PaginaInicial = document.querySelector('#PaginaInicial');
let PaginaInicial = document.querySelector('.PaginaInicial');
PaginaInicial.addEventListener('click', exibePaginaInicial());

// // let $contatos = document.querySelector('#contatos');
let contatos = document.querySelector('.contatos');
// // contatos.addEventListener('click', exibeContatos);

// let $certificações = document.querySelector('#certificações');
let certificações = document.querySelector('.certificações');
// certificações.addEventListener('click', exibeCertificacoes);

let $Esportes = document.querySelector('#Esportes');
let Esportes = document.querySelector('.Esportes');
Esportes.addEventListener('click', exibeEsportes);

// let el = document.getElementById('box');
// let elCoordenadas = el.getBoundingClientRect();

function menu() {
    var nav = document.getElementById("nav")
    nav.classList.toggle("active")
}
