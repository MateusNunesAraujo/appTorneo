const usuario = 'usu';
const pass = 'cod';

let inputUsuario = document.querySelector('#usuario')
let inputPass = document.querySelector('#pass')
let btnContinuar = document.querySelector('#continuar')

eventos()

function eventos(){
btnContinuar.addEventListener('click',continuar)
}

function continuar() {
    if(inputUsuario.value == usuario && inputPass.value == pass){
        document.querySelector('.spiner').classList.add('activado')
        setTimeout(() => {
            document.querySelector('.spiner').classList.remove('activado')
            window.location.href = './template/definir.html'
        }, 3000);
    }else{
        comprobacion(inputUsuario,'usu')
    comprobacion(inputPass,'pass')
 
    }
}

function comprobacion(html,valor) {
    if(html.value != valor){
        document.querySelector(`#${valor}-error`).classList.add('activado')
        setTimeout(() => {
            document.querySelector(`#${valor}-error`).classList.remove('activado')
        }, 3000);
    }
}
