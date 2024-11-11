// Selección de los campos del formulario
const nombreInput = document.getElementById('POST-name');
const apellidoInput = document.getElementById('POST-apellido');
const emailInput = document.getElementById('POST-Email');
const telefonoInput = document.getElementById('POST-Telefono');
const edadInput = document.getElementById('POST-edad');
const direccionInput = document.getElementById('POST-direccion');
const provinciaInput = document.getElementById('POST-provincia');

// Selección de los elementos de la tabla para actualizar
const nombreCelda = document.getElementById('nombreCelda');
const apellidoCelda = document.getElementById('apellidoCelda');
const emailCelda = document.getElementById('emailCelda');
const telefonoCelda = document.getElementById('telefonoCelda');
const edadCelda = document.getElementById('edadCelda');
const direccionCelda = document.getElementById('direccionCelda');
const provinciaCelda = document.getElementById('provinciaCelda');

// Actualización automática de cada campo del formulario en la tabla
nombreInput.addEventListener('input', () => { nombreCelda.textContent = nombreInput.value; });
apellidoInput.addEventListener('input', () => { apellidoCelda.textContent = apellidoInput.value; });
emailInput.addEventListener('input', () => { emailCelda.textContent = emailInput.value; });
telefonoInput.addEventListener('input', () => { telefonoCelda.textContent = telefonoInput.value; });
edadInput.addEventListener('input', () => { edadCelda.textContent = edadInput.value; });
direccionInput.addEventListener('input', () => { direccionCelda.textContent = direccionInput.value; });
provinciaInput.addEventListener('input', () => { provinciaCelda.textContent = provinciaInput.value; });

// Método preferido de contacto (radio buttons)
document.querySelectorAll('input[name="MetodoPreferidoDeContacto"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const metodoSeleccionado = document.querySelector('input[name="MetodoPreferidoDeContacto"]:checked').nextSibling.textContent.trim();
        document.getElementById('metodoCelda').textContent = metodoSeleccionado;
    });
});

// Tipo de suscripción (checkboxes)
document.querySelectorAll('input[name="suscripcion[]"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const suscripciones = Array.from(document.querySelectorAll('input[name="suscripcion[]"]:checked')).map(cb => cb.nextSibling.textContent.trim());
        document.getElementById('suscripcionCelda').textContent = suscripciones.join(', ');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Acceder al botón y al CV completo
    const cvCompleto = document.getElementById('cv-completo');
    const botonLeerMas = document.getElementById('boton-leer-mas');
    
    // Asegurarse de que el botón y el CV están disponibles
    if (cvCompleto && botonLeerMas) {
      botonLeerMas.addEventListener('click', function() {
        // Cambiar la visibilidad del CV completo
        if (cvCompleto.style.display === 'none') {
          cvCompleto.style.display = 'block';  // Mostrar el CV
          botonLeerMas.textContent = 'Leer menos';  // Cambiar texto del botón
        } else {
          cvCompleto.style.display = 'none';  // Ocultar el CV
          botonLeerMas.textContent = 'Leer más';  // Cambiar texto del botón
        }
      });
    }
  });
  