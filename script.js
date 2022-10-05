let nombre ,apellido , userName , email , direccion  , pais 

let formulario = document.getElementById('formulario')
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    LeerData()

})

function LeerData() {
    nombre = document.getElementById('firstName').value
    apellido = document.getElementById('lastName').value
    userName = document.getElementById('username').value
    email = document.getElementById('email').value
    direccion = document.getElementById('address').value
    pais = document.getElementById('country').value

    GuardarLocalStorage( nombre ,apellido , userName , email , direccion  , pais )

}
 function GuardarLocalStorage( nombre ,apellido , userName , email , direccion  , pais ) {
    localStorage.setItem('Nombre', nombre)
    localStorage.setItem('apellido', apellido)
    localStorage.setItem('userName', userName)
    localStorage.setItem('email', email)
    localStorage.setItem('address', address)
    localStorage.setItem('pais', pais)
    


    ExtraerData()
}
function ExtraerData(){
    let nom = localStorage.getItem('Nombre', nom)
    alert('Bienvenido',nom)}

   