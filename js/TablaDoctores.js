function mostrarDoctores() {
    let Doctores = [];
    let localDoctores = localStorage.getItem("doctores");
    if (localDoctores) {
      Doctores = JSON.parse(localDoctores);
    }
    const tablaDoctores = document.getElementById("tabla-doctores");
    const cuerpoTabla = tablaDoctores.getElementsByTagName("tbody")[0];
    Doctores.forEach((doctor) => {
      let fila = cuerpoTabla.insertRow();
      let celdaNombreDoctores = fila.insertCell();
      let celdaApellidopDoctores = fila.insertCell();
      let celdaNumeroCedulaDoctores = fila.insertCell();
      let celdaEspecialidaDoctores = fila.insertCell();
      let celdaConsultorioDoctores = fila.insertCell();
      let celdaCorreoContacto = fila.insertCell();
      
      
  
      celdaNombreDoctores.textContent = doctor.nombreDoc;
      celdaApellidopDoctores.textContent = doctor.apellidoDoc;
      celdaNumeroCedulaDoctores.textContent = doctor.cedulaDoc;
      celdaEspecialidaDoctores.textContent = doctor.especialidadDoc;
      celdaConsultorioDoctores.textContent = doctor.consultorioDoc;
      celdaCorreoContacto.textContent = doctor.correoDoc;
     
    });
  }
  mostrarDoctores();
  