// Datos formulario
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const cedula = document.getElementById("cedula");
const edad = document.getElementById("edad");
const telefono = document.getElementById("telefono");
const especialidad = document.getElementById("especialidad");
const correo = document.getElementById("correo");
const formularioRegistro = document.getElementById("registro-personas");
// Creacion del objeto
formularioRegistro.addEventListener("submit", function (event) {
  event.preventDefault();
  const persona = {
    nombre: nombre.value,
    apellido: apellido.value,
    cedula: cedula.value,
    edad: edad.value,
    telefono: telefono.value,
    especialidad: especialidad.value,
    correo: correo.value,
  };
  // Creacion del Json
  let personas = [];
  let localPersonas = localStorage.getItem("personas");
  if (localPersonas) {
    personas = JSON.parse(localPersonas);
  }
  personas.push(persona);
  localStorage.setItem("personas", JSON.stringify(personas));
  formularioRegistro.reset();
  alert("Persona registrada correctamente!!!");});
