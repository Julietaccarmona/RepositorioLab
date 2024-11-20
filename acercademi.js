document.addEventListener('DOMContentLoaded', function () {
    const cvCompleto = document.getElementById('cv-completo');
    const botonLeerMas = document.getElementById('boton-leer-mas');
    
    if (cvCompleto && botonLeerMas) {
        botonLeerMas.addEventListener('click', function () {
            if (cvCompleto.style.display === 'none') {
                cvCompleto.style.display = 'block';
                botonLeerMas.textContent = 'Leer menos';
            } else {
                cvCompleto.style.display = 'none';
                botonLeerMas.textContent = 'Leer más';
            }
        });
    }
});
