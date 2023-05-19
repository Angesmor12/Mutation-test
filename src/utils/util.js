
// Verifica si la cadena de ADN está en un formato apto.

function verify(chain){

    result = true;

    if (chain.dna.length !== 6){
        return false;
    }

    for(let i = 0; i < chain.dna.length; i++){

    let divide = chain.dna[i]
    let letters = divide.split("")
    
    // Verifica si cada array tiene 6 caracteres.
    if (divide.length !== 6){
        return false;
    }

    // Verifica si cada array no tiene caracteres diferentes a 'A-T-C-G'.
    for (j = 0; j < letters.length; j++){

        Upper = letters[j].toUpperCase()

        if (Upper !== 'A' && Upper !== 'T' && Upper !== 'C' && Upper !== 'G'){
            return false;
        }}}

    return result
}

// Verifica si se encuentra mutación en la cadena de ADN.

function hasMutation(info) {
    const dna = info.dna;
  
    // Verifica las repeticiones diagonales.
    for (let i = 0; i < dna.length; i++) {
      const currentSequence = dna[i];
  
      for (let j = 0; j < currentSequence.length; j++) {
        const currentChar = currentSequence[j];
  
        // Comprueba las diagonales hacia abajo y hacia la derecha.
        if (i + 3 < dna.length && j + 3 < currentSequence.length) {
          const diagonalSequence = [
            dna[i][j],dna[i + 1][j + 1],dna[i + 2][j + 2],dna[i + 3][j + 3]
          ];
          if (diagonalSequence.every(char => char === currentChar)) {
            return true;
          }}
  
        // Comprueba las diagonales hacia arriba y hacia la derecha.
        if (i - 3 >= 0 && j + 3 < currentSequence.length) {
          const diagonalSequence = [
            dna[i][j],
            dna[i - 1][j + 1],
            dna[i - 2][j + 2],
            dna[i - 3][j + 3]
          ];
          if (diagonalSequence.every(char => char === currentChar)) {
            return true;
          }
        }
        
        // Comprueba las repeticiones horizontales.
        if (j + 3 < currentSequence.length) {
          const horizontalSequence = [
            currentSequence[j],
            currentSequence[j + 1],
            currentSequence[j + 2],
            currentSequence[j + 3]
          ];
  
          if (horizontalSequence.every(char => char === currentChar)) {
            return true;
          }
        }
      }
    }
  
    // Comprueba las repeticiones verticales.
    for (let j = 0; j < dna[0].length; j++) {
      for (let i = 0; i < dna.length - 3; i++) {
        const verticalSequence = [
          dna[i][j],
          dna[i + 1][j],
          dna[i + 2][j],
          dna[i + 3][j]
        ];
  
        const currentChar = dna[i][j];
  
        if (verticalSequence.every(char => char === currentChar)) {
          return true;}}}
  
    return false;
  }

module.exports = {verify, hasMutation}