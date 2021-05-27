// Event liseners para obtener el boton que presiono el usuario
const opcionPiedra = document.getElementById("piedra");
const opcionPapel = document.getElementById("papel");
const opcionTijera = document.getElementById("tijera");

opcionPiedra.addEventListener("click", () => {
  const opcionUsuario = "piedra";
  imprimirResultado(opcionUsuario);
});

opcionPapel.addEventListener("click", () => {
  const opcionUsuario = "papel";
  imprimirResultado(opcionUsuario);
});

opcionTijera.addEventListener("click", () => {
  const opcionUsuario = "tijera";
  imprimirResultado(opcionUsuario);
});

// La maquina escoge una opcion aleatoriamente
const opncionMaquina = () => {
  const opciones = ["tijera", "papel", "piedra"];
  const randomNumber = Math.round(Math.random()) + Math.round(Math.random());
  return opciones[randomNumber];
};

// Algoritmo para determinar quien gana
const juego = (user, maquina) => {
  switch (true) {
    // Caso para que sea empate
    case user === maquina:
      return `Ambos eligieron ${maquina}. Empate!!`;

    // Caso que gane el usuario
    case user === "piedra" && maquina === "tijera":
      return `El usuario elige ${user} y la maquina escoge ${maquina}. Gana el usuario!!`;
    case user === "papel" && maquina === "piedra":
      return `El usuario elige ${user} y la maquina escoge ${maquina}. Gana el usuario!!`;
    case user === "tijera" && maquina === "papel":
      return `El usuario elige ${user} y la maquina escoge ${maquina}. Gana el usuario!!`;

    // Caso de que gane la maquina
    case maquina === "piedra" && user === "tijera":
      return `El usuario elige ${user} y la maquina escoge ${maquina}. Gana la maquina!!`;
    case maquina === "papel" && user === "piedra":
      return `El usuario elige ${user} y la maquina escoge ${maquina}. Gana la maquina!!`;
    case maquina === "tijera" && user === "papel":
      return `El usuario elige ${user} y la maquina escoge ${maquina}. Gana la maquina!!`;
  }
};

let puntosUser = 0,
  puntosMaquina = 0;

// Funcion para mostrar el resultado
const imprimirResultado = (data) => {
  const resultado = juego(data, opncionMaquina());

  if (resultado.includes("Gana el usuario")) puntosUser++;
  if (resultado.includes("Gana la maquina!!")) puntosMaquina++;

  document.getElementById("resultado").innerHTML = resultado;
  document.getElementById("puntosUser").innerHTML = `Usuario: ${puntosUser}`;
  document.getElementById(
    "puntosMaquina"
  ).innerHTML = `Maquina: ${puntosMaquina}`;
};
