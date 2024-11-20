document.addEventListener('DOMContentLoaded', () => {
    const cartas = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'
    ];

    let cartasVolteadas = [];
    let emparejadas = [];
    let intentos = 0;

    // Mezclar las cartas
    cartas.sort(() => 0.5 - Math.random());

    const tablero = document.getElementById('tablero');
    const mensaje = document.getElementById('mensaje');

    // Crear las cartas en el tablero
    cartas.forEach((carta, index) => {
        const cartaElemento = document.createElement('div');
        cartaElemento.classList.add('carta');
        cartaElemento.dataset.valor = carta;
        cartaElemento.dataset.index = index;
        cartaElemento.addEventListener('click', voltearCarta);
        tablero.appendChild(cartaElemento);
    });

    function voltearCarta(event) {
        const carta = event.target;

        // Evitar que se volteen más de 2 cartas
        if (carta.classList.contains('flipped') || cartasVolteadas.length === 2) {
            return;
        }

        // Voltear la carta
        carta.textContent = carta.dataset.valor;
        carta.classList.add('flipped');
        cartasVolteadas.push(carta);

        if (cartasVolteadas.length === 2) {
            intentos++;
            comprobarEmparejamiento();
        }
    }

    function comprobarEmparejamiento() {
        const [carta1, carta2] = cartasVolteadas;

        if (carta1.dataset.valor === carta2.dataset.valor) {
            emparejadas.push(carta1.dataset.valor);
            cartasVolteadas = [];
            if (emparejadas.length === cartas.length / 2) {
                mensaje.textContent = `¡Felicidades! Has ganado el juego en ${intentos} intentos.`;
            }
        } else {
            // Si no son iguales, esperar 1 segundo y luego volverlas a voltear
            setTimeout(() => {
                carta1.textContent = '';
                carta2.textContent = '';
                carta1.classList.remove('flipped');
                carta2.classList.remove('flipped');
                cartasVolteadas = [];
            }, 1000);
        }
    }
});

