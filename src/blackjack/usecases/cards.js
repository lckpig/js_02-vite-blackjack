

// CARDS
/**
 * Retira una carta del deck y la devuelve.
 * @param {Array<string>} deck - Arreglo de cartas disponibles en el deck.
 * @returns {string} La carta seleccionada.
 * @throws {Error} Si no hay cartas en el deck.
 */
export const pickCard = ( deck ) => {
	if( !deck || deck.length === 0 )
		throw ( 'No hay cartas en el deck' );
	return deck.pop();
}

/**
 * Crea un elemento HTML de tipo imagen representando una carta.
 * @param {string} card - La carta a representar (por ejemplo, "10H" para diez de corazones).
 * @param {boolean} turnoPlayer - Indica si es el turno del jugador.
 * @returns {HTMLImageElement} Elemento de imagen que representa la carta.
 */
export const cardCreateImage = ( card, turnoPlayer ) => {
	const newCardImage = document.createElement( 'img' );
	newCardImage.src = `assets/cartas/${card}.png`;
	newCardImage.classList.add( 'carta' );

	return newCardImage;
}

/**
 * Calcula el valor de una carta de blackjack.
 * @param {string} card - La carta cuyo valor debe calcularse (por ejemplo, "10H" para diez de corazones).
 * @returns {number} El valor de la carta. Los valores son 2-10 para cartas numéricas, 10 para J, Q, K, y 11 para A.
 */
export const cardCalculateValue = ( card ) => {
	const value = card.substring( 0, card.length - 1 );
	return isNaN( value ) ?
		( value === 'A' ) ? 11 : 10
		: value * 1;
}

