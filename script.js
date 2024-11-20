// Selección de los campos del formulario
const nombreInput = document.getElementById('POST-name');
const apellidoInput = document.getElementById('POST-apellido');
const emailInput = document.getElementById('POST-Email');
const telefonoInput = document.getElementById('POST-Telefono');
const edadInput = document.getElementById('POST-edad');
const direccionInput = document.getElementById('POST-direccion');
const provinciaInput = document.getElementById('POST-provincia');
const codigoPostalInput = document.getElementById('POST-codigoPostal');

// Selección de los elementos de la tabla para actualizar
const nombreCelda = document.getElementById('nombreCelda');
const apellidoCelda = document.getElementById('apellidoCelda');
const emailCelda = document.getElementById('emailCelda');
const telefonoCelda = document.getElementById('telefonoCelda');
const edadCelda = document.getElementById('edadCelda');
const direccionCelda = document.getElementById('direccionCelda');
const provinciaCelda = document.getElementById('provinciaCelda');
const codigoPostalCelda = document.getElementById('codigoPostalCelda');

// Actualización automática de cada campo del formulario en la tabla
nombreInput.addEventListener('input', () => { nombreCelda.textContent = nombreInput.value; });
apellidoInput.addEventListener('input', () => { apellidoCelda.textContent = apellidoInput.value; });
emailInput.addEventListener('input', () => { emailCelda.textContent = emailInput.value; });
telefonoInput.addEventListener('input', () => { telefonoCelda.textContent = telefonoInput.value; });
edadInput.addEventListener('input', () => { edadCelda.textContent = edadInput.value; });
direccionInput.addEventListener('input', () => { direccionCelda.textContent = direccionInput.value; });
provinciaInput.addEventListener('input', () => { provinciaCelda.textContent = provinciaInput.value; });
codigoPostalInput.addEventListener('input', () => { codigoPostalCelda.textContent = codigoPostalInput.value; });

// Método preferido de contacto (radio buttons)
document.querySelectorAll('input[name="MetodoPreferidoDeContacto"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const metodoSeleccionado = document.querySelector('input[name="MetodoPreferidoDeContacto"]:checked').labels[0].textContent.trim();
        document.getElementById('metodoCelda').textContent = metodoSeleccionado;
    });
});

// Tipo de suscripción (checkboxes)
document.querySelectorAll('input[name="suscripcion[]"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const suscripciones = Array.from(document.querySelectorAll('input[name="suscripcion[]"]:checked')).map(cb => cb.labels[0].textContent.trim());
        document.getElementById('suscripcionCelda').textContent = suscripciones.join(', ');
    });
});

  