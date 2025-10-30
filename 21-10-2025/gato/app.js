const tableroEl = document.getElementById('tablero');
const mensajeEl = document.getElementById('mensaje');
const turnoEl = document.getElementById('turno');
const reiniciarBtn = document.getElementById('reiniciar');
const seleccionEl = document.getElementById('seleccion');
const juegoEl = document.getElementById('juego');
const btnX = document.getElementById('btnX');
const btnO = document.getElementById('btnO');

let tablero = Array(9).fill(null);
let turno = 'X';
let terminado = false;
let jugadorInicial = null; // quién eligió primero

const lineasGanadoras = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

// --- selección de jugador ---
btnX.addEventListener('click', () => iniciarJuego('X'));
btnO.addEventListener('click', () => iniciarJuego('O'));

function iniciarJuego(simbolo) {
  jugadorInicial = simbolo;
  turno = simbolo;
  seleccionEl.classList.add('oculto');
  juegoEl.classList.remove('oculto');
  actualizarUI();
}

// --- lógica del juego ---
function actualizarUI() {
  const celdas = tableroEl.querySelectorAll('.celda');
  celdas.forEach((celda, i) => {
    const valor = tablero[i];
    celda.textContent = valor ? valor : '';
    celda.className = 'celda';
    if (valor) celda.classList.add(valor.toLowerCase());
  });
  turnoEl.textContent = terminado ? 'Juego terminado' : `Turno: ${turno}`;
}

function comprobarGanador() {
  for (const [a,b,c] of lineasGanadoras) {
    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      return tablero[a];
    }
  }
  return null;
}

function comprobarEmpate() {
  return tablero.every(celda => celda !== null);
}

tableroEl.addEventListener('click', e => {
  if (terminado) return;
  const celda = e.target.closest('.celda');
  if (!celda) return;
  const index = Number(celda.dataset.index);
  if (tablero[index]) return;

  tablero[index] = turno;
  const ganador = comprobarGanador();

  if (ganador) {
    terminado = true;
    mensajeEl.textContent = `¡Ganador: ${ganador}!`;
  } else if (comprobarEmpate()) {
    terminado = true;
    mensajeEl.textContent = 'Empate';
  } else {
    turno = turno === 'X' ? 'O' : 'X';
  }

  actualizarUI();
});

reiniciarBtn.addEventListener('click', () => {
  tablero = Array(9).fill(null);
  turno = jugadorInicial || 'X';
  terminado = false;
  mensajeEl.textContent = '';
  actualizarUI();
});

// Estado inicial: solo selección visible
juegoEl.classList.add('oculto');
