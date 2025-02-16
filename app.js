let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor ingrese un nombre válido.');
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = '';
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista está vacía. Agregue nombres para realizar el sorteo.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: ${amigoSeleccionado}`;
}

function reiniciarSorteo() {
    amigos = [];
    actualizarLista();
    document.getElementById('resultado').innerHTML = '';
}
