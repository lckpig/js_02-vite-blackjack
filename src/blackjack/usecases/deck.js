import _ from 'underscore';

// DECK
/**
 * Crea un nuevo Deck y lo devuelve Mezclado.
 * * Comentario 1 resaltado con "Better Comments"
 * * Comentario 2 resaltado con "Better Comments"
 * ! CUIDADO CON ESTE METODO
 * ? Duda sobre este METODO
 * TODO falta implementar algo en este METODO
 * comentario normal sin "Better Comments"
 * 
 * @param {Array<string>} cardTypes - Los palos de las cartas. Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} specialCards - Los caracteres de las cartas Especiales. Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} El nuevo Deck ya Mezclado
*/
export const createDeck = ( cardTypes, specialCards ) => {

	// SI ESTUVIERAMOS EN TYPESCRIPT NO SERIA NECESARIO AÑADIR ESTOS ERRORES
	if( !cardTypes || cardTypes.length === 0 ) throw new Error( 'cardTypes es un string[] obligatorio' );
	if( !specialCards || specialCards.length === 0 ) throw new Error( 'specialCards es  un string[] obligatorio' );

	let deck = [];
	for( let i = 2; i <= 10; i++ ) {
		for( let cardType of cardTypes ) {
			deck.push( `${i + cardType}` );
		}
	}
	for( const specialCard of specialCards ) {
		for( let cardType of cardTypes ) {
			deck.push( `${specialCard + cardType}` );
		}
	}
	deck = _.shuffle( deck );

	return deck;
}