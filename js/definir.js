let contEquipos = document.querySelector('#equipos')
let contContraTodos = document.querySelector('#contraTodos')
let btnContinuar = document.querySelector('#continuar')
let btnDefinir = document.querySelector('#definirSelect')
let inputIntegrantesEquipos = document.querySelector('#integrantesEquipos')
let inputformarEquipos = document.querySelector('#formarEquipos')
let btnContinuarEquipos = document.querySelector('#continuarEquipos')

eventos()

function eventos() {
    btnContinuarEquipos.addEventListener('click',formarEquipos)
    btnContinuar.addEventListener('click',continuar)
}

function continuar() {
    if(btnDefinir.value == 'equipo'){
        document.querySelector('#definir').classList.add('desactivar')
    contEquipos.classList.add('activado')
    }else{
        document.querySelector('#definir').classList.add('desactivar')
        contContraTodos.classList.add('activado')
    }
    
}

function formarEquipos() {
 console.log(inputIntegrantesEquipos.value)
}

