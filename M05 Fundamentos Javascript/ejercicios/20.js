function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  switch (letra) {
    case (letra === 'a'):
      return 'Es vocal';
    case (letra === 'e'):
        return 'Es vocal';
    case (letra === 'i'):
        return 'Es vocal';
    case (letra === 'o'):
        return 'Es vocal';
    case (letra === 'u'):
        return 'Es vocal';
    default:
      return 'Dato incorrecto';
  }
}

module.exports = esVocal;
