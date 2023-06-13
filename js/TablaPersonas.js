function mostrarPersonas() {
    let personas = [];
    let localPersonas = localStorage.getItem("personas");
    if (localPersonas) {
      personas = JSON.parse(localPersonas);
    }
    const tablapersonas = document.getElementById("tabla-personas");
    const cuerpoTabla = tablapersonas.getElementsByTagName("tbody")[0];
    personas.forEach((persona) => {
      let fila = cuerpoTabla.insertRow();
      let celdaNombrePersonas = fila.insertCell();
      let celdaApellidopPersonas = fila.insertCell();
      let celdaCorreoContacto = fila.insertCell();
      let celdaNumeroCedulaPersonas = fila.insertCell();
      let CeldaEdad = fila.insertCell();
      let celdaTelefonoPersonas = fila.insertCell();
      let celdaEspecialidaPersonas = fila.insertCell();
  
      celdaNombrePersonas.textContent = persona.nombre;
      celdaApellidopPersonas.textContent = persona.apellido;
      celdaCorreoContacto.textContent = persona.correo;
      CeldaEdad.textContent = persona.edad;
      celdaNumeroCedulaPersonas.textContent = persona.cedula;
      celdaTelefonoPersonas.textContent = persona.telefono;
      celdaEspecialidaPersonas.textContent = persona.especialidad;
    });
  }
  mostrarPersonas();
  
  